param([int]$Port = 4173, [switch]$OpenBrowser)
$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent $PSScriptRoot
Push-Location $ProjectRoot
try {
  if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Install Node.js 22 or newer from nodejs.org.' }
  $NodeVersion = & node -p 'process.versions.node'
  if ([int]($NodeVersion.Split('.')[0]) -lt 22) { throw 'Node.js 22 or newer is required.' }
  $PreviewUrl = "http://127.0.0.1:$Port/"
  Write-Host "Face preview: $PreviewUrl"
  if ($OpenBrowser) { Start-Process $PreviewUrl }
  & node server.mjs --port $Port
  if ($LASTEXITCODE -ne 0) { throw 'Preview server exited with an error.' }
} finally { Pop-Location }
