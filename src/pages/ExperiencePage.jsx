import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { experience } from '../PortfolioData';
import PortfolioLayout from '../components/PortfolioLayout';

const ExperiencePage = () => {
  return (
    <PortfolioLayout>
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.role}</h3>
                      <p className="text-xl text-purple-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-500 flex items-center gap-2">
                        <MapPin size={16} /> {exp.location}
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievements && (
                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                      {exp.achievements.map((a, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default ExperiencePage;
