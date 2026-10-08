"""Optional local reference-voice service. Run in Python 3.12 on the Windows model computer.

The official Qwen convenience API returns complete waveforms. The web app requests
short sentences as text arrives; this service does not claim audio-token streaming.
"""
import argparse
import asyncio
from contextlib import asynccontextmanager
import hmac
import io
import os
from pathlib import Path

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import Response
from pydantic import BaseModel, Field

DEFAULT_MODEL = "Qwen/Qwen3-TTS-12Hz-0.6B-Base"
DEFAULT_REFERENCE = Path(__file__).resolve().parents[1] / "assets/audio/pioneer-reference.wav"
DEFAULT_TRANSCRIPT = "We're about to go on a journey of digital self discovery, we hope you're prepared to pioneer."


class SpeechRequest(BaseModel):
    model: str
    input: str = Field(min_length=1, max_length=4000)
    voice: str = "pioneer"
    response_format: str = "wav"
    language: str = "Chinese"


class QwenEngine:
    def __init__(self, model_id, reference, ref_text, device="auto", x_vector_only=False, voice="pioneer"):
        # Heavy dependencies and model downloads happen only when the user starts this service.
        import numpy as np
        import soundfile as sf
        import torch
        from qwen_tts import Qwen3TTSModel

        if device == "auto":
            device = "cuda:0" if torch.cuda.is_available() else "cpu"
        if device.startswith("cuda") and not torch.cuda.is_available():
            raise RuntimeError("CUDA is unavailable. Install the CUDA wheels or start with -Device cpu.")
        reference = Path(reference).resolve()
        if not reference.is_file():
            raise ValueError("Reference audio does not exist.")
        audio, rate = sf.read(reference, dtype="float32")
        if audio.ndim == 2:
            audio = audio.mean(axis=1)
        if len(audio) < rate * 3 or len(audio) > rate * 30 or not np.isfinite(audio).all():
            raise ValueError("Use a clean, finite 3-30 second reference WAV.")
        if not x_vector_only and not ref_text.strip():
            raise ValueError("Supply the exact reference transcript, or use --x-vector-only.")
        dtype = torch.float32 if device == "cpu" else (torch.bfloat16 if torch.cuda.is_bf16_supported() else torch.float16)
        self.model_id, self.voice = model_id, voice
        self.hardware = {"device": device, "logical_cores": os.cpu_count(), "cuda_available": torch.cuda.is_available()}
        if device.startswith("cuda"):
            self.hardware.update(gpu=torch.cuda.get_device_name(0), gpu_memory_gb=round(torch.cuda.get_device_properties(0).total_memory / 2**30, 1))
        print(f"Loading {model_id} on {device}. First launch may download model weights.", flush=True)
        self.model = Qwen3TTSModel.from_pretrained(model_id, device_map=device, dtype=dtype, attn_implementation="sdpa")
        self.prompt = self.model.create_voice_clone_prompt(ref_audio=(audio, rate), ref_text=ref_text or None, x_vector_only_mode=x_vector_only)
        print("Reference voice ready. Actual similarity and latency require a listening test.", flush=True)

    def render(self, text, language):
        import soundfile as sf
        wavs, rate = self.model.generate_voice_clone(text=text, language=language, voice_clone_prompt=self.prompt)
        output = io.BytesIO()
        sf.write(output, wavs[0], rate, format="WAV", subtype="PCM_16")
        return output.getvalue()


def create_app(engine, api_key=""):
    """Accept an injected engine so protocol/cancellation tests need no GPU or weights."""
    jobs = set()
    lock = asyncio.Semaphore(1)

    @asynccontextmanager
    async def lifespan(app):
        yield
        if jobs:
            await asyncio.gather(*list(jobs), return_exceptions=True)

    app = FastAPI(title="Pioneer reference voice", lifespan=lifespan)

    def authorize(request):
        if api_key and not hmac.compare_digest(request.headers.get("authorization", ""), f"Bearer {api_key}"):
            raise HTTPException(401, "Speech service authorization required.")

    @app.get("/v1/models")
    async def models(request: Request):
        authorize(request)
        return {"object": "list", "data": [{"id": engine.model_id, "object": "model", "owned_by": "local"}], "voice": engine.voice, "hardware": engine.hardware}

    async def render_locked(body, abandoned):
        async with lock:
            if abandoned.is_set():
                return None  # An interrupted sentence must not spend GPU time waiting in the queue.
            # Do not cancel this thread or release the lock early: Torch may still be running.
            return await asyncio.to_thread(engine.render, body.input.strip(), body.language)

    def release_job(task):
        jobs.discard(task)
        if not task.cancelled():
            task.exception()  # Consume late failures from requests whose client disconnected.

    @app.post("/v1/audio/speech")
    async def speech(body: SpeechRequest, request: Request):
        authorize(request)
        if body.model != engine.model_id or body.voice != engine.voice:
            raise HTTPException(400, "Select the loaded model and reference voice from /v1/models.")
        if body.response_format != "wav" or body.language not in ("Chinese", "English", "Auto") or not body.input.strip():
            raise HTTPException(400, "Use nonempty text, WAV output and Chinese/English/Auto language.")
        abandoned = asyncio.Event()
        task = asyncio.create_task(render_locked(body, abandoned))
        jobs.add(task)
        task.add_done_callback(release_job)
        try:
            while not task.done():
                if await request.is_disconnected():
                    abandoned.set()
                    return Response(status_code=499)
                await asyncio.wait({task}, timeout=0.1)
            try:
                audio = task.result()
            except Exception:
                # Inference errors can contain private filesystem paths; keep them server-side.
                import traceback
                traceback.print_exc()
                raise HTTPException(500, "Speech generation failed. Check the local TTS terminal.") from None
            return Response(audio, media_type="audio/wav", headers={"Cache-Control": "no-store", "X-Content-Type-Options": "nosniff"})
        except asyncio.CancelledError:
            abandoned.set()
            raise

    return app


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--model", default=DEFAULT_MODEL)
    parser.add_argument("--reference", default=str(DEFAULT_REFERENCE))
    parser.add_argument("--ref-text", default=None)
    parser.add_argument("--x-vector-only", action="store_true")
    parser.add_argument("--voice", default="pioneer")
    parser.add_argument("--device", default="auto", choices=("auto", "cpu", "cuda:0"))
    parser.add_argument("--port", default=8090, type=int)
    args = parser.parse_args()
    reference = Path(args.reference).resolve()
    ref_text = args.ref_text if args.ref_text is not None else (DEFAULT_TRANSCRIPT if reference == DEFAULT_REFERENCE.resolve() else "")
    engine = QwenEngine(args.model, reference, ref_text, args.device, args.x_vector_only, args.voice)
    import uvicorn
    # Localhost only. Node proxies the service without requiring browser CORS or exposing keys.
    uvicorn.run(create_app(engine, os.environ.get("TTS_API_KEY", "")), host="127.0.0.1", port=args.port)


if __name__ == "__main__":
    main()
