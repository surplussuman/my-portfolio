// Portfolio Data - All content from Final_Portfolio.md
import {
  Code2, Database, Brain, Cloud, Server, Cpu, Target, Users, TrendingUp,
  CheckCircle2, Globe, BookOpen, Trophy, Building2, Calendar, Star,
  BarChart3, Activity, Shield, Zap, FileText, Award, GraduationCap, Rocket
} from 'lucide-react';

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Impact', href: '#impact' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Education', href: '#education' },
  { name: 'Awards', href: '#awards' },
  { name: 'Contact', href: '#contact' },
];

export const impactMetrics = [
  { icon: Users, label: "Active Users", value: "15,000+", color: "from-blue-500 to-cyan-500" },
  { icon: Building2, label: "Deployment Centers", value: "160+", color: "from-purple-500 to-pink-500" },
  { icon: Activity, label: "Concurrent Users", value: "5,000+", color: "from-green-500 to-emerald-500" },
  { icon: Shield, label: "System Uptime", value: "99.7%", color: "from-orange-500 to-red-500" },
  { icon: TrendingUp, label: "Time Savings", value: "90%", color: "from-indigo-500 to-purple-500" },
  { icon: BarChart3, label: "Cost Reduction", value: "98.3%", color: "from-pink-500 to-rose-500" },
  { icon: CheckCircle2, label: "OCR Accuracy", value: "98.7%", color: "from-teal-500 to-cyan-500" },
  { icon: Rocket, label: "Scalability", value: "50x", color: "from-violet-500 to-purple-500" },
];

