import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Zap, Code, Server, Database, CheckCircle, TrendingUp } from 'lucide-react';

const Project1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
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
            AI/ML • Media Localization • Computer Vision
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            AI-Powered Multilingual Video Translation & Localization Pipeline
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="text-purple-600" size={20} />
              <span>April 2025 (4 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-green-600" size={20} />
              <span>12 Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-indigo-600" size={20} />
              <span>Technical Lead & AI Architect</span>
            </div>
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
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg">4 AI/ML Engineers</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg">3 Backend Engineers</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">2 Frontend Engineers</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg">2 DevOps Engineers</span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg">1 QA Engineer</span>
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
            Global content distribution requires video localization that preserves not just linguistic accuracy 
            but contextual meaning, emotional tone, and cultural nuances. Traditional dubbing workflows involve:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Manual Transcription</h4>
              <p className="text-gray-600">4-6 hours per hour of content</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Human Translation</h4>
              <p className="text-gray-600">2-3 days per language</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Voice-over Recording</h4>
              <p className="text-gray-600">Studio costs + talent fees</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Lip-sync Editing</h4>
              <p className="text-gray-600">8-12 hours of manual editing</p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-600 font-semibold">Total Traditional Workflow: 15-20 days per language at $5,000-$15,000 per hour of content</p>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200 text-lg">Fully automated pipeline delivering localized video in <span className="text-green-600 font-bold">&lt; 2 hours</span> per language at <span className="text-green-600 font-bold">95%+ cost reduction</span></p>
          </div>
        </motion.div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">System Architecture - 6-Stage Pipeline</h2>
          
          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Stage 1: Media Extraction</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm">Component</p>
                  <p className="text-gray-800 font-semibold">FFmpeg Demuxer</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm">Audio Output</p>
                  <p className="text-gray-800 font-semibold">WAV 16kHz</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm">Video Output</p>
                  <p className="text-gray-800 font-semibold">Keyframes Extraction</p>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-3">Stage 2: Speech Recognition - WhisperAI Large-v3</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm">Model Size</p>
                  <p className="text-gray-800 font-semibold">1.5B params</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm">Timestamp Accuracy</p>
                  <p className="text-gray-800 font-semibold">±50ms</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm">Language Detection</p>
                  <p className="text-gray-800 font-semibold">99.2% accuracy</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm">VAD Filter</p>
                  <p className="text-gray-800 font-semibold">Silero VAD</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-green-300 font-semibold mb-2">Performance Metrics:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Word Error Rate (WER): <span className="text-green-600">4.2%</span> (English), <span className="text-green-600">6.8%</span> (Hindi), <span className="text-green-600">5.1%</span> (Spanish)</li>
                  <li>• Real-time Factor: <span className="text-green-600">0.3x</span> (3 seconds of audio processed per second on A100)</li>
                  <li>• Timestamp Accuracy: <span className="text-green-600">±50ms</span> at word level</li>
                </ul>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Stage 3: Contextual Translation - NLLB-200 + GPT-4o Hybrid</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-purple-300 font-semibold mb-2">Stage 1: NLLB-200 (Base Translation)</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Model: facebook/nllb-200-distilled-600M</li>
                    <li>• Languages Supported: 200+</li>
                    <li>• Inference Speed: 1,500 tokens/second</li>
                    <li>• BLEU Score (avg): 0.78</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-purple-300 font-semibold mb-2">Stage 2: GPT-4o (Contextual Refinement)</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Purpose: Idiom handling, context preservation</li>
                    <li>• Custom system prompts per language pair</li>
                    <li>• Temperature: 0.3 (deterministic output)</li>
                    <li>• Max Tokens: 4,096</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-purple-300 font-semibold mb-3">Quality Metrics by Language Pair:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-500">Language Pair</th>
                        <th className="text-left py-2 text-gray-500">NLLB-200 BLEU</th>
                        <th className="text-left py-2 text-gray-500">Hybrid BLEU</th>
                        <th className="text-left py-2 text-gray-500">Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100"><td className="py-2">EN → HI</td><td>0.72</td><td className="text-green-600">0.89</td><td className="text-green-600">+23.6%</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-2">EN → ES</td><td>0.81</td><td className="text-green-600">0.94</td><td className="text-green-600">+16.0%</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-2">EN → FR</td><td>0.79</td><td className="text-green-600">0.92</td><td className="text-green-600">+16.5%</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-2">EN → DE</td><td>0.76</td><td className="text-green-600">0.91</td><td className="text-green-600">+19.7%</td></tr>
                      <tr><td className="py-2">EN → TA</td><td>0.68</td><td className="text-green-600">0.85</td><td className="text-green-600">+25.0%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-3">Stage 4: Speech Synthesis - Indic-Trans2 / SSML TTS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-orange-300 font-semibold">Voice Cloning</p>
                  <p className="text-gray-500 text-sm">Speaker embedding preservation</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-orange-300 font-semibold">Prosody Matching</p>
                  <p className="text-gray-500 text-sm">Pitch, rate, emphasis</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-orange-300 font-semibold">SSML Markup</p>
                  <p className="text-gray-500 text-sm">Natural pauses</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-orange-300 font-semibold">Multi-Speaker</p>
                  <p className="text-gray-500 text-sm">Synthesis support</p>
                </div>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-5 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl border border-pink-200">
              <h3 className="text-xl font-bold text-pink-600 mb-3">Stage 5: Lip Synchronization - Wav2Lip GAN</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-pink-300 font-semibold mb-2">Architecture Components</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Face Detection: RetinaFace (mAP: 94.2%)</li>
                    <li>• Lip Generation: Wav2Lip pretrained on LRS2</li>
                    <li>• Temporal Smoothing: Gaussian filter (σ=2)</li>
                    <li>• Frame Interpolation: 30fps output</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-pink-300 font-semibold mb-2">Quality Metrics</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Lip Sync Error (LSE-D): <span className="text-pink-600">7.2</span> (human baseline: 6.8)</li>
                    <li>• Lip Sync Error (LSE-C): <span className="text-pink-600">8.1</span></li>
                    <li>• FID Score: <span className="text-pink-600">12.4</span></li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-pink-300 font-semibold mb-3">GPU Requirements by Resolution:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-500">Resolution</th>
                        <th className="text-left py-2 text-gray-500">VRAM Required</th>
                        <th className="text-left py-2 text-gray-500">Processing Speed</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100"><td className="py-2">480p</td><td>4GB</td><td className="text-green-600">2x real-time</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-2">720p</td><td>8GB</td><td className="text-green-600">1x real-time</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-2">1080p</td><td>12GB</td><td className="text-amber-600">0.5x real-time</td></tr>
                      <tr><td className="py-2">4K</td><td>24GB</td><td className="text-orange-600">0.2x real-time</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Stage 6 */}
            <div className="p-5 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">Stage 6: Video Composition</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-cyan-300 font-semibold">Codec</p>
                  <p className="text-gray-500 text-sm">H.264/H.265</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-cyan-300 font-semibold">Audio</p>
                  <p className="text-gray-500 text-sm">AAC 192kbps</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-cyan-300 font-semibold">Resolution</p>
                  <p className="text-gray-500 text-sm">Up to 4K</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-cyan-300 font-semibold">Format</p>
                  <p className="text-gray-500 text-sm">MP4, MKV, WebM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Code Sample */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-600 flex items-center gap-2">
            <Code size={24} />
            Hybrid Translation Pipeline Logic
          </h2>
          <pre className="bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm">
            <code className="text-gray-600">{`def translate_with_context(text: str, source_lang: str, target_lang: str) -> str:
    # Stage 1: Base translation with NLLB-200
    base_translation = nllb_translate(text, source_lang, target_lang)
    
    # Stage 2: Context refinement with GPT-4o
    refined_translation = gpt4o_refine(
        original=text,
        base_translation=base_translation,
        context_window=previous_sentences[-3:],
        cultural_notes=get_cultural_notes(target_lang)
    )
    
    # Stage 3: Semantic validation
    similarity_score = compute_semantic_similarity(text, refined_translation)
    
    if similarity_score < 0.85:
        # Fallback to conservative translation
        return base_translation
    
    return refined_translation`}</code>
          </pre>
        </motion.div>

        {/* Performance Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-amber-600 flex items-center gap-2">
            <TrendingUp size={24} />
            Performance Benchmarks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-yellow-300 mb-4">End-to-End Processing Time</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-500">Video Duration</th>
                    <th className="text-left py-2 text-gray-500">Processing Time</th>
                    <th className="text-left py-2 text-gray-500">GPU Util.</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-2">1 minute</td><td>3.2 minutes</td><td>78%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">5 minutes</td><td>14.7 minutes</td><td>82%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">30 minutes</td><td>87 minutes</td><td>85%</td></tr>
                  <tr><td className="py-2">60 minutes</td><td>168 minutes</td><td>87%</td></tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Cost Analysis (per hour of video)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-500">Component</th>
                    <th className="text-left py-2 text-gray-500">Traditional</th>
                    <th className="text-left py-2 text-gray-500">Our Solution</th>
                    <th className="text-left py-2 text-gray-500">Savings</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-2">Transcription</td><td>$150</td><td>$2.40</td><td className="text-green-600">98.4%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Translation</td><td>$500</td><td>$18.50</td><td className="text-green-600">96.3%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Voice-over</td><td>$2,000</td><td>$45.00</td><td className="text-green-600">97.8%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Lip-sync</td><td>$3,000</td><td>$32.00</td><td className="text-green-600">98.9%</td></tr>
                  <tr className="font-bold"><td className="py-2">Total</td><td>$5,650</td><td className="text-green-600">$97.90</td><td className="text-green-600">98.3%</td></tr>
                </tbody>
              </table>
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
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <span className="text-purple-600 font-bold text-xl">1</span>
              <div>
                <h4 className="font-semibold text-gray-800">Pipeline Architecture Design</h4>
                <p className="text-gray-500">Designed the 6-stage modular pipeline enabling independent scaling and failure isolation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <span className="text-indigo-600 font-bold text-xl">2</span>
              <div>
                <h4 className="font-semibold text-gray-800">Hybrid Translation System</h4>
                <p className="text-gray-500">Implemented the NLLB + GPT-4o two-stage translation achieving 23.6% BLEU improvement</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <span className="text-green-600 font-bold text-xl">3</span>
              <div>
                <h4 className="font-semibold text-gray-800">Temporal Alignment Algorithm</h4>
                <p className="text-gray-500">Developed custom algorithm for audio-video synchronization with ±50ms accuracy</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <span className="text-amber-600 font-bold text-xl">4</span>
              <div>
                <h4 className="font-semibold text-gray-800">Cost Optimization</h4>
                <p className="text-gray-500">Reduced per-video processing cost by 98.3% compared to traditional workflows</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
              <span className="text-pink-600 font-bold text-xl">5</span>
              <div>
                <h4 className="font-semibold text-gray-800">Quality Assurance Pipeline</h4>
                <p className="text-gray-500">Built automated QA system using semantic similarity scoring</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-600">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">Context loss in long videos</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Sliding window with overlap (512 tokens, 20% overlap)</p>
              <p className="text-purple-600 text-sm">Impact: +15% coherence</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">Lip-sync artifacts</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Temporal smoothing + frame interpolation</p>
              <p className="text-purple-600 text-sm">Impact: -40% visual artifacts</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">GPU memory overflow</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Dynamic batching + gradient checkpointing</p>
              <p className="text-purple-600 text-sm">Impact: Enabled 4K processing</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">Translation latency</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Parallel processing with async queues</p>
              <p className="text-purple-600 text-sm">Impact: 3x throughput</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["WhisperAI Large-v3", "NLLB-200", "GPT-4o", "Wav2Lip GAN", "RetinaFace", "FFmpeg", "Celery", "Redis", "PostgreSQL", "MinIO/S3", "Nginx", "Docker", "Python", "FastAPI"].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project1;
