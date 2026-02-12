import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Building, CheckCircle, TrendingUp, Database, Shield, Cpu } from 'lucide-react';

const Project9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
            EdTech • Enterprise Automation • AI Integration
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AICAS - AI Campus Automation System
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2"><Calendar className="text-teal-400" size={20} /><span>October 2025 - January 2026 (16 weeks)</span></div>
            <div className="flex items-center gap-2"><Users className="text-cyan-600" size={20} /><span>22 Engineers</span></div>
            <div className="flex items-center gap-2"><Target className="text-purple-600" size={20} /><span>System Architect & Full-Stack Lead</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-teal-500/20 rounded-xl border border-teal-500/30 text-center">
            <p className="text-3xl font-bold text-teal-400">45ms</p>
            <p className="text-gray-500 text-sm">API Response (p50)</p>
          </div>
          <div className="p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/30 text-center">
            <p className="text-3xl font-bold text-cyan-600">2,000+</p>
            <p className="text-gray-500 text-sm">Concurrent Users</p>
          </div>
          <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30 text-center">
            <p className="text-3xl font-bold text-purple-600">97.2%</p>
            <p className="text-gray-500 text-sm">Document Accuracy</p>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-600">99.9%</p>
            <p className="text-gray-500 text-sm">Uptime SLA</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center gap-2">
            <Building size={24} />
            Business Problem Statement
          </h2>
          <p className="text-gray-600 mb-4">Educational institutions operate with fragmented systems across departments:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Admission", desc: "Paper-based applications, manual document verification" },
              { title: "Academics", desc: "Disconnected attendance, grading, and scheduling systems" },
              { title: "Hostel", desc: "Manual room allocation, maintenance tracking, visitor logs" },
              { title: "Administration", desc: "Siloed HR, finance, and inventory management" },
              { title: "Integration Gap", desc: "No unified view across departments" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h4 className="font-semibold text-red-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200">A comprehensive AI-powered campus automation platform with modular architecture, intelligent document verification, and predictive analytics across all campus operations</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">System Architecture</h2>
          <pre className="text-xs text-gray-600 overflow-x-auto bg-gray-900/50 p-4 rounded-xl mb-6">
{`┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           AICAS - System Architecture                                    │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────────────────────────────────────┐  │
│  │                              PRESENTATION LAYER                                    │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                   │  │
│  │  │   Web Portal    │  │  Mobile App     │  │   Admin Panel   │                   │  │
│  │  │   (React 18)    │  │  (React Native) │  │   (React)       │                   │  │
│  │  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘                   │  │
│  └───────────┴───────────────────┬┴───────────────────┴─────────────────────────────┘  │
│                                   │                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐  │
│  │                   API GATEWAY (Nginx + Kong Gateway)                               │  │
│  │  • Rate Limiting: 1000 req/min  • JWT Auth  • SSL Termination  • Circuit Breaker  │  │
│  └───────────────────────────────────────────────────────────────────────────────────┘  │
│                                   │                                                     │
│  ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐                    │
│  │  HOSTEL MODULE    │ │  ACADEMICS MODULE │ │  ADMIN MODULE     │                    │
│  │  • Room Alloc.    │ │  • Attendance     │ │  • HR Management  │                    │
│  │  • Maintenance    │ │  • Grading        │ │  • Finance        │                    │
│  │  • Visitor Mgmt   │ │  • Scheduling     │ │  • Inventory      │                    │
│  │  • Mess Billing   │ │  • Examinations   │ │  • Notifications  │                    │
│  └─────────┬─────────┘ └─────────┬─────────┘ └─────────┬─────────┘                    │
│            └─────────────────────┼─────────────────────┘                              │
│                                  │                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐  │
│  │                              AI SERVICES LAYER                                     │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                   │  │
│  │  │   Document      │  │   Smart         │  │   Predictive    │                   │  │
│  │  │   Verification  │  │   Suggestions   │  │   Analytics     │                   │  │
│  │  │   (OCR, GPT-4o) │  │   (Auto-fill)   │  │   (Forecasting) │                   │  │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘                   │  │
│  └───────────────────────────────────────────────────────────────────────────────────┘  │
│                                  │                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐  │
│  │                              DATA LAYER                                            │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                   │  │
│  │  │   PostgreSQL    │  │     Redis       │  │   MinIO (S3)    │                   │  │
│  │  │   (Primary DB)  │  │   (Cache)       │  │   (File Store)  │                   │  │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘                   │  │
│  └───────────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Technology Stack</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-3 text-gray-500">Component</th>
                  <th className="text-left p-3 text-gray-500">Technology</th>
                  <th className="text-left p-3 text-gray-500">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ["Backend", "Django REST Framework 4.2", "API development"],
                  ["Frontend", "React 18 + TypeScript", "Web interface"],
                  ["Mobile", "React Native", "iOS/Android apps"],
                  ["Database", "PostgreSQL 15", "Primary datastore"],
                  ["Cache", "Redis 7", "Session, caching"],
                  ["File Storage", "MinIO", "Document storage"],
                  ["Containerization", "Docker + Docker Compose", "Deployment"],
                  ["Reverse Proxy", "Nginx", "Load balancing, SSL"],
                  ["AI/ML", "GPT-4o, PaddleOCR", "Document AI"],
                  ["Monitoring", "Prometheus + Grafana", "Observability"]
                ].map(([comp, tech, purpose], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-3 font-medium text-purple-300">{comp}</td>
                    <td className="p-3 text-cyan-300">{tech}</td>
                    <td className="p-3">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center gap-2">
            <Database size={24} />
            Hostel Management Module Design
          </h2>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`# models.py - Hostel Module
class HostelBuilding(models.Model):
    """Hostel building master."""
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20, unique=True)
    building_type = models.CharField(
        max_length=20,
        choices=[('boys', 'Boys'), ('girls', 'Girls'), ('staff', 'Staff')]
    )
    total_floors = models.PositiveIntegerField()
    warden = models.ForeignKey('users.Staff', on_delete=models.SET_NULL, null=True)
    contact_number = models.CharField(max_length=15)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        db_table = 'hostel_buildings'
        indexes = [
            models.Index(fields=['code']),
            models.Index(fields=['building_type', 'is_active']),
        ]


class Room(models.Model):
    """Individual room details."""
    building = models.ForeignKey(HostelBuilding, on_delete=models.CASCADE)
    room_number = models.CharField(max_length=20)
    floor = models.PositiveIntegerField()
    room_type = models.CharField(
        max_length=20,
        choices=[('single', 'Single'), ('double', 'Double'), ('triple', 'Triple')]
    )
    capacity = models.PositiveIntegerField()
    current_occupancy = models.PositiveIntegerField(default=0)
    amenities = models.JSONField(default=list)  # ['AC', 'Attached Bathroom', 'WiFi']
    monthly_fee = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20,
        choices=[('available', 'Available'), ('occupied', 'Occupied'), 
                 ('maintenance', 'Under Maintenance')]
    )


