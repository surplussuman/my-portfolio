import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Code, Database, CheckCircle, TrendingUp, Monitor, Shield, Zap, BarChart3 } from 'lucide-react';

const Project3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            Computer Vision • OCR • EdTech
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Smart Exam Evaluation System (OMR/OCR Automation)
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="text-indigo-600" size={20} />
              <span>May - June 2025 (8 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-pink-600" size={20} />
              <span>18 Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-red-600" size={20} />
              <span>Technical Lead & ML Engineer</span>
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
          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
            <p className="text-3xl font-bold text-indigo-600">160+</p>
            <p className="text-gray-500 text-sm">Centers Deployed</p>
          </div>
          <div className="p-4 bg-pink-500/20 rounded-xl border border-pink-500/30 text-center">
            <p className="text-3xl font-bold text-pink-600">50,000+</p>
            <p className="text-gray-500 text-sm">Monthly Evaluations</p>
          </div>
          <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30 text-center">
            <p className="text-3xl font-bold text-green-600">98.7%</p>
            <p className="text-gray-500 text-sm">Accuracy Rate</p>
          </div>
          <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30 text-center">
            <p className="text-3xl font-bold text-purple-600">224x</p>
            <p className="text-gray-500 text-sm">Faster Processing</p>
          </div>
        </motion.div>

        {/* Team Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Team Composition</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg">5 AI/ML Engineers</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg">4 Backend Engineers</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">3 Frontend Engineers</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg">3 DevOps Engineers</span>
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
            India's examination ecosystem processes millions of answer sheets annually. Traditional manual evaluation faces critical challenges:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Time Consumption</h4>
              <p className="text-gray-600 text-sm">3-5 minutes per OMR sheet, 8-15 minutes per subjective answer sheet</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Human Error Rate</h4>
              <p className="text-gray-600 text-sm">2-4% in bubble detection, 5-8% in score calculation</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Logistics Overhead</h4>
              <p className="text-gray-600 text-sm">Physical transportation, storage, and security costs</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Result Delays</h4>
              <p className="text-gray-600 text-sm">15-30 days for large-scale examinations</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Scalability Bottleneck</h4>
              <p className="text-gray-600 text-sm">Limited by evaluator availability</p>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200 text-lg">AI-powered evaluation system achieving <span className="text-green-600 font-bold">98.7% accuracy</span> with <span className="text-green-600 font-bold">90% time reduction</span>, deployed across <span className="text-green-600 font-bold">160+ examination centers</span> nationwide</p>
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
            {/* Scanning Module */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Scanning Module</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-gray-800 font-semibold">Scanner Interface</p>
                  <p className="text-gray-500 text-sm">TWAIN Protocol</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-gray-800 font-semibold">Image Preprocessing</p>
                  <p className="text-gray-500 text-sm">OpenCV Pipeline</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-gray-800 font-semibold">Queue Manager</p>
                  <p className="text-gray-500 text-sm">Redis</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-blue-300 font-semibold mb-2">Image Preprocessing Pipeline:</h4>
                <ol className="space-y-1 text-gray-600 text-sm">
                  <li>1. Deskewing (Hough Transform, ±5° correction)</li>
                  <li>2. Noise Reduction (Gaussian Blur, σ=1.5)</li>
                  <li>3. Binarization (Adaptive Otsu Thresholding)</li>
                  <li>4. Normalization (300 DPI standard)</li>
                </ol>
              </div>
            </div>

            {/* OMR Detection Engine */}
            <div className="p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">OMR Detection Engine</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-purple-300 font-semibold mb-2">Template-Based Architecture</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Corner markers (ArUco/QR anchors)</li>
                    <li>• Grid coordinates (JSON schema)</li>
                    <li>• Answer key mapping</li>
                    <li>• Scoring rules (negative marking, partial credit)</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-purple-300 font-semibold mb-2">Custom Deep Learning Model</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Architecture: Modified ResNet-18 + Spatial Attention</li>
                    <li>• Classes: [Empty, Filled, Multiple, Invalid]</li>
                    <li>• Accuracy: <span className="text-green-600">99.2%</span> on validation set</li>
                    <li>• Inference: <span className="text-green-600">2.3ms</span> per bubble (batch=32)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OCR Processing Engine */}
            <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">OCR Processing Engine - Handwriting Recognition</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-green-300 font-semibold mb-2">Recognition Pipeline</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Primary Engine: PaddleOCR (PP-OCRv4)</li>
                    <li>• Secondary: Tesseract 5.0 (fallback)</li>
                    <li>• Custom Model: Fine-tuned for Indian handwriting</li>
                    <li>• Text Detection: DBNet++</li>
                    <li>• Text Recognition: SVTR-LCNet</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-green-300 font-semibold mb-2">Accuracy Metrics</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Printed Text: <span className="text-green-600">99.1%</span></li>
                    <li>• Handwritten (clear): <span className="text-green-600">94.7%</span></li>
                    <li>• Handwritten (cursive): <span className="text-amber-600">87.3%</span></li>
                    <li>• Numerical: <span className="text-green-600">98.4%</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scoring & Analytics */}
            <div className="p-5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Scoring & Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-orange-300 font-semibold mb-2">Scoring Features</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Configurable marking schemes (+4, -1, partial credit)</li>
                    <li>• Section-wise scoring</li>
                    <li>• Grace marks automation</li>
                    <li>• Statistical analysis (mean, median, percentile)</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-orange-300 font-semibold mb-2">Real-time Dashboard</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Live processing status across centers</li>
                    <li>• Geographic heat maps</li>
                    <li>• Performance analytics</li>
                    <li>• Anomaly detection alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
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
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Computer Vision</td><td>OpenCV 4.8</td><td>Image preprocessing, contour detection</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Deep Learning</td><td>PyTorch 2.0</td><td>Custom bubble detection model</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">OCR Engine</td><td>PaddleOCR v4</td><td>Text recognition</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Template Engine</td><td>Custom JSON Schema</td><td>OMR template definitions</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Backend</td><td>Django REST Framework</td><td>API layer</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Frontend</td><td>React + Chart.js</td><td>Dashboard interface</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Database</td><td>PostgreSQL 15</td><td>Exam data, results</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Cache</td><td>Redis 7</td><td>Real-time status</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Task Queue</td><td>Celery + RabbitMQ</td><td>Async processing</td></tr>
                <tr><td className="py-3 font-semibold text-gray-800">Server</td><td>Uvicorn + Nginx</td><td>Production serving</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Code Samples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-600 flex items-center gap-2">
            <Code size={24} />
            Neural Network Architecture
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">Bubble Classifier - Modified ResNet-18 + Spatial Attention</h3>
              <pre className="bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm">
                <code className="text-gray-600">{`class BubbleClassifier(nn.Module):
    """
    Custom CNN for bubble state classification.
    Modified ResNet-18 with spatial attention.
    """
    
    def __init__(self, num_classes: int = 4):
        super().__init__()
        
        # Load pretrained ResNet-18 backbone
        resnet = models.resnet18(pretrained=True)
        
        # Remove final FC layer
        self.features = nn.Sequential(*list(resnet.children())[:-2])
        
        # Spatial attention module
        self.attention = SpatialAttention(in_channels=512)
        
        # Classification head
        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d(1),
            nn.Flatten(),
            nn.Dropout(0.3),
            nn.Linear(512, 128),
            nn.ReLU(inplace=True),
            nn.Dropout(0.2),
            nn.Linear(128, num_classes)
        )
        
        # Classes: Empty, Filled, Multiple, Invalid
        self.class_names = ["empty", "filled", "multiple", "invalid"]
    
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        features = self.features(x)
        attended = self.attention(features)
        output = self.classifier(attended)
        return output


class SpatialAttention(nn.Module):
    """Spatial attention for focusing on bubble region."""
    
    def __init__(self, in_channels: int):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(in_channels, in_channels // 8, 1),
            nn.ReLU(inplace=True),
            nn.Conv2d(in_channels // 8, 1, 1),
            nn.Sigmoid()
        )
    
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        attention_map = self.conv(x)
        return x * attention_map`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Model Training & Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-amber-600 flex items-center gap-2">
            <BarChart3 size={24} />
            Model Training & Performance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Dataset Composition */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">Dataset Composition</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-500">Category</th>
                    <th className="text-left py-2 text-gray-500">Training</th>
                    <th className="text-left py-2 text-gray-500">Val</th>
                    <th className="text-left py-2 text-gray-500">Test</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-2">Empty Bubbles</td><td>45,000</td><td>5,000</td><td>5,000</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Filled Bubbles</td><td>48,000</td><td>5,500</td><td>5,500</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Multiple Marks</td><td>12,000</td><td>1,500</td><td>1,500</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Invalid/Damaged</td><td>8,000</td><td>1,000</td><td>1,000</td></tr>
                  <tr className="font-bold"><td className="py-2">Total</td><td>113,000</td><td>13,000</td><td>13,000</td></tr>
                </tbody>
              </table>
            </div>

            {/* Training Configuration */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Training Configuration</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Optimizer</span><span className="text-gray-800">AdamW</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Learning Rate</span><span className="text-gray-800">1e-4 (cosine decay)</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Batch Size</span><span className="text-gray-800">64</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Epochs</span><span className="text-gray-800">50</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Early Stopping</span><span className="text-gray-800">Patience = 7</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Data Augmentation</span><span className="text-gray-800">Rotation, Brightness, Noise</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Loss Function</span><span className="text-gray-800">Cross-Entropy (weighted)</span></div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">Overall Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-gray-500">Overall Accuracy</span><span className="text-green-600 font-bold text-lg">99.2%</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Precision (macro)</span><span className="text-green-600 font-bold">98.7%</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Recall (macro)</span><span className="text-green-600 font-bold">98.4%</span></div>
                <div className="flex justify-between"><span className="text-gray-500">F1-Score (macro)</span><span className="text-green-600 font-bold">98.5%</span></div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-orange-300 mb-4">Per-Class Performance</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-500">Class</th>
                    <th className="text-left py-2 text-gray-500">Prec</th>
                    <th className="text-left py-2 text-gray-500">Recall</th>
                    <th className="text-left py-2 text-gray-500">F1</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-2">Empty</td><td className="text-green-600">99.5%</td><td className="text-green-600">99.7%</td><td className="text-green-600">99.6%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Filled</td><td className="text-green-600">99.3%</td><td className="text-green-600">99.1%</td><td className="text-green-600">99.2%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Multiple</td><td className="text-amber-600">97.8%</td><td className="text-amber-600">96.9%</td><td className="text-amber-600">97.3%</td></tr>
                  <tr><td className="py-2">Invalid</td><td className="text-amber-600">96.2%</td><td className="text-amber-600">95.8%</td><td className="text-amber-600">96.0%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* System Performance Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <TrendingUp size={24} />
            System Performance Benchmarks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Processing Speed</h3>
              <div className="space-y-3 text-sm">
                <div><span className="text-gray-500">OMR (100 bubbles):</span> <span className="text-green-600">1.2s</span> → 3,000/hr</div>
                <div><span className="text-gray-500">OMR (200 bubbles):</span> <span className="text-green-600">2.1s</span> → 1,700/hr</div>
                <div><span className="text-gray-500">OCR (5 questions):</span> <span className="text-amber-600">4.5s</span> → 800/hr</div>
                <div><span className="text-gray-500">Hybrid (OMR + OCR):</span> <span className="text-amber-600">5.8s</span> → 620/hr</div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">Accuracy Comparison</h3>
              <div className="space-y-3 text-sm">
                <div><span className="text-gray-500">Manual Evaluation:</span> <span className="text-amber-600">96.2%</span> (4.5 min)</div>
                <div><span className="text-gray-500">Basic CV (OpenCV):</span> <span className="text-amber-600">92.8%</span> (1.8s)</div>
                <div><span className="text-gray-500">Our System:</span> <span className="text-green-600 font-bold">98.7%</span> (1.2s)</div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-orange-300 mb-4">Time Savings</h3>
              <div className="space-y-3 text-sm">
                <div><span className="text-gray-500">1000 sheets (Manual):</span> <span className="text-red-600">75 hours</span></div>
                <div><span className="text-gray-500">1000 sheets (Auto):</span> <span className="text-green-600">0.33 hours</span></div>
                <div><span className="text-gray-500">Daily capacity (8hr):</span> <span className="text-green-600">24,000 sheets</span></div>
                <div><span className="text-gray-500">Improvement:</span> <span className="text-green-600 font-bold">224x faster</span></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-2">
            <Shield size={24} />
            Security & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-red-300 font-semibold mb-2">Data Encryption</h4>
              <p className="text-gray-500 text-sm">AES-256 at rest, TLS 1.3 in transit</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-red-300 font-semibold mb-2">Access Control</h4>
              <p className="text-gray-500 text-sm">Role-based (Admin, Evaluator, Viewer)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-red-300 font-semibold mb-2">Audit Logging</h4>
              <p className="text-gray-500 text-sm">Complete action trail with timestamps</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-red-300 font-semibold mb-2">Data Retention</h4>
              <p className="text-gray-500 text-sm">7 years (regulatory compliance)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-red-300 font-semibold mb-2">Backup</h4>
              <p className="text-gray-500 text-sm">Hourly incremental, daily full</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-red-300 font-semibold mb-2">Disaster Recovery</h4>
              <p className="text-gray-500 text-sm">Cross-region replication</p>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/30"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-600 flex items-center gap-2">
            <TrendingUp size={24} />
            Impact Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-green-600">160+</p>
              <p className="text-gray-500 text-sm">Centers Deployed</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-purple-600">50,000+</p>
              <p className="text-gray-500 text-sm">Monthly Evaluations</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-indigo-600">90%</p>
              <p className="text-gray-500 text-sm">Time Reduction</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-amber-600">₹15L</p>
              <p className="text-gray-500 text-sm">Monthly Cost Savings</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-pink-600">66%</p>
              <p className="text-gray-500 text-sm">Error Reduction</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-cyan-600">224x</p>
              <p className="text-gray-500 text-sm">Faster Processing</p>
            </div>
          </div>
        </motion.div>

        {/* My Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
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
                <h4 className="font-semibold text-gray-800">Template Architecture</h4>
                <p className="text-gray-500">Designed the JSON-based template system enabling quick onboarding of new exam formats</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <span className="text-indigo-600 font-bold text-xl">2</span>
              <div>
                <h4 className="font-semibold text-gray-800">Deep Learning Model</h4>
                <p className="text-gray-500">Developed custom ResNet-18 + Spatial Attention model achieving 99.2% accuracy</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <span className="text-green-600 font-bold text-xl">3</span>
              <div>
                <h4 className="font-semibold text-gray-800">Real-time Dashboard</h4>
                <p className="text-gray-500">Architected WebSocket-based dashboard for nationwide monitoring</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <span className="text-amber-600 font-bold text-xl">4</span>
              <div>
                <h4 className="font-semibold text-gray-800">Deployment Pipeline</h4>
                <p className="text-gray-500">Configured Uvicorn workers, Nginx reverse proxy, and SSL for production</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
              <span className="text-pink-600 font-bold text-xl">5</span>
              <div>
                <h4 className="font-semibold text-gray-800">Performance Optimization</h4>
                <p className="text-gray-500">Implemented batch processing reducing per-sheet time from 4.5s to 1.2s</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["PyTorch 2.0", "OpenCV 4.8", "PaddleOCR v4", "ResNet-18", "Spatial Attention", "Django REST", "React", "Chart.js", "PostgreSQL 15", "Redis 7", "Celery", "RabbitMQ", "Uvicorn", "Nginx", "Docker", "InfluxDB", "Grafana"].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project3;
