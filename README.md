# PhysioCare – Premier Physiotherapy & Rehabilitation Clinic Template

> **Move Better. Live Better.**  
> A comprehensive, modern, frontend-only website and clinical management template engineered for physiotherapy clinics, rehabilitation centers, and sports medicine practices.

---

## 🌟 Key Highlights

* **100% Frontend Architecture**: Built purely with HTML5, CSS3, JavaScript, and Tailwind CSS. Zero backend or build tools required — launch immediately by double-clicking any HTML file or running any static server.
* **Strict Two-Color Design System**:
  * **Primary**: Teal (`#0F766E`) for all primary action buttons, active navigation states, and clinical highlights. (Buttons maintain consistent color with subtle lift and elevation).
  * **Secondary**: Deep Slate (`#1E293B`) for headings, dark cards, and foundational typography.
* **Dual Homepage Versions**:
  * **Home 1 (Classic)**: Welcoming, structured layout with 1-on-1 doctor-led focus, 12 full sections, trust metrics, service cards, recovery pathway, and pricing preview.
  * **Home 2 (Premium)**: Cinematic full-width layout with editorial split sections, treatment philosophy, asymmetrical feature grid, and facility gallery.
* **Full Authentication Suite**: Dedicated login, registration, forgot-password, and reset-password screens without public headers/footers.
* **Dual Clinical Dashboards**:
  * **Patient Portal (`patient/index.html`)**: Personal health portal featuring recovery progress tracking (78%), interactive appointment schedule, active treatment plan protocols, guided exercise video library, itemized superbills, and account settings.
  * **Admin Operations Workspace (`admin/index.html`)**: Operations hub featuring live appointment approval queue, patient directory search/management, clinician roster, service catalog, and treatment volume analytics.
* **State Persistence via LocalStorage**: Pre-seeded demo dataset with 10 clinical services, 4 credentialed therapists, appointment schedules, exercises, and patient records.
* **Internationalization & Accessibility**: Built-in instant **Dark Mode** toggle and full **Right-to-Left (RTL)** layout engine (Arabic & Hebrew ready).

---

## 📂 Sitemap & Directory Structure

```
physiocare/
├── index.html                  # Home 1 (Classic Welcoming Layout)
├── home-2.html                 # Home 2 (Premium Cinematic Layout)
├── about.html                  # Clinic Story, Mission, Facilities & Values
├── services.html               # 10 Specialized Rehabilitation Treatments
├── service-details.html        # Modular Individual Treatment Template
├── team.html                   # Clinical Care Team & Specialist Profiles
├── conditions.html             # Pain & Injury Conditions Directory
├── blog.html                   # Health & Recovery Insights Library
├── blog-details.html           # Educational Article with Schema Markup
├── pricing.html                # Transparent Treatment Packages (₹499 / ₹1,499 / ₹2,999)
├── contact.html                # Location, Working Hours & Enquiry Form
├── appointment.html            # Multi-Step Appointment Booking Engine
├── 404.html                    # Error Page with Quick Links
├── coming-soon.html            # Under Construction / Facility Launch
│
├── auth/                       # Dedicated Authentication Suite
│   ├── login.html              # Patient Portal Login with Password Toggle
│   ├── register.html           # Patient Registration with Terms Consent
│   ├── forgot-password.html    # Password Recovery Dispatcher
│   └── reset-password.html     # Secure Credential Reset Screen
│
├── patient/                    # Patient Care Portal (No Public Header/Footer)
│   └── index.html              # Modular Patient Dashboard (Overview, Appointments, Plans, Exercises, Billing)
│
├── admin/                      # Clinic Management Suite (Role-Gated Portal)
│   └── index.html              # Operations Hub (Overview, Booking Approvals, Patient Directory, Faculty)
│
├── pages/                      # Additional Standalone Utility Pages
│   ├── 404.html
│   ├── coming-soon.html
│   ├── maintenance.html
│   ├── privacy-policy.html
│   └── terms.html
│
└── assets/
    ├── css/
    │   ├── custom.css          # Design system variables, animations & utilities
    │   └── dashboard.css       # Portal layout, sidebar & metric card styles
    ├── js/
    │   ├── app.js              # Global initialization, modals & toast alerts
    │   ├── storage.js          # Reactive LocalStorage state engine
    │   ├── demo-data.js        # Seed datasets for instant out-of-box demo
    │   ├── theme.js            # Light/Dark mode controller & observer
    │   └── rtl.js              # Bidirectional LTR/RTL layout manager
    └── images/
        ├── logo.svg            # Primary brand mark (Light mode)
        ├── logo-white.svg      # Primary brand mark (Dark mode)
        └── logo-mark.svg       # Favicon kinetic icon
```

---

## 🚀 Quick Start

1. Clone or download the repository.
2. Open [`index.html`](index.html) directly in any web browser.
3. No server or build commands required. To serve locally with Python:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---

## 💾 LocalStorage Demo Data

All demo data is automatically seeded on first launch:
* `physiocare_patients`: Registered patient accounts.
* `physiocare_session`: Active demo session.
* `physiocare_appointments`: Booking requests and confirmed sessions.
* `physiocare_therapists`: Staff clinicians and specialists.
* `physiocare_services`: 10 clinical rehabilitation services.
* `physiocare_treatment_plans`: Active recovery protocols.
* `physiocare_exercises`: Prescribed home rehabilitation movements.
* `physiocare_reviews`: Verified patient testimonials.
* `physiocare_blog`: Health and wellness articles.
* `physiocare_theme`: Selected theme mode (`light` / `dark`).
* `physiocare_direction`: Text orientation (`ltr` / `rtl`).

---

## ⚖️ License & Disclaimer

Designed as a frontend demonstration template for healthcare practices. LocalStorage is intended for demonstration workflows; real clinical deployments handling sensitive Protected Health Information (PHI) require server-side HIPAA/GDPR-compliant encrypted databases and secure authentication.
