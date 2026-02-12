import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Brain, CheckCircle, TrendingUp, Video, FileText, Cpu, Award } from 'lucide-react';

const Project10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-block px-4 py-2 bg-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            HR Tech • AI/ML • RAG • Agentic AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            AI Interview Platform with RAG Foundation
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2"><Calendar className="text-violet-400" size={20} /><span>January 2026 - Present (Ongoing)</span></div>
            <div className="flex items-center gap-2"><Users className="text-indigo-600" size={20} /><span>18 Engineers</span></div>
            <div className="flex items-center gap-2"><Target className="text-fuchsia-400" size={20} /><span>Lead AI Architect & Technical Lead</span></div>
            <div className="flex items-center gap-2"><Award className="text-pink-600" size={20} /><span>5,000+ Users</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-violet-500/20 rounded-xl border border-violet-500/30 text-center">
            <p className="text-3xl font-bold text-violet-400">500+</p>
            <p className="text-gray-500 text-sm">Interviews/Day</p>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-600">96.8%</p>
            <p className="text-gray-500 text-sm">Transcription Accuracy</p>
          </div>
          <div className="p-4 bg-fuchsia-500/20 rounded-xl border border-fuchsia-500/30 text-center">
            <p className="text-3xl font-bold text-fuchsia-400">94.2%</p>
            <p className="text-gray-500 text-sm">Scoring Consistency</p>
          </div>
          <div className="p-4 bg-pink-500/20 rounded-xl border border-pink-500/30 text-center">
            <p className="text-3xl font-bold text-pink-600">4.6/5.0</p>
            <p className="text-gray-500 text-sm">User Satisfaction</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center gap-2">
            <Video size={24} />
            Business Problem Statement
          </h2>
          <p className="text-gray-600 mb-4">Traditional interview processes suffer from critical limitations:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Scalability", desc: "Human interviewers limited to 5-8 interviews/day" },
              { title: "Consistency", desc: "Subjective evaluation varies between interviewers" },
              { title: "Bias", desc: "Unconscious bias affects hiring decisions" },
              { title: "Cost", desc: "$500-$1,500 per technical interview (senior interviewers)" },
              { title: "Scheduling", desc: "Coordination overhead across time zones" },
              { title: "Feedback Quality", desc: "Generic feedback without actionable insights" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h4 className="font-semibold text-red-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200">AI-powered interview platform with RAG-based personalization, multi-dimensional scoring, and agentic learning path generation. Processes <span className="text-green-600 font-bold">500+ interviews/day</span> with consistent evaluation and personalized feedback.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">System Architecture</h2>
          <pre className="text-xs text-gray-600 overflow-x-auto bg-gray-900/50 p-4 rounded-xl mb-6">
{`┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                           AI Interview Platform Architecture                                 │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                              USER INTERFACE LAYER                                      │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │  │
│  │  │  Candidate   │  │  Interview   │  │  Proctoring  │  │  Dashboard   │              │  │
│  │  │  Portal      │  │  Room        │  │  Controls    │  │  & Reports   │              │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘              │  │
│  │  Features: WebRTC Video • Monaco Editor • Excalidraw Whiteboard • Screen Recording   │  │
│  └───────────────────────────────────────────────────────────────────────────────────────┘  │
│                                           │                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                              BACKEND SERVICES                                          │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │  │
│  │  │  Auth Service   │  │  Interview      │  │  Scoring        │  │  Analytics      │  │  │
│  │  │  (JWT/OAuth/MFA)│  │  Orchestrator   │  │  Engine         │  │  Service        │  │  │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────────────────────┘  │
│                                           │                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                       RAG FOUNDATION LAYER (Dual Storage)                              │  │
│  │  ┌──────────────────────────┐    ┌──────────────────────────┐                        │  │
│  │  │      PostgreSQL          │◀──▶│      Pinecone (Vector)   │                        │  │
│  │  │  User profiles, records  │    │  Resume/response embeds  │                        │  │
│  │  │  Scores & feedback       │    │  Historical context      │                        │  │
│  │  └──────────────────────────┘    └──────────────────────────┘                        │  │
│  └───────────────────────────────────────────────────────────────────────────────────────┘  │
│                                           │                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                              AI SERVICES                                               │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │  │
│  │  │  Resume         │  │  Question       │  │  Response       │  │  Learning Path  │  │  │
│  │  │  Analyzer       │  │  Generator      │  │  Evaluator      │  │  Generator      │  │  │
│  │  │  (Gemini Pro)   │  │  (GPT-4o)       │  │  (GPT-4o+ASMB)  │  │  (LangGraph)    │  │  │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────────────┘`}
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
                  ["LLMs", "GPT-4o, Gemini Pro 1.5", "Question gen, evaluation"],
                  ["Speech-to-Text", "Assembly AI", "Transcription"],
                  ["Embeddings", "OpenAI Ada-002", "Semantic encoding"],
                  ["Vector Store", "Pinecone", "RAG retrieval"],
                  ["Agentic Framework", "LangGraph", "Learning paths"],
                  ["Backend", "Django REST Framework", "API layer"],
                  ["Frontend", "React 18 + TypeScript", "User interface"],
                  ["Real-time", "WebSockets (Django Channels)", "Live communication"],
                  ["Database", "PostgreSQL + MongoDB", "Hybrid storage"],
                  ["Containerization", "Docker", "Deployment"],
                  ["Reverse Proxy", "Nginx", "Production serving"]
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
            <FileText size={24} />
            Resume Analysis System (ATS Scoring)
          </h2>
          <p className="text-gray-600 mb-4">Comprehensive resume analysis with skill extraction and ATS compatibility scoring:</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
            {[
              { dim: "Format & Structure", weight: "20%" },
              { dim: "Keyword Optimization", weight: "25%" },
              { dim: "Content Quality", weight: "25%" },
              { dim: "Experience Relevance", weight: "15%" },
              { dim: "Education Match", weight: "15%" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/30 text-center">
                <p className="text-orange-300 font-semibold text-xs">{item.dim}</p>
                <p className="text-gray-800 font-bold">{item.weight}</p>
              </div>
            ))}
          </div>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`class ResumeAnalyzer:
    """Comprehensive resume analysis with ATS scoring."""
    
    def __init__(self):
        self.gemini = GeminiClient(model="gemini-pro-1.5")
        self.embedding_model = OpenAIEmbeddings(model="text-embedding-ada-002")
        self.vector_store = PineconeClient()
    
    async def analyze_resume(self, resume_bytes, job_description=None):
        # Step 1: Parse resume
        parsed_text = await self._parse_resume(resume_bytes)
        
        # Step 2: Extract structured information
        extracted_info = await self._extract_information(parsed_text)
        
        # Step 3: Calculate ATS score (weighted formula)
        ats_score = await self._calculate_ats_score(extracted_info, job_description)
        
        # Step 4: Categorize skills
        skill_analysis = await self._analyze_skills(extracted_info['skills'])
        
        # Step 5: Generate embedding for RAG
        resume_embedding = await self._generate_embedding(parsed_text)
        
        # Step 6: Store in vector DB for retrieval
        await self._store_resume_vector(candidate_id, embedding, metadata)
        
        return ResumeAnalysis(
            extracted_info=extracted_info,
            ats_score=ats_score,
            skill_analysis=skill_analysis,
            suggestions=suggestions
        )`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-amber-600 flex items-center gap-2">
            <Brain size={24} />
            Advanced Multi-Dimensional Scoring System
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {[
              { dim: "Technical Accuracy", weight: "30%", color: "blue" },
              { dim: "Communication", weight: "15%", color: "green" },
              { dim: "Problem Solving", weight: "20%", color: "purple" },
              { dim: "Depth of Knowledge", weight: "15%", color: "cyan" },
              { dim: "Practical Experience", weight: "10%", color: "orange" },
              { dim: "Cultural Fit", weight: "10%", color: "pink" }
            ].map((item, i) => (
              <div key={i} className={`p-3 bg-${item.color}-500/10 rounded-lg border border-${item.color}-500/30`}>
                <p className={`text-${item.color}-300 font-semibold text-sm`}>{item.dim}</p>
                <p className="text-gray-800 font-bold text-lg">{item.weight}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-4">Includes: Z-score normalization, multi-source plagiarism detection (internal, external, code), and automated recommendation generation.</p>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`def _normalize_scores(self, dimension_scores):
    """Z-score normalization: z = (x - μ) / σ, then convert to 0-100 scale."""
    stats = self._load_score_statistics()
    normalized = {}
    for dimension, score in dimension_scores.items():
        mean = stats[dimension]['mean']
        std = stats[dimension]['std']
        if std > 0:
            z_score = (score - mean) / std
            normalized_value = 50 + (z_score * 16.67)  # ±3σ range
            normalized[dimension] = max(0, min(100, normalized_value))
    return normalized

def _calculate_weighted_score(self, dimension_scores):
    """Final score: S = Σ(w_i × s_i) where Σw_i = 1"""
    return sum(
        self.SCORING_DIMENSIONS[dim] * dimension_scores.get(dim, 0)
        for dim in self.SCORING_DIMENSIONS
    )`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 flex items-center gap-2">
            <Cpu size={24} />
            Agentic AI Learning Path Generator (LangGraph)
          </h2>
          <p className="text-gray-600 mb-4">LangGraph-based agent with 6-node workflow for personalized learning recommendations:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["analyze_profile", "identify_gaps", "retrieve_resources", "generate_path", "validate_path", "personalize"].map((node, i) => (
              <span key={i} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg text-sm flex items-center gap-1">
                {i + 1}. {node}
              </span>
            ))}
          </div>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`class LearningPathAgent:
    """Agentic AI for personalized learning path generation using LangGraph."""
    
    def _build_agent_graph(self) -> StateGraph:
        graph = StateGraph(PathState)
        
        # Add nodes
        graph.add_node("analyze_profile", self._analyze_profile)
        graph.add_node("identify_gaps", self._identify_skill_gaps)
        graph.add_node("retrieve_resources", self._retrieve_resources)
        graph.add_node("generate_path", self._generate_learning_path)
        graph.add_node("validate_path", self._validate_path)
        graph.add_node("personalize", self._personalize_recommendations)
        
        # Add edges (with conditional retry on validation failure)
        graph.add_edge("analyze_profile", "identify_gaps")
        graph.add_edge("identify_gaps", "retrieve_resources")
        graph.add_edge("retrieve_resources", "generate_path")
        graph.add_edge("generate_path", "validate_path")
        graph.add_conditional_edges(
            "validate_path",
            self._check_validation,
            {"valid": "personalize", "invalid": "generate_path"}
        )
        graph.add_edge("personalize", END)
        
        return graph.compile()`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Proctoring System</h2>
          <p className="text-gray-600 mb-4">Real-time interview proctoring with anomaly detection in 3 modes:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { mode: "Strict", rules: "Fullscreen required, no tab switches, no copy/paste, face detection" },
              { mode: "Moderate", rules: "Fullscreen required, 3 tab switches allowed, face detection" },
              { mode: "Relaxed", rules: "No fullscreen, unlimited tabs, copy/paste allowed" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-600 mb-2">{item.mode}</h4>
                <p className="text-gray-500 text-sm">{item.rules}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">Event types monitored: tab_switch, fullscreen_exit, face_not_detected, multiple_faces. Auto-terminates on max violations.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-600 flex items-center gap-2">
            <TrendingUp size={24} />
            Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: "Interviews/Day", value: "500+" },
              { metric: "Question Gen Time", value: "2.5 sec" },
              { metric: "Resume Analysis", value: "4.2 sec" },
              { metric: "Scoring Latency", value: "8.5 sec" },
              { metric: "Transcription Accuracy", value: "96.8%" },
              { metric: "Concurrent Sessions", value: "200+" },
              { metric: "User Satisfaction", value: "4.6/5.0" },
              { metric: "Scoring Consistency", value: "94.2%" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-green-50 rounded-xl border border-green-200 text-center">
                <p className="text-xl font-bold text-green-600">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.metric}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <CheckCircle size={24} />
            My Technical Contributions
          </h2>
          <div className="space-y-4">
            {[
              { num: 1, title: "RAG Architecture Design", desc: "Designed dual-storage (PostgreSQL + Vector DB) architecture for complete context preservation" },
              { num: 2, title: "Resume Analyzer", desc: "Built comprehensive resume analysis with ATS scoring and skill extraction" },
              { num: 3, title: "Dynamic Question Generator", desc: "Implemented adaptive question generation based on candidate profiles" },
              { num: 4, title: "Advanced Scoring System", desc: "Designed multi-dimensional scoring with normalization and plagiarism detection" },
              { num: 5, title: "Proctoring System", desc: "Built real-time proctoring with anomaly detection" },
              { num: 6, title: "Agentic Learning Paths", desc: "Developed LangGraph-based agent for personalized learning recommendations" },
              { num: 7, title: "Docker Deployment", desc: "Architected multi-container deployment with Nginx, WebSockets, and proper networking" }
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

export default Project10;
