/**
 * PhysioCare - Physiotherapy & Rehabilitation Clinic
 * Interactive Functionality & Application Logic
 */

// Immediate execution: Default to Light Mode for every new user; apply dark only if user explicitly saved 'dark'
(function() {
  if (localStorage.getItem('physiocare_theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initMobileNav();
  initAppointmentModal();
  initFaqAccordions();
  initPasswordToggles();
  initBlogFeatures();
  initServicesFilter();
  initForms();
  initDashboard();
  initCountdown();
  initScrollReveal();
  initStatCounters();
});

/* ==========================================================================
   1. Theme Management (Light Mode is Default; User can toggle to Dark Mode)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('physiocare_theme');
  
  // Light Mode is default. Dark mode only activates if user explicitly chose it.
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcons();

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('physiocare_theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
      showToast(isDark ? 'Dark theme enabled' : 'Light theme enabled', 'info');
    });
  });
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.theme-icon-sun').forEach(el => {
    el.classList.toggle('hidden', !isDark);
  });
  document.querySelectorAll('.theme-icon-moon').forEach(el => {
    el.classList.toggle('hidden', isDark);
  });
}

/* ==========================================================================
   2. Direction Management (LTR / RTL)
   ========================================================================== */
function initDirection() {
  const savedDir = localStorage.getItem('physiocare_dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  updateDirButtons(savedDir);

  document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('physiocare_dir', newDir);
      updateDirButtons(newDir);
      showToast(newDir === 'rtl' ? 'RTL Layout enabled' : 'LTR Layout enabled', 'info');
    });
  });
}

function updateDirButtons(dir) {
  document.querySelectorAll('.rtl-toggle-btn span.dir-label').forEach(label => {
    label.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const mobileClose = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  if (!mobileToggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full', '-translate-x-full', 'hidden');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    mobileMenu.classList.add(isRtl ? '-translate-x-full' : 'translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  mobileToggle.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   4. Appointment Booking Modal & Global Handler
   ========================================================================== */
function initAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('[data-open-modal="appointment"]');
  const closeButtons = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('appointment-form');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const prefillService = btn.getAttribute('data-service');
      if (prefillService && form && form.elements['service']) {
        form.elements['service'].value = prefillService;
      }
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const patientName = form.elements['patient_name']?.value || 'Patient';
      const refId = 'PHY-' + Math.floor(1000 + Math.random() * 9000);
      showToast(`Appointment requested for ${patientName}! Reference: ${refId}`, 'success');
      form.reset();
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }, 1200);
    });
  }
}

/* ==========================================================================
   5. Interactive FAQ Accordions
   ========================================================================== */
function initFaqAccordions() {
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-icon');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');
      
      // Close other accordions in the same group if configured
      const parentGroup = item.closest('[data-accordion-group="single"]');
      if (parentGroup) {
        parentGroup.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
        parentGroup.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotate-180'));
      }

      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

/* ==========================================================================
   6. Password Visibility Toggle
   ========================================================================== */
function initPasswordToggles() {
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      const showIcon = btn.querySelector('.icon-show');
      const hideIcon = btn.querySelector('.icon-hide');
      if (showIcon && hideIcon) {
        showIcon.classList.toggle('hidden', isPassword);
        hideIcon.classList.toggle('hidden', !isPassword);
      }
    });
  });
}

/* ==========================================================================
   7. Blog Search and Category Filters
   ========================================================================== */
function initBlogFeatures() {
  const searchInput = document.getElementById('blog-search-input');
  const categoryChips = document.querySelectorAll('.blog-filter-chip');
  const blogCards = document.querySelectorAll('.blog-card');
  const noResultsMsg = document.getElementById('blog-no-results');

  if (!blogCards.length) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function filterPosts() {
    let visibleCount = 0;
    blogCards.forEach(card => {
      const title = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
      const excerpt = card.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';
      const category = card.getAttribute('data-category')?.toLowerCase() || '';

      const matchesSearch = title.includes(searchQuery) || excerpt.includes(searchQuery);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (noResultsMsg) {
      noResultsMsg.classList.toggle('hidden', visibleCount > 0);
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterPosts();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      categoryChips.forEach(c => {
        c.classList.remove('bg-teal-700', 'text-white', 'border-teal-700');
        c.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      });

      chip.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      chip.classList.add('bg-teal-700', 'text-white', 'border-teal-700');

      currentCategory = chip.getAttribute('data-filter') || 'all';
      filterPosts();
    });
  });
}

/* ==========================================================================
   8. Services Filter
   ========================================================================== */
