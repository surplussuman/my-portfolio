import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, ExternalLink, PenLine } from 'lucide-react';
import { awards, publications } from '../PortfolioData';
import PortfolioLayout from '../components/PortfolioLayout';

const AwardsPage = () => {
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
                Research & Recognition
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Research publications and national-level achievements</p>

            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-green-100 mb-12 space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <BookOpen className="text-green-600" size={28} />
                Research Publications
              </h3>
              {publications.map((pub, index) => {
                const isDraft = pub.status === 'draft';
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 bg-gradient-to-r ${isDraft ? 'from-amber-500 to-orange-500' : 'from-green-500 to-teal-500'}`}>
                      {isDraft ? (
                        <PenLine className="text-white" size={24} />
                      ) : (
                        <ExternalLink className="text-white" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {isDraft ? (
                          <span className="text-lg font-bold text-gray-800">{pub.title}</span>
                        ) : (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors hover:underline"
                          >
                            {pub.title}
                          </a>
                        )}
                        {isDraft && (
                          <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                            Draft • In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-2">{pub.description}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="font-semibold">{pub.journal}</span>
                        <span>•</span>
                        <span>{pub.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${award.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${award.color} rounded-xl flex-shrink-0`}>
                        <award.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{award.title}</h3>
                        <p className="text-purple-600 font-semibold text-sm mb-2">{award.organization}</p>
                        <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                          <Calendar size={14} />
                          {award.date}
                        </p>
                        <p className="text-gray-700 text-sm">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default AwardsPage;
