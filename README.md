# Workout Programs PWA — Complete Training Suite

A comprehensive Progressive Web App with 6 complete training programs for all fitness goals.

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
Comprehensive mobility and tissue work (7 routines)
- **Dynamic Performance** - Pre-workout activation and movement prep
- **General Mobility** - All-purpose mobility for joint health
- **Pain Relief** - Targeted mobilizations for common pain points
- **Strength & Stability** - Mobility work paired with strength movements
- **Shoulder Impingement Fix** - 15-exercise shoulder rehab protocol
- **20-Min Rehab Split** - 3-day/week shoulder & lumbar restoration program
- **Pre-Hab & Injury Prevention** - Complete injury prevention protocol (34 exercises)

### 4. 8-Week Rehab Weightlifting
Progressive return-to-lifting protocol
- **Phase 1 (Weeks 1-2)**: Re-establish capacity with light loads
- **Phase 2 (Weeks 3-4)**: Build loading confidence
- **Phase 3 (Weeks 5-6)**: Return to barbell movements
- **Phase 4 (Weeks 7-8)**: Reach unrestricted training targets
- Includes global warm-up and progression/regression rules
- Designed for shoulder and spine safety

### 5. Science-Based Full Workout
Evidence-based training templates
- Lower Back Focus (60 min)
- Upper Body Emphasis (50 min)
- Powerbuilding Split (70 min)
- Optimized for strength and hypertrophy
- RPE-based intensity

### 6. 5/3/1 Boring But Big
Classic Wendler 5/3/1 with BBB assistance
- Dynamic weight calculation based on Training Max
- 4-week cycles with deload
- Configurable BBB percentage (50%, 60%, 70%)
- Customizable accessories per day
- Auto-rounding to nearest plate increment

## Features
- **6 complete training programs** - From rehab to powerbuilding, all in one app
- **Multi-program support** - Switch between PHLUL, Convict, Mobility, Rehab, Science-Based, and BBB
- **Interactive workout tracking** - Fill in weight, sets, reps, and notes for each exercise
- **Dynamic weight calculation** - 5/3/1 BBB auto-calculates all working weights
- **Suggested values** - Placeholder text shows recommended sets/reps
- **Automatic progress saving** - All data persists via localStorage
- **Data management** - Export your data as JSON backup, import to restore, or clear all data
- **Session tracking** - Date stamp and timer for each workout
- **Collapsible sections** - Rehab and core sections collapse to reduce scrolling
- **Progressive overload tracking** - Monitor your progress through different phases
- **Progression/regression rules** - Built-in guidelines for 8-Week Rehab program
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

## Training Guidance

### PHLUL Split
**Weeks 1-4**: Foundation Phase - Focus on establishing proper form
**Weeks 5-8**: Progressive Overload - Add 5-10% weight when consistently hitting top rep ranges
**Weeks 9-12**: Peak Intensity - Push intensity on main lifts, optional deload in Week 12

### 8-Week Rehab Weightlifting
**Weeks 1-2**: Re-establish capacity with light loads (RPE ≤6)
**Weeks 3-4**: Progress loads (+10lb barbell, +5lb dumbbells)
**Weeks 5-6**: Return to barbell movements (RPE ≤7)
**Weeks 7-8**: Reach unrestricted targets (65-70% BW lifts)
*Follow progression/regression rules built into the program*

### 5/3/1 Boring But Big
**Week 1**: 65/75/85% × 5+
**Week 2**: 70/80/90% × 3+
**Week 3**: 75/85/95% × 1+
**Week 4**: Deload at 40/50/60% × 5

## Training Schedule
- **PHLUL**: Monday, Tuesday, Thursday, Friday (or similar 2-on/1-off/2-on pattern)
- **Convict Conditioning**: 3-6 days per week, rest between same muscle groups
- **Mobility Routines**: Daily or as needed
- **8-Week Rehab**: 4 days per week with rest days between
- **Science-Based**: 3-4 days per week depending on template
- **5/3/1 BBB**: 4 days per week (OHP, Dead, Bench, Squat)

## License
This is a personal workout tracker. Feel free to modify for your own use.
