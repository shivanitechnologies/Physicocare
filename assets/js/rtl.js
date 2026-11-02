/**
 * PhysioCare - Direction / RTL Controller
 * Handles LTR <-> RTL bidirectional layout switching, URL parameter support, and persistence
 */

(function () {
  const RTL_KEY = 'physiocare_direction';
  let lastToggleTime = 0;

  function getPreferredDirection() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const dirParam = urlParams.get('dir');
      if (dirParam === 'rtl' || dirParam === 'ltr') {
        localStorage.setItem(RTL_KEY, dirParam);
        return dirParam;
      }
    } catch (e) {}
    return localStorage.getItem(RTL_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    const isRtl = dir === 'rtl';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    if (isRtl) {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
    updateRtlButtons(isRtl ? 'rtl' : 'ltr');

    // Notify listeners if any
    try {
      window.dispatchEvent(new CustomEvent('directionchange', { detail: { direction: isRtl ? 'rtl' : 'ltr' } }));
    } catch (e) {}
  }

  function updateRtlButtons(dir) {
    const isRtl = dir === 'rtl';
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.setAttribute('aria-label', isRtl ? 'Switch to LTR' : 'Switch to RTL');
      btn.setAttribute('title', isRtl ? 'Switch to LTR (Left to Right)' : 'Switch to RTL (Right to Left)');
      if (isRtl) {
        btn.classList.add('border-teal-500', 'text-teal-600', 'dark:text-teal-400', 'bg-teal-50', 'dark:bg-teal-950/40', 'ring-2', 'ring-teal-500/20');
      } else {
        btn.classList.remove('border-teal-500', 'text-teal-600', 'dark:text-teal-400', 'bg-teal-50', 'dark:bg-teal-950/40', 'ring-2', 'ring-teal-500/20');
      }
    });
  }

  window.toggleDirection = function () {
    const now = Date.now();
    if (now - lastToggleTime < 250) return; // Prevent double firing
    lastToggleTime = now;

    const current = document.documentElement.getAttribute('dir') || 'ltr';
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    localStorage.setItem(RTL_KEY, next);

    // Clean up URL ?dir= parameter so subsequent reloads don't override preference
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('dir')) {
        url.searchParams.delete('dir');
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) {}

    applyDirection(next);
    if (window.showToast) {
      window.showToast(`Layout switched to ${next.toUpperCase()}`);
    }
  };

  // Immediate synchronous execution so direction is applied before first render
  applyDirection(getPreferredDirection());

  document.addEventListener('DOMContentLoaded', () => {
    applyDirection(getPreferredDirection());
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.removeEventListener('click', window.toggleDirection);
      btn.addEventListener('click', window.toggleDirection);
    });
  });
})();
