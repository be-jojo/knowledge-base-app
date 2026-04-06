# Component Documentation

## Components Overview

This document describes each component in the Knowledge Base application.

---

## 1. Button Component

**Location**: `src/components/Button.jsx`

**Purpose**: Reusable button component with multiple variants and sizes.

**Props**:
- `children` (ReactNode) - Button label/content
- `variant` (string) - 'primary' | 'secondary' | 'ghost' (default: 'primary')
- `size` (string) - 'sm' | 'md' | 'lg' (default: 'md')
- `onClick` (function) - Click handler
- `className` (string) - Additional CSS classes

**Example Usage**:
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

**Styles**:
- Primary: Indigo background with white text
- Secondary: Light gray background
- Ghost: Transparent with gray text

---

## 2. Header Component

**Location**: `src/components/Header.jsx`

**Purpose**: Application header with logo, title, and user controls.

**Props**:
- `title` (string) - Header title (default: 'Knowledge Base')

**Features**:
- Logo badge with "KB" initials
- Application title
- Search, notification, and user profile icons
- Responsive design

**Example Usage**:
```jsx
<Header title="Knowledge Base" />
```

---

## 3. Sidebar Component

**Location**: `src/components/Sidebar.jsx`

**Purpose**: Left navigation sidebar with menu items and actions.

**Props**:
- `onCreateNew` (function) - Callback when "Create New" button is clicked

**Features**:
- Primary "Create New" button
- Navigation menu with 5 items
- Active state highlighting
- Version info footer
- Smooth hover transitions

**Menu Items**:
1. All Articles (Active by default)
2. Favorites
3. Categories
4. Search
5. Settings

**Example Usage**:
```jsx
<Sidebar onCreateNew={() => setIsModalOpen(true)} />
```

---

## 4. Knowledge Card Component

**Location**: `src/components/KnowledgeCard.jsx`

**Purpose**: Display individual knowledge base articles in a card format.

**Props**:
- `title` (string) - Article title
- `description` (string) - Brief article description
- `category` (string) - Article category
- `date` (string) - Publication date
- `readTime` (number) - Estimated read time in minutes

**Features**:
- Title and truncated description
- Category badge with primary color
- Publication date and read time
- Close button (✕)
- Hover shadow effect
- Cursor pointer on hover

**Example Usage**:
```jsx
<KnowledgeCard
  title="Getting Started"
  description="Learn the basics..."
  category="Getting Started"
  date="Mar 15, 2024"
  readTime={8}
/>
```

---

## 5. Create New Modal Component

**Location**: `src/components/CreateNewModal.jsx`

**Purpose**: Modal popup for creating new articles.

**Props**:
- `isOpen` (boolean) - Controls modal visibility
- `onClose` (function) - Callback to close modal

**Features**:
- Centered modal with overlay backdrop
- Smooth fade-in/out animations
- Header with title and close button
- Three form fields:
  - Article Title (text input)
  - Category (select dropdown)
  - Description (textarea)
- Footer with Cancel and Create buttons
- Backdrop click to close

**Form Fields**:
1. **Title**: Text input for article name
2. **Category**: Dropdown with 4 options
   - Getting Started
   - Features
   - Troubleshooting
   - Advanced
3. **Description**: Textarea for article summary

**Example Usage**:
```jsx
const [isOpen, setIsOpen] = useState(false);

<CreateNewModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
```

---

## 6. Main Layout Component

**Location**: `src/layout/MainLayout.jsx`

**Purpose**: Wraps the entire application with header and sidebar.

**Props**:
- `children` (ReactNode) - Page content

**Features**:
- Flex layout with header on top
- Sidebar on left, content on right
- Responsive layout
- Full height layout with overflow handling

**Example Usage**:
```jsx
<MainLayout>
  <Home />
</MainLayout>
```

---

## 7. Home Page Component

**Location**: `src/pages/Home.jsx`

**Purpose**: Main landing page displaying all knowledge base articles.

**State**:
- `isModalOpen` (boolean) - Controls modal visibility

**Features**:
- Page header with title and description
- Responsive grid layout
  - 1 column on mobile
  - 2 columns on tablet (md)
  - 3 columns on desktop (lg)
- 6 sample articles
- "Create New" button in sidebar opens modal
- Modal overlay and dimming

**Grid Layout**:
```
Mobile: 1 card per row
Tablet: 2 cards per row
Desktop: 3 cards per row
```

**Sample Data Structure**:
```javascript
{
  id: 1,
  title: "Article Title",
  description: "Brief description...",
  category: "Category Name",
  date: "Mar 15, 2024",
  readTime: 8
}
```

---

## State Management Flow

```
Home.jsx (State: isModalOpen)
├── Header
├── Sidebar (onCreateNew callback)
└── KnowledgeCard Grid
CreateNewModal (isOpen, onClose callbacks)
```

---

## Component Hierarchy

```
App
└── MainLayout
    ├── Header
    ├── Sidebar
    │   └── Button (Create New)
    └── Home
        ├── Sidebar (renders again - integrate if needed)
        ├── KnowledgeCard (6 instances)
        └── CreateNewModal
```

---

## Styling Guidelines

### Tailwind Utilities Used

**Colors**:
- `bg-primary` - #4F46E5 (Indigo)
- `bg-secondary` - #1E1B4B (Dark Navy)
- `text-white`, `text-gray-*`
- `bg-opacity-*` - For transparent backgrounds

**Spacing**: Tailwind scale (px, 2, 4, 6, 8, etc.)

**Responsive**: 
- Base: Mobile first
- `md:` - Tablet (768px)
- `lg:` - Desktop (1024px)

**Effects**:
- `hover:` - Hover states
- `transition-*` - Smooth animations
- `shadow-lg` - Elevation

---

## Reusability Notes

✅ **Button** - Used in Sidebar, Modal footer
✅ **Header** - Can be customized with different titles
✅ **KnowledgeCard** - Loop over array of articles
✅ **Sidebar** - Can update menu items array
✅ **Modal** - Can be reused with different content

---

## Future Enhancements

- Add routing for article detail pages
- Search functionality in header
- Filter articles by category
- Dark mode toggle
- Authentication system
- Backend API integration
- Article creation/editing
- Comments section
- Share functionality

---

**Last Updated**: 2024  
**Component Version**: 1.0.0
