# Deployment Guide - Complete Workout Programs

## ✅ What's Included

Your workout tracker now has **5 complete workout programs** from your spreadsheet:

1. **PHLUL Split** - 4-day Power/Hypertrophy program
2. **6-8 Week Rehab Roadmap** - Shoulder & spine rehabilitation
3. **5/3/1 Classic** - Jim Wendler's strength program
4. **Convict Conditioning** - Progressive bodyweight training
5. **Mobility Routines** - Dynamic warm-ups and injury prevention

## Issue: Dropdowns Not Working?

If your app loads but the dropdowns don't change anything, **some files are missing**. Make sure ALL files are uploaded!

## Required Files for GitHub Pages

Your repository must include ALL of these files:

```
your-repo/
├── index.html              ← Main HTML file (UPDATED with new programs!)
├── workout-data.js         ← Program data (UPDATED with all 5 programs!)
├── workout-app.js          ← App logic (REQUIRED!)
├── sw.js                   ← Service worker (REQUIRED!)
├── manifest.webmanifest    ← PWA manifest
├── README.md               ← Documentation (UPDATED!)
└── icons/
    ├── icon-192.png        ← App icon 192x192
    └── icon-512.png        ← App icon 512x512
```

## GitHub Pages Deployment Steps

### 1. Upload ALL Files
Make sure you upload **every single file** from the outputs folder, including:
- ✅ `index.html` (UPDATED with 5 programs in dropdown)
- ✅ `workout-data.js` (UPDATED with all your spreadsheet programs!)
- ✅ `workout-app.js` (App logic - handles all program types)
- ✅ `sw.js` (Service worker for offline support)
- ✅ `manifest.webmanifest` (PWA configuration)
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

## Verifying Deployment

Open your deployed site and check:
1. ✅ Can you see all 5 programs in the Program dropdown?
   - PHLUL Split
   - 6-8 Week Rehab
   - 5/3/1 Classic
   - Convict Conditioning
   - Mobility Routines

2. ✅ Do the workout dropdowns update when you change programs?
   - PHLUL: Weeks 1-4, 5-8, 9-12
   - Rehab: Weeks 1-2, 3-4, 5-6, 7-8
   - 5/3/1: Week 1-4 (different rep schemes)
   - Convict: Steps 1-3, 4-6, 7-10
   - Mobility: Dynamic Performance, PreHab Fix

3. ✅ Can you see the workout display area?
4. ✅ Can you fill in weights/reps/notes fields?
5. ✅ Does the timer work?
6. ✅ Does data save automatically?

If ANY of these don't work, you're missing files!

## Troubleshooting

### Program Dropdown Shows Old Programs
**Problem**: Dropdown still shows PHLUL, Convict Conditioning, Mobility only
**Solution**: You uploaded the OLD `index.html`! Upload the NEW `index.html` from the outputs folder

### Programs Show But No Workout Data
**Problem**: Programs switch but no exercises display
**Solution**: You're missing the NEW `workout-data.js` file! Upload it from the outputs folder

### Dropdowns Don't Change Content
**Problem**: Page loads but dropdowns are static
**Solution**: Missing JavaScript files! Upload both `workout-data.js` and `workout-app.js`

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

## Quick Checklist

Before saying "it's deployed":
- [ ] All 5 programs show in Program dropdown
- [ ] Each program has its correct workout/phase options
- [ ] Exercises display for each program
- [ ] Can input data and it saves
- [ ] Timer works
- [ ] All 7 main files uploaded (HTML + 2 JS + SW + manifest + README + DEPLOYMENT)
- [ ] Icons folder with 2 PNG files uploaded
- [ ] GitHub Pages is enabled in settings
- [ ] Green checkmark shows successful deployment
- [ ] Tested in browser with hard refresh

## What's New in This Version

### Updated Files
1. **index.html** - Dropdown now includes all 5 programs
2. **workout-data.js** - Contains ALL 5 programs from your spreadsheet:
   - PHLUL Split (4 days with core circuits)
   - 6-8 Week Rehab Roadmap (4 phases with global warm-up)
   - 5/3/1 Classic (4 days with progressive percentages)
   - Convict Conditioning (6 exercises, 10 steps each)
   - Mobility Routines (2 routines)
3. **README.md** - Comprehensive guide for all 5 programs

### Same Files (No Changes Needed)
- `workout-app.js` - Already handles multiple program types
- `sw.js` - Service worker unchanged
- `manifest.webmanifest` - PWA config unchanged
- `icons/` - Icons unchanged

## Testing Locally

Before deploying, you can test locally:

1. **Using Python**:
   ```bash
   python -m http.server 8000
   ```
   Then open: http://localhost:8000

2. **Using Node.js**:
   ```bash
   npx http-server
   ```
   Then open: http://localhost:8080

3. **Using VS Code**:
   Install "Live Server" extension and right-click `index.html` → "Open with Live Server"

## Need Help?

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for any red errors
4. Check Network tab to see which files are 404 (not found)
5. Upload the missing files!

## Program-Specific Notes

### Using the Rehab Program
- ALWAYS do the Global Warm-Up before each session
- Check the Progression Rules section for pain management
- Don't rush - follow the 4 phases in order

### Using 5/3/1
- You'll need to calculate your Training Max (90% of 1RM)
- The app shows percentages - you calculate actual weights
- AMRAP means "as many reps as possible" on the last set

### Using Convict Conditioning
- Progress through the 10 steps for each exercise
- Start at Step 1 even if it seems easy
- Perfect form before moving to next step

---

**Your complete workout suite is ready to deploy!** 🚀
