/**
 * PhysioCare - LocalStorage State Engine
 * Initializes seed data and provides safe CRUD operations
 */

(function () {
  const KEYS = {
    PATIENTS: 'physiocare_patients',
    SESSION: 'physiocare_session',
    APPOINTMENTS: 'physiocare_appointments',
    THERAPISTS: 'physiocare_therapists',
    SERVICES: 'physiocare_services',
    TREATMENT_PLANS: 'physiocare_treatment_plans',
    EXERCISES: 'physiocare_exercises',
    REVIEWS: 'physiocare_reviews',
    BLOG: 'physiocare_blog',
    NOTIFICATIONS: 'physiocare_notifications'
  };

  // Initialize seed data if not present
  function initSeedData() {
    if (!window.PhysioDemoData) return;

    if (!localStorage.getItem(KEYS.SERVICES)) {
      localStorage.setItem(KEYS.SERVICES, JSON.stringify(window.PhysioDemoData.services));
    }
    if (!localStorage.getItem(KEYS.THERAPISTS)) {
      localStorage.setItem(KEYS.THERAPISTS, JSON.stringify(window.PhysioDemoData.therapists));
    }
    if (!localStorage.getItem(KEYS.PATIENTS)) {
      localStorage.setItem(KEYS.PATIENTS, JSON.stringify(window.PhysioDemoData.patients));
    }
    if (!localStorage.getItem(KEYS.SESSION)) {
      localStorage.setItem(KEYS.SESSION, JSON.stringify(window.PhysioDemoData.session));
    }
    if (!localStorage.getItem(KEYS.APPOINTMENTS)) {
      localStorage.setItem(KEYS.APPOINTMENTS, JSON.stringify(window.PhysioDemoData.appointments));
    }
    if (!localStorage.getItem(KEYS.TREATMENT_PLANS)) {
      localStorage.setItem(KEYS.TREATMENT_PLANS, JSON.stringify(window.PhysioDemoData.treatmentPlans));
    }
    if (!localStorage.getItem(KEYS.EXERCISES)) {
      localStorage.setItem(KEYS.EXERCISES, JSON.stringify(window.PhysioDemoData.exercises));
    }
    if (!localStorage.getItem(KEYS.REVIEWS)) {
      localStorage.setItem(KEYS.REVIEWS, JSON.stringify(window.PhysioDemoData.reviews));
    }
    if (!localStorage.getItem(KEYS.BLOG)) {
      localStorage.setItem(KEYS.BLOG, JSON.stringify(window.PhysioDemoData.blog));
    }
    if (!localStorage.getItem(KEYS.NOTIFICATIONS)) {
      localStorage.setItem(KEYS.NOTIFICATIONS, JSON.stringify(window.PhysioDemoData.notifications));
    }
  }

  window.PhysioStorage = {
    KEYS,
    init: initSeedData,

    get: function (key, defaultValue = []) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (e) {
        console.error('Storage get error', e);
        return defaultValue;
      }
    },

    set: function (key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
        window.dispatchEvent(new CustomEvent('physio:storage:updated', { detail: { key, data } }));
        return true;
      } catch (e) {
        console.error('Storage set error', e);
        return false;
      }
    },

    // Specific CRUD helper functions
    addAppointment: function (apt) {
      const list = this.get(KEYS.APPOINTMENTS, []);
      apt.id = 'apt-' + Date.now();
      apt.status = apt.status || 'Confirmed';
      list.unshift(apt);
      this.set(KEYS.APPOINTMENTS, list);
      return apt;
    },

    getSession: function () {
      return this.get(KEYS.SESSION, { isLoggedIn: false });
    },

    setSession: function (session) {
      return this.set(KEYS.SESSION, session);
    },

    logout: function () {
      this.set(KEYS.SESSION, { isLoggedIn: false });
    }
  };

  // Run on load
  initSeedData();
})();
