"""Protocol and queue tests; fake engine, no Torch/Qwen weights or real voice."""
import asyncio
import threading
import unittest

import httpx
from server import create_app


class FakeEngine:
    model_id = "fixture-model"
    voice = "pioneer"
    hardware = {"device": "fixture"}

    def __init__(self):
        self.calls = []
        self.started = threading.Event()
        self.release = threading.Event()

    def render(self, text, language):
        self.calls.append((text, language))
        if text == "blocked":
            self.started.set()
            if not self.release.wait(3):
                raise RuntimeError("Test gate timed out")
        return b"RIFF\x04\x00\x00\x00WAVE"


def payload(text="Hello", **kwargs):
    return {"model": "fixture-model", "input": text, "voice": "pioneer", "response_format": "wav", **kwargs}


class SpeechServiceTests(unittest.IsolatedAsyncioTestCase):
    async def test_authorization_validation_and_wav(self):
        engine = FakeEngine()
        async with httpx.AsyncClient(transport=httpx.ASGITransport(app=create_app(engine, "fixture-key")), base_url="http://fixture") as client:
            self.assertEqual((await client.get("/v1/models")).status_code, 401)
            client.headers["Authorization"] = "Bearer fixture-key"
            models = (await client.get("/v1/models")).json()
            self.assertEqual(models["data"][0]["id"], "fixture-model")
            response = await client.post("/v1/audio/speech", json=payload(language="English"))
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.headers["content-type"], "audio/wav")
            self.assertEqual(response.content[:4], b"RIFF")
            self.assertEqual(engine.calls, [("Hello", "English")])
            for invalid in (payload(model="wrong"), payload(voice="wrong"), payload(response_format="mp3"), payload(language="French"), payload("   ")):
                self.assertEqual((await client.post("/v1/audio/speech", json=invalid)).status_code, 400)
            self.assertEqual((await client.post("/v1/audio/speech", json=payload("x" * 4001))).status_code, 422)
            self.assertEqual(len(engine.calls), 1)

    async def test_interrupt_skips_queued_work_and_retains_active_inference_lock(self):
        engine = FakeEngine()
        async with httpx.AsyncClient(transport=httpx.ASGITransport(app=create_app(engine)), base_url="http://fixture") as client:
            first = asyncio.create_task(client.post("/v1/audio/speech", json=payload("blocked")))
            self.assertTrue(await asyncio.to_thread(engine.started.wait, 2))
            queued = asyncio.create_task(client.post("/v1/audio/speech", json=payload("obsolete")))
            await asyncio.sleep(0.02)
            queued.cancel()
            with self.assertRaises(asyncio.CancelledError):
                await queued
            first.cancel()
            with self.assertRaises(asyncio.CancelledError):
                await first
            next_turn = asyncio.create_task(client.post("/v1/audio/speech", json=payload("new turn")))
            await asyncio.sleep(0.02)
            self.assertEqual(engine.calls, [("blocked", "Chinese")])
            engine.release.set()
            self.assertEqual((await asyncio.wait_for(next_turn, 2)).status_code, 200)
            self.assertEqual(engine.calls, [("blocked", "Chinese"), ("new turn", "Chinese")])


if __name__ == "__main__":
    unittest.main()
