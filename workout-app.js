// Workout App Logic

let currentProgram = 'phlul';
let currentSession = 'day1';

// Initialize app
function initApp() {
  console.log('Initializing app...');
  loadSelections();
  setupEventListeners();
  updateSessionDropdown();
  renderWorkout();
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function setupEventListeners() {
  document.getElementById('program-select').addEventListener('change', (e) => {
    currentProgram = e.target.value;
    saveSelections();
    updateSessionDropdown();
    updateProgramInfo();
    renderWorkout();
  });

  document.getElementById('session-select').addEventListener('change', (e) => {
    currentSession = e.target.value;
    saveSelections();
    renderWorkout();
  });
}

function updateSessionDropdown() {
  const select = document.getElementById('session-select');
  const label = document.getElementById('session-label');
  select.innerHTML = '';

  const program = WORKOUT_PROGRAMS[currentProgram];
  
  if (currentProgram === 'phlul') {
    label.textContent = 'Day';
    Object.keys(program.days).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = program.days[key].name;
      select.appendChild(option);
    });
    currentSession = currentSession in program.days ? currentSession : 'day1';
    
  } else if (currentProgram === 'convict') {
    label.textContent = 'Exercise';
    Object.keys(program.exercises).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = key;
      select.appendChild(option);
    });
    currentSession = currentSession in program.exercises ? currentSession : 'Push-ups';
    
  } else if (currentProgram === 'mobility') {
    label.textContent = 'Routine';
    Object.keys(program.routines).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = program.routines[key].name;
      select.appendChild(option);
    });
    currentSession = currentSession in program.routines ? currentSession : 'dynamic';
    
  } else if (currentProgram === 'five31' || currentProgram === 'rehab') {
    label.textContent = 'View';
    const option = document.createElement('option');
    option.value = 'full';
    option.textContent = 'Full Program';
    select.appendChild(option);
    currentSession = 'full';
  }
  
  select.value = currentSession;
}

function updateProgramInfo() {
  const program = WORKOUT_PROGRAMS[currentProgram];
  console.log('Updating program info for:', currentProgram, program);
  
  document.getElementById('program-badge').textContent = program.name;
  
  const title = document.getElementById('program-title');
  const description = document.getElementById('program-description');
  const scheduleDiv = document.getElementById('schedule-info');
  
  title.textContent = (program.info && program.info.title) ? program.info.title : program.name;
  description.textContent = (program.info && program.info.description) ? program.info.description : program.description;
  
  if (program.schedule) {
    scheduleDiv.innerHTML = `<h4>${program.schedule.title}</h4><p>${program.schedule.text}</p>`;
    scheduleDiv.style.display = 'block';
  } else {
    scheduleDiv.style.display = 'none';
  }
}

function renderWorkout() {
  console.log('Rendering workout:', currentProgram, currentSession);
  const display = document.getElementById('workout-display');
  updateProgramInfo();
  
  try {
    if (currentProgram === 'phlul') {
      renderPHLUL();
    } else if (currentProgram === 'convict') {
      renderConvict();
    } else if (currentProgram === 'mobility') {
      renderMobility();
    } else if (currentProgram === 'five31') {
      renderTextProgram('five31');
    } else if (currentProgram === 'rehab') {
      renderTextProgram('rehab');
    }
  } catch (e) {
    console.error('Error rendering workout:', e);
    display.innerHTML = `<div style="color:var(--bad)">Error loading workout: ${e.message}</div>`;
  }
}

