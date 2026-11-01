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
      fullDesc: "Orthopedic physiotherapy focuses on restoring structural alignment and painless mobility to bones, joints, ligaments, tendons, and surrounding myofascial tissues. Using manual joint mobilization combined with targeted neurological muscle retraining, we accelerate your body's natural regenerative timeline in private suites.",
      duration: "45–60 mins",
      price: "₹1,499",
      packagePrice: "₹3,999 (3 Sessions)",
      image: "assets/images/services/orthopedic-pathway.jpg",
      category: "Musculoskeletal",
      therapist: {
        name: "Dr. Marcus Chen",
        qualifications: "DPT, OCS",
        role: "Senior Orthopedic Specialist",
        photo: "assets/images/team/marcus-chen.jpg"
      },
      therapies: [
        { name: "Manual Joint Mobilization", desc: "Maitland & Mulligan oscillatory traction to restore synovial lubrication." },
        { name: "Myofascial Trigger Release", desc: "Targeted ischemic compression to break chronic muscle adhesions." },
        { name: "Biomechanical Range Mapping", desc: "Computerized movement analysis to pinpoint compensatory overload." },
        { name: "Kinetic Chain Retraining", desc: "Progressive neuromuscular facilitation to stabilize joints permanently." }
      ],
      conditions: [
        "Osteoarthritis & degenerative joint pain",
        "Post-fracture immobilization stiffness",
        "Rotator cuff & shoulder impingement",
        "Meniscus & ligament sprains (ACL/MCL)",
        "Tendonitis & bursitis flare-ups",
        "Hip & knee replacement recovery"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Acute Symptom Relief & Pain Calming",
          goal: "Reduce joint pressure and alleviate nerve irritation.",
          desc: "Hands-on oscillatory decompression, gentle joint traction, and cryo-thermal regulation delivered in private suites to calm acute pain without aggressive force."
        },
        {
          num: "02",
          title: "Restoration of Range of Motion (ROM)",
          goal: "Restore symmetrical articulation and tissue elasticity.",
          desc: "Passive and active-assisted joint mobilizations targeted at capsular stiffness, combined with soft tissue lengthening to restore fluid gliding mechanics."
        },
        {
          num: "03",
          title: "Functional Load & Kinetic Reconditioning",
          goal: "Reinforce stabilizing muscle groups and guard against re-injury.",
          desc: "Progressive closed-kinetic resistance drills, eccentric loading, and posture coaching tailored to your daily movement demands and sports."
        }
      ]
    },
    {
      id: "sports",
      title: "Sports Physiotherapy",
      subtitle: "Athletic Injury & Return-to-Sport",
      shortDesc: "Targeted recovery for ACL sprains, rotator cuff tears, shin splints, and athletic conditioning.",
      fullDesc: "High-performance sports rehabilitation designed for athletes and active individuals recovering from acute trauma, ligament sprains, muscle strains, or surgical reconstruction. Our phase-gated protocols focus on restoring explosive power, tissue resilience, and neuromuscular control.",
      duration: "45–60 mins",
      price: "₹1,799",
      packagePrice: "₹4,799 (3 Sessions)",
      image: "assets/images/services/sports-pathway.jpg",
      category: "Sports Performance",
      therapist: {
        name: "Dr. Elena Vance",
        qualifications: "PT, DPT, SCS",
        role: "Sports Rehabilitation Director",
        photo: "assets/images/team/elena-vance.jpg"
      },
      therapies: [
        { name: "Dynamic Kinetic Band Therapy", desc: "Progressive elastic resistance drills for multi-planar joint control." },
        { name: "Instrument-Assisted Soft Tissue (IASTM)", desc: "Micro-vascular remodeling to accelerate tendon healing." },
        { name: "High-Speed Agility & Deceleration Drills", desc: "Eccentric landing mechanics to prevent ACL/ankle re-injury." },
        { name: "Functional Movement Screening (FMS)", desc: "Diagnostic athletic benchmarking before competitive clearance." }
      ],
      conditions: [
        "ACL, PCL & MCL knee ligament sprains",
        "Rotator cuff tears & throwing shoulder fatigue",
        "Hamstring & groin muscle strain tears",
        "Shin splints & plantar fasciitis",
        "Ankle inversion sprains & Achilles tendonitis",
        "Post-arthroscopy return-to-sport testing"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Acute Phase: Inflammation & Swelling Control",
          goal: "Halt muscle inhibition and protect healing ligament fibers.",
          desc: "Targeted therapeutic ultrasound, compression protocols, and protected sub-maximal isometric activation to preserve baseline muscle tone."
        },
        {
          num: "02",
          title: "Sub-Acute Phase: Dynamic Kinetic Loading",
          goal: "Rebuild tendon tensile capacity and joint stability.",
          desc: "Progressive closed-chain resistance exercises with elastic bands and free weights to remodel collagen fibers along lines of functional stress."
        },
        {
          num: "03",
          title: "Return-to-Play: Agility & Deceleration Testing",
          goal: "100% limb symmetry and psychological confidence in competition.",
          desc: "Multi-directional cutting drills, plyometric force absorption, and sport-specific simulations before granting full competitive clearance."
        }
      ]
    },
    {
      id: "spine-posture",
      title: "Spine & Posture Care",
      subtitle: "Back, Neck & Ergonomics",
      shortDesc: "Decompression therapy and postural retraining for herniated discs, sciatica, and chronic neck tension.",
      fullDesc: "Non-surgical, doctoral-guided spinal rehabilitation addressing vertebral compression, disc displacement, pinched nerve roots, and postural fatigue. We combine targeted manual decompression with core neuromuscular retraining.",
      duration: "40–50 mins",
      price: "₹1,499",
      packagePrice: "₹3,999 (3 Sessions)",
      image: "assets/images/services/spine-pathway.jpg",
      category: "Spine Health",
      therapist: {
        name: "Dr. Kimberly Adams",
        qualifications: "DPT, Cert. SMT",
        role: "Spine & Posture Specialist",
        photo: "assets/images/team/kimberly-adams.jpg"
      },
      therapies: [
        { name: "Non-Surgical Axial Decompression", desc: "Negative intra-discal pressure to relieve pinched spinal nerves." },
        { name: "McKenzie Method Mechanical Diagnosis", desc: "Directional preference exercises to centralize radiating pain." },
        { name: "Deep Core Stabilization (Transverse Abdominis)", desc: "Neuromuscular bracing to support the lumbar spine naturally." },
        { name: "Ergonomic & Workspace Alignment Coaching", desc: "Postural correction for desk workers to eliminate tech-neck." }
      ],
      conditions: [
        "Herniated & bulging lumbar/cervical discs",
        "Sciatica & radiating leg numbness",
        "Chronic postural tech-neck syndrome",
        "Spinal stenosis & degenerative disc disease",
        "Facet joint arthropathy & lumbar spasms",
        "Scoliosis & thoracic stiffness"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "3D Spinal Alignment & Nerve Root Mapping",
          goal: "Locate vertebral compression and calm nerve inflammation.",
          desc: "Detailed mechanical screening to identify direction of disc bulge and decompress nerve roots through gentle positional traction."
        },
        {
          num: "02",
          title: "Targeted Axial Decompression & Manual Traction",
          goal: "Create negative intra-discal vacuum and rehydrate discs.",
          desc: "Therapist-assisted axial elongation that takes continuous gravitational load off compressed vertebral segments in private suites."
        },
        {
          num: "03",
          title: "Deep Core Stabilization & Ergonomic Re-education",
          goal: "Build an internal muscular corset to prevent relapse.",
          desc: "Progressive activation of transverse abdominis, multifidus, and pelvic floor muscles combined with real-world postural habit coaching."
        }
      ]
    },
    {
      id: "neurological",
      title: "Neurological Physiotherapy",
      subtitle: "Functional Movement & Balance",
      shortDesc: "Neuro-plasticity and gait training for stroke recovery, Parkinson's, and vestibular disorders.",
      fullDesc: "Specialized neurological rehabilitation leveraging neuro-plasticity to restore functional motor control, gait coordination, and balance. Guided in safety harness suites and parallel bars with dedicated one-on-one doctoral oversight.",
      duration: "60 mins",
      price: "₹1,999",
      packagePrice: "₹5,299 (3 Sessions)",
      image: "assets/images/services/neuro-pathway.jpg",
      category: "Neuro-Rehab",
      therapist: {
        name: "Dr. Priya Patel",
        qualifications: "PT, MPT (Neuro), NCS",
        role: "Lead Neurological Specialist",
        photo: "assets/images/team/priya-patel.jpg"
      },
      therapies: [
        { name: "Parallel-Bar Gait & Stride Retraining", desc: "Supported weight-bearing drills to rewire natural walking rhythm." },
        { name: "Vestibular Ocular Retraining", desc: "Targeted head-eye coordination to eliminate dizziness and vertigo." },
        { name: "Proprioceptive Balance Retraining", desc: "Dynamic perturbation drills to restore center-of-gravity control." },
        { name: "Task-Oriented Motor Learning", desc: "Repetitive daily functional tasks to stimulate cortical neuro-plasticity." }
      ],
      conditions: [
        "Post-stroke hemiparesis & gait impairment",
        "Parkinson's disease balance & rigidity management",
        "Vestibular neuritis & benign paroxysmal positional vertigo (BPPV)",
        "Multiple sclerosis mobility maintenance",
        "Neuropathy & loss of foot sensation",
        "Senior balance instability & frequent fall risks"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Vestibular & Dynamic Balance Assessment",
          goal: "Assess sensory integration, sway velocity, and fall risk.",
          desc: "Comprehensive diagnostic screening of visual, vestibular, and somatosensory inputs to identify exact neurological deficits."
        },
        {
          num: "02",
          title: "Parallel-Bar Gait & Harness-Assisted Training",
          goal: "Stimulate neuro-plastic motor pathways safely.",
          desc: "Guided weight shifts, rhythmic stepping, and symmetrical weight-bearing under body-weight support harness to restore gait symmetry."
        },
        {
          num: "03",
          title: "Real-World Independence & Fall Prevention",
          goal: "Restore confidence in everyday home and community navigation.",
          desc: "Obstacle avoidance drills, stair negotiation, and rapid sit-to-stand endurance coaching to ensure safe, unassisted daily living."
        }
      ]
    },
    {
      id: "post-surgical",
      title: "Post-Surgical Rehabilitation",
      subtitle: "Structured Protocol Care",
      shortDesc: "Safe phase-gated recovery following knee arthroscopy, hip replacement, and spinal fusion.",
      fullDesc: "Surgeon-coordinated rehabilitation following orthopedic surgery. We strictly follow phase-gated milestones to protect graft integrity, prevent scar contractures, and restore joint mechanics safely.",
      duration: "45 mins",
      price: "₹1,599",
      packagePrice: "₹4,199 (3 Sessions)",
      image: "assets/images/packages/standard-recovery.jpg",
      category: "Surgical Recovery",
      therapist: {
        name: "Dr. Marcus Chen",
        qualifications: "DPT, OCS",
        role: "Senior Orthopedic Specialist",
        photo: "assets/images/team/marcus-chen.jpg"
      },
      therapies: [
        { name: "Lymphatic Scar Mobilization", desc: "Gentle manual techniques to prevent surgical adhesions and fluid pooling." },
        { name: "Passive Range of Motion (PROM)", desc: "Controlled mobilization to regain joint angle without surgical stress." },
        { name: "Isometric Muscle Activation", desc: "Sub-maximal firing to prevent disuse atrophy during early healing." },
        { name: "Gait Retraining & Crutch Weaning", desc: "Transition from assistive devices to independent symmetrical gait." }
      ],
      conditions: [
        "Total knee & hip replacement (TKR / THR)",
        "ACL & rotator cuff tendon repairs",
        "Lumbar spinal decompression & fusion",
        "Meniscus repair & micro-fracture surgery",
        "Achilles tendon rupture repairs",
        "Post-arthroscopic debridement recovery"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Protection & Scar Healing (Weeks 1–3)",
          goal: "Manage post-op swelling and protect surgical repair.",
          desc: "Cryo-compression, lymphatic drainage, and passive gentle range drills respecting surgical load limits."
        },
        {
          num: "02",
          title: "Progressive Range & Muscle Awakening (Weeks 4–8)",
          goal: "Reclaim full extension/flexion and reactivate inhibited stabilizers.",
          desc: "Active-assisted range exercises, hydro-collator therapy, and guided isometric contraction drills."
        },
        {
          num: "03",
          title: "Kinetic Strengthening & Independence (Weeks 9+)",
          goal: "Full weight-bearing tolerance and return to unassisted activity.",
          desc: "Resistance training, functional squats, stair climb retraining, and daily task simulations."
        }
      ]
    },
    {
      id: "geriatric",
      title: "Geriatric Physiotherapy",
      subtitle: "Mobility, Balance & Fall Prevention",
      shortDesc: "Gentle restorative therapy enhancing independence, bone density, and stability in seniors.",
      fullDesc: "Compassionate, gentle rehabilitation tailored specifically for seniors. We focus on preserving joint mobility, strengthening postural stabilizers, improving bone density, and reducing fall risks.",
      duration: "40 mins",
      price: "₹1,299",
      packagePrice: "₹3,499 (3 Sessions)",
      image: "assets/images/about/principle-independence.jpg",
      category: "Active Aging",
      therapist: {
        name: "Dr. Priya Patel",
        qualifications: "PT, GCS",
        role: "Senior Geriatric & Neuro Specialist",
        photo: "assets/images/team/priya-patel.jpg"
      },
      therapies: [
        { name: "Gentle Low-Impact Joint Mobilization", desc: "Comfortable oscillatory traction to relieve arthritic stiffness." },
        { name: "Balance & Proprioceptive Retraining", desc: "Static and dynamic foot-placement drills to prevent slips." },
        { name: "Sit-to-Stand Functional Retraining", desc: "Quadriceps and gluteal activation to maintain unassisted transfers." },
        { name: "Home Safety & Ergonomic Assessment", desc: "Guidance on avoiding hazards and maximizing mobility at home." }
      ],
      conditions: [
        "Age-related osteoarthritis & joint stiffness",
        "Osteoporosis & osteopenia bone health",
        "Balance disorders & fear of falling",
        "Post-hospitalization general deconditioning",
        "Generalized muscle weakness & frailty",
        "Post-fall mobility restoration"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Comprehensive Fall-Risk & Mobility Assessment",
          goal: "Identify balance vulnerabilities and joint restrictions.",
          desc: "Timed Up-and-Go (TUG) testing, 30-second chair stand, and joint range evaluations."
        },
        {
          num: "02",
          title: "Gentle Pain Relief & Balance Recalibration",
          goal: "Relieve chronic aching and restore confident foot placement.",
          desc: "Hands-on myofascial easing, ankle stability drills, and supported weight-shifting exercises."
        },
        {
          num: "03",
          title: "Everyday Functional Strength & Endurance",
          goal: "Independent walking and unassisted daily transfers.",
          desc: "Progressive sit-to-stand drills, light resistance bands, and stair negotiation practice."
        }
      ]
    },
    {
      id: "pediatric",
      title: "Pediatric Physiotherapy",
      subtitle: "Developmental & Motor Skills",
      shortDesc: "Play-informed rehabilitation for developmental delay, torticollis, and childhood gait challenges.",
      fullDesc: "Child-centered physiotherapy integrating clinical exercises into playful, engaging activities. We support infants, children, and teenagers in reaching developmental milestones and regaining comfortable mobility.",
      duration: "45 mins",
      price: "₹1,499",
      packagePrice: "₹3,999 (3 Sessions)",
      image: "assets/images/about/principle-progress.jpg",
      category: "Pediatrics",
      therapist: {
        name: "Dr. Kimberly Adams",
        qualifications: "DPT, PCS",
        role: "Pediatric Clinical Specialist",
        photo: "assets/images/team/kimberly-adams.jpg"
      },
      therapies: [
        { name: "Play-Informed Motor Retraining", desc: "Games and dynamic activities to stimulate developmental milestones." },
        { name: "Gentle Torticollis Stretching", desc: "Soft-tissue lengthening to correct infant head-tilt and neck tightness." },
        { name: "Pediatric Gait Correction", desc: "Retraining toe-walking, in-toeing, and foot arch alignment." },
        { name: "Parent & Caregiver Home Coaching", desc: "Practical guidance for tummy time and supportive positioning at home." }
      ],
      conditions: [
        "Infant congenital muscular torticollis & plagiocephaly",
        "Gross motor developmental delays",
        "Idiopathic toe-walking & in-toeing gait",
        "Childhood sports injuries & growth plate strains",
        "Hypermobility & coordination difficulties",
        "Juvenile arthritis & postural habits"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Fun Developmental & Postural Screening",
          goal: "Build child rapport while diagnosing motor patterns.",
          desc: "Playful assessment of muscle tone, milestone achievement, and joint flexibility."
        },
        {
          num: "02",
          title: "Interactive Movement & Alignment Therapy",
          goal: "Encourage natural symmetrical motor firing.",
          desc: "Therapy balls, obstacle tunnels, and balance cushions to build coordination joyfully."
        },
        {
          num: "03",
          title: "Family Integration & Milestone Mastery",
          goal: "Consistent developmental progression at home and school.",
          desc: "Empowering parents with simple daily play routines and supportive ergonomic strategies."
        }
      ]
    },
    {
      id: "pain-management",
      title: "Pain Management Therapy",
      subtitle: "Non-Invasive Modality Care",
      shortDesc: "Dry needling, ultrasound, and TENS for fibromyalgia, chronic migraine, and myofascial pain.",
      fullDesc: "Multi-modal physical therapy targeting chronic intractable pain syndromes. We deactivate myofascial trigger points, calm sensitized central nervous systems, and restore movement confidence without reliance on painkillers.",
      duration: "45 mins",
      price: "₹1,499",
      packagePrice: "₹3,999 (3 Sessions)",
      image: "assets/images/clinic/private-treatment-suite.jpg",
      category: "Pain Relief",
      therapist: {
        name: "Dr. Elena Vance",
        qualifications: "DPT, OCS",
        role: "Lead Pain & Orthopedic Specialist",
        photo: "assets/images/team/elena-vance.jpg"
      },
      therapies: [
        { name: "Therapeutic Neuromuscular Ultrasound", desc: "Deep acoustic micro-vibrations to accelerate cellular repair." },
        { name: "TENS & Interferential Therapy", desc: "Pain-gating electrical stimulation to break chronic pain loops." },
        { name: "Deep Myofascial Trigger Deactivation", desc: "Hands-on sustained pressure to extinguish hyper-irritable taut bands." },
        { name: "Pain Neuroscience Education", desc: "De-sensitizing the central nervous system through evidence-based movement." }
      ],
      conditions: [
        "Fibromyalgia & widespread muscular aches",
        "Chronic tension headaches & cervical migraines",
        "Myofascial pain syndrome & trigger points",
        "Chronic lower back & pelvic floor aching",
        "Post-herpetic neuralgia & nerve hypersensitivity",
        "Complex regional pain syndrome (CRPS) stage 1"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Pain Mapping & Nervous System Desensitization",
          goal: "Lower resting pain scores and calm central sensitization.",
          desc: "Identifying trigger points, applying soothing modalities, and gentle breathing-synchronized movement."
        },
        {
          num: "02",
          title: "Myofascial Release & Deep Tissue Decompression",
          goal: "Eradicate stubborn muscle knots and restore blood flow.",
          desc: "Targeted ischemic compression, passive stretching, and soft tissue release in quiet private suites."
        },
        {
          num: "03",
          title: "Graded Active Movement & Lifestyle Conditioning",
          goal: "Restore fear-free movement and long-term vitality.",
          desc: "Gradual exposure to active loading, postural endurance, and self-management pain relief techniques."
        }
      ]
    },
    {
      id: "manual-therapy",
      title: "Manual Therapy",
      subtitle: "Hands-on Joint & Tissue Mobilization",
      shortDesc: "Myofascial release, joint mobilizations, and soft tissue manipulation to restore joint mechanics.",
      fullDesc: "Dedicated hands-on manual physical therapy. Every session is 100% practitioner-delivered, focusing on restoring restricted articular glide, loosening bound fascia, and correcting structural asymmetries.",
      duration: "40 mins",
      price: "₹1,499",
      packagePrice: "₹3,999 (3 Sessions)",
      image: "assets/images/packages/basic-assessment.jpg",
      category: "Manual Treatment",
      therapist: {
        name: "Dr. Marcus Chen",
        qualifications: "DPT, OCS, FAAOMPT",
        role: "Senior Orthopedic & Manual Specialist",
        photo: "assets/images/team/marcus-chen.jpg"
      },
      therapies: [
        { name: "High-Grade Joint Oscillations", desc: "Grade III & IV Maitland mobilizations to break joint capsular adhesions." },
        { name: "Mulligan Mobilization with Movement (MWM)", desc: "Painless joint repositioning during active movement." },
        { name: "Sub-Occipital & Spinal Decompression", desc: "Gentle cervical release to eliminate tension and headache triggers." },
        { name: "Active Release Technique (ART)", desc: "Tension-plus-motion soft tissue remodeling for bound muscles." }
      ],
      conditions: [
        "Acute neck & back facet lock",
        "Sacroiliac (SI) joint dysfunction",
        "Adhesive capsulitis (frozen shoulder)",
        "Rib subluxation & thoracic restriction",
        "Chronic muscle knots & postural stiffness",
        "Temporomandibular joint (TMJ) jaw pain"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Articular & Fascial Restriction Scan",
          goal: "Detect micro-gliding deficits in joints and muscle layers.",
          desc: "Detailed palpatory and dynamic joint-play evaluation on the treatment couch."
        },
        {
          num: "02",
          title: "100% Hands-On Mobilization & Decompression",
          goal: "Immediate reduction in stiffness and pain-free range gain.",
          desc: "Targeted oscillatory mobilization, manual traction, and deep myofascial release delivered exclusively by hand."
        },
        {
          num: "03",
          title: "Immediate Neuromuscular Integration",
          goal: "Lock in newly gained range through active stabilization.",
          desc: "Guided active movements at the newly restored barrier to retrain brain-muscle motor pathways."
        }
      ]
    },
    {
      id: "exercise-therapy",
      title: "Guided Therapeutic Exercise",
      subtitle: "Biomechanical Conditioning",
      shortDesc: "Individualized functional kinesiology and resistance coaching to safeguard long-term mobility.",
      fullDesc: "One-on-one guided kinesiology tailored to your specific biomechanical weaknesses. We instruct proper movement mechanics, eliminate dangerous compensation habits, and build lifelong strength.",
      duration: "45 mins",
      price: "₹1,299",
      packagePrice: "₹3,499 (3 Sessions)",
      image: "assets/images/about/hero-consultation.jpg",
      category: "Kinesiology",
      therapist: {
        name: "Dr. Elena Vance",
        qualifications: "PT, DPT, CSCS",
        role: "Sports & Kinesiology Director",
        photo: "assets/images/team/elena-vance.jpg"
      },
      therapies: [
        { name: "Functional Movement Screening (FMS)", desc: "Systematic screening of asymmetry, stability, and mobility." },
        { name: "Progressive Kinetic Chain Loading", desc: "Scientific overload principles to safely build muscle power." },
        { name: "Neuromuscular Proprioception Drills", desc: "Balance boards and unstable surface conditioning for joint reflexes." },
        { name: "Digital Home Exercise Portal Videos", desc: "HD video prescription accessible 24/7 on your patient portal." }
      ],
      conditions: [
        "Postural deconditioning & muscle imbalances",
        "Core weakness & chronic low back vulnerability",
        "Athletic return reconditioning",
        "Joint hypermobility & poor motor control",
        "Scapular dyskinesis & poor shoulder posture",
        "General functional mobility deficits"
      ],
      protocolSteps: [
        {
          num: "01",
          title: "Biomechanical Movement Analysis",
          goal: "Identify compensatory muscle firings and kinetic leaks.",
          desc: "Filmed movement screening evaluating squat, lunge, hinge, push, and pull mechanics."
        },
        {
          num: "02",
          title: "Supervised 1-on-1 Corrective Retraining",
          goal: "Reinforce correct movement patterns with real-time feedback.",
          desc: "Doctor-guided exercise execution with tactile cues to ensure perfect joint alignment."
        },
        {
          num: "03",
          title: "Progressive Overload & Home Independence",
          goal: "Ensure sustainable strength and resilience for everyday life.",
          desc: "Graduated resistance progressions and custom digital video routines for home continuation."
        }
      ]
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
