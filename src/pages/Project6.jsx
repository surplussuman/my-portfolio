import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Code, CheckCircle, TrendingUp, FileText, Presentation } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PremiumModal from '../components/PremiumModal';

const Project6 = () => {
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
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            Document Processing • NLP • Computer Vision
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Word-to-PowerPoint AI Converter
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2"><Calendar className="text-green-600" size={20} /><span>July - September 2025 (8 weeks)</span></div>
            <div className="flex items-center gap-2"><Users className="text-teal-400" size={20} /><span>12 Engineers</span></div>
            <div className="flex items-center gap-2"><Target className="text-cyan-600" size={20} /><span>AI Engineer & System Designer</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30 text-center">
            <p className="text-3xl font-bold text-green-600">30s</p>
            <p className="text-gray-500 text-sm">Per 20 Pages</p>
          </div>
          <div className="p-4 bg-teal-500/20 rounded-xl border border-teal-500/30 text-center">
            <p className="text-3xl font-bold text-teal-400">98.5%</p>
            <p className="text-gray-500 text-sm">Content Preserved</p>
          </div>
          <div className="p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/30 text-center">
            <p className="text-3xl font-bold text-cyan-600">97.8%</p>
            <p className="text-gray-500 text-sm">Equation Accuracy</p>
          </div>
          <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30 text-center">
            <p className="text-3xl font-bold text-purple-600">25+</p>
            <p className="text-gray-500 text-sm">Templates Supported</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Business Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Manual Conversion Time</h4>
              <p className="text-gray-600 text-sm">2-4 hours for a 20-page document</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Inconsistent Formatting</h4>
              <p className="text-gray-600 text-sm">Design quality varies by creator</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Content Restructuring</h4>
              <p className="text-gray-600 text-sm">Prose must be condensed into bullet points</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Visual Asset Handling</h4>
              <p className="text-gray-600 text-sm">Images and charts require repositioning</p>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200">AI-powered conversion that automatically transforms Word documents into professionally formatted presentations, preserving all content types</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">4-Stage Conversion Pipeline</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-purple-600 mb-2">Stage 1: Document Parsing (python-docx)</h3>
              <p className="text-gray-500 text-sm">Extracts headings, paragraphs, lists, tables, images, math equations, charts</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <h3 className="text-lg font-bold text-indigo-600 mb-2">Stage 2: Content Analysis (GPT-4o)</h3>
              <p className="text-gray-500 text-sm">Section detection, key point extraction, summarization, slide count estimation, layout recommendation</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <h3 className="text-lg font-bold text-green-600 mb-2">Stage 3: Template Matching</h3>
              <p className="text-gray-500 text-sm">Extract master slides, identify placeholders, parse color schemes, map content to layouts</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <h3 className="text-lg font-bold text-orange-600 mb-2">Stage 4: Slide Generation (python-pptx)</h3>
              <p className="text-gray-500 text-sm">Create presentation, populate placeholders, apply formatting, insert images, create tables, add speaker notes</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-amber-600">Supported Slide Layouts</h2>
          <div className="flex flex-wrap gap-2">
            {["title_slide", "section_header", "bullet_points", "two_column", "image_with_caption", "image_full", "table", "chart", "quote", "comparison"].map((layout, i) => (
              <span key={i} className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg text-sm">{layout}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">Mathematical Equation Handling</h2>
          <p className="text-gray-600 mb-4">Pipeline: OMML → MathML → LaTeX → PNG (via matplotlib)</p>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-pink-300 font-semibold mb-2">Conversion Steps:</p>
            <ol className="list-decimal list-inside text-gray-500 text-sm space-y-1">
              <li>Convert Office MathML (OMML) to LaTeX using custom XSLT transformation</li>
              <li>Render LaTeX using matplotlib with 300 DPI</li>
              <li>Export as PNG with tight bounding box</li>
              <li>Insert into PowerPoint slide with proper positioning</li>
            </ol>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <CheckCircle size={24} />
            My Technical Contributions
          </h2>
          <div className="space-y-4">
            {[
              { num: 1, title: "AI Logic Design", desc: "Developed content analysis and slide planning algorithms", color: "blue" },
              { num: 2, title: "Template Engine", desc: "Built template matching and layout optimization system", color: "green" },
              { num: 3, title: "Equation Handling", desc: "Implemented OMML → LaTeX → PNG conversion pipeline", color: "purple" },
              { num: 4, title: "Quality Assurance", desc: "Designed automated testing for conversion accuracy", color: "yellow" },
              { num: 5, title: "Deployment", desc: "Configured production environment with Celery workers", color: "pink" }
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 bg-${item.color}-500/10 rounded-xl border border-${item.color}-500/30`}>
                <span className={`text-${item.color}-400 font-bold text-xl`}>{item.num}</span>
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
            {["python-docx", "python-pptx", "GPT-4o", "Pillow", "matplotlib", "LaTeX", "Django REST", "Celery", "LibreOffice"].map((tech, index) => (
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

export default Project6;
