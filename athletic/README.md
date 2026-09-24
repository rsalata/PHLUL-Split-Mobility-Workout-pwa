# Athletic: Bodyweight + 5K

A self-contained PWA for a 16-week bodyweight-strength and 5K plan. Weeks 1–8 build from run/walk intervals to a completed 5K; Weeks 9–16 build toward a faster 5K.

## URL

When GitHub Pages serves the repository from `main` / root, this app lives at:

`https://rsalata.github.io/PHLUL-Split-Mobility-Workout-pwa/athletic/`

The original PHLUL app remains at the repository root.

## Data

All training data stays in browser `localStorage`. Use Settings → Export JSON for backups. Each browser/device has its own local data. Sessions use unique IDs, so multiple workouts and added runs can be saved on the same date. Version 2 date-based logs migrate automatically.

Each exercise is an independent rollup that can be opened, skipped or moved earlier/later. Short, Standard and Full modes cap strength volume and select only the rehabilitation movements not already covered by the warm-up or main work. Set completion starts an automatic rest timer, and run/walk workouts use a guided interval timer.

Exercise demonstrations are offline SVG technique guides with setup steps, a key cue and a common mistake. Previous performance can be copied into a new session without carrying over completed-set status.

## iPhone installation

Open the URL in Safari, tap Share, then Add to Home Screen. The folder-scoped service worker keeps this app separate from the root PHLUL PWA.
