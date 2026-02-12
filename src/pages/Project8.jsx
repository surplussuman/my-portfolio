import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, Shield, CheckCircle, TrendingUp, Zap, Database, Brain } from 'lucide-react';

const Project8 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-red-600 hover:text-red-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full text-red-600 text-sm font-medium mb-4">
            Digital Rights • Content Intelligence • NLP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            AI Copyright Detection Engine (Context Matching)
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2"><Calendar className="text-red-600" size={20} /><span>October 2025 (4 weeks)</span></div>
            <div className="flex items-center gap-2"><Users className="text-orange-600" size={20} /><span>10 Engineers</span></div>
            <div className="flex items-center gap-2"><Target className="text-amber-600" size={20} /><span>AI Architect & NLP Lead</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-red-500/20 rounded-xl border border-red-500/30 text-center">
            <p className="text-3xl font-bold text-red-600">94.7%</p>
            <p className="text-gray-500 text-sm">Detection Precision</p>
          </div>
          <div className="p-4 bg-orange-500/20 rounded-xl border border-orange-500/30 text-center">
            <p className="text-3xl font-bold text-orange-600">91.2%</p>
            <p className="text-gray-500 text-sm">Detection Recall</p>
          </div>
          <div className="p-4 bg-yellow-500/20 rounded-xl border border-yellow-500/30 text-center">
            <p className="text-3xl font-bold text-amber-600">3.2%</p>
            <p className="text-gray-500 text-sm">False Positive Rate</p>
          </div>
          <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30 text-center">
            <p className="text-3xl font-bold text-green-600">10M+</p>
            <p className="text-gray-500 text-sm">Indexed Segments</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center gap-2">
            <Shield size={24} />
            Business Problem Statement
          </h2>
          <p className="text-gray-600 mb-4">Video content platforms face significant copyright challenges:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Scale", desc: "Millions of videos uploaded daily" },
              { title: "Detection Difficulty", desc: "Visual similarity alone is insufficient" },
              { title: "Context Sensitivity", desc: "Same footage may be licensed vs. infringing" },
              { title: "False Positives", desc: "Legitimate fair use flagged incorrectly" },
              { title: "Processing Cost", desc: "Frame-by-frame analysis is prohibitively expensive" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h4 className="font-semibold text-red-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-600 text-xl mb-2">Our Solution</h4>
            <p className="text-gray-200">Transcript-based semantic matching with AI-powered reasoning for accurate copyright detection with minimal false positives</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-orange-600">System Architecture</h2>
          <pre className="text-xs text-gray-600 overflow-x-auto bg-gray-900/50 p-4 rounded-xl mb-6">
{`┌─────────────────────────────────────────────────────────────────────────────────────┐
│                      AI Copyright Detection System                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────┐ │
│  │                     CORPUS BUILDING PIPELINE                                   │ │
│  │                                                                                │ │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐       │ │
│  │  │  Protected  │──▶│  Whisper    │──▶│  Embedding  │──▶│  Vector DB  │       │ │
│  │  │  Content    │   │  (ASR)      │   │  (SBERT)    │   │  (Pinecone) │       │ │
│  │  └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘       │ │
│  │                                                                                │ │
│  │  Preprocessing:                                                                │ │
│  │  1. Audio extraction (FFmpeg)                                                 │ │
│  │  2. Transcription (WhisperAI Large-v3)                                        │ │
│  │  3. Speaker diarization (pyannote)                                            │ │
│  │  4. Segment creation (30-second windows)                                       │ │
│  │  5. Embedding generation (Sentence-BERT)                                       │ │
│  │  6. Vector indexing (Pinecone)                                                │ │
│  │                                                                                │ │
│  └───────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────┐ │
│  │                     DETECTION PIPELINE                                         │ │
│  │                                                                                │ │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐       │ │
│  │  │  Query      │──▶│  Whisper    │──▶│  Embedding  │──▶│  Similarity │       │ │
│  │  │  Video      │   │  (ASR)      │   │  (SBERT)    │   │  Search     │       │ │
│  │  └─────────────┘   └─────────────┘   └─────────────┘   └──────┬──────┘       │ │
│  │                                                                │              │ │
│  │                                                                ▼              │ │
│  │                                                       ┌─────────────┐         │ │
│  │                                                       │  Candidate  │         │ │
│  │                                                       │  Matches    │         │ │
│  │                                                       └──────┬──────┘         │ │
│  │                                                              │                │ │
│  └──────────────────────────────────────────────────────────────┼────────────────┘ │
│                                                                  │                 │
│                                                                  ▼                 │
│  ┌───────────────────────────────────────────────────────────────────────────────┐ │
│  │                     AI REASONING LAYER                                         │ │
│  │                                                                                │ │
│  │  Models: • LLAMA 3.1 70B (primary reasoning) • Mixtral 8x7B (cross-validation) │ │
│  │                                                                                │ │
│  │  Analysis Criteria:                                                            │ │
│  │  1. Semantic overlap percentage    4. Transformative use assessment           │ │
│  │  2. Temporal alignment             5. Commercial vs. educational context       │ │
│  │  3. Fair use indicators                                                        │ │
│  │                                                                                │ │
│  │  Output: verdict, confidence, matched_segments, reasoning                      │ │
│  └───────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Technology Stack</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-3 text-gray-500">Component</th>
                  <th className="text-left p-3 text-gray-500">Technology</th>
                  <th className="text-left p-3 text-gray-500">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ["Speech Recognition", "WhisperAI Large-v3", "Transcription"],
                  ["Embeddings", "SBERT (all-mpnet-base-v2)", "Semantic encoding"],
                  ["Vector Database", "Pinecone", "Similarity search"],
                  ["LLM (Primary)", "LLAMA 3.1 70B", "Reasoning"],
                  ["LLM (Validation)", "Mixtral 8x7B", "Cross-validation"],
                  ["Backend", "FastAPI", "High-performance API"],
                  ["Task Queue", "Celery", "Async processing"]
                ].map(([comp, tech, purpose], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-3 font-medium text-purple-300">{comp}</td>
                    <td className="p-3 text-cyan-300">{tech}</td>
                    <td className="p-3">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-cyan-600 flex items-center gap-2">
            <Database size={24} />
            Semantic Similarity Engine
          </h2>
          <p className="text-gray-600 mb-4">Hybrid semantic matching using BERT variants with two-stage retrieval:</p>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`class SemanticMatcher:
    """
    Hybrid semantic matching using BERT variants.
    """
    
    def __init__(self):
        self.encoder = SentenceTransformer('all-mpnet-base-v2')
        self.cross_encoder = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
        self.similarity_threshold = 0.85
    
    async def find_matches(
        self,
        query_transcript: str,
        top_k: int = 20
    ) -> List[MatchCandidate]:
        """
        Find potential matches using two-stage retrieval.
        
        Stage 1: Bi-encoder (fast, approximate)
        Stage 2: Cross-encoder (slow, precise)
        """
        
        # Stage 1: Segment query transcript
        segments = self._segment_transcript(query_transcript)
        
        all_candidates = []
        
        for segment in segments:
            # Generate embedding
            embedding = self.encoder.encode(segment.text)
            
            # Search vector DB
            results = await self.vector_db.query(
                vector=embedding.tolist(),
                top_k=top_k,
                include_metadata=True
            )
            
            for result in results:
                if result.score >= self.similarity_threshold:
                    all_candidates.append(
                        MatchCandidate(
                            query_segment=segment,
                            corpus_segment=result.metadata,
                            bi_encoder_score=result.score
                        )
                    )
        
        # Stage 2: Re-rank with cross-encoder
        if all_candidates:
            pairs = [
                (c.query_segment.text, c.corpus_segment.text)
                for c in all_candidates
            ]
            
            cross_scores = self.cross_encoder.predict(pairs)
            
            for candidate, score in zip(all_candidates, cross_scores):
                candidate.cross_encoder_score = score
            
            # Filter by cross-encoder threshold
            all_candidates = [
                c for c in all_candidates
                if c.cross_encoder_score >= 0.7
            ]
        
        return self._cluster_matches(all_candidates)
    
    def _cluster_matches(
        self,
        candidates: List[MatchCandidate]
    ) -> List[MatchCluster]:
        """
        Cluster consecutive matches into contiguous segments.
        """
        
        if not candidates:
            return []
        
        # Sort by query segment position
        sorted_candidates = sorted(candidates, key=lambda x: x.query_segment.start_time)
        
        clusters = []
        current_cluster = [sorted_candidates[0]]
        
        for candidate in sorted_candidates[1:]:
            # Check if consecutive (within 5 seconds)
            if candidate.query_segment.start_time - current_cluster[-1].query_segment.end_time < 5:
                current_cluster.append(candidate)
            else:
                clusters.append(MatchCluster(matches=current_cluster))
                current_cluster = [candidate]
        
        clusters.append(MatchCluster(matches=current_cluster))
        
        return clusters`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-amber-600 flex items-center gap-2">
            <Brain size={24} />
            AI Reasoning Engine (Verdict Engine)
          </h2>
          <p className="text-gray-600 mb-4">LLM-based reasoning for copyright verdict determination with multi-model validation:</p>
          <pre className="text-xs text-green-300 overflow-x-auto bg-gray-900/50 p-4 rounded-xl">
{`class VerdictEngine:
    """
    LLM-based reasoning for copyright verdict determination.
    """
    
    def __init__(self):
        self.primary_llm = LlamaClient(model="llama-3.1-70b")
        self.validation_llm = MistralClient(model="mixtral-8x7b")
    
    async def determine_verdict(
        self,
        match_clusters: List[MatchCluster],
        query_metadata: VideoMetadata,
        corpus_metadata: VideoMetadata
    ) -> CopyrightVerdict:
        """
        Determine copyright verdict using multi-model reasoning.
        """
        
        # Calculate overlap statistics
        overlap_stats = self._calculate_overlap(match_clusters, query_metadata)
        
        # Build context for LLM
        context = self._build_reasoning_context(
            match_clusters=match_clusters,
            query_metadata=query_metadata,
            corpus_metadata=corpus_metadata,
            overlap_stats=overlap_stats
        )
        
        # Primary reasoning
        primary_verdict = await self._get_primary_verdict(context)
        
        # Cross-validation with second model
        validation_verdict = await self._get_validation_verdict(context)
        
        # Reconcile verdicts
        final_verdict = self._reconcile_verdicts(primary_verdict, validation_verdict)
        
        return final_verdict
    
    async def _get_primary_verdict(self, context: str) -> LLMVerdict:
        """
        Get verdict from primary LLM (LLAMA 3.1).
        
        Analyze based on:
        1. Percentage of content overlap
        2. Verbatim copying vs. paraphrasing
        3. Fair use indicators (commentary, criticism, education)
        4. Transformative use
        5. Commercial vs. non-commercial purpose
        
        Output JSON:
        {
            "verdict": "MATCH" | "PARTIAL" | "NO_MATCH" | "FAIR_USE",
            "confidence": 0.0-1.0,
            "overlap_percentage": 0-100,
            "fair_use_factors": {
                "purpose": "commentary" | "criticism" | "education" | "commercial",
                "nature": "creative" | "factual",
                "amount": "substantial" | "minimal",
                "effect": "harmful" | "neutral" | "beneficial"
            },
            "reasoning": "Detailed explanation..."
        }
        """
        
        response = await self.primary_llm.generate(
            prompt,
            max_tokens=1000,
            temperature=0.2
        )
        
        return LLMVerdict.from_json(response)`}
          </pre>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12 p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-600 flex items-center gap-2">
            <TrendingUp size={24} />
            Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { metric: "Detection Precision", value: "94.7%", color: "red" },
              { metric: "Detection Recall", value: "91.2%", color: "orange" },
              { metric: "F1-Score", value: "92.9%", color: "yellow" },
              { metric: "False Positive Rate", value: "3.2%", color: "green" },
              { metric: "Processing Time", value: "45 sec/hr video", color: "blue" },
              { metric: "Corpus Size", value: "10M+ segments", color: "purple" }
            ].map((item, i) => (
              <div key={i} className={`p-4 bg-${item.color}-500/10 rounded-xl border border-${item.color}-500/30 text-center`}>
                <p className={`text-2xl font-bold text-${item.color}-400`}>{item.value}</p>
                <p className="text-gray-500 text-sm">{item.metric}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="p-6 bg-white rounded-2xl border border-purple-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
            <CheckCircle size={24} />
            My Technical Contributions
          </h2>
          <div className="space-y-4">
            {[
              { num: 1, title: "Semantic Pipeline", desc: "Designed BERT/SBERT-based similarity matching system" },
              { num: 2, title: "Hybrid Retrieval", desc: "Implemented bi-encoder + cross-encoder two-stage retrieval" },
              { num: 3, title: "AI Reasoning", desc: "Built multi-model verdict engine with LLAMA 3.1 and Mixtral" },
              { num: 4, title: "False Positive Reduction", desc: "Designed fair use detection reducing false positives by 65%" },
              { num: 5, title: "Scalable Indexing", desc: "Architected Pinecone-based vector storage for 10M+ segments" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-xl">
                <span className="text-purple-600 font-bold text-xl">{item.num}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project8;