function initServicesFilter() {
  const serviceChips = document.querySelectorAll('.service-filter-chip');
  const serviceCards = document.querySelectorAll('.service-card-item');

  if (!serviceChips.length || !serviceCards.length) return;

  serviceChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = chip.getAttribute('data-filter');

      serviceChips.forEach(c => {
        c.classList.remove('bg-teal-700', 'text-white', 'shadow-md');
        c.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
      });
      chip.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
      chip.classList.add('bg-teal-700', 'text-white', 'shadow-md');

      serviceCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   9. General Form Feedback Handlers
   ========================================================================== */
function initForms() {
  // Newsletter forms
  document.querySelectorAll('form.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]')?.value;
      if (email) {
        showToast(`Thank you! Newsletter confirmation sent to ${email}`, 'success');
        form.reset();
      }
    });
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.elements['full_name']?.value || 'Friend';
      showToast(`Thank you ${name}! Your inquiry has been sent to our clinical team.`, 'success');
      contactForm.reset();
    });
  }

  // Blog comment form
  const commentForm = document.getElementById('blog-comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = commentForm.elements['author_name']?.value || 'Guest';
      const commentText = commentForm.elements['comment_message']?.value || '';
      
      const commentsList = document.getElementById('comments-container');
      if (commentsList && commentText) {
        const newComment = document.createElement('div');
        newComment.className = 'p-5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm transition hover-lift';
        newComment.innerHTML = `
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-bold flex items-center justify-center">
                ${author.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm">${escapeHtml(author)}</h4>
                <p class="text-xs text-slate-400">Just now</p>
              </div>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 rounded-full">Patient Review</span>
          </div>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${escapeHtml(commentText)}</p>
        `;
        commentsList.prepend(newComment);
        showToast('Comment submitted successfully!', 'success');
        commentForm.reset();
      }
    });
  }

  // Auth forms (login / register mock)
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Login successful! Redirecting to patient dashboard...', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Registration complete! Welcome to PhysioCare.', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }
}

/* ==========================================================================
   10. Patient Dashboard Logic
   ========================================================================== */
function initDashboard() {
  const exerciseCheckboxes = document.querySelectorAll('.dashboard-exercise-check');
  const exerciseCountEl = document.getElementById('dashboard-exercise-count');
  const exerciseProgressEl = document.getElementById('dashboard-exercise-progress-bar');

  if (exerciseCheckboxes.length) {
    function updateProgress() {
      const total = exerciseCheckboxes.length;
      let completed = 0;
      exerciseCheckboxes.forEach(cb => {
        if (cb.checked) {
          completed++;
          cb.closest('.exercise-row')?.classList.add('opacity-60', 'line-through');
        } else {
          cb.closest('.exercise-row')?.classList.remove('opacity-60', 'line-through');
        }
      });

      if (exerciseCountEl) {
        exerciseCountEl.textContent = `${completed} of ${total} Completed`;
      }
      if (exerciseProgressEl) {
        const pct = Math.round((completed / total) * 100);
        exerciseProgressEl.style.width = `${pct}%`;
      }
    }

    exerciseCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        updateProgress();
        if (cb.checked) {
          showToast('Exercise marked completed! Keep up the great motion.', 'success');
        }
      });
    });
    updateProgress();
  }

  // Dashboard Tab Switching (Overview, Appointments, Exercises, Messages, Profile)
  const tabButtons = document.querySelectorAll('[data-dashboard-tab]');
  const tabSections = document.querySelectorAll('.dashboard-section');

  if (tabButtons.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = btn.getAttribute('data-dashboard-tab');

        tabButtons.forEach(b => {
          b.classList.remove('bg-teal-700', 'text-white', 'shadow-md');
          b.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
        });
        btn.classList.add('bg-teal-700', 'text-white', 'shadow-md');
        btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');

        tabSections.forEach(section => {
          if (section.id === `tab-${targetTab}`) {
            section.classList.remove('hidden');
          } else {
            section.classList.add('hidden');
          }
        });
      });
    });
  }

  // Chat simulator in Messages tab
  const chatForm = document.getElementById('dashboard-chat-form');
  const chatMessages = document.getElementById('dashboard-chat-messages');
  if (chatForm && chatMessages) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = chatForm.querySelector('input[type="text"]');
      const val = input?.value.trim();
      if (!val) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'flex justify-end mb-3';
      userBubble.innerHTML = `
        <div class="bg-teal-700 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-sm text-sm shadow-sm">
          <p>${escapeHtml(val)}</p>
          <span class="text-[10px] text-teal-200 block text-right mt-1">Just now</span>
        </div>
      `;
      chatMessages.appendChild(userBubble);
      input.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Simulated therapist reply
      setTimeout(() => {
        const replyBubble = document.createElement('div');
        replyBubble.className = 'flex justify-start mb-3';
        replyBubble.innerHTML = `
          <div class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-sm text-sm shadow-sm border border-slate-200 dark:border-slate-700">
            <p class="font-bold text-xs text-teal-700 dark:text-teal-400 mb-1">Dr. Marcus Chen, DPT</p>
            <p>Thank you for the update! Remember to maintain gentle breathing during the lumbar extensions. I will review your mobility logs tomorrow.</p>
            <span class="text-[10px] text-slate-400 block text-right mt-1">Just now</span>
          </div>
        `;
        chatMessages.appendChild(replyBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    });
  }
}

