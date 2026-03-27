# Study Guide - AI Agent Director Interview

## 🎯 Recommended Study Paths

### Quick Path (5-7 Days) ⚡

**Goal:** Cover the most frequently asked concepts

#### Day 1-2: LLM Foundations
- ✅ Transformer Architecture
- ✅ Attention Mechanisms
- ✅ Pre-training
- ✅ Tokenization

#### Day 3-4: Prompting & Reasoning
- ✅ Prompt Engineering
- ✅ Few-Shot Learning
- ✅ Chain-of-Thought
- ✅ ReAct Framework

#### Day 5-6: RAG & Production
- ✅ RAG (Retrieval-Augmented Generation)
- ✅ Vector Databases
- ✅ Dense vs Sparse Retrieval
- ✅ Model Serving

#### Day 7: Integration & Practice
- ✅ Tool Use
- ✅ Multi-Agent Systems
- Review all nodes
- Practice explaining concepts

---

### Comprehensive Path (14-21 Days) 📚

**Goal:** Deep understanding of all concepts

#### Week 1: Core LLM Knowledge
**Days 1-3: Architecture & Training**
- Transformer, Attention, Multi-Head Attention
- Pre-training, SFT, RLHF, DPO
- Tokenization (BPE, SentencePiece)
- Position Encoding (RoPE)

**Days 4-5: Advanced Training**
- LoRA, QLoRA, Distillation
- Distributed Training (ZeRO, FSDP, Tensor Parallelism)
- Scaling Laws

**Days 6-7: Inference & Optimization**
- KV Cache, Quantization
- Decoding Strategies, Sampling
- Long Context, Sliding Window
- Speculative Decoding

#### Week 2: Agent Systems & RAG
**Days 8-10: Reasoning & Prompting**
- Prompt Engineering, Few-Shot, Zero-Shot
- Chain-of-Thought, Tree-of-Thoughts
- ReAct, Plan-Execute
- Prompt Optimization

**Days 11-12: Multi-Agent Systems**
- Agent Frameworks (LangChain, CrewAI, MetaGPT)
- Coordination Patterns
- Task Allocation, Communication

**Days 13-14: RAG Deep Dive**
- Dense Retrieval, Sparse Retrieval (BM25)
- Hybrid Retrieval, Reranking
- Vector Databases (FAISS, Pinecone, Weaviate)
- Embeddings, Chunking Strategies
- ANN (HNSW, IVF, PQ)

#### Week 3: Memory, Tools, Production, Safety
**Days 15-16: Memory Systems**
- Agent Memory Architecture
- Episodic, Semantic, Knowledge Graphs
- Context Management
- Conversation Summarization

**Days 17-18: Tool Use**
- Function Calling, API Integration
- Code Execution, Sandboxing
- Tool Selection, Parameter Extraction
- Error Handling, Rate Limiting
- Structured Output, JSON Mode

**Days 19-20: Production & Safety**
- Model Serving (vLLM, TensorRT-LLM)
- Monitoring, Scaling, Cost Management
- Batching, Caching, Model Routing
- Safety, Alignment, Content Filtering
- Jailbreak Defense, Bias Detection

**Day 21: Review & Practice**
- Revisit all categories
- Practice system design questions
- Mock interviews

---

## 🎓 Role-Specific Paths

### ML Engineering Focus

**Priority Topics:**
1. **LLM Core** - Transformer, Attention, Pre-training
2. **Training** - SFT, LoRA, QLoRA, Distributed Training
3. **Inference** - KV Cache, Quantization, Serving
4. **Production** - Monitoring, Scaling, Cost Management

**Study Order:**
```
Transformer → Attention → Pre-training → SFT → LoRA → 
QLoRA → Distributed → KV Cache → Quantization → 
Inference → Serving → Monitoring → Scaling
```

**Skills to Demonstrate:**
- Explain transformer architecture in detail
- Optimize inference latency and throughput
- Design distributed training strategy for 70B model
- Calculate training costs and ROI

---

### Agent Systems Focus

**Priority Topics:**
1. **Reasoning** - CoT, ReAct, Planning
2. **Multi-Agent** - Frameworks, Coordination
3. **Tools** - Function Calling, APIs, Sandboxing
4. **RAG** - Retrieval, Vector DBs, Embeddings

