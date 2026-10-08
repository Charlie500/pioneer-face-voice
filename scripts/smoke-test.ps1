param([string]$BaseUrl = 'http://127.0.0.1:4173', [switch]$Chat)
$ErrorActionPreference = 'Stop'
$BaseUrl = $BaseUrl.TrimEnd('/')
$Status = Invoke-RestMethod "$BaseUrl/api/status"
Write-Host 'Local server: OK'
foreach ($Asset in @('/assets/face/color.jpg', '/assets/face/depth.jpg', '/assets/audio/c_hello.mp3')) {
  $Response = Invoke-WebRequest "$BaseUrl$Asset" -UseBasicParsing
  if ($Response.StatusCode -ne 200) { throw "Asset unavailable: $Asset" }
  Write-Host "Asset: OK $Asset"
}
Write-Host "Chat configured: $($Status.chatConfigured); transcription configured: $($Status.transcriptionConfigured)"
if ($Chat) {
  if (-not $Status.chatConfigured) { throw 'Save the model URL and model name in the UI first.' }
  $Payload = @{ messages = @(@{ role = 'user'; content = 'Reply in Chinese with one short sentence: hello.' }) } | ConvertTo-Json -Depth 5
  $Reply = Invoke-RestMethod "$BaseUrl/api/chat" -Method Post -ContentType 'application/json; charset=utf-8' -Body ([Text.Encoding]::UTF8.GetBytes($Payload))
  if (-not $Reply.reply) { throw 'No reply from the configured model.' }
  Write-Host "Model reply: $($Reply.reply)"
} else { Write-Host 'No model inference requested. Use -Chat on Windows for the real model check.' }
