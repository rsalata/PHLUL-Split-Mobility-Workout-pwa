# Athletic: Bodyweight + 5K

A self-contained PWA for a 16-week bodyweight-strength and 5K plan. Weeks 1–8 build from run/walk intervals to a completed 5K; Weeks 9–16 build toward a faster 5K.

## URL

When GitHub Pages serves the repository from `main` / root, this app lives at:

`https://rsalata.github.io/PHLUL-Split-Mobility-Workout-pwa/athletic/`

The original PHLUL app remains at the repository root.

## Data

All training data stays in browser `localStorage`. Use Settings → Export JSON for backups. Each browser/device has its own local data. Sessions use unique IDs, so multiple workouts and added runs can be saved on the same date. Version 2 date-based logs migrate automatically.

Each exercise is an independent rollup that can be opened, skipped or moved earlier/later. Short, Standard and Full modes cap strength volume and select only the rehabilitation movements not already covered by the warm-up or main work. Set completion starts an automatic rest timer, and run/walk workouts use a guided interval timer.

The guided workout bar shows completed sets, elapsed time, estimated remaining time, and Previous / Rest / Next controls. The active exercise remains open while moving through the workout.

Six persistent 10-step strength ladders cover push-ups, leg raises, pull-ups, squats, bridges and handstand push-ups. Each workout snapshots its prescribed step so old sessions do not change later. An in-workout checklist shows the status of every unlock requirement. Finishing a session advances a ladder only when every prescribed set is checked, every logged set reaches the target, technique is marked "Clean," and a pain score from 0–3 is entered. Current steps can be adjusted manually in Settings.

Movement-specific offline SVG demonstrations use 4–5 articulated positions rather than looping animation. Moderate movements receive one additional transition pose, while complex multi-joint exercises receive two so both the early and late transitions are visible. Each pose has a short checkpoint and directional arrows where motion could otherwise be unclear. The 43 programmed movements also have their own written technique guide synthesized from matching ACE, AAOS, HSS, NASM, CrossFit, or Mayo Clinic material. Previous performance can be copied into a new session without carrying over completed-set status.

The Demos tab also includes six original offline GIF loops for ATG split squats, tibialis raises, backward sled drags, assisted Nordic curls, hip-flexor lifts and deep ATG squats. These are general movement refreshers and are not attached to a programmed exercise unless the names and setup match.

After each exercise, log reps in reserve, technique quality, and pain. The app explains whether to repeat, add reps, try a harder variation, or regress the movement next time. These recommendations are conservative training guidance, not medical diagnosis.

## iPhone installation

Open the URL in Safari, tap Share, then Add to Home Screen. The folder-scoped service worker keeps this app separate from the root PHLUL PWA.
