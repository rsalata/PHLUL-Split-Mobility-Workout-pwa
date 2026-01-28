(function(){
  const STORAGE_KEY = 'workout_programs_data_v1';
  const SESSION_KEY = 'workout_programs_session_v1';
  
  let currentProgram = 'phlul';
  let currentWorkout = '1-4';
  let timerIntervals = {};
  let userData = {};
  let sessionData = {};

  // DOM elements
  const programSelect = document.getElementById('program-select');
  const workoutSelect = document.getElementById('workout-select');
  const programBadge = document.getElementById('program-badge');
  const workoutLabel = document.getElementById('workout-label');
  const workoutDisplay = document.getElementById('workout-display');
  const progressionNotesDiv = document.getElementById('progression-notes');
  const programTitle = document.getElementById('program-title');
  const programDescription = document.getElementById('program-description');
  const scheduleText = document.getElementById('schedule-text');
  const generalNotes = document.getElementById('general-notes');

  // Load/Save functions
  function loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save data:', e);
    }
  }

  function loadSessionData() {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  function saveSessionData(data) {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save session data:', e);
    }
  }

  userData = loadData();
  sessionData = loadSessionData();

  // Helper functions
  function getExerciseId(program, workout, dayKey, section, index) {
    return `${program}_${workout}_${dayKey}_${section}_${index}`;
  }

  function getUserExerciseData(id) {
    return userData[id] || { weight: '', sets: '', reps: '', notes: '' };
  }

  function updateUserExerciseData(id, field, value) {
    if (!userData[id]) {
      userData[id] = { weight: '', sets: '', reps: '', notes: '' };
    }
    userData[id][field] = value;
    saveData(userData);
  }

  function getSessionId(program, dayKey) {
    return `${program}_${dayKey}`;
  }

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // Timer functions
  window.toggleTimer = function(sessionId) {
    if (!sessionData[sessionId]) {
      sessionData[sessionId] = { date: new Date().toISOString(), elapsed: 0, running: false };
    }
    
    const session = sessionData[sessionId];
    session.running = !session.running;
    session.date = new Date().toISOString();
    
    if (session.running) {
      session.startTime = Date.now() - (session.elapsed * 1000);
      timerIntervals[sessionId] = setInterval(() => {
        session.elapsed = Math.floor((Date.now() - session.startTime) / 1000);
        updateTimerDisplay(sessionId);
        saveSessionData(sessionData);
      }, 1000);
    } else {
      clearInterval(timerIntervals[sessionId]);
    }
    
    updateTimerDisplay(sessionId);
    saveSessionData(sessionData);
  };

  window.resetTimer = function(sessionId) {
    clearInterval(timerIntervals[sessionId]);
    sessionData[sessionId] = { date: new Date().toISOString(), elapsed: 0, running: false };
    updateTimerDisplay(sessionId);
    saveSessionData(sessionData);
  };

  function updateTimerDisplay(sessionId) {
    const timerEl = document.getElementById(`timer-${sessionId}`);
    const btnEl = document.getElementById(`timer-btn-${sessionId}`);
    if (timerEl && sessionData[sessionId]) {
      timerEl.textContent = formatTime(sessionData[sessionId].elapsed);
      if (btnEl) {
        btnEl.textContent = sessionData[sessionId].running ? 'Pause' : 'Start';
        btnEl.classList.toggle('active', sessionData[sessionId].running);
      }
    }
  }

  // Collapsible sections
  window.toggleCollapse = function(sectionId) {
    const content = document.getElementById(sectionId);
    const header = document.querySelector(`[data-section="${sectionId}"]`);
    if (content && header) {
      const isCollapsed = content.classList.contains('collapsed');
      if (isCollapsed) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.remove('collapsed');
        header.classList.remove('collapsed');
      } else {
        content.style.maxHeight = '0';
        content.classList.add('collapsed');
        header.classList.add('collapsed');
      }
    }
  };

  // Toggle day sections
  window.toggleDay = function(dayId) {
    const content = document.getElementById(dayId);
    const header = document.querySelector(`[data-day="${dayId}"]`);
    if (content && header) {
      const isCollapsed = content.classList.contains('collapsed');
      if (isCollapsed) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.remove('collapsed');
        header.classList.remove('collapsed');
      } else {
        content.style.maxHeight = '0';
        content.classList.add('collapsed');
        header.classList.add('collapsed');
      }
    }
  };

  // Update workout selector based on program
  function updateWorkoutSelector(program) {
    const programData = WORKOUT_PROGRAMS[program];
    workoutSelect.innerHTML = '';
    Object.keys(programData.workouts).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = programData.workouts[key].label;
      workoutSelect.appendChild(option);
    });
    workoutSelect.value = Object.keys(programData.workouts)[0];
    currentWorkout = workoutSelect.value;
    
    // Update label based on program type
    if (program === 'convict') {
      workoutLabel.textContent = 'Progression';
    } else if (program === 'mobility') {
      workoutLabel.textContent = 'Routine';
    } else if (program === 'rehab') {
      workoutLabel.textContent = 'Phase';
    } else if (program === 'wendler531') {
      workoutLabel.textContent = 'Week';
    } else {
      workoutLabel.textContent = 'Week Range';
    }
  }

  // Update info section
  function updateInfoSection() {
    const programData = WORKOUT_PROGRAMS[currentProgram];
    const info = programData.info;
    
    programTitle.textContent = info.title;
    programDescription.textContent = info.description;
    scheduleText.innerHTML = info.schedule;
    
    generalNotes.innerHTML = info.notes.map(note => `<li>${note}</li>`).join('');
  }

  // Attach input listeners
  function attachInputListeners() {
    workoutDisplay.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', (e) => {
        const id = e.target.dataset.id;
        const field = e.target.dataset.field;
        updateUserExerciseData(id, field, e.target.value);
      });
    });
  }

  // Render PHLUL workout
  function renderPHLULWorkout(workout) {
    const programData = WORKOUT_PROGRAMS.phlul;
    const workoutInfo = programData.workouts[workout];
    
    progressionNotesDiv.innerHTML = `<h4>${workoutInfo.label}</h4><p>${workoutInfo.description}</p>`;

    let html = '<h2 style="margin:0 0 16px">Weekly Training Split</h2>';

    Object.keys(programData.days).forEach(dayKey => {
      const day = programData.days[dayKey];
      const sessionId = getSessionId('phlul', dayKey);
      const session = sessionData[sessionId] || { date: new Date().toISOString(), elapsed: 0, running: false };
      const sessionDate = new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      const dayContentId = `day-${dayKey}`;
      
      // Day header (collapsible) - starts collapsed
      html += `<div class="day-header collapsed" data-day="${dayContentId}" onclick="toggleDay('${dayContentId}')">
        <span>${day.name}</span>
        <span class="arrow">▼</span>
      </div>`;
      
      // Day content (collapsible) - starts collapsed
      html += `<div class="day-content collapsed" id="${dayContentId}" style="max-height:0">`;
      
      html += `<div class="day-title">
        <span style="font-size:14px;color:var(--muted)">Session Tracking</span>
        <div class="session-info">
          <span>Last: ${sessionDate}</span>
          <span class="timer" id="timer-${sessionId}">${formatTime(session.elapsed)}</span>
          <button class="timer-btn ${session.running ? 'active' : ''}" id="timer-btn-${sessionId}" onclick="toggleTimer('${sessionId}')">
            ${session.running ? 'Pause' : 'Start'}
          </button>
          <button class="timer-btn" onclick="resetTimer('${sessionId}')">Reset</button>
        </div>
      </div>`;
      
      html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Weight (lb)</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
      day.exercises.forEach((ex, idx) => {
        const id = getExerciseId('phlul', workout, dayKey, 'exercises', idx);
        const saved = getUserExerciseData(id);
        html += `<tr>
          <td>${ex.name}</td>
          <td class="input-cell"><input type="number" placeholder="0" value="${saved.weight}" data-id="${id}" data-field="weight" min="0" step="5"></td>
          <td class="input-cell"><input type="number" placeholder="${ex.sets}" value="${saved.sets}" data-id="${id}" data-field="sets" min="0" step="1"></td>
          <td class="input-cell"><input type="number" placeholder="${ex.reps}" value="${saved.reps}" data-id="${id}" data-field="reps" min="0" step="1"></td>
          <td class="notes-cell"><input type="text" placeholder="${ex.notes || 'Notes...'}" value="${saved.notes}" data-id="${id}" data-field="notes"></td>
        </tr>`;
      });
      html += '</tbody></table></div>';

      if (day.core) {
        const coreId = `core-${dayKey}`;
        html += `<div class="section-title collapsed" data-section="${coreId}" onclick="toggleCollapse('${coreId}')">
          <span>Core Circuit</span>
          <span class="arrow">▼</span>
        </div>`;
        html += `<div class="collapsible-content collapsed" id="${coreId}" style="max-height: 0;">`;
        html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Weight (lb)</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
        day.core.forEach((ex, idx) => {
          const id = getExerciseId('phlul', workout, dayKey, 'core', idx);
          const saved = getUserExerciseData(id);
          html += `<tr>
            <td>${ex.name}</td>
            <td class="input-cell"><input type="number" placeholder="0" value="${saved.weight}" data-id="${id}" data-field="weight" min="0" step="5"></td>
            <td class="input-cell"><input type="number" placeholder="${ex.sets}" value="${saved.sets}" data-id="${id}" data-field="sets" min="0" step="1"></td>
            <td class="input-cell"><input type="number" placeholder="${ex.reps}" value="${saved.reps}" data-id="${id}" data-field="reps" min="0" step="1"></td>
            <td class="notes-cell"><input type="text" placeholder="${ex.notes || 'Notes...'}" value="${saved.notes}" data-id="${id}" data-field="notes"></td>
          </tr>`;
        });
        html += '</tbody></table></div>';
      }
      
      html += '</div>'; // Close day-content
    });

    workoutDisplay.innerHTML = html;
    attachInputListeners();
  }

  // Render Rehab workout
  function renderRehabWorkout(workout) {
    const programData = WORKOUT_PROGRAMS.rehab;
    const workoutInfo = programData.workouts[workout];
    
    progressionNotesDiv.innerHTML = `<h4>${workoutInfo.label}</h4><p>${workoutInfo.description}</p>`;

    let html = '<h2 style="margin:0 0 16px">Rehab Program</h2>';

    // Global Warm-Up (collapsible)
    if (programData.warmup) {
      const warmupId = 'global-warmup';
      html += `<div class="section-title" data-section="${warmupId}" onclick="toggleCollapse('${warmupId}')" style="background:var(--card);color:var(--ok)">
        <span>${programData.warmup.name} ⚠️ REQUIRED</span>
        <span class="arrow">▼</span>
      </div>`;
      html += `<div class="collapsible-content" id="${warmupId}">`;
      html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="input-cell">Load</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
      programData.warmup.exercises.forEach((ex, idx) => {
        const id = getExerciseId('rehab', workout, 'warmup', 'exercises', idx);
        const saved = getUserExerciseData(id);
        html += `<tr>
          <td>${ex.name}</td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.sets}</span></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.reps}</span></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.load}</span></td>
          <td class="notes-cell"><input type="text" placeholder="${ex.notes}" value="${saved.notes}" data-id="${id}" data-field="notes"></td>
        </tr>`;
      });
      html += '</tbody></table></div>';
    }

    // Training Days
    Object.keys(programData.days).forEach(dayKey => {
      const day = programData.days[dayKey];
      const sessionId = getSessionId('rehab', dayKey);
      const session = sessionData[sessionId] || { date: new Date().toISOString(), elapsed: 0, running: false };
      const sessionDate = new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      const dayContentId = `day-${dayKey}`;
      
      // Day header (collapsible) - starts collapsed
      html += `<div class="day-header collapsed" data-day="${dayContentId}" onclick="toggleDay('${dayContentId}')">
        <span>${day.name}</span>
        <span class="arrow">▼</span>
      </div>`;
      
      // Day content (collapsible) - starts collapsed
      html += `<div class="day-content collapsed" id="${dayContentId}" style="max-height:0">`;
      
      html += `<div class="day-title">
        <span style="font-size:14px;color:var(--muted)">Session Tracking</span>
        <div class="session-info">
          <span>Last: ${sessionDate}</span>
          <span class="timer" id="timer-${sessionId}">${formatTime(session.elapsed)}</span>
          <button class="timer-btn ${session.running ? 'active' : ''}" id="timer-btn-${sessionId}" onclick="toggleTimer('${sessionId}')">
            ${session.running ? 'Pause' : 'Start'}
          </button>
          <button class="timer-btn" onclick="resetTimer('${sessionId}')">Reset</button>
        </div>
      </div>`;
      
      html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Weight/Load</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
      day.exercises.forEach((ex, idx) => {
        const id = getExerciseId('rehab', workout, dayKey, 'exercises', idx);
        const saved = getUserExerciseData(id);
        html += `<tr>
          <td>${ex.name}<br><span class="note">${ex.notes}</span></td>
          <td class="input-cell"><input type="text" placeholder="${ex.load}" value="${saved.weight}" data-id="${id}" data-field="weight"></td>
          <td class="input-cell"><input type="number" placeholder="${ex.sets}" value="${saved.sets}" data-id="${id}" data-field="sets" min="0" step="1"></td>
          <td class="input-cell"><input type="text" placeholder="${ex.reps}" value="${saved.reps}" data-id="${id}" data-field="reps"></td>
          <td class="notes-cell"><input type="text" placeholder="Notes..." value="${saved.notes}" data-id="${id}" data-field="notes"></td>
        </tr>`;
      });
      html += '</tbody></table></div>';
      
      html += '</div>'; // Close day-content
    });

    // Progression Rules (collapsible)
    if (programData.progression) {
      const progId = 'progression-rules';
      html += `<div class="section-title collapsed" data-section="${progId}" onclick="toggleCollapse('${progId}')" style="background:var(--panel);color:var(--yellow)">
        <span>${programData.progression.title}</span>
        <span class="arrow">▼</span>
      </div>`;
      html += `<div class="collapsible-content collapsed" id="${progId}" style="max-height: 0;">`;
      html += '<ul class="muted" style="line-height:1.6;margin:12px 0">';
      programData.progression.notes.forEach(note => {
        html += `<li>${note}</li>`;
      });
      html += '</ul></div>';
    }

    workoutDisplay.innerHTML = html;
    attachInputListeners();
  }

  // Render Wendler 5/3/1 workout
  function renderWendler531Workout(workout) {
    const programData = WORKOUT_PROGRAMS.wendler531;
    const workoutInfo = programData.workouts[workout];
    
    progressionNotesDiv.innerHTML = `<h4>${workoutInfo.label}</h4><p>${workoutInfo.description}</p>`;

    let html = '<h2 style="margin:0 0 16px">5/3/1 Training Days</h2>';

    let weekNum = workout.replace('week', '');
    html += `<div class="info-box"><p><strong>${workoutInfo.label}</strong>: ${workoutInfo.description}</p></div>`;

    Object.keys(programData.days).forEach(dayKey => {
      const day = programData.days[dayKey];
      const sessionId = getSessionId('wendler531', dayKey);
      const session = sessionData[sessionId] || { date: new Date().toISOString(), elapsed: 0, running: false };
      const sessionDate = new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      const dayContentId = `day-${dayKey}`;
      
      // Day header (collapsible) - starts collapsed
      html += `<div class="day-header collapsed" data-day="${dayContentId}" onclick="toggleDay('${dayContentId}')">
        <span>${day.name}</span>
        <span class="arrow">▼</span>
      </div>`;
      
      // Day content (collapsible) - starts collapsed
      html += `<div class="day-content collapsed" id="${dayContentId}" style="max-height:0">`;
      
      html += `<div class="day-title">
        <span style="font-size:14px;color:var(--muted)">Session Tracking</span>
        <div class="session-info">
          <span>Last: ${sessionDate}</span>
          <span class="timer" id="timer-${sessionId}">${formatTime(session.elapsed)}</span>
          <button class="timer-btn ${session.running ? 'active' : ''}" id="timer-btn-${sessionId}" onclick="toggleTimer('${sessionId}')">
            ${session.running ? 'Pause' : 'Start'}
          </button>
          <button class="timer-btn" onclick="resetTimer('${sessionId}')">Reset</button>
        </div>
      </div>`;
      
      // Main Lift
      html += '<h3 style="margin:16px 0 8px;color:var(--acc)">Main Lift</h3>';
      html += '<div class="table-scroll"><table><thead><tr><th>Set</th><th class="input-cell">% TM</th><th class="input-cell">Weight</th><th class="input-cell">Target</th><th class="input-cell">Actual</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
      day.sets.forEach((set, idx) => {
        const id = getExerciseId('wendler531', workout, dayKey, 'mainlift', idx);
        const saved = getUserExerciseData(id);
        html += `<tr>
          <td>${set.name}</td>
          <td class="input-cell" style="text-align:center"><strong>${set.percent}</strong></td>
          <td class="input-cell"><input type="number" placeholder="lbs" value="${saved.weight}" data-id="${id}" data-field="weight" min="0" step="5"></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${set.reps}</span></td>
          <td class="input-cell"><input type="number" placeholder="reps" value="${saved.reps}" data-id="${id}" data-field="reps" min="0" step="1"></td>
          <td class="notes-cell"><input type="text" placeholder="${set.notes}" value="${saved.notes}" data-id="${id}" data-field="notes"></td>
        </tr>`;
      });
      html += '</tbody></table></div>';

      // Assistance Work
      const assistanceKey = `week${weekNum}`;
      if (day.assistance && day.assistance[assistanceKey]) {
        html += '<h3 style="margin:16px 0 8px;color:var(--yellow)">Assistance Work</h3>';
        html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
        day.assistance[assistanceKey].forEach((ex, idx) => {
          const id = getExerciseId('wendler531', workout, dayKey, `assistance_${assistanceKey}`, idx);
          const saved = getUserExerciseData(id);
          html += `<tr>
            <td>${ex.name}</td>
            <td class="input-cell"><input type="number" placeholder="${ex.sets}" value="${saved.sets}" data-id="${id}" data-field="sets" min="0" step="1"></td>
            <td class="input-cell"><input type="text" placeholder="${ex.reps}" value="${saved.reps}" data-id="${id}" data-field="reps"></td>
            <td class="notes-cell"><input type="text" placeholder="${ex.notes}" value="${saved.notes}" data-id="${id}" data-field="notes"></td>
          </tr>`;
        });
        html += '</tbody></table></div>';
      }

      // Core Circuit (collapsible)
      if (day.core) {
        const coreId = `core-${dayKey}`;
        html += `<div class="section-title collapsed" data-section="${coreId}" onclick="toggleCollapse('${coreId}')">
          <span>Core Circuit</span>
          <span class="arrow">▼</span>
        </div>`;
        html += `<div class="collapsible-content collapsed" id="${coreId}" style="max-height: 0;">`;
        html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
        day.core.forEach((ex, idx) => {
          const id = getExerciseId('wendler531', workout, dayKey, 'core', idx);
          const saved = getUserExerciseData(id);
          html += `<tr>
            <td>${ex.name}</td>
            <td class="input-cell"><input type="number" placeholder="${ex.sets}" value="${saved.sets}" data-id="${id}" data-field="sets" min="0" step="1"></td>
            <td class="input-cell"><input type="text" placeholder="${ex.reps}" value="${saved.reps}" data-id="${id}" data-field="reps"></td>
            <td class="notes-cell"><input type="text" placeholder="${ex.notes}" value="${saved.notes}" data-id="${id}" data-field="notes"></td>
          </tr>`;
        });
        html += '</tbody></table></div>';
      }
      
      html += '</div>'; // Close day-content
    });

    workoutDisplay.innerHTML = html;
    attachInputListeners();
  }

  // Render Convict Conditioning workout
  function renderConvictWorkout(workout) {
    const programData = WORKOUT_PROGRAMS.convict;
    const workoutInfo = programData.workouts[workout];
    const progs = programData.progressions[workout];
    
    progressionNotesDiv.innerHTML = `<h4>${workoutInfo.label}</h4><p>${workoutInfo.description}</p>`;

    let html = '<h2 style="margin:0 0 16px">The Big Six Progressions</h2>';
    
    // Progression table
    html += '<div class="info-box" style="margin-bottom:24px;overflow-x:auto"><h4>Progression Standards</h4><table style="font-size:13px"><thead><tr><th>Step</th><th>Push-ups</th><th>Squats</th><th>Pull-ups</th><th>Leg Raises</th><th>Bridges</th><th>Handstand Push-ups</th></tr></thead><tbody>';
    
    const maxSteps = Math.max(progs.pushup.length, progs.squat.length, progs.pullup.length, progs.legRaise.length, progs.bridge.length, progs.handstand.length);
    for (let i = 0; i < maxSteps; i++) {
      const pushup = progs.pushup[i] || {};
      const squat = progs.squat[i] || {};
      const pullup = progs.pullup[i] || {};
      const legRaise = progs.legRaise[i] || {};
      const bridge = progs.bridge[i] || {};
      const handstand = progs.handstand[i] || {};
      
      html += `<tr${pushup.master ? ' style="background:rgba(125,211,252,0.1)"' : ''}>
        <td style="text-align:center;font-weight:600;color:var(--acc)">${pushup.step || ''}</td>
        <td>${pushup.name ? `${pushup.name}<br><span style="color:var(--muted)">${pushup.sets}×${pushup.reps}</span>` : ''}</td>
        <td>${squat.name ? `${squat.name}<br><span style="color:var(--muted)">${squat.sets}×${squat.reps}</span>` : ''}</td>
        <td>${pullup.name ? `${pullup.name}<br><span style="color:var(--muted)">${pullup.sets}×${pullup.reps}</span>` : ''}</td>
        <td>${legRaise.name ? `${legRaise.name}<br><span style="color:var(--muted)">${legRaise.sets}×${legRaise.reps}</span>` : ''}</td>
        <td>${bridge.name ? `${bridge.name}<br><span style="color:var(--muted)">${bridge.sets}×${bridge.reps}</span>` : ''}</td>
        <td>${handstand.name ? `${handstand.name}<br><span style="color:var(--muted)">${handstand.sets}×${handstand.reps}</span>` : ''}</td>
      </tr>`;
    }
    html += '</tbody></table></div>';

    // Tracking section
    const sessionId = getSessionId('convict', 'bigSix');
    const session = sessionData[sessionId] || { date: new Date().toISOString(), elapsed: 0, running: false };
    const sessionDate = new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    html += `<div class="day-title">
      <span>Training Log</span>
      <div class="session-info">
        <span>Last: ${sessionDate}</span>
        <span class="timer" id="timer-${sessionId}">${formatTime(session.elapsed)}</span>
        <button class="timer-btn ${session.running ? 'active' : ''}" id="timer-btn-${sessionId}" onclick="toggleTimer('${sessionId}')">
          ${session.running ? 'Pause' : 'Start'}
        </button>
        <button class="timer-btn" onclick="resetTimer('${sessionId}')">Reset</button>
      </div>
    </div>`;
    
    const exercises = [
      {name: "Push-ups", key: "pushup"},
      {name: "Squats", key: "squat"},
      {name: "Pull-ups", key: "pullup"},
      {name: "Leg Raises", key: "legRaise"},
      {name: "Bridges", key: "bridge"},
      {name: "Handstand Push-ups", key: "handstand"}
    ];
    
    html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Current Step</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
    exercises.forEach((ex, idx) => {
      const id = getExerciseId('convict', workout, 'bigSix', 'exercises', idx);
      const saved = getUserExerciseData(id);
      html += `<tr>
        <td>${ex.name}</td>
        <td class="input-cell"><input type="number" placeholder="1-10" value="${saved.weight}" data-id="${id}" data-field="weight" min="1" max="10" step="1"></td>
        <td class="input-cell"><input type="number" placeholder="Sets" value="${saved.sets}" data-id="${id}" data-field="sets" min="0" step="1"></td>
        <td class="input-cell"><input type="number" placeholder="Reps" value="${saved.reps}" data-id="${id}" data-field="reps" min="0" step="1"></td>
        <td class="notes-cell"><input type="text" placeholder="Notes..." value="${saved.notes}" data-id="${id}" data-field="notes"></td>
      </tr>`;
    });
    html += '</tbody></table></div>';

    workoutDisplay.innerHTML = html;
    attachInputListeners();
  }

  // Render Mobility Routine
  function renderMobilityWorkout(workout) {
    const programData = WORKOUT_PROGRAMS.mobility;
    const workoutInfo = programData.workouts[workout];
    const routine = programData.routines[workout];
    
    progressionNotesDiv.innerHTML = `<h4>${workoutInfo.label}</h4><p>${workoutInfo.description}</p>`;

    let html = `<h2 style="margin:0 0 16px">${routine.name}</h2>`;

    // Session tracking
    const sessionId = getSessionId('mobility', workout);
    const session = sessionData[sessionId] || { date: new Date().toISOString(), elapsed: 0, running: false };
    const sessionDate = new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    html += `<div class="day-title">
      <span>Session Tracking</span>
      <div class="session-info">
        <span>Last: ${sessionDate}</span>
        <span class="timer" id="timer-${sessionId}">${formatTime(session.elapsed)}</span>
        <button class="timer-btn ${session.running ? 'active' : ''}" id="timer-btn-${sessionId}" onclick="toggleTimer('${sessionId}')">
          ${session.running ? 'Pause' : 'Start'}
        </button>
        <button class="timer-btn" onclick="resetTimer('${sessionId}')">Reset</button>
      </div>
    </div>`;
    
    const hasRestField = routine.exercises[0] && routine.exercises[0].rest !== undefined;
    
    if (hasRestField) {
      html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th class="input-cell">Rest</th><th style="width:80px">Done</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
      routine.exercises.forEach((ex, idx) => {
        const id = getExerciseId('mobility', workout, 'routine', 'exercises', idx);
        const saved = getUserExerciseData(id);
        html += `<tr>
          <td><strong>${ex.name}</strong><br><span class="note">${ex.notes}</span></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.sets}</span></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.reps}</span></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.rest}</span></td>
          <td style="text-align:center"><input type="checkbox" ${saved.sets === '1' ? 'checked' : ''} data-id="${id}" data-field="sets" onchange="updateUserExerciseData('${id}', 'sets', this.checked ? '1' : '');" style="width:20px;height:20px;cursor:pointer"></td>
          <td class="notes-cell"><input type="text" placeholder="Notes..." value="${saved.notes}" data-id="${id}" data-field="notes"></td>
        </tr>`;
      });
    } else {
      html += '<div class="table-scroll"><table><thead><tr><th>Exercise</th><th class="input-cell">Sets</th><th class="input-cell">Reps</th><th style="width:80px">Done</th><th class="notes-cell">Notes</th></tr></thead><tbody>';
      routine.exercises.forEach((ex, idx) => {
        const id = getExerciseId('mobility', workout, 'routine', 'exercises', idx);
        const saved = getUserExerciseData(id);
        html += `<tr>
          <td><strong>${ex.name}</strong><br><span class="note">${ex.notes}</span></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.sets}</span></td>
          <td class="input-cell" style="text-align:center"><span class="muted">${ex.reps}</span></td>
          <td style="text-align:center"><input type="checkbox" ${saved.sets === '1' ? 'checked' : ''} data-id="${id}" data-field="sets" onchange="updateUserExerciseData('${id}', 'sets', this.checked ? '1' : '');" style="width:20px;height:20px;cursor:pointer"></td>
          <td class="notes-cell"><input type="text" placeholder="Notes..." value="${saved.notes}" data-id="${id}" data-field="notes"></td>
        </tr>`;
      });
    }
    html += '</tbody></table></div>';

    workoutDisplay.innerHTML = html;
    attachInputListeners();
  }

  // Main render function
  function renderWorkout() {
    programBadge.textContent = WORKOUT_PROGRAMS[currentProgram].name;
    updateInfoSection();
    
    if (currentProgram === 'phlul') {
      renderPHLULWorkout(currentWorkout);
    } else if (currentProgram === 'rehab') {
      renderRehabWorkout(currentWorkout);
    } else if (currentProgram === 'wendler531') {
      renderWendler531Workout(currentWorkout);
    } else if (currentProgram === 'convict') {
      renderConvictWorkout(currentWorkout);
    } else if (currentProgram === 'mobility') {
      renderMobilityWorkout(currentWorkout);
    }
  }

  // Event listeners
  programSelect.addEventListener('change', (e) => {
    currentProgram = e.target.value;
    updateWorkoutSelector(currentProgram);
    renderWorkout();
  });

  workoutSelect.addEventListener('change', (e) => {
    currentWorkout = e.target.value;
    renderWorkout();
  });

  // Data management functions
  window.exportData = function() {
    const exportData = {
      version: 1,
      exportDate: new Date().toISOString(),
      userData: userData,
      sessionData: sessionData
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workout-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('✅ Data exported successfully!');
  };

  window.importData = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const imported = JSON.parse(e.target.result);
        
        if (!imported.userData || !imported.sessionData) {
          alert('❌ Invalid data file format');
          return;
        }
        
        const confirmMsg = `This will replace your current data with the imported data.\n\nImported data from: ${new Date(imported.exportDate).toLocaleString()}\n\nContinue?`;
        if (!confirm(confirmMsg)) {
          event.target.value = '';
          return;
        }
        
        userData = imported.userData;
        sessionData = imported.sessionData;
        saveData(userData);
        saveSessionData(sessionData);
        renderWorkout();
        
        alert('✅ Data imported successfully!');
      } catch (error) {
        alert('❌ Error importing data: ' + error.message);
      }
      event.target.value = '';
    };
    reader.readAsText(file);
  };

  window.clearAllData = function() {
    const confirmMsg = '⚠️ WARNING: This will permanently delete ALL your workout data and session history.\n\nThis action cannot be undone!\n\nType "DELETE" to confirm:';
    const userInput = prompt(confirmMsg);
    
    if (userInput === 'DELETE') {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(SESSION_KEY);
      userData = {};
      sessionData = {};
      Object.keys(timerIntervals).forEach(key => clearInterval(timerIntervals[key]));
      timerIntervals = {};
      renderWorkout();
      alert('✅ All data has been cleared');
    } else if (userInput !== null) {
      alert('❌ Deletion cancelled - incorrect confirmation');
    }
  };

  // Initial setup
  updateWorkoutSelector(currentProgram);
  renderWorkout();
})();
