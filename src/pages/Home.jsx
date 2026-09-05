import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Compass, Heart, Flame, Lightbulb } from 'lucide-react';
import PortfolioLayout from '../components/PortfolioLayout';

const traits = [
  {
    icon: Compass,
    title: "Owns the Whole Stack",
    description: "Comfortable being the one person who designs the AI system and the AWS infrastructure it runs on — I'd rather understand the full path than hand off at the boundary.",
  },
  {
    icon: Heart,
    title: "Mentor First",
    description: "Genuinely enjoy growing a team — pair programming and weekly tech talks helped devlopers solving the issues and bugs and had oppurtunity to teach them new technologies.",
  },
  {
    icon: Flame,
    title: "Calm Under Production Pressure",
    description: "Years of being the on-call person for live systems taught me to stay methodical when something's actually on fire, not just when it's convenient.",
  },
  {
    icon: Lightbulb,
    title: "Curious by Default",
    description: "Still chasing hackathons, ideathons, and research papers alongside a full-time lead role — building things I don't yet know how to build is what keeps this interesting.",
  },
];

const Home = () => {
  return (
    <PortfolioLayout>
      <section className="relative overflow-hidden py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Suman Janarthanan
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-700 mb-4">
              Researcher, AI Architect & Technical Lead
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-5 leading-relaxed">
              Currently <span className="font-semibold text-purple-600">AI Architect and Technical Lead</span> at T.I.M.E, Hyderabad,
              building production AI systems end-to-end — from adaptive learning and AI-proctored interviews to the
              <span className="font-semibold text-indigo-600"> AWS infrastructure</span> they run on. Author of published BMI research,
              currently writing a second paper on <span className="font-semibold text-pink-600">CPU-efficient face recognition</span> for
              low-light surveillance.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all"
                >
                  Get In Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="inline-block px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold text-sm hover:bg-purple-50 transition-all"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>

            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/surplussuman", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/suman-janarthanan-352171222/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:surplussuman987@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-purple-100"
                  aria-label={social.label}
                >
                  <social.icon className="text-purple-600" size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image Section with Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-pink-300/30 to-indigo-300/30 rounded-full blur-3xl opacity-50"></div>

              <motion.img
                whileHover={{ scale: 1.02 }}
                src="/image.png"
                alt="Suman Janarthanan - AI Architect & Researcher"
                className="relative z-10 w-full h-auto object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-purple-100 z-20"
              >
                <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">15K+</div>
                <div className="text-xs text-gray-600 font-semibold whitespace-nowrap">Active Users</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-pink-100 z-20"
              >
                <div className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">5,000+</div>
                <div className="text-xs text-gray-600 font-semibold whitespace-nowrap">AI Interviews</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-2 rounded-lg shadow-lg z-20"
              >
                <div className="text-sm font-bold">99.7%</div>
                <div className="text-[10px] whitespace-nowrap">Uptime SLA</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute top-1/4 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-lg shadow-lg z-20"
              >
                <div className="text-sm font-bold">2</div>
                <div className="text-[10px] whitespace-nowrap">Research Papers</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Beyond the Role — personality */}
      <section className="py-8 md:py-10 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-center mb-1.5">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Beyond the Role
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-6 text-xs md:text-sm">A few things that shape how I work</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-4 shadow-md border border-purple-100 hover:shadow-lg transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-2.5">
                    <trait.icon className="text-white" size={15} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">{trait.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default Home;
