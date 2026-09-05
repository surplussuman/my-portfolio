import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, X, CheckCircle2, Zap, ExternalLink } from 'lucide-react';
import { allProjects } from '../PortfolioData';
import PortfolioLayout from '../components/PortfolioLayout';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  return (
    <PortfolioLayout>
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Production AI Systems
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-8 text-sm">
              {allProjects.length}+ comprehensive projects • Click to view full details
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 6) * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-purple-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                        <project.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                    </div>
                    <p className="text-purple-600 font-semibold text-sm mb-3">{project.role}</p>
                    <p className="text-gray-700 font-medium text-sm mb-4">{project.impact}</p>

                    <div className="space-y-2">
                      {project.metrics.slice(0, 3).map((metric, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Zap size={14} className="text-purple-600 mt-1 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {project.modalOnly ? (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        View Details
                        <ChevronRight size={16} />
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate(`/project/${project.id}`)}
                        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        View Full Details
                        <ChevronRight size={16} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal for modal-only projects */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`}></div>
            <div className="p-6 border-b border-purple-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-r ${selectedProject.color} rounded-xl`}>
                    <selectedProject.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                    <p className="text-purple-600 font-semibold">{selectedProject.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="text-purple-700 font-bold text-lg">{selectedProject.impact}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Challenge</h3>
                <p className="text-gray-600">{selectedProject.challenge}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Solution</h3>
                <p className="text-gray-600">{selectedProject.solution}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Technical Highlights</h3>
                <div className="space-y-3">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <Zap size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <ExternalLink size={16} />
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </PortfolioLayout>
  );
};

export default ProjectsPage;
