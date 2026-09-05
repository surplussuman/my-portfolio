import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { allProjects } from '../PortfolioData';
import { useAuth } from '../context/AuthContext';
import PremiumModal from '../components/PremiumModal';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => String(p.id) === id);
  const { isAuthenticated } = useAuth();
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isAuthenticated) {
      setIsPremiumModalOpen(true);
    }
  }, [isAuthenticated]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 ${!isAuthenticated ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <Link to="/projects" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
              <ArrowLeft size={18} />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2.5 bg-gradient-to-r ${project.color} rounded-xl`}>
                <project.icon className="text-white" size={26} />
              </div>
              <span className="px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
                {project.role}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-purple-700 font-semibold text-sm">{project.impact}</p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 p-6 bg-white rounded-2xl border border-purple-100 shadow-sm"
          >
            <h2 className="text-lg font-bold mb-2 text-gray-800">Challenge</h2>
            <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 p-6 bg-white rounded-2xl border border-purple-100 shadow-sm"
          >
            <h2 className="text-lg font-bold mb-2 text-gray-800">Solution</h2>
            <p className="text-gray-600 leading-relaxed">{project.solution}</p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 p-6 bg-white rounded-2xl border border-purple-100 shadow-sm"
          >
            <h2 className="text-lg font-bold mb-4 text-gray-800">Key Metrics</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-6 p-6 bg-white rounded-2xl border border-purple-100 shadow-sm"
          >
            <h2 className="text-lg font-bold mb-4 text-gray-800">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white rounded-2xl border border-purple-100 shadow-sm"
          >
            <h2 className="text-lg font-bold mb-4 text-gray-800">Technical Highlights</h2>
            <div className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Zap size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <PremiumModal isOpen={isPremiumModalOpen} onClose={() => setIsPremiumModalOpen(false)} />
    </>
  );
};

export default ProjectDetail;
