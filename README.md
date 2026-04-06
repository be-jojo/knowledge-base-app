# Knowledge Base Application

A pixel-accurate React UI for a Knowledge Base application built with **React** and **Tailwind CSS**.

## 📁 Project Structure

```
knowledge-base-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── Header.jsx              # Header with branding
│   │   ├── Sidebar.jsx             # Sidebar navigation
│   │   ├── KnowledgeCard.jsx       # Knowledge base card component
│   │   └── CreateNewModal.jsx      # Create new article modal
│   ├── layout/
│   │   └── MainLayout.jsx          # Main layout wrapper
│   ├── pages/
│   │   └── Home.jsx                # Home page with all articles
│   ├── App.jsx                     # Main App component
│   ├── index.jsx                   # React DOM entry point
│   └── index.css                   # Global styles & Tailwind imports
├── package.json                    # Dependencies
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # This file
```

## 🎨 Design Features

- **Primary Color**: #4F46E5 (Indigo)
- **Secondary Color**: #1E1B4B (Dark Navy)
- **Pixel-accurate UI** replicated from Figma design
- **Responsive Layout**: Works on desktop and tablet screens
- **Component-based Architecture**: Reusable, clean components

## 🚀 Features

✅ **Home Screen**
- Header with branding and user profile
- Sidebar navigation with menu items
- Knowledge base cards grid layout
- Responsive design

✅ **Create New Modal**
- Opens on "Create New" button click
- Dimmed overlay background
- Centered modal with close button
- Form with title, category, and description fields
- Submit and cancel actions

✅ **User Interaction**
- "Create New" button opens/closes modal
- Responsive hover states
- Smooth transitions and animations

## 📦 Prerequisites

Before running the application, ensure you have:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Navigate to the project directory

```bash
cd Project Assignments/knowledge-base-app
```

### 2. Install dependencies

```bash
npm install
```

This will install:
- React 18
- Tailwind CSS 3
- PostCSS and Autoprefixer

### 3. Start the development server

```bash
npm start
```

The application will open at `http://localhost:3000`

## 💻 Development Commands

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test
```

## 🎯 User Interactions

### Main Screen
1. **Sidebar Navigation** - Click on menu items (currently static)
2. **Create New Button** - Click to open modal
3. **Knowledge Cards** - Display articles in responsive grid
4. **Close Button** (✕) - Available in modal header

### Modal Interaction
- Click "Create New" button → Modal opens with overlay
- Fill in form fields (Title, Category, Description)
- Click "Cancel" → Modal closes
- Click "Create Article" → Modal closes (form submission)
- Click overlay → Modal closes (backdrop click)

## 📱 Responsive Breakpoints

- **Mobile**: Base styles (< 768px)
- **Tablet**: md breakpoint (768px - 1024px)
- **Desktop**: lg breakpoint (1024px+)

## 🎨 Color Scheme

| Name | Color | Usage |
|------|-------|-------|
| Primary | #4F46E5 | Buttons, active states, accents |
| Secondary | #1E1B4B | Sidebar background |
| Gray-50 | #F9FAFB | Main background |
| Gray-200 | #E5E7EB | Borders |
| White | #FFFFFF | Cards, modals |

## 📝 Component Details

### Header
- Logo with KB badge
- Title
- Search and notification icons
- User profile avatar

### Sidebar
- Create New button (primary action)
- Navigation menu items
- Version info and footer

### Knowledge Cards
- Title and description
- Category badge
- Publication date
- Read time estimate
- Hover effects

### Button Component
Variants: primary, secondary, ghost
Sizes: sm, md, lg

### Modal
- Header with title and close button
- Form inputs (text, select, textarea)
- Footer with action buttons
- Overlay backdrop

## 🔧 Customization

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#YOUR_COLOR_HERE",
}
```

### Modify Sidebar Menu Items
Edit `src/components/Sidebar.jsx`:
```javascript
const menuItems = [
  { icon: '📚', label: 'Custom Item', active: false },
  // ...
];
```

### Add More Knowledge Cards
Edit `src/pages/Home.jsx` and update the `knowledgeArticles` array

## 📚 Technologies Used

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **React Scripts** - Build tooling

## 📄 Notes

- This is a **frontend-only** implementation
- No backend API integration (as per requirements)
- No authentication system
- No database
- Focus on UI/UX and component structure

## 🤝 Contributing

Feel free to customize and extend the components as needed.

## 📞 Support

For issues or questions about the application, refer to the component files in the `src/` directory.

---

**Created**: 2026  
**Status**: Complete - Ready for production deployment
