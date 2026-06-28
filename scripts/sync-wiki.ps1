# sync-wiki.ps1 — run locally to push latest wiki data to GitHub
# Usage: .\scripts\sync-wiki.ps1

$WIKI = "C:\Users\Mike\Documents\Fred\Fred\wiki"
$TASKS_SRC = "C:\Users\Mike\.claude\scheduled-tasks"
$REPO = "C:\Users\Mike\fred-dashboard"

# Copy portfolio files
Write-Host "Syncing portfolios..."
Copy-Item "$WIKI\finance\paper-trading\Paper Trading Portfolio.md" "$REPO\data\portfolios\p1.md" -Force
Copy-Item "$WIKI\finance\paper-trading-vol\portfolio.md"           "$REPO\data\portfolios\p2.md" -Force
Copy-Item "$WIKI\finance\portfolio-overview.md"                    "$REPO\data\portfolios\equity.md" -Force

# Rebuild tasks.json from SKILL.md files
Write-Host "Rebuilding tasks.json..."
$tasks = Get-ChildItem $TASKS_SRC -Directory | ForEach-Object {
  $skill = Get-Content "$($_.FullName)\SKILL.md" -Raw -ErrorAction SilentlyContinue
  $firstLine = ($skill -split "`n" | Where-Object { $_.Trim() } | Select-Object -First 1) -replace '^#+\s*', ''
  @{ id = $_.Name; description = $firstLine.Trim(); prompt = $skill }
}
$tasks | ConvertTo-Json -Depth 5 | Out-File "$REPO\data\tasks.json" -Encoding utf8

# Commit and push
Set-Location $REPO
git add data/
git diff --staged --quiet
if ($LASTEXITCODE -ne 0) {
  $date = Get-Date -Format "yyyy-MM-dd HH:mm"
  git commit -m "sync: wiki data update $date"
  git push
  Write-Host "Pushed to GitHub — Vercel will redeploy automatically."
} else {
  Write-Host "No changes to sync."
}
