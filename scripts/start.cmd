@echo off
setlocal
cd /d "%~dp0.."
where node >nul 2>nul
if errorlevel 1 (
  echo Install Node.js 22 or newer from nodejs.org, then reopen this window.
  pause
  exit /b 1
)
node -e "if (Number(process.versions.node.split('.')[0]) < 22) process.exit(1)"
if errorlevel 1 (
  echo Node.js 22 or newer is required.
  pause
  exit /b 1
)
echo Open http://127.0.0.1:4173/ in Chrome or Edge.
node server.mjs
pause
