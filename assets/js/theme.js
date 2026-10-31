/**
 * PhysioCare - Theme Controller
 * Handles light/dark theme switching and persistence via LocalStorage
 */

(function () {
  const THEME_KEY = 'physiocare_theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
    updateToggleIcons(theme);
  }

  function updateToggleIcons(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const moon = btn.querySelector('.theme-icon-moon');
      const sun = btn.querySelector('.theme-icon-sun');
      if (moon && sun) {
        if (theme === 'dark') {
          moon.classList.add('hidden');
          sun.classList.remove('hidden');
        } else {
          moon.classList.remove('hidden');
          sun.classList.add('hidden');
        }
      }
    });
  }

  window.toggleTheme = function () {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  };

  // Immediate execution to prevent flash of wrong theme
  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', window.toggleTheme);
    });
  });
})();
