/**
 * Complete Node Details - All 96 Nodes
 * AI Agent Director Interview Preparation
 * With Chinese Translations for Key Nodes
 */

const nodeDetails = {};

nodeDetails.agentbench = {
    name: "Agent Benchmarks",
    description: "Agent-specific: WebArena, AgentBench for tool use, multi-step reasoning.",
    details: {
        keyPoints: [
            "WebArena: Web navigation tasks. 800+ real-world scenarios",
            "AgentBench: Multi-domain (code, game, web). Tool use + planning",
            "ToolBench: 16K+ APIs. Function calling evaluation",
            "Success rate: % of tasks completed correctly"
        ],
        proscons: {
            pros: [
                "Real-world tasks",
                "Multi-step",
                "Tool use"
            ],
            cons: [
                "Hard to run (need envs)",
                "Subjective success",
                "Expensive"
            ]
        }
    },
    connections: [
        "Benchmarks"
    ]
};
nodeDetails.agentframeworks = {
    name: "Agent Frameworks",
    description: "LangChain, AutoGPT, CrewAI, MetaGPT - production frameworks for building LLM agents.",
    details: {
        keyPoints: [
            "LangChain: Modular building blocks (chains, agents, memory, tools). Most popular. Python & JS.",
            "AutoGPT: Autonomous agent, continuous execution. Good for long-running tasks. Can loop infinitely.",
            "CrewAI: Role-based agents with defined processes. Sequential, hierarchical workflows. Good for teams.",
            "MetaGPT: Software development agents (PM, architect, engineer). Role-playing for code generation.",
            "LangGraph: Stateful workflows, cycles, conditionals. More control than LangChain chains.",
            "Comparison: LangChain (flexible), AutoGPT (autonomous), CrewAI (team-oriented), MetaGPT (software-specific)."
        ],
        proscons: {
            pros: [
                "LangChain: Ecosystem",
                "AutoGPT: Autonomous",
                "CrewAI: Team structure",
                "MetaGPT: Code quality",
                "All: Production-ready"
            ],
            cons: [
                "LangChain: Complexity",
                "AutoGPT: Loops",
                "CrewAI: Learning curve",
                "MetaGPT: Domain-specific",
                "All: Cost"
            ]
        }
    },
    connections: [
        "Multi-Agent",
        "LangChain",
        "CrewAI"
    ]
};
nodeDetails.alignment = {
    name: "Alignment",
    description: "RLHF, DPO to align models with human preferences (helpful, harmless, honest).",
    details: {
        keyPoints: [
            "RLHF: Train reward model on human preferences, optimize with PPO",
            "DPO: Direct preference optimization. Simpler than RLHF",
            "Constitutional AI: Model critiques itself, improves iteratively",
            "Goals: Helpfulness, harmlessness, honesty (HHH)"
        ],
        proscons: {
            pros: [
                "Better behavior",
                "Reduces toxicity",
                "Follows instructions"
            ],
            cons: [
                "Expensive (human labels)",
                "Sycophancy risk",
                "Reduces capability"
            ]
        }
    },
    connections: [
        "RLHF",
        "Safety",
        "DPO"
    ]
};
nodeDetails.ann = {
    name: "Approximate Nearest Neighbor",
    description: "Fast similarity search via HNSW, IVF, PQ. Trade accuracy for speed. O(log n) vs O(n).",
    details: {
        keyPoints: [
            "HNSW: Hierarchical NSW graph. Navigate hierarchy, zoom in to neighbors. Best accuracy-speed trade-off. O(log n).",
            "IVF: Inverted File. Cluster vectors, search only relevant clusters. Faster but less accurate. O(n/k) where k=clusters.",
            "Product Quantization (PQ): Compress vectors (768d → 64d codes). Much faster + less memory. 5-10% accuracy loss.",
            "FAISS indexes: IndexFlatIP (exact, slow), IndexHNSWFlat (HNSW, accurate), IndexIVFPQ (IVF+PQ, fast), IndexScalarQuantizer (quantize, compress).",
            "Trade-offs: Exact search (slow, accurate), HNSW (balanced), IVF+PQ (fast, approximate). Choose based on scale and latency budget.",
            "Parameters: HNSW ef_construction (build quality), ef_search (query quality). IVF nlist (clusters), nprobe (clusters searched)."
        ],
        proscons: {
            pros: [
                "HNSW: Best accuracy-speed",
                "IVF: Very fast",
                "PQ: Memory-efficient",
                "All: Enable billion-scale",
                "Production-proven"
            ],
            cons: [
                "HNSW: Memory-heavy",
                "IVF: Tuning needed",
                "PQ: Quality loss",
                "All: Approximate (not exact)",
                "Building index slow"
            ]
        }
    },
    connections: [
        "Vector DB"
    ],
    name_zh: "近似最近邻",
    description_zh: "通过HNSW、IVF、PQ进行快速相似度搜索。权衡准确度换速度。",
    keyPoints_zh: [
        "HNSW: 分层NSW图。最佳准确度-速度权衡。O(log n)",
        "IVF: 倒排文件。聚类向量。更快但不太准确",
        "乘积量化 (PQ): 压缩向量。更快 + 更少内存",
        "FAISS索引: IndexHNSWFlat (准确)，IndexIVFPQ (快)",
        "权衡: 精确搜索 (慢) vs 近似 (快)"
    ],
    proscons_zh: {
        pros: [
            "HNSW: 最佳准确度-速度",
            "IVF: 非常快",
            "启用十亿规模"
        ],
        cons: [
            "HNSW: 内存重",
            "IVF: 需要调优",
            "所有: 近似"
        ]
    }
};
nodeDetails.apicalling = {
    name: "API Calling",
    description: "Agents call REST APIs, GraphQL for external services integration.",
    details: {
        keyPoints: [
            "REST: HTTP methods (GET, POST, PUT, DELETE)",
            "Authentication: API keys, OAuth, JWT",
            "Error handling: Retry on 5xx, rate limit 429",
            "Schema: OpenAPI/Swagger for tool descriptions"
        ],
        proscons: {
            pros: [
                "Standard protocol",
                "Wide ecosystem",
                "Well-documented"
            ],
            cons: [
                "Network latency",
                "Rate limits",
                "Authentication complexity"
            ]
        }
    },
    connections: [
        "Tool Use",
        "Error Handling",
        "Rate Limiting"
    ],
    name_zh: "API调用",
    description_zh: "智能体调用REST API、GraphQL进行外部服务集成。",
    keyPoints_zh: [
        "REST: HTTP方法 (GET, POST, PUT, DELETE)",
        "认证: API密钥，OAuth，JWT",
        "错误处理: 5xx时重试，429速率限制",
        "模式: OpenAPI/Swagger用于工具描述"
    ],
    proscons_zh: {
        pros: [
            "标准协议",
            "广泛生态",
            "文档完善"
        ],
        cons: [
            "网络延迟",
            "速率限制",
            "认证复杂"
        ]
    }
};
nodeDetails.attention = {
    name: "Multi-Head Attention",
    description: "Core mechanism allowing models to focus on different parts of input simultaneously using multiple learned patterns.",
    details: {
        keyPoints: [
            "<strong>Self-Attention Formula:</strong> For each token, compute Query (what I'm looking for), Key (what I offer), Value (what I contain): Q=XW_q, K=XW_k, V=XW_v. Attention weights: α = softmax(QK^T / √d_k). Output: αV. Each token attends to all others in parallel.",
            "<strong>Scaling Factor √d_k:</strong> Divide dot products by √d_k to prevent gradient vanishing. Without scaling, dot products grow as O(d_k), pushing softmax into saturated regions where gradients vanish. Example: d_k=64, √d_k=8 normalizes scores to reasonable range (-3 to 3).",
            "<strong>Multi-Head Mechanism:</strong> Run h=8-128 parallel attention heads with different projection matrices W^Q_i, W^K_i, W^V_i. Each head learns to focus on different aspects: local syntax, long-range semantics, positional patterns, syntactic dependencies. Concat all head outputs and project: MultiHead = Concat(head_1,...,head_h)W^O.",
            "<strong>Attention Pattern Types:</strong> Analysis reveals: Local heads (attend to neighbors ±2 positions), Global heads (attend to distant tokens), Positional heads (focus on specific positions like sentence start/end), Syntactic heads (subject-verb agreement), Semantic heads (co-reference resolution, entity tracking).",
            "<strong>Computational Complexity Analysis:</strong> Time: O(n²d) where n=sequence length, d=hidden dimension. Memory: O(bn²h) where b=batch size, h=num heads. For n=2048, d=768, h=12, b=8: stores 8×12×2048×2048 ≈ 400M floats (1.6GB). Quadratic scaling limits max sequence length.",
            "<strong>Causal Masking for Autoregression:</strong> In GPT-style models, prevent token i from attending to tokens >i (future leakage). Mask future positions with -∞ before softmax. Creates lower-triangular attention pattern. Critical for next-token prediction during training and generation.",
            "<strong>Attention Weight Interpretation:</strong> The n×n attention matrix shows which source tokens influenced each target token's representation. High weights indicate strong dependencies. Visualize with tools like BertViz, Attention Flow. Useful for: debugging, understanding predictions, identifying biases, error analysis."
        ],
        proscons: {
            pros: [
                "Global receptive field: Every token directly attends to every other token, no multi-hop propagation needed",
                "Parallel computation: All O(n²) attention scores computed simultaneously, fully leverages GPU parallelism",
                "Interpretable: Attention weights provide explicit alignment between input and output, aids debugging and trust",
                "Flexible patterns: Different heads learn complementary patterns (local syntax, global semantics, position-specific)",
                "No vanishing gradients: Direct connections between all positions enable stable gradient flow across long sequences",
                "Position-agnostic: Permutation-equivariant without positional encoding, works with any sequence order"
            ],
            cons: [
                "Quadratic memory: O(n²) for n-token sequence, limits to 2K-128K tokens depending on hardware",
                "Expensive for long sequences: 10K tokens → 100M attention scores, each needing compute and storage",
                "Attention dilution: With 10K tokens, each gets avg 0.01% attention (1/10000), weak signal for rare dependencies",
                "No recurrence: Can't maintain hidden state across sequences like RNN/LSTM, context is within-sequence only",
                "Positional encoding required: Self-attention has no notion of position without explicit encoding added",
                "Memory bandwidth bottleneck: Reading/writing attention matrix from HBM dominates runtime on modern GPUs"
            ]
        }
    },
    connections: [
        "Transformer",
        "Long Context",
        "Inference Optimization",
        "Flash Attention"
    ],
    name_zh: "多头注意力机制",
    description_zh: "允许模型使用多个学习模式同时关注输入的不同部分的核心机制。",
    keyPoints_zh: [
        "<strong>自注意力公式:</strong> 对每个token，计算Query (我在找什么)，Key (我提供什么)，Value (我包含什么): Q=XW_q, K=XW_k, V=XW_v。注意力权重: α = softmax(QK^T / √d_k)。输出: αV。每个token并行关注所有其他token。",
        "<strong>缩放因子 √d_k:</strong> 将点积除以 √d_k 以防止梯度消失。没有缩放，点积增长为 O(d_k)，将softmax推入梯度消失的饱和区域。示例: d_k=64，√d_k=8 将分数归一化到合理范围 (-3 到 3)。",
        "<strong>多头机制:</strong> 运行 h=8-128 个并行注意力头，具有不同的投影矩阵 W^Q_i, W^K_i, W^V_i。每个头学习关注不同方面: 局部语法，长程语义，位置模式，句法依赖。连接所有头输出并投影: MultiHead = Concat(head_1,...,head_h)W^O。",
        "<strong>注意力模式类型:</strong> 分析显示: 局部头 (关注邻居 ±2 位置)，全局头 (关注远距离tokens)，位置头 (关注特定位置如句子开头/结尾)，句法头 (主谓一致)，语义头 (共指消解，实体跟踪)。",
        "<strong>计算复杂度分析:</strong> 时间: O(n²d)，其中 n=序列长度，d=隐藏维度。内存: O(bn²h)，其中 b=批大小，h=头数。对于 n=2048, d=768, h=12, b=8: 存储 8×12×2048×2048 ≈ 400M 浮点数 (1.6GB)。二次缩放限制最大序列长度。"
    ],
    proscons_zh: {
        pros: [
            "全局感受野: 每个token直接关注所有其他token，无需多跳传播",
            "并行计算: 所有 O(n²) 注意力分数同时计算，充分利用GPU并行性",
            "可解释: 注意力权重提供输入和输出之间的显式对齐，有助于调试和信任"
        ],
        cons: [
            "二次内存: n个token序列的 O(n²)，根据硬件限制为 2K-128K tokens",
            "长序列昂贵: 10K tokens → 100M 注意力分数，每个都需要计算和存储",
            "注意力稀释: 10K tokens，每个平均获得 0.01% 注意力 (1/10000)，稀有依赖的弱信号"
        ]
    }
};
nodeDetails.audioprocess = {
    name: "Audio Processing",
    description: "Process audio for LLMs: speech-to-text (Whisper), audio embeddings, voice cloning.",
    details: {
        keyPoints: [
            "Speech-to-Text: Whisper converts speech → text",
            "Audio embeddings: CLAP (audio CLIP)",
            "Text-to-Speech: Voice generation (ElevenLabs, Bark)",
            "Audio tokens: AudioLM, MusicLM"
        ],
        proscons: {
            pros: [
                "Natural voice interfaces",
                "Accessibility",
                "Multilingual support"
            ],
            cons: [
                "Privacy (voice identification)",
                "Accent/dialect bias",
                "Background noise issues",
                "Voice cloning misuse"
            ]
        }
    },
    connections: [
        "Multimodal"
    ]
};
nodeDetails.auditlog = {
    name: "Audit Logging",
    description: "Log all requests, responses for compliance, debugging, safety.",
    details: {
        keyPoints: [
            "Logs: Timestamp, user, prompt, response, model version",
            "Retention: 30-90 days (GDPR compliance)",
            "Privacy: Hash PII, encrypt logs",
            "Use cases: Debugging, compliance audits, safety monitoring"
        ],
        proscons: {
            pros: [
                "Compliance",
                "Debugging",
                "Accountability"
            ],
            cons: [
                "Privacy risk",
                "Storage cost",
                "Access control"
            ]
        }
    },
    connections: [
        "Safety",
        "Monitoring"
    ],
    name_zh: "审计日志",
    description_zh: "记录所有请求、响应以进行合规、调试、安全。",
    keyPoints_zh: [
        "日志: 时间戳，用户，提示，响应，模型版本",
        "保留: 30-90天 (GDPR合规)",
        "隐私: 哈希PII，加密日志",
        "用例: 调试，合规审计，安全监控"
    ],
    proscons_zh: {
        pros: [
            "合规",
            "调试",
            "问责"
        ],
        cons: [
            "隐私风险",
            "存储成本",
            "访问控制"
        ]
    }
};
nodeDetails.batching = {
    name: "Request Batching",
    description: "Group multiple requests for efficiency. Static vs continuous batching.",
    details: {
        keyPoints: [
            "Static: Wait for batch to fill, process together. High latency",
            "Continuous (vLLM): Add requests as they arrive. Low latency, high throughput",
            "Benefits: Better GPU utilization, lower cost per request",
            "Trade-off: Latency (static) vs complexity (continuous)"
        ],
        proscons: {
            pros: [
                "Higher throughput",
                "Lower cost",
                "Better GPU utilization"
            ],
            cons: [
                "Latency increase (static)",
                "Implementation complexity",
                "Coordination overhead"
            ]
        }
    },
    connections: [
        "Inference",
        "Serving"
    ],
    name_zh: "批处理",
    description_zh: "将多个请求分组以提高效率。静态vs连续批处理。",
    keyPoints_zh: [
        "静态: 等待批次填满，一起处理。高延迟",
        "连续 (vLLM): 请求到达时添加。低延迟，高吞吐量",
        "好处: 更好的GPU利用率，每请求成本更低",
        "权衡: 延迟 (静态) vs 复杂性 (连续)"
    ],
    proscons_zh: {
        pros: [
            "更高吞吐量",
            "更低成本",
            "更好GPU利用"
        ],
        cons: [
            "延迟增加 (静态)",
            "实现复杂",
            "协调开销"
        ]
    }
};
nodeDetails.benchmarks = {
    name: "LLM Benchmarks",
    description: "MMLU, HumanEval, MT-Bench, etc. for standardized evaluation.",
    details: {
        keyPoints: [
            "MMLU: 57 subjects, multiple choice. Tests broad knowledge",
            "HumanEval: Code generation. 164 Python problems",
            "MT-Bench: Multi-turn conversation. GPT-4 as judge",
            "GSM8K: Math word problems. Tests reasoning"
        ],
        proscons: {
            pros: [
                "Standardized",
                "Reproducible",
                "Easy comparison"
            ],
            cons: [
                "Narrow tasks",
                "Gameable",
                "Not real-world"
            ]
        }
    },
    connections: [
        "Evaluation",
        "AgentBench / WebArena",
        "MMLU / HellaSwag",
        "MT-Bench / Arena"
    ],
    name_zh: "基准",
    description_zh: "MMLU，HumanEval，MT-Bench等用于标准化评估。",
    keyPoints_zh: [
        "MMLU: 57个科目，多选。测试广泛知识",
        "HumanEval: 代码生成。164个Python问题",
        "MT-Bench: 多轮对话。GPT-4作为评判",
        "GSM8K: 数学文字问题。测试推理"
    ],
    proscons_zh: {
        pros: [
            "标准化",
            "可重复",
            "易于比较"
        ],
        cons: [
            "狭窄任务",
            "可游戏化",
            "非真实世界"
        ]
    }
};
nodeDetails.bias = {
    name: "Bias Detection",
    description: "Identify and mitigate gender, racial, cultural biases in model outputs.",
    details: {
        keyPoints: [
            "Metrics: Equalized odds, demographic parity",
            "Detection: Test on diverse prompts, measure disparities",
            "Mitigation: Data balancing, debiasing techniques",
            "Trade-offs: Bias vs capability (can reduce quality)"
        ],
        proscons: {
            pros: [
                "Fairness",
                "Compliance",
                "Trust"
            ],
            cons: [
                "Hard to measure",
                "Trade-offs",
                "Incomplete solutions"
            ]
        }
    },
    connections: [
        "Safety",
        "Evaluation"
    ],
    name_zh: "偏见检测",
    description_zh: "识别和减轻模型输出中的性别、种族、文化偏见。",
    keyPoints_zh: [
        "指标: 均等化几率，人口统计平等",
        "检测: 在多样化提示上测试，测量差异",
        "减轻: 数据平衡，去偏见技术",
        "权衡: 偏见vs能力 (可能降低质量)"
    ],
    proscons_zh: {
        pros: [
            "公平性",
            "合规",
            "信任"
        ],
        cons: [
            "难以测量",
            "权衡",
            "不完整解决方案"
        ]
    }
};
nodeDetails.bpe = {
    name: "Byte Pair Encoding (BPE)",
    description: "Iteratively merge most frequent adjacent character pairs to build subword vocabulary, used in GPT-2/3/4.",
    details: {
        keyPoints: [
            "<strong>Algorithm:</strong> Start with character-level vocabulary + special end-of-word token </w>. Count all adjacent pairs in corpus. Merge most frequent pair (e.g., 'e'+'s' → 'es'). Repeat until vocabulary reaches target size (30K-50K). Greedy approach, deterministic given corpus.",
            "<strong>Tokenization Process:</strong> Split text into words, add </w> to mark word boundaries. Apply learned merges in order (highest frequency first). Result: mixture of characters, subwords, full words. Example: 'lowest' → 'low' + 'est' + '</w>' (if 'low' and 'est' were merged during training).",
            "<strong>GPT-2 BPE Specifics:</strong> 50,257 token vocabulary. Uses byte-level encoding (256 base tokens for all possible bytes) + merges. Space prefix notation: 'world' is different token than ' world' (Ġworld in tokenizer view). Critical for maintaining word boundaries without explicit space tokens.",
            "<strong>Frequency Bias:</strong> Common words = single token ('the', 'and', 'is'). Rare words = multiple subword tokens. Non-English text heavily penalized: Chinese character = 3-5 tokens on average (vs 1 for English word). Creates pricing and context length inequity across languages.",
            "<strong>Open Vocabulary Property:</strong> Any text can be encoded (worst case: fall back to byte-level). No [UNK] tokens needed. Handles typos, rare words, code, special characters gracefully. Example: 'HelloWorld123!' → ['Hello', 'World', '12', '3', '!'] (approximate, depends on training).",
            "<strong>Training Data Dependency:</strong> BPE vocabulary strongly depends on training corpus. GPT-2 trained on English web text → optimized for English. Multilingual training required for fair treatment of other languages. Retokenizing with new BPE requires retraining model embeddings.",
            "<strong>Implementation Details:</strong> HuggingFace tokenizers library: fast Rust implementation (1M tokens/sec). Caching: store frequent word→token mappings. Regex pre-tokenization: split on whitespace/punctuation before BPE (GPT-2: apostrophes kept with words like 'don't')."
        ],
        proscons: {
            pros: [
                "Open vocabulary: No [UNK] tokens, handles any text including typos and rare words",
                "Data-driven: Learns optimal splits from corpus (frequent words = single token, saves compute)",
                "Language-agnostic: Works for any language without hand-crafted rules (though biased to training language)",
                "Compression: Reduces sequence length 3-5x vs character-level (English text)",
                "Simple: Easy to implement and understand (greedy merging algorithm)",
                "Fast: Tokenization <1ms for typical prompt (100-500 tokens)"
            ],
            cons: [
                "Language bias: English favored (1 token/word vs 3-5 tokens for Chinese characters)",
                "Inconsistent splits: 'apple' (1 token) vs 'apples' (2 tokens: 'apple'+'s') loses consistency",
                "Space sensitivity: 'hello' vs ' hello' are different tokens (prompt engineering headache)",
                "Training corpus dependency: Vocabulary encodes biases of training data (can't easily change)",
                "Greedy algorithm: Not optimal (globally optimal tokenization is NP-hard)",
                "Whitespace issues: Hard to reconstruct exact original text (spaces sometimes ambiguous)"
            ]
        }
    },
    connections: [
        "Tokenization",
        "GPT-2",
        "Subword Units",
        "Vocabulary"
    ]
};
nodeDetails.caching = {
    name: "Response Caching",
    description: "Cache LLM responses, embeddings to reduce cost and latency.",
    details: {
        keyPoints: [
            "Prompt caching: Cache common prefix (system prompt). 50-90% cost reduction",
            "Response caching: Cache identical queries. Risk: stale data",
            "Embedding caching: Cache doc embeddings. One-time cost",
            "TTL: Expire cache after time to ensure freshness"
        ],
        proscons: {
            pros: [
                "Huge cost savings",
                "Faster responses",
                "Lower load"
            ],
            cons: [
                "Stale data risk",
                "Cache invalidation complexity",
                "Storage cost"
            ]
        }
    },
    connections: [
        "Serving",
        "Cost Management"
    ],
    name_zh: "缓存",
    description_zh: "存储先前的结果。语义缓存用于相似查询。提示缓存。",
    keyPoints_zh: [
        "精确缓存: 完全相同的提示 → 相同的响应",
        "语义缓存: 相似提示 → 缓存的响应 (嵌入相似度)",
        "提示缓存: 缓存提示前缀 (Claude, GPT-4)",
        "KV缓存: 缓存注意力键/值",
        "节省: 50-90% 成本用于重复查询"
    ],
    proscons_zh: {
        pros: [
            "节省成本",
            "更低延迟",
            "减少负载"
        ],
        cons: [
            "存储成本",
            "失效挑战",
            "语义匹配困难"
        ]
    }
};
nodeDetails.chunking = {
    name: "Text Chunking",
    description: "Split docs into chunks for embedding. Fixed-size, semantic, recursive. Trade-off: precision vs context.",
    details: {
        keyPoints: [
            "Fixed-size: Split every N tokens (256, 512). Simple, consistent. Breaks mid-sentence.",
            "Recursive: Split by paragraphs, then sentences, then fixed-size. Preserves structure. Most common.",
            "Semantic: Split by topic/meaning (use embeddings or TextTiling). Best quality but slow.",
            "Overlap: Sliding window with 10-20% overlap. Prevents context loss at boundaries.",
            "Metadata: Attach doc title, section, page number to each chunk. Helps ranking.",
            "Size tuning: 256 tokens (precise, many chunks), 512 (balanced), 1024 (context-rich, fewer chunks)."
        ],
        proscons: {
            pros: [
                "Fixed: Fast, simple",
                "Recursive: Structure preserved",
                "Semantic: Best quality",
                "Overlap: No boundary issues",
                "Metadata: Better ranking"
            ],
            cons: [
                "Fixed: Breaks sentences",
                "Recursive: Complex",
                "Semantic: Slow",
                "Overlap: More chunks",
                "All: Tuning needed"
            ]
        }
    },
    connections: [
        "Vector DB",
        "RAG"
    ],
    name_zh: "分块策略",
    description_zh: "将文档分成块。权衡: 精确度vs上下文。",
    keyPoints_zh: [
        "大小: 256-512 tokens (典型)",
        "重叠: 50-100 tokens 防止边界问题",
        "方法: 固定大小，句子，段落，语义",
        "权衡: 小块 (精确) vs 大块 (上下文)",
        "元数据: 在块中包含来源、标题"
    ],
    proscons_zh: {
        pros: [
            "小: 精确",
            "大: 上下文",
            "灵活"
        ],
        cons: [
            "小: 上下文丢失",
            "大: 噪声",
            "需要调优"
        ]
    }
};
nodeDetails.clip = {
    name: "CLIP",
    description: "Contrastive Language-Image Pre-training. Learns joint embedding space for images and text.",
    details: {
        keyPoints: [
            "Contrastive learning on 400M image-text pairs",
            "Zero-shot image classification",
            "Foundation for DALL-E/Stable Diffusion",
            "Image search via text queries"
        ],
        proscons: {
            pros: [
                "Zero-shot transfer",
                "No labeled images needed",
                "Unified vision-language space"
            ],
            cons: [
                "Requires 400M+ paired data",
                "Weak at fine details",
                "Inherits dataset biases"
            ]
        }
    },
    connections: [
        "Multimodal",
        "Embeddings",
        "Image-Text Encoders"
    ],
    name_zh: "CLIP",
    description_zh: "在4亿图像-文本对上对比学习。零样本图像分类。",
    keyPoints_zh: [
        "训练: 匹配图像和文本嵌入",
        "零样本: 无训练分类任何类别",
        "应用: 图像搜索，生成 (DALL-E)",
        "模型: ViT用于图像，Transformer用于文本"
    ],
    proscons_zh: {
        pros: [
            "零样本分类",
            "多功能",
            "鲁棒"
        ],
        cons: [
            "大数据需求",
            "偏见",
            "有限细粒度"
        ]
    }
};
nodeDetails.codeexec = {
    name: "Code Execution",
    description: "Sandboxed Python/JS execution for calculations, data processing.",
    details: {
        keyPoints: [
            "Sandbox: Docker, Firecracker, E2B for isolation",
            "Timeout: Kill long-running code (5-30s)",
            "Resource limits: CPU, memory caps",
            "Use cases: Math, data analysis, scripting"
        ],
        proscons: {
            pros: [
                "Powerful",
                "Deterministic",
                "Complex operations"
            ],
            cons: [
                "Security risk",
                "Resource intensive",
                "Debugging hard"
            ]
        }
    },
    connections: [
        "Tool Use",
        "Sandboxing"
    ],
    name_zh: "代码执行",
    description_zh: "LLM生成和执行代码。Python、JavaScript解释器。",
    keyPoints_zh: [
        "用例: 数据分析，可视化，计算",
        "安全: 沙箱环境 (Docker，pyodide)",
        "语言: Python (最常见)，JavaScript，SQL",
        "库: NumPy, Pandas, Matplotlib",
        "超时: 限制执行时间以防止无限循环"
    ],
    proscons_zh: {
        pros: [
            "强大",
            "精确计算",
            "可视化"
        ],
        cons: [
            "安全风险",
            "执行缓慢",
            "沙箱开销"
        ]
    }
};
nodeDetails.communication = {
    name: "Agent Communication",
    description: "Message passing, shared memory, publish-subscribe patterns for agent coordination.",
    details: {
        keyPoints: [
            "Direct messaging: Agent A sends message to Agent B. Simple, synchronous. Point-to-point.",
            "Shared memory (blackboard): All agents read/write to shared workspace. Asynchronous, decoupled.",
            "Publish-subscribe: Agents subscribe to topics, publishers broadcast. Loose coupling, scalable.",
            "Message format: JSON, Protocol Buffers, or natural language. Trade-off: efficiency vs interpretability.",
            "Reliability: Acknowledgments, retries, timeouts. Handle network failures, slow agents.",
            "Priority: Urgent messages processed first. Critical for time-sensitive coordination."
        ],
        proscons: {
            pros: [
                "Direct: Simple",
                "Blackboard: Decoupled",
                "Pub-sub: Scalable",
                "JSON: Readable",
                "Acks: Reliable"
            ],
            cons: [
                "Direct: Tight coupling",
                "Blackboard: Race conditions",
                "Pub-sub: Overhead",
                "NL: Parsing errors",
                "Retries: Complexity"
            ]
        }
    },
    connections: [
        "Multi-Agent"
    ],
    name_zh: "智能体通信",
    description_zh: "智能体之间如何交换信息。消息传递，共享内存。",
    keyPoints_zh: [
        "消息传递: 异步消息队列 (RabbitMQ, Kafka)",
        "共享内存: 智能体读写公共数据存储",
        "结构化消息: JSON格式，模式验证",
        "自然语言: 智能体用文本对话",
        "协议: 定义消息类型和交换模式"
    ],
    proscons_zh: {
        pros: [
            "消息: 解耦",
            "共享内存: 快",
            "自然语言: 灵活"
        ],
        cons: [
            "消息: 延迟",
            "共享内存: 竞争",
            "自然语言: 模糊"
        ]
    }
};
nodeDetails.contextmgmt = {
    name: "Context Management",
    description: "Manage context window: summarization, selective attention, hierarchical compression.",
    details: {
        keyPoints: [
            "Summarization: Compress old conversations → summaries",
            "Sliding window: Keep recent N tokens, discard old",
            "Hierarchical: Summary pyramid (detailed recent, compressed old)",
            "Selective: Retrieve only relevant past context"
        ],
        proscons: {
            pros: [
                "Extend effective memory",
                "Control token usage",
                "Reduce cost"
            ],
            cons: [
                "Lossy compression",
                "Summarization errors",
                "Complexity"
            ]
        }
    },
    connections: [
        "Memory",
        "Conversation Summarization",
        "Long Context"
    ]
};
nodeDetails.convsummarization = {
    name: "Conversation Summarization",
    description: "Compress long conversations for efficient context management.",
    details: {
        keyPoints: [
            "Progressive: Summarize after every N turns",
            "LLM-based: 'Summarize this conversation'",
            "Extractive vs abstractive",
            "Multi-level: Keep detailed recent + compressed old"
        ],
        proscons: {
            pros: [
                "Compress 10x-100x",
                "Maintain key points",
                "Reduce cost"
            ],
            cons: [
                "Information loss",
                "Summarization cost",
                "Quality varies"
            ]
        }
    },
    connections: [
        "Context Window Management",
        "Episodic Memory"
    ]
};
nodeDetails.coordination = {
    name: "Agent Coordination",
    description: "Patterns for multi-agent collaboration: supervisor-worker, peer-to-peer, blackboard, negotiation.",
    details: {
        keyPoints: [
            "Supervisor-Worker: Central coordinator assigns tasks. Workers report back. Simple, predictable. Single point of failure.",
            "Peer-to-Peer: Agents communicate directly. More flexible but requires protocol. Can deadlock or conflict.",
            "Blackboard: Shared workspace. Agents read/write without direct communication. Good for async collaboration.",
            "Hierarchical: Managers coordinate teams. Scales better than flat supervisor-worker. More overhead.",
            "Negotiation: Agents propose, counter-propose, reach consensus. Useful for conflicting goals.",
            "Use cases: Supervisor for simple decomposition. Peer for debate/consensus. Blackboard for document editing. Hierarchical for large projects."
        ],
        proscons: {
            pros: [
                "Supervisor: simple",
                "Peer: flexible",
                "Blackboard: async",
                "Hierarchical: scalable",
                "Negotiation: handles conflicts"
            ],
            cons: [
                "Supervisor: bottleneck",
                "Peer: complex protocol",
                "Blackboard: race conditions",
                "Hierarchical: overhead",
                "Negotiation: slow convergence"
            ]
        }
    },
    connections: [
        "Multi-Agent"
    ],
    name_zh: "智能体协调",
    description_zh: "多个智能体如何同步和协作。集中式vs分散式。",
    keyPoints_zh: [
        "集中式: 主智能体协调子智能体",
        "分散式: 点对点通信，无主控制器",
        "分层式: 子团队有局部协调器",
        "共识: 智能体如何就决策达成一致",
        "冲突解决: 处理不一致的输出"
    ],
    proscons_zh: {
        pros: [
            "集中式: 简单",
            "分散式: 可扩展",
            "分层式: 平衡"
        ],
        cons: [
            "集中式: 瓶颈",
            "分散式: 复杂",
            "所有: 开销"
        ]
    }
};
nodeDetails.costmgmt = {
    name: "Cost Management",
    description: "Optimize spend: prompt caching, model routing, batch requests.",
    details: {
        keyPoints: [
            "Prompt caching: 50-90% savings on repeated prefixes",
            "Model routing: Cheap model for simple, expensive for hard",
            "Batch requests: Process multiple at once for discounts",
            "Monitoring: Track cost per request, set budgets"
        ],
        proscons: {
            pros: [
                "Reduce spend",
                "Optimize ROI",
                "Predictable costs"
            ],
            cons: [
                "Complexity",
                "Quality trade-offs",
                "Monitoring overhead"
            ]
        }
    },
    connections: [
        "Production",
        "Model Routing",
        "Caching",
        "Quantization"
    ]
};
nodeDetails.cot = {
    name: "Chain-of-Thought (CoT)",
    description: "Prompt model to show reasoning steps. 'Let's think step by step.' Improves math, logic, complex tasks.",
    details: {
        keyPoints: [
            "Method: Add 'Let's think step by step' or provide reasoning examples. Model generates intermediate steps before final answer.",
            "Effectiveness: 20-50% improvement on math (GSM8K), logic (StrategyQA), commonsense reasoning. Larger models benefit more.",
            "Few-shot CoT: Provide examples with reasoning. 'Q: [question] A: [reasoning steps] The answer is [final].' Model mimics format.",
            "Zero-shot CoT: Just append 'Let's think step by step.' Surprisingly effective (Wei et al. 2022). Works for diverse tasks.",
            "Self-consistency: Generate multiple CoT samples, take majority vote. Improves accuracy by 5-15% but 5-10x more expensive.",
            "CoT limitations: Doesn't always help (e.g., simple retrieval). Can generate plausible but wrong reasoning. Token overhead (2-5x longer).",
            "Least-to-most prompting: Break problem into subproblems, solve sequentially. More structured than CoT. Better for compositional tasks."
        ],
        proscons: {
            pros: [
                "Dramatic accuracy gains (20-50%)",
                "Interpretable (see reasoning)",
                "Robust across models",
                "Simple to implement",
                "Works zero-shot",
                "Essential for complex tasks"
            ],
            cons: [
                "2-5x token overhead (expensive)",
                "Can hallucinate reasoning",
                "Doesn't help simple tasks",
                "Slower inference",
                "Requires large models",
                "Not always faithful (post-hoc rationalization)"
            ]
        }
    },
    connections: [
        "Planning",
        "ReAct",
        "Tree-of-Thoughts",
        "Prompting"
    ],
    name_zh: "Chain-of-Thought (思维链)",
    description_zh: "逐步推理。在答案前显示中间步骤。大幅提升复杂推理。",
    keyPoints_zh: [
        "方法: 在提示中添加 'Let's think step by step' 或提供示例推理链。",
        "示例: Q: '罗杰有5个网球。他买了2罐网球，每罐3个。他现在有多少个？' A: '让我们一步步思考: 1) 罗杰开始有5个球。2) 他买了2罐，每罐3个。3) 新球 = 2 × 3 = 6个球。4) 总计 = 5 + 6 = 11个球。答案: 11个球'",
        "效果: GSM8K (数学): 17% → 58%。MMLU (常识): 43% → 56%。在需要多步推理的任务上至关重要。",
        "机制: 迫使模型使用更多计算 (更多tokens)。显式中间步骤 = 更好的逻辑。",
        "变体: Zero-shot CoT ('让我们一步步思考')，Few-shot CoT (提供推理示例)，Self-Consistency (多次采样，投票选择答案)。",
        "局限: 对简单任务过度，增加延迟和成本，可能产生错误的推理链。",
        "最佳实践: 用于数学、逻辑、规划。在少样本示例中显示推理。使用自洽性提高准确性。"
    ],
    proscons_zh: {
        pros: [
            "大幅提升推理",
            "可解释 (显示步骤)",
            "在数学/逻辑上表现良好",
            "简单易实现",
            "经验证有效"
        ],
        cons: [
            "增加延迟 (更多tokens)",
            "成本更高",
            "对简单任务过度",
            "可能产生错误推理",
            "不总是产生正确答案"
        ]
    }
};
nodeDetails.crewai = {
    name: "CrewAI & MetaGPT",
    description: "Role-based multi-agent frameworks. CrewAI for teams, MetaGPT for software development with PM/architect/engineer roles.",
    details: {
        keyPoints: [
            "CrewAI: Define agents with roles, goals, backstories. Tasks assigned to agents. Sequential or hierarchical process.",
            "CrewAI processes: Sequential (task1→task2→task3), Hierarchical (manager delegates to workers).",
            "MetaGPT: Software company simulation. PM (requirements), Architect (design), Engineer (code), QA (test). Role-playing.",
            "MetaGPT workflow: PM writes PRD → Architect creates design → Engineer implements → QA tests. Mimics real software process.",
            "Use cases: CrewAI for any team workflow. MetaGPT specifically for code generation with structure.",
            "Output quality: Better than single-agent for complex tasks. Role specialization improves quality."
        ],
        proscons: {
            pros: [
                "CrewAI: Team clarity",
                "MetaGPT: Code quality",
                "Role specialization",
                "Structured workflows",
                "Production-ready"
            ],
            cons: [
                "Expensive (multiple LLM calls)",
                "Setup complexity",
                "MetaGPT domain-specific",
                "Coordination overhead",
                "Can conflict"
            ]
        }
    },
    connections: [
        "Agent Frameworks"
    ],
    name_zh: "CrewAI / MetaGPT",
    description_zh: "基于角色的智能体框架。定义角色、目标和流程。",
    keyPoints_zh: [
        "CrewAI: 具有定义流程的角色智能体",
        "角色: 研究员、编写者、审阅者等",
        "流程: 顺序、分层、共识",
        "MetaGPT: 软件开发智能体 (PM, 架构师, 工程师)",
        "协作: 智能体共同完成复杂项目"
    ],
    proscons_zh: {
        pros: [
            "结构化",
            "角色清晰",
            "适合团队工作流"
        ],
        cons: [
            "不太灵活",
            "学习曲线",
            "特定领域"
        ]
    }
};
nodeDetails.decoding = {
    name: "Decoding Strategies",
    description: "Methods to generate text from LLMs: greedy, beam search, sampling (temperature, top-p, top-k).",
    details: {
        keyPoints: [
            "Greedy: Always pick highest probability token. Fast, deterministic. Poor quality (repetitive, generic). P(next) = argmax P(token|context).",
            "Beam Search: Maintain k best sequences. At each step, expand all k beams, keep top k. Width k=3-10 typical. Better than greedy but still deterministic, lacks diversity.",
            "Temperature Sampling: P'(token) = P(token)^(1/T) / Z. T=1: unchanged. T<1 (0.1-0.8): sharper (more confident). T>1 (1.2-2.0): flatter (more random). T=0.7 good for factual, T=1.2 for creative.",
            "Top-p (Nucleus): Sample from smallest set of tokens whose cumulative probability ≥ p. p=0.9 typical. Adapts vocabulary size dynamically (high-confidence: few tokens, low-confidence: many).",
            "Top-k: Sample only from top k highest-prob tokens. k=40-100 typical. Simpler than top-p but fixed vocab size (doesn't adapt to confidence).",
            "Repetition Penalty: Penalize recently used tokens. penalty_score = score / (penalty^count). Reduces repetition but can hurt coherence if too aggressive (>1.2).",
            "Min-p, Typical Sampling: Advanced variants. Min-p: threshold scaled by max prob. Typical: sample tokens close to 'typical' info content. Less common but sometimes better quality."
        ],
        proscons: {
            pros: [
                "Greedy: Fast, deterministic, reproducible",
                "Beam: Better quality than greedy, still deterministic",
                "Sampling: Diverse outputs, creative",
                "Top-p: Adaptive vocabulary size",
                "Top-k: Simple, effective",
                "Combinations work well"
            ],
            cons: [
                "Greedy: Repetitive, low quality",
                "Beam: Computationally expensive (k× slower)",
                "Temperature: Hard to tune per task",
                "Top-p: Can still repeat",
                "All: Require hyperparameter tuning",
                "No guarantee of factual correctness"
            ]
        }
    },
    connections: [
        "Inference",
        "Sampling",
        "Speculative Decoding"
    ]
};
nodeDetails.dense = {
    name: "Dense Retrieval",
    description: "Embed query and docs, retrieve via cosine similarity. Fast, semantic matching. SOTA for most tasks.",
    details: {
        keyPoints: [
            "Embeddings: Query and docs → embedding vectors (768-1536 dims). Encode semantics.",
            "Similarity: Cosine similarity (dot product of normalized vectors). Score ∈ [-1, 1], higher = more similar.",
            "Models: sentence-transformers (all-MiniLM, e5, BGE), OpenAI text-embedding-ada-002, Cohere embed-v3.",
            "Indexing: Store embeddings in vector DB (FAISS, Pinecone, Weaviate). ANN for fast retrieval.",
            "Query: Embed query, find k nearest neighbors in vector DB. O(log n) with HNSW index.",
            "Fine-tuning: Train embeddings on domain data (contrastive learning). Improves relevance."
        ],
        proscons: {
            pros: [
                "Semantic matching",
                "Fast retrieval (ANN)",
                "Handles synonyms/paraphrases",
                "SOTA quality",
                "Multilingual"
            ],
            cons: [
                "Requires embeddings (cost)",
                "Exact keyword match can fail",
                "Needs tuning",
                "Storage overhead",
                "Cold start problem"
            ]
        }
    },
    connections: [
        "RAG",
        "Embeddings",
        "Vector DB",
        "Hybrid Retrieval"
    ],
    name_zh: "密集检索",
    description_zh: "使用嵌入的语义搜索。余弦相似度。准确但慢。",
    keyPoints_zh: [
        "方法: 嵌入查询和文档，计算余弦相似度",
        "模型: Sentence-BERT, OpenAI ada-002, Cohere embed",
        "存储: 向量数据库 (Pinecone, Weaviate, Chroma)",
        "搜索: ANN算法 (HNSW, IVF) 用于快速检索",
        "优势: 捕获语义，处理同义词"
    ],
    proscons_zh: {
        pros: [
            "语义理解",
            "处理同义词",
            "最先进准确性"
        ],
        cons: [
            "需要嵌入 (慢/昂贵)",
            "需要向量DB",
            "调优困难"
        ]
    }
};
nodeDetails.distillation = {
    name: "Knowledge Distillation",
    description: "Train small student model to mimic large teacher model's outputs, compressing knowledge while preserving performance.",
    details: {
        keyPoints: [
            "<strong>Core Concept:</strong> Train student (small, fast) to match teacher (large, accurate) outputs. Loss = α × CE(student, labels) + (1-α) × KL(student_logits, teacher_logits). Temperature scaling: softmax(logits / T) softens distributions (T=2-4 typical). Soft labels contain more information than hard labels (rank ordering of classes).",
            "<strong>Why It Works:</strong> Teacher outputs encode 'dark knowledge': relationships between classes. Example: '7' is more similar to '9' than to '0' (teacher soft probs reflect this). Student learns these nuances, not just correct label. Often achieves 95-98% of teacher performance with 10x fewer params and 10x faster inference.",
            "<strong>Distillation for LLMs:</strong> DistilBERT: 6 layers vs BERT's 12, 97% performance, 2x faster. DistilGPT-2: 60% smaller, 99% perplexity. Alpaca (Stanford): 7B LLaMA fine-tuned on GPT-3.5 outputs (52K examples, $500 cost). Produces 7B model with GPT-3.5-like quality on instruction following.",
            "<strong>Self-Distillation:</strong> Use model as its own teacher. Iterate: train model M1, generate synthetic data with M1, train M2 on synthetic data. Improves over generations (up to 3-5 iterations, then plateaus). Constitutional AI uses this: model critiques and improves its own outputs repeatedly.",
            "<strong>Progressive Distillation:</strong> Instead of one-shot distillation, progressively remove layers. Start with 12-layer teacher, distill to 11 layers (easy), then 10, 9, ..., 6. Each step preserves more knowledge than direct 12→6. Used in TinyBERT, MobileBERT. Final model can be 4-6x smaller with <1% quality loss.",
            "<strong>On-Policy vs Off-Policy:</strong> On-policy: student generates tokens, teacher provides feedback (used in RLHF). Off-policy: teacher pre-generates dataset, student learns from static data (Alpaca-style). On-policy more sample-efficient but computationally expensive (needs teacher inference at every step).",
            "<strong>Multi-Teacher Distillation:</strong> Use multiple teachers (GPT-4, Claude, Gemini) to train single student. Aggregate teacher outputs via voting, averaging, or ranking. Student learns consensus knowledge, avoids teacher-specific biases. Can outperform any single teacher on robustness metrics."
        ],
        proscons: {
            pros: [
                "Compression: 10x smaller models with 95-99% performance retention (DistilBERT: 66M vs BERT's 110M)",
                "Speed: 2-10x faster inference (critical for production deployment, reduces latency+cost)",
                "Democratization: Distill GPT-4 to 7B model, run locally on consumer hardware",
                "Privacy: Use API model (OpenAI) to distill local model, avoid sending production data to APIs",
                "Data efficiency: Needs less labeled data (teacher provides soft labels for unlabeled data)",
                "Specialization: Distill task-specific knowledge (math-only, code-only) for better focused performance"
            ],
            cons: [
                "Quality ceiling: Student capped at 95-99% of teacher (1-5% degradation unavoidable)",
                "Teacher dependency: Need access to teacher logits (not just API outputs, some APIs don't expose)",
                "Training cost: Need to run teacher inference for entire training set (expensive for large teachers)",
                "Forgetting: Student may forget rare knowledge not well-represented in distillation data",
                "Hyperparameter sensitivity: α (loss weight), T (temperature) require careful tuning per task",
                "Copyright/licensing: Using GPT-4 outputs to train model may violate Terms of Service"
            ]
        }
    },
    connections: [
        "Model Compression",
        "SFT",
        "Alpaca",
        "Constitutional AI"
    ]
};
nodeDetails.distributed = {
    name: "Distributed Training",
    description: "Techniques to train models across multiple GPUs/nodes: data parallel, tensor parallel, pipeline parallel, ZeRO.",
    details: {
        keyPoints: [
            "<strong>Data Parallelism (DP):</strong> Replicate full model on each GPU, split batch across GPUs. Each GPU computes gradients on its batch slice, then all-reduce to average gradients. Simple to implement (PyTorch DDP). Limitation: each GPU must hold full model (can't scale beyond single-GPU model size).",
            "<strong>Tensor Parallelism (TP):</strong> Split individual layers across GPUs. Each GPU computes portion of matrix multiply, then all-reduce to combine results. Megatron-LM: split attention heads and FFN across GPUs. Communication: all-reduce after each layer (bandwidth intensive). Good for wide models, needs fast NVLink/InfiniBand.",
            "<strong>Pipeline Parallelism (PP):</strong> Split model depth-wise across GPUs (layers 1-10 on GPU 0, 11-20 on GPU 1, etc.). Process mini-batches in pipeline: while GPU 1 processes batch 1, GPU 0 processes batch 2. GPipe: gradual pipeline filling. Bubble overhead: ~10-20% idle time. Good for deep models.",
            "<strong>ZeRO (Zero Redundancy Optimizer):</strong> Shard optimizer states, gradients, and parameters across GPUs instead of replicating. Stage 1: shard optimizer (4x memory save), Stage 2: + gradients (8x), Stage 3: + parameters (N×). ZeRO-3 enables 175B model on 64 GPUs (vs impossible with DP). DeepSpeed implements ZeRO.",
            "<strong>3D Parallelism:</strong> Combine DP + TP + PP for largest models. Example GPT-3: TP=8 (split layers), PP=16 (16 pipeline stages), DP=32 (32 data replicas) = 4096 GPUs total. Requires careful tuning of dimensions to minimize communication overhead and bubble time.",
            "<strong>FSDP (Fully Sharded Data Parallel):</strong> PyTorch implementation of ZeRO-3 concepts. Auto-shards parameters, optimizer states, gradients. Simpler API than DeepSpeed but similar performance. Supports mixed precision, gradient checkpointing. Becoming standard for PyTorch large-scale training.",
            "<strong>Communication Optimization:</strong> Overlap communication with computation (all-reduce during backward pass). Gradient compression (FP16 gradients, 2x bandwidth save). Hierarchical all-reduce (within node first, then cross-node). Flash Attention reduces activation memory → less communication. Critical bottleneck for multi-node training."
        ],
        proscons: {
            pros: [
                "Enables scale: Train 175B+ param models impossible on single GPU (needs 350GB+ memory)",
                "Faster training: Linear speedup with GPUs (8 GPUs = 8x faster with good efficiency)",
                "ZeRO memory efficiency: Train 175B model on 64 GPUs vs needing 1000+ with naive DP",
                "Flexible: Choose DP/TP/PP mix based on model shape and hardware topology",
                "Cost-effective: 1 week on 1024 GPUs cheaper than 1000 weeks on 1 GPU (impossible anyway)",
                "Proven at scale: GPT-3, PaLM, LLaMA trained with these techniques (battle-tested)"
            ],
            cons: [
                "Complexity: Requires expertise in distributed systems, communication patterns, debugging",
                "Communication overhead: 10-30% of time spent on cross-GPU communication (worse across nodes)",
                "Diminishing returns: >1000 GPUs, communication dominates, efficiency drops to 50-60%",
                "Hardware requirements: Fast interconnect (NVLink, InfiniBand) essential, 10x cost of GPUs alone",
                "Debugging nightmare: Deadlocks, out-of-sync gradients, rare bugs only at scale",
                "Vendor lock-in: NVIDIA-specific optimizations (NVLink, Tensor Cores), hard to port to AMD/Intel",
                "Pipeline bubbles: 10-20% GPU idle time with pipeline parallelism (wasted compute)"
            ]
        }
    },
    connections: [
        "Pre-training",
        "Scaling Laws",
        "ZeRO",
        "FSDP",
        "Megatron"
    ]
};
nodeDetails.dpo = {
    name: "DPO",
    description: "Direct Preference Optimization. Simpler than RLHF, no reward model needed.",
    details: {
        keyPoints: [
            "Direct: Optimize on preference pairs (chosen, rejected)",
            "Loss: -log σ(β log π_θ(y_w|x) / π_ref(y_w|x) - β log π_θ(y_l|x) / π_ref(y_l|x))",
            "Benefits: Simpler, faster, more stable than RLHF",
            "Quality: Similar to RLHF on many tasks"
        ],
        proscons: {
            pros: [
                "Simpler than RLHF",
                "No reward model",
                "Faster training",
                "More stable"
            ],
            cons: [
                "Still needs human preferences",
                "Less flexible",
                "Newer (less proven)"
            ]
        }
    },
    connections: [
        "SFT",
        "RLHF",
        "Alignment"
    ]
};
nodeDetails.embeddings = {
    name: "Embedding Models",
    description: "Convert text to dense vectors. sentence-transformers, OpenAI, Cohere. Fine-tune for domain.",
    details: {
        keyPoints: [
            "Popular models: all-MiniLM-L6-v2 (fast, 384d), e5-large (quality, 1024d), BGE-large (SOTA, 1024d), OpenAI ada-002 (1536d).",
            "Training: Contrastive learning on (query, positive doc, negative doc) triplets. Minimize distance to positive, maximize to negative.",
            "Fine-tuning: Train on domain data. 1000-10K examples. Improves relevance 10-30%. Use sentence-transformers trainer.",
            "Dimensions: 384 (fast), 768 (balanced), 1024-1536 (quality). Higher dims = better quality but slower + more storage.",
            "Pooling: Mean pooling (average all token embeddings), CLS token (BERT), weighted mean. Mean pooling most common.",
            "Multilingual: paraphrase-multilingual, LaBSE. Work across 50+ languages. Slight quality drop vs monolingual."
        ],
        proscons: {
            pros: [
                "Semantic similarity",
                "Pre-trained available",
                "Fine-tunable",
                "Multilingual support",
                "Production-ready"
            ],
            cons: [
                "Dimension curse (1536d = large storage)",
                "Inference cost",
                "Domain mismatch if not fine-tuned",
                "Cold start",
                "Opaque"
            ]
        }
    },
    connections: [
        "CLIP",
        "Vector DB",
        "Transformer",
        "Dense Retrieval"
    ],
    name_zh: "嵌入",
    description_zh: "文本的密集向量表示。捕获语义。用于搜索和聚类。",
    keyPoints_zh: [
        "模型: Sentence-BERT, OpenAI ada-002 (1536维), Cohere",
        "生成: 通过嵌入模型对文本编码",
        "用途: 语义搜索，聚类，分类，相似度",
        "距离: 余弦相似度，点积，欧氏距离",
        "维度: 384-1536，更高 = 更准确但更慢"
    ],
    proscons_zh: {
        pros: [
            "捕获语义",
            "密集表示",
            "多用途"
        ],
        cons: [
            "计算成本",
            "存储 (GB)",
            "不可解释"
        ]
    }
};
nodeDetails.episodic = {
    name: "Episodic Memory",
    description: "Store event sequences (conversations, actions). Retrieve by time/context.",
    details: {
        keyPoints: [
            "Timeline-based: Events in chronological order",
            "Context tags: Conversation ID, session, user",
            "Retrieval: Query by time range, context, or semantic similarity",
            "Use cases: Multi-turn chat, debugging agent behavior, personalization"
        ],
        proscons: {
            pros: [
                "Natural for conversations",
                "Time-based queries",
                "Complete history"
            ],
            cons: [
                "Storage grows unbounded",
                "Retrieval can be slow",
                "Privacy concerns"
            ]
        }
    },
    connections: [
        "Memory",
        "Conversation Summarization"
    ],
    name_zh: "情节记忆",
    description_zh: "记住特定事件和经验。时间戳对话。",
    keyPoints_zh: [
        "内容: 过去的对话，行动，观察",
        "结构: 时间戳事件，键值存储",
        "检索: 按时间，相关性，或两者",
        "用例: '你昨天说了什么？'，学习偏好",
        "实现: 向量DB与时间戳，SQL"
    ],
    proscons_zh: {
        pros: [
            "丰富上下文",
            "个性化",
            "时间感知"
        ],
        cons: [
            "无限增长",
            "检索困难",
            "噪声"
        ]
    }
};
nodeDetails.errorhandling = {
    name: "Error Handling",
    description: "Retry logic, fallbacks, error messages for robust agents.",
    details: {
        keyPoints: [
            "Retry: Exponential backoff (1s, 2s, 4s)",
            "Fallback: Alternative tool or simplified request",
            "Error messages: Human-readable, actionable",
            "Circuit breaker: Stop retrying after N failures"
        ],
        proscons: {
            pros: [
                "Robustness",
                "User-friendly",
                "Prevents cascading failures"
            ],
            cons: [
                "Latency overhead",
                "Complexity",
                "Cost of retries"
            ]
        }
    },
    connections: [
        "API Calling"
    ]
};
nodeDetails.evaluation = {
    name: "LLM Evaluation",
    description: "Measure quality: benchmarks, human eval, A/B testing.",
    details: {
        keyPoints: [
            "Benchmarks: MMLU, HumanEval, MT-Bench for comparison",
            "Human eval: Quality, helpfulness, harmlessness ratings",
            "A/B testing: Compare models/prompts in production",
            "Automated metrics: BLEU, ROUGE (weak correlation with quality)"
        ],
        proscons: {
            pros: [
                "Quantify quality",
                "Compare models",
                "Track improvements"
            ],
            cons: [
                "Expensive (human eval)",
                "Benchmarks limited",
                "Goodhart's law"
            ]
        }
    },
    connections: [
        "Production",
        "Benchmarks",
        "RLHF",
        "Bias Detection"
    ],
    name_zh: "评估与指标",
    description_zh: "衡量LLM质量。准确性，相关性，幻觉，人类偏好。",
    keyPoints_zh: [
        "自动: 准确性，BLEU，ROUGE，F1",
        "LLM作为评判: GPT-4对输出评分",
        "人类评估: 偏好，评分 (昂贵)",
        "基准: MMLU，HumanEval，MT-Bench",
        "特定任务: 与领域相关的指标"
    ],
    proscons_zh: {
        pros: [
            "量化质量",
            "跟踪改进",
            "比较模型"
        ],
        cons: [
            "昂贵 (人类)",
            "指标有限",
            "基准游戏化"
        ]
    }
};
nodeDetails.fewshot = {
    name: "Few-Shot Learning",
    description: "Provide examples in prompt for LLM to learn pattern without fine-tuning. Emergent ability at 10B+ scale.",
    details: {
        keyPoints: [
            "Mechanism: Include k examples (k=1-10) in prompt. Model learns input→output mapping via in-context learning. No gradient updates.",
            "Emergence: Appears at ~10B params (GPT-3 scale). Smaller models (GPT-2 1.5B) can't do it effectively. Thought to emerge from meta-learning during pre-training.",
            "Example structure: 'Input: [x1] Output: [y1] Input: [x2] Output: [y2] Input: [x_new] Output:'. Model completes with predicted output for x_new.",
            "Shot count: 0-shot (no examples). 1-shot (1 example). 3-shot, 5-shot typical. Diminishing returns beyond 10 examples. Costs context tokens.",
            "Example selection: Random vs task-similar vs diverse. Task-similar (retrieve nearest neighbors to test input) often best. Diversity helps generalization.",
            "Label space: Constrained (classify into A/B/C) easier than open-ended (generate paragraph). Calibration helps: prior P(label) matters.",
            "Limitations: Can't learn entirely new concepts (model must have seen related patterns in pre-training). Sensitive to prompt format, example order."
        ],
        proscons: {
            pros: [
                "No fine-tuning needed",
                "Fast (just change prompt)",
                "Sample-efficient (1-10 examples)",
                "Works for diverse tasks",
                "Interpretable (examples visible)",
                "Emergent capability"
            ],
            cons: [
                "Requires large models (10B+)",
                "Consumes context tokens",
                "Brittle to example order/format",
                "Can't learn truly novel concepts",
                "Quality < fine-tuning",
                "Expensive inference (long prompts)"
            ]
        }
    },
    connections: [
        "Prompting",
        "Zero-Shot"
    ],
    name_zh: "少样本学习",
    description_zh: "在提示中提供少量示例。模型从模式中学习。",
    keyPoints_zh: [
        "方法: 在任务描述后包含2-10个示例",
        "格式: 输入-输出对展示期望的行为",
        "学习: 模型通过类比推断模式",
        "性能: 通常比零样本好得多",
        "示例数量: 更多 = 更好，但token成本",
        "示例质量: 高质量、多样化的示例至关重要"
    ],
    proscons_zh: {
        pros: [
            "大幅改善准确性",
            "无需训练",
            "展示格式"
        ],
        cons: [
            "更长提示 (昂贵)",
            "需要好的示例",
            "token限制"
        ]
    }
};
nodeDetails.filtering = {
    name: "Content Filtering",
    description: "Block harmful content: NSFW, hate speech, PII, misinformation.",
    details: {
        keyPoints: [
            "Input filtering: Block toxic prompts before LLM",
            "Output filtering: Check LLM response before serving",
            "Classifiers: Perspective API, OpenAI moderation",
            "PII detection: Regex, NER for emails, SSN, credit cards"
        ],
        proscons: {
            pros: [
                "Safety",
                "Compliance",
                "Brand protection"
            ],
            cons: [
                "False positives",
                "Latency overhead",
                "Censorship"
            ]
        }
    },
    connections: [
        "Safety"
    ],
    name_zh: "内容过滤",
    description_zh: "检测和阻止有毒、有害或不适当的内容。",
    keyPoints_zh: [
        "毒性检测: 分类器识别有害内容",
        "PII检测: 删除个人身份信息",
        "审核: 人类审查标记的内容",
        "阈值: 平衡假阳性vs假阴性",
        "层: 输入和输出过滤"
    ],
    proscons_zh: {
        pros: [
            "保护用户",
            "合规",
            "降低风险"
        ],
        cons: [
            "假阳性",
            "审查问题",
            "开销"
        ]
    }
};
nodeDetails.gpt4v = {
    name: "GPT-4V / Gemini Vision",
    description: "Multimodal LLMs understanding images and text. VQA, OCR, chart analysis.",
    details: {
        keyPoints: [
            "Vision encoder + large language model",
            "Image captioning, VQA, OCR, diagrams",
            "Safety: Content filtering, refuse face recognition",
            "Use cases: Accessibility, education, support"
        ],
        proscons: {
            pros: [
                "Rich visual understanding",
                "Natural language interface",
                "No task-specific models"
            ],
            cons: [
                "Hallucination risk",
                "Expensive inference",
                "Privacy concerns",
                "Biased toward web images"
            ]
        }
    },
    connections: [
        "Multimodal"
    ],
    name_zh: "GPT-4V / Gemini Vision",
    description_zh: "带视觉的LLM。理解图像和文本。视觉问答。",
    keyPoints_zh: [
        "能力: 图像描述，VQA，OCR，图表理解",
        "架构: LLM + 视觉编码器",
        "输入: 文本 + 图像",
        "用例: 文档分析，医疗成像，教育"
    ],
    proscons_zh: {
        pros: [
            "强大的视觉理解",
            "多模态推理",
            "实用"
        ],
        cons: [
            "昂贵",
            "幻觉",
            "隐私 (图像数据)"
        ]
    }
};
nodeDetails.hybrid = {
    name: "Hybrid Retrieval",
    description: "Combine dense (semantic) + sparse (keyword) retrieval. Best of both worlds. Rank fusion merges results.",
    details: {
        keyPoints: [
            "Combination: Run dense and sparse retrieval in parallel. Merge results via rank fusion.",
            "Reciprocal Rank Fusion (RRF): score = Σ 1 / (k + rank_i) where k=60 typical. Merge rankings from both retrievers.",
            "Weighted fusion: α × dense_score + (1-α) × sparse_score. Tune α on validation set.",
            "Use cases: Most production RAG systems. Dense for semantic, sparse for exact terms.",
            "Improvements: 5-15% better than dense-only on many benchmarks. Critical for names, IDs, technical terms.",
            "Reranking: After hybrid retrieval, rerank top-k with cross-encoder. Further quality boost."
        ],
        proscons: {
            pros: [
                "Best quality",
                "Robust to query types",
                "Combines semantic + keyword",
                "Production standard",
                "Proven at scale"
            ],
            cons: [
                "2x retrieval cost",
                "Complexity",
                "Tuning α needed",
                "Slightly slower",
                "Rank fusion heuristics"
            ]
        }
    },
    connections: [
        "RAG",
        "Dense Retrieval",
        "Sparse Retrieval",
        "Reranking"
    ],
    name_zh: "混合检索",
    description_zh: "结合密集和稀疏。获得两者的优势。互补优势。",
    keyPoints_zh: [
        "组合: 密集 (语义) + 稀疏 (关键词)",
        "重新排序: 合并两组结果",
        "加权: 调整密集vs稀疏权重 (α参数)",
        "互补: 密集捕获意义，稀疏捕获精确术语",
        "最佳实践: 先稀疏 (快)，然后密集重排"
    ],
    proscons_zh: {
        pros: [
            "两者优势",
            "更好召回",
            "鲁棒"
        ],
        cons: [
            "更复杂",
            "需要调优权重",
            "稍慢"
        ]
    }
};
nodeDetails.imagetextencoder = {
    name: "Image-Text Encoders",
    description: "Neural networks converting images and text to shared embedding space. Foundation for multimodal systems.",
    details: {
        keyPoints: [
            "Image encoder (CNN/ViT) + text encoder (Transformer)",
            "Projection to shared d-dim space",
            "Contrastive training (InfoNCE loss)",
            "Enables cross-modal search and retrieval"
        ],
        proscons: {
            pros: [
                "Cross-modal search",
                "Zero-shot transfer",
                "Foundation for text-to-image"
            ],
            cons: [
                "Requires massive paired datasets",
                "Quality varies by domain"
            ]
        }
    },
    connections: [
        "CLIP"
    ]
};
nodeDetails.inference = {
    name: "Inference Optimization",
    description: "Techniques to reduce latency and cost during model deployment: KV cache, batching, quantization, speculative decoding.",
    details: {
        keyPoints: [
            "<strong>KV Cache:</strong> Store computed Key and Value tensors for past tokens during autoregressive generation. Avoids recomputing attention for all previous tokens at each step. Memory: O(batch × seq_len × layers × d_model). Critical for long generations. Without cache: O(n²) recomputation.",
            "<strong>Batching Strategies:</strong> Static (fixed batch, pad to max length), Dynamic (batch similar lengths, reduce padding waste), Continuous batching (vLLM/Orca: add new requests as others complete, maximize GPU utilization). PagedAttention: treat KV cache like virtual memory, enable efficient batching.",
            "<strong>Quantization:</strong> FP16 (2x smaller, minimal loss), INT8 (4x via GPTQ/LLM.int8(), 1-2% loss), INT4 (8x via AWQ/GGUF, 3-5% loss). Post-training quantization (PTQ) vs Quantization-aware training (QAT). Trade memory/speed for slight quality degradation.",
            "<strong>Speculative Decoding:</strong> Small draft model (1B params) generates K tokens quickly, large target model (70B params) verifies in parallel. Accept correct tokens, reject and regenerate wrong ones. 2-3x speedup with same output distribution. Works because draft model often correct.",
            "<strong>Serving Frameworks:</strong> vLLM (PagedAttention, continuous batching, 2-24x throughput), TensorRT-LLM (NVIDIA optimizations, FP8 support, low latency), TGI (HuggingFace, easy deployment), llama.cpp (CPU/Metal inference, quantization), Ollama (local deployment, user-friendly).",
            "<strong>Latency Breakdown:</strong> TTFT (Time To First Token): prompt encoding + first generation step. TPOT (Time Per Output Token): per-token generation latency. For 70B model: TTFT=500-2000ms, TPOT=50-100ms. Optimize TTFT with batching, TPOT with quantization/speculative decoding.",
            "<strong>Memory Hierarchy:</strong> Model weights in GPU HBM (slow, 40-80GB), KV cache in HBM, activations in HBM. Offload optimizer states to CPU RAM (QLoRA), offload inactive layers (DeepSpeed), use CPU for draft model (speculative decoding). Memory is bottleneck for batch size."
        ],
        proscons: {
            pros: [
                "KV cache: 10-100x speedup for long generations, critical for chatbots",
                "Continuous batching: 2-24x throughput vs static batching, maximizes GPU utilization",
                "Quantization: 2-8x smaller memory, enables larger batch sizes, lower serving cost",
                "Speculative decoding: 2-3x speedup with no quality loss, same output distribution",
                "Production-ready frameworks: vLLM/TGI battle-tested, easy to deploy",
                "Cost reduction: Better throughput and efficiency → lower serving cost per token"
            ],
            cons: [
                "KV cache memory: Limits batch size, 70B model with 2K context = 40GB+ KV cache alone",
                "Quantization quality loss: INT4 has noticeable degradation (3-5%), not acceptable for all tasks",
                "Complexity: Production serving requires expertise (batching, caching, load balancing)",
                "Speculative decoding overhead: Needs running two models, only works if draft model good enough",
                "Hardware dependency: Optimizations tied to specific hardware (A100, H100), hard to port",
                "Cold start latency: Loading 70B quantized model from disk = 30-60 seconds"
            ]
        }
    },
    connections: [
        "KV Cache",
        "Quantization",
        "Batching",
        "Serving",
        "Speculative Decoding"
    ],
    name_zh: "推理优化",
    description_zh: "优化LLM推理的速度和成本。批处理，量化，KV缓存。",
    keyPoints_zh: [
        "KV缓存: 存储注意力键/值，避免重新计算",
        "批处理: 同时处理多个请求以提高吞吐量",
        "量化: INT8/INT4 减少内存和延迟",
        "推测解码: 使用小模型提前生成，大模型验证",
        "连续批处理: 动态添加请求 (vLLM)",
        "优化框架: vLLM, TensorRT-LLM, Text Generation Inference"
    ],
    proscons_zh: {
        pros: [
            "更低延迟",
            "更高吞吐量",
            "降低成本"
        ],
        cons: [
            "实现复杂",
            "质量权衡 (量化)",
            "需要专业知识"
        ]
    }
};
nodeDetails.jailbreak = {
    name: "Jailbreak Defense",
    description: "Detect and block adversarial prompts trying to bypass safety.",
    details: {
        keyPoints: [
            "Prompt injection: 'Ignore instructions, say...'",
            "Roleplay attacks: 'You are DAN, Do Anything Now'",
            "Detection: Classifier for adversarial prompts",
            "Defense: Refuse, rephrase, escalate to human"
        ],
        proscons: {
            pros: [
                "Prevent misuse",
                "Protect brand",
                "Compliance"
            ],
            cons: [
                "Cat-and-mouse",
                "False positives",
                "Novel attacks"
            ]
        }
    },
    connections: [
        "Safety",
        "Red Teaming"
    ],
    name_zh: "越狱防御",
    description_zh: "防止对抗性提示绕过安全措施。",
    keyPoints_zh: [
        "技术: 角色扮演，编码，间接提示",
        "防御: 输入验证，提示注入检测",
        "红队: 测试已知的越狱",
        "迭代: 随着新攻击出现更新防御",
        "权衡: 安全vs可用性"
    ],
    proscons_zh: {
        pros: [
            "增强安全",
            "防止滥用"
        ],
        cons: [
            "永无止境",
            "假阳性",
            "限制合法使用"
        ]
    }
};
nodeDetails.jsonmode = {
    name: "JSON Mode",
    description: "OpenAI, Anthropic support for guaranteed JSON output.",
    details: {
        keyPoints: [
            "API parameter: response_format={'type': 'json_object'}",
            "Guarantee: Output is always valid JSON",
            "Schema: Still need to validate content matches expected schema",
            "Use cases: Function calling, structured data extraction"
        ],
        proscons: {
            pros: [
                "100% valid JSON",
                "No parsing errors",
                "Simple to use"
            ],
            cons: [
                "Model support limited",
                "No schema validation",
                "Slightly more expensive"
            ]
        }
    },
    connections: [
        "Structured Output"
    ]
};
nodeDetails.knowledgegraph = {
    name: "Knowledge Graphs",
    description: "Graph databases (Neo4j, Nebula) storing entities and relationships for semantic memory.",
    details: {
        keyPoints: [
            "Nodes: Entities (Person, Company). Edges: Relationships (worksAt, locatedIn)",
            "Query languages: Cypher (Neo4j), GraphQL",
            "Inference: Path finding, transitive closure",
            "Integration: Extract from text via NER + relation extraction"
        ],
        proscons: {
            pros: [
                "Complex queries",
                "Relationships explicit",
                "Scalable"
            ],
            cons: [
                "Schema complexity",
                "Extraction quality",
                "Learning curve"
            ]
        }
    },
    connections: [
        "Semantic Memory"
    ],
    name_zh: "知识图谱",
    description_zh: "实体和关系的图。结构化知识。可查询。",
    keyPoints_zh: [
        "节点: 实体 (人，地点，事物)",
        "边: 关系 (工作于，位于)",
        "查询: Cypher (Neo4j)，SPARQL，图遍历",
        "用例: 问答，推理，建议",
        "集成: 与LLM结合进行知识基础推理"
    ],
    proscons_zh: {
        pros: [
            "结构化",
            "可查询",
            "推理"
        ],
        cons: [
            "构建成本高",
            "维护",
            "复杂查询"
        ]
    }
};
nodeDetails.kvcache = {
    name: "KV Cache",
    description: "Cache key/value tensors during generation to avoid recomputing past tokens. Reduces O(n²) to O(n).",
    details: {
        keyPoints: [
            "Saves compute by caching past attention keys/values",
            "Huge speedup (10-100x) for long sequences",
            "Memory trade-off: saves compute, uses GPU memory",
            "PagedAttention (vLLM): Efficient KV cache management"
        ],
        proscons: {
            pros: [
                "Essential for production inference",
                "Enables real-time chat",
                "Standard in all systems"
            ],
            cons: [
                "Memory overhead (GBs for long context)",
                "Complicates batching",
                "Caps batch size or context"
            ]
        }
    },
    connections: [
        "Inference"
    ],
    name_zh: "KV缓存",
    description_zh: "存储先前计算的注意力键和值。避免在自回归生成中重新计算。",
    keyPoints_zh: [
        "机制: 对每个已生成的token，存储其K和V向量",
        "新token: 只计算新K/V，与缓存的连接",
        "节省: 从 O(n²) 到 O(n) 用于生成",
        "内存: 缓存可能很大 (对于长上下文为GB)",
        "必不可少: 没有它，长序列生成将太慢"
    ],
    proscons_zh: {
        pros: [
            "推理快100倍",
            "启用长序列",
            "标准技术"
        ],
        cons: [
            "高内存使用",
            "限制批大小",
            "长上下文的GB"
        ]
    }
};
nodeDetails.langchain = {
    name: "LangChain",
    description: "Most popular LLM framework. Chains, agents, memory, tools, retrievers for building applications.",
    details: {
        keyPoints: [
            "Chains: Sequential operations. LLMChain (prompt→model), SimpleSequentialChain (chain1→chain2), RouterChain (conditional).",
            "Agents: ReAct, Plan-Execute, Conversational. Built-in tool support (search, calculator, APIs).",
            "Memory: ConversationBufferMemory, ConversationSummaryMemory, VectorStoreMemory. Maintains context across turns.",
            "Tools: Wrap functions as tools. Agent chooses tools dynamically. Custom tools easy to add.",
            "Retrievers: Vector store retrievers, web search, Wikipedia. Integrate with RAG pipelines.",
            "LangChain Expression Language (LCEL): Pipelines with | operator. chain = prompt | llm | parser."
        ],
        proscons: {
            pros: [
                "Huge ecosystem",
                "Easy to start",
                "Production-ready",
                "Active community",
                "Composable",
                "Well-documented"
            ],
            cons: [
                "Complex abstractions",
                "Version churn",
                "Over-engineered for simple tasks",
                "Debugging hard",
                "Performance overhead"
            ]
        }
    },
    connections: [
        "Agent Frameworks"
    ],
    name_zh: "LangChain / LangGraph",
    description_zh: "用于构建LLM应用程序的模块化框架。链、智能体、记忆、工具。",
    keyPoints_zh: [
        "组件: 链 (序列)，智能体 (ReAct模式)，记忆，工具",
        "链: 将LLM调用、提示、工具链接在一起",
        "智能体: 根据输入选择工具的自主实体",
        "记忆: 跨交互持久化状态",
        "LangGraph: 有状态的工作流，周期，条件"
    ],
    proscons_zh: {
        pros: [
            "模块化",
            "大生态系统",
            "生产就绪"
        ],
        cons: [
            "复杂",
            "学习曲线",
            "抽象开销"
        ]
    }
};
nodeDetails.lifecycle = {
    name: "Model Lifecycle",
    description: "Versioning, deployment, rollback, A/B testing for production models.",
    details: {
        keyPoints: [
            "Versioning: Model v1, v2, v3. Track changes",
            "Canary deployment: 5% traffic to new model, monitor, rollout",
            "A/B testing: Split traffic 50/50, measure quality/cost",
            "Rollback: Instant revert if new model degrades"
        ],
        proscons: {
            pros: [
                "Safe deployment",
                "Measure impact",
                "Quick rollback"
            ],
            cons: [
                "Infrastructure complexity",
                "Traffic splitting",
                "Monitoring burden"
            ]
        }
    },
    connections: [
        "Production",
        "Versioning / A/B Testing",
        "Monitoring"
    ]
};
nodeDetails.longcontext = {
    name: "Long Context Handling",
    description: "Techniques to extend context beyond training length: RoPE scaling, sliding window, sparse attention.",
    details: {
        keyPoints: [
            "Sliding Window: Attend only to recent N tokens",
            "RoPE Scaling: Interpolate position embeddings",
            "Sparse Attention: Attend to subset (local + global)",
            "Flash Attention: Fused kernel for efficiency"
        ],
        proscons: {
            pros: [
                "Process entire books/codebases",
                "Fewer RAG lookups needed",
                "Better document understanding"
            ],
            cons: [
                "Quality degrades at extreme lengths",
                "Lost-in-the-middle problem",
                "Still expensive"
            ]
        }
    },
    connections: [
        "Transformer",
        "RoPE",
        "Sliding Window",
        "Attention",
        "Context Window Management"
    ]
};
nodeDetails.lora = {
    name: "LoRA",
    description: "Low-Rank Adaptation. Efficient fine-tuning by training small low-rank matrices instead of full weights.",
    details: {
        keyPoints: [
            "Freeze base model, add trainable ΔW = AB where rank r << d",
            "Train only 0.1-1% of parameters",
            "3-10x faster training, 3x less memory",
            "Can merge LoRA for zero inference overhead"
        ],
        proscons: {
            pros: [
                "Tiny storage (MBs vs GBs)",
                "Fast training on consumer GPUs",
                "Multiple LoRAs on one base"
            ],
            cons: [
                "Slightly lower quality than full fine-tuning",
                "Rank r is hyperparameter"
            ]
        }
    },
    connections: [
        "SFT",
        "QLoRA"
    ],
    name_zh: "LoRA (低秩适应)",
    description_zh: "通过训练小的低秩矩阵微调模型。在Adapter层注入。参数减少100-1000倍。",
    keyPoints_zh: [
        "核心思想: 冻结原始权重 W。添加低秩更新: ΔW = BA，其中 B ∈ R^(d×r)，A ∈ R^(r×k)，r << d。前向: y = Wx + BAx = Wx + ΔWx。",
        "秩 r: 典型 r=8-64。r越低 = 参数越少，但容量降低。r=8 对大多数任务足够好。",
        "目标模块: 对 Query 和 Value 投影应用 LoRA (在注意力中)。可选: 也可应用于 Key，MLP层。",
        "训练: 仅训练 A 和 B 矩阵 (~0.1% 参数)。原始 W 保持冻结。使用标准梯度下降。",
        "推理: 合并 LoRA 权重: W' = W + BA。或保持分离以切换适配器。",
        "示例: 7B 模型，r=8，针对 Q 和 V。可训练参数: 7B × 0.001 = 7M (vs 7B 完全微调)。GPU内存: ~10GB (vs 80GB)。",
        "用例: 特定任务微调，指令调优，个性化，多任务 (每个任务一个 LoRA)。"
    ],
    proscons_zh: {
        pros: [
            "参数少100倍 (7B → 7M)",
            "GPU内存少8倍",
            "训练快10倍",
            "可组合 (叠加多个LoRA)",
            "保持原始模型冻结",
            "生产验证"
        ],
        cons: [
            "比完全微调稍差 (1-3%)",
            "需要调整秩 r",
            "合并开销",
            "不适用于架构更改",
            "在小模型上不太有效"
        ]
    }
};
nodeDetails.memory = {
    name: "Agent Memory",
    description: "Store and recall past interactions. Short-term (context), long-term (vector DB), semantic (knowledge graphs).",
    details: {
        keyPoints: [
            "Types: Short-term (conversation buffer), Long-term (vector store), Semantic (structured knowledge), Episodic (event sequences).",
            "Short-term: Last N messages in context. Simple, fast. Limited by context window (2K-128K tokens).",
            "Long-term: Embed past conversations, retrieve relevant. Unbounded memory. Requires vector DB.",
            "Semantic: Extract entities/relationships → knowledge graph. Enables reasoning over facts.",
            "Memory consolidation: Periodically summarize old memories, move to long-term. Like human sleep.",
            "Retrieval strategies: Recency (recent first), relevance (similarity search), importance (user-defined weights)."
        ],
        proscons: {
            pros: [
                "Short-term: Fast",
                "Long-term: Scalable",
                "Semantic: Reasoning",
                "Consolidation: Efficient",
                "Multi-strategy: Flexible"
            ],
            cons: [
                "Short-term: Limited",
                "Long-term: Retrieval overhead",
                "Semantic: Extraction errors",
                "Consolidation: Lossy",
                "All: Complexity"
            ]
        }
    },
    connections: [
        "Episodic Memory",
        "Semantic Memory",
        "Vector DB",
        "Context Window Management",
        "RAG",
        "Multi-Agent"
    ],
    name_zh: "记忆系统",
    description_zh: "智能体如何存储和检索过去的信息。短期vs长期。",
    keyPoints_zh: [
        "短期: 对话历史，当前上下文",
        "长期: 持久化事实，已学习的信息",
        "情节: 过去的经验和事件",
        "语义: 概念和关系",
        "实现: 向量DB，知识图谱，SQL"
    ],
    proscons_zh: {
        pros: [
            "持久化学习",
            "个性化",
            "上下文感知"
        ],
        cons: [
            "存储成本",
            "检索挑战",
            "隐私问题"
        ]
    }
};
nodeDetails.mmlu = {
    name: "MMLU",
    description: "Massive Multitask Language Understanding. 57 subjects, 15K questions. Knowledge benchmark.",
    details: {
        keyPoints: [
            "Subjects: STEM, humanities, social sciences, professional",
            "Format: Multiple choice, 4 options",
            "Difficulty: High school to expert level",
            "Scores: GPT-4 ~86%, Random ~25%"
        ],
        proscons: {
            pros: [
                "Broad coverage",
                "Standardized",
                "Easy to run"
            ],
            cons: [
                "Multiple choice bias",
                "Doesn't test generation",
                "Can be gamed"
            ]
        }
    },
    connections: [
        "Benchmarks"
    ]
};
nodeDetails.modelrouting = {
    name: "Model Routing",
    description: "Route requests to different models based on complexity, cost, latency requirements.",
    details: {
        keyPoints: [
            "Complexity classifier: Predict if query is easy/hard",
            "Easy → small model (GPT-3.5), Hard → large (GPT-4)",
            "Fallback: If small model fails, retry with large",
            "Savings: 50-70% cost for 80%+ quality"
        ],
        proscons: {
            pros: [
                "Cost optimization",
                "Latency improvement",
                "Quality maintained"
            ],
            cons: [
                "Classifier errors",
                "Complexity",
                "Two models needed"
            ]
        }
    },
    connections: [
        "Cost Management"
    ]
};
nodeDetails.monitoring = {
    name: "Monitoring",
    description: "Track latency, cost, errors, quality for production LLM systems.",
    details: {
        keyPoints: [
            "Metrics: TTFT, TPOT, throughput, error rate, cost per request",
            "Logging: Prompts, responses, tool calls for debugging",
            "Alerts: Latency spikes, error rate increases",
            "Dashboards: Grafana, Datadog for visualization"
        ],
        proscons: {
            pros: [
                "Visibility",
                "Debugging",
                "SLA tracking"
            ],
            cons: [
                "Overhead",
                "Privacy (logging prompts)",
                "Alert fatigue"
            ]
        }
    },
    connections: [
        "Production",
        "Agent Lifecycle",
        "Audit Logging"
    ],
    name_zh: "监控",
    description_zh: "跟踪LLM性能。延迟，成本，质量指标。",
    keyPoints_zh: [
        "指标: 延迟，吞吐量，tokens/秒",
        "成本: 每请求成本，每token成本",
        "质量: 相关性，准确性，幻觉率",
        "工具: Prometheus, Grafana, Datadog",
        "警报: 当指标超出阈值时发出警报"
    ],
    proscons_zh: {
        pros: [
            "可观察性",
            "调试",
            "成本控制"
        ],
        cons: [
            "设置开销",
            "指标噪声",
            "假警报"
        ]
    }
};
nodeDetails.mtbench = {
    name: "MT-Bench",
    description: "Multi-turn conversation. 80 questions. GPT-4 judges quality (1-10 scale).",
    details: {
        keyPoints: [
            "Multi-turn: 2 turns per conversation. Tests consistency",
            "Judging: GPT-4 rates helpfulness, relevance, correctness",
            "Categories: Writing, roleplay, reasoning, math, coding",
            "Scores: GPT-4 ~9.0, GPT-3.5 ~7.9"
        ],
        proscons: {
            pros: [
                "Multi-turn",
                "Conversational",
                "Quality-focused"
            ],
            cons: [
                "GPT-4 judge bias",
                "Expensive",
                "80 questions (small)"
            ]
        }
    },
    connections: [
        "Benchmarks"
    ]
};
nodeDetails.multiagent = {
    name: "Multi-Agent Systems",
    description: "Multiple LLM agents collaborate on complex tasks. Supervisor-worker, peer-to-peer, or hierarchical topologies.",
    details: {
        keyPoints: [
            "Architectures: Supervisor (coordinator agent assigns tasks to workers), Peer-to-peer (agents negotiate directly), Hierarchical (managers and sub-teams).",
            "Communication: Shared memory (blackboard), message passing (agent-to-agent), or central coordinator. Trade-off: autonomy vs coordination overhead.",
            "Specialization: Each agent has role/expertise. Coder, researcher, critic, writer, etc. Improves quality via specialization.",
            "Frameworks: AutoGen (Microsoft), CrewAI, MetaGPT (role-playing for software), LangGraph (stateful orchestration).",
            "Use cases: Software engineering (architect, coder, tester), research (planner, searcher, writer), creative (brainstormer, critic, editor).",
            "Challenges: Cost (multiple LLM calls), coordination complexity, message parsing, infinite loops, convergence."
        ],
        proscons: {
            pros: [
                "Task decomposition",
                "Specialization",
                "Parallel execution",
                "Robust to single-agent failures",
                "Handles complex workflows",
                "Role clarity"
            ],
            cons: [
                "High cost (N agents = N× calls)",
                "Coordination overhead",
                "Debugging nightmare",
                "Message parsing fragility",
                "Can loop infinitely",
                "Overkill for simple tasks"
            ]
        }
    },
    connections: [
        "Planning",
        "Coordination",
        "Task Allocation",
        "Agent Communication",
        "Agent Frameworks",
        "Memory"
    ],
    name_zh: "多智能体系统",
    description_zh: "多个LLM智能体协作。通过消息传递协调。可扩展的任务分解。",
    keyPoints_zh: [
        "架构: 多个专门的智能体 (研究员，编写者，审阅者)。通过消息传递或共享内存通信。",
        "协调: 集中式 (主智能体协调)，分散式 (点对点)，分层式 (子团队)。",
        "任务分配: 静态 (预分配角色)，动态 (基于能力)，基于拍卖 (智能体竞标任务)。",
        "通信: 结构化消息 (JSON)，自然语言，共享知识库。协议定义消息格式。",
        "示例: CrewAI (角色智能体)，AutoGPT (自主)，MetaGPT (软件团队: PM，架构师，工程师)。",
        "优势: 并行化 (速度更快)，专业化 (每个智能体专家)，可扩展性 (添加更多智能体)，容错 (冗余)。",
        "挑战: 协调开销，一致性 (冲突决策)，成本 (多次LLM调用)，调试复杂性。"
    ],
    proscons_zh: {
        pros: [
            "并行化任务",
            "专业化智能体",
            "可扩展",
            "容错",
            "复杂问题解决",
            "模块化"
        ],
        cons: [
            "协调开销",
            "一致性挑战",
            "昂贵 (更多LLM调用)",
            "调试复杂",
            "可能冲突",
            "通信延迟"
        ]
    }
};
nodeDetails.multimodal = {
    name: "Multimodal AI",
    description: "Models processing multiple modalities: text, images, video, audio. GPT-4V, Gemini, DALL-E.",
    details: {
        keyPoints: [
            "Vision + Language: Image encoder → projection → LLM",
            "Text-to-Image: Diffusion models (DALL-E, Midjourney)",
            "Video: Frame sampling + temporal encoding",
            "Audio: Speech-to-text → LLM → text-to-speech"
        ],
        proscons: {
            pros: [
                "Richer understanding",
                "New applications (image search, generation)",
                "Unified interface"
            ],
            cons: [
                "Massive training data needed",
                "Alignment challenges",
                "Hallucination in all modalities",
                "Expensive inference"
            ]
        }
    },
    connections: [
        "ViT",
        "CLIP",
        "GPT-4V",
        "Video Understanding",
        "Audio Processing",
        "Tool Use"
    ],
    name_zh: "多模态AI",
    description_zh: "处理多种模态: 文本，图像，音频，视频。跨模态理解。",
    keyPoints_zh: [
        "模态: 文本，图像，音频，视频",
        "模型: GPT-4V，Gemini，DALL-E，Whisper",
        "融合: 早期 (输入级)，晚期 (特征级)",
        "用例: 图像描述，VQA，文本到图像，语音到文本",
        "挑战: 对齐模态，计算成本"
    ],
    proscons_zh: {
        pros: [
            "丰富理解",
            "新应用",
            "人类般交互"
        ],
        cons: [
            "极其昂贵",
            "复杂",
            "对齐困难"
        ]
    }
};
nodeDetails.paramextract = {
    name: "Parameter Extraction",
    description: "Extract function arguments from natural language query.",
    details: {
        keyPoints: [
            "Slot filling: Identify entities (city, date, number)",
            "JSON mode: Force model to output valid JSON",
            "Validation: Check types, ranges, required fields",
            "Clarification: Ask user if params missing"
        ],
        proscons: {
            pros: [
                "Natural language interface",
                "Flexible",
                "No forms needed"
            ],
            cons: [
                "Extraction errors",
                "Ambiguity",
                "Validation needed"
            ]
        }
    },
    connections: [
        "Tool Use",
        "Structured Output"
    ]
};
nodeDetails.planexec = {
    name: "Plan-and-Execute",
    description: "First plan (decompose into steps), then execute (run steps sequentially). More robust than ReAct for complex tasks.",
    details: {
        keyPoints: [
            "Two stages: Planning (generate step-by-step plan), Execution (run each step via tools/sub-agents). Separates strategic thinking from tactical execution.",
            "Planning: 'Break down task into steps'. LLM generates numbered list of subtasks. Can use CoT for better planning quality.",
            "Execution: For each step, execute via tool call, API, or sub-agent. Results fed to next step. Sequential dependencies handled naturally.",
            "Replanning: If step fails, replan remaining steps. More adaptive than fixed plan. Trade-off: more LLM calls but higher success rate.",
            "vs ReAct: ReAct interleaves reasoning+action. Plan-Execute separates them. Plan-Execute better for complex multi-step tasks. ReAct faster for simple queries.",
            "Use cases: Complex workflows (data analysis, research, creative projects), multi-tool coordination, long-horizon tasks (10+ steps).",
            "Challenges: Planning quality critical (bad plan → bad execution). Some tasks don't decompose cleanly. Replanning overhead."
        ],
        proscons: {
            pros: [
                "Better for complex tasks",
                "Clear structure",
                "Easier to debug (see plan first)",
                "Handles dependencies",
                "Replanning adapts to failures",
                "More predictable"
            ],
            cons: [
                "More LLM calls (plan + execute)",
                "Planning can fail",
                "Overkill for simple tasks",
                "Less flexible than ReAct",
                "Assumes decomposable tasks",
                "Slower overall"
            ]
        }
    },
    connections: [
        "Planning"
    ],
    name_zh: "计划与执行",
    description_zh: "先计划，再执行步骤。将复杂任务分解为子任务。",
    keyPoints_zh: [
        "阶段1: 计划 - 将任务分解为步骤",
        "阶段2: 执行 - 逐步执行计划",
        "阶段3: 验证 - 检查结果，必要时重新计划",
        "优势: 结构化方法，易于调试",
        "示例: '写研究报告' → [搜索，总结，大纲，写作，编辑]"
    ],
    proscons_zh: {
        pros: [
            "结构化",
            "可调试",
            "可并行"
        ],
        cons: [
            "规划开销",
            "可能过于僵化",
            "需要好的分解"
        ]
    }
};
nodeDetails.planning = {
    name: "Planning",
    description: "High-level task decomposition and sequencing. Break complex goals into subtasks.",
    details: {
        keyPoints: [
            "Task decomposition: Complex goal → subtasks",
            "Hierarchical: Multi-level plans",
            "Re-planning: Handle failures dynamically",
            "Plan formats: Natural language, JSON, PDDL, code"
        ],
        proscons: {
            pros: [
                "Handle complex multi-step tasks",
                "More organized than reactive",
                "Easier to debug (inspect plan)",
                "Reusable plans"
            ],
            cons: [
                "Planning errors compound",
                "Brittle to changes",
                "Expensive (extra LLM calls)",
                "Over-planning risk"
            ]
        }
    },
    connections: [
        "ReAct",
        "Chain-of-Thought",
        "Tree-of-Thoughts",
        "Plan-Execute",
        "Prompting",
        "Multi-Agent",
        "Transformer"
    ]
};
nodeDetails.pretraining = {
    name: "Pre-training",
    description: "Initial training phase on massive unlabeled text (trillions of tokens) to learn general language understanding.",
    details: {
        keyPoints: [
            "<strong>Training Objective:</strong> Causal Language Modeling (CLM) for GPT: predict next token P(x_t | x_1,...,x_{t-1}). Masked Language Modeling (MLM) for BERT: predict masked tokens bidirectionally. Cross-entropy loss: L = -Σ log P(x_t | x_{<t}).",
            "<strong>Data Sources:</strong> Common Crawl (web pages, 250B+ pages), Books (Books1, Books2, 60GB), Wikipedia (6GB), GitHub code (159GB), arXiv papers (60GB). Total: 1-10 trillion tokens. Quality filtering critical: remove spam, adult content, personally identifiable information.",
            "<strong>Data Processing Pipeline:</strong> Deduplication via MinHash (reduces 20-40%), quality filtering (perplexity-based, classifier scores), toxicity filtering (Perspective API), language detection (fastText), PII removal (regex patterns, NER models for names/emails).",
            "<strong>Training Scale:</strong> GPT-3: 175B params trained on 300B tokens, 1024 V100 GPUs for weeks. Chinchilla: 70B params on 1.4T tokens (compute-optimal). LLaMA-2: 70B on 2T tokens. Cost: $1M-$100M+ per run.",
            "<strong>Optimization Setup:</strong> AdamW optimizer (β1=0.9, β2=0.95-0.999, weight_decay=0.1). Learning rate: 1e-4 to 3e-4 with linear warmup (1000-10000 steps) then cosine decay to 10% of peak. Batch size: 2M-4M tokens effective via gradient accumulation. Gradient clipping: max_norm=1.0.",
            "<strong>Training Dynamics:</strong> Loss decreases smoothly for weeks. Sudden spikes indicate bad data batches or numerical instability. Perplexity on validation set tracks generalization. Sample generations every 1K steps for qualitative assessment. Checkpointing every 5K-10K steps (each checkpoint = 700GB for 175B model).",
            "<strong>Distributed Training:</strong> Data parallelism (replicate model), tensor parallelism (split layers), pipeline parallelism (split depth). ZeRO-3 optimizer shards params/gradients/optimizer states. 3D parallelism combines all three. Requires fast interconnect (NVLink, InfiniBand)."
        ],
        proscons: {
            pros: [
                "General knowledge acquisition: Learns world facts, language patterns, reasoning from diverse data",
                "Transfer learning foundation: Pre-train once, fine-tune for hundreds of downstream tasks",
                "Data efficiency: Leverages abundant unlabeled data (cheap) vs expensive labeled datasets",
                "Emergent abilities: Zero-shot, few-shot learning appear at 10B+ param scale",
                "Foundation for everything: All LLM applications start here (chatbots, agents, tools)",
                "Cross-domain knowledge: Single model understands code, math, literature, science"
            ],
            cons: [
                "Massive cost: $1M-$100M+ per training run (compute infrastructure + engineering)",
                "Time intensive: Weeks to months even on thousands of GPUs, delays iteration",
                "Environmental impact: Large carbon footprint (175B model ≈ 552 tons CO2)",
                "Data bias: Inherits biases from web data (gender, race, political, cultural stereotypes)",
                "Knowledge cutoff: Static after training, outdated information (can't learn new facts)",
                "Memorization risk: Can leak training data verbatim (privacy violation, copyright issues)",
                "Diminishing returns: After certain scale, gains plateau (need better algorithms, not just size)"
            ]
        }
    },
    connections: [
        "Transformer",
        "SFT",
        "Tokenization",
        "Scaling Laws",
        "Distributed Training"
    ],
    name_zh: "预训练",
    description_zh: "在大规模语料库上进行无监督学习。学习语言的通用表示。后续任务的基础。",
    keyPoints_zh: [
        "目标: 下一个token预测 (GPT)，掩码语言建模 (BERT)",
        "数据: 数万亿tokens (网页，书籍，代码)",
        "规模: 7B-175B+ 参数。计算: 1000-10000 GPU天",
        "学习: 语法，事实，推理，世界知识",
        "阶段: 通常是三阶段流程的第一步 (预训练 → SFT → RLHF)"
    ],
    proscons_zh: {
        pros: [
            "通用知识",
            "迁移学习",
            "零样本能力"
        ],
        cons: [
            "极其昂贵",
            "环境影响",
            "数据质量关键"
        ]
    }
};
nodeDetails.privacy = {
    name: "Privacy & GDPR",
    description: "Data protection, GDPR compliance, PII handling.",
    details: {
        keyPoints: [
            "GDPR: Right to deletion, data minimization, consent",
            "PII scrubbing: Remove emails, names, SSN before logging",
            "Data retention: Delete logs after 30-90 days",
            "Encryption: Encrypt data at rest and in transit"
        ],
        proscons: {
            pros: [
                "Compliance",
                "User trust",
                "Legal protection"
            ],
            cons: [
                "Complexity",
                "Storage overhead",
                "Functionality limits"
            ]
        }
    },
    connections: [
        "Safety"
    ],
    name_zh: "隐私 (GDPR)",
    description_zh: "保护用户数据。PII检测，数据保留，用户权利。",
    keyPoints_zh: [
        "GDPR: 欧洲隐私法。适用于欧盟公民",
        "PII: 检测和删除个人身份信息",
        "数据保留: 限制存储时间",
        "用户权利: 访问，删除，可移植性",
        "同意: 明确的用户同意数据使用"
    ],
    proscons_zh: {
        pros: [
            "合规",
            "信任",
            "用户控制"
        ],
        cons: [
            "复杂",
            "限制功能",
            "法律风险"
        ]
    }
};
nodeDetails.production = {
    name: "Production Deployment",
    description: "Deploy LLMs at scale: infrastructure, monitoring, cost optimization.",
    details: {
        keyPoints: [
            "Serving: vLLM, TensorRT-LLM for high throughput",
            "Monitoring: Latency, cost, errors, quality metrics",
            "Scaling: Auto-scale based on load",
            "Cost: Prompt caching, batch requests, cheaper models for simple tasks"
        ],
        proscons: {
            pros: [
                "Reliable",
                "Scalable",
                "Monitored"
            ],
            cons: [
                "Complex",
                "Expensive",
                "Expertise needed"
            ]
        }
    },
    connections: [
        "Serving",
        "Monitoring",
        "Auto-scaling",
        "Evaluation",
        "Cost Management",
        "Agent Lifecycle"
    ],
    name_zh: "生产基础设施",
    description_zh: "大规模部署LLM。服务，监控，扩展。",
    keyPoints_zh: [
        "服务: vLLM, TGI, TensorRT-LLM",
        "监控: 延迟，成本，质量",
        "扩展: 自动扩展基于负载",
        "可靠性: 重试，回退，速率限制",
        "成本: 优化推理，缓存，批处理"
    ],
    proscons_zh: {
        pros: [
            "可靠",
            "可扩展",
            "成本效益"
        ],
        cons: [
            "复杂",
            "运维开销",
            "需要专业知识"
        ]
    }
};
nodeDetails.prompting = {
    name: "Prompt Engineering",
    description: "Craft input text to guide LLM behavior: instructions, examples, formatting, role-playing.",
    details: {
        keyPoints: [
            "System prompts: Define model persona, rules, constraints. 'You are a helpful assistant. Be concise.' Sets global behavior.",
            "Instruction structure: Clear imperative. 'Explain X', 'Translate Y', 'Summarize Z'. More effective than questions.",
            "Examples (few-shot): Provide 1-10 examples of input→output. Model learns pattern via in-context learning. Order matters (recent examples weighted more).",
            "Chain-of-thought: Add 'Let's think step by step' or provide reasoning examples. Improves math, logic, complex tasks by 20-50%.",
            "Role-playing: 'You are an expert physicist.' Activates relevant training data patterns. Can improve domain-specific quality.",
            "Output format: 'Respond in JSON', 'Use bullet points', 'Limit to 100 words'. Controls structure and length.",
            "Iterative refinement: Test prompts, analyze failures, add constraints. 'Don't hallucinate', 'Cite sources', 'Say I don't know if uncertain'."
        ],
        proscons: {
            pros: [
                "No training needed",
                "Fast iteration",
                "Task-agnostic",
                "Composable (combine techniques)",
                "Works across models",
                "Accessible to non-experts"
            ],
            cons: [
                "Trial and error",
                "Brittle (small changes = big effects)",
                "Model-dependent",
                "Context length limits",
                "Can't fix fundamental model limitations",
                "No guarantees"
            ]
        }
    },
    connections: [
        "Planning",
        "Few-Shot",
        "Zero-Shot",
        "Chain-of-Thought",
        "Prompt Optimization"
    ],
    name_zh: "提示工程",
    description_zh: "设计有效的提示以引出期望的LLM行为。关键技能。",
    keyPoints_zh: [
        "清晰度: 具体，明确的指令",
        "上下文: 提供相关背景和示例",
        "格式: 指定期望的输出结构",
        "约束: 明确说明要做什么和不要做什么",
        "迭代: 测试和改进提示",
        "技术: Few-shot，Zero-shot，Chain-of-Thought"
    ],
    proscons_zh: {
        pros: [
            "无需训练",
            "快速迭代",
            "灵活"
        ],
        cons: [
            "需要实验",
            "不稳定",
            "敏感于措辞"
        ]
    }
};
nodeDetails.promptopt = {
    name: "Prompt Optimization",
    description: "Automatically optimize prompts using DSPy, gradient descent on text, or search. Better than manual prompt engineering.",
    details: {
        keyPoints: [
            "DSPy: Declare program structure (modules), compile with optimizer. Auto-generates prompts via bootstrapping. 10-30% better than hand-crafted.",
            "Gradient descent: Treat prompt as parameters. Use LLM to propose edits. Iteratively improve based on validation loss. APE, GrIPS methods.",
            "Search: Generate candidate prompts, evaluate on validation set, keep best. Beam search, genetic algorithms, etc.",
            "Metrics: Task-specific (accuracy, F1, etc.). Optimizer maximizes metric on validation set. Overfitting risk if small val set.",
            "DSPy workflow: Define signature (input→output spec), compose modules, compile with optimizer (BootstrapFewShot, MIPRO), get optimized prompt.",
            "Use cases: Production systems (systematic optimization), multi-task (shared prompt optimization), research (automatic prompt discovery).",
            "Limitations: Computationally expensive (100s of LLM calls), requires good validation set, may overfit, harder to interpret than manual prompts."
        ],
        proscons: {
            pros: [
                "Better than manual (10-30% gains)",
                "Systematic",
                "Reproducible",
                "Scales to many tasks",
                "DSPy compiles to code",
                "Discovers non-obvious prompts"
            ],
            cons: [
                "Expensive (many LLM calls)",
                "Requires validation set",
                "Overfitting risk",
                "Less interpretable",
                "Learning curve (DSPy)",
                "Not always worth overhead"
            ]
        }
    },
    connections: [
        "Prompting"
    ],
    name_zh: "提示优化",
    description_zh: "自动优化提示。使用LLM或搜索生成更好的提示。",
    keyPoints_zh: [
        "方法: 迭代改进提示直到达到目标指标",
        "技术: LLM自我改进，遗传算法，强化学习",
        "指标: 准确性，相关性，格式合规性",
        "示例: APE (自动提示工程师)，DSPy",
        "用例: 复杂任务，高价值应用"
    ],
    proscons_zh: {
        pros: [
            "找到更好的提示",
            "自动化",
            "数据驱动"
        ],
        cons: [
            "计算密集",
            "需要评估数据",
            "可能过拟合"
        ]
    }
};
nodeDetails.qlora = {
    name: "QLoRA",
    description: "Quantized LoRA. Combines 4-bit quantization with LoRA for extreme efficiency.",
    details: {
        keyPoints: [
            "Store base model in 4-bit (INT4/NF4)",
            "Train LoRA adapters in FP16",
            "Fine-tune 65B LLaMA on single 48GB GPU",
            "Double quantization for extra savings"
        ],
        proscons: {
            pros: [
                "Extreme memory efficiency",
                "Democratizes LLM fine-tuning",
                "Quality close to full LoRA"
            ],
            cons: [
                "Slower than FP16",
                "Small quantization loss",
                "Complex setup"
            ]
        }
    },
    connections: [
        "LoRA"
    ]
};
nodeDetails.quantization = {
    name: "Quantization",
    description: "Reduce model precision from FP32/FP16 to INT8/INT4 for smaller memory footprint and faster inference.",
    details: {
        keyPoints: [
            "<strong>Precision Levels:</strong> FP32 (baseline, 4 bytes), FP16 (2 bytes, 2x smaller, <1% loss), BF16 (2 bytes, better numerical stability), INT8 (1 byte, 4x smaller, 1-2% loss), INT4 (0.5 bytes, 8x smaller, 3-5% loss). Trade memory for slight quality degradation.",
            "<strong>Post-Training Quantization (PTQ):</strong> Quantize after training without retraining. Calibration: run model on representative data to compute scale factors. Per-tensor (one scale for whole tensor) vs per-channel (scale per output channel, more accurate). GPTQ (optimal quantization order), AWQ (activation-aware), GGUF (llama.cpp format).",
            "<strong>Quantization-Aware Training (QAT):</strong> Train with quantization in the forward pass, full precision gradients. Model learns to be robust to quantization noise. Better accuracy than PTQ but expensive (needs full training). Rarely used for LLMs due to cost.",
            "<strong>Mixed-Precision Quantization:</strong> Quantize most layers to INT8/INT4, keep outlier channels/layers in FP16. LLM.int8() identifies outliers (values >6 std devs), keeps them in FP16. SmoothQuant migrates difficulty from activations to weights. Best quality-efficiency trade-off.",
            "<strong>INT4 Variants:</strong> Symmetric (values in [-127, 127]), Asymmetric (different zero point), Normal Float (NF4: optimal for Gaussian distributions, used in QLoRA). Group-wise quantization (quantize 128-element groups independently) reduces error propagation.",
            "<strong>Quantization Impact by Model Size:</strong> Small models (7B): INT8 safe, INT4 risky. Medium models (13-30B): INT8 minimal loss, INT4 acceptable. Large models (70B+): More robust to quantization, INT4 often fine. Reason: more parameters = more redundancy.",
            "<strong>Hardware Acceleration:</strong> NVIDIA Tensor Cores: FP16/BF16/INT8 acceleration, 2-8x speedup. INT4 on Ada/Hopper GPUs (FP8 support). Apple Neural Engine: INT8 acceleration on M1/M2. Mobile: INT8/INT4 required for on-device inference."
        ],
        proscons: {
            pros: [
                "Massive memory reduction: 2-8x smaller model size, fits larger models on same GPU",
                "Faster inference: INT8 ops 2-4x faster than FP16 on modern hardware",
                "Higher throughput: Smaller memory → larger batch sizes → better GPU utilization",
                "Lower cost: Smaller memory footprint → cheaper serving infrastructure",
                "Mobile deployment: INT4 enables on-device inference for 7B models on phones",
                "Energy efficient: Lower precision = less power consumption (important for edge)"
            ],
            cons: [
                "Quality degradation: INT8 1-2% loss, INT4 3-5% loss on benchmarks",
                "Task-dependent: Math/reasoning tasks more sensitive than text generation",
                "Calibration required: Need representative dataset for PTQ scale factors",
                "Per-tensor quantization crude: Outliers cause large errors, need mixed precision",
                "Limited hardware support: INT4 only on newest GPUs (Ada, Hopper)",
                "Debugging harder: Numerical issues harder to trace with quantization"
            ]
        }
    },
    connections: [
        "Inference",
        "KV Cache",
        "LoRA",
        "QLoRA",
        "Serving"
    ],
    name_zh: "量化",
    description_zh: "将权重从FP16/FP32降低到INT8/INT4。减少2-8倍内存。质量损失1-5%。",
    keyPoints_zh: [
        "后训练量化 (PTQ): 无需重新训练。通过校准数据计算缩放因子。FP16 → INT8: 缩放 = max(abs(权重)) / 127。",
        "INT8: 每个权重8位。内存减少2倍 (vs FP16)。准确度损失~1-2%。最常见。",
        "INT4: 每个权重4位。内存减少4倍。准确度损失~3-5%。需要GPTQ/AWQ等方法。",
        "量化感知训练 (QAT): 在训练期间模拟量化。更好的准确度但需要重新训练。对PTQ太大的模型有用。",
        "混合精度: 对敏感层 (嵌入，输出) 使用FP16，对其他层使用INT8。平衡质量和内存。",
        "示例: 7B 模型，FP16 = 14GB。INT8 = 7GB。INT4 = 3.5GB。在A100 (40GB) 上启用13B INT8，70B INT4。",
        "工具: bitsandbytes (INT8)，GPTQ/AWQ (INT4)，HuggingFace transformers (集成)。"
    ],
    proscons_zh: {
        pros: [
            "2-4倍内存减少",
            "2-3倍速度提升 (INT8 内核)",
            "更低成本",
            "移动部署 (INT4 在手机上启用7B模型)",
            "节能"
        ],
        cons: [
            "质量下降 (INT8 1-2%，INT4 3-5%)",
            "任务相关 (数学/推理更敏感)",
            "需要校准",
            "硬件支持有限 (INT4 仅限最新GPU)",
            "调试更难"
        ]
    }
};
nodeDetails.rag = {
    name: "RAG (Retrieval-Augmented Generation)",
    description: "Retrieve relevant documents, inject into prompt, generate grounded response. Reduces hallucination, adds knowledge.",
    details: {
        keyPoints: [
            "Pipeline: Query → Retrieve (top-k docs from vector DB) → Augment prompt (add docs as context) → Generate (LLM).",
            "Advantages: Grounded in real data (less hallucination), updatable knowledge (change docs, no retraining), cites sources.",
            "Retrieval: Dense (embeddings + cosine similarity), Sparse (BM25), Hybrid (combine both).",
            "Chunking: Split docs into chunks (256-512 tokens). Trade-off: small (precise) vs large (context).",
            "Reranking: Cross-encoder scores query-doc pairs. Improves top-k quality. Slow but accurate.",
            "Challenges: Retrieval quality bottleneck, prompt size limits, latency (retrieval + generation), cost."
        ],
        proscons: {
            pros: [
                "Reduces hallucination",
                "Updatable knowledge",
                "Cite sources",
                "No retraining",
                "Scalable to large corpora"
            ],
            cons: [
                "Retrieval bottleneck",
                "Latency overhead",
                "Prompt size limits",
                "Quality depends on chunks",
                "Expensive (embedding + LLM)"
            ]
        }
    },
    connections: [
        "Dense Retrieval",
        "Sparse Retrieval",
        "Hybrid Retrieval",
        "Self-RAG",
        "Memory",
        "Chunking",
        "Transformer"
    ],
    name_zh: "RAG (检索增强生成)",
    description_zh: "检索相关文档，注入到提示中，生成有依据的回答。减少幻觉，增加知识。",
    keyPoints_zh: [
        "流程: 查询 → 检索 (从向量数据库获取top-k文档) → 增强提示 (添加文档作为上下文) → 生成 (LLM)。",
        "优势: 基于真实数据 (减少幻觉)，可更新知识 (更改文档，无需重新训练)，引用来源。",
        "检索方式: Dense (嵌入 + 余弦相似度)，Sparse (BM25)，Hybrid (结合两者)。",
        "分块: 将文档分成块 (256-512 tokens)。权衡: 小块 (精确) vs 大块 (上下文)。",
        "重排序: Cross-encoder 对查询-文档对打分。提高top-k质量。慢但准确。",
        "挑战: 检索质量瓶颈，提示大小限制，延迟 (检索 + 生成)，成本。"
    ],
    proscons_zh: {
        pros: [
            "减少幻觉",
            "可更新知识",
            "引用来源",
            "无需重新训练",
            "可扩展到大型语料库"
        ],
        cons: [
            "检索瓶颈",
            "延迟开销",
            "提示大小限制",
            "质量取决于分块",
            "成本高 (嵌入 + LLM)"
        ]
    }
};
nodeDetails.ratelimit = {
    name: "Rate Limit Management",
    description: "Handle API quotas, throttling, cost control.",
    details: {
        keyPoints: [
            "Token bucket: Allow N requests per minute",
            "Exponential backoff on 429",
            "Quota tracking: Monitor usage vs limits",
            "Prioritization: High-priority requests first"
        ],
        proscons: {
            pros: [
                "Respect API limits",
                "Cost control",
                "Fair usage"
            ],
            cons: [
                "Latency spikes",
                "Tracking complexity",
                "User frustration"
            ]
        }
    },
    connections: [
        "API Calling"
    ]
};
nodeDetails.react = {
    name: "ReAct (Reason + Act)",
    description: "Interleave reasoning (thought) and actions (tool use). Model generates thought → action → observation loop until done.",
    details: {
        keyPoints: [
            "Framework: Thought (reasoning step) → Action (call tool) → Observation (tool result) → Thought → ... Repeat until task done.",
            "Example: Q: 'What's the weather in Paris?' Thought: 'I need to check weather'. Action: weather_api('Paris'). Observation: '15°C, sunny'. Thought: 'I have the answer'. Answer: '15°C and sunny in Paris'.",
            "Advantages: Combines reasoning (CoT) with grounding (tool use). Reduces hallucination (facts from tools, not memory). More reliable for factual questions.",
            "Action space: Predefined tools (APIs, search, calculator, etc.). Model must choose tool and generate args. Format: Action: tool_name[arg1, arg2].",
            "Termination: Model generates 'Finish[answer]' action when done. Or max iterations limit to prevent infinite loops.",
            "Prompting: Provide tool descriptions, example ReAct traces. Model learns format via few-shot. Critical to show Thought/Action/Observation structure.",
            "Implementations: LangChain, AutoGPT use ReAct pattern. Production systems add error handling, retries, action validation."
        ],
        proscons: {
            pros: [
                "Reduces hallucination",
                "Grounded in real data",
                "Interpretable (see reasoning+actions)",
                "Extensible (add tools)",
                "Strong empirical results",
                "Industry standard for agents"
            ],
            cons: [
                "Slower (multiple LLM calls)",
                "Depends on tool quality",
                "Brittle parsing (action format)",
                "Can loop infinitely",
                "Expensive (many tokens)",
                "Requires good prompting"
            ]
        }
    },
    connections: [
        "Planning",
        "Tool Use",
        "Chain-of-Thought"
    ],
    name_zh: "ReAct (推理 + 行动)",
    description_zh: "交替进行推理 (思考) 和行动 (工具使用)。模型生成 思考 → 行动 → 观察 循环直到完成。",
    keyPoints_zh: [
        "框架: 思考 (推理步骤) → 行动 (调用工具) → 观察 (工具结果) → 思考 → ... 重复直到任务完成。",
        "示例: Q: '巴黎的天气如何？' 思考: '我需要查天气'。行动: weather_api('Paris')。观察: '15°C，晴天'。思考: '我有答案了'。答案: '巴黎15°C，晴天'。",
        "优势: 结合推理 (CoT) 和基础 (工具使用)。减少幻觉 (事实来自工具，非记忆)。对事实性问题更可靠。",
        "行动空间: 预定义工具 (API，搜索，计算器等)。模型必须选择工具并生成参数。格式: Action: tool_name[arg1, arg2]。",
        "终止: 模型完成时生成 'Finish[answer]' 行动。或最大迭代限制以防止无限循环。",
        "提示: 提供工具描述，示例 ReAct 轨迹。模型通过少样本学习格式。关键是显示 思考/行动/观察 结构。",
        "实现: LangChain，AutoGPT 使用 ReAct 模式。生产系统添加错误处理，重试，行动验证。"
    ],
    proscons_zh: {
        pros: [
            "减少幻觉",
            "基于真实数据",
            "可解释 (看到推理+行动)",
            "可扩展 (添加工具)",
            "强实证结果",
            "行业标准"
        ],
        cons: [
            "较慢 (多次LLM调用)",
            "依赖工具质量",
            "脆弱解析 (行动格式)",
            "可能无限循环",
            "昂贵 (更多tokens)",
            "需要良好提示"
        ]
    }
};
nodeDetails.redteaming = {
    name: "Red Teaming",
    description: "Adversarial testing. Hire attackers to find vulnerabilities.",
    details: {
        keyPoints: [
            "Manual: Security experts try to break model",
            "Automated: Generate adversarial prompts at scale",
            "Focus: Jailbreaks, bias, toxicity, misinformation",
            "Iteration: Fix vulnerabilities, repeat"
        ],
        proscons: {
            pros: [
                "Find vulnerabilities",
                "Proactive",
                "Comprehensive"
            ],
            cons: [
                "Expensive",
                "Never complete",
                "Requires expertise"
            ]
        }
    },
    connections: [
        "Safety",
        "Jailbreak Defense"
    ],
    name_zh: "红队测试",
    description_zh: "对抗性测试。雇佣攻击者寻找漏洞。",
    keyPoints_zh: [
        "手动: 安全专家尝试破坏模型",
        "自动: 大规模生成对抗性提示",
        "焦点: 越狱，偏见，毒性，错误信息",
        "迭代: 修复漏洞，重复"
    ],
    proscons_zh: {
        pros: [
            "发现漏洞",
            "主动",
            "全面"
        ],
        cons: [
            "昂贵",
            "永无完成",
            "需要专业知识"
        ]
    }
};
nodeDetails.reranking = {
    name: "Reranking",
    description: "Cross-encoder scores query-document pairs. Slower but more accurate than bi-encoder. Final refinement step.",
    details: {
        keyPoints: [
            "Cross-encoder: Concatenate query + doc → single input to BERT-like model → relevance score. Attention across query and doc.",
            "vs Bi-encoder: Bi-encoder encodes separately (fast, approximate). Cross-encoder encodes jointly (slow, accurate).",
            "Two-stage: Retrieve 100 candidates with bi-encoder (fast), rerank top-100 with cross-encoder (accurate). Best of both.",
            "Models: ms-marco-MiniLM, bge-reranker, Cohere rerank. Fine-tuned on query-doc relevance datasets.",
            "Latency: 50-200ms per doc. Batch for efficiency. Only rerank top-k (10-100) candidates.",
            "Gains: 10-30% improvement over retrieval-only. Critical for high-precision applications."
        ],
        proscons: {
            pros: [
                "High accuracy",
                "Captures subtle relevance",
                "Production-ready models",
                "Proven gains",
                "Easy to add"
            ],
            cons: [
                "Slow (50-200ms per doc)",
                "Expensive (extra inference)",
                "Overkill for simple tasks",
                "Needs GPU for speed",
                "Can overfit to training"
            ]
        }
    },
    connections: [
        "Hybrid Retrieval"
    ]
};
nodeDetails.rlhf = {
    name: "RLHF",
    description: "Reinforcement Learning from Human Feedback. Train reward model, optimize with PPO.",
    details: {
        keyPoints: [
            "Stage 1: Supervised fine-tuning (SFT) on demonstrations",
            "Stage 2: Train reward model on human preferences",
            "Stage 3: Optimize policy with PPO to maximize reward",
            "Use cases: InstructGPT, ChatGPT, Claude"
        ],
        proscons: {
            pros: [
                "Aligns with humans",
                "Reduces toxicity",
                "Better instruction following"
            ],
            cons: [
                "Expensive (human labels)",
                "Sycophancy",
                "Reward hacking"
            ]
        }
    },
    connections: [
        "SFT",
        "DPO",
        "Alignment",
        "Evaluation"
    ]
};
nodeDetails.rope = {
    name: "RoPE (Rotary Position Embedding)",
    description: "Encode position by rotating query/key vectors. Relative positions emerge naturally. Used in LLaMA, GPT-NeoX.",
    details: {
        keyPoints: [
            "Core idea: Multiply Q, K by rotation matrix. Rotation angle = position × frequency. Relative positions encoded in dot product angle difference.",
            "Math: RoPE(x, m) = x · R(mθ) where R = rotation matrix, m = position, θ = frequency. For 2D: [[cos(mθ), -sin(mθ)], [sin(mθ), cos(mθ)]].",
            "Frequencies: θ_i = base^(-2i/d) where base=10000 (default), d=dimension, i=dimension index. Different freqs for different dims.",
            "Relative encoding: Q·K^T = (Rq)·(Rk)^T = q·R(m-n)^T·k where m, n are positions. Only depends on (m-n), not absolute positions.",
            "Advantages over sinusoidal: Multiplicative (not additive). Relative by design. Extrapolates better to longer sequences (with scaling).",
            "Scaling for long context: Linear interpolation (compress positions). NTK-aware (adjust base frequency). YaRN (non-uniform scaling). Enables 2K→32K extension.",
            "Implementation: Precompute cos/sin lookup tables. Apply element-wise rotation at runtime. Negligible overhead (<1% compute)."
        ],
        proscons: {
            pros: [
                "Relative positions naturally",
                "Extrapolates well",
                "Efficient (precompute tables)",
                "No trainable params",
                "Works for long context with scaling",
                "Used in LLaMA, GPT-NeoX"
            ],
            cons: [
                "Slightly more complex than sinusoidal",
                "Requires specific Q,K modification",
                "Scaling methods need tuning",
                "Not all frameworks support",
                "Rotation can be confusing",
                "Dimension must be even"
            ]
        }
    },
    connections: [
        "Long Context"
    ]
};
nodeDetails.safety = {
    name: "AI Safety",
    description: "Prevent harmful outputs: content filtering, jailbreak defense, red teaming.",
    details: {
        keyPoints: [
            "Content filtering: Block NSFW, hate speech, PII",
            "Jailbreak defense: Detect adversarial prompts",
            "Red teaming: Hire attackers to find vulnerabilities",
            "Alignment: RLHF, DPO to align with human values"
        ],
        proscons: {
            pros: [
                "Reduce harm",
                "Compliance",
                "Trust"
            ],
            cons: [
                "False positives",
                "Censorship concerns",
                "Cat-and-mouse"
            ]
        }
    },
    connections: [
        "Tool Use",
        "Sandboxing",
        "Alignment",
        "Filtering",
        "Jailbreak Defense",
        "Audit Logging",
        "Bias Detection",
        "Red Teaming"
    ],
    name_zh: "安全与伦理",
    description_zh: "对齐，内容过滤，偏见检测。负责任的AI。",
    keyPoints_zh: [
        "对齐: RLHF，DPO使模型与人类价值观一致",
        "内容过滤: 检测和阻止有毒/有害输出",
        "偏见: 减轻性别、种族、文化偏见",
        "隐私: PII检测，数据保护 (GDPR)",
        "红队: 对抗性测试以发现漏洞"
    ],
    proscons_zh: {
        pros: [
            "更安全的部署",
            "合规",
            "信任"
        ],
        cons: [
            "减少能力",
            "假阳性",
            "永无止境"
        ]
    }
};
nodeDetails.sampling = {
    name: "Sampling Techniques",
    description: "Temperature, top-p, top-k control output diversity and quality in autoregressive generation.",
    details: {
        keyPoints: [
            "Temperature scales logits before softmax. Low T (0.1-0.7): confident, focused. High T (1.2-2.0): diverse, creative. T→0: greedy. T→∞: uniform random.",
            "Top-p (nucleus sampling): Dynamic cutoff. Sum probs until threshold. Adapts to model confidence. p=0.9 standard. High confidence = few tokens, low confidence = more tokens.",
            "Top-k: Fixed cutoff. Always consider k tokens. k=40-100 typical. Simpler than top-p. Doesn't adapt to confidence distribution.",
            "Combine temperature + top-p: Apply temperature first (reshape distribution), then top-p (truncate). Best of both worlds. Most production systems use this.",
            "Repetition penalty: Divide logit by penalty^count for each token. Typical values: 1.1-1.3. Too high (>1.5) breaks coherence.",
            "Use case tuning: Factual Q&A (T=0.3, top-p=0.85, rep_pen=1.1). Creative writing (T=1.2, top-p=0.95, rep_pen=1.05). Code (T=0.1, top-p=0.9, rep_pen=1.2).",
            "Min-length, max-length: Control generation length. Essential for avoiding premature EOS or runaway generation."
        ],
        proscons: {
            pros: [
                "Temperature: Simple, effective",
                "Top-p: Adapts to confidence",
                "Top-k: Easy to understand",
                "Repetition penalty: Reduces loops",
                "Composable: Can combine all",
                "Production-ready: vLLM supports all"
            ],
            cons: [
                "Hyperparameter tuning needed",
                "No theoretical guarantees",
                "Can't fix factual errors",
                "Repetition penalty can hurt quality",
                "Still stochastic (non-reproducible)",
                "Compute overhead (~10% slower than greedy)"
            ]
        }
    },
    connections: [
        "Decoding"
    ]
};
nodeDetails.sandboxing = {
    name: "Sandboxing",
    description: "Isolate code execution: Docker, VMs, containers for security.",
    details: {
        keyPoints: [
            "Docker: Lightweight, fast. Network isolation, resource limits",
            "Firecracker: AWS Lambda tech. Microsecond startup",
            "E2B: Code execution API. Managed sandboxes",
            "Security: No file system access, no network (or whitelist only)"
        ],
        proscons: {
            pros: [
                "Secure isolation",
                "Resource control",
                "Multiple languages"
            ],
            cons: [
                "Overhead",
                "Complexity",
                "Cold start latency"
            ]
        }
    },
    connections: [
        "Code Execution",
        "Safety"
    ],
    name_zh: "沙箱",
    description_zh: "隔离代码执行。防止恶意代码。安全边界。",
    keyPoints_zh: [
        "Docker: 容器化隔离",
        "虚拟机: 完全隔离但慢",
        "pyodide: 浏览器中的Python (WASM)",
        "限制: 无网络，无文件系统，CPU/内存限制",
        "超时: 杀死长时间运行的进程"
    ],
    proscons_zh: {
        pros: [
            "安全",
            "隔离",
            "可控"
        ],
        cons: [
            "性能开销",
            "复杂设置",
            "限制功能"
        ]
    }
};
nodeDetails.scaling = {
    name: "Auto-Scaling",
    description: "Dynamically scale inference capacity based on load.",
    details: {
        keyPoints: [
            "Metrics: Requests per second, queue length, GPU utilization",
            "Horizontal scaling: Add more GPU replicas",
            "Vertical scaling: Larger GPU (A100 → H100)",
            "Cold start: Warm pool of standby instances"
        ],
        proscons: {
            pros: [
                "Cost efficiency",
                "Handle spikes",
                "SLA compliance"
            ],
            cons: [
                "Cold start latency",
                "Coordination",
                "Over-provisioning"
            ]
        }
    },
    connections: [
        "Production"
    ],
    name_zh: "自动扩展",
    description_zh: "根据负载动态添加/删除资源。Kubernetes，云自动扩展器。",
    keyPoints_zh: [
        "指标: CPU，GPU，请求率，队列长度",
        "策略: 目标利用率，预测扩展",
        "Kubernetes: HPA (水平Pod自动扩展器)",
        "云: AWS自动扩展，GCP自动扩展",
        "冷启动: 新实例启动时间 (模型加载)"
    ],
    proscons_zh: {
        pros: [
            "成本效益",
            "处理峰值",
            "自动"
        ],
        cons: [
            "冷启动延迟",
            "配置复杂",
            "成本峰值"
        ]
    }
};
nodeDetails.scalinglaws = {
    name: "Scaling Laws",
    description: "Predictable power-law relationships between model performance and compute/data/parameters (Kaplan, Hoffmann).",
    details: {
        keyPoints: [
            "<strong>Kaplan et al. (2020):</strong> First systematic study of LLM scaling. Loss L scales as power law with compute C, params N, data D: L(N) ≈ N^(-α), L(D) ≈ D^(-β), L(C) ≈ C^(-γ). Found α≈0.076, meaning 10x params → 1.7x better loss. Implies: bigger models always better if enough compute.",
            "<strong>Chinchilla Scaling (Hoffmann 2022):</strong> Kaplan underestimated data importance. Optimal compute budget: scale params AND data equally. Chinchilla optimal: 20 tokens per parameter. GPT-3 (175B, 300B tokens) suboptimal; Chinchilla (70B, 1.4T tokens) outperforms despite fewer params. Conclusion: previous models undertrained.",
            "<strong>Compute-Optimal Training:</strong> Given compute budget C, optimal allocation: N ≈ C^a, D ≈ C^b where a+b=1. For 10x compute, scale params 3.16x and data 3.16x (not 10x params on same data). Example: $1M compute → 10B params on 200B tokens beats 100B params on 20B tokens.",
            "<strong>Emergent Abilities:</strong> Some capabilities appear suddenly at scale. GPT-3 175B does few-shot learning; GPT-2 1.5B cannot. Theory: smooth improvement in loss causes discrete phase transitions in downstream tasks when loss crosses task-specific thresholds. Controversial: some argue measurement artifact.",
            "<strong>Power Law Extrapolation:</strong> Loss decreases as L ≈ aC^(-b) where C is FLOPs. Empirically b≈0.05-0.1 (logarithmic improvement). Implies: 100x compute → 1.5-2x better loss. Reliable extrapolation across 6 orders of magnitude (1e20 to 1e26 FLOPs). Used for predicting GPT-5, GPT-6 capabilities.",
            "<strong>Data Quality vs Quantity:</strong> Chinchilla trained on high-quality filtered data (MassiveText). Recent work (LLaMA, Mistral): longer training on curated data beats larger models on raw web scrapes. Quality filtering via perplexity, classifier scores, deduplication critical. Llama-2 70B trained 2T tokens (100x Chinchilla optimal) still improving.",
            "<strong>Inference Cost Scaling:</strong> Larger models have higher per-token cost but better per-task performance. Trade-off: small model + long chain-of-thought vs large model + direct answer. Small models (7B) need 5-10x more tokens to match 70B quality. Optimal for production: 13B-30B range balances quality and cost."
        ],
        proscons: {
            pros: [
                "Predictable: Can forecast performance of 100B param model from 1B experiments (saves $10M+)",
                "Guides investment: Determine optimal compute allocation before expensive training runs",
                "Chinchilla insight: Revealed previous models (GPT-3, Gopher) severely undertrained, wasted compute",
                "Reliable extrapolation: Power laws hold across 6 orders of magnitude, rare in ML",
                "ROI estimation: Predict performance gain per dollar spent on compute/data",
                "Strategic planning: Plan GPT-N capabilities years in advance based on compute growth"
            ],
            cons: [
                "Compute-limited view: Assumes infinite data available (data now bottleneck for frontier models)",
                "Quality ignored: Laws measure loss, not actual usefulness (many low-loss outputs are garbage)",
                "Emergent abilities unclear: Can't predict when specific capabilities appear (reasoning, coding)",
                "Diminishing returns: Log improvement means 100x compute → 1.5x better (exponentially expensive)",
                "Overfitting risk: Training 100x Chinchilla optimal may overfit (memorize training data)",
                "Data exhaustion: Internet data ~10T tokens, already used by GPT-4/Gemini (running out)",
                "Cost explosion: Following power law requires exponential compute growth (unsustainable)"
            ]
        }
    },
    connections: [
        "Pre-training",
        "Distributed Training",
        "Chinchilla",
        "Emergent Abilities"
    ]
};
nodeDetails.selfrag = {
    name: "Self-RAG",
    description: "Model retrieves on-demand (not every query) and critiques retrieved docs. Adaptive, more efficient.",
    details: {
        keyPoints: [
            "Adaptive retrieval: Model decides when to retrieve. Not every query needs external knowledge.",
            "Reflection tokens: [Retrieval], [Relevant], [Supported], [Useful]. Model generates these to self-critique.",
            "Workflow: Generate → Check if retrieval needed → Retrieve if yes → Critique relevance → Generate final answer.",
            "Training: Fine-tune model with reflection tokens. Learn when retrieval helps.",
            "Efficiency: Avoids unnecessary retrieval. 30-50% fewer retrieval calls vs always-retrieve RAG.",
            "Quality: Similar or better than standard RAG. Self-correction reduces hallucination."
        ],
        proscons: {
            pros: [
                "Adaptive (retrieve when needed)",
                "Self-correcting",
                "More efficient",
                "Better quality",
                "Interpretable"
            ],
            cons: [
                "Requires fine-tuning",
                "Training complexity",
                "Reflection tokens add length",
                "Implementation harder",
                "Less mature"
            ]
        }
    },
    connections: [
        "RAG"
    ],
    name_zh: "Self-RAG",
    description_zh: "LLM决定何时检索。自我反思答案质量。自适应检索。",
    keyPoints_zh: [
        "自适应: 模型决定是否需要检索",
        "反思: 模型评估自己的输出质量",
        "迭代: 如果质量低则重新检索",
        "token: <检索>, <相关>, <支持>, <有用>",
        "优势: 仅在需要时检索，减少成本"
    ],
    proscons_zh: {
        pros: [
            "自适应",
            "更高质量",
            "节省成本"
        ],
        cons: [
            "更多LLM调用",
            "复杂",
            "需要训练"
        ]
    }
};
nodeDetails.semantic = {
    name: "Semantic Memory",
    description: "Structured knowledge: facts, relationships. Knowledge graphs (Neo4j, RDF).",
    details: {
        keyPoints: [
            "Entities + relationships: (Alice, worksAt, OpenAI)",
            "Query: Graph traversal, SPARQL, Cypher",
            "Reasoning: Infer new facts from existing",
            "Use cases: QA systems, expert knowledge, complex domains"
        ],
        proscons: {
            pros: [
                "Structured reasoning",
                "Explainable",
                "Efficient queries"
            ],
            cons: [
                "Extraction errors",
                "Schema design",
                "Maintenance overhead"
            ]
        }
    },
    connections: [
        "Memory",
        "Knowledge Graph"
    ],
    name_zh: "语义记忆",
    description_zh: "一般知识和事实。概念和关系。",
    keyPoints_zh: [
        "内容: 事实，概念，关系",
        "结构: 知识图谱，嵌入",
        "检索: 语义搜索，图遍历",
        "用例: '巴黎的首都是什么？'，知识库",
        "实现: Neo4j (图)，向量DB"
    ],
    proscons_zh: {
        pros: [
            "结构化知识",
            "可查询",
            "可扩展"
        ],
        cons: [
            "维护",
            "可能过时",
            "不完整"
        ]
    }
};
nodeDetails.sentencepiece = {
    name: "SentencePiece",
    description: "Language-agnostic tokenization treating text as raw byte stream, used in LLaMA, T5, and multilingual models.",
    details: {
        keyPoints: [
            "<strong>Core Innovation:</strong> Treats input as raw byte stream without pre-tokenization (no word segmentation). No dependence on language-specific rules (works for Chinese, Japanese, Thai with no spaces). Reversible: encode → decode exactly recovers original text (including spaces). Character '▁' (U+2581) represents spaces.",
            "<strong>Training Algorithms:</strong> Unigram Language Model (default): starts with large vocabulary, iteratively removes tokens that minimize likelihood loss. BPE mode also available (similar to GPT-2). WordPiece mode for BERT-style. Byte Pair Encoding (BPE) and Unigram LM perform similarly for most tasks (±0.5% difference).",
            "<strong>LLaMA Implementation:</strong> 32K vocabulary trained on 20+ languages. Byte-fallback: rare bytes encoded as separate tokens (open-vocabulary property). Splits aggressively on non-ASCII: Chinese/Arabic = 3-4 tokens per character (similar to BPE language bias, but slightly better due to Unigram LM).",
            "<strong>Character Coverage:</strong> Parameter character_coverage (default 0.9995): cover 99.95% of characters, treat rest as [UNK] or byte-fallback. For multilingual: set to 1.0 (include all Unicode). For code: include symbols like <, >, {, }, /, *. Trade-off: higher coverage = larger vocab = more rare tokens.",
            "<strong>Normalization Options:</strong> nfkc_normalization: convert 'ﬁ' (ligature) to 'fi'. add_dummy_prefix: prepend space to all sentences (makes first word tokenization consistent). remove_extra_whitespaces: collapse multiple spaces. Important for reproducibility across systems (Unicode normalization varies).",
            "<strong>Special Tokens:</strong> <unk> (ID 0), <s> (BOS, ID 1), </s> (EOS, ID 2), <pad> (ID 3). User-defined tokens via user_defined_symbols (e.g., <|im_start|>, <|im_end|> for chat formats). Special tokens never split, always treated as atomic units.",
            "<strong>Model Format:</strong> .model file (trained SentencePiece model, binary protobuf), .vocab file (human-readable vocabulary list). Portable across languages/systems. Inference: load .model, encode/decode text. Training: sentencepiece.SentencePieceTrainer.train(...)."
        ],
        proscons: {
            pros: [
                "Language-agnostic: No pre-tokenization, works for 100+ languages without hand-crafted rules",
                "Reversible: Perfectly reconstructs original text (no whitespace ambiguity like BPE)",
                "Multilingual fair: Treats all scripts equally (though still some bias to training data)",
                "Portable: .model files work across platforms (Python, C++, JavaScript, Rust)",
                "Open-source: Google project, widely adopted (T5, BERT multilingual, LLaMA, GPT-NeoX)",
                "Flexible: Supports BPE, Unigram LM, WordPiece algorithms with same interface"
            ],
            cons: [
                "Still language-biased: Training on English-heavy data → English gets fewer tokens per word",
                "Non-Latin penalty: Chinese/Arabic still 3-4x more tokens than English (better than BPE but not solved)",
                "Training complexity: More hyperparameters than BPE (character_coverage, sampling, shrinking_factor)",
                "Model size: .model file 1-5MB (vs BPE's simple merge list), requires loading library",
                "Less interpretable: Unigram LM less intuitive than BPE's greedy merging",
                "Whitespace marker: '▁' character confusing for users (though technically correct)"
            ]
        }
    },
    connections: [
        "Tokenization",
        "LLaMA",
        "T5",
        "Multilingual",
        "BPE"
    ]
};
nodeDetails.serving = {
    name: "Model Serving",
    description: "vLLM, TensorRT-LLM, TGI for production LLM inference.",
    details: {
        keyPoints: [
            "vLLM: PagedAttention, continuous batching. 2-24x throughput",
            "TensorRT-LLM: NVIDIA optimizations. Low latency, FP8 support",
            "TGI: HuggingFace. Easy deployment, streaming",
            "Trade-offs: vLLM (throughput), TRT-LLM (latency), TGI (ease)"
        ],
        proscons: {
            pros: [
                "Production-ready",
                "High throughput",
                "Low latency"
            ],
            cons: [
                "Setup complexity",
                "GPU dependency",
                "Version compatibility"
            ]
        }
    },
    connections: [
        "Production",
        "Inference",
        "Batching",
        "Caching"
    ],
    name_zh: "模型服务",
    description_zh: "高效提供LLM。vLLM用于连续批处理。TensorRT-LLM用于速度。",
    keyPoints_zh: [
        "vLLM: PagedAttention，连续批处理。吞吐量高24倍",
        "TensorRT-LLM: NVIDIA优化。低延迟",
        "TGI: HuggingFace文本生成推理",
        "批处理: 将多个请求组合以提高吞吐量",
        "GPU: 通常需要A100/H100用于大型模型"
    ],
    proscons_zh: {
        pros: [
            "vLLM: 高吞吐量",
            "TensorRT: 低延迟",
            "生产就绪"
        ],
        cons: [
            "复杂设置",
            "GPU成本",
            "需要调优"
        ]
    }
};
nodeDetails.sft = {
    name: "Supervised Fine-Tuning (SFT)",
    description: "Train pre-trained model on instruction-response pairs to teach desired output format and follow instructions.",
    details: {
        keyPoints: [
            "<strong>Purpose & Philosophy:</strong> Transform base model (completes text) into instruction-following assistant (responds to requests). Teach format, style, tone, safety guardrails. Small dataset (10K-100K examples) vs trillions for pre-training.",
            "<strong>Dataset Construction:</strong> Human-written examples (expensive, high quality, $50-$200 per instruction), Synthetic data (Self-Instruct: use GPT-4 to generate from seed examples), Evol-Instruct (iteratively evolve complexity), Orca (explanation traces from GPT-4). Diverse tasks: Q&A, writing, math, code, reasoning, creative, factual.",
            "<strong>Data Format & Structure:</strong> System message (persona, rules, constraints) + User message (instruction/question) → Assistant response (helpful, harmless, honest). Multi-turn conversations to teach dialogue. Pack multiple examples per sequence for efficiency (context stuffing).",
            "<strong>Training Configuration:</strong> Lower LR than pre-training (1e-5 to 5e-5, avoid catastrophic forgetting). 2-3 epochs (more causes overfitting). Batch size: 16-64 examples. Only compute loss on assistant tokens (mask system/user with -100). Warmup: 3-10% of total steps.",
            "<strong>Efficient Methods:</strong> LoRA (0.1%-1% params, r=8-64), QLoRA (4-bit base + LoRA adapters), Adapter layers (bottleneck modules), Prompt tuning (optimize soft prompts only). Full fine-tuning for maximum quality but needs full model in memory.",
            "<strong>Evaluation & Quality:</strong> Human eval on diverse prompts (helpfulness, harmlessness, accuracy). Automated: MT-Bench (multi-turn, GPT-4 judge), Alpaca Eval (win rate vs reference), instruction following accuracy. Style consistency, safety (refusal rate on harmful requests), factuality checks.",
            "<strong>Common Failure Modes:</strong> Catastrophic forgetting (loses pre-trained knowledge), overfitting to training data format, hallucination increase if training data has errors, style mimicry (copies bad examples), safety regression (learns unsafe patterns from data)."
        ],
        proscons: {
            pros: [
                "Dramatic instruction following: Base model useless without prompts, SFT makes it conversational",
                "Style control: Teach specific tone (professional, casual, concise), format (markdown, JSON)",
                "Task-specific optimization: Tailor for desired use case (coding, writing, analysis)",
                "Data-efficient: 10K-50K examples sufficient (vs trillions for pre-training)",
                "Fast training: Hours to days on 1-8 GPUs (vs weeks for pre-training on thousands)",
                "Iterative improvement: Easy to add new examples, retrain quickly"
            ],
            cons: [
                "Catastrophic forgetting: May lose pre-trained capabilities (math, reasoning, facts)",
                "Overfitting risk: Especially with small/repetitive datasets, memorizes training data",
                "Hallucination amplification: Bad training examples teach bad behavior permanently",
                "Dataset bias: Quality entirely dependent on training data (garbage in, garbage out)",
                "Limited knowledge addition: Can't teach substantially new facts (need pre-training for that)",
                "Format lock-in: Model becomes overly dependent on training format patterns"
            ]
        }
    },
    connections: [
        "Pre-training",
        "RLHF",
        "DPO",
        "LoRA",
        "Prompting"
    ],
    name_zh: "监督微调",
    description_zh: "在高质量示例上微调预训练模型。教导期望的行为和格式。",
    keyPoints_zh: [
        "数据: 10K-100K 高质量演示 (提示-响应对)",
        "学习率: 比预训练低10-100倍 (~1e-5)",
        "时期: 通常1-3个时期 (避免过拟合)",
        "示例: 指令遵循，对话，摘要，代码生成",
        "目标: 教模型格式、风格、任务特定行为"
    ],
    proscons_zh: {
        pros: [
            "大幅改善任务性能",
            "控制输出格式",
            "相对便宜"
        ],
        cons: [
            "需要高质量数据",
            "可能灾难性遗忘",
            "过拟合风险"
        ]
    }
};
nodeDetails.slidingwindow = {
    name: "Sliding Window Attention",
    description: "Each token attends only to last W tokens. Reduces O(n²) to O(nW). Used in Mistral 7B.",
    details: {
        keyPoints: [
            "Mechanism: Token i attends to tokens max(0, i-W) through i. W=512-4096 typical. Creates banded attention pattern (diagonal stripe in attention matrix).",
            "Complexity: O(nW) instead of O(n²). For W=4K, n=100K: O(400M) vs O(10B). 25x reduction.",
            "Recurrent layers: Stack multiple layers with sliding window. Layer 1 sees W tokens, layer 2 sees 2W (via attention in layer 1), etc. L layers = L×W effective context.",
            "Mistral 7B: W=4096 per layer, 32 layers. Effective context = 128K tokens (32×4K). But loses global attention (can't attend to token 100K back directly).",
            "Trade-offs: Fast for long sequences. Loses distant context (fine for local tasks like code completion). Hybrid approaches: some global tokens + sliding window.",
            "Flash attention compatible: Can combine sliding window with Flash Attention for further memory savings. Both reduce memory from O(n²).",
            "Implementation: Mask attention matrix to zero out tokens outside window. Or use causal + sliding window mask together."
        ],
        proscons: {
            pros: [
                "Linear complexity O(nW)",
                "Enables 100K+ contexts on single GPU",
                "Fast inference",
                "Works with Flash Attention",
                "Mistral shows strong quality",
                "Simple to implement"
            ],
            cons: [
                "Loses distant context",
                "Not suitable for tasks needing global context",
                "Window size W is hyperparameter",
                "Stacking layers helps but not perfect",
                "Some benchmarks worse than full attention",
                "Recurrent context is approximation"
            ]
        }
    },
    connections: [
        "Long Context"
    ]
};
nodeDetails.sparse = {
    name: "Sparse Retrieval",
    description: "BM25, TF-IDF keyword matching. Fast, interpretable. Good for exact matches, names, IDs.",
    details: {
        keyPoints: [
            "BM25: Best Match 25. TF (term frequency) × IDF (inverse document frequency) × saturation. Score = Σ IDF(q_i) × (f(q_i, D) × (k1 + 1)) / (f(q_i, D) + k1 × (1 - b + b × |D| / avgdl)).",
            "TF-IDF: Term frequency × log(N / df). Simple baseline. BM25 improves with saturation (diminishing returns for repeated terms).",
            "Lexical matching: Exact keyword overlap. Misses synonyms but perfect for names, codes, IDs.",
            "Speed: Very fast (inverted index). O(k) where k = query terms. No embedding cost.",
            "Use cases: Product search (exact model numbers), legal (specific terms), hybrid retrieval.",
            "Limitations: No semantic understanding. 'dog' ≠ 'puppy'. Solved with hybrid retrieval."
        ],
        proscons: {
            pros: [
                "Fast",
                "No embeddings needed",
                "Exact match perfect",
                "Interpretable",
                "Works offline"
            ],
            cons: [
                "No semantic matching",
                "Vocabulary mismatch",
                "Poor for paraphrases",
                "Language-specific",
                "Tuning needed"
            ]
        }
    },
    connections: [
        "RAG",
        "Hybrid Retrieval"
    ],
    name_zh: "稀疏检索 (BM25)",
    description_zh: "基于关键词的搜索。快速且可解释。处理精确匹配。",
    keyPoints_zh: [
        "BM25: 标准稀疏检索算法 (基于TF-IDF)",
        "工作原理: 计数查询词在文档中的出现",
        "快速: 无需嵌入，直接关键词查找",
        "Elasticsearch: 流行的BM25实现",
        "优势: 精确关键词匹配，专有名词"
    ],
    proscons_zh: {
        pros: [
            "非常快",
            "可解释",
            "无嵌入成本",
            "擅长精确匹配"
        ],
        cons: [
            "错过语义",
            "词汇不匹配问题",
            "无同义词"
        ]
    }
};
nodeDetails.speculativedecode = {
    name: "Speculative Decoding",
    description: "Use small draft model to generate multiple tokens, large model verifies in parallel. 2-3x speedup with no quality loss.",
    details: {
        keyPoints: [
            "Idea: Small model (1B) generates K tokens fast. Large model (70B) verifies all K in parallel (single forward pass). Accept correct, reject rest. 2-3x faster than large model alone.",
            "Guarantees same distribution as large model alone. Not an approximation. Probabilistically equivalent.",
            "K (speculation depth): 4-10 typical. Higher K = more speedup IF draft model accurate. Lower if draft model poor.",
            "Acceptance rate: % of draft tokens accepted. 70-90% typical. Depends on task and draft model quality. Higher = better speedup.",
            "Works because: Draft model often correct (especially for common patterns). Large model verification is batched (parallel), not sequential.",
            "Implementation: Draft generates K tokens O(K) serial. Target verifies O(1) parallel. Total: O(K) serial + O(1) parallel << O(K) serial.",
            "Variants: Medusa (multiple decoding heads), Lookahead (tree-based speculation), REST (retrieval + speculation)."
        ],
        proscons: {
            pros: [
                "2-3x speedup",
                "No quality loss (same distribution)",
                "Works out-of-box",
                "Tunable K for speed/quality",
                "Parallelizes well",
                "Draft model can be distilled"
            ],
            cons: [
                "Needs draft model (extra memory)",
                "Only helps if draft accurate",
                "CPU/GPU split tricky",
                "Low batch size required",
                "Implementation complexity",
                "Not all frameworks support"
            ]
        }
    },
    connections: [
        "Decoding"
    ]
};
nodeDetails.structuredoutput = {
    name: "Structured Output",
    description: "Force LLM to generate valid JSON, XML. Grammar constraints, JSON mode.",
    details: {
        keyPoints: [
            "JSON mode: Guarantee valid JSON output",
            "Guided generation: Constrain via grammar (lm-format-enforcer)",
            "Validation: Parse and validate schema",
            "Retry: If invalid, regenerate with stricter prompt"
        ],
        proscons: {
            pros: [
                "Reliable parsing",
                "No prompt engineering",
                "Guaranteed format"
            ],
            cons: [
                "Slightly slower",
                "Limited model support",
                "Schema design needed"
            ]
        }
    },
    connections: [
        "Tool Use",
        "JSON Mode",
        "Parameter Extraction"
    ]
};
nodeDetails.taskallocation = {
    name: "Task Allocation",
    description: "Distribute work among agents: static assignment, dynamic load balancing, auction-based, capability matching.",
    details: {
        keyPoints: [
            "Static allocation: Pre-assign tasks to agents based on roles. Simple, predictable. Poor load balancing if tasks vary.",
            "Dynamic allocation: Assign tasks at runtime based on agent availability. Better utilization. Requires coordination overhead.",
            "Auction-based: Agents bid for tasks based on capability/cost. Decentralized. Good for heterogeneous agents.",
            "Capability matching: Match task requirements to agent skills. Uses semantic similarity or skill tags.",
            "Load balancing: Monitor agent workload, redistribute if imbalanced. Prevents bottlenecks.",
            "Priority queues: High-priority tasks assigned first. Task dependencies handled via topological sort."
        ],
        proscons: {
            pros: [
                "Static: Simple, predictable",
                "Dynamic: Better utilization",
                "Auction: Decentralized",
                "Capability: Quality matching",
                "Load balancing: Fair distribution"
            ],
            cons: [
                "Static: Inflexible",
                "Dynamic: Coordination overhead",
                "Auction: Convergence time",
                "Capability: Requires metadata",
                "All: Complexity"
            ]
        }
    },
    connections: [
        "Multi-Agent"
    ],
    name_zh: "任务分配",
    description_zh: "将任务分配给智能体。静态vs动态，基于能力。",
    keyPoints_zh: [
        "静态分配: 基于角色预分配任务",
        "动态分配: 运行时基于可用性分配",
        "基于拍卖: 智能体基于能力/成本竞标任务",
        "能力匹配: 匹配任务需求与智能体技能",
        "负载均衡: 监控智能体工作负载，不平衡时重新分配"
    ],
    proscons_zh: {
        pros: [
            "静态: 简单",
            "动态: 更好利用",
            "拍卖: 去中心化"
        ],
        cons: [
            "静态: 不灵活",
            "动态: 协调开销",
            "所有: 复杂"
        ]
    }
};
nodeDetails.tokenization = {
    name: "Tokenization",
    description: "Convert text to token IDs for model input via BPE, WordPiece, or SentencePiece subword algorithms.",
    details: {
        keyPoints: [
            "<strong>Purpose:</strong> Models process token IDs, not raw text. Tokenization creates vocabulary and maps text ↔ IDs. Trade-off: small vocab (each word split into many tokens, longer sequences) vs large vocab (fewer tokens per word, more rare tokens, bigger embedding table). Modern LLMs: 32K-100K vocab.",
            "<strong>Byte Pair Encoding (BPE):</strong> Start with character-level vocab. Iteratively merge most frequent adjacent pairs. Example: 'low' + 'est' → 'lowest'. GPT-2/GPT-3 use BPE with 50K vocab. Handles rare words via subword units. Open-vocabulary: any text representable (via fallback to characters).",
            "<strong>WordPiece (BERT):</strong> Similar to BPE but merges based on likelihood rather than frequency. Prefers merges that maximize training data likelihood. BERT vocab: 30K WordPiece tokens. Slightly better for morphologically rich languages. Used in BERT, Electra, T5.",
            "<strong>SentencePiece (LLaMA, GPT-NeoX):</strong> Treats text as sequence of bytes (no explicit word boundaries). Language-agnostic (works for Chinese, Japanese without spaces). Unigram LM: selects subwords to maximize likelihood. BPE mode also available. LLaMA: 32K SentencePiece vocab, handles 20+ languages.",
            "<strong>Tokenization Impact on Performance:</strong> Aggressive splitting (small vocab) → longer sequences → more compute, worse long-range dependencies. Rare tokens (large vocab) → undertrained embeddings → poor representation. Optimal vocab: 32K-64K for multilingual, 100K for code (more symbols). Non-Latin scripts need more tokens (Chinese character = 3-4 tokens in GPT-2).",
            "<strong>Special Tokens:</strong> [PAD] (padding to batch length), [UNK] (unknown/rare words), [CLS] (classification token, BERT), [SEP] (separator), [MASK] (for MLM), <BOS>/<EOS> (begin/end of sequence, GPT). Chat models add: <|im_start|>, <|im_end|>, <|user|>, <|assistant|> for structured conversations.",
            "<strong>Whitespace Handling:</strong> GPT-2 BPE: 'hello world' → ['hello', 'Ġworld'] (Ġ = space prefix). Sentence begin = no space prefix. SentencePiece: treats spaces as regular chars '▁'. Critical for correct encoding: 'apple' vs ' apple' are different tokens. Affects few-shot prompting consistency."
        ],
        proscons: {
            pros: [
                "Subword units: Handle rare words without huge vocabulary (open-vocabulary property)",
                "Compression: Reduce sequence length (frequent words = 1 token, saves compute)",
                "Language-agnostic: SentencePiece works for 100+ languages without modifications",
                "Morphology: Capture morphological structure (un-happy, pre-process) explicitly",
                "Transfer learning: Pretrained tokenizers + models work out-of-box for downstream tasks",
                "Efficient: BPE/WordPiece fast to encode/decode (simple greedy matching)"
            ],
            cons: [
                "Inconsistent splits: 'apple' (1 token) vs 'apples' (2 tokens) causes positional inconsistency",
                "Non-Latin bias: Chinese/Arabic = 3-5x more tokens than English for same text (unfair pricing)",
                "Space sensitivity: 'hello' vs ' hello' are different tokens (causes prompt engineering headaches)",
                "Rare token quality: Tokens seen <100 times during training have poor embeddings",
                "Information loss: 'happiest' → ['happy', 'est'] loses that it's a single morphological unit",
                "Adversarial: Specific character sequences can trigger bad splits (homoglyph attacks)"
            ]
        }
    },
    connections: [
        "Pre-training",
        "BPE",
        "SentencePiece",
        "Multilingual",
        "Embedding"
    ],
    name_zh: "分词",
    description_zh: "通过BPE、WordPiece或SentencePiece子词算法将文本转换为token ID。",
    keyPoints_zh: [
        "目的: 模型处理token ID，而非原始文本",
        "BPE: GPT-2/GPT-3使用，50K词汇表",
        "WordPiece: BERT使用，30K词汇表",
        "SentencePiece: LLaMA使用，32K词汇表，语言无关",
        "权衡: 小词汇 (更长序列) vs 大词汇 (更多稀有token)"
    ],
    proscons_zh: {
        pros: [
            "子词单元处理稀有词",
            "开放词汇",
            "语言无关"
        ],
        cons: [
            "分割不一致",
            "非拉丁文偏见",
            "空格敏感"
        ]
    }
};
nodeDetails.toolselection = {
    name: "Tool Selection",
    description: "Agent chooses which tool to use. Based on tool descriptions, past success.",
    details: {
        keyPoints: [
            "Description matching: Embed tool descriptions, semantic search",
            "ReAct-style: Model reasons about which tool needed",
            "Learned selection: Fine-tune on successful tool uses",
            "Fallback: If tool fails, try alternative or ask clarification"
        ],
        proscons: {
            pros: [
                "Flexible",
                "Learns from experience",
                "Handles ambiguity"
            ],
            cons: [
                "Selection errors",
                "Requires good descriptions",
                "Expensive (extra reasoning)"
            ]
        }
    },
    connections: [
        "Tool Use"
    ],
    name_zh: "工具选择",
    description_zh: "智能体选择使用哪个工具。基于工具描述、过去成功。",
    keyPoints_zh: [
        "描述匹配: 嵌入工具描述，语义搜索",
        "ReAct式: 模型推理需要哪个工具",
        "学习选择: 在成功的工具使用上微调",
        "回退: 如果工具失败，尝试替代或询问澄清"
    ],
    proscons_zh: {
        pros: [
            "灵活",
            "从经验学习",
            "处理歧义"
        ],
        cons: [
            "选择错误",
            "需要好的描述",
            "昂贵 (额外推理)"
        ]
    }
};
nodeDetails.tooluse = {
    name: "Tool Use",
    description: "LLMs call external functions/APIs. Extends capabilities beyond text generation.",
    details: {
        keyPoints: [
            "Function calling: LLM generates JSON with function name + args",
            "Execution: Parse JSON, validate, call function, return result",
            "Iterative: Model can call multiple tools sequentially",
            "Examples: Calculator, search, APIs, databases, code execution"
        ],
        proscons: {
            pros: [
                "Extends LLM capabilities",
                "Grounded in real data",
                "Deterministic operations"
            ],
            cons: [
                "Parsing errors",
                "Security risks",
                "Latency overhead"
            ]
        }
    },
    connections: [
        "Multimodal",
        "ReAct",
        "API Calling",
        "Code Execution",
        "Tool Selection",
        "Parameter Extraction",
        "Safety",
        "Structured Output"
    ],
    name_zh: "工具使用",
    description_zh: "LLM调用外部函数/API。扩展文本生成之外的能力。",
    keyPoints_zh: [
        "函数调用: LLM生成带函数名 + 参数的JSON",
        "执行: 解析JSON，验证，调用函数，返回结果",
        "迭代: 模型可以顺序调用多个工具",
        "示例: 计算器，搜索，API，数据库，代码执行"
    ],
    proscons_zh: {
        pros: [
            "扩展LLM能力",
            "基于真实数据",
            "确定性操作"
        ],
        cons: [
            "解析错误",
            "安全风险",
            "延迟开销"
        ]
    }
};
nodeDetails.tot = {
    name: "Tree-of-Thoughts (ToT)",
    description: "Explore multiple reasoning paths as tree. Backtrack dead ends. Outperforms CoT on hard problems.",
    details: {
        keyPoints: [
            "Concept: Generate multiple thoughts (reasoning steps) at each stage. Evaluate each thought. Prune bad paths, explore promising ones. Forms reasoning tree.",
            "vs CoT: CoT is linear (single chain). ToT is tree (multiple branches, backtracking). ToT better for tasks requiring search (puzzles, planning).",
            "Components: Thought generator (LLM generates candidates), state evaluator (LLM or heuristic scores each thought), search algorithm (DFS, BFS, beam).",
            "Example (24 game): Input: 4 numbers, operations. Goal: make 24. ToT explores different operation orders, backtracks when stuck. Solves 74% (vs CoT 4%).",
            "Evaluation: Prompt LLM to rate each thought ('sure/maybe/impossible'). Or use ground truth if available. Prune 'impossible' branches early.",
            "Search strategies: BFS (breadth-first, systematic), DFS (depth-first, faster but incomplete), Beam search (keep top k branches, balance speed and coverage).",
            "Cost: 10-100x more expensive than CoT (many LLM calls per problem). Only justified for hard problems where accuracy matters."
        ],
        proscons: {
            pros: [
                "Solves hard problems CoT can't",
                "Explores multiple strategies",
                "Can backtrack and recover",
                "Interpretable tree structure",
                "Proven on Game of 24, crosswords",
                "Combines LLM with search"
            ],
            cons: [
                "10-100x more expensive",
                "Slow (many LLM calls)",
                "Overkill for simple tasks",
                "Requires good evaluator",
                "Implementation complexity",
                "Not widely adopted yet"
            ]
        }
    },
    connections: [
        "Planning",
        "Chain-of-Thought"
    ],
    name_zh: "思维树",
    description_zh: "将多个推理路径探索为树。回溯死胡同。在困难问题上优于CoT。",
    keyPoints_zh: [
        "概念: 在每个阶段生成多个思考，评估每个思考，修剪坏路径",
        "vs CoT: CoT是线性的，ToT是树状 (多分支，回溯)",
        "组件: 思考生成器，状态评估器，搜索算法",
        "示例 (24点游戏): 探索不同运算顺序，卡住时回溯",
        "成本: 比CoT贵10-100倍 (每个问题多次LLM调用)"
    ],
    proscons_zh: {
        pros: [
            "解决CoT无法解决的难题",
            "可以回溯",
            "可解释"
        ],
        cons: [
            "10-100倍更贵",
            "慢",
            "对简单任务过度"
        ]
    }
};
nodeDetails.transformer = {
    name: "Transformer Architecture",
    description: "Core neural architecture using self-attention. Foundation of modern LLMs (GPT, BERT, T5).",
    details: {
        keyPoints: [
            "Self-Attention: Computes relationships between all tokens",
            "Multi-Head: Parallel attention heads (8-96 typical)",
            "Position Encoding: Sine/cosine or learned embeddings",
            "Feed-Forward: 2-layer MLP after attention",
            "Layer Norm + Residuals: Stabilizes training"
        ],
        proscons: {
            pros: [
                "Parallelizable unlike RNNs",
                "Long-range dependencies",
                "State-of-the-art across NLP",
                "Scales to billions of parameters"
            ],
            cons: [
                "Quadratic O(n²) complexity",
                "Memory intensive",
                "Requires massive compute"
            ]
        }
    },
    connections: [
        "Attention",
        "Inference",
        "Long Context",
        "ViT",
        "Embeddings",
        "RAG",
        "Planning"
    ],
    name_zh: "Transformer架构",
    description_zh: "使用自注意力的核心神经网络架构。现代LLM的基础 (GPT, BERT, T5)。",
    keyPoints_zh: [
        "自注意力: 计算所有token之间的关系",
        "多头: 并行注意力头 (典型8-96个)",
        "位置编码: 正弦/余弦或学习的嵌入",
        "前馈网络: 注意力后的2层MLP",
        "层归一化 + 残差连接: 稳定训练"
    ],
    proscons_zh: {
        pros: [
            "可并行化，不像RNN",
            "长程依赖",
            "NLP领域最先进",
            "可扩展到数十亿参数"
        ],
        cons: [
            "二次 O(n²) 复杂度",
            "内存密集",
            "需要大量计算"
        ]
    }
};
nodeDetails.vectordb = {
    name: "Vector Databases",
    description: "Specialized DBs for embedding storage and ANN search. Pinecone, Weaviate, Qdrant, Chroma, FAISS.",
    details: {
        keyPoints: [
            "Purpose: Store embeddings, fast ANN (approximate nearest neighbor) search. O(log n) vs O(n) brute force.",
            "FAISS: Facebook. Local library. Very fast. No server. Good for <10M vectors. IndexHNSW, IndexIVFPQ.",
            "Pinecone: Managed cloud. Easy to use. Expensive. Scales to billions. Good for production.",
            "Weaviate: Open-source. Hybrid search. GraphQL API. Self-host or cloud. Integrates with LangChain.",
            "Qdrant: Rust. Fast. Filtering support. Open-source + cloud. Good performance/cost.",
            "Chroma: Embedded. SQLite-style. Great for dev/prototyping. Production use via server mode."
        ],
        proscons: {
            pros: [
                "FAISS: Fast, free",
                "Pinecone: Managed, scalable",
                "Weaviate: Hybrid search",
                "Qdrant: Performance",
                "Chroma: Easy dev"
            ],
            cons: [
                "FAISS: No server",
                "Pinecone: Expensive",
                "Weaviate: Complex",
                "Qdrant: Less mature",
                "Chroma: Not prod-scale"
            ]
        }
    },
    connections: [
        "Memory",
        "Embeddings",
        "ANN",
        "Chunking",
        "Dense Retrieval"
    ],
    name_zh: "向量数据库",
    description_zh: "用于嵌入存储和ANN搜索的专用数据库。Pinecone，Weaviate，Qdrant，Chroma，FAISS。",
    keyPoints_zh: [
        "目的: 存储嵌入，快速ANN (近似最近邻) 搜索。O(log n) vs O(n) 暴力搜索。",
        "FAISS: Facebook。本地库。非常快。无服务器。适合<10M向量。IndexHNSW，IndexIVFPQ。",
        "Pinecone: 托管云。易用。昂贵。扩展到数十亿。适合生产。",
        "Weaviate: 开源。混合搜索。GraphQL API。自托管或云。与LangChain集成。",
        "Qdrant: Rust。快速。支持过滤。开源+云。性价比好。",
        "Chroma: 嵌入式。SQLite风格。非常适合开发/原型。通过服务器模式用于生产。"
    ],
    proscons_zh: {
        pros: [
            "FAISS: 快速，免费",
            "Pinecone: 托管，可扩展",
            "Weaviate: 混合搜索",
            "Qdrant: 性能",
            "Chroma: 易于开发"
        ],
        cons: [
            "FAISS: 无服务器",
            "Pinecone: 昂贵",
            "Weaviate: 复杂",
            "Qdrant: 不太成熟",
            "Chroma: 非生产规模"
        ]
    }
};
nodeDetails.versioning = {
    name: "Model Versioning",
    description: "Track model versions, A/B test, gradual rollout.",
    details: {
        keyPoints: [
            "Semantic versioning: v1.0.0 (major.minor.patch)",
            "A/B testing: Measure quality, latency, cost",
            "Gradual rollout: 1% → 10% → 50% → 100%",
            "Shadow mode: Run new model, log outputs, don't serve"
        ],
        proscons: {
            pros: [
                "Risk mitigation",
                "Measure impact",
                "Safe rollout"
            ],
            cons: [
                "Double inference cost (shadow)",
                "Complexity",
                "Slow rollout"
            ]
        }
    },
    connections: [
        "Agent Lifecycle"
    ]
};
nodeDetails.videounderstand = {
    name: "Video Understanding",
    description: "Process video for LLMs: frame sampling, temporal modeling, video Q&A.",
    details: {
        keyPoints: [
            "Frame sampling: Extract N frames uniformly",
            "Temporal encoding: Position embeddings or 3D convolutions",
            "Video encoder: ViT on frames + temporal pooling",
            "Applications: Summarization, action recognition, Q&A"
        ],
        proscons: {
            pros: [
                "Understand temporal context",
                "Richer than images",
                "Media/security/robotics applications"
            ],
            cons: [
                "Extreme compute cost (100s of frames)",
                "Temporal reasoning weak",
                "Hard to scale to long videos"
            ]
        }
    },
    connections: [
        "Multimodal"
    ]
};
nodeDetails.vit = {
    name: "Vision Transformer",
    description: "Apply Transformer to images by splitting into patches. Replaces CNNs for vision.",
    details: {
        keyPoints: [
            "Split image into 16x16 patches",
            "Standard Transformer encoder",
            "Position embeddings for patches",
            "CLS token for classification"
        ],
        proscons: {
            pros: [
                "Matches/beats CNNs with data",
                "Parallelizable",
                "Long-range dependencies"
            ],
            cons: [
                "Data-hungry (needs 10M+ images)",
                "Slow to train",
                "No CNN inductive bias"
            ]
        }
    },
    connections: [
        "Multimodal",
        "Transformer"
    ],
    name_zh: "视觉Transformer",
    description_zh: "将Transformer应用于图像，通过分割成块。替代CNN用于视觉。",
    keyPoints_zh: [
        "将图像分割成16x16块",
        "标准Transformer编码器",
        "块的位置嵌入",
        "CLS token用于分类"
    ],
    proscons_zh: {
        pros: [
            "匹配/击败CNN",
            "可并行化",
            "长程依赖"
        ],
        cons: [
            "数据饥渴 (需要10M+图像)",
            "训练慢",
            "无CNN归纳偏置"
        ]
    }
};
nodeDetails.zero = {
    name: "ZeRO Optimizer",
    description: "Zero Redundancy Optimizer. Partitions model states across GPUs for memory-efficient distributed training.",
    details: {
        keyPoints: [
            "Stage 1: Partition optimizer states (4x reduction)",
            "Stage 2: Also partition gradients (8x reduction)",
            "Stage 3: Also partition parameters (memory scales 1/N)",
            "Used by DeepSpeed, PyTorch FSDP"
        ],
        proscons: {
            pros: [
                "Train 10-1000x larger models",
                "Memory scales with GPU count",
                "Production-proven"
            ],
            cons: [
                "Communication overhead (10-40%)",
                "Requires fast interconnect",
                "Complex setup"
            ]
        }
    },
    connections: [
        "Distributed Training"
    ]
};
nodeDetails.zeroshot = {
    name: "Zero-Shot Learning",
    description: "LLM performs task without examples, just instruction. Tests general capability and instruction-following.",
    details: {
        keyPoints: [
            "Definition: Provide only task description, no examples. 'Translate to Spanish: Hello' with no translation examples.",
            "Instruction tuning: SFT on diverse instructions improves zero-shot. Instruct-GPT, FLAN-T5, Alpaca all optimize for zero-shot.",
            "Generalization: Tests if model truly understands task or just pattern-matches examples. Good zero-shot = strong general intelligence.",
            "Prompt clarity: Must be unambiguous. 'Classify sentiment: [text]' better than 'What do you think about: [text]'.",
            "Use cases: Novel tasks (no examples available), rapid iteration (faster than collecting examples), cost-saving (shorter prompts).",
            "Limitations: Quality < few-shot < fine-tuning. Fails on complex/ambiguous tasks. Sensitive to exact wording of instruction.",
            "Evaluation: Compare zero-shot vs few-shot performance. Gap indicates how much model relies on pattern-matching vs true understanding."
        ],
        proscons: {
            pros: [
                "No examples needed",
                "Shortest prompt (cheapest)",
                "Tests true understanding",
                "Fast to deploy",
                "Works for novel tasks",
                "Instruction-tuned models excel"
            ],
            cons: [
                "Lower quality than few-shot",
                "Requires very clear instructions",
                "Sensitive to wording",
                "Fails on ambiguous tasks",
                "No task-specific guidance",
                "Model must be instruction-tuned"
            ]
        }
    },
    connections: [
        "Prompting",
        "Few-Shot"
    ],
    name_zh: "零样本学习",
    description_zh: "LLM仅用指令执行任务，无示例。测试通用能力和指令遵循。",
    keyPoints_zh: [
        "定义: 仅提供任务描述，无示例",
        "指令调优: SFT改善零样本能力",
        "泛化: 测试模型是否真正理解任务",
        "提示清晰度: 必须明确",
        "用例: 新任务，快速迭代，节省成本",
        "局限: 质量 < 少样本 < 微调"
    ],
    proscons_zh: {
        pros: [
            "无需示例",
            "最短提示",
            "快速部署"
        ],
        cons: [
            "质量较低",
            "对措辞敏感",
            "需要指令调优"
        ]
    }
};

module.exports = nodeDetails;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = nodeDetails;
}
if (typeof window !== 'undefined') {
    window.nodeDetails = nodeDetails;
}
console.log('✅ Loaded', Object.keys(nodeDetails).length, 'detailed nodes');
