import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Phone, MapPin, Eye, Download } from 'lucide-react';
import PortfolioLayout from '../components/PortfolioLayout';

const ResumePage = () => {
  return (
    <PortfolioLayout>
      <section className="py-10 px-6 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Download or preview my complete resume</p>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

                <div className="relative bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
                  <div className="h-3 bg-gradient-to-r from-purple-600 to-pink-600"></div>

                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-inner">
                          <div className="flex items-center gap-3 mb-4">
                            <FileText className="text-purple-600" size={32} />
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">Suman Janarthanan</h3>
                              <p className="text-gray-600">Researcher, AI Architect & Technical Lead</p>
                            </div>
                          </div>

                          <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Mail size={16} className="text-purple-600" />
                              <span>surplussuman987@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone size={16} className="text-purple-600" />
                              <span>+91 6383595092</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-purple-600" />
                              <span>Dharmapuri, Tamil Nadu</span>
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                            <div className="bg-white p-3 rounded-lg border border-gray-200">
                              <div className="font-semibold text-purple-600">Experience</div>
                              <div className="text-gray-600">2+ Years</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-gray-200">
                              <div className="font-semibold text-pink-600">Projects</div>
                              <div className="text-gray-600">17+ Completed</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 w-full md:w-auto">
                        <motion.a
                          href="/Resume_new Jan 26.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          <Eye size={20} />
                          Preview Resume
                        </motion.a>

                        <motion.a
                          href="/Resume_new Jan 26.pdf"
                          download="Suman_Janarthanan_Resume.pdf"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all border border-purple-200 hover:border-purple-400"
                        >
                          <Download size={20} />
                          Download PDF
                        </motion.a>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                        <div className="text-2xl font-bold text-purple-600 mb-1">17+</div>
                        <div className="text-gray-600 text-sm">Major Projects</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                        <div className="text-2xl font-bold text-green-600 mb-1">10+</div>
                        <div className="text-gray-600 text-sm">AI Technologies</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                        <div className="text-2xl font-bold text-blue-600 mb-1">2+</div>
                        <div className="text-gray-600 text-sm">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default ResumePage;
