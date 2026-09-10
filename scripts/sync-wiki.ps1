# sync-wiki.ps1 — run locally to push latest wiki data to GitHub
# Usage: .\scripts\sync-wiki.ps1

$WIKI = "C:\Users\Mike\Documents\Fred\Fred\wiki"
$REPO = "C:\Users\Mike\fred-dashboard"

# Copy portfolio files
Write-Host "Syncing portfolios..."
Copy-Item "$WIKI\finance\paper-trading\Paper Trading Portfolio.md" "$REPO\data\portfolios\p1.md" -Force
Copy-Item "$WIKI\finance\portfolio-overview.md"                    "$REPO\data\portfolios\equity.md" -Force

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
