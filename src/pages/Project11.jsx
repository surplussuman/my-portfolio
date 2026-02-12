import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Brain, CheckCircle, TrendingUp, Cloud, Database, Zap, Award, Cpu, Network } from 'lucide-react';

const Project11 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-block px-4 py-2 bg-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            Cloud AI • Multi-Agent Systems • LangGraph • Enterprise Decision Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Parjanya: Multi-Cloud AI Decision Support System
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2"><Calendar className="text-violet-400" size={20} /><span>January 2026 - Present (Ongoing)</span></div>
            <div className="flex items-center gap-2"><Users className="text-indigo-600" size={20} /><span>15 Engineers</span></div>
            <div className="flex items-center gap-2"><Target className="text-fuchsia-400" size={20} /><span>Lead AI Architect & System Designer</span></div>
            <div className="flex items-center gap-2"><Award className="text-pink-600" size={20} /><span>Enterprise Cloud Migration</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-violet-500/20 rounded-xl border border-violet-500/30 text-center">
            <p className="text-3xl font-bold text-violet-400">500+</p>
            <p className="text-gray-500 text-sm">Servers Processed</p>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-600">5×</p>
            <p className="text-gray-500 text-sm">Processing Speed</p>
          </div>
          <div className="p-4 bg-fuchsia-500/20 rounded-xl border border-fuchsia-500/30 text-center">
            <p className="text-3xl font-bold text-fuchsia-400">99.7%</p>
            <p className="text-gray-500 text-sm">Decision Accuracy</p>
          </div>
          <div className="p-4 bg-pink-500/20 rounded-xl border border-pink-500/30 text-center">
            <p className="text-3xl font-bold text-pink-600">$10M+</p>
            <p className="text-gray-500 text-sm">Migration Decisions</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">🎯 The Challenge</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Enterprise cloud migration decisions involve analyzing complex Bill of Materials (BoM) files from cloud cost exports, comparing hyperscalers (AWS, Azure, GCP), and making strategic recommendations worth millions of dollars. Traditional approaches relied on manual analysis taking weeks and prone to human error.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">❌ Before Parjanya</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Manual analysis: 2-3 weeks per migration</li>
                  <li>• Human error rate: 15-20% in cost calculations</li>
                  <li>• Limited hyperscaler comparison</li>
                  <li>• No real-time pricing or incentives</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">✅ With Parjanya</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• AI-powered analysis: 10-60 minutes</li>
                  <li>• 99.7% accuracy with peer verification</li>
                  <li>• Real-time comparison across 3 hyperscalers</li>
                  <li>• Automated incentive calculations</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">💡 The Solution</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Built <strong>Parjanya</strong> - a production-ready, AI-powered multi-cloud decision support platform using a sophisticated <strong>LangGraph multi-agent orchestration system</strong>. The platform implements a "Private Perplexity" approach with curated hyperscaler intelligence.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-violet-600">🏗️ Four-Engine Architecture</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-violet-50 rounded-lg border border-violet-200">
                    <div className="font-medium text-violet-800">Engine 1: Multi-Modal Ingestion</div>
                    <div className="text-sm text-violet-600">Intelligent parsing of BoM files with AI-powered column semantics</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="font-medium text-purple-800">Engine 2: Commercial Calculator</div>
                    <div className="text-sm text-purple-600">Real-time pricing across AWS, Azure, GCP with incentive calculations</div>
                  </div>
                  <div className="p-3 bg-fuchsia-50 rounded-lg border border-fuchsia-200">
                    <div className="font-medium text-fuchsia-800">Engine 3: OEM Program Brain</div>
                    <div className="text-sm text-fuchsia-600">RAG-powered hyperscaler intelligence with daily knowledge refresh</div>
                  </div>
                  <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="font-medium text-pink-800">Engine 4: Recommendation Engine</div>
                    <div className="text-sm text-pink-600">Strategic decision support with executive-ready narratives</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">🤖 Agent-First Design</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                    <div className="font-medium text-indigo-800">ETVX Pattern</div>
                    <div className="text-sm text-indigo-600">Entry-Task-Validation-Exit for auditability</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="font-medium text-blue-800">Peer Verification</div>
                    <div className="text-sm text-blue-600">Independent AI cross-checking for trust</div>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                    <div className="font-medium text-cyan-800">Stateful Orchestration</div>
                    <div className="text-sm text-cyan-600">LangGraph workflows for complex decision trees</div>
                  </div>
                  <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="font-medium text-teal-800">Parallel Processing</div>
                    <div className="text-sm text-teal-600">Simultaneous API calls across hyperscalers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📊 Business Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">93%</div>
              <div className="text-gray-600 mb-4">Time Reduction</div>
              <div className="text-sm text-gray-500">From 2-3 weeks to 10-60 minutes</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.7%</div>
              <div className="text-gray-600 mb-4">Decision Accuracy</div>
              <div className="text-sm text-gray-500">With ETVX verification pattern</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
              <div className="text-3xl font-bold text-fuchsia-400 mb-2">$10M+</div>
              <div className="text-gray-600 mb-4">Migration Value</div>
              <div className="text-sm text-gray-500">Enterprise-scale decisions supported</div>
            </div>
          </div>

          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Performance Optimization Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">🚀 Processing Speed</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>5× speedup:</strong> 83 minutes → 16.7 minutes for 500 servers</li>
                  <li>• <strong>Parallel batching:</strong> 10 servers processed simultaneously</li>
                  <li>• <strong>ThreadPoolExecutor:</strong> Optimized concurrent API calls</li>
                  <li>• <strong>Real-time streaming:</strong> SSE for live progress updates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">⚡ Scalability Features</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Extended timeouts:</strong> 4-hour processing windows</li>
                  <li>• <strong>JWT optimization:</strong> 24-hour session tokens</li>
                  <li>• <strong>Gunicorn tuning:</strong> 3 workers for better concurrency</li>
                  <li>• <strong>Nginx optimization:</strong> Disabled buffering for SSE</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">🛠️ Technical Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-semibold mb-4 text-violet-600 flex items-center gap-2">
                <Brain className="text-violet-400" size={20} />
                LangGraph Multi-Agent Orchestration
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complex stateful workflows enabling deterministic, auditable decision-making for mission-critical migrations.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Stateful agent communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Conditional routing logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Human-in-the-loop capabilities</span>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-semibold mb-4 text-indigo-600 flex items-center gap-2">
                <Network className="text-indigo-400" size={20} />
                ETVX Verification Pattern
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Every AI decision follows Entry-Task-Validation-Exit pattern for complete auditability and trust.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Independent peer verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Confidence score quantification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Complete decision trail</span>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-semibold mb-4 text-fuchsia-600 flex items-center gap-2">
                <Cloud className="text-fuchsia-400" size={20} />
                Private Perplexity Intelligence
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Curated hyperscaler knowledge system with daily refresh from official sources only.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Official documentation only</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Daily knowledge ingestion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Compliance-focused accuracy</span>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-semibold mb-4 text-pink-600 flex items-center gap-2">
                <Zap className="text-pink-400" size={20} />
                Parallel Hyperscaler Processing
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Simultaneous API calls across AWS, Azure, GCP for sub-second comparative analysis.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Real-time pricing comparison</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Incentive calculation automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>3-year TCO projections</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">🏗️ System Architecture</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6">
              <pre>{`┌─────────────────────────────────────────────────────────────────────────┐
│                          PARJANYA PLATFORM                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────┐  ┌──────────────────┐  ┌─────────────────────┐     │
│  │   Frontend      │  │   LangGraph      │  │   Knowledge Base     │     │
│  │   (React)       │◄►│   Orchestrator   │◄►│   (RAG System)       │     │
│  │                 │  │   (Agents)       │  │                     │     │
│  └─────────────────┘  └──────────────────┘  └─────────────────────┘     │
│           │               │                        │                    │
│           ▼               ▼                        ▼                    │
│  ┌─────────────────┐  ┌─────┐  ┌────────────┐  ┌─────┐                 │
│  │   Wizard UI     │  │ SSE │  │ PostgreSQL │  │ S3  │                 │
│  │   (4 Stages)    │  │     │  │ (Core DB)  │  │     │                 │
│  └─────────────────┘  └─────┘  └────────────┘  └─────┘                 │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐     │
│  │                    EXTERNAL CLOUD PROVIDERS                     │     │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐ │     │
│  │  │  AWS    │  │  Azure  │  │  GCP    │  │ Oracle  │  │  IBM    │ │     │
│  │  │ Pricing │  │ Pricing │  │ Pricing │  │ Pricing │  │ Pricing │ │     │
│  │  │   API   │  │   API   │  │   API   │  │   API   │  │   API   │ │     │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘ │     │
│  └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘`}</pre>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-violet-600">Technology Stack</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frontend:</span>
                    <span className="font-medium">React 18, Tailwind CSS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Agent Framework:</span>
                    <span className="font-medium">LangGraph 0.0.40+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LLMs:</span>
                    <span className="font-medium">GPT-4 + Gemini Pro</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Database:</span>
                    <span className="font-medium">PostgreSQL + ChromaDB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Backend:</span>
                    <span className="font-medium">Django REST Framework</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-indigo-600">Key Features</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>Multi-agent orchestration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>Real-time pricing APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>ETVX verification pattern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>Server-Sent Events streaming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>Parallel hyperscaler processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">🚀 Real-World Usage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
              <div className="text-2xl font-bold text-violet-400 mb-2">Enterprise</div>
              <div className="text-gray-600 text-sm">Cloud migration consulting firms</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">Fortune 500</div>
              <div className="text-gray-600 text-sm">Companies making $10M+ migration decisions</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
              <div className="text-2xl font-bold text-fuchsia-400 mb-2">MSPs</div>
              <div className="text-gray-600 text-sm">Managed service providers</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 text-white px-8 py-4 rounded-full font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Project11;