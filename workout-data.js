// Workout Program Data
const WORKOUT_PROGRAMS = {
  phlul: {
    name: "PHLUL Split",
    workouts: {
      '1-4': { label: 'Weeks 1-4', description: 'Foundation Phase - Establish proper form with moderate weights.' },
      '5-8': { label: 'Weeks 5-8', description: 'Progressive Overload - Add 5-10% weight when hitting top rep ranges.' },
      '9-12': { label: 'Weeks 9-12', description: 'Peak Intensity - Push intensity on main lifts. Optional deload Week 12.' }
    },
    days: {
      day1: {
        name: "Day 1: Upper Power",
        exercises: [
          {name: "Bench Press (light/moderate)", sets: "3-5", reps: "3-5", notes: "Keep light if front shoulder flares"},
          {name: "Bent Over Row", sets: "3-5", reps: "3-5", notes: ""},
          {name: "Overhead Press (DB or barbell)", sets: "3", reps: "6-10", notes: "Overhead is OK per your update"},
          {name: "Weighted Pull-Ups or Lat Pulldown", sets: "3", reps: "6-10", notes: ""},
          {name: "Barbell Curl", sets: "3", reps: "6-10", notes: ""},
          {name: "Skull Crushers", sets: "3", reps: "6-10", notes: ""}
        ],
        core: [
          {name: "Plank", sets: "1", reps: "45-60s", notes: "Anti-extension"},
          {name: "Pallof Press (band/cable)", sets: "1", reps: "12/side", notes: "Anti-rotation"},
          {name: "Dead Bug", sets: "1", reps: "12/side", notes: "Controlled"}
        ]
      },
      day2: {
        name: "Day 2: Lower Power",
        exercises: [
          {name: "Squat", sets: "3-5", reps: "3-5", notes: ""},
          {name: "Deadlift", sets: "3-5", reps: "3-5", notes: ""},
          {name: "Leg Press", sets: "3", reps: "6-10", notes: ""},
          {name: "Leg Curl", sets: "3", reps: "6-10", notes: ""},
          {name: "Calf Raise (standing)", sets: "4", reps: "6-10", notes: ""}
        ],
        core: [
          {name: "Plank", sets: "1", reps: "45-60s", notes: ""},
          {name: "Pallof Press", sets: "1", reps: "12/side", notes: ""},
          {name: "Dead Bug", sets: "1", reps: "12/side", notes: ""}
        ]
      },
      day4: {
        name: "Day 4: Upper Hypertrophy",
        exercises: [
          {name: "Incline Bench Press (light DB/machine)", sets: "4", reps: "8-12", notes: ""},
          {name: "Cable Row or Seated Row", sets: "4", reps: "8-12", notes: ""},
          {name: "Chest Fly (cable/machine)", sets: "3", reps: "10-15", notes: ""},
          {name: "Overhead Press (lighter)", sets: "3", reps: "10-12", notes: ""},
          {name: "Lat Pulldown", sets: "3", reps: "10-12", notes: ""},
          {name: "DB Curl", sets: "3", reps: "12-15", notes: ""},
          {name: "Tricep Pushdown", sets: "3", reps: "12-15", notes: ""},
          {name: "Cable Lateral Raise", sets: "3-4", reps: "12-15/side", notes: "Shoulder-safe side delt work"}
        ],
        core: [
          {name: "Plank", sets: "1", reps: "45-60s", notes: ""},
          {name: "Pallof Press", sets: "1", reps: "12/side", notes: ""},
          {name: "Dead Bug", sets: "1", reps: "12/side", notes: ""}
        ]
      },
      day5: {
        name: "Day 5: Lower Hypertrophy",
        exercises: [
          {name: "Front Squat or Leg Press", sets: "4", reps: "8-12", notes: ""},
          {name: "Romanian Deadlift", sets: "4", reps: "8-12", notes: ""},
          {name: "Lunges or Bulgarian Split Squat", sets: "3", reps: "10-12/leg", notes: ""},
          {name: "Leg Extension", sets: "3", reps: "12-15", notes: ""},
          {name: "Leg Curl", sets: "3", reps: "12-15", notes: ""},
          {name: "Seated Calf Raise", sets: "4", reps: "12-15", notes: ""}
        ],
        core: [
          {name: "Plank", sets: "1", reps: "45-60s", notes: ""},
          {name: "Pallof Press", sets: "1", reps: "12/side", notes: ""},
          {name: "Dead Bug", sets: "1", reps: "12/side", notes: ""}
        ]
      }
    },
    info: {
      title: "Power/Hypertrophy Upper/Lower Split",
      description: "4 days per week training program focusing on both strength (power days) and muscle growth (hypertrophy days).",
      schedule: "Monday: Upper Power, Tuesday: Lower Power, Wednesday: Rest, Thursday: Upper Hypertrophy, Friday: Lower Hypertrophy, Saturday/Sunday: Rest",
      notes: [
        "Warm up thoroughly before each session",
        "Track your weights and reps each workout",
        "If front shoulder pain flares, reduce pressing volume",
        "Focus on controlled movement and proper form",
        "Rest 2-3 minutes between heavy sets, 60-90s for accessories"
      ]
    }
  },

  rehab: {
    name: "6-8 Week Rehab Roadmap",
    workouts: {
      'weeks1-2': { label: 'Weeks 1-2', description: 'Phase 1: Re-establish capacity - Start light, focus on form' },
      'weeks3-4': { label: 'Weeks 3-4', description: 'Phase 2: Loading confidence - Add 10-15% weight' },
      'weeks5-6': { label: 'Weeks 5-6', description: 'Phase 3: Return to barbell - Reintroduce compound lifts' },
      'weeks7-8': { label: 'Weeks 7-8', description: 'Phase 4: Unrestricted targets - Build to normal training' }
    },
    warmup: {
      name: "Global Warm-Up (Every Session)",
      exercises: [
        {name: "Incline Push-Ups", sets: "2", reps: "15", load: "BW", notes: "Hands on bench (30-36\")"},
        {name: "Bodyweight Squat", sets: "2", reps: "20", load: "BW", notes: "Smooth, pain-free"},
        {name: "Thoracic Rotation (Quadruped)", sets: "2", reps: "6/side", load: "BW", notes: "Rotate through chest"},
        {name: "Band External Rotation (Isometric)", sets: "2", reps: "10s/side", load: "Light band", notes: "No shrugging"},
        {name: "Bird Dog", sets: "2", reps: "6/side (5s)", load: "BW", notes: "No pelvic shift"}
      ]
    },
    days: {
      day1: {
        name: "Day 1 — Upper Power (Shoulder Safe)",
        exercises: [
          {name: "Floor Press (Barbell)", sets: "4", reps: "5", load: "65 lb", notes: "RPE ~6, 40% BW"},
          {name: "Chest-Supported DB Row", sets: "4", reps: "6", load: "25 lb", notes: ""},
          {name: "Close Push-Ups", sets: "2", reps: "12-15", load: "BW", notes: "3 reps in reserve"},
          {name: "Band ER (Slow Eccentric)", sets: "2", reps: "8/side", load: "Light band", notes: "3-4s lower"}
        ]
      },
      day2: {
        name: "Day 2 — Lower Power (Spine Safe)",
        exercises: [
          {name: "Trap Bar Deadlift", sets: "4", reps: "5", load: "80-85 lb", notes: "RPE ~6, 50% BW"},
          {name: "Goblet Squat", sets: "4", reps: "6", load: "30 lb", notes: "Vertical torso"},
          {name: "Reverse Lunge", sets: "3", reps: "6/side", load: "BW or 15 lb", notes: "Controlled"},
          {name: "Pallof Press", sets: "2", reps: "10/side", load: "Light cable", notes: "Anti-rotation"}
        ]
      },
      day3: {
        name: "Day 3 — Upper Hypertrophy + Rehab",
        exercises: [
          {name: "Incline DB Press (Neutral)", sets: "3", reps: "10", load: "25 lb", notes: ""},
          {name: "1-Arm DB or Cable Row", sets: "3", reps: "12/side", load: "30 lb", notes: "No torso twist"},
          {name: "Face Pull", sets: "3", reps: "15", load: "Light", notes: "ER emphasis"},
          {name: "Sword Raise (Band)", sets: "2", reps: "12", load: "Light band", notes: "Controlled"}
        ]
      },
      day4: {
        name: "Day 4 — Lower Hypertrophy",
        exercises: [
          {name: "Front Squat (Light)", sets: "3", reps: "10", load: "35-45 lb", notes: "Upright, pain-free"},
          {name: "Hip Thrust / Glute Bridge", sets: "3", reps: "12", load: "65 lb", notes: "Pause at top, 40% BW"},
          {name: "Single-Leg RDL", sets: "3", reps: "8/side", load: "20 lb DB", notes: "Hips square"},
          {name: "Side Plank", sets: "2", reps: "25s/side", load: "BW", notes: "Neutral spine"}
        ]
      }
    },
    progression: {
      title: "Progression Rules",
      notes: [
        "Weeks 3-4: Add 10 lb to barbell lifts, 5 lb each to DBs",
        "Weeks 5-6: Introduce paused bench press (50% BW), deadlift from floor (55% BW)",
        "Weeks 7-8: Target 65-70% BW bench, 70% BW deadlift, 60-65% BW squat",
        "If pain >3/10 or next-day flare: Hold load or reduce 10-15%",
        "Movement hesitation: Drop back one phase",
        "Flare persists >48hrs: Reduce volume 20-30% for 1-2 weeks"
      ]
    },
    info: {
      title: "6-8 Week Shoulder & Spine Rehab Program",
      description: "Progressive return-to-training program focusing on shoulder-safe pressing, spine-safe loading, and gradual strength rebuilding.",
      schedule: "4 days per week: Upper Power, Lower Power, Upper Hypertrophy, Lower Hypertrophy. Rest 1-2 days between sessions.",
      notes: [
        "Do the Global Warm-Up before every session",
        "Pain should stay ≤3/10 during lifts",
        "Progress only if no next-day flare",
        "Calisthenics volume: 70-75% in weeks 1-4, 80% in weeks 5-6, full in weeks 7-8",
        "Rehab movements reduce after week 6"
      ]
    }
  },

  wendler531: {
    name: "5/3/1 Classic",
    workouts: {
      'week1': { label: 'Week 1 - 5s', description: "65%×5, 75%×5, 85%×5+ (AMRAP)" },
      'week2': { label: 'Week 2 - 3s', description: "70%×3, 80%×3, 90%×3+ (AMRAP)" },
      'week3': { label: 'Week 3 - 5/3/1', description: "75%×5, 85%×3, 95%×1+ (AMRAP)" },
      'week4': { label: 'Week 4 - Deload', description: "40%×5, 50%×5, 60%×5 (no AMRAP)" }
    },
    trainingMaxes: {
      ohp: { name: "Overhead Press", trueMax: 155, trainingMax: 140 },
      deadlift: { name: "Deadlift", trueMax: 405, trainingMax: 365 },
      bench: { name: "Bench Press", trueMax: 225, trainingMax: 200 },
      squat: { name: "Squat", trueMax: 315, trainingMax: 285 }
    },
    days: {
      monday: {
        name: "Monday – Overhead Press",
        mainLift: "Overhead Press",
        sets: [
          {name: "Set 1", percent: "65%", reps: "5", notes: ""},
          {name: "Set 2", percent: "75%", reps: "5/3/5", notes: "Week-dependent"},
          {name: "Set 3", percent: "85%", reps: "5+/3+/1+", notes: "AMRAP - as many reps as possible"}
        ],
        assistance: {
          week1: [
            {name: "Chin-ups or Pull-ups", sets: "3-5", reps: "max", notes: "Assisted if needed"},
            {name: "Dips", sets: "3-5", reps: "10-15", notes: ""},
            {name: "Face Pulls", sets: "3-4", reps: "15-20", notes: "Light band/cable"}
          ],
          week2: [
            {name: "Barbell Rows", sets: "4", reps: "10", notes: ""},
            {name: "Push-ups", sets: "3", reps: "max", notes: "Elevate if needed"},
            {name: "Rear Delt Flys", sets: "3", reps: "12-15", notes: "DB"}
          ],
          week3: [
            {name: "Inverted Rows", sets: "4", reps: "10-12", notes: ""},
            {name: "Close-Grip Bench", sets: "3", reps: "10", notes: "Light"},
            {name: "Band Pull-Aparts", sets: "3", reps: "20", notes: ""}
          ]
        },
        core: [
          {name: "Ab Wheel Rollouts or Plank", sets: "3", reps: "8-12 or 30-60s", notes: ""},
          {name: "Hanging Leg/Knee Raises", sets: "3", reps: "10-15", notes: ""},
          {name: "Farmer Carries", sets: "3", reps: "40-60s", notes: "Heavy DBs"}
        ]
      },
      tuesday: {
        name: "Tuesday – Deadlift",
        mainLift: "Deadlift",
        sets: [
          {name: "Set 1", percent: "65%", reps: "5", notes: ""},
          {name: "Set 2", percent: "75%", reps: "5/3/5", notes: "Week-dependent"},
          {name: "Set 3", percent: "85%", reps: "5+/3+/1+", notes: "AMRAP"}
        ],
        assistance: {
          week1: [
            {name: "Romanian Deadlifts", sets: "3-4", reps: "8-10", notes: "Light"},
            {name: "Lunges", sets: "3", reps: "10/side", notes: "Walking or reverse"},
            {name: "Back Raises", sets: "3", reps: "12-15", notes: ""}
          ],
          week2: [
            {name: "Good Mornings", sets: "3", reps: "10", notes: "Light bar"},
            {name: "Bulgarian Split Squats", sets: "3", reps: "8-10/side", notes: "BW or DB"},
            {name: "Cable Pull-Throughs", sets: "3", reps: "12-15", notes: ""}
          ],
          week3: [
            {name: "Single-Leg RDL", sets: "3", reps: "10/side", notes: "DB"},
            {name: "Step-Ups", sets: "3", reps: "10/side", notes: "Box"},
            {name: "Glute-Ham Raises or Nordic Curls", sets: "3", reps: "6-10", notes: ""}
          ]
        },
        core: [
          {name: "Pallof Press", sets: "3", reps: "10-12/side", notes: "Anti-rotation"},
          {name: "Side Planks", sets: "3", reps: "30-45s/side", notes: ""},
          {name: "Dead Bugs", sets: "3", reps: "10-12/side", notes: "Slow"}
        ]
      },
      thursday: {
        name: "Thursday – Bench Press",
        mainLift: "Bench Press",
        sets: [
          {name: "Set 1", percent: "65%", reps: "5", notes: ""},
          {name: "Set 2", percent: "75%", reps: "5/3/5", notes: "Week-dependent"},
          {name: "Set 3", percent: "85%", reps: "5+/3+/1+", notes: "AMRAP"}
        ],
        assistance: {
          week1: [
            {name: "Barbell or DB Rows", sets: "4", reps: "10", notes: ""},
            {name: "Dips", sets: "3-4", reps: "8-12", notes: "Weighted if possible"},
            {name: "Tricep Pushdowns", sets: "3", reps: "12-15", notes: ""}
          ],
          week2: [
            {name: "Pull-Ups or Lat Pulldowns", sets: "3-5", reps: "8-12", notes: ""},
            {name: "Overhead Tricep Extensions", sets: "3", reps: "10-12", notes: ""},
            {name: "Face Pulls", sets: "3", reps: "15-20", notes: ""}
          ],
          week3: [
            {name: "Chest-Supported Rows", sets: "3", reps: "10-12", notes: ""},
            {name: "Close-Grip Push-Ups", sets: "3", reps: "max", notes: ""},
            {name: "Band Face Pulls", sets: "3", reps: "20", notes: ""}
          ]
        },
        core: [
          {name: "Ab Wheel or Barbell Rollouts", sets: "3", reps: "8-12", notes: ""},
          {name: "Russian Twists", sets: "3", reps: "15-20/side", notes: "Light med ball"},
          {name: "Plank Variations", sets: "3", reps: "45-60s", notes: "Front/side"}
        ]
      },
      friday: {
        name: "Friday – Squat",
        mainLift: "Squat",
        sets: [
          {name: "Set 1", percent: "65%", reps: "5", notes: ""},
          {name: "Set 2", percent: "75%", reps: "5/3/5", notes: "Week-dependent"},
          {name: "Set 3", percent: "85%", reps: "5+/3+/1+", notes: "AMRAP"}
        ],
        assistance: {
          week1: [
            {name: "Lunges", sets: "3", reps: "10/side", notes: "Walking or reverse"},
            {name: "Back Raises or Hyperextensions", sets: "3", reps: "12-15", notes: ""},
            {name: "Leg Curls", sets: "3", reps: "12-15", notes: "Machine or sliders"}
          ],
          week2: [
            {name: "Goblet or Front Squats", sets: "3-4", reps: "10", notes: "Light"},
            {name: "Single-Leg Glute Bridges", sets: "3", reps: "12/side", notes: ""},
            {name: "Calf Raises", sets: "3", reps: "15-20", notes: ""}
          ],
          week3: [
            {name: "Bulgarian Split Squats", sets: "3", reps: "8-10/side", notes: ""},
            {name: "Good Mornings", sets: "3", reps: "10", notes: "Light"},
            {name: "Farmer Carries", sets: "3", reps: "50-60s", notes: ""}
          ]
        },
        core: [
          {name: "Hanging Knee/Leg Raises", sets: "3", reps: "10-15", notes: ""},
          {name: "Bird Dogs", sets: "3", reps: "10/side", notes: "Hold 5s"},
          {name: "Farmer/Suitcase Carries", sets: "3", reps: "40-60s/side", notes: "Heavy"}
        ]
      }
    },
    info: {
      title: "5/3/1 Classic - Jim Wendler's Strength Program",
      description: "Simple and effective strength training built around 4 main barbell lifts with progressive percentages. Focus on beating your reps each cycle.",
      schedule: "4 days per week: Monday (OHP), Tuesday (Deadlift), Thursday (Bench), Friday (Squat). Rest Wednesday, Saturday, Sunday.",
      notes: [
        "Training Max = 90% of your true 1RM (conservative estimate)",
        "Increase TM after each 4-week cycle: +5 lbs upper, +10 lbs lower",
        "Last set is AMRAP - aim to beat minimum reps with good form",
        "Rest 3-5+ minutes between main lift sets",
        "Warm up with ramp sets: empty bar → 40% → 50% → working weight",
        "Assistance: 2-3 exercises, 25-50+ total reps each",
        "Core: 3 exercises, 3 sets each after assistance"
      ]
    }
  },

  convict: {
    name: "Convict Conditioning",
    workouts: {
      'step1-3': { label: 'Steps 1-3 (Beginner)', description: 'Build foundation strength and perfect form.' },
      'step4-6': { label: 'Steps 4-6 (Intermediate)', description: 'Increase difficulty with intermediate progressions.' },
      'step7-10': { label: 'Steps 7-10 (Advanced)', description: 'Master-level movements and unilateral work.' }
    },
    progressions: {
      'step1-3': {
        pushup: [
          {step: 1, name: "Wall Push-ups", sets: "3", reps: "50"},
          {step: 2, name: "Incline Push-ups", sets: "3", reps: "40"},
          {step: 3, name: "Kneeling Push-ups", sets: "3", reps: "30"}
        ],
        squat: [
          {step: 1, name: "Shoulder Stand Squats", sets: "3", reps: "50"},
          {step: 2, name: "Jackknife Squats", sets: "3", reps: "40"},
          {step: 3, name: "Supported Squats", sets: "3", reps: "30"}
        ],
        pullup: [
          {step: 1, name: "Vertical Pulls", sets: "3", reps: "40"},
          {step: 2, name: "Horizontal Pulls", sets: "3", reps: "30"},
          {step: 3, name: "Jackknife Pull-Ups", sets: "3", reps: "20"}
        ],
        legRaise: [
          {step: 1, name: "Knee Tucks", sets: "3", reps: "40"},
          {step: 2, name: "Flat Knee Raises", sets: "3", reps: "35"},
          {step: 3, name: "Flat Bent Leg Raises", sets: "3", reps: "30"}
        ],
        bridge: [
          {step: 1, name: "Short Bridges", sets: "3", reps: "50"},
          {step: 2, name: "Straight Bridges", sets: "3", reps: "40"},
          {step: 3, name: "Angled Bridges", sets: "3", reps: "30"}
        ],
        handstand: [
          {step: 1, name: "Wall Headstands", sets: "2", reps: "60s"},
          {step: 2, name: "Crow Stands", sets: "2", reps: "60s"},
          {step: 3, name: "Wall Handstands", sets: "2", reps: "60s"}
        ]
      },
      'step4-6': {
        pushup: [
          {step: 4, name: "Half Push-ups", sets: "2", reps: "25"},
          {step: 5, name: "Full Push-ups", sets: "2", reps: "20"},
          {step: 6, name: "Close Push-ups", sets: "2", reps: "20"}
        ],
        squat: [
          {step: 4, name: "Half Squats", sets: "2", reps: "50"},
          {step: 5, name: "Full Squats", sets: "2", reps: "30"},
          {step: 6, name: "Close Squats", sets: "2", reps: "20"}
        ],
        pullup: [
          {step: 4, name: "Half Pull-Ups", sets: "2", reps: "15"},
          {step: 5, name: "Full Pull-Ups", sets: "2", reps: "10"},
          {step: 6, name: "Close Pull-Ups", sets: "2", reps: "8"}
        ],
        legRaise: [
          {step: 4, name: "Flat Frog Raises", sets: "2", reps: "25"},
          {step: 5, name: "Flat Straight Leg Raises", sets: "2", reps: "20"},
          {step: 6, name: "Hanging Knee Raises", sets: "2", reps: "15"}
        ],
        bridge: [
          {step: 4, name: "Head Bridges", sets: "2", reps: "25"},
          {step: 5, name: "Full Bridges", sets: "2", reps: "15"},
          {step: 6, name: "Wall Walking (Down)", sets: "2", reps: "10"}
        ],
        handstand: [
          {step: 4, name: "Half Handstand Push-ups", sets: "2", reps: "20"},
          {step: 5, name: "Handstand Push-ups", sets: "2", reps: "15"},
          {step: 6, name: "Narrow Handstand Push-ups", sets: "2", reps: "12"}
        ]
      },
      'step7-10': {
        pushup: [
          {step: 7, name: "Uneven Push-ups", sets: "2", reps: "20/side"},
          {step: 8, name: "Half One-Arm Push-ups", sets: "2", reps: "20/side"},
          {step: 9, name: "Lever Push-ups", sets: "2", reps: "20/side"},
          {step: 10, name: "One-Arm Push-ups", sets: "1", reps: "100/side", master: true}
        ],
        squat: [
          {step: 7, name: "Uneven Squats", sets: "2", reps: "20/side"},
          {step: 8, name: "Half One-Leg Squats", sets: "2", reps: "20/side"},
          {step: 9, name: "Assisted One-Leg Squats", sets: "2", reps: "20/side"},
          {step: 10, name: "One-Leg Squats (Pistol)", sets: "1", reps: "50/side", master: true}
        ],
        pullup: [
          {step: 7, name: "Uneven Pull-Ups", sets: "2", reps: "9/side"},
          {step: 8, name: "Half One-Arm Pull-ups", sets: "2", reps: "8/side"},
          {step: 9, name: "Assisted One-Arm Pull-ups", sets: "2", reps: "7/side"},
          {step: 10, name: "One-Arm Pull-Ups", sets: "1", reps: "6/side", master: true}
        ],
        legRaise: [
          {step: 7, name: "Hanging Bent Leg Raises", sets: "2", reps: "15"},
          {step: 8, name: "Hanging Frog Raises", sets: "2", reps: "15"},
          {step: 9, name: "Partial Straight Leg Raises", sets: "2", reps: "15"},
          {step: 10, name: "Hanging Straight Leg Raises", sets: "1", reps: "30", master: true}
        ],
        bridge: [
          {step: 7, name: "Wall Walking (Up)", sets: "2", reps: "8"},
          {step: 8, name: "Closing Bridges", sets: "2", reps: "6"},
          {step: 9, name: "Stand-to-Stand (1/2)", sets: "2", reps: "4"},
          {step: 10, name: "Stand-to-Stand Bridges", sets: "1", reps: "30", master: true}
        ],
        handstand: [
          {step: 7, name: "Uneven Handstand Push-ups", sets: "2", reps: "10/side"},
          {step: 8, name: "Half One-Arm Handstand Push-ups", sets: "2", reps: "8/side"},
          {step: 9, name: "Lever Handstand Push-ups", sets: "2", reps: "6/side"},
          {step: 10, name: "One-Arm Handstand Push-ups", sets: "1", reps: "5/side", master: true}
        ]
      }
    },
    info: {
      title: "Convict Conditioning - Progressive Calisthenics",
      description: "Bodyweight training system using 10-step progressive variations. Master the Big Six: Push-ups, Squats, Pull-ups, Leg Raises, Bridges, and Handstand Push-ups.",
      schedule: "Train 3-6 days per week. Split exercises across days or do full-body. Rest at least 1 day between sessions for same muscle groups.",
      notes: [
        "Progress only when you can complete the target reps with perfect form",
        "Focus on perfect form over speed or high reps",
        "Take 2-3 minutes rest between sets",
        "Start with Step 1 even if it feels easy - build proper foundation",
        "Listen to your joints - this is strength training, not cardio"
      ]
    }
  },

  mobility: {
    name: "Mobility Routines",
    workouts: {
      'dynamic': { label: 'Dynamic Performance', description: 'Pre-workout activation and movement prep' },
      'prehab': { label: 'PreHab Fix', description: 'Injury prevention and shoulder health' }
    },
    routines: {
      dynamic: {
        name: "Dynamic Performance Warm-Up",
        exercises: [
          {name: "Air Squat", sets: "2-3", reps: "5", notes: "Full depth, neutral, knees out"},
          {name: "Pushup", sets: "2-3", reps: "5", notes: "Hands shoulder-width, torque"},
          {name: "Jump and Land (Low Box)", sets: "2-3", reps: "3", notes: "Load hips, land soft"},
          {name: "Shoulder Roll", sets: "2-3", reps: "10 rolls", notes: "Forward/back controlled"},
          {name: "Dislocate", sets: "2-3", reps: "10", notes: "PVC, arms wide, pull through"},
          {name: "Cat/Camel", sets: "1", reps: "10", notes: "Cat: round, Camel: sag"},
          {name: "Hip Halo", sets: "2-3", reps: "5/direction", notes: "Big hip circles, neutral spine"},
          {name: "Leg Swing Front/Back", sets: "2-3", reps: "10/leg", notes: "Support on wall"},
          {name: "Leg Swing Side/Side", sets: "2-3", reps: "10/leg", notes: "Swing across, support on wall"},
          {name: "Trunk Twist", sets: "2-3", reps: "10/side", notes: "PVC overhead, rotate torso"}
        ]
      },
      prehab: {
        name: "PreHab & Injury Prevention",
        exercises: [
          {name: "Halo", sets: "1", reps: "8-10", rest: "0s", notes: "Circle plate around head"},
          {name: "Plate Eight", sets: "1", reps: "8-10", rest: "0s", notes: "Figure eight on side"},
          {name: "Plate Shovel", sets: "1", reps: "8-10", rest: "0s", notes: "Lift plate over shoulder"},
          {name: "Plate Press Out", sets: "1", reps: "8-10", rest: "0s", notes: "Press forward to elevated"},
          {name: "Rocking Press Up", sets: "1", reps: "8-10", rest: "0s", notes: "Rock plate up overhead"},
          {name: "Thoracic Spine Rotation", sets: "3-5", reps: "5-6/side", rest: "30s", notes: "Arms 45°, rotate chest"},
          {name: "Subscapularis Stretch", sets: "3-5", reps: "30s/side", rest: "30s", notes: "Hook arm, externally rotate"},
          {name: "Pec Minor Stretch", sets: "3-5", reps: "30s/side", rest: "30s", notes: "Push shoulder back, raise arm"},
          {name: "Band Pull Apart", sets: "3-5", reps: "20", rest: "30s", notes: "Pull apart, externally rotate"},
          {name: "Band Overhead Protraction", sets: "3-5", reps: "8-10", rest: "30s", notes: "Protract, ER, overhead"}
        ]
      }
    },
    info: {
      title: "Mobility & Movement Prep Routines",
      description: "Dynamic warm-up sequences and targeted mobility work for improved movement quality, injury prevention, and training preparation.",
      schedule: "Dynamic Performance: Before every workout (5-10 min). PreHab Fix: 2-3x per week on separate days or after training.",
      notes: [
        "Focus on quality movement over speed",
        "Never force into painful ranges of motion",
        "Breathe normally throughout each movement",
        "Use mobility work to identify and address restrictions",
        "Progress gradually - mobility takes time to develop"
      ]
    }
  }
};