class RoomAllocation(models.Model):
    """Student room allocation records."""
    student = models.ForeignKey('users.Student', on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    bed_number = models.PositiveIntegerField()
    academic_year = models.CharField(max_length=20)
    allocated_date = models.DateField()
    vacated_date = models.DateField(null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=[('active', 'Active'), ('vacated', 'Vacated'), ('transferred', 'Transferred')]
    )


class MaintenanceRequest(models.Model):
    """Room maintenance tracking."""
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    reported_by = models.ForeignKey('users.User', on_delete=models.CASCADE)
    category = models.CharField(max_length=50, choices=[
        ('electrical', 'Electrical'), ('plumbing', 'Plumbing'),
        ('furniture', 'Furniture'), ('cleaning', 'Cleaning'), ('other', 'Other')
    ])
    description = models.TextField()
    priority = models.CharField(max_length=20, choices=[
        ('low', 'Low'), ('medium', 'Medium'), ('high', 'High'), ('urgent', 'Urgent')
    ])
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'), ('assigned', 'Assigned'), ('in_progress', 'In Progress'),
        ('completed', 'Completed'), ('closed', 'Closed')
    ])
    assigned_to = models.ForeignKey('users.Staff', on_delete=models.SET_NULL, null=True)
    reported_at = models.DateTimeField(auto_now_add=True)
    resolved_at = models.DateTimeField(null=True, blank=True)`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-amber-600 flex items-center gap-2">
            <Shield size={24} />
            AI Document Verification System
          </h2>
          <p className="text-gray-600 mb-4">Supports: Aadhaar Card, PAN Card, Passport, 10th/12th Marksheets, Degree Certificates, Transfer Certificates, Income/Caste Certificates</p>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`class DocumentVerificationService:
    """
    AI-powered document verification for admission process.
    Validates uploaded documents for authenticity and data extraction.
    """
    
    def __init__(self):
        self.ocr_engine = PaddleOCR(use_angle_cls=True, lang='en')
        self.llm = ChatOpenAI(model="gpt-4o", temperature=0)
        self.face_detector = RetinaFace()
    
    async def verify_document(
        self,
        document_type: str,
        image_bytes: bytes
    ) -> VerificationResult:
        """
        Comprehensive document verification pipeline.
        
        Steps:
        1. Image quality check
        2. Document type detection
        3. OCR text extraction
        4. Data field extraction
        5. Authenticity checks
        6. Face extraction (if applicable)
        """
        
        # Step 1: Image quality assessment
        quality_score = await self._assess_image_quality(image_bytes)
        if quality_score < 0.6:
            return VerificationResult(
                status="rejected",
                reason="Image quality too low",
                quality_score=quality_score
            )
        
        # Step 2: OCR extraction
        ocr_result = self.ocr_engine.ocr(image_bytes)
        extracted_text = self._parse_ocr_result(ocr_result)
        
        # Step 3: Document type validation
        detected_type = await self._detect_document_type(extracted_text)
        
        # Step 4: Field extraction using LLM
        extracted_fields = await self._extract_fields(
            document_type=document_type,
            ocr_text=extracted_text
        )
        
        # Step 5: Multi-factor authenticity checks
        # - Format validation (e.g., Aadhaar number format)
        # - Checksum validation (where applicable)
        # - Image tampering detection
        # - Consistency check (multiple fields should match)
        
        return VerificationResult(
            status="verified" if authenticity_result.is_authentic else "suspicious",
            document_type=document_type,
            extracted_fields=extracted_fields,
            confidence_score=authenticity_result.confidence
        )`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 flex items-center gap-2">
            <Cpu size={24} />
            Docker Multi-Container Architecture
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { name: "API Server", detail: "3 replicas, 4GB RAM" },
              { name: "Celery Worker", detail: "2 replicas, 2GB RAM" },
              { name: "Celery Beat", detail: "Scheduler service" },
              { name: "PostgreSQL", detail: "Primary DB, 4GB RAM" },
              { name: "Redis", detail: "Cache, 1GB RAM" },
              { name: "MinIO", detail: "Object storage" },
              { name: "Nginx", detail: "Reverse proxy, SSL" },
              { name: "Frontend", detail: "React app" }
            ].map((service, i) => (
              <div key={i} className="p-3 bg-pink-500/10 rounded-lg border border-pink-500/30">
                <h4 className="font-semibold text-pink-300 text-sm">{service.name}</h4>
                <p className="text-gray-500 text-xs">{service.detail}</p>
              </div>
            ))}
          </div>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`# Nginx Configuration Highlights
