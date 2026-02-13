import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Database, CheckCircle, TrendingUp, FileText, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PremiumModal from '../components/PremiumModal';

const Project7 = () => {
  const { isAuthenticated } = useAuth();
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isAuthenticated) {
      setIsPremiumModalOpen(true);
    }
  }, [isAuthenticated]);
  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 ${!isAuthenticated ? 'blur-sm pointer-events-none' : ''}`}>
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-4">
            Document Processing • Data Engineering • NLP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Word2DB - Intelligent Question Extraction Pipeline
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2"><Calendar className="text-indigo-400" size={20} /><span>July - September 2025 (12 weeks)</span></div>
            <div className="flex items-center gap-2"><Users className="text-indigo-600" size={20} /><span>14 Engineers</span></div>
            <div className="flex items-center gap-2"><Target className="text-pink-600" size={20} /><span>Technical Lead & Data Pipeline Architect</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-indigo-500/20 rounded-xl border border-indigo-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-400">10,000+</p>
            <p className="text-gray-500 text-sm">Documents Processed</p>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-600">500,000+</p>
            <p className="text-gray-500 text-sm">Questions Extracted</p>
          </div>
          <div className="p-4 bg-pink-500/20 rounded-xl border border-pink-500/30 text-center">
            <p className="text-3xl font-bold text-pink-600">96.8%</p>
            <p className="text-gray-500 text-sm">Extraction Accuracy</p>
          </div>
          <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30 text-center">
            <p className="text-3xl font-bold text-purple-600">98.2%</p>
            <p className="text-gray-500 text-sm">Deduplication Precision</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Business Problem</h2>
          <p className="text-gray-600 mb-4">Educational institutions maintain question banks in Word documents accumulated over decades. Migrating these to databases presents challenges:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Format Heterogeneity", desc: "Mix of .doc, .docx, and scanned PDFs" },
              { title: "Mathematical Notation", desc: "Complex formulas in various formats" },
              { title: "Legacy Encoding", desc: "Old Word formats with incompatible encodings" },
              { title: "Deduplication", desc: "Same questions across multiple papers" },
              { title: "Traceability", desc: "Track question origins across papers and versions" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h4 className="font-semibold text-red-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200">Comprehensive extraction pipeline that converts legacy Word documents to structured database entries with automated deduplication and complete historical traceability</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">4-Stage Extraction Pipeline</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-indigo-600/5 rounded-xl border border-indigo-500/30">
              <h3 className="text-lg font-bold text-indigo-400 mb-2">Stage 1: Document Normalization</h3>
              <p className="text-gray-500 text-sm">LibreOffice headless conversion, UTF-8 encoding, font mapping, equation format unification</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <h3 className="text-lg font-bold text-indigo-600 mb-2">Stage 2: Question Extraction</h3>
              <p className="text-gray-500 text-sm">Detects numbered patterns, alphabetic options, section markers, marks indicators. Extracts text, options, marks, equations, images, tables</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl border border-pink-200">
              <h3 className="text-lg font-bold text-pink-600 mb-2">Stage 3: Deduplication Engine</h3>
              <p className="text-gray-500 text-sm">SimHash for fuzzy matching, MD5 for exact, Sentence-BERT embeddings with cosine similarity (threshold: 0.95)</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-purple-600 mb-2">Stage 4: Database Ingestion</h3>
              <p className="text-gray-500 text-sm">PostgreSQL for primary storage, Elasticsearch for full-text search, pgvector for similarity search</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center gap-2">
            <Database size={24} />
            Question Tracking & Reference Chain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-3">Master ID System</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Unique master_id for canonical questions</li>
                <li>• Variant linking with similarity score</li>
                <li>• Source document tracking with page numbers</li>
                <li>• Confidence score for each extraction</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-3">Excel Reference Chain</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Maps to Excel-based reference data</li>
                <li>• Paper code, year, topic, chapter, section</li>
                <li>• Complete traceability across sources</li>
                <li>• Backtrack normalized question identities</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-amber-600">Mathematical Notation Handling</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {["OMML (Office MathML)", "MathType equations", "Legacy Equation Editor", "LaTeX embedded", "Image equations (OCR)"].map((format, i) => (
              <span key={i} className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg text-sm">{format}</span>
            ))}
          </div>
          <p className="text-gray-500 text-sm">All formats normalized to LaTeX. Image-based equations processed using specialized Math OCR (pix2tex). Accuracy: 94.5%</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <CheckCircle size={24} />
            My Technical Contributions
          </h2>
          <div className="space-y-4">
            {[
              { num: 1, title: "Question Tracking System", desc: "Designed unique master ID assignment across papers and versions", color: "indigo" },
              { num: 2, title: "Automated Extraction", desc: "Built pipeline mapping questions to Excel reference chains", color: "purple" },
              { num: 3, title: "Scalable Pipeline", desc: "Architected system to link and backtrack normalized question identities", color: "pink" },
              { num: 4, title: "Historical Tracking", desc: "Enabled complete traceability across documents and sources", color: "blue" },
              { num: 5, title: "Deployment", desc: "Deployed Word2DB and Word2PPT to production servers", color: "green" }
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["LibreOffice 7.5", "python-docx", "lxml", "Sentence-BERT", "SymPy", "PostgreSQL 15", "Elasticsearch 8", "pgvector", "Django REST", "Celery", "pix2tex"].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    <PremiumModal 
      isOpen={isPremiumModalOpen} 
      onClose={() => setIsPremiumModalOpen(false)} 
    />
    </>
  );
};

export default Project7;
