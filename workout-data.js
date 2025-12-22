
// Workout Program Data
const WORKOUT_PROGRAMS = {
  phlul: {
    name: "PHLUL Split",
    workouts: {
      '1-4': { label: 'Weeks 1-4', description: 'Foundation Phase - Establish proper form with moderate weights. Prioritize rotator cuff rehab and core work.' },
      '5-8': { label: 'Weeks 5-8', description: 'Progressive Overload - Add 5-10% weight when hitting the top end of rep ranges consistently.' },
      '9-12': { label: 'Weeks 9-12', description: 'Peak Intensity - Push intensity on main lifts. Optional deload Week 12 (use 50-70% of working weights).' }
    },
    days: {
      day1: {
        name: "Day 1: Upper Power",
        exercises: [
          {name: "Bench Press (light/moderate)", sets: "3-5", reps: "3-5", notes: "Keep light if front shoulder flares; focus on form"},
          {name: "Bent Over Row", sets: "3-5", reps: "3-5", notes: ""},
          {name: "Overhead Press (DB or barbell - moderate)", sets: "3", reps: "6-10", notes: "Overhead is OK per your update"},
          {name: "Weighted Pull-Ups or Lat Pulldown", sets: "3", reps: "6-10", notes: ""},
          {name: "Barbell Curl", sets: "3", reps: "6-10", notes: ""},
          {name: "Skull Crushers", sets: "3", reps: "6-10", notes: ""}
        ],
        rehab: [
          {name: "Face Pulls (cable/rope or band)", sets: "4", reps: "15-20", notes: "Pull to eyes, external rotate"},
          {name: "Side-Lying External Rotation (light DB/band)", sets: "3", reps: "12-15/side", notes: "Elbow tucked"},
          {name: "Banded External Rotation (at side)", sets: "3", reps: "15-20/side", notes: "Band across body"},
          {name: "Wall Slides", sets: "3", reps: "10-15", notes: "Elbows/fingers on wall, external rotation at top"}
        ],
        core: [
          {name: "Plank", sets: "1", reps: "45-60 seconds", notes: "Anti-extension"},
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
          {name: "Plank", sets: "1", reps: "45-60 seconds", notes: ""},
          {name: "Pallof Press", sets: "1", reps: "12/side", notes: ""},
          {name: "Dead Bug", sets: "1", reps: "12/side", notes: ""}
        ]
      },
      day4: {
        name: "Day 4: Upper Hypertrophy",
        exercises: [
          {name: "Incline Bench Press (light DB or machine)", sets: "4", reps: "8-12", notes: ""},
          {name: "Cable Row or Seated Row", sets: "4", reps: "8-12", notes: ""},
          {name: "Chest Fly (cable/machine)", sets: "3", reps: "10-15", notes: ""},
          {name: "Overhead Press (lighter)", sets: "3", reps: "10-12", notes: ""},
          {name: "Lat Pulldown", sets: "3", reps: "10-12", notes: ""},
          {name: "DB Curl", sets: "3", reps: "12-15", notes: ""},
          {name: "Tricep Pushdown", sets: "3", reps: "12-15", notes: ""},
          {name: "Cable Lateral Raise (bent arm or low-to-high)", sets: "3-4", reps: "12-15/side", notes: "Shoulder-safe side delt work"}
        ],
        rehab: [
          {name: "Face Pulls", sets: "4", reps: "15-20", notes: ""},
          {name: "Side-Lying External Rotation", sets: "3", reps: "12-15/side", notes: ""},
          {name: "Banded External Rotation", sets: "3", reps: "15-20/side", notes: ""},
          {name: "Wall Slides", sets: "3", reps: "15", notes: ""}
        ],
        core: [
          {name: "Plank", sets: "1", reps: "45-60 seconds", notes: ""},
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
          {name: "Plank", sets: "1", reps: "45-60 seconds", notes: ""},
          {name: "Pallof Press", sets: "1", reps: "12/side", notes: ""},
          {name: "Dead Bug", sets: "1", reps: "12/side", notes: ""}
        ]
      }
    },
    info: {
      title: "Power/Hypertrophy Upper/Lower Split",
      description: "4 days per week training program focusing on both strength (power days) and muscle growth (hypertrophy days). Includes rotator cuff rehab and core work.",
      schedule: "Training Days: Monday, Tuesday, Thursday, Friday (or similar 2-on/1-off/2-on pattern)<br>Rest Days: Wednesday, Saturday, Sunday",
      notes: [
        "Warm up thoroughly before each session",
        "Track your weights and reps each workout",
        "If front shoulder pain flares, reduce pressing volume",
        "Focus on controlled movement and proper form",
        "Rest 2-3 minutes between heavy sets, 60-90s for accessories"
      ]
    }
  },
  
  convict: {
    name: "Convict Conditioning",
    workouts: {
      'step1-3': { label: 'Steps 1-3 (Beginner)', description: 'Build foundation strength and perfect form with the first 3 progression steps.' },
      'step4-6': { label: 'Steps 4-6 (Intermediate)', description: 'Increase difficulty and volume with intermediate progressions.' },
      'step7-10': { label: 'Steps 7-10 (Advanced)', description: 'Master-level movements with full range of motion and unilateral work.' }
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
      description: "Bodyweight training system using progressive exercise variations. Master the Big Six: Push-ups, Squats, Pull-ups, Leg Raises, Bridges, and Handstand Push-ups.",
      schedule: "Train 3-6 days per week. Split exercises across multiple days or do full-body sessions. Rest at least 1 day between sessions for same muscle groups.",
      notes: [
        "Progress only when you can complete the 'Progression Standard' reps with perfect form",
        "Focus on perfect form over speed or high reps",
        "Take 2-3 minutes rest between sets for strength work",
        "Start with Step 1 even if it feels easy - build proper foundation",
        "Listen to your joints - this is strength training, not cardio"
      ]
    }
  },
  
  mobility: {
    name: "Mobility Routines",
    workouts: {
      'dynamic_performance': { 
        label: 'Dynamic Performance', 
        description: 'Pre-workout routine to activate muscles and improve movement patterns. Combines dynamic movements with tissue work.'
      },
      'general_mobility': { 
        label: 'General Mobility', 
        description: 'All-purpose mobility work for everyday movement quality and joint health.'
      },
      'pain_relief': { 
        label: 'Pain Relief', 
        description: 'Targeted mobilizations for common pain points including elbow, wrist, and low back issues.'
      },
      'strength_stability': { 
        label: 'Strength & Stability', 
        description: 'Mobility work paired with strength movements to build stable, strong positions.'
      },
      'shoulder_impingement': {
        label: 'Shoulder Impingement Fix',
        description: 'Comprehensive shoulder rehabilitation focusing on thoracic mobility, external rotation strengthening, and rotator cuff activation.'
      },
      'prehab_fix': {
        label: 'Pre-Hab & Injury Prevention',
        description: 'Complete injury prevention protocol including shoulder warm-up, core stability, hip mobility, and spinal decompression.'
      }
    },
    routines: {
      'dynamic_performance': [
        {name: 'Kettlebell Swing', category: 'Category 2', duration: '12 reps', notes: 'Braced neutral hip hinge screw feet full hip extension no overextension.'},
        {name: 'Superfriend Triceps Smash', category: 'Area 5', duration: '1 min/arm', notes: 'Partner foot scrubs triceps (light pressure ab mat under arm); targets deep tissue.'},
        {name: 'Push-Press', category: 'Category 2', duration: '8 reps (moderate)', notes: 'Barbell dip-drive torque off bar head through arms vertical forearms.'},
        {name: 'Low Back Smash (Option 3)', category: 'Area 6', duration: '2 min', notes: 'Little Battlestar above iliac crest; hips/legs side-to-side shoulders pinned.'},
        {name: 'Wall Ball', category: 'Category 2', duration: '10 reps', notes: 'Squat to full depth throw to target braced neutral knees out.'},
        {name: 'Banded Elbow Distraction', category: 'Area 5', duration: '1 min/arm', notes: 'Band in elbow crook; pull hand to face (pronation/supination) 30-60 oscillations.'}
      ],
      'general_mobility': [
        {name: 'Air Squat', category: 'Category 1', duration: '10 reps', notes: 'Feet shoulder-width screw feet into ground brace spine knees out full depth.'},
        {name: 'Triceps Extension Smash', category: 'Area 5', duration: '2 min/arm', notes: 'Barbell or lacrosse ball on triceps head; floss bend/extend pressure wave. Improves Overhead/Front Rack.'},
        {name: 'Bench Press', category: 'Category 1', duration: '8 reps (light)', notes: 'Narrow grip torque off bar vertical forearms braced arch (no overextension).'},
        {name: 'Low Back Smash (Option 1)', category: 'Area 6', duration: '2 min', notes: 'Feet elevated lacrosse ball above pelvis; pressure wave hip to spine neutral spine.'},
        {name: 'Pull-Up', category: 'Category 1', duration: '5-8 reps (scale with band)', notes: 'Hook grip braced neutral chest to bar straight legs.'},
        {name: 'Banded Elbow Extension', category: 'Area 5', duration: '1 min/arm', notes: 'Band around elbow floss pronation/supination full extension. Improves Overhead.'}
      ],
      'pain_relief': [
        {name: 'Low Back Smash (Option 3)', category: 'Area 6', duration: '2 min', notes: 'Little Battlestar above iliac crest; hips/legs side-to-side shoulders pinned.'},
        {name: 'Wall Ball', category: 'Category 2', duration: '10 reps', notes: 'Squat to full depth throw to target braced neutral knees out.'},
        {name: 'Banded Elbow Distraction', category: 'Area 5', duration: '1 min/arm', notes: 'Band in elbow crook; pull hand to face (pronation/supination) 30-60 oscillations.'},
        {name: 'Low Back Smash (Option 2)', category: 'Area 6', duration: '2 min', notes: 'Double lacrosse ball on lumbar segments; knees side-to-side neutral spine.'},
        {name: 'Pushup', category: 'Category 1', duration: '10 reps', notes: 'Hands shoulder-width torque (pits forward)'},
        {name: 'Elbow VooDoo', category: 'Area 5', duration: '2 min/arm', notes: 'VooDoo Floss wrap; Superfriend extends/rotates arm or floss with bar grips. For elbow pain.'},
        {name: 'Pelvic Reset', category: 'Area 6', duration: '3 sets (5s each)', notes: 'Push-pull knees (rotation/counter) squeeze ball between knees. Fixes back tweaks.'},
        {name: 'Floor Press', category: 'Category 1', duration: '8 reps (light)', notes: 'Barbell same setup as bench press'},
        {name: 'Banded Wrist Distraction', category: 'Area 5', duration: '1 min/wrist', notes: 'Band on wrist floss end-range with VooDoo wrap; fist over thumb for thumb pain.'}
      ],
      'strength_stability': [
        {name: 'Strict Press', category: 'Category 1', duration: '8 reps (moderate)', notes: 'Barbell torque off bar vertical forearms head through arms at lockout.'},
        {name: 'Forearm Tack and Twist', category: 'Area 5', duration: '1 min/arm', notes: 'Lacrosse ball near elbow crook; twist slack floss wrist flex/extension. Improves Press.'},
        {name: 'Deadlift', category: 'Category 1', duration: '6 reps (moderate)', notes: 'Screw feet braced neutral hips/shoulders rise together no rounding.'},
        {name: 'Erector Side Smash', category: 'Area 6', duration: '2 min', notes: 'Gemini/double ball by lumbar spine; hips side-to-side avoid over-rotation.'},
        {name: 'Dip (Scale with Band)', category: 'Category 1', duration: '5-8 reps', notes: 'Parallel bars/rings thumbs out vertical forearms straight legs load pecs/triceps.'},
        {name: 'Wrist Tack and Spin', category: 'Area 5', duration: '1 min/wrist', notes: 'Ball at wrist base (thumb sides); twist floss flex/extend. Improves Front Rack.'}
      ],
      'shoulder_impingement': [
        {name: 'Thoracic Spine Rotation', sets: '3 to 5', duration: '5-6 per side', rest: '30s', notes: 'Arms at 45°, rotate chest to open thoracic spine.'},
        {name: 'Subscapularis Stretch', sets: '3 to 5', duration: '30s per side', rest: '30s', notes: 'Hook arm on doorway, externally rotate, stride out, rotate chest.'},
        {name: 'Pec Minor Stretch', sets: '3 to 5', duration: '30s per side', rest: '30s', notes: 'Push shoulder back on doorway, pinch shoulder blades, raise arm.'},
        {name: 'Band Pull Apart (External Rotation)', sets: '3 to 5', duration: '20 (1 rep quality)', rest: '30s', notes: 'Pull band apart, externally rotate thumbs, keep shoulders down.'},
        {name: 'Band Overhead Protraction', sets: '3 to 5', duration: '8 to 12', rest: '30s', notes: 'Protract arms, externally rotate, raise overhead, maintain tall posture.'},
        {name: 'Isometric External Rotation', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Anchor band, hold arm in external rotation, step out slightly.'},
        {name: 'Concentric External Rotation', sets: '3 to 5', duration: '8 to 12', rest: '30s', notes: 'Anchor band, pull arm across body to externally rotate.'},
        {name: 'Eccentric External Rotation', sets: '3 to 5', duration: '8 to 12', rest: '30s', notes: 'Step out further, control band pulling arm back to internal rotation.'},
        {name: 'Heavy Eccentric External Rotation', sets: '3 to 5', duration: '6 to 8', rest: '30s', notes: 'Larger step, slow control of band into internal rotation.'},
        {name: 'Plyometric External Rotation', sets: '3 to 5', duration: '6 to 8', rest: '30s', notes: 'Step out, control band dynamically into internal rotation.'},
        {name: 'Sword Raise (Isometric)', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Hold band in front, resist internal rotation.'},
        {name: 'Sword Raise (Concentric)', sets: '3 to 5', duration: '8 to 12', rest: '30s', notes: 'Pull band from pocket to top, externally rotate.'},
        {name: 'Sword Raise (Eccentric)', sets: '3 to 5', duration: '8 to 12', rest: '30s', notes: 'Control band down to pocket from top position.'},
        {name: 'Sword Raise (Heavy Eccentric)', sets: '3 to 5', duration: '6 to 8', rest: '30s', notes: 'Larger step, slow control down to pocket.'},
        {name: 'Sword Raise (Plyometric)', sets: '3 to 5', duration: '6 to 8', rest: '30s', notes: 'Dynamic control down to pocket from top position.'}
      ],
      'prehab_fix': [
        {name: 'Halo', sets: '1', duration: '8 to 10', rest: '0s', notes: 'Hold plate, circle around head to warm up rotator cuff.'},
        {name: 'Plate Eight', sets: '1', duration: '8 to 10', rest: '0s', notes: 'Draw figure eight on side, focus on front/middle delts.'},
        {name: 'Plate Shovel', sets: '1', duration: '8 to 10', rest: '0s', notes: 'Lean forward, lift plate over shoulder, target rear delts.'},
        {name: 'Plate Press Out', sets: '1', duration: '8 to 10', rest: '0s', notes: 'Press plate forward, transition to elevated arm position.'},
        {name: 'Rocking Press Up', sets: '1', duration: '8 to 10', rest: '0s', notes: 'Rock plate up overhead, prep for overhead pressing.'},
        {name: 'Thoracic Spine Rotation', sets: '3 to 5', duration: '5-6 per side', rest: '30s', notes: 'Arms at 45°, rotate chest to open thoracic spine.'},
        {name: 'Subscapularis Stretch', sets: '3 to 5', duration: '30s per side', rest: '30s', notes: 'Hook arm on doorway, externally rotate, stride out, rotate chest.'},
        {name: 'Pec Minor Stretch', sets: '3 to 5', duration: '30s per side', rest: '30s', notes: 'Push shoulder back on doorway, pinch shoulder blades, raise arm.'},
        {name: 'Band Pull Apart (External Rotation)', sets: '3 to 5', duration: '20 (1 rep quality)', rest: '30s', notes: 'Pull band apart, externally rotate thumbs, keep shoulders down.'},
        {name: 'Band Overhead Protraction', sets: '3 to 5', duration: '8 to 10', rest: '30s', notes: 'Protract arms, externally rotate, raise overhead, maintain tall posture.'},
        {name: 'Isometric External Rotation', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Anchor band, hold arm in external rotation, step out slightly.'},
        {name: 'Concentric External Rotation', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Anchor band, pull arm across body to externally rotate.'},
        {name: 'Eccentric External Rotation', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Step out further, control band pulling arm back to internal rotation.'},
        {name: 'Heavy Eccentric External Rotation', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Larger step, slow control of band into internal rotation.'},
        {name: 'Plyometric External Rotation', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Step out, control band dynamically into internal rotation.'},
        {name: 'Sword Raise (Isometric)', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Hold band in front, resist internal rotation.'},
        {name: 'Sword Raise (Concentric)', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Pull band from pocket to top, externally rotate.'},
        {name: 'Sword Raise (Eccentric)', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Control band down to pocket from top position.'},
        {name: 'Sword Raise (Heavy Eccentric)', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Larger step, slow control down to pocket.'},
        {name: 'Sword Raise (Plyometric)', sets: '3 to 5', duration: '5-10s', rest: '30s', notes: 'Dynamic control down to pocket from top position.'},
        {name: 'Hip Flexor Squat', sets: '3 to 4', duration: '8 to 12', rest: '60s', notes: 'Elbows down, actively pull down with hip flexors, stabilize back.'},
        {name: 'Band-Assisted Squat', sets: '3 to 4', duration: '8 to 12', rest: '60s', notes: 'Pull bands down to engage hip flexors, push butt back.'},
        {name: 'Wall Rotator Cuff Activation', sets: '3 to 4', duration: '5 to 6', rest: '30s', notes: 'Back against wall, keep fingers and elbows on wall, externally rotate arms.'},
        {name: 'Janda Sit Up', sets: '3 to 4', duration: '10 to 12', rest: '30-60s', notes: 'Anchor band, contract glutes/hamstrings to turn off hip flexors.'},
        {name: 'Gymnast Abs', sets: '3 to 4', duration: '10 to 12', rest: '30-60s', notes: 'In Captain\\'s Chair, posterior pelvic tilt, lift tailbone.'},
        {name: 'Pallof Press', sets: '3 to 4', duration: '10-12 per side', rest: '30-60s', notes: 'Stand on one leg, press band overhead, stabilize core.'},
        {name: 'Sledge Hammer Swings', sets: '3 to 4', duration: '30s', rest: '30-60s', notes: 'Twist torso against band resistance, feet planted.'},
        {name: 'Jump Out (Band)', sets: '3 to 4', duration: '8-10', rest: '30-60s', notes: 'Jump out, resist band pull, focus on anti-rotation.'},
        {name: 'Suitcase Carry', sets: '3 to 4', duration: '30-40s per side', rest: '30-60s', notes: 'Walk with heavy dumbbell, keep shoulders level.'},
        {name: 'Side Plank Leg Lift', sets: '3 to 4', duration: '20-30s per side', rest: '30-60s', notes: 'Lift top leg in side plank, focus on lateral stability.'},
        {name: 'Quad Stretch (Lateral)', sets: '3 to 4', duration: '10-12 flexions', rest: '30s', notes: 'Use implement on vastus lateralis, bend knee while keeping leg locked.'},
        {name: 'Spinal Decompression Hang', sets: '2', duration: '1 min', rest: '0s', notes: 'Hang from pullup bar, drop pelvis, toes lightly touch ground.'},
        {name: 'Ab Hang', sets: '2', duration: '1 min', rest: '0s', notes: 'Hang with hollowed core, pull shoulder blades down for scapular stability.'},
        {name: 'TFL Flossing', sets: '3 to 4', duration: '10-12 flexions', rest: '30s', notes: 'Use Fat Gripz or tennis balls on TFL, flex hip while pressing.'}
      ]
    },
    info: {
      title: "Mobility & Tissue Work Routines",
      description: "Comprehensive mobility routines combining movement prep, tissue work, and targeted mobilizations. Choose the routine that matches your training needs.",
      schedule: "Can be performed daily or as needed. Dynamic Performance before workouts, Pain Relief as needed, General Mobility 3-4x/week, Strength & Stability on training days.",
      notes: [
        "Perform tissue work with moderate pressure - discomfort is OK, sharp pain is not",
        "Spend extra time on areas that feel restricted or tight",
        "Combine mobilizations with active movement for best results",
        "Use tools: lacrosse balls, VooDoo bands, foam rollers, resistance bands",
        "2-3 minutes per area is typically sufficient for tissue work"
      ]
    }
  }
};
