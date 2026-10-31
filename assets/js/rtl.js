/**
 * PhysioCare - Direction / RTL Controller
 * Handles LTR <-> RTL bidirectional layout switching and persistence
 */

(function () {
  const RTL_KEY = 'physiocare_direction';

  function getPreferredDirection() {
    return localStorage.getItem(RTL_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    if (dir === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
    updateRtlButtons(dir);
  }

  function updateRtlButtons(dir) {
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
      btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
      if (dir === 'rtl') {
        btn.classList.add('border-teal-500', 'text-teal-600', 'dark:text-teal-400');
      } else {
        btn.classList.remove('border-teal-500', 'text-teal-600', 'dark:text-teal-400');
      }
    });
  }

  window.toggleDirection = function () {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    localStorage.setItem(RTL_KEY, next);
    applyDirection(next);
    if (window.showToast) {
      window.showToast(`Layout switched to ${next.toUpperCase()}`);
    }
  };

  // Immediate execution
  applyDirection(getPreferredDirection());

  document.addEventListener('DOMContentLoaded', () => {
    applyDirection(getPreferredDirection());
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', window.toggleDirection);
    });
  });
})();