/* ==========================================================================
   11. Coming Soon Countdown Timer
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-minutes');
  const secsEl = document.getElementById('timer-seconds');

  if (!daysEl) return;

  // Set target date 45 days from current
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 45);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   12. Toast Notification Helper
   ========================================================================== */
function showToast(message, type = 'success', duration = 3800) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-sm font-medium border backdrop-blur-md';

  if (type === 'success') {
    toast.classList.add('bg-white/95', 'dark:bg-slate-800/95', 'text-slate-800', 'dark:text-white', 'border-teal-500/40', 'border-l-4', 'border-l-teal-600');
    toast.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
      </div>
      <div class="flex-1">${escapeHtml(message)}</div>
    `;
  } else if (type === 'error') {
    toast.classList.add('bg-white/95', 'dark:bg-slate-800/95', 'text-slate-800', 'dark:text-white', 'border-rose-500/40', 'border-l-4', 'border-l-rose-500');
    toast.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
      </div>
      <div class="flex-1">${escapeHtml(message)}</div>
    `;
  } else {
    toast.classList.add('bg-white/95', 'dark:bg-slate-800/95', 'text-slate-800', 'dark:text-white', 'border-sky-500/40', 'border-l-4', 'border-l-sky-500');
    toast.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <div class="flex-1">${escapeHtml(message)}</div>
    `;
  }

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/* ==========================================================================
   11. Scroll Reveal & Visual Motion Engine (Text & Image Animations)
   ========================================================================== */
function initScrollReveal() {
  // 1. Auto-tag section headings for text reveal
  document.querySelectorAll('section h2, .section-title, section > div > div > h2').forEach(el => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
    }
  });

  // 2. Auto-tag content cards and clinician/service items with staggered delays
  document.querySelectorAll('section article, .service-card, .therapist-card, .pricing-card, .grid > div.rounded-2xl, .grid > div.rounded-3xl').forEach((el, index) => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
      const delay = (index % 4) * 100;
      if (delay > 0) {
        el.style.transitionDelay = `${delay}ms`;
      }
    }
  });

  // 3. Auto-tag images for zoom containers and smooth hover
  document.querySelectorAll('section img:not(.w-5):not(.w-6):not(.w-7):not(.w-8):not(.w-9):not(.w-10):not(.h-10)').forEach(img => {
    const parent = img.closest('.overflow-hidden, .rounded-2xl, .rounded-3xl');
    if (parent && !parent.classList.contains('img-zoom-container')) {
      parent.classList.add('img-zoom-container');
    }
  });

  // 4. Hero section entrance animations
  document.querySelectorAll('section.hero-full-screen, section.pt-12, section.pt-16').forEach(hero => {
    const bgImg = hero.querySelector('.absolute.inset-0 img');
    if (bgImg && !bgImg.classList.contains('hero-bg-animated')) {
      bgImg.classList.add('hero-bg-animated');
    }
    const badge = hero.querySelector('.relative.z-10 span');
    if (badge && !badge.classList.contains('animate-hero-badge')) {
      badge.classList.add('animate-hero-badge');
    }
    const title = hero.querySelector('.relative.z-10 h1');
    if (title && !title.classList.contains('animate-hero-title')) {
      title.classList.add('animate-hero-title');
    }
    const desc = hero.querySelector('.relative.z-10 p');
    if (desc && !desc.classList.contains('animate-hero-desc')) {
      desc.classList.add('animate-hero-desc');
    }
    const cta = hero.querySelector('.relative.z-10 .flex, .relative.z-10 button, .relative.z-10 a.btn');
    if (cta && !cta.classList.contains('animate-hero-cta')) {
      cta.classList.add('animate-hero-cta');
    }
  });

  // 5. IntersectionObserver execution
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-on-scroll, .reveal-image, .reveal-left, .reveal-right').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll, .reveal-image, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ==========================================================================
   12. Animated Metric Counters
   ========================================================================== */
function initStatCounters() {
  const statElements = Array.from(document.querySelectorAll('p, span, h3, h4')).filter(el => {
    const text = el.textContent.trim();
    return /^(?:[~><]?\s*)?(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([%+kKmM]?)$/.test(text) && el.children.length === 0;
  });

  if (!statElements.length || !('IntersectionObserver' in window)) return;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statElements.forEach(el => counterObserver.observe(el));
}

function animateNumber(el) {
  const rawText = el.textContent.trim();
  const match = rawText.match(/^(?:([~><]?\s*))?(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([%+kKmM]?)$/);
  if (!match) return;

  const prefix = match[1] || '';
  const numStr = match[2].replace(/,/g, '');
  const target = parseFloat(numStr);
  const suffix = match[3] || '';
  const isDecimal = numStr.includes('.');
  const decimals = isDecimal ? numStr.split('.')[1].length : 0;
  const hasComma = match[2].includes(',');

  const duration = 1600;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4); // Ease Out Quart
    const current = target * ease;

    let formatted = isDecimal ? current.toFixed(decimals) : Math.round(current).toString();
    if (hasComma) {
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    el.textContent = `${prefix}${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = rawText;
    }
  }

  requestAnimationFrame(update);
}
