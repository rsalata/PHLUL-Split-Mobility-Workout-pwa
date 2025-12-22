# Workout Programs PWA

A Progressive Web App for tracking multiple workout programs: PHLUL Split and Convict Conditioning.

## Programs Included

### 1. PHLUL Split
Power/Hypertrophy Upper/Lower 4-day training split
- Upper Power, Lower Power, Upper Hypertrophy, Lower Hypertrophy days
- Rotator cuff rehab exercises
- Core training circuits
- 12-week progressive overload system

### 2. Convict Conditioning
Progressive bodyweight calisthenics system
- The Big Six: Push-ups, Squats, Pull-ups, Leg Raises, Bridges, Handstand Push-ups
- 10-step progressions for each exercise
- Beginner to Master level training
- Based on Paul Wade's progressive calisthenics system

### 3. Mobility Routines
Comprehensive mobility and tissue work
- **Dynamic Performance** - Pre-workout activation and movement prep
- **General Mobility** - All-purpose mobility for joint health
- **Pain Relief** - Targeted mobilizations for common pain points
- **Strength & Stability** - Mobility work paired with strength movements
- **Shoulder Impingement Fix** - Comprehensive shoulder rehab (15 exercises)
- **Pre-Hab & Injury Prevention** - Complete injury prevention protocol (34 exercises)
- Includes tissue work, smashing, banding, and active mobilizations

## Features
- **Multi-program support** - Switch between PHLUL and Convict Conditioning
- **Interactive workout tracking** - Fill in weight, sets, reps, and notes for each exercise
- **Suggested values** - Placeholder text shows recommended sets/reps
- **Automatic progress saving** - All data persists via localStorage
- **Data management** - Export your data as JSON backup, import to restore, or clear all data
- **Session tracking** - Date stamp and timer for each workout
- **Collapsible sections** - Rehab and core sections collapse to reduce scrolling
- **Progressive overload tracking** - Monitor your progress through different phases
- Dark theme, mobile-friendly design
- Offline support via Service Worker
- Installable as a PWA on mobile and desktop

## Data Management

### Export Data
Click "📥 Export Data" to download a JSON file containing all your workout logs and session history. This file can be used as a backup or to transfer your data to another device.

### Import Data
Click "📤 Import Data" to restore previously exported data. This will replace your current data with the imported file.

### Clear All Data
Click "🗑️ Clear All Data" if you want to start fresh. You'll need to type "DELETE" to confirm (this action cannot be undone).

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Place all these files at the repository root:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `README.md`
   - `icons/` folder with icon-192.png and icon-512.png

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (or master) / root
   - Save

4. Your app will be available at: `https://[username].github.io/[repo-name]/`

## Week Progression

**Weeks 1-4**: Foundation Phase
- Focus on establishing proper form
- Use moderate weights
- Prioritize rehab and core work

**Weeks 5-8**: Progressive Overload
- Add 5-10% weight when consistently hitting top rep ranges

**Weeks 9-12**: Peak Intensity
- Push intensity on main lifts
- Optional deload in Week 12 (50-70% of working weights)

## Training Schedule
- **Training Days**: Monday, Tuesday, Thursday, Friday (or similar pattern)
- **Rest Days**: Wednesday, Saturday, Sunday
- Warm up thoroughly before each session
- Track your weights and reps
- If front shoulder pain occurs, reduce pressing volume

## License
This is a personal workout tracker. Feel free to modify for your own use.
