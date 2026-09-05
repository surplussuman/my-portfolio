import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { education, additionalCourses } from '../PortfolioData';
import PortfolioLayout from '../components/PortfolioLayout';

const EducationPage = () => {
  return (
    <PortfolioLayout>
      <section className="py-10 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Academic foundation in AI and Computer Science</p>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-xl flex-shrink-0`}>
                        <edu.logo className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{edu.institution}</h3>
                        <p className="text-purple-600 font-semibold mb-2">{edu.degree}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} className="text-purple-600" />
                            {edu.period}
                          </span>
                          {edu.grade && (
                            <>
                              <span>•</span>
                              <span className="font-semibold text-pink-600">{edu.grade}</span>
                            </>
                          )}
                        </div>
                        {edu.courses && (
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <BookOpen className="text-purple-600" size={28} />
                Additional Coursework & Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {additionalCourses.map((course, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default EducationPage;
