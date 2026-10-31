/**
 * PhysioCare - Initial Seed Dataset
 * Pre-populates LocalStorage with authentic clinical demo records
 */

window.PhysioDemoData = {
  services: [
    {
      id: "orthopedic",
      title: "Orthopedic Physiotherapy",
      subtitle: "Joint, Bone & Muscle Rehabilitation",
      shortDesc: "Evidence-based rehabilitation for arthritis, fractures, tendonitis, and joint replacements.",
      duration: "45–60 mins",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      category: "Musculoskeletal"
    },
    {
      id: "sports",
      title: "Sports Physiotherapy",
      subtitle: "Athletic Injury & Return-to-Sport",
      shortDesc: "Targeted recovery for ACL sprains, rotator cuff tears, shin splints, and athletic conditioning.",
      duration: "45–60 mins",
      price: "₹1,799",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      category: "Sports Performance"
    },
    {
      id: "spine-posture",
      title: "Spine & Posture Care",
      subtitle: "Back, Neck & Ergonomics",
      shortDesc: "Decompression therapy and postural retraining for herniated discs, sciatica, and chronic neck tension.",
      duration: "40–50 mins",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      category: "Spine Health"
    },
    {
      id: "neurological",
      title: "Neurological Physiotherapy",
      subtitle: "Functional Movement & Balance",
      shortDesc: "Neuro-plasticity and gait training for stroke recovery, Parkinson's, and vestibular disorders.",
      duration: "60 mins",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
      category: "Neuro-Rehab"
    },
    {
      id: "post-surgical",
      title: "Post-Surgical Rehabilitation",
      subtitle: "Structured Protocol Care",
      shortDesc: "Safe phase-gated recovery following knee arthroscopy, hip replacement, and spinal fusion.",
      duration: "45 mins",
      price: "₹1,599",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      category: "Surgical Recovery"
    },
    {
      id: "geriatric",
      title: "Geriatric Physiotherapy",
      subtitle: "Mobility, Balance & Fall Prevention",
      shortDesc: "Gentle restorative therapy enhancing independence, bone density, and stability in seniors.",
      duration: "40 mins",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80",
      category: "Active Aging"
    },
    {
      id: "pediatric",
      title: "Pediatric Physiotherapy",
      subtitle: "Developmental & Motor Skills",
      shortDesc: "Play-informed rehabilitation for developmental delay, torticollis, and childhood gait challenges.",
      duration: "45 mins",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      category: "Pediatrics"
    },
    {
      id: "pain-management",
      title: "Pain Management Therapy",
      subtitle: "Non-Invasive Modality Care",
      shortDesc: "Dry needling, ultrasound, and TENS for fibromyalgia, chronic migraine, and myofascial pain.",
      duration: "45 mins",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      category: "Pain Relief"
    },
    {
      id: "manual-therapy",
      title: "Manual Therapy",
      subtitle: "Hands-on Joint & Tissue Mobilization",
      shortDesc: "Myofascial release, joint mobilizations, and soft tissue manipulation to restore joint mechanics.",
      duration: "40 mins",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      category: "Manual Treatment"
    },
    {
      id: "exercise-therapy",
      title: "Guided Therapeutic Exercise",
      subtitle: "Biomechanical Conditioning",
      shortDesc: "Individualized functional kinesiology and resistance coaching to safeguard long-term mobility.",
      duration: "45 mins",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
      category: "Kinesiology"
    }
  ],

  therapists: [
    {
      id: "t-1",
      name: "Dr. Elena Vance, DPT",
      role: "Lead Orthopedic Specialist",
      qualifications: "Doctor of Physical Therapy (DPT), OCS",
      experience: "12+ Years Clinical Practice",
      specialty: "Spine & Joint Replacement",
      photo: "assets/images/team/elena-vance.jpg",
      rating: "4.98",
      availability: "Mon – Thu"
    },
    {
      id: "t-2",
      name: "Dr. Marcus Chen, PT",
      role: "Sports Rehabilitation Director",
      qualifications: "MSc Sports Medicine, CSCS, PT",
      experience: "9+ Years Athletic Care",
      specialty: "Knee, ACL & Rotator Cuff",
      photo: "assets/images/team/marcus-chen.jpg",
      rating: "4.95",
      availability: "Tue – Sat"
    },
    {
      id: "t-3",
      name: "Dr. Priya Patel, MPT",
      role: "Senior Neuro-Physiotherapist",
      qualifications: "Master of Physiotherapy (Neuro), NCS",
      experience: "11+ Years Neurological Care",
      specialty: "Stroke Recovery & Vestibular",
      photo: "assets/images/team/priya-patel.jpg",
      rating: "4.99",
      availability: "Mon – Fri"
    },
    {
      id: "t-4",
      name: "Dr. Kimberly Adams, PT",
      role: "Pelvic Health & Geriatric Specialist",
      qualifications: "DPT, GCS, Women's Health Certified",
      experience: "8+ Years Practice",
      specialty: "Active Aging & Mobility Support",
      photo: "assets/images/team/kimberly-adams.jpg",
      rating: "4.94",
      availability: "Wed – Sun"
    }
  ],

  patients: [
    {
      id: "pat-101",
      name: "Pravin Kumar",
      email: "pravin.kumar@example.com",
      phone: "+91 98765 43210",
      dob: "1992-06-15",
      diagnosis: "Lumbar Disc Bulge (L4-L5) & Postural Strain",
      assignedTherapistId: "t-1",
      sessionsCompleted: 6,
      sessionsTotal: 10,
      recoveryScore: 78
    },
    {
      id: "pat-102",
      name: "Ananya Sharma",
      email: "ananya.sharma@example.com",
      phone: "+91 98111 22334",
      dob: "1988-11-20",
      diagnosis: "Post-Op ACL Reconstruction (Right Knee)",
      assignedTherapistId: "t-2",
      sessionsCompleted: 12,
      sessionsTotal: 16,
      recoveryScore: 88
    }
  ],

  session: {
    isLoggedIn: true,
    role: "patient",
    user: {
      id: "pat-101",
      name: "Pravin Kumar",
      email: "pravin.kumar@example.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
    }
  },

  appointments: [
    {
      id: "apt-201",
      patientName: "Pravin Kumar",
      patientEmail: "pravin.kumar@example.com",
      service: "Spine & Posture Care",
      therapist: "Dr. Elena Vance, DPT",
      date: "Tomorrow, 10:30 AM",
      type: "In-Person Clinic Visit",
      status: "Confirmed",
      notes: "Follow-up decompression check & core activation routine."
    },
    {
      id: "apt-202",
      patientName: "Pravin Kumar",
      patientEmail: "pravin.kumar@example.com",
      service: "Guided Therapeutic Exercise",
      therapist: "Dr. Marcus Chen, PT",
      date: "Nov 06, 2026, 04:00 PM",
      type: "In-Person Clinic Visit",
      status: "Scheduled",
      notes: "Mid-treatment lumbar stability progression."
    },
    {
      id: "apt-200",
      patientName: "Pravin Kumar",
      patientEmail: "pravin.kumar@example.com",
      service: "Orthopedic Initial Assessment",
      therapist: "Dr. Elena Vance, DPT",
      date: "Oct 24, 2026, 11:00 AM",
      type: "In-Person Clinic Visit",
      status: "Completed",
      notes: "Initial diagnostic ROM testing and baseline protocol design."
    }
  ],

  treatmentPlans: [
    {
      id: "tp-1",
      patientId: "pat-101",
      title: "Lumbar Stability & Spinal Mobility Protocol",
      stage: "Phase 2: Muscle Endurance & Functional Alignment",
      progressPercent: 78,
      goals: [
        "Reduce morning stiffness from 6/10 to under 2/10",
        "Achieve full lumbar flexion without radicular symptoms",
        "Restore 45-minute continuous ergonomic sitting tolerance"
      ]
    }
  ],

  exercises: [
    {
      id: "ex-1",
      name: "Bird-Dog Core Stabilization",
      reps: "3 sets × 10 reps per side",
      frequency: "Daily (Morning & Evening)",
      target: "Lumbar Multifidus & Gluteus Maximus",
      instructions: "Keep pelvis level with floor. Avoid arching the lower back.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ex-2",
      name: "Cat-Cow Segmental Spinal Mobilization",
      reps: "2 sets × 12 smooth cycles",
      frequency: "Daily",
      target: "Thoracic & Lumbar Mobility",
      instructions: "Inhale gently on drop, exhale smoothly as you round spine toward ceiling.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ex-3",
      name: "Glute Bridges with 3-Second Hold",
      reps: "3 sets × 12 reps",
      frequency: "Daily",
      target: "Posterior Chain Activation",
      instructions: "Drive through heels; do not hyper-extend lumbar vertebrae at top.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80"
    }
  ],

  reviews: [
    {
      id: "rev-1",
      patientName: "Rajesh S.",
      treatment: "Post-Op ACL Rehabilitation",
      stars: 5,
      review: "After my soccer injury, I couldn't walk without a limp. Dr. Marcus built a measurable, week-by-week return plan. Four months later, I'm back running pain-free.",
      date: "2 weeks ago"
    },
    {
      id: "rev-2",
      patientName: "Meera K.",
      treatment: "Chronic Cervical & Posture Care",
      stars: 5,
      review: "Years of desk work gave me constant headaches. The spinal decompression and posture retraining gave me relief in just three sessions. Outstanding clinic team.",
      date: "1 month ago"
    }
  ],

  blog: [
    {
      id: "post-1",
      title: "5 Evidence-Based Exercises to Relieve Lower Back Stiffness Fast",
      category: "Spine Health",
      readTime: "5 min read",
      date: "Oct 28, 2026",
      excerpt: "Discover simple, clinically verified movements you can perform at home to decompress lumbar discs and reduce morning stiffness.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "post-2",
      title: "When to Ice vs. When to Heat: A Physiotherapist's Direct Guide",
      category: "Injury Recovery",
      readTime: "4 min read",
      date: "Oct 22, 2026",
      excerpt: "Clearing up the confusion once and for all: understanding the inflammatory window and optimal temperature treatment for acute sprains.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    }
  ],

  notifications: [
    {
      id: "notif-1",
      title: "Appointment Tomorrow",
      message: "Reminder: Spine & Posture Care with Dr. Elena Vance tomorrow at 10:30 AM.",
      time: "2 hours ago",
      read: false
    },
    {
      id: "notif-2",
      title: "New Home Exercise Prescribed",
      message: "Dr. Elena added 'Glute Bridges with 3-Second Hold' to your daily routine.",
      time: "Yesterday",
      read: true
    }
  ]
};
