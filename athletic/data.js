window.ATHLETIC_DATA = (() => {
  const ex=(id,name,target,cue="",timer=0,meta={})=>({id,name,target,cue,timer,...meta});
  const clone=(item,changes={})=>({...item,...changes});

  const warmups={
    breathing:ex("breathing","90/90 Breathing Reset","5–6 breaths","Exhale fully; keep ribs and low back controlled.",60,{sets:1}),
    bridge:ex("glute-bridge","Posterior Tilt Glute Bridge","10 reps","Lift with the glutes without arching the back.",0,{sets:1}),
    deadbug:ex("dead-bug","Dead Bug","8/side","Keep the low back gently pinned.",0,{sets:1}),
    ankle:ex("ankle-wall","Knee-to-Wall Ankle Mobility","10/ankle","Keep the heel down and track the knee forward.",0,{sets:1}),
    squat:ex("squat-rock","Supported Deep Squat Rock","45 sec","Use support and keep the range comfortable.",45,{sets:1}),
    hipflex:ex("hip-flexor","Half-Kneeling Hip Flexor Stretch","30 sec/side","Tuck the pelvis before moving forward.",30,{sets:1}),
    hip90:ex("hip-90","90/90 Hip Rotations","60 sec","Stay tall and move from the hips.",60,{sets:1}),
    hang:ex("hang","Optional Hanging Decompression","20 sec","Keep light abdominal tension; skip if the shoulder pinches.",20,{sets:1})
  };
  const warmupFor=(day,mode="standard")=>{
    const byDay=day===1?[warmups.breathing,warmups.bridge,warmups.deadbug,warmups.hang]:day===3?[warmups.breathing,warmups.ankle,warmups.squat,warmups.hip90,warmups.hang]:day===5?[warmups.breathing,warmups.bridge,warmups.ankle,warmups.hipflex,warmups.hip90]:[warmups.breathing,warmups.ankle,warmups.hipflex,warmups.hip90];
    return byDay.slice(0,mode==="short"?4:5);
  };

  const kneePool=[
    ex("knee-tread","Backward Treadmill or Backward Walk","1 min","Use short, controlled steps.",60),
    ex("knee-flex","Supported Knee Flexion","8/leg","Use a pain-free range and steady support."),
    ex("knee-ext","Controlled Knee Extension","12/leg","Straighten the knee without snapping it locked."),
    ex("knee-stability","Single-Leg Knee Stability","20 sec/leg","Keep the pelvis level and knee tracking over the foot.",20),
    ex("step-forward","Controlled Forward Step","8/leg","Lower under control and keep the whole foot planted."),
    ex("step-back","Controlled Backward Step","8/leg","Reach back softly without twisting the front knee."),
    ex("step-side","Controlled Side Step","10/side","Keep toes forward and pelvis level."),
    ex("mobilize","Supported Split-Squat Mobilization","8/leg","Use support and only the range you can control."),
    ex("posterior-chain","Posterior-Chain Hinge","8 reps","Push the hips back and keep the trunk braced."),
    ex("long-calf","Straight-Knee Calf Raise","12/leg","Pause at the top and lower slowly."),
    ex("short-calf","Bent-Knee Calf Raise","12/leg","Keep the knee bent while the heel travels fully."),
    ex("front-shins","Tibialis Raise","15–20 reps","Keep heels planted and lift the toes."),
    ex("press-up","Incline Press-Up","8–10 reps","Use a height that keeps the shoulder comfortable.")
  ];
  const rehabIds={
    1:["knee-tread","knee-flex","step-forward","front-shins","knee-stability"],
    3:["knee-ext","step-side","long-calf","mobilize","knee-stability"],
    5:["step-back","posterior-chain","short-calf","front-shins","mobilize"]
  };
  const shoulderPool=[
    ex("shoulders-out","Shoulder External Rotation","12 reps","Keep elbows controlled and avoid shrugging."),
    ex("wall-slides","Wall Slide","10 reps","Keep ribs down while reaching upward."),
    ex("scap-pull","Scapular Pull","8 reps","Move the shoulder blades without bending the elbows."),
    ex("shoulder-stability","Shoulder Stability Hold","20 sec/side","Use a pain-free position and steady pressure.",20),
    ex("wrist-flex","Wrist Flexion","15/hand","Move slowly through a comfortable range.")
  ];
  const backPool=[
    ex("backward-tread","Backward Walk","2 min","Use an easy pace and short steps.",120),
    ex("back-one-leg","Supported Single-Leg Hip Extension","8/leg","Move from the hip without arching the back."),
    ex("back-hip-flex","Hip-Flexor Mobilization","10/side","Tuck the pelvis and keep ribs down."),
    ex("back-two-leg","Glute Bridge Hold","20 sec","Squeeze the glutes without overextending.",20),
    ex("spine","Gentle Spine Mobilization","8 reps","Move slowly and stop before irritation.")
  ];
  const selectRehab=(pool,count,sets)=>pool.slice(0,count).map(x=>clone(x,{sets,target:`${sets} × ${x.target}`}));
  const rehabFor=(day,mode="standard")=>{
    const count=mode==="short"?3:mode==="full"?5:4,sets=mode==="full"?2:1;
    if(day===1||day===3||day===5){const ordered=rehabIds[day].map(id=>kneePool.find(x=>x.id===id));return {title:"Focused Knee Work",items:selectRehab(ordered,count,sets)}}
    if(day===2)return {title:"Focused Shoulder Work",items:selectRehab(shoulderPool,count,sets)};
    if(day===4)return {title:"Focused Back Work",items:selectRehab(backPool,count,sets)};
    return {title:"Recovery Mobility",items:selectRehab([warmups.breathing,warmups.squat,warmups.hipflex,warmups.hip90],Math.min(4,count),mode==="short"?1:2)};
  };

  const phaseFor=week=>week<=4?{name:"Foundation",note:"Build repeatable technique and pain-free volume."}:week<=8?{name:"5K Build",note:"Extend running intervals while progressing clean strength reps."}:week<=12?{name:"PR Build",note:"Develop sustained pace and slightly harder strength variations."}:{name:"Goal Prep",note:"Sharpen pace, consolidate strength, and arrive fresh for testing."};
  const strengthBase={
    1:[
      ["oap","One-Arm Push-Up Progression","2–5/side","Use the hardest regression that stays level and pain-free."],
      ["hspu","Wall Handstand Push-Up Progression","1–5 reps","Stop before form or shoulder position changes."],
      ["pushups","Push-Ups","6–15 reps","Leave two clean reps in reserve."],
      ["rows-mon","Inverted Rows","8–15 reps","Keep the body rigid and standardize the bar height."]
    ],
    3:[
      ["pistol","Assisted Pistol Skill","2–5/leg","Use enough assistance to own the range."],
      ["pullups","Pull-Ups / Chin-Ups","2–8 reps","Stop before swinging or neck reaching."],
      ["rows-wed","High-Incline or One-Arm Row","8–15/side","Keep the shoulder down and pull toward the ribs."],
      ["situps-wed","Controlled Sit-Ups","10–20 reps","Use one repeatable standard."]
    ],
    5:[
      ["push-volume","Push-Up Volume","8–20 reps","Keep the sets even instead of starting with a max."],
      ["pull-volume","Pull-Up / Chin-Up Volume","2–8 reps","Leave two clean reps in reserve."],
      ["row-volume","Inverted-Row Volume","10–20 reps","Keep the same body angle for every set."],
      ["pistol-fri","Pistol Practice","2–5/leg","Keep the volume low and the range controlled."],
      ["situp-volume","Sit-Up Volume","12–25 reps","Stop if the low back becomes irritated."]
    ]
  };
  const strengthFor=(week,day,mode="standard")=>{
    const rows=strengthBase[day]||strengthBase[1],phase=phaseFor(week),counts=mode==="short"?[3,3,2]:mode==="full"?(day===5?[4,4,4,3,3]:[4,4,4,4]):(day===5?[3,3,2,2,2]:[3,3,3,3]);
    return rows.slice(0,counts.length).map((v,i)=>ex(v[0],v[1],`${counts[i]} × ${v[2]}`,`${v[3]} ${phase.name}: progress reps first, then use a harder variation.`,0,{sets:counts[i]}));
  };

  const intervals=(label,run,walk,times)=>({type:"interval",label,segments:Array.from({length:times},()=>[{kind:"run",seconds:run},{kind:"walk",seconds:walk}]).flat()});
  const sequence=(label,segments)=>({type:"interval",label,segments});
  const steady=(label,minutes)=>({type:"steady",label,segments:[{kind:"run",seconds:minutes*60}]});
  const race=label=>({type:"distance",label,segments:[{kind:"run",seconds:0,label}]});
  const runPlan=[
    [intervals("Run 1 min / Walk 1:30–2:00 × 6",60,105,6),intervals("Run 1 min / Walk 2 min × 8",60,120,8),intervals("Run 1 min / Walk 1 min × 10",60,60,10)],
    [intervals("Run 2 min / Walk 2 min × 5",120,120,5),intervals("Run 3 min / Walk 2 min × 4",180,120,4),intervals("Run 3 min / Walk 1 min × 5",180,60,5)],
    [intervals("Run 5 min / Walk 3 min × 3",300,180,3),intervals("Run 5 min / Walk 2 min × 3",300,120,3),intervals("Run 6 min / Walk 2 min × 3",360,120,3)],
    [intervals("Run 8 min / Walk 3 min × 2",480,180,2),intervals("Run 10 min / Walk 2 min × 2",600,120,2),intervals("Run 12 min / Walk 2 min × 2",720,120,2)],
    [sequence("Run 15 min / Walk 3 min / Run 5 min",[{kind:"run",seconds:900},{kind:"walk",seconds:180},{kind:"run",seconds:300}]),steady("Run 20 min nonstop",20),sequence("Run 8 min / Walk 5 min / Run 8 min",[{kind:"run",seconds:480},{kind:"walk",seconds:300},{kind:"run",seconds:480}])],
    [sequence("Run 20 min / Walk 3 min / Run 5 min",[{kind:"run",seconds:1200},{kind:"walk",seconds:180},{kind:"run",seconds:300}]),steady("Run 22 min nonstop",22),steady("Run 25 min nonstop",25)],
    [steady("Run 26 min nonstop",26),steady("Run 28 min nonstop",28),steady("Run 30 min nonstop",30)],
    [steady("Run 20 min easy",20),sequence("Run 10 min / Walk 5 min / Run 10 min",[{kind:"run",seconds:600},{kind:"walk",seconds:300},{kind:"run",seconds:600}]),race("Run your 5K")],
    [steady("20 min easy",20),intervals("Run 2 min strong / Walk-jog 2 min × 6",120,120,6),steady("30 min easy",30)],
    [steady("25 min easy",25),intervals("Run 3 min strong / Walk-jog 2 min × 5",180,120,5),steady("32 min easy",32)],
    [steady("25 min easy + 4 relaxed strides",25),intervals("Run 5 min at target effort / Easy 2 min × 4",300,120,4),steady("35 min easy",35)],
    [steady("25 min easy",25),steady("20 min steady near goal pace",20),race("5K benchmark")],
    [steady("30 min easy",30),intervals("Run 4 min at goal pace / Easy 2 min × 5",240,120,5),steady("40 min easy",40)],
    [steady("25 min easy + 4 relaxed strides",25),intervals("Run 8 min at goal pace / Easy 3 min × 3",480,180,3),steady("35 min easy",35)],
    [steady("25 min easy",25),intervals("Run 3 min faster than goal pace / Easy 3 min × 4",180,180,4),steady("30 min easy",30)],
    [steady("20 min easy",20),intervals("Run 1 min relaxed-fast / Easy 2 min × 4",60,120,4),race("5K PR attempt")]
  ];

  const schedule=[
    {day:1,title:"Push Skill + Focused Knee",kind:"strength"},{day:2,title:"Run 1 + Focused Shoulder",kind:"run",runIndex:0},
    {day:3,title:"Pull, Core + Focused Knee",kind:"strength"},{day:4,title:"Run 2 + Focused Back",kind:"run",runIndex:1},
    {day:5,title:"Full Body + Focused Knee",kind:"strength"},{day:6,title:"Run 3 + Mobility",kind:"run",runIndex:2},
    {day:0,title:"Short Recovery",kind:"recovery"}
  ];
  const runFor=(week,index)=>runPlan[Math.max(0,Math.min(15,week-1))][index];
  const workoutFor=(week,day,mode="standard")=>{const scheduleItem=schedule.find(x=>x.day===day),rehab=rehabFor(day,mode);return {schedule:scheduleItem,warmup:warmupFor(day,mode),strength:scheduleItem.kind==="strength"?strengthFor(week,day,mode):[],run:scheduleItem.kind==="run"?runFor(week,scheduleItem.runIndex):null,rehab}};
  const goals=[
    {id:"pushups",name:"Push-Ups",target:100,unit:"reps"},{id:"oneArm",name:"One-Arm Push-Ups",target:25,unit:"total"},
    {id:"pistolsL",name:"Pistol Squat — Left",target:5,unit:"reps"},{id:"pistolsR",name:"Pistol Squat — Right",target:5,unit:"reps"},
    {id:"hspu",name:"Wall HSPU",target:5,unit:"reps"},{id:"pullups",name:"Pull-Ups / Chin-Ups",target:25,unit:"reps"},
    {id:"rows",name:"Inverted Rows",target:100,unit:"reps"},{id:"situps",name:"Sit-Ups",target:100,unit:"reps"},{id:"run5k",name:"5K Time",target:1800,unit:"seconds",lower:true}
  ];
  return {ex,warmupFor,kneePool,shoulderPool,backPool,rehabFor,phaseFor,strengthFor,runPlan,runFor,schedule,workoutFor,goals};
})();
