param(
  [ValidateSet('0.6B', '1.7B')][string]$ModelSize = '0.6B',
  [ValidateSet('auto', 'cpu', 'cuda:0')][string]$Device = 'auto',
  [string]$ModelPath = '',
  [string]$Reference = '',
  [string]$ReferenceText = '',
  [switch]$XVectorOnly,
  [int]$Port = 8090
)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
Set-Location $projectRoot
$ttsPython = Join-Path $projectRoot '.venv-tts/Scripts/python.exe'
if (-not (Test-Path $ttsPython)) { throw 'Run ./tts/setup.ps1 first.' }
$modelId = if ($ModelPath) { $ModelPath } else { "Qwen/Qwen3-TTS-12Hz-$ModelSize-Base" }
$ttsArgs = @('tts/server.py', '--model', $modelId, '--device', $Device, '--port', "$Port")
if ($Reference) { $ttsArgs += @('--reference', $Reference) }
if ($ReferenceText) { $ttsArgs += @('--ref-text', $ReferenceText) }
if ($XVectorOnly) { $ttsArgs += '--x-vector-only' }
Write-Host 'Keep this terminal running. In the web app select reference voice, read models, then audition.'
& $ttsPython @ttsArgs
if ($LASTEXITCODE -ne 0) { throw 'TTS service stopped with an error. Review this terminal output.' }
