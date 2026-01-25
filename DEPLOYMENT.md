# Deployment Guide - Workout Programs PWA 2.0

## 🚀 Quick Start

This is a **complete rebuild** of your workout app with all programs from your spreadsheet. Follow these steps to deploy.

## 📦 What's Included

All files you need are in the outputs folder:
- ✅ `index.html` - Main app file
- ✅ `workout-data.js` - All your workout programs (parsed from spreadsheet)
- ✅ `workout-app.js` - App logic
- ✅ `sw.js` - Service worker for offline support
- ✅ `manifest.webmanifest` - PWA manifest
- ✅ `icons/` folder with icon-192.png and icon-512.png
- ✅ `README.md` - Complete documentation

## 🎯 Deployment to GitHub Pages

### Step 1: Create or Update Repository

**Option A: New Repository**
1. Go to github.com
2. Click "New repository"
3. Name it (e.g., "workout-programs-v2")
4. Make it public or private
5. Create repository

**Option B: Update Existing Repository**
1. Go to your existing workout app repository
2. You'll replace the old files with these new ones

### Step 2: Upload ALL Files

**CRITICAL**: You must upload EVERY file from the outputs folder!

Upload these files to the repository ROOT:
- [ ] `index.html`
- [ ] `workout-data.js` ← DO NOT SKIP THIS!
- [ ] `workout-app.js` ← DO NOT SKIP THIS!
- [ ] `sw.js` ← DO NOT SKIP THIS!
- [ ] `manifest.webmanifest`
- [ ] `README.md`

Create an `icons/` folder and upload:
- [ ] `icon-192.png`
- [ ] `icon-512.png`

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Test Your App

1. Visit: `https://yourusername.github.io/your-repo-name/`
2. You should see the new app with 5 program options
3. Test the program dropdown - it should show:
   - PHLUL Split
   - Convict Conditioning
   - Mobility Routines
   - 5-3-1 Classic
   - Rehab Roadmap

## ✅ Verification Checklist

After deployment, check these:

**Basic Functionality:**
- [ ] App loads without errors
- [ ] Can see the header with dropdowns
- [ ] Program dropdown shows all 5 programs
- [ ] Selecting a program updates the badge

**PHLUL Split:**
- [ ] Can select Day 1, 2, 4, 5 from session dropdown
- [ ] Exercises show with weight/sets/reps inputs
- [ ] Can collapse Rotator Cuff Rehab section
- [ ] Can collapse Core Circuit section
- [ ] Input fields save data when changed

**Convict Conditioning:**
- [ ] Can select Push-ups, Squats, Pull-ups, etc.
- [ ] Shows all 10 steps for selected exercise
- [ ] Can input current progress
- [ ] Data saves

**Mobility Routines:**
- [ ] Can select Dynamic Performance or PreHab Fix
- [ ] Shows exercise table with checkboxes
- [ ] Checkboxes work and save state

**5-3-1 & Rehab:**
- [ ] Shows program text/information
- [ ] Formatted with headers and paragraphs

**Data Management:**
- [ ] Export Data button downloads JSON file
- [ ] Import Data accepts and loads JSON file
- [ ] Clear All Data prompts for confirmation

## 🔧 If Something Doesn't Work

### Program Dropdown is Empty
- **Fix**: Upload `workout-data.js` file
- This file contains all your workout programs

### Session Dropdown Doesn't Change
- **Fix**: Upload `workout-app.js` file
- This file contains the app logic

### Exercise Tables Don't Show
- **Fix**: Ensure BOTH JavaScript files are uploaded
- Check browser console (F12) for errors

### Service Worker Errors
- **Fix**: Upload `sw.js` file
- This enables offline support

### Icons Don't Show
- **Fix**: Create `icons/` folder and upload both PNG files

## 🔄 Updating After Deployment

If you need to make changes:

1. **Update the files** in your repository
2. **Commit the changes**
3. **Wait 1-2 minutes** for GitHub Pages to rebuild
4. **Clear browser cache** and refresh
   - Or test in incognito mode

## 📱 Mobile Installation

After deploying:

**iPhone:**
1. Open the site in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. The app will work offline!

**Android:**
1. Open the site in Chrome
2. Tap the menu (⋮)
3. Tap "Add to Home screen"
4. Or look for the "Install" prompt

## 💾 Data Migration from Old App

If you have data in your old workout app:

1. **Export data** from the old app (Export Data button)
2. **Deploy the new app**
3. **Import data** in the new app (Import Data button)

Note: The data structure has changed, so some data may not transfer perfectly. The new app uses program-specific keys like:
- `phlul_day1`, `phlul_day2`, etc.
- `convict_Push-ups`, `convict_Squats`, etc.
- `mobility_dynamic`, `mobility_prehab`

## 🎉 You're Done!

Your new all-in-one workout app is now live with:
- ✅ 5 complete workout programs
- ✅ All exercises from your spreadsheet
- ✅ Offline support
- ✅ Mobile-optimized design
- ✅ Data export/import

Visit your site at: `https://yourusername.github.io/your-repo-name/`

## 🆘 Need Help?

If you run into issues:

1. **Check browser console** (F12 → Console tab)
2. **Verify all files** are uploaded to the repository root
3. **Try incognito mode** to test without cache
4. **Check GitHub Actions** tab for deployment status

## 📊 What Changed from Old Version

**New Features:**
- 5 programs instead of 3
- Dynamic session selection based on program
- Better program organization
- Improved data structure
- All workouts from your spreadsheet

**Old Structure:**
- PHLUL with week ranges (1-4, 5-8, 9-12)
- Convict Conditioning
- Mobility routines

**New Structure:**
- PHLUL with specific days (Day 1-5)
- Convict Conditioning with exercise selection
- Mobility with specific routines
- 5-3-1 Classic (new!)
- Rehab Roadmap (new!)

The new version is built directly from your spreadsheet data for easier updates!