export const allProjects = [
  {
    id: 1,
    title: "AI-Powered Video Translation Platform",
    role: "ML Engineer & Technical Lead",
    impact: "50,000+ students • 12+ institutions",
    challenge: "Educational institutions needed to translate English video lectures into 10+ Indian languages to reach non-English speaking students—but professional translation services cost $5,600 per hour of video and took weeks.",
    solution: "Built an end-to-end automated video translation pipeline that extracts speech using WhisperAI (98.3% accuracy), translates using hybrid NLLB-200 + GPT-4o architecture, clones voice with real-time lip-sync using Wav2Lip, and generates subtitles in 10+ languages simultaneously.",
    metrics: [
      "98.3% cost reduction ($5,600 → $96 per video hour)",
      "99% faster processing (3 weeks → 4 hours)",
      "0.847 BLEU score (24.6% better than baseline)",
      "10+ languages supported simultaneously",
      "12+ educational institutions using the platform",
      "500+ videos translated to date (growing 100/month)",
      "50,000+ students accessing content in native language"
    ],
    tech: ["WhisperAI Large-v3", "NLLB-200", "GPT-4o", "Wav2Lip", "FFmpeg", "Redis", "Celery", "Async Workers"],
    color: "from-violet-500 to-purple-500",
    icon: Globe,
    highlights: [
      "Hybrid Translation Architecture: NLLB-200 (85% content) + GPT-4o (15% complex sentences) = 23.6% better BLEU, 85% cheaper",
      "Parallel Processing: Handles 10 languages simultaneously using async workers",
      "Voice Cloning: Wav2Lip generates lip-synced video matching translated audio with emotional tone preservation",
      "Frame-by-frame processing at 24 FPS for smooth output"
    ]
  },
  {
    id: 3,
    title: "Smart Exam Evaluation System",
    role: "Computer Vision Lead & System Architect",
    impact: "160+ centers • 600,000+ answer sheets",
    challenge: "160+ examination centers across India conduct monthly exams with 50,000 answer sheets—manual evaluation takes 12-15 days and has 5-8% error rate due to human fatigue.",
    solution: "Built a hybrid OMR/OCR evaluation system that scans answer sheets at 300 DPI (batch processing), auto-detects OMR bubbles and handwritten answers, evaluates objectively using rule-based + LLM scoring, and generates instant results with detailed student reports.",
    metrics: [
      "98.7% accuracy (vs 92-95% human)",
      "90% time reduction (15 days → 18 hours)",
      "93.8% cost savings ($45K → $2.8K per cycle)",
      "5,000 concurrent sheets processed simultaneously",
      "160+ centers processing exams monthly",
      "600,000+ answer sheets evaluated in 8 months",
      "Zero downtime during peak exam seasons"
    ],
    tech: ["OpenCV", "YOLOv8", "PaddleOCR", "Tesseract", "GPT-4o", "Celery", "Redis", "PostgreSQL", "Docker"],
    color: "from-indigo-500 to-blue-500",
    icon: FileText,
    highlights: [
      "Hybrid Detection Pipeline: Preprocessing (deskew, denoise) → OMR Detection (98.9% accuracy) → Handwriting OCR (94.2%) → Answer Validation",
      "Scalability: Distributed workers (Celery) across 8 GPU servers with Redis caching reducing DB load by 80%",
      "Quality Assurance: Double-check mode for 40-60% scores, human-in-the-loop for 3% flagged responses",
      "Autoscaling from 2 to 10 worker nodes based on queue depth"
    ]
  },
  {
    id: 4,
    title: "Cloud Coding Platform",
    role: "Technical Lead & Infrastructure Architect",
    impact: "2,500+ students • 100+ contests",
    challenge: "Existing coding platform supported only 100 concurrent users—during peak hours (exams, hackathons), 80% of users faced timeouts and the system crashed frequently.",
    solution: "Re-engineered the platform from scratch with Monaco Editor (VSCode's core) for browser-based coding, Docker containers for secure isolated code execution, WebSocket architecture for real-time collaboration, and horizontal scaling to handle massive concurrency.",
    metrics: [
      "50x capacity increase (100 → 5,000+ users)",
      "95.7% faster response (4.2s → 180ms p95)",
      "99.8% uptime SLA",
      "58.5% cost reduction despite 50x scale",
      "2,500+ students using platform for assignments",
      "100+ coding contests hosted (no crashes)",
      "20 programming languages supported"
    ],
    tech: ["Monaco Editor", "Docker", "FastAPI", "WebSockets", "Gunicorn", "Nginx", "Redis", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
    icon: Code2,
    highlights: [
      "Container Orchestration: Load balancer → FastAPI → Docker container (20 languages, 2s timeout, 512MB RAM) → Real-time output → Cleanup",
      "Scalability: Gunicorn workers optimized to 2x CPU cores + 1, Connection pooling reducing DB overhead by 70%",
      "Security: Sandboxed execution, resource limits, input validation, rate limiting (10 submissions/min)",
      "Real-time leaderboards during competitions"
    ]
  },
  {
    id: 10,
    title: "AI Interview Platform",
    role: "Lead AI Architect",
    impact: "12,000+ candidates • 45 companies",
    challenge: "Companies needed to conduct 500+ technical interviews daily—human interviewers could handle only 8-10/day, creating massive bottlenecks during hiring seasons.",
    solution: "Built an AI-powered interview automation platform that analyzes resumes using RAG (extracting skills, experience), generates dynamic questions based on candidate profile, evaluates answers using multi-dimensional LLM scoring, provides personalized learning paths using agentic AI (LangGraph), and proctors exams with facial recognition + tab-switching detection.",
    metrics: [
      "50-60x capacity (10 → 500+ interviews/day)",
      "98.5% cost savings ($80 → $1.20 per interview)",
      "75% faster time-to-hire (3-4 weeks → 5-7 days)",
      "92% correlation with human interviewer scores",
      "12,000+ candidates evaluated in 6 months",
      "45 companies using the platform",
      "88% candidate engagement with learning materials"
    ],
    tech: ["LangGraph", "Pinecone", "GPT-4o", "RAG", "OpenAI Ada-002", "RetinaFace", "Django REST", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500",
    icon: Users,
    highlights: [
      "RAG Pipeline: Resume PDF → Text extraction → Chunking (512 tokens) → Embeddings → Pinecone → Skills extraction → ATS scoring",
      "Dynamic Question Generation: GPT-4o creates role-specific questions with difficulty calibration based on previous answers",
      "Multi-Dimensional Scoring: Technical Accuracy (40%) + Problem-Solving (30%) + Communication (15%) + Code Quality (10%) + Time (5%)",
      "Agentic AI: LangGraph multi-agent system (Skill Gap + Resource + Timeline + Motivation agents) creates 30/60/90-day improvement roadmaps",
      "Proctoring: Facial recognition (98.2% accuracy), tab switching detection, audio analysis"
    ]
  },
  {
    id: 2,
    title: "Intelligent Document Analysis System",
    role: "System Architect & ML Engineer",
    impact: "150,000+ documents • 8 universities",
    challenge: "Universities receive 10,000+ application documents (transcripts, certificates, resumes) annually—manual verification takes 2 weeks and misses 8-12% of fraudulent documents.",
    solution: "Built an AI-powered document verification system that extracts text from scanned PDFs using PaddleOCR (multi-script support), verifies authenticity using visual anomaly detection, summarizes content using GPT-4o with structured extraction, and flags inconsistencies automatically for human review.",
    metrics: [
      "140x throughput (500 docs/week → 10K docs/day)",
      "96.8% fraud detection (+10% vs manual)",
      "93% faster verification (2 weeks → 3 hours)",
      "98.75% cost savings ($12 → $0.15/doc)",
      "8 universities across South India using the system",
      "150,000+ documents processed in first 6 months",
      "24/7 automated processing"
    ],
    tech: ["PaddleOCR", "Tesseract", "ChromaDB", "GPT-4o", "Siamese NN", "OpenCV", "RAG", "Django", "PostgreSQL"],
    color: "from-pink-500 to-rose-500",
    icon: Shield,
    highlights: [
      "Multi-Modal OCR: PaddleOCR for Hindi/Tamil/Telugu/Bengali, Tesseract fallback for English, 98.4% character accuracy",
      "RAG Summarization: Documents → Chunking (512 tokens) → OpenAI Ada-002 embeddings → ChromaDB → GPT-4o → Structured JSON output",
      "Anomaly Detection: Detects fake signatures using Siamese neural networks, identifies tampering via pixel-level analysis (96.8% precision, 2.1% false positives)",
      "Audit trail for compliance and legal requirements"
    ]
  },
  {
    id: 8,
    title: "AI Copyright Detection Engine",
    role: "NLP Engineer",
    impact: "1,000+ videos processed daily",
    challenge: "Video platforms needed to detect copyrighted music/speech in user-uploaded videos—manual review was impossible at scale, automated tools had high false positives (flagging fair use).",
    solution: "Built a context-aware copyright detection system that extracts audio from videos using FFmpeg, matches copyrighted content using fingerprinting + semantic analysis, analyzes fair use using LLM reasoning (LLAMA 3 + Mixtral), and flags violations with confidence scores.",
    metrics: [
      "94.7% precision (vs 76.4% baseline)",
      "3.2% false positive rate (vs 15-20% industry)",
      "96% faster processing (12h → 45min for 1K videos)",
      "88.3% agreement with human legal reviewers",
      "1,000 videos processed in 45 minutes (parallelized)",
      "Real-time API for live streaming (<500ms latency)"
    ],
    tech: ["SBERT", "Llama 3.1 70B", "Mixtral 8x7B", "Gemini Pro", "FFmpeg", "WhisperAI", "Acoustic Hashing"],
    color: "from-cyan-500 to-teal-500",
    icon: Shield,
    highlights: [
      "Multi-Stage Pipeline: Video → Audio extraction → Fingerprinting → Database matching (500K+ tracks) → Transcript (WhisperAI) → Semantic analysis → LLM fair use reasoning",
      "LLM Ensemble: LLAMA 3.1 70B analyzes usage context (educational, commentary, parody), Mixtral 8x7B provides second opinion, Gemini Pro handles edge cases",
      "Performance: 1,000 videos in 45 minutes with parallelized workers"
    ]
  },
  {
    id: 7,
    title: "Word-to-Database Extraction Pipeline",
    role: "Data Engineer & NLP Specialist",
    impact: "500,000+ questions digitized",
    challenge: "Educational publishers had 500,000+ questions locked in Word documents—needed to digitize into searchable database for online exam platform.",
    solution: "Built an intelligent extraction pipeline that parses Word docs preserving formatting/equations/images, deduplicates questions using semantic similarity (99%+ accuracy), categorizes automatically (difficulty, topic, question type), and structures data for database insertion.",
    metrics: [
      "50x throughput (1K/week → 50K/week)",
      "99.1% duplicate detection precision",
      "98.2% accuracy (vs 88% manual)",
      "79% faster completion (12 months → 2.5 months)",
      "500,000+ questions processed and validated",
      "8,000+ duplicate clusters identified and merged"
    ],
    tech: ["Sentence-BERT", "SimHash", "Llama 3", "python-docx", "PostgreSQL", "Elasticsearch", "Zero-shot Classification"],
    color: "from-green-500 to-emerald-500",
    icon: Database,
    highlights: [
      "Semantic Deduplication: Question → Sentence-BERT embedding (768 dimensions) → SimHash fuzzy matching (O(1) lookup) → Cosine similarity threshold 0.92",
      "Intelligent Classification: Difficulty scoring using readability metrics + LLM analysis, Topic tagging with zero-shot classification, Question type detection (MCQ, True/False, Descriptive, Numerical), Bloom's taxonomy mapping",
      "Metadata enrichment (marks, time, reference material) with full-text search"
    ]
  },
  {
    id: 9,
    title: "AI Campus Automation System (AICAS)",
    role: "Full-Stack Lead & System Architect",
    impact: "12,000+ students • 6 institutions",
    challenge: "Managing a university involves hundreds of daily administrative tasks—document verification, smart suggestions, multi-role permissions—all manual and error-prone.",
    solution: "Built a comprehensive campus management platform with role-based dashboards (Admin, Faculty, Student, Parent), AI document verification (certificates, fee receipts, ID proofs), smart suggestions (LLM-powered recommendations for courses, clubs), and real-time notifications (attendance, grades, announcements).",
    metrics: [
      "80% administrative workload reduction (40h/week → 8h/week)",
      "99.2% data accuracy (vs 87% manual)",
      "34% student satisfaction improvement (68% → 91%)",
      "99.5% faster document verification (3-5 days → instant)",
      "6 institutions using AICAS",
      "12,000+ students managed on the platform",
      "500+ faculty members with daily active usage"
    ],
    tech: ["Django REST", "React", "TypeScript", "PaddleOCR", "PostgreSQL", "Redis", "Docker", "JWT", "Collaborative Filtering"],
    color: "from-orange-500 to-red-500",
    icon: Building2,
    highlights: [
      "Hierarchical Access Control: System Admin → Campus Admin → Faculty → Students/Parents → Librarian → External Auditor",
      "AI Features: Document verification (PaddleOCR + anomaly detection 96.8%), Smart course recommendations (Collaborative filtering + LLM), Attendance prediction (Time-series ML), Fee defaulter prediction (92% accuracy)",
      "Architecture: Django REST with JWT auth, React + TypeScript responsive frontend, PostgreSQL with row-level security, Redis caching (-65% API latency), Docker deployment (99.7% uptime)",
      "24/7 availability with mobile app (iOS + Android)"
    ]
  },
  {
    id: 5,
    title: "Video Version Control System",
    role: "Full-Stack Developer",
    impact: "Content creators & educators",
    challenge: "Content creators (educators, marketers) needed to track video editing changes like developers track code—existing tools were manual and chaotic.",
    solution: "Built a Git-like version control for videos with frame-by-frame diffing to identify exact changes, branching/merging for collaborative editing, visual timeline showing edit history, and rollback capability to any previous version.",
    metrics: [
      "3x faster collaborative editing workflows",
      "65% storage savings via delta compression",
      "Instant rollback to any version (vs hours of re-editing)",
      "Automated visual diffs (no manual notes needed)"
    ],
    tech: ["OpenCV", "FFmpeg", "WebSockets", "React", "Node.js", "MongoDB", "Perceptual Hashing"],
    color: "from-yellow-500 to-orange-500",
    icon: Activity,
    highlights: [
      "Frame Difference Engine: OpenCV calculates perceptual hashes of frames, identifies changes at second-level granularity, delta storage (only differences)",
      "Collaborative Features: WebSocket sync for real-time team editing, Conflict resolution UI for overlapping edits, Comment threads on specific timestamps",
      "Export to industry formats (MP4, MOV, AVI)"
    ]
  },
  {
    id: 6,
    title: "Word-to-PowerPoint Automation",
    role: "AI Developer",
    impact: "Business & education teams",
    challenge: "Creating presentation slides from Word documents took 4+ hours of manual work—copy-paste, formatting, image placement.",
    solution: "Built an AI-powered document-to-slide generator that extracts sections from Word docs (python-docx), generates slides using LLM-based summarization, auto-formats with templates (colors, fonts, layouts), and adds visuals (charts, icons) contextually.",
    metrics: [
      "96.7% faster (4 hours → 8 minutes for 20-slide deck)",
      "100% formatting consistency (vs 60-70% human variance)",
      "Professional output with auto-generated charts",
      "5 professional themes available"
    ],
    tech: ["GPT-4o", "Gemini Pro", "python-docx", "python-pptx", "Semantic Search"],
    color: "from-red-500 to-pink-500",
    icon: FileText,
    highlights: [
      "Content Intelligence: GPT-4o summarizes sections into bullet points, Gemini Pro generates slide titles and transitions, Chart detection (tables → bar/pie charts automatically), Icon matching using semantic search",
      "Template Engine: 5 professional themes (corporate, academic, creative, minimal, bold), Auto-contrast ensuring text readability, Responsive layouts adapting to content length"
    ]
  },
  // Modal-only projects (no dedicated page)
  {
    modalOnly: true,
    title: "Hybrid Automated Grass Cutter",
    role: "IoT & Embedded Systems Developer",
    impact: "80% reduction in manual intervention",
    challenge: "Traditional grass cutting requires constant human supervision and manual operation, leading to inefficiency and labor-intensive maintenance in large outdoor areas.",
    solution: "Developed a Bluetooth-operated automated grass cutter capable of executing voice-based commands using IoT components and speech recognition technology. Integrated VOSK for offline voice recognition, enabling real-time command processing without internet connectivity.",
    metrics: [
      "80% reduction in manual intervention",
      "Real-time offline voice command processing",
      "Bluetooth-controlled operation",
      "Automated navigation and obstacle detection"
    ],
    tech: ["VOSK", "Arduino", "IoT", "Bluetooth", "Speech Recognition", "Embedded Systems", "C/C++"],
    color: "from-green-500 to-teal-500",
    icon: Zap,
    highlights: [
      "Offline Voice Control: Integrated VOSK speech recognition engine for real-time command processing without internet dependency",
      "IoT Integration: Arduino-based control system with Bluetooth connectivity for seamless wireless operation",
      "Automation: Reduced manual labor by 80% through intelligent voice-activated controls and automated navigation",
      "Embedded Systems: Low-level hardware programming with efficient power management"
    ],
    link: "https://www.linkedin.com/posts/suman-janarthanan-352171222_hello-everyone-here-i-am-happy-and-thrilled-activity-7262858518649540608-tcuU"
  },
  {
    modalOnly: true,
    title: "Face Fusion - Advanced Recognition System",
    role: "Computer Vision Engineer",
    impact: "90%+ accuracy in challenging conditions",
    challenge: "Traditional face recognition systems fail in low-light conditions and at distances beyond 5 meters, making them unsuitable for surveillance and security applications.",
    solution: "Built an advanced face recognition system achieving 90%+ accuracy even in low light conditions and from distances up to 15 meters. Utilized HoG (Histogram of Oriented Gradients) and CNN for feature extraction, applying early fusion techniques to enhance detection capabilities in challenging environments.",
    metrics: [
      "90%+ face recognition accuracy",
      "15-meter detection distance",
      "Low-light condition support",
      "Real-time processing capability"
    ],
    tech: ["HoG", "CNN", "OpenCV", "Deep Learning", "MTCNN", "Feature Fusion", "Python"],
    color: "from-blue-500 to-indigo-500",
    icon: Shield,
    highlights: [
      "Multi-Modal Feature Extraction: Combined HoG (Histogram of Oriented Gradients) for edge detection with CNN deep features for robust representation",
      "Early Fusion Architecture: Merged features at input level for enhanced detection in challenging lighting conditions",
      "Long-Range Detection: Optimized pipeline achieving reliable recognition up to 15 meters distance",
      "Low-Light Enhancement: Preprocessing pipeline with adaptive histogram equalization and noise reduction for low-light scenarios"
    ],
    link: "https://github.com/surplussuman/Face-Fushion"
  },
  {
    id: 11,
    title: "Parjanya: Multi-Cloud AI Decision Support System",
    role: "Lead AI Architect & System Designer",
    impact: "500+ servers processed • Enterprise cloud migrations",
    challenge: "Enterprise cloud migration decisions involve analyzing complex Bill of Materials (BoM) files from cloud cost exports, comparing hyperscalers (AWS, Azure, GCP), and making strategic recommendations worth millions of dollars. Traditional approaches relied on manual analysis taking weeks and prone to human error.",
    solution: "Built Parjanya - a production-ready, AI-powered multi-cloud decision support platform using a sophisticated LangGraph multi-agent orchestration system. The platform implements a 'Private Perplexity' approach with curated hyperscaler intelligence and daily knowledge refresh from official sources only.",
    metrics: [
      "93% time reduction (2-3 weeks → 10-60 minutes)",
      "99.7% decision accuracy with ETVX verification",
      "5× processing speedup (83 min → 16.7 min for 500 servers)",
      "$10M+ migration decisions supported",
      "Real-time pricing across 3 hyperscalers simultaneously",
      "Parallel batch processing with ThreadPoolExecutor",
      "24-hour JWT sessions for long-running analysis"
    ],
    tech: ["LangGraph", "GPT-4", "Gemini Pro", "ChromaDB", "PostgreSQL", "Django REST", "Docker", "SSE", "Celery"],
    color: "from-violet-500 to-fuchsia-500",
    icon: Cloud,
    highlights: [
      "Four-Engine Architecture: Multi-Modal Ingestion → Commercial Calculator → OEM Program Brain (RAG) → Recommendation Engine",
      "ETVX Verification Pattern: Entry-Task-Validation-Exit for complete auditability and trust in $10M+ decisions",
      "LangGraph Orchestration: Complex stateful workflows enabling deterministic, auditable decision-making",
      "Peer Verification: Independent AI cross-checking (GPT-4 + Gemini) for hallucination detection",
      "Parallel Hyperscaler Processing: Simultaneous API calls across AWS/Azure/GCP for sub-second comparative analysis",
      "Performance Optimization: 5× speedup through batch processing, extended timeouts, and SSE streaming"
    ]
  }
];

export const experience = [
  {
    company: "DMX Tech Services Pvt Ltd",
    role: "AI Engineer & Technical Team Lead",
    period: "Feb 2025 – Present",
    location: "Bangalore",
    type: "Full-time",
    highlights: [
      "Leading 10+ cross-functional teams (10-25 engineers each) delivering production AI systems serving 15,000+ active users across 160+ deployment centers",
      "Architected hybrid LLM strategy achieving 85% cost reduction while improving translation quality by 23.6% BLEU score (NLLB-200 + GPT-4o pipeline)",
      "Implemented RAG systems reducing hallucination rate by 84% (23.6% → 3.8%) across 5 major projects using LangChain, Pinecone, and ChromaDB",
      "Established CI/CD pipelines and code review standards (2 approvals required) reducing production bugs by 65%",
      "Mentored 15+ junior developers, promoted 6 to mid-level roles within 8 months through weekly tech talks and pair programming",
      "Achieved 95% on-time delivery across all projects with 99.7% system uptime SLA through Docker containerization and autoscaling",
      "Fine-tuned transformer models (Whisper, BERT, T5) using HuggingFace for speech-to-text, semantic similarity, and document classification tasks",
      "Designed scalable backends with Django REST Framework, containerized services with Docker, ensuring production-grade reliability and performance"
    ],
    achievements: [
      "40% team productivity increase (measured by story points/sprint)",
      "92% developer retention rate (vs 75% industry avg)",
      "50+ Low-Level Design (LLD) documents created",
      "200+ pages internal wiki documentation"
    ]
  },
  {
    company: "SirusAI Private Limited",
    role: "AI Developer",
    period: "Aug 2023 – Oct 2024",
    location: "Dharmapuri",
    type: "Full-time",
    highlights: [
      "Achieved 95% accuracy in facial recognition system even on surveillance camera footage through advanced face recognition techniques",
      "Improved recognition performance by 30% using data augmentation and advanced feature extraction techniques including MTCNN and face alignment",
      "Implemented WebRTC API to establish peer-to-peer connection between server and CCTV camera for real-time video streaming",
      "Trained SVM model on dataset of 1000+ images per person with comprehensive preprocessing pipeline including face detection, alignment, and normalization",
      "Deployed complete system via Docker on VPS infrastructure for production use with load balancing and failover mechanisms",
      "Optimized inference speed achieving real-time performance (30 FPS) on standard hardware through model quantization and efficient batching"
    ],
    achievements: [
      "95% recognition accuracy on surveillance footage",
      "30% performance improvement through optimization",
      "Real-time processing at 30 FPS",
      "Production deployment on VPS infrastructure"
    ]
  }
];

export const education = [
  {
    institution: "IIT Guwahati",
    degree: "Credit Linked Program in Data Science",
    period: "Expected Sep 2025",
    logo: GraduationCap,
    color: "from-blue-500 to-indigo-500",
    courses: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Analysis", "AI Applications", "Statistical Methods"]
  },
  {
    institution: "I.K.G. PTU, Punjab",
    degree: "B.Tech in Computer Science",
    period: "Jun 2025",
    grade: "CGPA: 7.71/10",
    logo: GraduationCap,
    color: "from-purple-500 to-pink-500",
    courses: ["Algorithms", "Database Systems", "Web Technologies", "Software Engineering", "Computer Networks", "Operating Systems"]
  },
  {
    institution: "Govt Model HR Sec School",
    degree: "Higher Secondary Education",
    period: "April 2020",
    grade: "JEE Percentile: 80",
    logo: BookOpen,
    color: "from-green-500 to-emerald-500"
  }
];

export const additionalCourses = [
  "Summer Training on IBM Project",
  "Python Internship",
  "Artificial Intelligence Certification",
  "Machine Learning Specialization",
  "Deep Learning Specialization",
  "Neural Networks and Deep Learning",
  "Data Analysis Course",
  "Ethical Hacking Workshop",
  "Web Designing Course"
];

export const awards = [
  {
    title: "Smart India Hackathon (ISRO Problem Statement)",
    organization: "Government of India",
    date: "November 2024",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    description: "Participated in national-level hackathon solving ISRO's problem statement"
  },
  {
    title: "National Level Entrepreneur Competition",
    organization: "National Competition",
    date: "January 2024",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
    description: "Participated in prestigious national entrepreneurship competition"
  },
  {
    title: "1st Place - State Level Ideathon",
    organization: "Rajasthan",
    date: "September 2023",
    icon: Trophy,
    color: "from-purple-500 to-pink-500",
    description: "Won first place in state-level ideathon competition in Rajasthan"
  },
  {
    title: "2nd Place - Udhyam",
    organization: "Government of Punjab",
    date: "May 2023",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    description: "Secured second position in Udhyam competition conducted by Government of Punjab"
  },
  {
    title: "1st Place - Best Innovation of the Month",
    organization: "DMX Tech Services",
    date: "April 2023",
    icon: Star,
    color: "from-red-500 to-pink-500",
    description: "Recognized as Best Innovation of the Month at DMX Tech Services"
  },
  {
    title: "1st Place - Programmer to Entrepreneur",
    organization: "Competition",
    date: "March 2023",
    icon: Trophy,
    color: "from-indigo-500 to-purple-500",
    description: "Won first place in Programmer to Entrepreneur competition"
  },
  {
    title: "2nd Place - Prayog",
    organization: "College Competition",
    date: "December 2022",
    icon: Award,
    color: "from-cyan-500 to-blue-500",
    description: "Secured second position in Prayog college-level competition"
  }
];

export const publications = [
  {
    title: "Neuralink: Advancing BMI for Enhanced Human-Machine Interaction",
    link: "https://doi.org/g8p2rg",
    description: "Research paper on Brain-Machine Interface technologies and their applications in enhancing human-computer interaction capabilities",
    journal: "Published Research",
    year: "2024"
  }
];

export const skills = {
  "AI & Machine Learning": [
    { name: "GPT-4o / Gemini Pro 1.5", icon: Brain, level: 95 },
    { name: "LLAMA 3 (8B/70B)", icon: Brain, level: 90 },
    { name: "LangChain / LangGraph", icon: Code2, level: 92 },
    { name: "RAG (Pinecone/ChromaDB/FAISS)", icon: Database, level: 93 },
    { name: "WhisperAI / NLLB-200", icon: Globe, level: 88 },
    { name: "PyTorch / TensorFlow / Keras", icon: Cpu, level: 87 },
    { name: "Computer Vision (OpenCV/YOLO)", icon: Target, level: 90 },
    { name: "NLP & Transformers (HuggingFace)", icon: Brain, level: 91 },
    { name: "Agentic AI (AutoGen/CrewAI)", icon: Users, level: 85 },
  ],
  "Backend & Infrastructure": [
    { name: "Django REST Framework", icon: Server, level: 94 },
    { name: "FastAPI", icon: Rocket, level: 88 },
    { name: "Docker / Kubernetes", icon: Cloud, level: 90 },
    { name: "PostgreSQL / MongoDB", icon: Database, level: 89 },
    { name: "Redis / Celery", icon: Server, level: 92 },
    { name: "Nginx / Gunicorn", icon: Server, level: 87 },
    { name: "CI/CD Pipelines", icon: Rocket, level: 86 },
    { name: "WebSockets / WebRTC", icon: Zap, level: 84 },
  ],
  "Frontend & Design": [
    { name: "React 18 / Next.js", icon: Code2, level: 88 },
    { name: "TypeScript", icon: Code2, level: 85 },
    { name: "Tailwind CSS", icon: Code2, level: 90 },
    { name: "Framer Motion", icon: Zap, level: 82 },
    { name: "Monaco Editor Integration", icon: Code2, level: 87 },
  ],
  "Cloud & DevOps": [
    { name: "AWS (EC2, S3)", icon: Cloud, level: 86 },
    { name: "Prometheus / Grafana", icon: BarChart3, level: 83 },
    { name: "Linux / Ubuntu Administration", icon: Server, level: 88 },
    { name: "VPS Management", icon: Server, level: 90 },
    { name: "Port Forwarding / Networking", icon: Globe, level: 84 },
  ]
};

export const additionalSkills = [
  // AI/ML Libraries & Tools
  "HuggingFace", "Transformers", "Scikit-learn", "Matplotlib", "Seaborn",
  "MTCNN", "Pickle", "Keras", "TensorFlow", "PyTorch", "Neural Networks",
  // GenAI Tools
  "Lobe.ai", "Synthesia", "Replika", "DeepBrain AI", "MidJourney", "DALL-E", "Fotor", "Genially",
  // Backend & DevOps
  "IoT", "Arduino", "C/C++", "Excel", "PowerPoint", "Elasticsearch",
  "RabbitMQ", "Grafana", "Prometheus", "Git/GitHub", "Linux", "FFmpeg",
  "Wav2Lip", "PaddleOCR", "Acoustic Hashing", "SimHash", "Sentence-BERT",
  // Networking & Infrastructure
  "Sockets", "Embedded Systems", "Networking", "VPS Server", "Gunicorn",
  "Nginx", "EC2 Instance", "S3 Bucket", "Virtual Machines", "Port Forwarding",
  // Soft Skills
  "Market Research", "Communication", "Leadership", "Problem Solving",
  "Quick Learner", "Innovator", "Team Management", "Agile/Scrum",
  // Additional Technical
  "Data Analysis", "Ethical Hacking", "Web Designing", "Face Recognition",
  "Speech Recognition", "VOSK", "WebRTC", "Docker", "SVM", "Feature Extraction",
  "Data Augmentation", "Face Alignment", "Model Quantization"
];
