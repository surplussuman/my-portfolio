import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Code, Database, CheckCircle, TrendingUp, Search, FileText, Zap } from 'lucide-react';

const Project2 = () => {
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
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            Document Intelligence • RAG • NLP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Intelligent Document Analysis & Query System
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="text-green-600" size={20} />
              <span>April 2025 (3 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-purple-600" size={20} />
              <span>10 Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-indigo-600" size={20} />
              <span>AI Architect & Backend Lead</span>
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
          <h2 className="text-2xl font-bold mb-4 text-green-600">Team Composition</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg">3 AI/ML Engineers</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg">3 Backend Engineers</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">2 Frontend Engineers</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg">1 DevOps Engineer</span>
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
            Organizations accumulate vast document repositories—contracts, policies, research papers, technical manuals—that 
            become increasingly difficult to navigate. Traditional keyword search fails to capture semantic meaning, leading to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Information Retrieval Time</h4>
              <p className="text-gray-600">15-30 minutes per query</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Incomplete Answers</h4>
              <p className="text-gray-600">60% of relevant content missed</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Knowledge Silos</h4>
              <p className="text-gray-600">Critical information trapped in unstructured documents</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-600 mb-2">Expert Dependency</h4>
              <p className="text-gray-600">Subject matter experts bottlenecked by repetitive queries</p>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200 text-lg">RAG-powered document intelligence system providing <span className="text-green-600 font-bold">instant, contextually accurate answers</span> with <span className="text-green-600 font-bold">source citations</span></p>
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
            {/* Ingestion Pipeline */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Ingestion Pipeline</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <FileText className="mx-auto text-purple-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Document Upload</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Code className="mx-auto text-green-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Parser (Unstructured)</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Zap className="mx-auto text-amber-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Semantic Chunker</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Database className="mx-auto text-indigo-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Embedder (Ada-002)</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-blue-300 font-semibold mb-2">Supported Formats:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">PDF (native + scanned OCR)</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">DOCX, DOC</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">PPTX</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">TXT, MD</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">HTML</span>
                </div>
              </div>
            </div>

            {/* Query Pipeline */}
            <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">Query Pipeline</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Search className="mx-auto text-green-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Query Input</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Zap className="mx-auto text-amber-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Query Expansion</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <Database className="mx-auto text-purple-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Retriever (Top-20)</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                  <TrendingUp className="mx-auto text-indigo-600 mb-2" size={24} />
                  <p className="text-gray-800 font-semibold text-sm">Reranker (Top-5)</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-green-300">LLAMA 3 70B generates final response with structured JSON citations</p>
              </div>
            </div>

            {/* Conversation Memory */}
            <div className="p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">Conversation Memory</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-indigo-600" />
                  Session-based context window (last 10 exchanges)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-indigo-600" />
                  Entity extraction and tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-indigo-600" />
                  Query reformulation based on history
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-indigo-600" />
                  Redis-backed session storage (TTL: 24 hours)
                </li>
              </ul>
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
                  <th className="text-left py-3 text-gray-500">Configuration</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">LLM</td><td>LLAMA 3 70B</td><td>4-bit quantization, vLLM serving</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Embeddings</td><td>OpenAI Ada-002</td><td>1536 dimensions</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Vector Store</td><td>Pinecone</td><td>Serverless, cosine similarity</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Document Parser</td><td>Unstructured.io</td><td>Multi-format support</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">OCR Engine</td><td>PaddleOCR</td><td>For scanned documents</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Reranker</td><td>BGE-Reranker-Large</td><td>Cross-encoder scoring</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Backend</td><td>Django REST Framework</td><td>Async views enabled</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 font-semibold text-gray-800">Cache</td><td>Redis</td><td>Query result caching</td></tr>
                <tr><td className="py-3 font-semibold text-gray-800">Task Queue</td><td>Celery</td><td>Document processing</td></tr>
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
            RAG Pipeline Implementation
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-3">Document Chunking Strategy</h3>
              <pre className="bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm">
                <code className="text-gray-600">{`class SemanticChunker:
    """
    Semantic-aware document chunking with overlap.
    Preserves paragraph boundaries and semantic coherence.
    """
    
    def __init__(
        self,
        chunk_size: int = 512,
        chunk_overlap: int = 50,
        separators: List[str] = ["\\n\\n", "\\n", ". ", " "]
    ):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.separators = separators
        self.tokenizer = tiktoken.get_encoding("cl100k_base")
    
    def chunk_document(self, text: str) -> List[DocumentChunk]:
        chunks = []
        current_chunk = ""
        current_tokens = 0
        
        paragraphs = self._split_by_separators(text)
        
        for para in paragraphs:
            para_tokens = len(self.tokenizer.encode(para))
            
            if current_tokens + para_tokens <= self.chunk_size:
                current_chunk += para + "\\n"
                current_tokens += para_tokens
            else:
                if current_chunk:
                    chunks.append(self._create_chunk(current_chunk))
                
                # Handle overlap
                overlap_text = self._get_overlap(current_chunk)
                current_chunk = overlap_text + para + "\\n"
                current_tokens = len(self.tokenizer.encode(current_chunk))
        
        if current_chunk:
            chunks.append(self._create_chunk(current_chunk))
        
        return chunks`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">Query Expansion</h3>
              <pre className="bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm">
                <code className="text-gray-600">{`def expand_query(original_query: str) -> List[str]:
    """
    Generate query variations for improved retrieval coverage.
    """
    expansion_prompt = f"""
    Given the query: "{original_query}"
    
    Generate 3 alternative phrasings that capture the same intent:
    1. A more specific version
    2. A more general version
    3. A version using synonyms
    
    Return as JSON array.
    """
    
    variations = llm.generate(expansion_prompt)
    return [original_query] + json.loads(variations)`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Hybrid Retrieval */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Hybrid Retrieval: Dense + Sparse</h2>
          <p className="text-gray-600 mb-4">The system employs hybrid retrieval combining dense vector search with BM25 sparse retrieval:</p>
          
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 mb-6 text-center">
            <p className="text-xl text-gray-800 font-mono">Score<sub>hybrid</sub> = α · Score<sub>dense</sub> + (1 - α) · Score<sub>sparse</sub></p>
            <p className="text-gray-500 mt-2">Where α = 0.7 (tuned via validation set)</p>
          </div>

          <h3 className="text-lg font-semibold text-blue-300 mb-3">Retrieval Performance Comparison:</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-gray-500">Method</th>
                  <th className="text-left py-3 text-gray-500">Recall@10</th>
                  <th className="text-left py-3 text-gray-500">Precision@10</th>
                  <th className="text-left py-3 text-gray-500">MRR</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100"><td className="py-3">Dense Only</td><td>0.82</td><td>0.71</td><td>0.68</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3">Sparse Only (BM25)</td><td>0.74</td><td>0.65</td><td>0.61</td></tr>
                <tr className="font-bold text-green-600"><td className="py-3">Hybrid</td><td>0.91</td><td>0.79</td><td>0.76</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-amber-600 flex items-center gap-2">
            <TrendingUp size={24} />
            Performance Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Retrieval Quality */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Retrieval Quality</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-gray-500">Recall@10</span><span className="text-green-600 font-bold">91.2%</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Precision@10</span><span className="text-green-600 font-bold">79.4%</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Mean Reciprocal Rank</span><span className="text-green-600 font-bold">0.76</span></div>
                <div className="flex justify-between"><span className="text-gray-500">NDCG@10</span><span className="text-green-600 font-bold">0.84</span></div>
              </div>
              <p className="text-gray-500 text-xs mt-3">Industry benchmark: 80-85% recall, 70-75% precision</p>
            </div>

            {/* Answer Quality */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">Answer Quality (Human Eval)</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-gray-500">Accuracy</span><span className="text-purple-600 font-bold">4.6/5</span><span className="text-gray-500 text-xs">89% agree</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Completeness</span><span className="text-purple-600 font-bold">4.3/5</span><span className="text-gray-500 text-xs">84% agree</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Relevance</span><span className="text-purple-600 font-bold">4.7/5</span><span className="text-gray-500 text-xs">92% agree</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Citation Quality</span><span className="text-purple-600 font-bold">4.5/5</span><span className="text-gray-500 text-xs">87% agree</span></div>
              </div>
            </div>

            {/* System Performance */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">System Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-gray-500">Avg Query Latency</span><span className="text-indigo-600 font-bold">1.8s</span></div>
                <div className="flex justify-between"><span className="text-gray-500">P95 Latency</span><span className="text-indigo-600 font-bold">3.2s</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Throughput</span><span className="text-indigo-600 font-bold">50 queries/min</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Ingestion Rate</span><span className="text-indigo-600 font-bold">100 pages/min</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Vector Store</span><span className="text-indigo-600 font-bold">10M+ embeddings</span></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-cyan-600">API Endpoints</h2>
          <pre className="bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm">
            <code className="text-gray-600">{`# Document Upload
POST /api/v1/documents/upload
  - Accepts: PDF, DOCX, TXT, HTML
  - Max Size: 50MB
  - Returns: document_id, processing_status

# Query Endpoint
POST /api/v1/query
  - Body: { "query": string, "session_id": uuid, "top_k": int }
  - Returns: {
      "answer": string,
      "citations": [{ "document": string, "page": int, "excerpt": string }],
      "confidence": float,
      "processing_time_ms": int
    }

# Session History
GET /api/v1/sessions/{session_id}/history
  - Returns: Array of previous Q&A pairs`}</code>
          </pre>
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
                <h4 className="font-semibold text-gray-800">RAG Architecture Design</h4>
                <p className="text-gray-500">Designed end-to-end pipeline from document ingestion to answer generation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <span className="text-green-600 font-bold text-xl">2</span>
              <div>
                <h4 className="font-semibold text-gray-800">Hybrid Retrieval Implementation</h4>
                <p className="text-gray-500">Implemented dense + sparse hybrid search achieving 91.2% recall</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <span className="text-indigo-600 font-bold text-xl">3</span>
              <div>
                <h4 className="font-semibold text-gray-800">Query Expansion System</h4>
                <p className="text-gray-500">Built LLM-powered query expansion improving coverage by 15%</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <span className="text-amber-600 font-bold text-xl">4</span>
              <div>
                <h4 className="font-semibold text-gray-800">Conversation Memory</h4>
                <p className="text-gray-500">Developed session-based context management for multi-turn conversations</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
              <span className="text-pink-600 font-bold text-xl">5</span>
              <div>
                <h4 className="font-semibold text-gray-800">Caching Layer</h4>
                <p className="text-gray-500">Implemented intelligent query caching reducing repeat query latency by 80%</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-600">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">Long document context</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Hierarchical chunking with summaries</p>
              <p className="text-purple-600 text-sm">Impact: +12% accuracy</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">Hallucination prevention</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Citation-forcing prompts + fact verification</p>
              <p className="text-purple-600 text-sm">Impact: -35% hallucinations</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">Slow document processing</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Parallel chunking + batch embeddings</p>
              <p className="text-purple-600 text-sm">Impact: 5x faster ingestion</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-orange-300 font-semibold mb-2">Memory overhead</h4>
              <p className="text-gray-500 text-sm mb-2"><span className="text-green-600">Solution:</span> Streaming response generation</p>
              <p className="text-purple-600 text-sm">Impact: 60% memory reduction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project2;
