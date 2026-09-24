window.ATHLETIC_DEMOS = (() => {
  const shell=(body,label)=>`<svg viewBox="0 0 280 230" role="img" aria-label="${label} animated technique diagram"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0 0L0 6L6 3z" class="arrow-head"/></marker></defs><line class="floor" x1="15" y1="202" x2="265" y2="202"/>${body}</svg>`;
  const dot=(x,y)=>`<circle class="joint" cx="${x}" cy="${y}" r="5"/>`,arrow=(a,b,c,d)=>`<path class="motion-arrow" d="M${a} ${b}L${c} ${d}" marker-end="url(#arrow)"/>`;
  const poses={
    standing:n=>shell(`<g class="figure motion-bob"><circle cx="130" cy="51" r="18"/><path d="M130 69L130 139L98 199M130 139L164 199M130 94L94 126M130 94L166 126"/>${dot(130,94)}</g>${arrow(220,78,220,148)}`,n),
    push:n=>shell(`<g class="figure motion-push"><circle cx="213" cy="107" r="15"/><path d="M198 114L119 132L48 161M119 132L94 176M119 132L141 176M177 119L158 158L132 180"/>${dot(119,132)}</g>${arrow(235,72,235,135)}`,n),
    pull:n=>shell(`<path class="figure faint" d="M54 31L216 31"/><g class="figure motion-pull"><circle cx="136" cy="80" r="17"/><path d="M136 97L136 149L105 199M136 149L168 199M136 108L91 32M136 108L181 32"/>${dot(136,108)}</g>${arrow(235,142,235,66)}`,n),
    row:n=>shell(`<path class="figure faint" d="M235 34L235 201M235 65L181 97"/><g class="figure motion-push"><circle cx="165" cy="96" r="15"/><path d="M150 103L92 131L42 181M92 131L83 198M92 131L128 191M150 110L181 97"/>${dot(92,131)}</g>${arrow(207,132,166,106)}`,n),
    squat:n=>shell(`<g class="figure motion-squat"><circle cx="125" cy="51" r="18"/><path d="M125 69L122 128L86 157L60 200M122 128L163 157L196 200M123 93L84 121M123 93L165 119"/>${dot(122,128)}</g>${arrow(229,84,229,156)}`,n),
    hinge:n=>shell(`<g class="figure motion-hinge"><circle cx="126" cy="50" r="18"/><path d="M126 68L126 142L93 200M126 142L162 200M126 94L87 137M126 94L167 137"/>${dot(126,142)}</g>${arrow(211,88,238,130)}`,n),
    bridge:n=>shell(`<g class="figure motion-core"><circle cx="48" cy="171" r="15"/><path d="M63 171L118 149L173 171L229 198M118 149L96 198M173 171L192 200"/>${dot(118,149)}</g>${arrow(118,187,118,132)}`,n),
    core:n=>shell(`<g class="figure motion-core"><circle cx="54" cy="171" r="15"/><path d="M69 171L124 171L186 194M124 171L164 128M92 168L61 120"/>${dot(124,171)}</g>${arrow(196,128,229,95)}`,n),
    shoulder:n=>shell(`<g class="figure"><circle cx="130" cy="51" r="18"/><path d="M130 69L130 139L98 199M130 139L164 199"/><g class="motion-raise"><path d="M130 94L86 124M130 94L174 124"/></g>${dot(130,94)}</g>${arrow(213,142,213,72)}`,n),
    handstand:n=>shell(`<path class="figure faint" d="M240 25L240 202"/><g class="figure motion-pull"><circle cx="186" cy="168" r="16"/><path d="M186 152L190 96L168 36M190 96L215 35M186 137L147 190M186 137L221 190"/>${dot(186,137)}</g>${arrow(121,155,121,94)}`,n),
    walk:n=>shell(`<g class="figure motion-bob"><circle cx="132" cy="57" r="17"/><path d="M132 74L130 140L88 199M130 140L182 194M130 99L91 132M130 99L174 124"/>${dot(130,140)}</g>${arrow(232,112,194,112)}`,n),
    ankle:n=>shell(`<path class="figure faint" d="M213 38L213 202"/><g class="figure"><circle cx="101" cy="45" r="16"/><path d="M101 62L104 124L79 199M104 124L158 166L186 201M104 87L143 117"/>${dot(104,124)}</g>${arrow(155,140,197,140)}`,n),
    mobility:n=>shell(`<g class="figure motion-lunge"><circle cx="119" cy="49" r="17"/><path d="M119 66L119 126L80 162L57 200M119 126L171 158L227 194M119 91L84 125M119 91L160 122"/>${dot(119,126)}</g>${arrow(243,91,243,150)}`,n)
  };
  const base={
    push:{steps:["Set the hands and brace the body as one unit.","Lower with the elbows traveling diagonally back.","Press away without twisting, sagging, or shrugging."],cue:"Head, ribs, and hips move together.",mistake:"Elbows flaring or the trunk losing position."},
    pull:{steps:["Set a secure grip and controlled shoulder position.","Drive the elbows down as the body rises.","Lower smoothly without swinging or dropping."],cue:"Pull without reaching the chin.",mistake:"Shrugging or using momentum."},
    row:{steps:["Set a rigid body position and secure grip.","Pull the lower ribs toward the hands.","Pause, then lower without the hips dropping."],cue:"Keep the neck long and lead with the chest.",mistake:"Rotating, shrugging, or leading with the chin."},
    squat:{steps:["Plant the whole working foot and use support as needed.","Lower slowly while the knee tracks with the toes.","Drive through the full foot to return."],cue:"Use only the depth you can own.",mistake:"Knee collapse or dropping into the bottom."},
    hinge:{steps:["Stand with soft knees and a light brace.","Reach the hips backward while the spine stays long.","Drive the hips forward and finish tall."],cue:"Move through the hips, not the low back.",mistake:"Squatting down or rounding the back."},
    bridge:{steps:["Plant the feet and settle the ribs.","Tuck slightly and lift using the glutes.","Pause, then lower before the back takes over."],cue:"Finish with the hips, not a back arch.",mistake:"Flaring the ribs or pushing only through the toes."},
    core:{steps:["Set the ribs and pelvis before moving.","Move only as far as trunk control remains.","Return slowly, reset, and breathe."],cue:"Shorten the range before the back changes position.",mistake:"Using speed or holding the breath."},
    shoulder:{steps:["Stack the ribs and set the shoulder comfortably.","Move slowly through the prescribed arm path.","Stop before shrugging or arching, then return."],cue:"Reach long instead of forcing range.",mistake:"Flaring the ribs to gain motion."},
    handstand:{steps:["Set secure hands and a stable wall-supported position.","Lower through a pain-free pressing range.","Press away while keeping the ribs controlled."],cue:"End the set before position changes.",mistake:"Forcing depth or arching the low back."},
    walk:{steps:["Stand tall and begin with short, quiet steps.","Use a smooth rhythm at the prescribed pace.","Keep the effort controlled enough to finish."],cue:"Smooth rhythm matters more than speed.",mistake:"Overstriding or starting too fast."},
    ankle:{steps:["Keep the heel and foot arch controlled.","Move through the ankle without rolling the foot.","Pause at the end of the comfortable range."],cue:"Make the motion come from the ankle.",mistake:"Bouncing or creating fake range."},
    mobility:{steps:["Use support and establish a comfortable start position.","Ease into range while the pelvis and ribs stay controlled.","Pause, breathe, and return without bouncing."],cue:"The stretch should stay tolerable.",mistake:"Forcing range or twisting to move farther."},
    standing:{steps:["Set a stable stance and light brace.","Perform the named movement through a controlled range.","Pause, then return without momentum."],cue:"Keep the working joint aligned.",mistake:"Rushing or compensating elsewhere."}
  };
  const rows=`
breathing|core|4 sec in · 6 sec out|Lower ribs and deep abdomen|Feet supported higher|Add a gentle hamstring pull
glute-bridge|bridge|2 up · 2 hold · 3 down|Glutes and back of hips|Shorter range|Single-leg bridge
dead-bug|core|3 reach · 1 pause · 3 return|Deep abdomen|Move only the arms|Extend both limbs farther
ankle-wall|ankle|2 forward · 1 pause · 2 back|Front of the ankle|Move closer to wall|Move foot farther away
squat-rock|squat|3 down · gentle rocks · 3 up|Hips, ankles, inner thighs|Use more support|Use less support
hip-flexor|mobility|Ease in · hold 30 sec|Front of the kneeling-side hip|Smaller shift|Add overhead reach
hip-90|mobility|3 sec each direction|Deep hip rotation|Hands behind body|Hands off floor
hang|pull|Easy 20-sec hold|Lats and torso|Keep feet supported|Reduce foot support
oap|push|3 down · 1 pause · controlled up|Chest, triceps, anti-rotation core|Higher hand support|Lower hand support
hspu|handstand|3 down · pause · strong press|Shoulders and triceps|Pike push-up|Increase controlled depth
pushups|push|3 down · 1 pause · 2 up|Chest, triceps, trunk|Incline push-up|Feet-elevated push-up
push-volume|push|2 down · 1 pause · 2 up|Chest and triceps|Incline push-up|Harder angle
press-up|push|3 down · 1 pause · 2 up|Chest and triceps|Higher surface|Lower surface
pullups|pull|2 up · 1 hold · 3 down|Lats and upper back|Foot assistance|Add reps, then load
pull-volume|pull|2 up · 1 hold · 3 down|Lats, arms, upper back|Band assistance|Less assistance
rows-mon|row|2 pull · 1 hold · 3 lower|Mid-back and arms|More upright angle|Lower body angle
rows-wed|row|2 pull · 1 hold · 3 lower|Lats and mid-back|Higher incline|One-arm version
row-volume|row|2 pull · 1 hold · 3 lower|Mid-back, lats, arms|More upright angle|Feet elevated
pistol|squat|4 down · 1 pause · controlled up|Standing-leg quad and glute|Higher box or more support|Less support
pistol-fri|squat|4 down · 1 pause · smooth up|Quad, glute, foot|Box pistol|Less assistance
situps-wed|core|2 up · 3 down|Abdominals|Short-range curl-up|Longer lever
situp-volume|core|2 up · 3 down|Abdominals|Curl-up|Controlled load
knee-tread|walk|Continuous controlled steps|Quads and warmth around knees|Hold support|Longer duration
backward-tread|walk|Continuous easy rhythm|Legs warming without strain|Hold support|Longer duration
knee-flex|squat|2 bend · 1 pause · 3 return|Back of thigh and knee|Smaller range|Light resistance
knee-ext|standing|2 up · 2 hold · 3 down|Front of thigh|Smaller range|Light band resistance
knee-stability|standing|20-sec steady hold|Foot, hip, thigh stabilizers|Fingertip support|Add a small reach
step-forward|squat|3 down · 1 pause · 2 return|Front-leg quad and glute|Shorter supported step|Deeper controlled step
step-back|squat|3 down · 1 pause · 2 return|Front-leg glute and quad|Smaller supported step|Greater depth
step-side|squat|2 step · 2 control · 2 return|Side glute and thigh|Smaller step|Band resistance
mobilize|mobility|3 down · pause · 3 up|Hip, ankle, front thigh|Shorter range|Deeper range
posterior-chain|hinge|3 back · 1 pause · 2 stand|Hamstrings and glutes|Hands supported|Single-leg hinge
long-calf|ankle|2 up · 2 hold · 3 down|Upper calf|Two-leg raise|Single-leg with load
short-calf|ankle|2 up · 2 hold · 3 down|Lower calf and Achilles|Two-leg raise|Single-leg with load
front-shins|ankle|2 up · 1 hold · 3 down|Front of shins|More upright stance|Feet farther from wall
shoulders-out|shoulder|2 out · 2 hold · 3 in|Back of shoulders|No resistance|Light band
wall-slides|shoulder|3 up · 1 pause · 3 down|Serratus and upper back|Shorter slide|Light band
scap-pull|pull|2 lift · 2 hold · 3 lower|Lower traps and lats|Feet assisted|Longer holds
shoulder-stability|shoulder|20-sec steady hold|Shoulder and trunk stabilizers|More upright support|Lower support
wrist-flex|shoulder|2 up · 1 hold · 3 down|Front of forearm|No load|Very light load
back-one-leg|standing|2 back · 2 hold · 3 return|Glute of moving leg|Smaller range|Light band
back-hip-flex|mobility|Ease in · hold · ease out|Front of back-side hip|Smaller shift|Overhead reach
back-two-leg|bridge|2 up · 20-sec hold · 3 down|Both glutes|Shorter hold|Bridge march
spine|mobility|4 sec each direction|Gentle motion across spine|Smaller range|Add breathing pauses`;
  const specs={};rows.trim().split("\n").forEach(line=>{const [id,type,tempo,feel,easier,harder]=line.split("|");specs[id]={type,tempo,feel,easier,harder}});
  const exact={
    breathing:{steps:["Lie on your back with feet supported and knees near 90°.","Inhale quietly into the sides and back of the ribs.","Exhale slowly until the ribs settle; pause before the next breath."],cue:"Make the exhale longer than the inhale.",mistake:"Forcing the back flat or shrugging."},
    "ankle-wall":{steps:["Plant the whole foot a short distance from the wall.","Drive the knee toward the wall in line with the middle toes.","Touch gently, then return while the heel stays down."],cue:"Move the knee forward without losing the arch.",mistake:"Lifting the heel or collapsing the foot inward."},
    oap:{steps:["Choose a wall, bench, or floor height that keeps the shoulders level.","Lower the chest as one unit while resisting rotation.","Press away without twisting the hips or ribs."],cue:"Raise the support when the body stops moving as one piece.",mistake:"Opening the hips or dropping one shoulder."},
    hspu:{steps:["Set the hands securely and establish a controlled wall position.","Lower only through the range the shoulders can own.","Press the floor away while keeping the ribs controlled."],cue:"End the set before position changes.",mistake:"Overarching the back or forcing depth."},
    pistol:{steps:["Use a post, strap, or counter for enough assistance.","Sit down and back over the working foot as the free leg reaches forward.","Keep the whole foot planted and stand smoothly."],cue:"Own the range before reducing assistance.",mistake:"Knee collapse or dropping into the bottom."},
    "knee-tread":{steps:["Set a slow treadmill or choose a clear walking path.","Take short backward steps, contacting with the forefoot first.","Keep the torso tall and maintain a smooth rhythm."],cue:"Short, quiet steps matter more than speed.",mistake:"Taking long steps or letting the belt pull you."},
    "wall-slides":{steps:["Stand with ribs stacked and forearms supported on the wall.","Slide upward while gently reaching into the wall.","Stop before shrugging or arching, then return."],cue:"Reach long rather than forcing the hands flat.",mistake:"Flaring the ribs to fake overhead range."},
    "posterior-chain":{steps:["Stand with soft knees and brace lightly.","Push the hips backward while keeping the spine long.","Drive the hips forward and finish tall."],cue:"Reach the hips back as the chest travels forward.",mistake:"Squatting down or rounding the back."}
  };
  function get(id,name){const s=specs[id]||{type:"standing",tempo:"Slow and controlled",feel:"The intended working muscles",easier:"Reduce the range",harder:"Increase range only with control"},tech=exact[id]||base[s.type]||base.standing;return {...s,...tech,svg:(poses[s.type]||poses.standing)(name)}}
  return {get,profiles:specs};
})();
