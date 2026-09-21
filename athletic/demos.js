window.ATHLETIC_DEMOS = (() => {
  const shell=body=>`<svg viewBox="0 0 240 220" role="img" aria-label="Animated line drawing exercise guide"><line class="floor" x1="18" y1="194" x2="222" y2="194"/>${body}</svg>`;
  const dot=(x,y,r=5)=>`<circle class="joint" cx="${x}" cy="${y}" r="${r}"/>`;
  const standing=(cls="motion-bob",arms='<path d="M102 91 L75 122 M102 91 L132 120"/>')=>shell(`<g class="figure ${cls}"><circle cx="102" cy="50" r="18"/><path d="M102 68 L102 130 L75 188 M102 130 L132 188"/>${arms}${dot(102,91)}</g>`);
  const squat=()=>shell(`<g class="figure motion-squat"><circle cx="100" cy="48" r="18"/><path d="M100 66 L100 123 L70 151 L48 190 M100 123 L135 151 L160 190 M100 88 L65 112 M100 88 L140 111"/>${dot(100,123)}</g>`);
  const pistol=()=>shell(`<g class="figure motion-lunge"><circle cx="103" cy="48" r="17"/><path d="M103 65 L100 121 L70 151 L55 191 M100 121 L167 143 M100 88 L69 113 M100 88 L140 111"/>${dot(100,121)}</g><path class="figure faint" d="M166 143 L205 143"/>`);
  const push=()=>shell(`<g class="figure motion-push"><circle cx="178" cy="103" r="16"/><path d="M162 110 L91 126 L40 153 M91 126 L72 166 M91 126 L112 166 M145 115 L134 150 L113 174"/>${dot(91,126)}</g>`);
  const pull=()=>shell(`<path class="figure faint" d="M55 30 L185 30"/><g class="figure motion-pull"><circle cx="120" cy="76" r="17"/><path d="M120 93 L120 142 L92 190 M120 142 L148 190 M120 105 L82 31 M120 105 L158 31"/>${dot(120,105)}</g>`);
  const row=()=>shell(`<path class="figure faint" d="M196 35 L196 190 M196 62 L149 93"/><g class="figure motion-push"><circle cx="136" cy="91" r="15"/><path d="M121 98 L73 125 L37 170 M73 125 L66 184 M73 125 L103 180 M121 105 L149 93"/>${dot(73,125)}</g>`);
  const hinge=()=>shell(`<g class="figure motion-hinge"><circle cx="104" cy="48" r="18"/><path d="M104 66 L104 137 L78 190 M104 137 L134 190 M104 91 L72 132 M104 91 L137 132"/>${dot(104,137)}</g>`);
  const shoulder=()=>standing("",'<g class="motion-raise"><path d="M102 91 L64 119 M102 91 L140 119"/></g>');
  const core=()=>shell(`<g class="figure motion-core"><circle cx="68" cy="130" r="16"/><path d="M84 137 L132 159 L181 184 M130 158 L160 122 M84 142 L61 177"/>${dot(132,159)}</g>`);
  const lunge=()=>shell(`<g class="figure motion-lunge"><circle cx="102" cy="45" r="17"/><path d="M102 62 L102 119 L66 151 L47 190 M102 119 L143 149 L188 174 M102 85 L70 112 M102 85 L137 111"/>${dot(102,119)}</g>`);
  const walk=()=>shell(`<path class="figure faint" d="M23 190 L217 190 M35 38 L205 38"/><g class="figure motion-bob"><circle cx="112" cy="56" r="17"/><path d="M112 73 L110 133 L75 187 M110 133 L155 183 M110 94 L76 123 M110 94 L148 117"/>${dot(110,133)}</g>`);
  const ankle=()=>shell(`<g class="figure"><circle cx="88" cy="43" r="16"/><path d="M88 60 L91 117 L71 188 M91 117 L136 158 L158 190 M91 82 L123 111"/>${dot(91,117)}</g><path class="figure faint" d="M167 42 L167 193"/><g class="figure motion-bob"><path d="M136 158 L158 190"/></g>`);
  const stretch=()=>shell(`<g class="figure motion-lunge"><circle cx="100" cy="48" r="17"/><path d="M100 65 L100 119 L70 154 L52 190 M100 119 L145 151 L187 184 M100 86 L73 118 M100 86 L133 116"/>${dot(100,119)}</g>`);
  const handstand=()=>shell(`<path class="figure faint" d="M205 25 L205 195"/><g class="figure motion-pull"><circle cx="160" cy="158" r="16"/><path d="M160 142 L164 92 L145 35 M164 92 L184 34 M160 129 L126 181 M160 129 L190 181"/>${dot(160,129)}</g>`);
  function get(name){
    const n=name.toLowerCase(); let svg,label,cue,exact=true;
    if(/handstand|hspu/.test(n)){svg=handstand();label="Wall handstand press";cue="Keep ribs down and use a pain-free pressing depth."}
    else if(/one-arm push|push-up|push up|press up|shoulders push/.test(n)){svg=push();label="Horizontal press";cue="Brace the trunk and keep the shoulder controlled."}
    else if(/pull-up|pullup|chin-up|chinup/.test(n)){svg=pull();label="Vertical pull";cue="Start from a controlled hang and avoid swinging."}
    else if(/row|shoulders back|face pull/.test(n)){svg=row();label="Row / horizontal pull";cue="Pull the shoulder blades back without shrugging."}
    else if(/pistol|single-leg.*squat/.test(n)){svg=pistol();label="Single-leg squat";cue="Use assistance until the full range stays controlled."}
    else if(/squat|step forward|step backward|step sideways|knee flex|knee extension|knee stability/.test(n)){svg=squat();label="Knee-dominant movement";cue="Track the knee smoothly and work through a tolerable range.";exact=!/knee|step/.test(n)}
    else if(/run|walk|treadmill/.test(n)){svg=walk();label="Walk / run pattern";cue="Use a smooth gait and an easy pace unless the workout says otherwise."}
    else if(/ankle|calf|shin|tibialis|front of shins/.test(n)){svg=ankle();label="Ankle and lower-leg work";cue="Keep the foot controlled and move through the ankle.";exact=false}
    else if(/dead bug|sit-up|situp|core|posterior tilt|breathing/.test(n)){svg=core();label="Trunk-control movement";cue="Keep the ribs down and shorten the range if the low back arches.";exact=!/breathing|posterior tilt/.test(n)}
    else if(/hinge|posterior chain|back extension|extend back|jefferson|goodmorning|good morning/.test(n)){svg=hinge();label="Hip hinge / back extension";cue="Move from the hips and keep the range controlled.";exact=false}
    else if(/shoulder|wrist|hand|biceps|triceps|control|pull/.test(n)){svg=shoulder();label="Shoulder and arm movement";cue="Use light resistance and avoid pinching or sharp pain.";exact=false}
    else if(/hip|groin|lunge|mobilize|spine|lat|stretch|90\/90|deep squat rock/.test(n)){svg=stretch();label="Mobility movement";cue="Ease into the range; do not force the end position.";exact=false}
    else {svg=standing();label="General movement guide";cue="Follow the written prescription and use a comfortable range.";exact=false}
    return {svg,label,cue,exact};
  }
  return {get};
})();
