# Local Testing Guide

Test your updated workout app locally before deploying to GitHub Pages.

## Quick Start

### Method 1: Python HTTP Server (Recommended)

**Mac/Linux:**
1. Open Terminal
2. Navigate to the folder containing your app files:
   ```bash
   cd /path/to/your/workout-app-folder
   ```
3. Run:
   ```bash
   python3 -m http.server 8080
   ```
   Or use the provided script:
   ```bash
   chmod +x test-local.sh
   ./test-local.sh
   ```

**Windows:**
1. Open Command Prompt or PowerShell
2. Navigate to the folder:
   ```cmd
   cd C:\path\to\your\workout-app-folder
   ```
3. Run:
   ```cmd
   python -m http.server 8080
   ```
   Or double-click `test-local.bat`

4. Open your browser and go to: **http://localhost:8080**

### Method 2: VS Code Live Server

If you use Visual Studio Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Method 3: Node.js http-server

If you have Node.js installed:
```bash
npx http-server -p 8080
```

## Testing Your Changes

1. **Access the local app** at http://localhost:8080
2. **Navigate to Mobility Routines** program
3. **Select "20-Min Rehab Split"** from the dropdown
4. **Verify** the new 3-day program displays correctly:
   - Day 1: Reset & Range
   - Day 2: Strength & Tolerance
   - Day 3: Dynamic Re-Integration

## Testing PWA Features

To test the PWA functionality (service worker, offline mode):

1. **Open Chrome DevTools** (F12)
2. Go to **Application** tab → **Service Workers**
3. Check "Update on reload" for testing
4. Refresh the page
5. Verify service worker is registered

## Important Notes

### Different Storage
- Local test uses **different localStorage** than your GitHub Pages app
- Your live app data won't be affected
- Test data won't transfer to live app

### Service Worker Cache
If testing service worker:
- Use **Incognito/Private mode** for clean testing
- Or clear cache between tests:
  - DevTools → Application → Clear Storage → "Clear site data"

### Port Already in Use?
If port 8080 is busy, use a different port:
```bash
python3 -m http.server 8888
```
Then access: http://localhost:8888

## After Testing

When satisfied with changes:
1. Stop the local server (Ctrl+C)
2. Upload files to GitHub repository
3. Wait for GitHub Pages to rebuild (~1-2 minutes)
4. Clear cache and reload your live app

## Comparing Side-by-Side

Want to compare old vs new?
1. Keep your **live app** open in one browser tab
2. Open **local test** (http://localhost:8080) in another tab
3. Compare the programs side-by-side

## Troubleshooting

**Dropdowns work but nothing changes? (Static screen)**
This means the JavaScript files aren't loading:
1. Open **http://localhost:8080/diagnostic.html** in your browser
2. Check which files are missing (red errors)
3. Make sure ALL files are in the same folder
4. If you see "cache issue", click "Clear Cache & Reload" on the diagnostic page
5. Try **Incognito/Private mode** to avoid cache issues

**Python not found?**
- Install Python from python.org
- Or use VS Code Live Server instead

**Files not loading?**
- Make sure you're in the correct folder with all files
- Check that `workout-data.js` and `workout-app.js` are present

**Service worker errors?**
- Use Incognito mode
- Or disable service worker in DevTools during testing

**Still seeing old content?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or clear browser cache
