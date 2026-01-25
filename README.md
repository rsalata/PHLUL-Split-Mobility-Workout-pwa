# Workout Programs PWA - All-in-One Edition

A Progressive Web App for tracking multiple workout programs, built directly from your workout spreadsheet.

## 📋 Programs Included

### 1. PHLUL Split
Power/Hypertrophy Upper/Lower 4-day training split
- **Day 1**: Upper Power - Heavy compound movements with rotator cuff rehab
- **Day 2**: Lower Power - Heavy squats and deadlifts
- **Day 4**: Upper Hypertrophy - Higher volume upper body work
- **Day 5**: Lower Hypertrophy - Higher volume leg training
- Includes rotator cuff rehab exercises and core training on all days

### 2. Convict Conditioning
Progressive bodyweight calisthenics system
- **The Big Six**: Push-ups, Squats, Pull-ups, Leg Raises, Bridges, Handstand Push-ups
- 10-step progressions for each exercise (60 total progressions)
- From beginner to master level training
- Based on Paul Wade's progressive calisthenics system

### 3. Mobility Routines
Comprehensive mobility and tissue work
- **Dynamic Performance** - Pre-workout activation and movement prep (27 exercises)
- **PreHab & Injury Prevention** - Complete injury prevention protocol (20 exercises)
- Includes tissue work, smashing, banding, and active mobilizations
- Perfect for warm-ups or dedicated mobility sessions

### 4. 5-3-1 Classic
Jim Wendler's proven strength program
- 4-week cycles with built-in progression
- Week 1 (5's), Week 2 (3's), Week 3 (5/3/1), Week 4 (Deload)
- Training max based system
- Complete program details included

### 5. 6-8 Week Rehab Roadmap
Progressive return to training protocol
- Structured 8-week rehabilitation program
- Pain management and progressive loading
- Global warm-ups for every session
- Phase-based progression rules

## ✨ Features

- **Multi-Program Support** - Switch between 5 complete workout programs
- **Interactive Tracking** - Fill in weights, sets, reps, and notes for each exercise
- **Session Selection** - Choose specific days/routines within each program
- **Automatic Progress Saving** - All data persists via localStorage
- **Data Management** - Export, import, or clear all workout data
- **Collapsible Sections** - Organize rehab and core work to reduce scrolling
- **Dark Theme** - Easy on the eyes, mobile-friendly design
- **Offline Support** - Works without internet via Service Worker
- **Installable PWA** - Add to home screen on mobile and desktop

## 🎯 How to Use

### Program Selection
1. Use the **Program** dropdown to select your workout program
2. Use the **Session** dropdown to select the specific day/routine
3. The app remembers your last selection

### Tracking Your Workouts

**PHLUL Split:**
- Fill in Weight, Sets, Reps for each exercise
- Add notes about how the set felt
- Rotator Cuff and Core sections are collapsible

**Convict Conditioning:**
- Track which step you're currently on
- Log your current performance (e.g., "2x15")
- Add notes about progress

**Mobility Routines:**
- Check off exercises as you complete them
- Review the full routine before starting

**5-3-1 & Rehab:**
- View complete program information
- Reference during your training

### Data Management

**Export Data**: Download a JSON backup of all your workout logs
**Import Data**: Restore previously exported data
**Clear All Data**: Start fresh (requires typing "DELETE" to confirm)

## 📱 Deployment to GitHub Pages

### Required Files
Your repository must include ALL of these files in the root directory:
```
your-repo/
├── index.html              ← Main HTML file
├── workout-data.js         ← Program data (REQUIRED!)
├── workout-app.js          ← App logic (REQUIRED!)
├── sw.js                   ← Service worker (REQUIRED!)
├── manifest.webmanifest    ← PWA manifest
├── README.md               ← This file
└── icons/
    ├── icon-192.png        ← App icon 192x192
    └── icon-512.png        ← App icon 512x512
```

### Deployment Steps

1. **Create a GitHub Repository**
   - Go to github.com and create a new repository
   - Make it public or private (your choice)

2. **Upload ALL Files**
   - Upload every file from this outputs folder
   - Make sure to include the `icons/` folder with both PNG files
   - DO NOT skip the JavaScript files - they're essential!

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will build and deploy your site (takes 1-2 minutes)
   - Look for the green checkmark in the Actions or Deployments tab
   - Your site will be at: `https://yourusername.github.io/your-repo-name/`

5. **Clear Browser Cache**
   - After deployment, hard refresh your browser
   - Open Developer Tools (F12)
   - Right-click the refresh button → "Empty Cache and Hard Reload"
   - Or test in incognito/private mode

## 🔧 Troubleshooting

### App Loads But Dropdowns Don't Work
**Problem**: Page loads but program/session selection doesn't work
**Solution**: You're missing the JavaScript files! Upload `workout-data.js` and `workout-app.js`

### Console Errors
**Problem**: Browser console shows "Failed to fetch" or "404" errors
**Solution**: Check that ALL files are uploaded, especially the JavaScript files

### Service Worker Errors
**Problem**: Console shows "sw.js not found"
**Solution**: Upload the `sw.js` file to your repository root

### Old Version Still Showing
**Problem**: You updated files but old version still appears
**Solution**: 
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Or open in incognito/private mode

## 📊 Data Structure

Your workout data is stored in `workout-data.js` which was generated directly from your spreadsheet. The structure is:

```javascript
WORKOUT_PROGRAMS = {
  phlul: { days: {...}, schedule: {...} },
  convict: { exercises: {...} },
  mobility: { routines: {...} },
  five31: { content: [...] },
  rehab: { content: [...] }
}
```

All your training data is saved to browser localStorage and organized by:
- Program name (phlul, convict, mobility, five31, rehab)
- Session identifier (day1, Push-ups, dynamic, etc.)

## 🎨 Customization

To modify the programs:
1. Edit your spreadsheet
2. Re-run the parser script to generate new `workout-data.js`
3. Replace the file in your repository
4. GitHub Pages will automatically redeploy

## 📝 Notes

- The app works entirely offline after first load
- No data ever leaves your device
- Export your data regularly as a backup
- Compatible with all modern browsers
- Mobile-optimized with horizontal scrolling tables

## 🔒 Privacy

- No tracking, no analytics, no servers
- All data stored locally in your browser
- No account required, no login needed
- Your workout data never leaves your device

## 📄 License

This is a personal workout tracker. Feel free to modify for your own use.

---

**Built with:** Vanilla JavaScript, localStorage, PWA technologies
**Generated from:** Your Complete Workout Programs spreadsheet
**Version:** 2.0 - All-in-One Edition
