# 🚀 Deployment Guide

## Quick Start

### Local Usage

```bash
# Navigate to the folder
cd ai-agent-director-interview-prep

# Option 1: Open directly in browser
open index.html

# Option 2: Serve with Python
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## GitHub Deployment

### Step 1: Create Repository

```bash
# Initialize git (if not already done)
cd ai-agent-director-interview-prep
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Agent Director Interview Knowledge Graph"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/ai-agent-director-interview-prep.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Visit: `https://YOUR_USERNAME.github.io/ai-agent-director-interview-prep/`

### Step 3: Update README

Replace `YOUR_USERNAME` in README.md with your actual GitHub username.

## Customization

### Update Content

If you want to update node details:

```bash
# Edit batch files in parent directory (BATCH-*.js)
# Then re-merge:
node merge-all-nodes.js

# Commit changes
git add data/complete-nodeDetails-all-95.js
git commit -m "Update node details"
git push
```

### Change Styling

Edit the `<style>` section in `index.html`:
- Colors: Search for color codes (e.g., `#667eea`)
- Layout: Modify `#sidebar` width, `#graph` dimensions
- Fonts: Change `font-family` values

### Add More Nodes

1. Edit `data/expanded-graph-data.js`:
   - Add node to `graphData.nodes`
   - Add connections to `graphData.links`

2. Create node details:
   - Add to one of the BATCH-*.js files
   - Run `node merge-all-nodes.js`

3. Test locally, then commit

## Sharing

### For Interviews

Send the GitHub Pages link:
```
https://YOUR_USERNAME.github.io/ai-agent-director-interview-prep/
```

### For Study Groups

1. Fork the repository
2. Each person can customize their copy
3. Share improvements via pull requests

### For Presentations

1. Open in full-screen mode (F11)
2. Navigate to specific nodes during discussion
3. Use zoom controls to focus on areas

## Troubleshooting

### Graph Not Loading

**Problem:** Blank screen or "loading..." message

**Solutions:**
1. Check browser console (F12) for errors
2. Verify all JS files are present in `data/` folder
3. Ensure file paths are correct (case-sensitive on Linux/Mac)
4. Try different browser (Chrome, Firefox recommended)

### Details Not Showing

**Problem:** Clicking nodes doesn't show details

**Solutions:**
1. Verify `complete-nodeDetails-all-95.js` is loaded
2. Check browser console for JS errors
3. Re-run `node merge-all-nodes.js`
4. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

### GitHub Pages 404

**Problem:** Page not found after enabling GitHub Pages

**Solutions:**
1. Wait 2-3 minutes for initial deployment
2. Check repository is public (Settings → General)
3. Verify `index.html` exists in root directory
4. Check GitHub Actions tab for deployment status

## Performance Optimization

### For Slow Loading

If graph loads slowly with all 95 nodes:

1. **Reduce node count** in `expanded-graph-data.js`:
   ```javascript
   // Create priority subset (top 30 concepts)
   const priorityNodes = graphData.nodes.filter(n => n.priority === 'high');
   ```

2. **Simplify force simulation**:
   ```javascript
   simulation
       .force("charge", d3.forceManyBody().strength(-200)) // Reduce from -300
       .alpha(0.3) // Start with less energy
   ```

3. **Lazy load details**:
   - Load node details on-demand instead of upfront
   - Implement in future version

## Backup

### Export Your Progress

```bash
# Create backup
cd ..
tar -czf ai-interview-prep-backup-$(date +%Y%m%d).tar.gz ai-agent-director-interview-prep/

# Restore from backup
tar -xzf ai-interview-prep-backup-20240327.tar.gz
```

### Version Control

Use git tags for milestones:

```bash
git tag -a v1.0 -m "Complete 95 node knowledge graph"
git push origin v1.0
```

## Updates & Maintenance

### Keeping Content Fresh

1. **Weekly:** Review 1-2 nodes for accuracy
2. **Monthly:** Add new research papers / techniques
3. **Quarterly:** Update implementation examples
4. **Yearly:** Major version update

### Pull Latest Research

Subscribe to:
- arXiv ML (cs.LG, cs.CL, cs.AI)
- Papers with Code
- LLM Twitter community
- AI conference proceedings (NeurIPS, ICML, ACL)

## Support

For issues or questions:
1. Check existing issues on GitHub
2. Open new issue with:
   - Browser version
   - Steps to reproduce
   - Screenshots if applicable

---

**Happy studying and good luck with your interview!** 🎉
