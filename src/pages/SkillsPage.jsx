import React from 'react';
import { motion } from 'framer-motion';
import { skills, additionalSkills } from '../PortfolioData';
import PortfolioLayout from '../components/PortfolioLayout';

const SkillsPage = () => {
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
                Technical Skills
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{category}</h3>
                  <div className="space-y-4">
                    {items.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg cursor-pointer transition-all"
                      >
                        <skill.icon className="text-purple-600" size={20} />
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Additional Skills & Tools</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-400 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default SkillsPage;
