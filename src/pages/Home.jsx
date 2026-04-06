import React, { useState } from 'react';
import KnowledgeCard from '../components/KnowledgeCard';
import PageHeader from '../components/PageHeader';
import CreateNewModal from '../components/CreateNewModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const knowledgeArticles = [
    {
      id: 1,
      title: 'Getting Started with React',
      description: 'Learn the basics of React including JSX, components, and hooks. This comprehensive guide will help you understand the fundamentals.  Learn about utility classes, components, and customization',
      category: 'Getting Started',
      date: '14/07/2025',
      readTime: 8,
    },
    {
      id: 2,
      title: 'Tailwind CSS Best Practices',
      description: 'Discover best practices for writing maintainable and scalable CSS using Tailwind. Learn about utility classes, components, and customization.',
      category: 'Styling',
      date: '14/07/2025',
      readTime: 6,
    },
    {
      id: 3,
      title: 'State Management in React',
      description: 'Explore different approaches to managing state in React applications. From useState to Context API and Redux patterns.',
      category: 'Advanced',
      date: '14/07/2025',
      readTime: 12,
    },
    {
      id: 4,
      title: 'Building Responsive UIs',
      description: 'Create responsive web applications that work seamlessly across all device sizes. Learn mobile-first design principles.',
      category: 'Features',
      date: '14/07/2025',
      readTime: 10,
    },
    {
      id: 5,
      title: 'Performance Optimization',
      description: 'Improve your React application performance using code splitting, lazy loading, and memoization techniques.',
      category: 'Advanced',
      date: '14/07/2025',
      readTime: 9,
    },
    {
      id: 6,
      title: 'Component Testing',
      description: 'Write robust tests for your React components using Jest and React Testing Library. Learn testing best practices.',
      category: 'Testing',
      date: '14/07/2025',
      readTime: 11,
    },
  ];

  return (
    <div className="h-full">
      <div className="mx-auto h-full max-w-[1400px] flex flex-col">
        <PageHeader title="Knowledge Base" onCreateNew={() => setIsModalOpen(true)} />

        <div className="rounded-[16px] mt-8 update border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {knowledgeArticles.map((article) => (
              <KnowledgeCard
                key={article.id}
                title={article.title}
                description={article.description}
                date={article.date}
              />
            ))}
          </div>
        </div>
          <div className="flex flex-col mt-auto gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold text-slate-900 px-3 py-3 rounded-2xl border border-slate-200 bg-white sm:px-0 sm:rounded-none sm:border-none sm:bg-transparent">6 rows</div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-900 rounded-2xl border border-slate-200 bg-white sm:px-0 sm:rounded-none sm:border-none sm:bg-transparent">
                <span>Rows per page</span>
                <select className="h-8 w-16 px-3 text-sm text-slate-900 rounded-lg border border-slate-200 bg-white outline-none" value="10">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div className="flex flex-wrap items-center gap-2 px-3 py-3 text-sm font-semibold text-slate-900 rounded-2xl border border-slate-200 bg-white sm:inline-flex sm:px-0 sm:rounded-none sm:border-none sm:bg-transparent">
                <span className="px-2">page 1 of 1</span>
                <button className="rounded-lg h-8 border border-slate-200 bg-white px-3 text-slate-900 hover:bg-slate-100">⟪</button>
                <button className="rounded-lg h-8 border border-slate-200 bg-white px-3 text-slate-900 hover:bg-slate-100">←</button>
                <button className="rounded-lg h-8 border border-slate-200 bg-white px-3 text-slate-900 hover:bg-slate-100">→</button>
                <button className="rounded-lg h-8 border border-slate-200 bg-white px-3 text-slate-900 hover:bg-slate-100">⟫</button>
              </div>
            </div>
          </div>
      </div>

      <CreateNewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
