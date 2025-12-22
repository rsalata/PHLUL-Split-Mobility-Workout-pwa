# Deployment Guide

## Issue: Dropdowns Not Working? 

If your app loads but the dropdowns don't change anything, it's likely because **some files are missing**. Make sure ALL files are uploaded!

## Required Files for GitHub Pages

Your repository must include ALL of these files:

```
your-repo/
├── index.html              ← Main HTML file
├── workout-data.js         ← Program data (REQUIRED!)
├── workout-app.js          ← App logic (REQUIRED!)
├── sw.js                   ← Service worker (REQUIRED!)
├── manifest.webmanifest    ← PWA manifest
├── README.md               ← Documentation
└── icons/
    ├── icon-192.png        ← App icon 192x192
    └── icon-512.png        ← App icon 512x512
```

## GitHub Pages Deployment Steps

### 1. Upload ALL Files
Make sure you upload **every single file** from the outputs folder, including:
- ✅ `index.html`
- ✅ `workout-data.js` ← Often forgotten!
- ✅ `workout-app.js` ← Often forgotten!
- ✅ `sw.js` ← Often forgotten!
- ✅ `manifest.webmanifest`
- ✅ `icons/` folder with both PNG files

### 2. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select branch: `main` (or `master`)
5. Select folder: `/ (root)`
6. Click "Save"

### 3. Wait for Deployment
- GitHub will build and deploy your site (takes 1-2 minutes)
- You'll see a green checkmark when it's ready
- Your site will be at: `https://yourusername.github.io/your-repo-name/`

### 4. Clear Browser Cache
After deploying updates:
1. Open your site in the browser
2. Open Developer Tools (F12)
3. Right-click the refresh button
4. Select "Empty Cache and Hard Reload"

## Troubleshooting

### Dropdowns Don't Work
**Problem**: Page loads but dropdowns are static
**Solution**: You're missing the JavaScript files! Upload `workout-data.js` and `workout-app.js`

### Console Errors
**Problem**: Browser console shows "Failed to fetch" or "404" errors
**Solution**: Check that ALL files are uploaded, especially the JavaScript files

### Service Worker Errors
**Problem**: Console shows "sw.js not found"
**Solution**: Upload the `sw.js` file to your repository root

### Old Version Still Showing
**Problem**: You updated files but old version still shows
**Solution**: 
1. Clear your browser cache (Ctrl+Shift+Delete)
2. Do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Or open in incognito/private mode

## Verifying Deployment

Open your deployed site and check:
1. ✅ Can you see the workout display area (not just info cards)?
2. ✅ Do the Program dropdown options work?
3. ✅ Do the Week/Routine dropdowns change content?
4. ✅ Can you fill in weights/reps fields?
5. ✅ Does the timer work?

If ANY of these don't work, you're missing files!

## Quick Checklist

Before saying "it's deployed":
- [ ] All 5 main files uploaded (HTML + 2 JS + SW + manifest)
- [ ] Icons folder with 2 PNG files uploaded
- [ ] GitHub Pages is enabled in settings
- [ ] Green checkmark shows successful deployment
- [ ] Tested in browser with hard refresh
- [ ] Dropdowns actually change the content
- [ ] Can input data and it saves

## Need Help?

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for any red errors
4. Check Network tab to see which files are 404 (not found)
5. Upload the missing files!
