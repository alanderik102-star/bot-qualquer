$env:Path += ";C:\Program Files\Git\bin"

Write-Host "Removendo commit do banco que trava..." -ForegroundColor Yellow
git reset --soft HEAD~2

Write-Host "Removendo arquivo .db do stage..." -ForegroundColor Cyan
git restore --staged data/database.db
git restore data/database.db

Write-Host "Adicionando apenas o layout..." -ForegroundColor Green
git add src/webhook/landingPage.js

Write-Host "Commit do layout..." -ForegroundColor Magenta
git commit -m "feat: New GAMER layout - FiveM/FF/Cheats theme with neon green/red effects"

Write-Host "Push..." -ForegroundColor Cyan
git push origin main --force-with-lease

Write-Host ""
Write-Host "Concluido!" -ForegroundColor Green
