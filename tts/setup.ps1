param(
  [ValidateSet('auto', 'cpu', 'cuda')][string]$Device = 'auto',
  [ValidateSet('cu128', 'cu124')][string]$CudaVariant = 'cu128'
)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
Set-Location $projectRoot
if (-not (Get-Command py -ErrorAction SilentlyContinue)) { throw 'Install Python 3.12 with the Python launcher first.' }
& py -3.12 --version
if ($LASTEXITCODE -ne 0) { throw 'Python 3.12 is required. Install it from python.org.' }
$gpuTool = Get-Command nvidia-smi -ErrorAction SilentlyContinue
if ($gpuTool) {
  Write-Host 'Detected GPU (name and memory in MiB):'
  & nvidia-smi --query-gpu=name,memory.total --format=csv,noheader
}
if ($Device -eq 'auto') { $Device = if ($gpuTool) { 'cuda' } else { 'cpu' } }
Write-Host "Installing $Device runtime. Qwen model weights download only when start.ps1 is run."
& py -3.12 -m venv .venv-tts
if ($LASTEXITCODE -ne 0) { throw 'Could not create the isolated Python environment.' }
$ttsPython = Join-Path $projectRoot '.venv-tts/Scripts/python.exe'
& $ttsPython -m pip install --upgrade pip
if ($LASTEXITCODE -ne 0) { throw 'pip setup failed.' }
$wheelSource = if ($Device -eq 'cuda') { "https://download.pytorch.org/whl/$CudaVariant" } else { 'https://download.pytorch.org/whl/cpu' }
$torchVersion = if ($Device -eq 'cuda' -and $CudaVariant -eq 'cu124') { '2.6.0' } else { '2.7.0' }
& $ttsPython -m pip install "torch==$torchVersion" "torchaudio==$torchVersion" --index-url $wheelSource
if ($LASTEXITCODE -ne 0) { throw 'Torch installation failed; retry with -Device cpu if CUDA is unavailable.' }
& $ttsPython -m pip install -r tts/requirements.txt
if ($LASTEXITCODE -ne 0) { throw 'TTS dependencies failed to install.' }
& $ttsPython -c "import torch; print('CUDA usable:', torch.cuda.is_available()); print('GPU:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'CPU'); print('GPU memory GB:', round(torch.cuda.get_device_properties(0).total_memory/2**30, 1) if torch.cuda.is_available() else 0)"
if ($LASTEXITCODE -ne 0) { throw 'Runtime check failed.' }
Write-Host 'Choose 0.6B first; 1.7B is optional with more GPU memory. CPU may be too slow for conversational speech.'
Write-Host 'Next: ./tts/start.ps1 -ModelSize 0.6B (or 1.7B). This starts the actual model and downloads weights on first use.'
