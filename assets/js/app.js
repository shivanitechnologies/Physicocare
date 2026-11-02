/**
 * PhysioCare - Global Application Controller
 * Handles mobile drawer, header scroll effect, toast alerts, and modal dialogs
 */

(function () {
  // Mobile drawer controls
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    const drawer = document.getElementById('mobile-menu-drawer');

    if (!toggleBtn || !drawer) return;

    function openDrawer() {
      drawer.classList.remove('translate-x-full');
      if (backdrop) backdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.add('translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Auto-close drawer when any drawer navigation link is clicked
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close drawer when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.classList.contains('translate-x-full')) {
        closeDrawer();
      }
    });
  }

  // Header scroll elevation
  function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 20) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Toast Notification System
  window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';

    const iconSvg = type === 'success'
      ? `<svg class="w-5 h-5 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
      : `<svg class="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 3500);
  };

  // Appointment Modal Controller

  // 3D Flip Cards Interaction (Click & Tap Toggle)
  function initFlipCards() {
    document.querySelectorAll('.flip-card-container').forEach(card => {
      // Toggle on card tap / click (excluding links/buttons like Book Appointment)
      card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        // On touch screens or non-hover devices, toggle flip on tap
        if (window.matchMedia('(hover: none)').matches || window.innerWidth < 1024) {
          card.classList.toggle('is-flipped');
        }
      });
    });
  }

  function initAppointmentModal() {
    document.querySelectorAll('[data-open-modal="appointment"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'appointment.html';
      });
    });
  }

  
  /**
   * Interactive Recovery Journey Pathway
   */
  function initRecoveryJourney() {
    const journeyCards = document.querySelectorAll('.journey-card');
    if (!journeyCards.length) return;

    journeyCards.forEach(card => {
      card.addEventListener('click', () => {
        const step = card.getAttribute('data-step');
        
        journeyCards.forEach(c => {
          c.classList.remove('active', 'border-teal-600', 'dark:border-teal-400', 'border-2', 'ring-4', 'ring-teal-500/20');
          c.classList.add('border-slate-200/90', 'dark:border-slate-700/80');
          const badge = c.querySelector('.stage-badge');
          if (badge) {
            badge.classList.remove('bg-teal-600', 'text-white');
            badge.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
          }
        });

        card.classList.add('active', 'border-teal-600', 'dark:border-teal-400', 'border-2', 'ring-4', 'ring-teal-500/20');
        card.classList.remove('border-slate-200/90', 'dark:border-slate-700/80');
        const activeBadge = card.querySelector('.stage-badge');
        if (activeBadge) {
          activeBadge.classList.add('bg-teal-600', 'text-white');
          activeBadge.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        }

        // Highlight matching SVG node if present
        document.querySelectorAll('.journey-node').forEach(node => {
          const circle = node.querySelector('circle:last-child');
          if (node.getAttribute('data-node') === step) {
            circle.setAttribute('class', 'fill-emerald-500 stroke-2 stroke-white dark:stroke-slate-900');
          } else {
            circle.setAttribute('class', 'fill-teal-600 dark:fill-teal-400 stroke-2 stroke-white dark:stroke-slate-900');
          }
        });
      });
    });
  }

  
  /**
   * Universal Scroll & Fade-In Animation Engine
   * High-performance IntersectionObserver animation driver that automatically
   * animates headings, text paragraphs, cards, grids, and imagery across all sections.
   */
  function initScrollAnimations() {
    // 1. Reduced motion or unsupported fallback
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // 2. Automatically enrich sections and cards that lack explicit classes
    autoTagAnimatableElements();

    // 3. Fast IntersectionObserver instance
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('is-revealed');
          obs.unobserve(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -20px 0px',
      threshold: 0.05
    });

    // 4. Observe all elements with animation classes
    const elements = document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade'
    );

    const vh = window.innerHeight || document.documentElement.clientHeight;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // If already within or above the viewport on initial load, reveal promptly
      if (rect.top <= vh - 20 && rect.bottom >= 0) {
        setTimeout(() => {
          el.classList.add('is-revealed');
        }, 40);
      } else {
        observer.observe(el);
      }
    });

    // 5. Global helper for tab switches, dynamically revealed elements, or scroll fallback
    window.triggerRevealCheck = function() {
      const currentVh = window.innerHeight || document.documentElement.clientHeight;
      const unrevealed = document.querySelectorAll('.reveal:not(.is-revealed), .reveal-up:not(.is-revealed), .reveal-down:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-zoom:not(.is-revealed), .reveal-fade:not(.is-revealed)');
      unrevealed.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top <= currentVh - 10 && r.bottom >= 0 && (r.width > 0 || r.height > 0)) {
          el.classList.add('is-revealed');
          try { observer.unobserve(el); } catch (e) {}
        }
      });
    };

    // 6. Passive scroll listener as complementary backup
    let scrollTicker = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicker) {
        requestAnimationFrame(() => {
          window.triggerRevealCheck();
          scrollTicker = false;
        });
        scrollTicker = true;
      }
    }, { passive: true });

    // 7. Safety timeout fallback: ensures zero elements ever remain stuck hidden
    setTimeout(() => {
      window.triggerRevealCheck();
    }, 1200);
  }

  function autoTagAnimatableElements() {
    // 1. Identify all content containers across standard, article, dashboard, and auth pages
    const containers = document.querySelectorAll(
      'main section, main article, main > div, #portal-content > div, .auth-container, body > div.max-w-5xl, body > div.card-base, body > .w-full.max-w-md'
    );

    containers.forEach((container, sIdx) => {
      if (container.hasAttribute('data-no-anim')) return;

      // Section titles, badges, and lead text
      const titles = container.querySelectorAll(
        ':scope > div > .text-center, :scope > .text-center, :scope > div > h2, :scope h1, :scope h2, :scope h3'
      );
      titles.forEach(t => {
        if (!hasRevealClass(t) && !t.closest('.card-base, .flip-card-container, table, nav, header')) {
          t.classList.add('reveal-up');
        }
      });

      // Hero section elements: give them staggered micro-animations
      if (sIdx === 0 || container.querySelector('h1')) {
        const h1 = container.querySelector('h1');
        if (h1 && !hasRevealClass(h1)) h1.classList.add('reveal-up', 'delay-75');

        const heroBadge = container.querySelector('.inline-flex.items-center.gap-2');
        if (heroBadge && !hasRevealClass(heroBadge)) heroBadge.classList.add('reveal-up');

        const heroLead = container.querySelector('p.text-base, p.text-lg, p.lead');
        if (heroLead && !hasRevealClass(heroLead)) heroLead.classList.add('reveal-up', 'delay-150');

        const heroCtas = container.querySelector('.flex.flex-wrap.items-center');
        if (heroCtas && !hasRevealClass(heroCtas)) heroCtas.classList.add('reveal-up', 'delay-200');

        const heroMedia = container.querySelector('.lg\\:col-span-5, .relative.h-56');
        if (heroMedia && !hasRevealClass(heroMedia)) heroMedia.classList.add('reveal-zoom', 'delay-200');
      }

      // Grids of cards (services, team, pricing, features, testimonials)
      const grids = container.querySelectorAll('.grid');
      grids.forEach(grid => {
        if (grid.hasAttribute('data-no-anim') || grid.closest('.no-anim')) return;
        const children = grid.children;
        const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-300', 'delay-400', 'delay-500'];
        Array.from(children).forEach((child, i) => {
          if (!hasRevealClass(child)) {
            child.classList.add('reveal-up', delays[i % delays.length]);
          }
        });
      });

      // Individual cards not inside .grid
      container.querySelectorAll('.card-base, .flip-card-container, .journey-card, article').forEach(card => {
        // Never tag inner components of flip cards
        if (card.closest('.flip-card-container') && card !== card.closest('.flip-card-container')) return;
        if (!hasRevealClass(card) && (!card.parentElement || !card.parentElement.classList.contains('grid'))) {
          card.classList.add('reveal-up');
        }
      });

      // Tables, KPI cards, and forms
      container.querySelectorAll('form, .overflow-x-auto, .kpi-card').forEach(block => {
        if (!hasRevealClass(block) && !block.closest('.reveal-up, .reveal, .card-base, nav, header')) {
          block.classList.add('reveal-up');
        }
      });

      // Content images
      container.querySelectorAll('img').forEach(img => {
        if (img.src.includes('logo') || img.src.includes('icon') || img.classList.contains('avatar') || img.classList.contains('team-layer') || img.closest('.team-choreography-stage') || img.closest('nav') || img.closest('header')) {
          return;
        }
        if (!img.closest('.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade')) {
          if (!hasRevealClass(img)) {
            img.classList.add('reveal-zoom');
          }
        }
      });
    });

    // Dedicated Auth template cards (split-panel login & register)
    document.querySelectorAll('.w-full.max-w-5xl.rounded-\\[32px\\], .card-base.max-w-md, .auth-card').forEach(c => {
      if (!hasRevealClass(c)) c.classList.add('reveal-up');
      const leftCol = c.querySelector('.lg\\:col-span-5');
      const rightCol = c.querySelector('.lg\\:col-span-7');
      if (leftCol && !hasRevealClass(leftCol)) leftCol.classList.add('reveal-left');
      if (rightCol && !hasRevealClass(rightCol)) rightCol.classList.add('reveal-right');
    });
  }

  function hasRevealClass(el) {
    return el.matches('.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade, .is-revealed');
  }

  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeaderScroll();
    initAppointmentModal();
    initFlipCards();
    initRecoveryJourney();
    initScrollAnimations();

    // Auto-update copyright year
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  });
})();
