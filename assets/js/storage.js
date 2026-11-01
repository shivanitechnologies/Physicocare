/**
 * PhysioCare - LocalStorage State Engine
 * Initializes seed data, provides deduplication, and safe CRUD operations
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

  // Helper: Deduplicate an array of appointment records
  function deduplicateAppointments(list) {
    if (!Array.isArray(list)) return [];
    const seen = new Set();
    const unique = [];

    for (const apt of list) {
      if (!apt) continue;
      // Normalizing patient name, service, and date
      const key = `${(apt.patientName || '').trim().toLowerCase()}_${(apt.service || '').trim().toLowerCase()}_${(apt.date || '').trim().toLowerCase()}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(apt);
      }
    }
    return unique;
  }

  // Helper: Deduplicate an array of patient records
  function deduplicatePatients(list) {
    if (!Array.isArray(list)) return [];
    const seen = new Set();
    const unique = [];

    for (const pat of list) {
      if (!pat) continue;
      const key = (pat.id || pat.email || pat.name || '').trim().toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(pat);
      }
    }
    return unique;
  }

  // Initialize seed data if not present or if stale/duplicate
  function initSeedData(forceReset = false) {
    if (!window.PhysioDemoData) return;

    const storedServices = localStorage.getItem(KEYS.SERVICES);
    if (forceReset || !storedServices || storedServices.includes('photo-1629909613654') || !storedServices.includes('therapies')) {
      localStorage.setItem(KEYS.SERVICES, JSON.stringify(window.PhysioDemoData.services));
    }

    if (forceReset || !localStorage.getItem(KEYS.THERAPISTS)) {
      localStorage.setItem(KEYS.THERAPISTS, JSON.stringify(window.PhysioDemoData.therapists));
    }

    // Patients: ensure full 6 diverse patients
    const storedPatients = localStorage.getItem(KEYS.PATIENTS);
    let parsedPatients = [];
    try { parsedPatients = storedPatients ? JSON.parse(storedPatients) : []; } catch(e){}
    if (forceReset || !storedPatients || parsedPatients.length < 4) {
      localStorage.setItem(KEYS.PATIENTS, JSON.stringify(window.PhysioDemoData.patients));
    } else {
      // Deduplicate existing
      const cleanPatients = deduplicatePatients(parsedPatients);
      localStorage.setItem(KEYS.PATIENTS, JSON.stringify(cleanPatients));
    }

    if (forceReset || !localStorage.getItem(KEYS.SESSION)) {
      localStorage.setItem(KEYS.SESSION, JSON.stringify(window.PhysioDemoData.session));
    }

    // Appointments: ensure fresh, diverse, non-duplicate bookings
    const storedApts = localStorage.getItem(KEYS.APPOINTMENTS);
    let parsedApts = [];
    try { parsedApts = storedApts ? JSON.parse(storedApts) : []; } catch(e){}
    
    // Check if appointments only contains Pravin Kumar or is less than 6
    const hasOnlyOnePatient = parsedApts.length > 0 && parsedApts.every(a => (a.patientName || '').toLowerCase().includes('pravin'));
    if (forceReset || !storedApts || parsedApts.length < 6 || hasOnlyOnePatient) {
      localStorage.setItem(KEYS.APPOINTMENTS, JSON.stringify(window.PhysioDemoData.appointments));
    } else {
      // Clean up any duplicates in existing data
      const cleanApts = deduplicateAppointments(parsedApts);
      localStorage.setItem(KEYS.APPOINTMENTS, JSON.stringify(cleanApts));
    }

    if (forceReset || !localStorage.getItem(KEYS.TREATMENT_PLANS)) {
      localStorage.setItem(KEYS.TREATMENT_PLANS, JSON.stringify(window.PhysioDemoData.treatmentPlans));
    }
    if (forceReset || !localStorage.getItem(KEYS.EXERCISES)) {
      localStorage.setItem(KEYS.EXERCISES, JSON.stringify(window.PhysioDemoData.exercises));
    }
    if (forceReset || !localStorage.getItem(KEYS.REVIEWS)) {
      localStorage.setItem(KEYS.REVIEWS, JSON.stringify(window.PhysioDemoData.reviews));
    }
    if (forceReset || !localStorage.getItem(KEYS.BLOG)) {
      localStorage.setItem(KEYS.BLOG, JSON.stringify(window.PhysioDemoData.blog));
    }
    if (forceReset || !localStorage.getItem(KEYS.NOTIFICATIONS)) {
      localStorage.setItem(KEYS.NOTIFICATIONS, JSON.stringify(window.PhysioDemoData.notifications));
    }
  }

  window.PhysioStorage = {
    KEYS,
    init: initSeedData,
    deduplicate: deduplicateAppointments,
    deduplicatePatients: deduplicatePatients,

    // Reset everything to fresh, clean seed demo data
    resetDemoData: function () {
      initSeedData(true);
      window.dispatchEvent(new CustomEvent('physio:storage:updated', { detail: { key: 'all' } }));
      return true;
    },

    get: function (key, defaultValue = []) {
      try {
        const item = localStorage.getItem(key);
        if (!item) return defaultValue;
        const parsed = JSON.parse(item);
        if (key === KEYS.APPOINTMENTS && Array.isArray(parsed)) {
          return deduplicateAppointments(parsed);
        }
        if (key === KEYS.PATIENTS && Array.isArray(parsed)) {
          return deduplicatePatients(parsed);
        }
        return parsed;
      } catch (e) {
        console.error('Storage get error', e);
        return defaultValue;
      }
    },

    set: function (key, data) {
      try {
        let cleanData = data;
        if (key === KEYS.APPOINTMENTS && Array.isArray(data)) {
          cleanData = deduplicateAppointments(data);
        }
        if (key === KEYS.PATIENTS && Array.isArray(data)) {
          cleanData = deduplicatePatients(data);
        }
        localStorage.setItem(key, JSON.stringify(cleanData));
        window.dispatchEvent(new CustomEvent('physio:storage:updated', { detail: { key, data: cleanData } }));
        return true;
      } catch (e) {
        console.error('Storage set error', e);
        return false;
      }
    },

    // Specific CRUD helper functions
    addAppointment: function (apt) {
      const list = this.get(KEYS.APPOINTMENTS, []);
      // Check for exact duplicate before adding
      const isDuplicate = list.some(a => 
        (a.patientName || '').trim().toLowerCase() === (apt.patientName || '').trim().toLowerCase() &&
        (a.service || '').trim().toLowerCase() === (apt.service || '').trim().toLowerCase() &&
        (a.date || '').trim().toLowerCase() === (apt.date || '').trim().toLowerCase()
      );
      if (isDuplicate) {
        return list.find(a => 
          (a.patientName || '').trim().toLowerCase() === (apt.patientName || '').trim().toLowerCase() &&
          (a.service || '').trim().toLowerCase() === (apt.service || '').trim().toLowerCase()
        );
      }

      apt.id = apt.id || ('apt-' + Date.now());
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
