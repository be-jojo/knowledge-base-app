# 🚀 Quick Start Guide

Complete setup and run in 3 simple steps:

## Step 1: Install Dependencies
```bash
cd knowledge-base-app
npm install
```

**What's being installed:**
- React 18 (UI library)
- Tailwind CSS (styling)
- React Scripts (build tools)
- PostCSS (CSS processing)

⏱️ **Time**: ~2-3 minutes

---

## Step 2: Start Development Server
```bash
npm start
```

✅ Application automatically opens at `http://localhost:3000`

---

## Step 3: Test the Application

### Try These Interactions:

1. **View Home Screen**
   - See the Knowledge Base with 6 sample articles
   - Responsive grid layout adapts to window size

2. **Open Modal**
   - Click the blue "Create New" button in the sidebar
   - Modal appears with a dimmed overlay

3. **Close Modal**
   - Click the ✕ button in the modal header
   - OR click the gray "Cancel" button
   - OR click outside the modal (on the overlay)

4. **Test Responsiveness**
   - Resize browser window
   - See layout change from 3 columns → 2 columns → 1 column

---

## 🎨 Application Features

| Feature | Location | Action |
|---------|----------|--------|
| App Logo | Header | Branded "KB" badge |
| Navigation | Sidebar | Click menu items (static links) |
| Articles | Main area | Grid of 6 knowledge cards |
| Create New | Sidebar | Click button to open modal |
| Modal Form | Modal | Fill form fields |
| Close | Modal | Click ✕ or Cancel |

---

## 📱 Screen Sizes

Test on these breakpoints:

```
Mobile:  < 768px   (1 column)
Tablet:  768-1024px (2 columns)
Desktop: > 1024px   (3 columns)
```

**DevTools**: Press F12 or Cmd+Option+I to open browser DevTools

---

## 🛠️ Project Structure

```
knowledge-base-app/
├── src/
│   ├── components/     ← All UI components
│   ├── pages/         ← Page components
│   ├── layout/        ← Layout wrappers
│   ├── App.jsx        ← Main app component
│   └── index.jsx      ← Entry point
├── public/
│   └── index.html     ← HTML template
├── package.json       ← Dependencies
├── tailwind.config.js ← Tailwind settings
└── README.md          ← Full documentation
```

---

## 🎯 Colors Used

- **Primary**: #4F46E5 (Indigo) - Buttons, accents
- **Secondary**: #1E1B4B (Dark Navy) - Sidebar background
- **Neutral**: Grays - Text, borders, backgrounds

---

## 📝 Component Files

| Component | File | Purpose |
|-----------|------|---------|
| Header | `components/Header.jsx` | Top navigation bar |
| Sidebar | `components/Sidebar.jsx` | Left navigation |
| Button | `components/Button.jsx` | Reusable button |
| Card | `components/KnowledgeCard.jsx` | Article card |
| Modal | `components/CreateNewModal.jsx` | Create article modal |
| Home | `pages/Home.jsx` | Main page |

---

## ⚡ Common Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Stop server
Ctrl + C (or Cmd + C on Mac)
```

---

## ❓ Troubleshooting

### Port 3000 already in use?
```bash
# Kill process on port 3000
lsof -ti :3000 | xargs kill -9

# Then restart
npm start
```

### Node modules issues?
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles not loading?
```bash
# Restart development server
npm start
```

---

## 📚 Next Steps

1. **Customize Colors**: Edit `tailwind.config.js`
2. **Add More Articles**: Edit `src/pages/Home.jsx`
3. **Modify Menu Items**: Edit `src/components/Sidebar.jsx`
4. **Change Header Title**: Pass `title` prop to `<Header />`

---

## 🎬 Demo Interaction Flow

```
1. App loads → See home screen with sidebar
2. Click "Create New" → Modal opens with overlay
3. See modal with:
   - Title field
   - Category dropdown
   - Description textarea
4. Click "Cancel" or ✕ → Modal closes
5. Resize window → Layout adapts responsively
```

---

## ✅ Quality Checklist

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modal open/close functionality
- ✅ Component-based architecture
- ✅ Tailwind CSS styling
- ✅ Pixel-accurate UI
- ✅ Color scheme (#4F46E5, #1E1B4B)
- ✅ Smooth animations and transitions
- ✅ Clean code structure
- ✅ Reusable components

---

## 🎓 Learning Resources

Need help with React or Tailwind?

- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Component Docs**: See `COMPONENT_DOCS.md`
- **Full README**: See `README.md`

---

**Ready to build?** Run `npm start` and start developing! 🎉
