#!/bin/bash
# Verification script for AI Agent Director Interview Prep

echo "🔍 Verifying project structure..."
echo ""

# Check required files
required_files=(
    "index.html"
    "README.md"
    "DEPLOYMENT.md"
    "PROJECT-COMPLETE.md"
    "package.json"
    ".gitignore"
    "merge-all-nodes.js"
    "data/expanded-graph-data.js"
    "data/complete-nodeDetails-all-95.js"
    "docs/study-guide.md"
    "docs/COMPLETION-TRACKER.md"
    "docs/FINAL-STATUS.md"
)

missing=0
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ MISSING: $file"
        missing=$((missing + 1))
    fi
done

echo ""
if [ $missing -eq 0 ]; then
    echo "✅ All required files present!"
else
    echo "⚠️  $missing file(s) missing"
    exit 1
fi

# Check file sizes
echo ""
echo "📊 File sizes:"
du -sh data/*.js docs/*.md *.html *.md | column -t

# Count nodes in data
echo ""
echo "📈 Content statistics:"
node_count=$(grep -c "nodeDetails\." data/complete-nodeDetails-all-95.js || echo "0")
echo "   Nodes defined: $node_count"

graph_nodes=$(grep -c "\"id\":" data/expanded-graph-data.js || echo "0")
echo "   Graph nodes: $graph_nodes"

# Success
echo ""
echo "✅ Project verification complete!"
echo "🚀 Ready to commit to GitHub"
echo ""
echo "Next steps:"
echo "1. git init"
echo "2. git add ."
echo "3. git commit -m 'Initial commit: AI Agent Director Interview Knowledge Graph'"
echo "4. git remote add origin <your-repo-url>"
echo "5. git push -u origin main"
