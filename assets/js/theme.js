/**
 * PhysioCare - Theme Controller
 * Handles light/dark theme switching and persistence via LocalStorage
 */

(function () {
  const THEME_KEY = 'physiocare_theme';
  let lastThemeToggle = 0;

  function getPreferredTheme() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme');
      if (urlTheme === 'light' || urlTheme === 'dark') {
        localStorage.setItem(THEME_KEY, urlTheme);
        return urlTheme;
      }
    } catch (e) {}
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
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode');
    });
  }

  window.toggleTheme = function () {
    const now = Date.now();
    if (now - lastThemeToggle < 250) return; // Prevent double firing
    lastThemeToggle = now;

    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);

    // Clean up URL ?theme= parameter so reload does not override user preference
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('theme')) {
        url.searchParams.delete('theme');
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) {}

    applyTheme(next);
  };

  // Immediate execution to prevent flash of wrong theme
  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.removeEventListener('click', window.toggleTheme);
      btn.addEventListener('click', window.toggleTheme);
    });
  });
})();
