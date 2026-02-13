import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Code, Database, CheckCircle, TrendingUp, Shield, Zap, BarChart3, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PremiumModal from '../components/PremiumModal';

const Project4 = () => {
  const { isAuthenticated } = useAuth();
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isAuthenticated) {
      setIsPremiumModalOpen(true);
    }
  }, [isAuthenticated]);
  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 ${!isAuthenticated ? 'blur-sm pointer-events-none' : ''}`}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            EdTech • Cloud IDE • AI-Assisted Coding
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Cloud-Based Coding Platform & AI Development Environment
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="text-purple-600" size={20} />
              <span>July - September 2025 (12 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-cyan-600" size={20} />
              <span>25 Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-green-600" size={20} />
              <span>Project Lead & Principal Engineer</span>
            </div>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30 text-center">
            <p className="text-3xl font-bold text-purple-600">12,000+</p>
            <p className="text-gray-500 text-sm">Active Students</p>
          </div>
          <div className="p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/30 text-center">
            <p className="text-3xl font-bold text-cyan-600">5,000+</p>
            <p className="text-gray-500 text-sm">Concurrent Users</p>
          </div>
          <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30 text-center">
            <p className="text-3xl font-bold text-green-600">50x</p>
            <p className="text-gray-500 text-sm">Scalability Improvement</p>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-600">94%</p>
            <p className="text-gray-500 text-sm">Question Creation Time Saved</p>
          </div>
        </motion.div>

        {/* Team Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Team Composition</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg">6 Backend Engineers</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">5 Frontend Engineers</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg">4 DevOps Engineers</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg">4 AI/ML Engineers</span>
            <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg">3 Security Engineers</span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg">3 QA Engineers</span>
          </div>
        </motion.div>

        {/* Business Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-red-600">Business Problem Statement</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Traditional coding education faces significant infrastructure challenges:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Environment Setup</h4>
              <p className="text-gray-600 text-sm">2-4 hours per student for local environment configuration</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Inconsistent Environments</h4>
              <p className="text-gray-600 text-sm">"Works on my machine" syndrome</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Limited Resources</h4>
              <p className="text-gray-600 text-sm">Students lack access to high-performance hardware</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">No Collaboration</h4>
              <p className="text-gray-600 text-sm">Isolated development without peer interaction</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Assessment Overhead</h4>
              <p className="text-gray-600 text-sm">Manual code review for assignments</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Question Creation</h4>
              <p className="text-gray-600 text-sm">4-6 hours to create well-structured coding questions</p>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200 text-lg">Comprehensive cloud-based development platform with AI-powered code assistance, automated evaluation, and personalized learning paths. Achieved <span className="text-green-600 font-bold">5,000+ concurrent user capacity</span> (50x improvement from baseline)</p>
          </div>
        </motion.div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">System Architecture</h2>
          
          <div className="space-y-6">
            {/* Frontend Layer */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Frontend Layer - React + Monaco Editor</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Code className="mx-auto text-purple-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Code Editor</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Database className="mx-auto text-green-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">File Explorer</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Monitor className="mx-auto text-amber-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Terminal (xterm.js)</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Zap className="mx-auto text-indigo-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Preview Panel</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-blue-300 font-semibold mb-2">Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 text-sm">
                  <li>• Syntax highlighting (50+ languages)</li>
                  <li>• IntelliSense / Autocomplete</li>
                  <li>• Real-time collaboration (CRDT-based)</li>
                  <li>• Split-pane layout</li>
                  <li>• Theme customization</li>
                </ul>
              </div>
            </div>

            {/* API Gateway */}
            <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">API Gateway (NGINX)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-green-300 font-semibold">Rate Limiting</p>
                  <p className="text-gray-500 text-sm">1000 req/min per user</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-green-300 font-semibold">SSL Termination</p>
                  <p className="text-gray-500 text-sm">Let's Encrypt</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-green-300 font-semibold">Load Balancing</p>
                  <p className="text-gray-500 text-sm">Round-robin</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-green-300 font-semibold">WebSocket</p>
                  <p className="text-gray-500 text-sm">/ws/* upgrade</p>
                </div>
              </div>
            </div>

            {/* Backend Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <h4 className="text-indigo-600 font-bold mb-3">API Server (Django)</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• /api/auth/*</li>
                  <li>• /api/problems/*</li>
                  <li>• /api/submit/*</li>
                  <li>• /api/contest/*</li>
                  <li>• /api/user/*</li>
                </ul>
              </div>
              <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <h4 className="text-orange-600 font-bold mb-3">Execution Engine</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Python 3.11</li>
                  <li>• Java 17</li>
                  <li>• C++ 17</li>
                  <li>• JavaScript (Node)</li>
                  <li>• Go, Rust, C# + 20 more</li>
                </ul>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl border border-pink-200">
                <h4 className="text-pink-600 font-bold mb-3">AI Service (ML Backend)</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Code Review</li>
                  <li>• Bug Detection</li>
                  <li>• Suggestions</li>
                  <li>• Auto Questions</li>
                  <li>• Learning Path</li>
                </ul>
              </div>
            </div>

            {/* Data Layer */}
            <div className="p-5 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">Data Layer</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-cyan-300 font-semibold">PostgreSQL</p>
                  <p className="text-gray-500 text-sm">Users, Problems, Submissions</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-cyan-300 font-semibold">Redis</p>
                  <p className="text-gray-500 text-sm">Sessions, Leaderboard, Rate Limits</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-cyan-300 font-semibold">MongoDB</p>
                  <p className="text-gray-500 text-sm">Logs, Analytics, Events</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-cyan-300 font-semibold">Pinecone</p>
                  <p className="text-gray-500 text-sm">Student Profiles, Code Embeddings</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full-Stack Development Environment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30"
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
            <Server size={24} />
            Full-Stack Development Environment
          </h2>
          <p className="text-gray-600 mb-6">The flagship feature - the <span className="text-purple-600 font-bold">first website-based platform</span> in our organization where students can build, host, and share complete applications.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-800/50 rounded-xl">
              <h4 className="text-purple-300 font-semibold mb-3">Docker Container (Per User)</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Base Image: Ubuntu 22.04 LTS</li>
                <li>• Resources: 2 vCPU, 4GB RAM, 10GB Storage</li>
                <li>• Timeout: 4 hours (auto-hibernate)</li>
                <li className="mt-3 font-semibold text-gray-800">Pre-installed:</li>
                <li>• Node.js 18 (npm, yarn)</li>
                <li>• Python 3.11 (pip, venv)</li>
                <li>• Java 17 (Maven, Gradle)</li>
                <li>• PostgreSQL, MySQL, MongoDB (local)</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl">
              <h4 className="text-green-300 font-semibold mb-3">One-Click Deploy</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Auto-detect project type</li>
                <li>• Build pipeline execution</li>
                <li>• Deploy to subdomain: {'{username}'}.projects.platform.com</li>
                <li>• SSL certificate provisioning</li>
                <li>• Shareable public URL</li>
                <li className="mt-3 font-semibold text-gray-800">Frameworks Available:</li>
                <li>• React, Vue, Angular, Next.js</li>
                <li>• Django, Flask, FastAPI</li>
                <li>• Spring Boot, Express.js</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* AI-Powered Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
            <Brain size={24} />
            AI-Powered Features
          </h2>
          
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="p-5 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl border border-pink-200">
              <h3 className="text-xl font-bold text-pink-600 mb-4">Feature 1: Intelligent Code Review (GPT-4 + QubeAPI)</h3>
              <p className="text-gray-600 mb-4">AI-powered code review providing actionable feedback on quality, bugs, and improvements.</p>
              <pre className="bg-gray-800 p-4 rounded-xl overflow-x-auto text-xs mb-4">
                <code className="text-gray-600">{`# Code Review Pipeline
