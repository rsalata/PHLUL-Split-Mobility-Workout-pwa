window.ATHLETIC_DATA = (() => {
  const ex = (id,name,target,cue="",timer=0) => ({id,name,target,cue,timer});
  const kneeLab = [
    ex("knee-tread","Backwards / forwards treadmill","3 × 1 min","Smooth pace; regress if pain rises.",60),
    ex("knee-flex","Knee flexion","3 × 1:30","Use a pain-free range.",90),
    ex("knee-ext","Knee extension","3 × 30/leg"),
    ex("knee-stability","Knee stability","3 × 20/leg"),
    ex("step-forward","Step forward","3 × 15/leg"),
    ex("step-back","Step backward","3 × 15/leg"),
    ex("step-side","Step sideways","3 × 15/leg"),
    ex("press-up","Press up","3 × 10"),
    ex("mobilize","Mobilize","3 × 12/leg"),
    ex("posterior-chain","Posterior chain","3 × 8"),
    ex("long-calf","Long calf muscles","3 × 12/leg"),
    ex("short-calf","Short calf muscles","3 × 12/leg"),
    ex("front-shins","Front of shins","3 × 20")
  ];
  const shoulderLab = [
    ["shoulders-out","Step 0: Shoulders Out","1 × 20"],["shoulders-over","Step 1: Shoulders Over","1 × 12"],
    ["shoulders-up","Step 2: Shoulders Up","1 × 8"],["shoulders-back","Step 3: Shoulders Back","1 × 8"],
    ["shoulder-stability","Step 4: Shoulder Stability","1 × 12/side"],["shoulder-pull","Step 5: Pull","1 × 8; hold 3 sec at top"],
    ["shoulder-push","Step 6: Shoulders Push","1 × 8; hold 3 sec at bottom"],["shoulder-control","Step 7: Control","1 × 8"],
    ["shoulder-biceps","Step 8: Biceps","1 × 8"],["shoulder-triceps","Step 9: Triceps","1 × 8"],
    ["wrist-flex","Step 10: Wrist Flexion","1 × 20/hand"],["wrist-extend","Step 11: Wrist Extension","1 × 20/hand"],
    ["hand-grip","Step 12: Hand Grip","1 × 20/hand"],["hand-raise","Step 13: Hand Raise","1 × 20/hand"]
  ].map(v=>ex(...v));
  const backLab = [
    ex("backward-tread","Step 0: Backward treadmill","3 min","Easy, controlled steps.",180),
    ex("back-one-leg","Step 1: Extend back from one leg","1 × 8; hold 3 sec"),ex("back-hip-flex","Step 2: Hip flexors","1 × 20"),
    ex("back-two-leg","Step 3: Extend back from two legs","1 × 8; hold 5 sec"),ex("lengthen-hip","Step 4: Lengthen hip flexors","1 × 20"),
    ex("repeat-back-1","Step 5: Repeat Step 3","1 × 8; hold 5 sec"),ex("lengthen-groin","Step 6: Lengthen groin","1 × 20"),
    ex("repeat-back-2","Step 7: Repeat Step 3","1 × 8; hold 5 sec"),ex("upper-lats","Step 8: Lengthen upper lats","1 × 12"),
    ex("side-back","Step 9: Extend back from side","1 × 12"),ex("lower-lats","Step 10: Lengthen lower lats","1 × 15"),
    ex("repeat-side","Step 11: Repeat Step 9","1 × 12"),ex("repeat-hip","Step 12: Repeat Step 4","1 × 20"),
    ex("spine","Step 13: Mobilize spine","1 × 12")
  ];
  const baseWarmup = [
    ex("breathing","90/90 Breathing Reset","5–6 breaths","Exhale, ribs down, flatten low back.",60),
    ex("glute-bridge","Posterior Tilt Glute Bridge","2 × 10","Lift with glutes; don’t arch."),
    ex("dead-bug","Dead Bug","2 × 8/side","Low back stays pinned."),
    ex("ankle-wall","Knee-to-Wall Ankle Mobility","2 × 10/ankle","Heel stays down; knee goes forward."),
    ex("squat-rock","Supported Deep Squat Rock","60 sec","Heels down, tall chest, neutral low back.",60),
    ex("hip-flexor","Half-Kneeling Hip Flexor Stretch","30 sec/side","Tuck first, then stretch.",30),
    ex("hip-90","90/90 Hip Rotations","60–120 sec","Stay tall; move from the hips.",90),
    ex("hang","Optional Hanging Decompression","20–30 sec","Light abs; don’t arch.",25)
  ];
  const runPlan = [
    ["25 min easy","6 × 1 min brisk / 90 sec easy","30 min easy"],
    ["28 min easy","7 × 1 min brisk / 90 sec easy","32 min easy"],
    ["30 min easy","5 × 2 min brisk / 2 min easy","35 min easy"],
    ["25 min easy","4 × 2 min controlled","5K baseline; comfortable effort"],
    ["30 min easy","6 × 2 min brisk / 90 sec easy","38 min easy"],
    ["32 min easy","4 × 3 min brisk / 2 min easy","40 min easy"],
    ["35 min easy","5 × 3 min brisk / 90 sec easy","42 min easy"],
    ["28 min easy","3 × 5 min controlled / 2 min easy","5K steady test"],
    ["35 min easy","6 × 400 m at goal pace; 200 m easy","45 min easy"],
    ["35 min easy + 4 strides","4 × 800 m at goal pace; 2 min easy","5K with middle 2K at goal pace"],
    ["38 min easy","3 × 1 km at goal pace; 3 min easy","45 min easy"],
    ["30 min easy","20 min continuous near goal pace","5K progress test"],
    ["35 min easy","8 × 400 m a little faster than goal pace","42 min easy"],
    ["30 min easy + 4 strides","4 × 1 km at goal pace; 2:30 easy","5K controlled at 6:05–6:15/km"],
    ["28 min easy","3 × 800 m at goal pace; full recovery","35 min easy"],
    ["20 min easy","4 × 200 m relaxed-fast; full recovery","5K goal test: 30:00 or better"]
  ];
  const phases = [
    {from:1,to:4,name:"Foundation",note:"Build pain-free volume and establish baselines."},
    {from:5,to:8,name:"Capacity",note:"Add clean weekly volume and reduce assistance."},
    {from:9,to:12,name:"Specificity",note:"Practice longer sets and 30-minute 5K pace."},
    {from:13,to:16,name:"Goal Prep",note:"Rehearse the standards and stagger max tests."}
  ];
  const strengthFor = (week,day) => {
    const p = Math.ceil(week/4);
    const deload = week%4===0;
    const volume = deload ? "Leave 3–4 reps in reserve" : "Leave 2–3 reps in reserve";
    if(day===1) return [
      ex("oap","One-arm push-up progression",`${p+2} × 2–5/side`,"Use the hardest regression that stays level and pain-free."),
      ex("hspu","Wall handstand push-up progression",`${p+2} × 1–5`,"Stop before form or shoulder position changes."),
      ex("pushups","Push-ups",`${4+p} submax sets`,volume),
      ex("rows-mon","Inverted rows",`${3+p} × 10–20`,"Keep the body rigid; standardize the ring/bar height.")
    ];
    if(day===3) return [
      ex("pistol","Assisted pistol skill",`4 × ${Math.min(2+p,5)}/leg`,"Use assistance to own the full range."),
      ex("pullups","Pull-ups / chin-ups",`${4+p} submax sets`,volume),
      ex("rows-wed","High-incline or one-arm row progression",`${3+p} × 8–15/side`),
      ex("situps-wed","Sit-ups",`${3+p} × 12–25`,"Use one consistent standard.")
    ];
    return [
      ex("push-volume","Push-up density sets",`${5+p} submax sets`,"Even sets beat one early max set."),
      ex("pull-volume","Pull-up / chin-up volume",`${4+p} submax sets`,volume),
      ex("row-volume","Inverted-row volume",`${4+p} × 12–25`),
      ex("pistol-fri","Pistol practice",`2–4 × ${Math.min(2+p,5)}/leg`,"Keep this low-volume after Knee Lab."),
      ex("situp-volume","Sit-up volume",`${4+p} × 15–30`)
    ];
  };
  const schedule = [
    {day:1,title:"Push Skill + Knee Lab",kind:"strength",modules:["warmup","strength","knee"]},
    {day:2,title:"Easy Run + Shoulder Lab",kind:"run",runIndex:0,modules:["warmup","run","shoulder"]},
    {day:3,title:"Pull, Core + Knee Lab",kind:"strength",modules:["warmup","strength","knee"]},
    {day:4,title:"Intervals + Back Lab",kind:"run",runIndex:1,modules:["warmup","run","back"]},
    {day:5,title:"Full Body Volume + Knee Lab",kind:"strength",modules:["warmup","strength","knee"]},
    {day:6,title:"Long Run + Mobility",kind:"run",runIndex:2,modules:["warmup","run"]},
    {day:0,title:"Recovery",kind:"recovery",modules:["recovery"]}
  ];
  const goals = [
    {id:"pushups",name:"Push-ups",target:100,unit:"reps"},{id:"oneArm",name:"One-arm push-ups",target:25,unit:"total"},
    {id:"pistolsL",name:"Pistol squat — left",target:5,unit:"reps"},{id:"pistolsR",name:"Pistol squat — right",target:5,unit:"reps"},
    {id:"hspu",name:"Wall HSPU",target:5,unit:"reps"},{id:"pullups",name:"Pull-ups / chin-ups",target:25,unit:"reps"},
    {id:"rows",name:"Inverted rows",target:100,unit:"reps"},{id:"situps",name:"Sit-ups",target:100,unit:"reps"},
    {id:"run5k",name:"5K time",target:1800,unit:"seconds",lower:true}
  ];
  return {kneeLab,shoulderLab,backLab,baseWarmup,runPlan,phases,strengthFor,schedule,goals,ex};
})();
