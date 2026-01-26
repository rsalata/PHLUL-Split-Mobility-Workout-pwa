# Complete Workout Programs PWA

A Progressive Web App for tracking multiple comprehensive workout programs from your spreadsheet.

## Programs Included (All from Your Spreadsheet!)

### 1. PHLUL Split
Power/Hypertrophy Upper/Lower 4-day training split
- **Day 1**: Upper Power (strength focus)
- **Day 2**: Lower Power (strength focus)
- **Day 4**: Upper Hypertrophy (muscle building)
- **Day 5**: Lower Hypertrophy (muscle building)
- Core circuits included with each day
- 12-week progressive overload system (Weeks 1-4, 5-8, 9-12)

### 2. 6-8 Week Rehab Roadmap
Progressive return-to-training program focusing on shoulder & spine safety
- **Global Warm-Up**: Required before every session
- **Week 1-2**: Re-establish capacity with light weights
- **Week 3-4**: Loading confidence with 10-15% weight increases
- **Week 5-6**: Return to barbell with controlled progression
- **Week 7-8**: Unrestricted targets and full training resume
- Built-in pain management and progression rules
- 4 training days: Upper Power, Lower Power, Upper Hypertrophy, Lower Hypertrophy

### 3. 5/3/1 Classic (Jim Wendler's Program)
Proven strength program built around 4 main barbell lifts
- **Monday**: Overhead Press
- **Tuesday**: Deadlift
- **Thursday**: Bench Press
- **Friday**: Squat
- Progressive percentages: 65%, 75%, 85% (with AMRAP final set)
- 4-week cycles: Week 1 (5s), Week 2 (3s), Week 3 (5/3/1), Week 4 (Deload)
- Varied assistance work each week
- Core training integrated with each session
- **Training Max Setup**: Enter your 1RM and app calculates 90% training max

### 4. Convict Conditioning
Progressive bodyweight calisthenics system
- **The Big Six Exercises**: Push-ups, Squats, Pull-ups, Leg Raises, Bridges, Handstand Push-ups
- **10 Progressive Steps** for each exercise (from beginner to master level)
- Grouped into: Steps 1-3 (Beginner), Steps 4-6 (Intermediate), Steps 7-10 (Advanced)
- Master goals: One-arm push-ups, pistol squats, one-arm pull-ups, hanging leg raises

### 5. Mobility Routines
Movement prep and injury prevention
- **Dynamic Performance**: Pre-workout warm-up routine (10 movements)
  - Air squats, pushups, jumps, shoulder rolls, dislocates, hip halos, leg swings
- **PreHab Fix**: Shoulder health and injury prevention (10 exercises)
  - Plate series (halo, eight, shovel, press out), rotations, stretches, band work

## Features
- **Multi-program support** - Switch between 5 complete workout programs
- **Interactive workout tracking** - Fill in weight, sets, reps, and notes
- **Suggested values** - Placeholder text shows recommended sets/reps
- **Automatic progress saving** - All data persists via localStorage
- **Data management** - Export/Import your data as JSON backup
- **Session tracking** - Date stamp and timer for each workout
- **Collapsible sections** - Rehab and core sections collapse to reduce scrolling
- Dark theme, mobile-friendly design
- Offline support via Service Worker
- Installable as a PWA on mobile and desktop

## How to Use

### Switching Programs
1. Use the **Program** dropdown in the header to select your workout program
2. The app will automatically load the appropriate structure

### Selecting Workouts/Phases
- **PHLUL**: Choose from Weeks 1-4, 5-8, or 9-12
- **Rehab**: Choose from Weeks 1-2, 3-4, 5-6, or 7-8
- **5/3/1**: Choose from Week 1 (5s), Week 2 (3s), Week 3 (5/3/1), or Week 4 (Deload)
- **Convict Conditioning**: Choose from Steps 1-3, 4-6, or 7-10
- **Mobility**: Choose Dynamic Performance or PreHab Fix

### Tracking Your Workouts
1. Fill in the **weight/load**, **reps**, and **notes** fields for each exercise
2. Click **Start Session** to begin timing your workout
3. Data automatically saves as you type
4. Check off exercises as you complete them

### Managing Your Data
- **Export Data**: Download a JSON file with all your progress
- **Import Data**: Restore from a previous export
- **Clear All Data**: Start fresh (requires typing "DELETE" to confirm)

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Upload ALL these files to the repository root:
   - ✅ `index.html` - Main HTML file
   - ✅ `workout-data.js` - All workout programs
   - ✅ `workout-app.js` - App logic
   - ✅ `sw.js` - Service worker
   - ✅ `manifest.webmanifest` - PWA manifest
   - ✅ `icons/` folder with both icon-192.png and icon-512.png

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (or master) / root
   - Save

4. Your app will be live at: `https://[username].github.io/[repo-name]/`

## Important Notes

### PHLUL Program
- 4 days per week: Mon/Tue (power), Thu/Fri (hypertrophy)
- Rest days: Wed/Sat/Sun
- Progress through 12 weeks with increasing intensity

### Rehab Program
- **ALWAYS do Global Warm-Up** before every session
- Stop if pain exceeds 3/10
- Follow progression rules carefully
- Don't rush - proper form over weight

### 5/3/1 Program
- Training Max = 90% of your true 1RM
- Increase TM after each 4-week cycle: +5 lbs upper, +10 lbs lower
- Last set is AMRAP (as many reps as possible)
- Rest 3-5+ minutes between main lift sets
- Assistance work varies each week

### Convict Conditioning
- Progress only with perfect form
- Don't skip steps even if they seem easy
- Take 2-3 minutes rest between sets
- This is strength training, not cardio

### Mobility Routines
- Dynamic Performance: Before every workout (5-10 min)
- PreHab Fix: 2-3x per week on separate days
- Focus on quality over speed
- Never force into painful ranges

## Troubleshooting

**Dropdowns not working?**
- Make sure `workout-data.js` and `workout-app.js` are uploaded
- Clear browser cache and hard refresh (Ctrl+Shift+R)

**Data not saving?**
- Ensure localStorage is enabled in your browser
- Export your data regularly as backup

**Service Worker errors?**
- Ensure `sw.js` is in the repository root
- Clear cache and re-register service worker

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **Storage**: localStorage for persistence
- **Offline Support**: Service Worker caching
- **PWA**: Installable on mobile and desktop
- **No tracking**: All data stays on your device

## Source

All workout programs extracted from your `Complete_Workout_Programs.xlsx` spreadsheet:
- PHLUL Overview sheet
- 6-8 Week Rehab Roadmap sheet
- 5-3-1 Classic sheet
- Convict Conditioning sheet
- Mobility sheets (Dynamic Perf & PreHab Fix)

## License

This is a personal workout tracker built from your own workout programs. Feel free to modify for your own use.

---

**Ready to train?** Open `index.html` in your browser or deploy to GitHub Pages! 💪