upstream api_servers {
    least_conn;
    server api:8000 weight=5;
    keepalive 32;
}

server {
    listen 443 ssl http2;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
    
    # API routes with 60s timeout
    location /api/ {
        proxy_pass http://api_servers;
        client_max_body_size 50M;
    }
    
    # WebSocket for real-time features
    location /ws/ {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-600 flex items-center gap-2">
            <TrendingUp size={24} />
            Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: "API Response (p50)", value: "45ms" },
              { metric: "API Response (p95)", value: "180ms" },
              { metric: "API Response (p99)", value: "350ms" },
              { metric: "Concurrent Users", value: "2,000+" },
              { metric: "Doc Verification Time", value: "3.5 sec" },
              { metric: "Document Accuracy", value: "97.2%" },
              { metric: "Indexed Queries", value: "85%" },
              { metric: "Uptime SLA", value: "99.9%" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-green-50 rounded-xl border border-green-200 text-center">
                <p className="text-xl font-bold text-green-600">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.metric}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <CheckCircle size={24} />
            My Technical Contributions
          </h2>
          <div className="space-y-4">
            {[
              { num: 1, title: "Complete LLD Design", desc: "Authored Low-Level Design documents for all modules with API specs, DB schemas, and flow diagrams" },
              { num: 2, title: "Full-Stack Development", desc: "Built complete Hostel, Academics, and Administration modules" },
              { num: 3, title: "Docker Architecture", desc: "Designed multi-container deployment with proper networking and volume management" },
              { num: 4, title: "AI Integration", desc: "Implemented document verification and smart suggestion systems" },
              { num: 5, title: "Scalable APIs", desc: "Designed RESTful APIs with proper pagination, filtering, and response optimization" },
              { num: 6, title: "Database Design", desc: "Created normalized schemas with proper indexing strategies" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-xl">
                <span className="text-purple-600 font-bold text-xl">{item.num}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project9;