**Study Order:**
```
Prompting → Few-Shot → CoT → ReAct → Plan-Execute → 
Multi-Agent → LangChain → CrewAI → Tool Use → 
RAG → Dense Retrieval → Vector DBs
```

**Skills to Demonstrate:**
- Design multi-agent system for complex task
- Implement ReAct agent with tool use
- Build production RAG pipeline
- Handle agent coordination and communication

---

### Research Focus

**Priority Topics:**
1. **LLM Core** - Architecture, Training, Theory
2. **Advanced Training** - LoRA, Distillation, Scaling Laws
3. **Reasoning** - CoT, ToT, Prompt Optimization
4. **Multimodal** - ViT, CLIP, GPT-4V

**Study Order:**
```
Transformer → Attention → Pre-training → Scaling Laws → 
SFT → RLHF → DPO → LoRA → QLoRA → Distillation → 
CoT → ToT → Prompt Optimization → Multimodal → 
ViT → CLIP
```

**Skills to Demonstrate:**
- Explain cutting-edge training techniques
- Discuss scaling laws and Chinchilla optimal
- Compare RLHF vs DPO trade-offs
- Design experiments for novel architectures

---

## 💡 Learning Tips

### Active Learning
- **Don't just read** - Implement code examples
- **Explain concepts** - Teach to a rubber duck
- **Draw diagrams** - Visualize architectures
- **Compare approaches** - Understand trade-offs

### Practice Questions
- "How would you design a RAG system for 1M documents?"
- "Explain the difference between LoRA and full fine-tuning"
- "What's the benefit of KV cache in inference?"
- "How would you handle prompt injection attacks?"
- "Design a multi-agent system for software development"

### Red Flags to Avoid
- ❌ "I'd use LangChain" (without explaining why)
- ❌ Confusing attention with transformer
- ❌ Not knowing trade-offs (pros/cons)
- ❌ No production experience stories
- ❌ Ignoring cost and latency considerations

### Green Flags to Aim For
- ✅ Quantify everything (latency, cost, accuracy)
- ✅ Discuss trade-offs explicitly
- ✅ Reference real systems (vLLM, GPT-4, Claude)
- ✅ Show awareness of current research
- ✅ Think about production constraints

---

## 📊 Priority Matrix

### Must Know (Asked in 80%+ interviews)
- Transformer Architecture
- Attention Mechanisms
- Prompting Techniques
- RAG Pipeline
- Tool Use / Function Calling
- Model Serving

### Should Know (Asked in 50%+ interviews)
- SFT, LoRA, QLoRA
- Chain-of-Thought
- ReAct Framework
- Vector Databases
- Multi-Agent Systems
- Inference Optimization

### Nice to Know (Asked in 20%+ interviews)
- Scaling Laws
- Distributed Training
- Tree-of-Thoughts
- Self-RAG
- Speculative Decoding
- Safety & Alignment

---

## 🔄 Daily Study Routine

### Morning (1-2 hours)
- Read 2-3 new concepts from knowledge graph
- Implement code examples
- Take notes on key points

### Afternoon (1 hour)
- Review previous day's concepts
- Connect to related topics
- Practice explaining out loud

### Evening (30 minutes)
- Quick quiz on covered topics
- Update your study tracker
- Plan next day's topics

---

## 📝 Interview Preparation Checklist

### 1 Week Before
- [ ] Complete priority path (quick or comprehensive)
- [ ] Practice whiteboard explanations
- [ ] Review all code examples
- [ ] List 5 production stories

### 3 Days Before
- [ ] Mock interview with friend
- [ ] Review weak areas
- [ ] Prepare questions for interviewer
- [ ] Rest and stay calm

### Day Before
- [ ] Light review only (don't cram)
- [ ] Prepare workspace for virtual interview
- [ ] Get good sleep

### Interview Day
- [ ] Review your top 10 concepts
- [ ] Stay hydrated
- [ ] Think out loud during technical questions
- [ ] Ask clarifying questions

---

**Good luck! You've got this!** 🚀
