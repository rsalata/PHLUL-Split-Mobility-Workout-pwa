# 🚨 QUICK FIX: Static Screen Issue

If your app loads but dropdowns don't change anything:

## Step 1: Run the Diagnostic Page

1. Make sure your local server is running
2. Go to: **http://localhost:8080/diagnostic.html**
3. Look for RED error messages

## Step 2: Apply the Fix

### If you see "workout-data.js NOT LOADED" or "workout-app.js NOT LOADED":

**The files are missing or in the wrong location!**

✅ **Fix:** Make sure ALL these files are in the SAME folder:
```
your-folder/
├── index.html
├── diagnostic.html
├── workout-data.js ← REQUIRED!
├── workout-app.js  ← REQUIRED!
├── sw.js
├── manifest.webmanifest
├── test-local.sh (or .bat)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

### If you see "Old shoulder program still loaded - cache issue":

**Your browser is showing cached (old) content!**

✅ **Fix Option 1 (Easiest):**
- Click "Clear Cache & Reload" button on the diagnostic page

✅ **Fix Option 2:**
- Open in **Incognito/Private mode**

✅ **Fix Option 3:**
- In Chrome: F12 → Application → Clear Storage → "Clear site data"
- Then hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

## Step 3: Verify the Fix

1. Go back to: **http://localhost:8080**
2. Click the **Program dropdown** → Select "Mobility Routines"
3. Click the **Routine dropdown** → Select "20-Min Rehab Split"
4. You should see:
   - ─── DAY 1: RESET & RANGE ───
   - ─── DAY 2: STRENGTH & TOLERANCE ───
   - ─── DAY 3: DYNAMIC RE-INTEGRATION ───

## Still Not Working?

### Check the browser console:
1. Press F12 (or Cmd+Option+I on Mac)
2. Click "Console" tab
3. Look for any RED errors
4. Common errors:
   - **404 errors** = Files are missing or wrong path
   - **CORS errors** = You need to use a local server (python, etc.)
   - **Syntax errors** = File corruption during download

### Try these steps:
1. **Stop the server** (Ctrl+C in terminal)
2. **Re-download** ALL the files to a fresh folder
3. **Verify** all 9 files are present (8 files + icons folder)
4. **Start server again**: `python3 -m http.server 8080`
5. **Use Incognito mode** to avoid any cache

### File checklist:
- [ ] index.html (8 KB)
- [ ] workout-data.js (29 KB) ← Critical!
- [ ] workout-app.js (23 KB) ← Critical!
- [ ] sw.js (918 bytes)
- [ ] manifest.webmanifest (496 bytes)
- [ ] diagnostic.html
- [ ] icons/icon-192.png
- [ ] icons/icon-512.png

## Need More Help?

If diagnostic.html shows all GREEN checkmarks but the main app still doesn't work:
1. Take a screenshot of the diagnostic page
2. Take a screenshot of browser console (F12 → Console)
3. List which browser and version you're using

The issue is almost always:
- Missing JavaScript files (workout-data.js or workout-app.js)
- Browser cache showing old version
- Files not in the correct folder structure