function renderPHLUL() {
  const day = WORKOUT_PROGRAMS.phlul.days[currentSession];
  if (!day) {
    console.error('Day not found:', currentSession);
    document.getElementById('workout-display').innerHTML = `<div style="color:var(--bad)">Error: Day ${currentSession} not found</div>`;
    return;
  }
  
  const sessionKey = `${currentProgram}_${currentSession}`;
  const sessionData = loadSessionData(sessionKey);
  
  let html = `<div class="day-title">${day.name}<div class="session-info"><span>Date: ${sessionData.date || new Date().toLocaleDateString()}</span></div></div>`;
  
  // Main exercises
  html += '<div class="table-wrapper">';
  html += '<table><thead><tr><th>Exercise</th><th>Weight</th><th>Sets</th><th>Reps</th><th>Notes</th></tr></thead><tbody>';
  day.main.forEach((ex, idx) => {
    const saved = sessionData.exercises[idx] || {};
    html += `<tr>
      <td>${ex.name}</td>
      <td class="input-cell"><input type="number" placeholder="${ex.sets}" data-idx="${idx}" data-field="weight" value="${saved.weight || ''}" /></td>
      <td class="input-cell"><input type="number" placeholder="${ex.sets}" data-idx="${idx}" data-field="sets" value="${saved.sets || ''}" /></td>
      <td class="input-cell"><input type="number" placeholder="${ex.reps}" data-idx="${idx}" data-field="reps" value="${saved.reps || ''}" /></td>
      <td class="notes-cell"><input type="text" placeholder="${ex.notes}" data-idx="${idx}" data-field="notes" value="${saved.notes || ''}" /></td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  
  // Rehab section if exists and has content
  if (day.rehab && day.rehab.length > 0) {
    const startIdx = day.main.length;
    html += '<div class="section-title" onclick="toggleSection(this)">Rotator Cuff Rehab <span class="arrow">▼</span></div>';
    html += '<div class="collapsible-content"><div class="table-wrapper">';
    html += '<table><thead><tr><th>Exercise</th><th>Weight</th><th>Sets</th><th>Reps</th><th>Notes</th></tr></thead><tbody>';
    day.rehab.forEach((ex, idx) => {
      const actualIdx = startIdx + idx;
      const saved = sessionData.exercises[actualIdx] || {};
      html += `<tr>
        <td>${ex.name}</td>
        <td class="input-cell"><input type="number" placeholder="${ex.sets}" data-idx="${actualIdx}" data-field="weight" value="${saved.weight || ''}" /></td>
        <td class="input-cell"><input type="number" placeholder="${ex.sets}" data-idx="${actualIdx}" data-field="sets" value="${saved.sets || ''}" /></td>
        <td class="input-cell"><input type="number" placeholder="${ex.reps}" data-idx="${actualIdx}" data-field="reps" value="${saved.reps || ''}" /></td>
        <td class="notes-cell"><input type="text" placeholder="${ex.notes}" data-idx="${actualIdx}" data-field="notes" value="${saved.notes || ''}" /></td>
      </tr>`;
    });
    html += '</tbody></table></div></div>';
  }
  
  // Core section
  if (day.core && day.core.length > 0) {
    const startIdx = day.main.length + (day.rehab ? day.rehab.length : 0);
    html += '<div class="section-title" onclick="toggleSection(this)">Core Circuit <span class="arrow">▼</span></div>';
    html += '<div class="collapsible-content"><div class="table-wrapper">';
    html += '<table><thead><tr><th>Exercise</th><th>Weight</th><th>Sets</th><th>Reps</th><th>Notes</th></tr></thead><tbody>';
    day.core.forEach((ex, idx) => {
      const actualIdx = startIdx + idx;
      const saved = sessionData.exercises[actualIdx] || {};
      html += `<tr>
        <td>${ex.name}</td>
        <td class="input-cell"><input type="number" placeholder="-" data-idx="${actualIdx}" data-field="weight" value="${saved.weight || ''}" /></td>
        <td class="input-cell"><input type="number" placeholder="${ex.sets}" data-idx="${actualIdx}" data-field="sets" value="${saved.sets || ''}" /></td>
        <td class="input-cell"><input type="number" placeholder="${ex.reps}" data-idx="${actualIdx}" data-field="reps" value="${saved.reps || ''}" /></td>
        <td class="notes-cell"><input type="text" placeholder="${ex.notes}" data-idx="${actualIdx}" data-field="notes" value="${saved.notes || ''}" /></td>
      </tr>`;
    });
    html += '</tbody></table></div></div>';
  }
  
  document.getElementById('workout-display').innerHTML = html;
  attachInputListeners(sessionKey);
}

function renderConvict() {
  const exercises = WORKOUT_PROGRAMS.convict.exercises[currentSession];
  const sessionKey = `${currentProgram}_${currentSession}`;
  const sessionData = loadSessionData(sessionKey);
  
  let html = `<div class="day-title">${currentSession} - Progressions</div>`;
  html += '<div class="table-wrapper">';
  html += '<table><thead><tr><th>Step</th><th>Progression</th><th>Target</th><th>Current</th><th>Notes</th></tr></thead><tbody>';
  
  exercises.forEach((ex, idx) => {
    const saved = sessionData.exercises[idx] || {};
    html += `<tr>
      <td>Step ${ex.step}</td>
      <td>${ex.name}</td>
      <td>${ex.target}</td>
      <td class="input-cell"><input type="text" placeholder="e.g. 2x15" data-idx="${idx}" data-field="current" value="${saved.current || ''}" /></td>
      <td class="notes-cell"><input type="text" placeholder="Progress notes" data-idx="${idx}" data-field="notes" value="${saved.notes || ''}" /></td>
    </tr>`;
  });
  
  html += '</tbody></table></div>';
  document.getElementById('workout-display').innerHTML = html;
  attachInputListeners(sessionKey);
}

function renderMobility() {
  const routine = WORKOUT_PROGRAMS.mobility.routines[currentSession];
  const sessionKey = `${currentProgram}_${currentSession}`;
  const sessionData = loadSessionData(sessionKey);
  
  let html = `<div class="day-title">${routine.name}<div class="session-info"><span>${routine.description}</span></div></div>`;
  html += '<div class="table-wrapper">';
  html += '<table><thead><tr><th>Exercise</th><th>Sets/Category</th><th>Duration/Reps</th><th>Notes</th><th>Done</th></tr></thead><tbody>';
  
  routine.exercises.forEach((ex, idx) => {
    const saved = sessionData.exercises[idx] || {};
    const rest = ex.rest ? ` | Rest: ${ex.rest}` : '';
    html += `<tr>
      <td>${ex.name}</td>
      <td>${ex.sets}</td>
      <td>${ex.reps}</td>
      <td class="notes-cell">${ex.notes}${rest}</td>
      <td class="input-cell"><input type="checkbox" data-idx="${idx}" data-field="done" ${saved.done ? 'checked' : ''} /></td>
    </tr>`;
  });
  
  html += '</tbody></table></div>';
  document.getElementById('workout-display').innerHTML = html;
  attachInputListeners(sessionKey);
}

function renderTextProgram(programType) {
  const program = WORKOUT_PROGRAMS[programType];
  const content = program.content;
  
  let html = `<div class="day-title">${program.name}</div>`;
  html += '<div style="line-height:1.7;max-width:100%;overflow-x:auto;">';
  
  content.forEach(line => {
    if (line.includes('WEEK') || line.includes('DAY') || line.includes('PHASE')) {
      html += `<h3 style="color:var(--yellow);margin-top:24px;margin-bottom:12px">${line}</h3>`;
    } else if (line.length > 100) {
      html += `<p style="margin:8px 0">${line}</p>`;
    } else {
      html += `<p style="margin:4px 0;padding-left:12px">${line}</p>`;
    }
  });
  
  html += '</div>';
  document.getElementById('workout-display').innerHTML = html;
}

function attachInputListeners(sessionKey) {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      saveWorkoutData(sessionKey, input);
    });
  });
}

function saveWorkoutData(sessionKey, input) {
  const sessionData = loadSessionData(sessionKey);
  const idx = parseInt(input.dataset.idx);
  const field = input.dataset.field;
  
  if (!sessionData.exercises[idx]) {
    sessionData.exercises[idx] = {};
  }
  
  if (input.type === 'checkbox') {
    sessionData.exercises[idx][field] = input.checked;
  } else {
    sessionData.exercises[idx][field] = input.value;
  }
  
  sessionData.date = new Date().toLocaleDateString();
  localStorage.setItem(sessionKey, JSON.stringify(sessionData));
}

function loadSessionData(sessionKey) {
  const stored = localStorage.getItem(sessionKey);
  if (stored) {
    return JSON.parse(stored);
  }
  return { date: null, exercises: {} };
}

function toggleSection(element) {
  element.classList.toggle('collapsed');
  const content = element.nextElementSibling;
  content.classList.toggle('collapsed');
}

function saveSelections() {
  localStorage.setItem('currentProgram', currentProgram);
  localStorage.setItem('currentSession', currentSession);
}

function loadSelections() {
  const savedProgram = localStorage.getItem('currentProgram');
  const savedSession = localStorage.getItem('currentSession');
  
  console.log('Loading selections:', savedProgram, savedSession);
  
  if (savedProgram && WORKOUT_PROGRAMS[savedProgram]) {
    currentProgram = savedProgram;
    document.getElementById('program-select').value = currentProgram;
  }
  
  if (savedSession) {
    currentSession = savedSession;
  }
  
  console.log('Current program:', currentProgram, 'Current session:', currentSession);
}

// Data management functions
function exportData() {
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('phlul_') || key.startsWith('convict_') || key.startsWith('mobility_') || key.startsWith('five31_') || key.startsWith('rehab_')) {
      allData[key] = JSON.parse(localStorage.getItem(key));
    }
  }
  
  const dataStr = JSON.stringify(allData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `workout-data-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      Object.keys(data).forEach(key => {
        localStorage.setItem(key, JSON.stringify(data[key]));
      });
      alert('Data imported successfully!');
      renderWorkout();
    } catch (err) {
      alert('Error importing data: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function clearAllData() {
  const confirmed = prompt('Type DELETE to clear all workout data');
  if (confirmed === 'DELETE') {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('phlul_') || key.startsWith('convict_') || key.startsWith('mobility_') || key.startsWith('five31_') || key.startsWith('rehab_')) {
        localStorage.removeItem(key);
      }
    });
    alert('All workout data cleared!');
    renderWorkout();
  }
}