1. Static analysis via QubeAPI (bugs, style, security, complexity)
2. AI-powered semantic review with GPT-4o
3. Merge and deduplicate findings
4. Calculate composite quality score (0-100)

# Score Formula:
Score = 100 - Σ(severity_weight × issue_count)
- Critical bug: 15 points
- Major bug: 8 points  
- Minor bug: 3 points
- Security issue: 20 points
- Style issue: 1 point`}</code>
              </pre>
            </div>

            {/* Feature 2 */}
            <div className="p-5 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <h3 className="text-xl font-bold text-amber-600 mb-4">Feature 2: AI-Powered Question Generation</h3>
              <p className="text-gray-600 mb-4">Automatically generates problem statements, boilerplate code in 10+ languages, test cases, and expected outputs.</p>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-500">Task</th>
                      <th className="text-left py-2 text-gray-500">Manual Time</th>
                      <th className="text-left py-2 text-gray-500">AI-Assisted</th>
                      <th className="text-left py-2 text-gray-500">Reduction</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100"><td className="py-2">Problem Statement</td><td>45 min</td><td className="text-green-600">3 min</td><td className="text-green-600">93%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2">Examples</td><td>30 min</td><td className="text-green-600">2 min</td><td className="text-green-600">93%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2">Test Cases</td><td>60 min</td><td className="text-green-600">5 min</td><td className="text-green-600">92%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2">Boilerplate (10 langs)</td><td>120 min</td><td className="text-green-600">5 min</td><td className="text-green-600">96%</td></tr>
                    <tr className="font-bold"><td className="py-2">Total</td><td>4.25 hours</td><td className="text-green-600">15 min</td><td className="text-green-600">94%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">Feature 3: Personalized Learning Path (RAG-Based)</h3>
              <p className="text-gray-600 mb-4">RAG-based personalized learning path generator analyzing student history and generating adaptive recommendations.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h5 className="text-purple-300 font-semibold mb-2">Analysis Metrics</h5>
                  <ul className="text-gray-500 text-sm space-y-1">
                    <li>• Topic accuracy: correct / total per topic</li>
                    <li>• Time efficiency: actual_time / optimal_time</li>
                    <li>• Consistency: std_dev of scores</li>
                    <li>• Improvement rate: Δaccuracy / Δtime</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h5 className="text-purple-300 font-semibold mb-2">Path Generation</h5>
                  <ul className="text-gray-500 text-sm space-y-1">
                    <li>• Retrieve student profile from vector store</li>
                    <li>• Analyze strengths/weaknesses</li>
                    <li>• Find similar student patterns</li>
                    <li>• Generate path with LLM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scalability Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-12 p-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl border border-green-500/30"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-600 flex items-center gap-2">
            <TrendingUp size={24} />
            Scalability Achievement: 100 → 5,000 Concurrent Users (50x)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-gray-500">Metric</th>
                  <th className="text-left py-3 text-gray-500">Before</th>
                  <th className="text-left py-3 text-gray-500">After</th>
                  <th className="text-left py-3 text-gray-500">Improvement</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100"><td className="py-3">Concurrent Users</td><td className="text-red-600">100</td><td className="text-green-600">5,000</td><td className="text-green-600 font-bold">50x</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3">Response Time (p95)</td><td className="text-red-600">2.5s</td><td className="text-green-600">180ms</td><td className="text-green-600 font-bold">93% faster</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3">Error Rate</td><td className="text-red-600">8%</td><td className="text-green-600">0.2%</td><td className="text-green-600 font-bold">97% reduction</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3">CPU Utilization</td><td className="text-red-600">95%</td><td className="text-green-600">65%</td><td>Headroom added</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3">Memory Usage</td><td className="text-red-600">90%</td><td className="text-green-600">70%</td><td>Headroom added</td></tr>
                <tr><td className="py-3">Throughput</td><td className="text-red-600">50 req/s</td><td className="text-green-600">2,500 req/s</td><td className="text-green-600 font-bold">50x</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Optimization Strategies Applied:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-green-300 font-semibold">Gunicorn Tuning</p>
              <p className="text-gray-500 text-sm">65 workers, gevent async, 1000 connections</p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-green-300 font-semibold">DB Connection Pooling</p>
              <p className="text-gray-500 text-sm">100 max connections, 50 pool size</p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-green-300 font-semibold">Redis Caching</p>
              <p className="text-gray-500 text-sm">100 connections, zlib compression</p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-green-300 font-semibold">Nginx Optimization</p>
              <p className="text-gray-500 text-sm">10000 worker connections, epoll</p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-green-300 font-semibold">Load Balancing</p>
              <p className="text-gray-500 text-sm">4 replicas, least_conn algorithm</p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-green-300 font-semibold">Autoscaling</p>
              <p className="text-gray-500 text-sm">Docker Swarm, health checks</p>
            </div>
          </div>
        </motion.div>

        {/* GitHub Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-600 flex items-center gap-2">
            <GitBranch size={24} />
            GitHub Integration & Multi-Developer Console
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Repository Import</h4>
                <p className="text-gray-500 text-sm">Clone any public/private repo, branch selection, automatic dependency detection</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Commit & Push</h4>
                <p className="text-gray-500 text-sm">Stage changes via UI, commit with message, push to remote</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Pull Request Integration</h4>
                <p className="text-gray-500 text-sm">Create PR from platform, view PR status, merge capability</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="text-gray-800 font-semibold mb-2">Multi-Developer Console</h4>
                <p className="text-gray-500 text-sm">Real-time collaborative editing (Yjs CRDT), cursor presence, chat integration, permission levels</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-600">Impact Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-purple-600">12,000+</p>
              <p className="text-gray-500 text-sm">Active Students</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-green-600">10-12</p>
              <p className="text-gray-500 text-sm">Institutions</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-indigo-600">5,000+</p>
              <p className="text-gray-500 text-sm">Concurrent Users</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-cyan-600">&lt;180ms</p>
              <p className="text-gray-500 text-sm">API Response (p95)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-amber-600">94%</p>
              <p className="text-gray-500 text-sm">Question Creation Saved</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-pink-600">92%</p>
              <p className="text-gray-500 text-sm">Code Review Accuracy</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-green-600">99.8%</p>
              <p className="text-gray-500 text-sm">Uptime</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-orange-600">500,000+</p>
              <p className="text-gray-500 text-sm">Submissions Processed</p>
            </div>
          </div>
        </motion.div>

        {/* My Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <CheckCircle size={24} />
            My Technical Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <span className="text-purple-600 font-bold text-xl">1</span>
              <div>
                <h4 className="font-semibold text-gray-800">Project Leadership</h4>
                <p className="text-gray-500 text-sm">Led requirement analysis and LLD design for the entire platform</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <span className="text-green-600 font-bold text-xl">2</span>
              <div>
                <h4 className="font-semibold text-gray-800">Cloud IDE Architecture</h4>
                <p className="text-gray-500 text-sm">Designed containerized workspace system with per-user isolation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <span className="text-indigo-600 font-bold text-xl">3</span>
              <div>
                <h4 className="font-semibold text-gray-800">AI Integration</h4>
                <p className="text-gray-500 text-sm">Implemented GPT-4 and QubeAPI integration for code review</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <span className="text-amber-600 font-bold text-xl">4</span>
              <div>
                <h4 className="font-semibold text-gray-800">Question Generator</h4>
                <p className="text-gray-500 text-sm">Built AI-powered question generation reducing creation time by 94%</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
              <span className="text-cyan-600 font-bold text-xl">5</span>
              <div>
                <h4 className="font-semibold text-gray-800">Scalability Engineering</h4>
                <p className="text-gray-500 text-sm">Achieved 50x concurrency improvement through systematic optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
              <span className="text-pink-600 font-bold text-xl">6</span>
              <div>
                <h4 className="font-semibold text-gray-800">RAG Learning System</h4>
                <p className="text-gray-500 text-sm">Developed personalized learning path engine using vector embeddings</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Monaco Editor", "Django REST", "Gunicorn", "Nginx", "Docker", "PostgreSQL", "Redis", "MongoDB", "Pinecone", "GPT-4o", "QubeAPI", "WebSocket", "xterm.js", "Yjs CRDT", "Celery", "OAuth2", "Let's Encrypt"].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    <PremiumModal 
      isOpen={isPremiumModalOpen} 
      onClose={() => setIsPremiumModalOpen(false)} 
    />
    </>
  );
};

export default Project4;
