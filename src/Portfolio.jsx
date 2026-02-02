import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Menu, X, Mail, Linkedin, Github, ExternalLink, ChevronRight, 
  MapPin, Phone, ChevronDown, Zap, Briefcase, Award, GraduationCap,
  Code2, Target, Users, TrendingUp, CheckCircle2, Globe, BookOpen,
  Trophy, Building2, Calendar, Star, BarChart3, Activity, Shield, Rocket,
  FileText, Download, Eye
} from 'lucide-react';
import {
  navigation, impactMetrics, allProjects, experience, education,
  additionalCourses, awards, publications, skills, additionalSkills
} from './PortfolioData';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              SJ
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-purple-600 font-semibold'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Suman Janarthanan
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-700 mb-6">
              AI Engineer & Technical Team Lead
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Leading <span className="font-semibold text-purple-600">10+ cross-functional teams</span> delivering 
              production AI systems serving <span className="font-semibold text-pink-600">15,000+ active users</span> across 
              <span className="font-semibold text-indigo-600"> 160+ deployment centers</span> with <span className="font-semibold text-green-600">99.7% uptime</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                View Projects
              </motion.a>
            </div>

            <div className="flex gap-4">
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
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-purple-100"
                  aria-label={social.label}
                >
                  <social.icon className="text-purple-600" size={20} />
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
            <div className="relative w-full max-w-2xl">
              {/* Subtle Glow Effect - No Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-pink-300/30 to-indigo-300/30 rounded-full blur-3xl opacity-50"></div>
              
              {/* Profile Image - Larger, No Border, Natural Blend */}
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="/image.png"
                alt="Suman Janarthanan - AI Engineer"
                className="relative z-10 w-full h-auto object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl"
              />
              
              {/* Floating Stat Cards - Positioned Outside Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-purple-100 z-20"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">15K+</div>
                <div className="text-sm text-gray-600 font-semibold whitespace-nowrap">Active Users</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-pink-100 z-20"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">160+</div>
                <div className="text-sm text-gray-600 font-semibold whitespace-nowrap">Deployment Centers</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-xl shadow-lg z-20"
              >
                <div className="text-lg font-bold">99.7%</div>
                <div className="text-xs whitespace-nowrap">Uptime SLA</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute top-1/4 -right-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl shadow-lg z-20"
              >
                <div className="text-lg font-bold">10+</div>
                <div className="text-xs whitespace-nowrap">AI Systems</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-purple-600" size={32} />
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate AI Engineer and Technical Lead with over 2 years of experience 
                  building production-grade AI systems. Currently at DMX Tech Services Pvt Ltd, 
                  I lead cross-functional teams of 10-25 engineers delivering solutions that serve 
                  15,000+ active users.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My expertise spans the full AI/ML lifecycle—from designing RAG architectures 
                  and fine-tuning LLMs to deploying scalable infrastructure with Docker, Kubernetes, 
                  and CI/CD pipelines. I'm driven by the challenge of solving real-world problems 
                  at scale while maintaining 99.7% uptime.
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
      <section id="impact" className="py-32 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Impact at a Glance
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Measurable results across all production systems</p>

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

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16">
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Production AI Systems
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">12 comprehensive projects • Click to view full details</p>

            {/* Simple Project Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-purple-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                        <project.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    </div>
                    <p className="text-purple-600 font-semibold text-sm mb-3">{project.role}</p>
                    <p className="text-gray-700 font-medium text-sm mb-4">{project.impact}</p>
                    
                    {/* Quick Metrics Preview */}
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
                      <Link 
                        to={`/project/${project.id}`}
                        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        View Full Details
                        <ChevronRight size={16} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16">
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
                  <h3 className="text-xl font-bold text-gray-800 mb-6">{category}</h3>
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

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Additional Skills & Tools</h3>
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

      {/* Resume Section */}
      <section id="resume" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Download or preview my complete resume</p>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

                {/* Main resume card */}
                <div className="relative bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
                  {/* Header with gradient */}
                  <div className="h-3 bg-gradient-to-r from-purple-600 to-pink-600"></div>

                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Resume preview mockup */}
                      <div className="flex-1">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-inner">
                          <div className="flex items-center gap-3 mb-4">
                            <FileText className="text-purple-600" size={32} />
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">Suman Janarthanan</h3>
                              <p className="text-gray-600">AI Engineer & Technical Lead</p>
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
                              <div className="text-gray-600">12+ Completed</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
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

                    {/* Resume highlights */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                        <div className="text-2xl font-bold text-purple-600 mb-1">12+</div>
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

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Academic foundation in AI and Computer Science</p>

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
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.institution}</h3>
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

            {/* Additional Coursework */}
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

      {/* Awards & Publications Section */}
      <section id="awards" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">National-level achievements and research publications</p>

            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
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

            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-green-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <BookOpen className="text-green-600" size={28} />
                Research Publications
              </h3>
              {publications.map((pub, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex-shrink-0">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors mb-2 block hover:underline"
                    >
                      {pub.title}
                    </a>
                    <p className="text-gray-700 mb-2">{pub.description}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="font-semibold">{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Interested in collaborating or discussing AI/ML opportunities? Let's talk!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Mail, label: "Email", value: "surplussuman987@gmail.com", href: "mailto:surplussuman987@gmail.com" },
                { icon: Phone, label: "Phone", value: "6383595092", href: "tel:6383595092" },
                { icon: MapPin, label: "Location", value: "Dharmapuri, Tamil Nadu", href: "#" },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  href={contact.href}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-2xl transition-all block"
                >
                  <contact.icon className="text-purple-600 mx-auto mb-4" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">{contact.label}</h3>
                  <p className="text-gray-600 text-sm">{contact.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/surplussuman", color: "hover:text-purple-600" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/suman-janarthanan-352171222/", color: "hover:text-blue-600" },
                { icon: FileText, href: "https://suman-janarthanan-wrvh2ow.gamma.site/", color: "hover:text-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-purple-100 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4">© 2026 Suman Janarthanan. All rights reserved.</p>
          <p className="text-purple-100">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

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
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
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

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Impact */}
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="text-purple-700 font-bold text-lg">{selectedProject.impact}</p>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Challenge</h3>
                <p className="text-gray-600">{selectedProject.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Solution</h3>
                <p className="text-gray-600">{selectedProject.solution}</p>
              </div>

              {/* Metrics */}
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

              {/* Tech Stack */}
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

              {/* Highlights */}
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

              {/* External Link */}
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
    </div>
  );
};

export default Portfolio;