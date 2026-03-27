# AI Agent Interview Mind Graph

> **Complete Interactive Knowledge Graph with 96 Technical Concepts**

A comprehensive, bilingual (EN/中文) interactive knowledge graph covering all essential topics for AI Agent interviews. Features detailed technical explanations, pros/cons analysis, code examples, and intelligent search.

## 🌐 Live Demo

**Access online:** [https://robertren.github.io/ai-agent-interview-mind-graph/](https://robertren.github.io/ai-agent-interview-mind-graph/)

![Knowledge Graph Preview](assets/preview.png)

## 🎯 Features

### Core Features
- **96 Concepts** - Complete coverage of LLM architecture, training, deployment, and agent systems
- **10 Categories** - LLM Core, Multimodal, Memory, Reasoning, RAG, Tools, Production, Safety
- **Interactive Visualization** - D3.js force-directed graph with zoom, pan, and click exploration
- **Bilingual Support** - Toggle between English and Chinese (中文) with one click
- **Intelligent Search** - Real-time keyword search with instant navigation
- **Code Examples** - 25+ nodes with production-ready Python/JavaScript code

### Content Quality
Each node includes:
- 5-8 detailed technical keypoints
- 4-6 pros and cons with analysis
- Clickable navigation to related concepts
- Chinese translations for 60 key nodes (62% coverage)

## 📁 Structure

```
ai-agent-interview-mind-graph/
├── index.html              # Main interactive visualization
├── data/
│   ├── expanded-graph-data.js          # Graph structure (nodes, links, categories)
│   └── all-batches-merged.js           # Full node details with bilingual content
├── docs/
│   └── study-guide.md           # Recommended study paths
├── assets/
│   └── preview.png              # Screenshot
└── README.md                    # This file
```

## 🚀 Usage

### Online Access (Recommended)

**Visit:** [https://robertren.github.io/ai-agent-interview-mind-graph/](https://robertren.github.io/ai-agent-interview-mind-graph/)

No setup required! Works on desktop and mobile.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Robertren/ai-agent-interview-mind-graph.git
   cd ai-agent-interview-mind-graph
   ```

2. Open `index.html` in a modern browser

3. **Interact with the graph:**
   - 🔍 **Search**: Type in search bar to find concepts
   - 🌐 **Language**: Click language button to switch EN/中文
   - 👆 **Click nodes**: View detailed information
   - 🖱️ **Navigate**: Click "Related Concepts" buttons to jump
   - 🔎 **Zoom**: Mouse wheel or pinch
   - 📍 **Pan**: Click and drag background
   - 🎯 **Move nodes**: Drag individual nodes

### Deploy Your Own

See [GITHUB-PAGES-SETUP.md](GITHUB-PAGES-SETUP.md) for detailed instructions.

## 🌍 Language Support

- **English**: Full coverage for all 96 nodes
- **中文 (Chinese)**: 60 nodes fully translated (62% coverage)
  - All major concepts translated
  - Technical terms preserved (ReAct, LoRA, RAG, etc.)
  - Covers 90%+ of typical interview topics

Perfect for bilingual technical interviews!

## 📚 Coverage

### LLM Core (24 nodes)
- Transformer Architecture, Attention Mechanisms
- Pre-training, SFT, RLHF, DPO
- Tokenization (BPE, SentencePiece)
- Inference Optimization (KV Cache, Quantization)
- Long Context, Scaling Laws

### Advanced Training (8 nodes)
- LoRA, QLoRA, Distillation
- Distributed Training (ZeRO, FSDP, Tensor Parallelism)

### Prompting & Reasoning (10 nodes)
- Prompt Engineering, Few-Shot, Zero-Shot
- Chain-of-Thought, Tree-of-Thoughts
- ReAct, Plan-Execute

### Multi-Agent Systems (7 nodes)
- Agent Frameworks (LangChain, CrewAI, MetaGPT)
- Coordination Patterns
- Task Allocation, Communication

### RAG & Retrieval (10 nodes)
- Dense, Sparse, Hybrid Retrieval
- Reranking, Self-RAG
- Vector Databases, Embeddings
- Chunking Strategies, ANN (HNSW, IVF)

### Memory Systems (6 nodes)
- Episodic, Semantic, Knowledge Graphs
- Context Management, Conversation Summarization

### Tool Use (10 nodes)
- Function Calling, API Integration
- Code Execution, Sandboxing
- Parameter Extraction, Error Handling
- Structured Output, JSON Mode

### Production & Deployment (7 nodes)
- Model Serving (vLLM, TensorRT-LLM)
- Monitoring, Scaling, Cost Management
- Batching, Caching, Model Routing

### Multimodal AI (5 nodes)
- Vision Transformers (ViT)
- CLIP, GPT-4V
- Video Understanding, Audio Processing

### Safety & Alignment (8 nodes)
- RLHF, DPO, Content Filtering
- Jailbreak Defense, Bias Detection
- Privacy, Red Teaming, Audit Logging

## ✨ Recent Updates

### March 2026
- ✅ Added English/Chinese language switcher
- ✅ Expanded translations to 60 nodes (62% coverage)
- ✅ Added intelligent search with keyword jump
- ✅ Implemented clickable navigation buttons
- ✅ Added 25+ code examples
- ✅ Fixed all navigation and display issues
- ✅ Deployed to GitHub Pages

## 🎓 How to Use for Interview Prep

### 1. **Explore the Graph**
   - Start with your weak areas
   - Follow connections to related topics
   - Use search to find specific concepts

### 2. **Study Each Node**
   - Read key points thoroughly
   - Understand pros/cons trade-offs
   - Review code examples
   - Practice explaining to others

### 3. **Practice Navigation**
   - Follow related concepts
   - Build mental connections
   - Understand relationships

### 4. **Switch Languages**
   - Practice explaining in both languages
   - Test bilingual technical communication
   - Prepare for Chinese interviews

## 📖 Study Guide

### Quick Path (5-7 days)
Focus on starred (*) concepts in priority order:
1. Transformer*, Attention*, Pre-training*
2. Prompting*, Few-Shot*, CoT*
3. RAG*, Vector DBs*, Embeddings*
4. ReAct*, Tool Use*
5. Production*, Serving*

### Comprehensive Path (14-21 days)
Follow the graph structure, category by category:
- Week 1: LLM Core + Advanced Training
- Week 2: Reasoning + Multi-Agent + RAG
- Week 3: Memory + Tools + Production + Safety

### Role-Specific Paths

**ML Engineer Focus:**
- LLM Core → Training → Inference → Production

**Agent Systems Focus:**
- Reasoning → Multi-Agent → Tools → RAG

**Research Focus:**
- LLM Core → Advanced Training → Reasoning → Multimodal

## 🤝 Contributing

Contributions welcome! Areas for expansion:
- Additional code examples
- Real-world case studies
- Interview question samples
- More detailed implementations

## 📄 License

MIT License - Free to use for interview preparation and education.

## 🙏 Acknowledgments

Built with:
- D3.js for visualization
- OpenAI GPT-4 for content generation
- Community best practices and research papers

## 📖 Documentation

- [GITHUB-PAGES-SETUP.md](GITHUB-PAGES-SETUP.md) - How to deploy your own
- [LANGUAGE-SWITCHER.md](LANGUAGE-SWITCHER.md) - Language feature details
- [TRANSLATION-SUMMARY.md](TRANSLATION-SUMMARY.md) - Translation coverage
- [HOW-TO-SEE-FEATURES.md](HOW-TO-SEE-FEATURES.md) - Troubleshooting guide
- [DEBUG-GUIDE.md](DEBUG-GUIDE.md) - Technical debugging

## 📊 Stats

- **Total Nodes**: 96
- **Total Links**: 140+
- **Code Examples**: 25+ nodes
- **Chinese Translations**: 60 nodes (62%)
- **Lines of Code**: ~1,100 in index.html
- **Data Size**: ~200KB total
- **Load Time**: <1 second

## 🔗 Links

- **Live Demo**: [https://robertren.github.io/ai-agent-interview-mind-graph/](https://robertren.github.io/ai-agent-interview-mind-graph/)
- **Repository**: [https://github.com/Robertren/ai-agent-interview-mind-graph](https://github.com/Robertren/ai-agent-interview-mind-graph)
- **Issues**: [Report bugs or suggestions](https://github.com/Robertren/ai-agent-interview-mind-graph/issues)

## 📧 Contact

For questions or suggestions, [open an issue](https://github.com/Robertren/ai-agent-interview-mind-graph/issues) on GitHub.

---

## 🎉 You're Ready!

This comprehensive knowledge graph covers everything you need for an AI Agent Director interview. Use it to:
- ✅ Learn 96 essential concepts
- ✅ Understand relationships between topics
- ✅ Practice with code examples
- ✅ Prepare in English or Chinese
- ✅ Quick reference during prep

**Good luck with your AI Agent interview!** 🚀

*Last updated: March 28, 2026*
*Version: 2.0 with Bilingual Support*
