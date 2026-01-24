# Quick Start - Testing the App

## 🔍 Before Deploying - Test Locally First!

Follow these steps to make sure the app works BEFORE uploading to GitHub:

### Step 1: Download All Files
Make sure you have ALL these files downloaded:
- ✅ `index.html`
- ✅ `workout-data.js`
- ✅ `workout-app.js`
- ✅ `sw.js`
- ✅ `manifest.webmanifest`
- ✅ `icons/` folder with icon-192.png and icon-512.png

### Step 2: Test the Data File
1. Open `debug-test.html` in your browser
2. You should see green checkmarks (✓) for all tests
3. If you see red X marks (✗), something is wrong with the data

**What You Should See:**
```
✓ workout-data.js loaded
✓ WORKOUT_PROGRAMS is defined
✓ Found 5 programs: phlul, convict, mobility, five31, rehab
✓ PHLUL program exists
  - Days: day1, day2, day4, day5
  - Has info object
  - Has schedule object
✓ Convict program exists
✓ Mobility program exists
✓ 5-3-1 program exists
✓ Rehab program exists

=== All tests passed! ===
```

### Step 3: Test the Full App
1. Open `index.html` in your browser
2. **Right-click → Inspect → Console tab**
3. Look for console messages:
   - Should see: "Initializing app..."
   - Should see: "Loading selections..."
   - Should see: "Current program: phlul"
4. The app should display **Day 1: Upper Power** with exercises

**What to Check:**
- [ ] Program dropdown shows 5 options (PHLUL, Convict, Mobility, 5-3-1, Rehab)
- [ ] Session dropdown shows day options (Day 1, Day 2, Day 4, Day 5)
- [ ] Exercise table appears with columns: Exercise, Weight, Sets, Reps, Notes
- [ ] You can see exercises like "Bench Press", "Bent Over Row", etc.
- [ ] Input fields work (you can type in them)
- [ ] Core Circuit section is visible

### Step 4: Test Each Program
Select each program from the dropdown:

**PHLUL Split:**
- [ ] Shows 4 day options
- [ ] Each day shows exercises with input fields
- [ ] Core Circuit section appears

**Convict Conditioning:**
- [ ] Shows 6 exercise options (Push-ups, Squats, Pull-ups, etc.)
- [ ] Each exercise shows 10 progression steps
- [ ] Can input current performance

**Mobility Routines:**
- [ ] Shows 2 routine options (Dynamic Performance, PreHab Fix)
- [ ] Exercises appear with checkboxes
- [ ] Notes are readable

**5-3-1 Classic:**
- [ ] Shows program text/information
- [ ] Formatted with headers

**Rehab Roadmap:**
- [ ] Shows rehab protocol information
- [ ] Formatted text is readable

### Common Issues & Fixes

**Issue: "Loading workout..." never goes away**
- Open browser console (F12)
- Look for red error messages
- Most common: JavaScript file not loading
- Fix: Make sure all JS files are in the same folder as index.html

**Issue: Dropdowns are empty**
- This means workout-data.js didn't load
- Check the browser console for 404 errors
- Make sure workout-data.js is in the same folder

**Issue: TypeError in console**
- There's a JavaScript error
- Take a screenshot of the error
- Check if all files are the latest version

**Issue: Page loads but no exercises show**
- Check browser console for errors
- Try a different browser (Chrome, Firefox, Safari)
- Clear browser cache (Ctrl+Shift+Delete)

### Step 5: Test Data Saving
1. Fill in some workout data (weight, sets, reps)
2. Refresh the page (F5)
3. Your data should still be there
4. If data disappears, there's a localStorage issue

### If Everything Works Locally
✅ **Your app is ready to deploy to GitHub Pages!**

Follow the **DEPLOYMENT.md** guide to upload to GitHub.

### If Something Doesn't Work
1. Check browser console for errors (F12 → Console tab)
2. Try `debug-test.html` first to isolate the issue
3. Make sure all files are present and not corrupted
4. Try a different browser

## 📝 Console Output Guide

**Good Console Output:**
```
Initializing app...
Loading selections: null null
Current program: phlul Current session: day1
Updating program info for: phlul {name: "PHLUL Split", ...}
Rendering workout: phlul day1
```

**Bad Console Output (Example):**
```
Uncaught ReferenceError: WORKOUT_PROGRAMS is not defined
```
→ This means workout-data.js didn't load

```
Uncaught TypeError: Cannot read property 'days' of undefined
```
→ This means the PHLUL program is missing or malformed

## 🎯 Quick Checklist

Before deploying to GitHub, verify:
- [  ] All files downloaded
- [ ] `debug-test.html` shows all green checkmarks
- [ ] `index.html` loads and shows exercises
- [ ] All 5 programs work in the dropdown
- [ ] Can input data and it saves
- [ ] No red errors in browser console

If all checks pass, you're ready to deploy! 🚀
