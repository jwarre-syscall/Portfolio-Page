// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

/* Theme toggle: store preference in localStorage */
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t){
  body.classList.remove('theme-dark','theme-light');
  body.classList.add(t);
}
const saved = localStorage.getItem('theme');
const initial = saved || 'theme-dark';
applyTheme(initial);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = body.classList.contains('theme-dark') ? 'theme-light' : 'theme-dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}

const resumeInput = document.getElementById('resumeInput');
const resumeFrame = document.getElementById('resumeFrame');
const downloadResume = document.getElementById('downloadResume');

resumeInput.addEventListener('change', (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  resumeFrame.src = url;
  downloadResume.href = url;
  downloadResume.download = file.name;
});
