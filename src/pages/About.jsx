import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';
import { impactMetrics } from '../PortfolioData';
import PortfolioLayout from '../components/PortfolioLayout';

const About = () => {
  return (
    <PortfolioLayout>
      {/* About Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-base text-gray-700 leading-relaxed">
                  I'm a researcher and AI architect with over 2 years of experience building production-grade
                  AI systems. Currently a Technical Lead at T.I.M.E, Hyderabad, I design and ship AI products
                  end-to-end — from adaptive learning and AI-proctored interviews to communication assessment
                  platforms — and own the AWS architecture they run on.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Before this, I led a 10+ team cross-functional engineering org at DMX Tech Services, delivering
                  production AI systems serving 15,000+ active users across 160+ deployment centers.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  My expertise spans the full AI/ML lifecycle — from RAG architectures and LLM fine-tuning to
                  designing scalable, secure cloud infrastructure with WAF, load balancing, zero-downtime CI/CD,
                  and full observability (Grafana + Prometheus). Alongside engineering, I'm a published researcher
                  (Brain-Machine Interfaces) currently writing a second paper on CPU-efficient face recognition
                  for low-light surveillance.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {[
                    { icon: Briefcase, label: "2+ Years Experience" },
                    { icon: GraduationCap, label: "IIT Guwahati (Data Science)" },
                    { icon: Award, label: "5+ National Awards" },
                    { icon: Rocket, label: "10+ Production Systems" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-purple-100"
                    >
                      <item.icon className="text-purple-600" size={24} />
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Stats</h3>
                    {[
                      { label: "Active Users", value: "15,000+" },
                      { label: "Deployment Centers", value: "160+" },
                      { label: "Concurrent Users", value: "5,000+" },
                      { label: "System Uptime", value: "99.7%" },
                      { label: "Cost Savings", value: "85%-98%" },
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="text-purple-600 font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-10 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Impact at a Glance
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Measurable results across all production systems</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-purple-100">
                    <metric.icon className="text-purple-600 mb-4" size={40} />
                    <div className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
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

export default About;
