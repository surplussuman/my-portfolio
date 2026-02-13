import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Code, Database, CheckCircle, TrendingUp, Shield, Zap, BarChart3, Activity, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PremiumModal from '../components/PremiumModal';

const Project5 = () => {
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-4">
            Media Management • Version Control
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Video Version Control System
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="text-orange-600" size={20} />
              <span>July - September 2025 (10 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-red-600" size={20} />
              <span>15 Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-pink-600" size={20} />
              <span>System Architect & Deployment Lead</span>
            </div>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-orange-500/20 rounded-xl border border-orange-500/30 text-center">
            <p className="text-3xl font-bold text-orange-600">85%</p>
            <p className="text-gray-500 text-sm">Storage Savings</p>
          </div>
          <div className="p-4 bg-red-500/20 rounded-xl border border-red-500/30 text-center">
            <p className="text-3xl font-bold text-red-600">500+</p>
            <p className="text-gray-500 text-sm">Concurrent Projects</p>
          </div>
          <div className="p-4 bg-pink-500/20 rounded-xl border border-pink-500/30 text-center">
            <p className="text-3xl font-bold text-pink-600">&lt;200ms</p>
            <p className="text-gray-500 text-sm">API Response (p95)</p>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-600">100MB/s</p>
            <p className="text-gray-500 text-sm">Delta Computation</p>
          </div>
        </motion.div>

        {/* Business Problem */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Business Problem Statement</h2>
          <p className="text-gray-600 mb-6">Video content creation involves iterative editing cycles with multiple stakeholders. Traditional file-based workflows suffer from:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Version Confusion</h4>
              <p className="text-gray-600 text-sm">Multiple files like final_v2_edited_FINAL.mp4</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Storage Bloat</h4>
              <p className="text-gray-600 text-sm">50GB × 10 versions = 500GB for minor changes</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Collaboration Friction</h4>
              <p className="text-gray-600 text-sm">No real-time visibility into ongoing edits</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Audit Trail Gaps</h4>
              <p className="text-gray-600 text-sm">Inability to track who changed what and when</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Rollback Difficulty</h4>
              <p className="text-gray-600 text-sm">Complex manual process to revert changes</p>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200">Git-like version control for video assets with <span className="text-green-600 font-bold">delta compression</span>, <span className="text-green-600 font-bold">branching</span>, and <span className="text-green-600 font-bold">collaborative review workflows</span></p>
          </div>
        </motion.div>

        {/* Core Features */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">Core Features</h2>
          
          <div className="space-y-6">
            {/* Delta Compression */}
            <div className="p-5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                <HardDrive size={24} />
                Feature 1: Delta Compression for Storage Optimization
              </h3>
              <p className="text-gray-600 mb-4">Instead of storing complete video files for each version, we compute and store only the differences (deltas) using Rolling hash with Rabin fingerprinting.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-500">Change Type</th>
                      <th className="text-left py-2 text-gray-500">Original</th>
                      <th className="text-left py-2 text-gray-500">Delta</th>
                      <th className="text-left py-2 text-gray-500">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100"><td className="py-2">Color correction</td><td>500 MB</td><td>45 MB</td><td className="text-green-600">91%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2">Audio replacement</td><td>500 MB</td><td>52 MB</td><td className="text-green-600">90%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2">Minor trim</td><td>500 MB</td><td>28 MB</td><td className="text-green-600">94%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-2">Scene addition</td><td>500 MB</td><td>180 MB</td><td className="text-green-600">64%</td></tr>
                    <tr className="font-bold"><td className="py-2">Average</td><td>500 MB</td><td>76 MB</td><td className="text-green-600">85%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Branching */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                <GitBranch size={24} />
                Feature 2: Branching and Merging
              </h3>
              <p className="text-gray-600 mb-4">Git-like branching for parallel version development with three merge strategies:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-blue-300 font-semibold">Overwrite</p>
                  <p className="text-gray-500 text-sm">Source replaces target</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-blue-300 font-semibold">Three-Way</p>
                  <p className="text-gray-500 text-sm">Automatic conflict resolution</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-blue-300 font-semibold">Manual</p>
                  <p className="text-gray-500 text-sm">Mark conflicts for user resolution</p>
                </div>
              </div>
            </div>

            {/* Review Workflow */}
            <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">Feature 3: Collaborative Review Workflow</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-700 text-gray-600 rounded-lg">DRAFT</span>
                <span className="text-gray-500">→</span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg">PENDING REVIEW</span>
                <span className="text-gray-500">→</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">APPROVED / CHANGES REQUESTED</span>
                <span className="text-gray-500">→</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg">PUBLISHED</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">Technology Stack</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-gray-500">Component</th>
                  <th className="text-left py-3 text-gray-500">Technology</th>
                  <th className="text-left py-3 text-gray-500">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Backend</td><td>Django REST Framework 4.2</td><td>API development</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Task Queue</td><td>Celery 5.3</td><td>Async video processing</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Scheduler</td><td>Celery Beat</td><td>Periodic tasks</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Message Broker</td><td>RabbitMQ 3.12</td><td>Task distribution</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Database</td><td>PostgreSQL 15</td><td>Metadata storage</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Cache</td><td>Redis 7</td><td>Session, hot data</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Object Storage</td><td>MinIO (S3-compatible)</td><td>Video file storage</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Video Processing</td><td>FFmpeg 6.0</td><td>Encoding, transcoding</td></tr>
                <tr><td className="py-3 font-semibold text-gray-800">Frontend</td><td>React 18 + TypeScript</td><td>User interface</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Deployment */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
            <Server size={24} />
            Deployment Architecture (Systemd Services)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-pink-300 font-semibold mb-2">video-vcs-api.service</h4>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>• Gunicorn with 8 workers</li>
                <li>• gevent worker class</li>
                <li>• Unix socket binding</li>
                <li>• 300s timeout</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-pink-300 font-semibold mb-2">video-vcs-worker.service</h4>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>• 4 Celery workers</li>
                <li>• Queues: video_processing, thumbnails, notifications</li>
                <li>• Auto-restart on failure</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-pink-300 font-semibold mb-2">video-vcs-beat.service</h4>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>• Celery Beat scheduler</li>
                <li>• Database-backed scheduler</li>
                <li>• Periodic tasks: cleanup, backup, reports</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* My Contributions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <CheckCircle size={24} />
            My Technical Contributions
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <span className="text-purple-600 font-bold text-xl">1</span>
              <div>
                <h4 className="font-semibold text-gray-800">Requirement Gathering</h4>
                <p className="text-gray-500">Conducted stakeholder interviews and documented functional requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <span className="text-green-600 font-bold text-xl">2</span>
              <div>
                <h4 className="font-semibold text-gray-800">Low-Level Design</h4>
                <p className="text-gray-500">Created LLD for version control, branching, and storage modules</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <span className="text-indigo-600 font-bold text-xl">3</span>
              <div>
                <h4 className="font-semibold text-gray-800">UI/UX Collaboration</h4>
                <p className="text-gray-500">Worked with design team on optimal workflow experiences</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <span className="text-orange-600 font-bold text-xl">4</span>
              <div>
                <h4 className="font-semibold text-gray-800">Deployment Architecture</h4>
                <p className="text-gray-500">Configured Gunicorn workers, Celery workers, Beat scheduler, and service files</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
              <span className="text-pink-600 font-bold text-xl">5</span>
              <div>
                <h4 className="font-semibold text-gray-800">Infrastructure Setup</h4>
                <p className="text-gray-500">Set up Nginx reverse proxy, SSL certificates, and systemd services</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["Django REST 4.2", "Celery 5.3", "Celery Beat", "RabbitMQ 3.12", "PostgreSQL 15", "Redis 7", "MinIO", "FFmpeg 6.0", "React 18", "TypeScript", "Gunicorn", "Nginx", "Systemd", "Let's Encrypt"].map((tech, index) => (
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

export default Project5;
