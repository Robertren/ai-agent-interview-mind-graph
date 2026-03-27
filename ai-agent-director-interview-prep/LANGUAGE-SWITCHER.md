# 🌐 Language Switcher - EN / 中文

## ✅ Feature Complete!

I've added a language switcher button that toggles between English and Chinese for the entire knowledge graph!

---

## 🎯 What's New

### Language Toggle Button
- **Location:** Top of graph (next to search bar)
- **Default:** Shows "中文" (currently in English mode)
- **Click:** Switches to Chinese, button changes to "EN"
- **Smooth transition** with visual feedback

### What Gets Translated

#### 1. **UI Elements (All Text)**
- Page title: "AI Agent Director Interview" → "AI Agent 总监面试"
- Subtitle: "Interactive Knowledge Graph..." → "交互式知识图谱..."
- Search placeholder
- Section titles (Key Points, Pros, Cons, etc.)
- Stats labels
- Placeholder text

#### 2. **Node Content (8 Key Nodes with Full Translations)**

**Translated Nodes:**
1. **RAG** (检索增强生成)
   - Full Chinese descriptions, keypoints, pros/cons

2. **Chain-of-Thought** (思维链)
   - Complete Chinese translation with examples

3. **Multi-Head Attention** (多头注意力机制)
   - Technical explanations in Chinese

4. **ReAct** (推理 + 行动)
   - Framework description and usage

5. **LoRA** (低秩适应)
   - Training details and benefits

6. **Quantization** (量化)
   - Methods and trade-offs

7. **Multi-Agent Systems** (多智能体系统)
   - Coordination and architecture

8. **Vector Databases** (向量数据库)
   - Comparison of different solutions

#### 3. **What Stays in English**
✅ **Technical terms:** ReAct, LoRA, RAG, GPT, Transformer, etc.
✅ **Code examples:** All code blocks stay in English
✅ **Node IDs:** Graph node identifiers unchanged

---

## 🎨 How to Use

### Step 1: Hard Refresh Browser
```
Mac: ⌘ Command + Shift + R
Windows: Ctrl + Shift + R
```

### Step 2: Find the Language Button
Look at the **top of the graph**, to the right of the search bar.
You'll see a button that says **"中文"** (if in English mode) or **"EN"** (if in Chinese mode).

### Step 3: Click to Switch
- Click button
- UI instantly updates
- Current node details reload in new language
- Button label changes to show opposite language

### Step 4: Explore
- All UI text is now in your selected language
- Click nodes to see translated content
- 8 key nodes have full Chinese translations
- Other nodes show English descriptions

---

## 📊 Translation Coverage

### Full Translation (8 nodes)
These nodes have complete Chinese translations for:
- Name
- Description
- All key points
- Pros and cons

### English Only (88 nodes)
- Show original English descriptions
- Technical terms preserved
- UI labels still translated

---

## 🧪 Testing Checklist

After hard refresh, verify:

### Basic Functionality
- [ ] Button visible at top of graph
- [ ] Button shows "中文" initially
- [ ] Click button → changes to "EN"
- [ ] Click again → back to "中文"

### UI Translation
- [ ] Page title changes language
- [ ] Search placeholder translates
- [ ] Section titles (Key Points, Pros, Cons) translate
- [ ] Stats labels translate

### Node Content
- [ ] Click "RAG" node
- [ ] Switch to Chinese
- [ ] See Chinese description and keypoints
- [ ] Switch back to English
- [ ] See English version

### Edge Cases
- [ ] Code examples stay in English (both languages)
- [ ] Technical terms like "ReAct" unchanged
- [ ] Navigation buttons still work
- [ ] Search still works in both languages

---

## 💻 Technical Details

### Language State Management
```javascript
let currentLanguage = 'en'; // Global state

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    updateUILanguage(); // Update all UI text
    refreshCurrentNode(); // Reload current node details
}
```

### Translation Storage
```javascript
const translations = {
    en: {
        title: "AI Agent Director Interview",
        subtitle: "Interactive Knowledge Graph • 96 Technical Concepts",
        // ... more translations
    },
    zh: {
        title: "AI Agent 总监面试",
        subtitle: "交互式知识图谱 • 96个技术概念",
        // ... more translations
    }
};
```

### Node Data Structure
```javascript
nodeDetails.rag = {
    name: "RAG (Retrieval-Augmented Generation)",
    name_zh: "RAG (检索增强生成)",
    description: "Retrieve relevant documents...",
    description_zh: "检索相关文档...",
    details: {
        keyPoints: [...], // English
        keyPoints_zh: [...], // Chinese
        proscons: {...}, // English
        proscons_zh: {...} // Chinese
    }
};
```

### Rendering Logic
```javascript
function showNodeDetails(node) {
    const name = currentLanguage === 'zh' && details.name_zh
        ? details.name_zh
        : details.name;

    // Use translated content if available, fall back to English
}
```

---

## 🎯 Language Button Styles

### Visual Design
```css
.lang-button {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid #667eea;
    border-radius: 20px;
    padding: 10px 20px;
    font-weight: 600;
}

.lang-button:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
}
```

### States
- **Default:** White background, purple border
- **Hover:** Purple background, white text, lifts up
- **Active:** Depresses slightly
- **Current language:** Button text changes

---

## 📝 Example Translations

### UI Translations
| English | Chinese |
|---------|---------|
| Total Concepts: | 总概念数: |
| Key Points | 关键要点 |
| Pros | 优点 |
| Cons | 缺点 |
| Related Concepts | 相关概念 |
| Code Example | 代码示例 |
| Search concepts... | 搜索概念... |

### Node Translations (Sample)
**RAG Description:**
- **EN:** "Retrieve relevant documents, inject into prompt, generate grounded response. Reduces hallucination, adds knowledge."
- **ZH:** "检索相关文档，注入到提示中，生成有依据的回答。减少幻觉，增加知识。"

**Chain-of-Thought:**
- **EN:** "Step-by-step reasoning. Show intermediate steps before answer. Dramatically improves complex reasoning."
- **ZH:** "逐步推理。在答案前显示中间步骤。大幅提升复杂推理。"

---

## 🚀 Future Enhancements (Optional)

### To Add More Translations:
1. Edit `data/all-batches-merged.js`
2. Add `name_zh`, `description_zh`, etc. fields
3. Follow the pattern from the 8 translated nodes
4. Technical terms can stay in English

### To Add More Languages:
1. Add to `translations` object in `index.html`
2. Update `toggleLanguage()` function
3. Add new button states

---

## ✅ Deployment Status

**Status:** ✅ Complete and deployed
**Commit:** d370d9b
**Files changed:**
- `index.html` - Language switcher UI and logic
- `data/all-batches-merged.js` - Chinese translations for 8 nodes

**Pushed to:** https://github.com/Robertren/ai-agent-interview-mind-graph

---

## 🎉 Ready to Use!

The language switcher is live and ready. Just:
1. **Hard refresh** your browser
2. **Click the button** at top of graph
3. **Switch between** English and Chinese
4. **Explore** the translated content!

All technical terms like "ReAct", "LoRA", and "RAG" stay in English as requested, making it perfect for technical interviews and study! 🚀

---

**Created:** March 28, 2026
**Language Support:** English (EN) and Chinese (中文)
**Translated Nodes:** 8 key concepts with full translations
