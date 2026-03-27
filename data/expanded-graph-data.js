// EXPANDED KNOWLEDGE GRAPH DATA - Add this to replace the existing graphData object

const graphData = {
    nodes: [
        // ===== LLM Core (blue #3b82f6) =====
        { id: "transformer", label: "Transformer\nArchitecture", category: "llm", color: "#3b82f6", size: 15 },
        { id: "attention", label: "Multi-Head\nAttention", category: "llm", color: "#3b82f6", size: 12 },
        { id: "pretraining", label: "Pre-training", category: "llm", color: "#3b82f6", size: 12 },
        { id: "sft", label: "Supervised\nFine-Tuning", category: "llm", color: "#3b82f6", size: 12 },
        { id: "rlhf", label: "RLHF", category: "llm", color: "#3b82f6", size: 12 },
        { id: "dpo", label: "DPO", category: "llm", color: "#3b82f6", size: 11 },
        { id: "inference", label: "Inference\nOptimization", category: "llm", color: "#3b82f6", size: 12 },
        { id: "quantization", label: "Quantization", category: "llm", color: "#3b82f6", size: 10 },
        { id: "kvcache", label: "KV Cache", category: "llm", color: "#3b82f6", size: 10 },
        
        // NEW: Tokenization
        { id: "tokenization", label: "Tokenization", category: "llm", color: "#3b82f6", size: 11 },
        { id: "bpe", label: "BPE", category: "llm", color: "#3b82f6", size: 9 },
        { id: "sentencepiece", label: "SentencePiece", category: "llm", color: "#3b82f6", size: 9 },
        
        // NEW: Decoding
        { id: "decoding", label: "Decoding\nStrategies", category: "llm", color: "#3b82f6", size: 11 },
        { id: "sampling", label: "Sampling\n(temp, top-p)", category: "llm", color: "#3b82f6", size: 9 },
        { id: "speculativedecode", label: "Speculative\nDecoding", category: "llm", color: "#3b82f6", size: 9 },
        
        // NEW: Scaling & Training
        { id: "scalinglaws", label: "Scaling Laws", category: "llm", color: "#3b82f6", size: 11 },
        { id: "distributed", label: "Distributed\nTraining", category: "llm", color: "#3b82f6", size: 11 },
        { id: "zero", label: "ZeRO\nOptimizer", category: "llm", color: "#3b82f6", size: 9 },
        
        // NEW: Efficient Training
        { id: "lora", label: "LoRA", category: "llm", color: "#3b82f6", size: 11 },
        { id: "qlora", label: "QLoRA", category: "llm", color: "#3b82f6", size: 9 },
        { id: "distillation", label: "Knowledge\nDistillation", category: "llm", color: "#3b82f6", size: 9 },
        
        // NEW: Long Context
        { id: "longcontext", label: "Long Context\nHandling", category: "llm", color: "#3b82f6", size: 11 },
        { id: "rope", label: "RoPE\nScaling", category: "llm", color: "#3b82f6", size: 9 },
        { id: "slidingwindow", label: "Sliding\nWindow", category: "llm", color: "#3b82f6", size: 9 },
        
        // ===== Multimodal (teal #14b8a6) - NEW CATEGORY! =====
        { id: "multimodal", label: "Multimodal\nAI", category: "multimodal", color: "#14b8a6", size: 14 },
        { id: "vit", label: "Vision\nTransformer", category: "multimodal", color: "#14b8a6", size: 12 },
        { id: "clip", label: "CLIP", category: "multimodal", color: "#14b8a6", size: 12 },
        { id: "gpt4v", label: "GPT-4V /\nGemini Vision", category: "multimodal", color: "#14b8a6", size: 11 },
        { id: "imagetextencoder", label: "Image-Text\nEncoders", category: "multimodal", color: "#14b8a6", size: 10 },
        { id: "videounderstand", label: "Video\nUnderstanding", category: "multimodal", color: "#14b8a6", size: 9 },
        { id: "audioprocess", label: "Audio\nProcessing", category: "multimodal", color: "#14b8a6", size: 9 },
        
        // ===== Memory & Storage (green #10b981) =====
        { id: "memory", label: "Memory\nSystems", category: "memory", color: "#10b981", size: 14 },
        { id: "vectordb", label: "Vector\nDatabases", category: "memory", color: "#10b981", size: 12 },
        { id: "embeddings", label: "Embeddings", category: "memory", color: "#10b981", size: 11 },
        { id: "chunking", label: "Chunking\nStrategies", category: "memory", color: "#10b981", size: 10 },
        { id: "ann", label: "ANN\nAlgorithms", category: "memory", color: "#10b981", size: 10 },
        { id: "episodic", label: "Episodic\nMemory", category: "memory", color: "#10b981", size: 10 },
        { id: "semantic", label: "Semantic\nMemory", category: "memory", color: "#10b981", size: 10 },
        { id: "knowledgegraph", label: "Knowledge\nGraph", category: "memory", color: "#10b981", size: 11 },
        
        // NEW: Context Management
        { id: "contextmgmt", label: "Context Window\nManagement", category: "memory", color: "#10b981", size: 10 },
        { id: "convsummarization", label: "Conversation\nSummarization", category: "memory", color: "#10b981", size: 9 },
        
        // ===== Reasoning & Planning (orange #f59e0b) =====
        { id: "planning", label: "Planning &\nReasoning", category: "reasoning", color: "#f59e0b", size: 14 },
        { id: "react", label: "ReAct", category: "reasoning", color: "#f59e0b", size: 11 },
        { id: "cot", label: "Chain-of-\nThought", category: "reasoning", color: "#f59e0b", size: 11 },
        { id: "tot", label: "Tree-of-\nThoughts", category: "reasoning", color: "#f59e0b", size: 10 },
        { id: "planexec", label: "Plan-and-\nExecute", category: "reasoning", color: "#f59e0b", size: 10 },
        
        // NEW: Prompt Engineering
        { id: "prompting", label: "Prompt\nEngineering", category: "reasoning", color: "#f59e0b", size: 12 },
        { id: "fewshot", label: "Few-Shot\nLearning", category: "reasoning", color: "#f59e0b", size: 10 },
        { id: "zeroshot", label: "Zero-Shot\nLearning", category: "reasoning", color: "#f59e0b", size: 9 },
        { id: "promptopt", label: "Prompt\nOptimization", category: "reasoning", color: "#f59e0b", size: 9 },
        
        // NEW: Multi-Agent
        { id: "multiagent", label: "Multi-Agent\nSystems", category: "reasoning", color: "#f59e0b", size: 13 },
        { id: "coordination", label: "Agent\nCoordination", category: "reasoning", color: "#f59e0b", size: 10 },
        { id: "taskallocation", label: "Task\nAllocation", category: "reasoning", color: "#f59e0b", size: 9 },
        { id: "communication", label: "Agent\nCommunication", category: "reasoning", color: "#f59e0b", size: 9 },
        
        // NEW: Agent Frameworks
        { id: "agentframeworks", label: "Agent\nFrameworks", category: "reasoning", color: "#f59e0b", size: 11 },
        { id: "langchain", label: "LangChain /\nLangGraph", category: "reasoning", color: "#f59e0b", size: 10 },
        { id: "crewai", label: "CrewAI /\nMetaGPT", category: "reasoning", color: "#f59e0b", size: 9 },
        
        // ===== RAG & Retrieval (purple #8b5cf6) =====
        { id: "rag", label: "RAG", category: "rag", color: "#8b5cf6", size: 14 },
        { id: "dense", label: "Dense\nRetrieval", category: "rag", color: "#8b5cf6", size: 11 },
        { id: "sparse", label: "Sparse\nRetrieval (BM25)", category: "rag", color: "#8b5cf6", size: 11 },
        { id: "hybrid", label: "Hybrid\nRetrieval", category: "rag", color: "#8b5cf6", size: 11 },
        { id: "reranking", label: "Reranking", category: "rag", color: "#8b5cf6", size: 10 },
        { id: "selfrag", label: "Self-RAG", category: "rag", color: "#8b5cf6", size: 10 },
        
        // ===== Tools & Actions (red #ef4444) =====
        { id: "tooluse", label: "Tool Use &\nFunction Calling", category: "tools", color: "#ef4444", size: 14 },
        { id: "apicalling", label: "API\nCalling", category: "tools", color: "#ef4444", size: 11 },
        { id: "codeexec", label: "Code\nExecution", category: "tools", color: "#ef4444", size: 11 },
        { id: "sandboxing", label: "Sandboxing", category: "tools", color: "#ef4444", size: 10 },
        { id: "toolselection", label: "Tool\nSelection", category: "tools", color: "#ef4444", size: 10 },
        { id: "paramextract", label: "Parameter\nExtraction", category: "tools", color: "#ef4444", size: 9 },
        { id: "errorhandling", label: "Error\nHandling", category: "tools", color: "#ef4444", size: 9 },
        { id: "ratelimit", label: "Rate\nLimiting", category: "tools", color: "#ef4444", size: 9 },
        
        // NEW: Structured Output
        { id: "structuredoutput", label: "Structured\nOutput", category: "tools", color: "#ef4444", size: 10 },
        { id: "jsonmode", label: "JSON Mode", category: "tools", color: "#ef4444", size: 9 },
        
        // ===== Production & Infrastructure (cyan #06b6d4) =====
        { id: "production", label: "Production\nInfrastructure", category: "production", color: "#06b6d4", size: 14 },
        { id: "serving", label: "Model\nServing", category: "production", color: "#06b6d4", size: 11 },
        { id: "monitoring", label: "Monitoring", category: "production", color: "#06b6d4", size: 10 },
        { id: "batching", label: "Batching", category: "production", color: "#06b6d4", size: 10 },
        { id: "caching", label: "Caching", category: "production", color: "#06b6d4", size: 10 },
        { id: "scaling", label: "Auto-scaling", category: "production", color: "#06b6d4", size: 10 },
        
        // NEW: Evaluation
        { id: "evaluation", label: "Evaluation &\nMetrics", category: "production", color: "#06b6d4", size: 12 },
        { id: "benchmarks", label: "Benchmarks", category: "production", color: "#06b6d4", size: 11 },
        { id: "agentbench", label: "AgentBench /\nWebArena", category: "production", color: "#06b6d4", size: 9 },
        { id: "mmlu", label: "MMLU /\nHellaSwag", category: "production", color: "#06b6d4", size: 9 },
        { id: "mtbench", label: "MT-Bench /\nArena", category: "production", color: "#06b6d4", size: 9 },
        
        // NEW: Cost Management
        { id: "costmgmt", label: "Cost\nManagement", category: "production", color: "#06b6d4", size: 10 },
        { id: "modelrouting", label: "Model\nRouting", category: "production", color: "#06b6d4", size: 9 },
        
        // NEW: Lifecycle
        { id: "lifecycle", label: "Agent\nLifecycle", category: "production", color: "#06b6d4", size: 10 },
        { id: "versioning", label: "Versioning /\nA/B Testing", category: "production", color: "#06b6d4", size: 9 },
        
        // ===== Safety & Ethics (pink #ec4899) =====
        { id: "safety", label: "Safety &\nEthics", category: "safety", color: "#ec4899", size: 14 },
        { id: "alignment", label: "Alignment", category: "safety", color: "#ec4899", size: 11 },
        { id: "filtering", label: "Content\nFiltering", category: "safety", color: "#ec4899", size: 10 },
        { id: "jailbreak", label: "Jailbreak\nDefense", category: "safety", color: "#ec4899", size: 9 },
        { id: "auditlog", label: "Audit\nLogging", category: "safety", color: "#ec4899", size: 9 },
        
        // NEW: Bias & Fairness
        { id: "bias", label: "Bias\nMitigation", category: "safety", color: "#ec4899", size: 10 },
        { id: "redteaming", label: "Red\nTeaming", category: "safety", color: "#ec4899", size: 9 },
        { id: "privacy", label: "Privacy\n(GDPR)", category: "safety", color: "#ec4899", size: 9 }
    ],
    
    links: [
        // Existing links... (keeping all original)
        // LLM Core connections
        { source: "transformer", target: "attention", relation: "contains", strength: 2 },
        { source: "transformer", target: "inference", relation: "enables", strength: 2 },
        { source: "pretraining", target: "sft", relation: "precedes", strength: 2 },
        { source: "sft", target: "rlhf", relation: "precedes", strength: 2 },
        { source: "sft", target: "dpo", relation: "alternative", strength: 1.5 },
        { source: "rlhf", target: "dpo", relation: "alternative", strength: 1.5 },
        { source: "rlhf", target: "alignment", relation: "achieves", strength: 2 },
        { source: "inference", target: "quantization", relation: "uses", strength: 2 },
        { source: "inference", target: "kvcache", relation: "uses", strength: 2 },
        { source: "inference", target: "batching", relation: "uses", strength: 1.5 },
        
        // NEW: Tokenization connections
        { source: "pretraining", target: "tokenization", relation: "requires", strength: 2 },
        { source: "tokenization", target: "bpe", relation: "uses", strength: 2 },
        { source: "tokenization", target: "sentencepiece", relation: "uses", strength: 2 },
        
        // NEW: Decoding connections
        { source: "inference", target: "decoding", relation: "uses", strength: 2 },
        { source: "decoding", target: "sampling", relation: "includes", strength: 2 },
        { source: "decoding", target: "speculativedecode", relation: "advanced", strength: 1.5 },
        
        // NEW: Scaling & Training connections
        { source: "pretraining", target: "scalinglaws", relation: "guided by", strength: 1.5 },
        { source: "pretraining", target: "distributed", relation: "uses", strength: 2 },
        { source: "distributed", target: "zero", relation: "includes", strength: 2 },
        
        // NEW: Efficient Training connections
        { source: "sft", target: "lora", relation: "uses", strength: 2 },
        { source: "lora", target: "qlora", relation: "variant", strength: 2 },
        { source: "sft", target: "distillation", relation: "alternative", strength: 1.5 },
        
        // NEW: Long Context connections
        { source: "transformer", target: "longcontext", relation: "challenge", strength: 1.5 },
        { source: "longcontext", target: "rope", relation: "uses", strength: 2 },
        { source: "longcontext", target: "slidingwindow", relation: "uses", strength: 2 },
        { source: "attention", target: "longcontext", relation: "bottleneck", strength: 1.5 },
        
        // NEW: Multimodal connections
        { source: "multimodal", target: "vit", relation: "uses", strength: 2 },
        { source: "multimodal", target: "clip", relation: "uses", strength: 2 },
        { source: "multimodal", target: "gpt4v", relation: "example", strength: 2 },
        { source: "vit", target: "transformer", relation: "adapts", strength: 2 },
        { source: "clip", target: "embeddings", relation: "produces", strength: 2 },
        { source: "clip", target: "imagetextencoder", relation: "is", strength: 2 },
        { source: "multimodal", target: "videounderstand", relation: "includes", strength: 1.5 },
        { source: "multimodal", target: "audioprocess", relation: "includes", strength: 1.5 },
        { source: "tooluse", target: "multimodal", relation: "uses", strength: 1.5 },
        
        // Memory connections (existing)
        { source: "memory", target: "episodic", relation: "includes", strength: 2 },
        { source: "memory", target: "semantic", relation: "includes", strength: 2 },
        { source: "memory", target: "vectordb", relation: "uses", strength: 2 },
        { source: "vectordb", target: "embeddings", relation: "stores", strength: 2 },
        { source: "vectordb", target: "ann", relation: "uses", strength: 2 },
        { source: "vectordb", target: "chunking", relation: "requires", strength: 2 },
        { source: "embeddings", target: "transformer", relation: "from", strength: 1.5 },
        { source: "semantic", target: "knowledgegraph", relation: "uses", strength: 2 },
        
        // NEW: Context Management connections
        { source: "memory", target: "contextmgmt", relation: "includes", strength: 2 },
        { source: "contextmgmt", target: "convsummarization", relation: "uses", strength: 2 },
        { source: "contextmgmt", target: "longcontext", relation: "relates", strength: 1.5 },
        { source: "episodic", target: "convsummarization", relation: "uses", strength: 1.5 },
        
        // RAG connections (existing)
        { source: "rag", target: "dense", relation: "uses", strength: 2 },
        { source: "rag", target: "sparse", relation: "uses", strength: 2 },
        { source: "rag", target: "hybrid", relation: "combines", strength: 2 },
        { source: "dense", target: "embeddings", relation: "uses", strength: 2 },
        { source: "dense", target: "vectordb", relation: "uses", strength: 2 },
        { source: "hybrid", target: "dense", relation: "combines", strength: 2 },
        { source: "hybrid", target: "sparse", relation: "combines", strength: 2 },
        { source: "hybrid", target: "reranking", relation: "uses", strength: 2 },
        { source: "rag", target: "selfrag", relation: "advanced", strength: 1.5 },
        { source: "rag", target: "memory", relation: "retrieves from", strength: 2 },
        { source: "rag", target: "chunking", relation: "requires", strength: 1.5 },
        
        // Planning & Reasoning connections (existing)
        { source: "planning", target: "react", relation: "strategy", strength: 2 },
        { source: "planning", target: "cot", relation: "strategy", strength: 2 },
        { source: "planning", target: "tot", relation: "strategy", strength: 2 },
        { source: "planning", target: "planexec", relation: "strategy", strength: 2 },
        { source: "react", target: "tooluse", relation: "uses", strength: 2 },
        { source: "react", target: "cot", relation: "combines", strength: 1.5 },
        { source: "tot", target: "cot", relation: "extends", strength: 2 },
        
        // NEW: Prompt Engineering connections
        { source: "planning", target: "prompting", relation: "uses", strength: 2 },
        { source: "prompting", target: "fewshot", relation: "includes", strength: 2 },
        { source: "prompting", target: "zeroshot", relation: "includes", strength: 2 },
        { source: "prompting", target: "cot", relation: "includes", strength: 2 },
        { source: "prompting", target: "promptopt", relation: "improves", strength: 1.5 },
        { source: "fewshot", target: "zeroshot", relation: "alternative", strength: 1.5 },
        
        // NEW: Multi-Agent connections
        { source: "planning", target: "multiagent", relation: "enables", strength: 2 },
        { source: "multiagent", target: "coordination", relation: "requires", strength: 2 },
        { source: "multiagent", target: "taskallocation", relation: "requires", strength: 2 },
        { source: "multiagent", target: "communication", relation: "requires", strength: 2 },
        { source: "multiagent", target: "agentframeworks", relation: "uses", strength: 2 },
        { source: "agentframeworks", target: "langchain", relation: "includes", strength: 2 },
        { source: "agentframeworks", target: "crewai", relation: "includes", strength: 2 },
        { source: "memory", target: "multiagent", relation: "shared by", strength: 1.5 },
        
        // Tool Use connections (existing)
        { source: "tooluse", target: "apicalling", relation: "includes", strength: 2 },
        { source: "tooluse", target: "codeexec", relation: "includes", strength: 2 },
        { source: "tooluse", target: "toolselection", relation: "requires", strength: 2 },
        { source: "tooluse", target: "paramextract", relation: "requires", strength: 2 },
        { source: "apicalling", target: "errorhandling", relation: "needs", strength: 2 },
        { source: "apicalling", target: "ratelimit", relation: "needs", strength: 2 },
        { source: "codeexec", target: "sandboxing", relation: "requires", strength: 2 },
        { source: "tooluse", target: "safety", relation: "requires", strength: 2 },
        { source: "sandboxing", target: "safety", relation: "provides", strength: 2 },
        
        // NEW: Structured Output connections
        { source: "tooluse", target: "structuredoutput", relation: "uses", strength: 2 },
        { source: "structuredoutput", target: "jsonmode", relation: "includes", strength: 2 },
        { source: "paramextract", target: "structuredoutput", relation: "uses", strength: 1.5 },
        
        // Production connections (existing)
        { source: "production", target: "serving", relation: "includes", strength: 2 },
        { source: "production", target: "monitoring", relation: "includes", strength: 2 },
        { source: "production", target: "scaling", relation: "includes", strength: 2 },
        { source: "serving", target: "inference", relation: "uses", strength: 2 },
        { source: "serving", target: "batching", relation: "uses", strength: 2 },
        { source: "serving", target: "caching", relation: "uses", strength: 2 },
        
        // NEW: Evaluation connections
        { source: "production", target: "evaluation", relation: "monitors", strength: 2 },
        { source: "evaluation", target: "benchmarks", relation: "uses", strength: 2 },
        { source: "benchmarks", target: "agentbench", relation: "includes", strength: 2 },
        { source: "benchmarks", target: "mmlu", relation: "includes", strength: 2 },
        { source: "benchmarks", target: "mtbench", relation: "includes", strength: 2 },
        { source: "evaluation", target: "rlhf", relation: "trains", strength: 1.5 },
        
        // NEW: Cost Management connections
        { source: "production", target: "costmgmt", relation: "includes", strength: 2 },
        { source: "costmgmt", target: "modelrouting", relation: "uses", strength: 2 },
        { source: "costmgmt", target: "caching", relation: "uses", strength: 2 },
        { source: "costmgmt", target: "quantization", relation: "uses", strength: 1.5 },
        
        // NEW: Lifecycle connections
        { source: "production", target: "lifecycle", relation: "includes", strength: 2 },
        { source: "lifecycle", target: "versioning", relation: "includes", strength: 2 },
        { source: "lifecycle", target: "monitoring", relation: "uses", strength: 1.5 },
        
        // Safety connections (existing)
        { source: "safety", target: "alignment", relation: "includes", strength: 2 },
        { source: "safety", target: "filtering", relation: "includes", strength: 2 },
        { source: "safety", target: "jailbreak", relation: "includes", strength: 2 },
        { source: "safety", target: "auditlog", relation: "includes", strength: 2 },
        { source: "alignment", target: "rlhf", relation: "via", strength: 2 },
        { source: "alignment", target: "dpo", relation: "via", strength: 2 },
        
        // NEW: Bias & Privacy connections
        { source: "safety", target: "bias", relation: "includes", strength: 2 },
        { source: "safety", target: "redteaming", relation: "uses", strength: 2 },
        { source: "safety", target: "privacy", relation: "includes", strength: 2 },
        { source: "bias", target: "evaluation", relation: "measured by", strength: 1.5 },
        { source: "redteaming", target: "jailbreak", relation: "discovers", strength: 1.5 },
        
        // Cross-cutting connections (existing)
        { source: "transformer", target: "rag", relation: "enables", strength: 1.5 },
        { source: "transformer", target: "planning", relation: "enables", strength: 1.5 },
        { source: "monitoring", target: "auditlog", relation: "uses", strength: 1.5 }
    ]
};
