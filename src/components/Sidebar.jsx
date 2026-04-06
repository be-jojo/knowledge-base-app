import React, { useState } from 'react';

const Icon = ({ name }) => {
  const icons = {
    brain: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H6C4.89543 3 4 3.89543 4 5V8C4 9.10457 4.89543 10 6 10H7M9 3H15M15 3H18C19.1046 3 20 3.89543 20 5V8C20 9.10457 19.1046 10 18 10H17M15 3V10M9 10V3M7 10H17M7 10V14C7 15.1046 7.89543 16 9 16H12V17C12 18.1046 12.8954 19 14 19H15C16.1046 19 17 18.1046 17 17V16H18C19.1046 16 20 15.1046 20 14V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    model: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 14H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    library: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H18V20H6V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 8H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 12H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    published: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20L6 12L12 4L18 12L12 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    machine: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 7V5H16V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    queue: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 17H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    trigger: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L7 9L12 22L17 9L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    jobs: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 7H18V17H6V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 7V5H15V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    execution: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    vault: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    tenant: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    integrations: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    settings: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19.4 15A1.65 1.65 0 0 0 20 13.6 1.65 1.65 0 0 0 19.4 12.2L21.54 10.65C21.76 10.49 21.83 10.17 21.67 9.95L19.67 7.05C19.51 6.83 19.19 6.76 18.97 6.92L17.15 8.24C16.5 7.75 15.74 7.39 14.91 7.18V4.5C14.91 4.22 14.69 4 14.41 4H9.59C9.31 4 9.09 4.22 9.09 4.5V7.18C8.26 7.39 7.5 7.75 6.85 8.24L5.03 6.92C4.81 6.76 4.49 6.83 4.33 7.05L2.33 9.95C2.17 10.17 2.24 10.49 2.46 10.65L4.6 12.2C4.15 12.78 4 13.5 4 14.25C4 15 4.15 15.72 4.6 16.3L2.46 17.85C2.24 18.01 2.17 18.33 2.33 18.55L4.33 21.45C4.49 21.67 4.81 21.74 5.03 21.58L6.85 20.26C7.5 20.75 8.26 21.11 9.09 21.32V24C9.09 24.28 9.31 24.5 9.59 24.5H14.41C14.69 24.5 14.91 24.28 14.91 24V21.32C15.74 21.11 16.5 20.75 17.15 20.26L18.97 21.58C19.19 21.74 19.51 21.67 19.67 21.45L21.67 18.55C21.83 18.33 21.76 18.01 21.54 17.85L19.4 16.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return icons[name] || null;
};

const Sidebar = ({ onClose }) => {
  const [activeItem, setActiveItem] = useState('Knowledge Base');

  const projectItems = [
    { icon: 'brain', label: 'Agents' },
    { icon: 'model', label: 'AI Models' },
    { icon: 'library', label: 'Library' },
  ];

  const orchestratorItems = [
    { icon: 'published', label: 'Published' },
    { icon: 'machine', label: 'Machines' },
    { icon: 'queue', label: 'Queues' },
    { icon: 'trigger', label: 'Triggers' },
    { icon: 'jobs', label: 'Jobs' },
    { icon: 'execution', label: 'Executions' },
    { icon: 'vault', label: 'Vault' },
    { icon: 'library', label: 'Knowledge Base' },
    { icon: 'vault', label: 'Key Store' },
  ];

  const adminItems = [
    { icon: 'tenant', label: 'Tenant' },
    { icon: 'integrations', label: 'Integrations' },
    { icon: 'settings', label: 'Settings' },
  ];

  return (
    <aside className="bg-white w-72 border-r border-gray-200 text-gray-700 flex flex-col min-h-0 h-full overflow-y-auto">
      <div className="px-4 pt-4">
        <div className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">My Projects</div>
        <div className="space-y-2">
          {projectItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? 'border-l-4 border-primary bg-primary bg-opacity-10 text-primary pl-3'
                    : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={isActive ? 'text-primary' : 'text-slate-500'}><Icon name={item.icon} /></span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">Orchestrator</div>
        <div className="space-y-2">
          {orchestratorItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? 'border-l-4 border-primary bg-primary bg-opacity-10 text-primary pl-3'
                    : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={isActive ? 'text-primary' : 'text-slate-500'}><Icon name={item.icon} /></span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">Admin</div>
        <div className="space-y-2">
          {adminItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? 'border-l-4 border-primary bg-primary bg-opacity-10 text-primary pl-3'
                    : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={isActive ? 'text-primary' : 'text-slate-500'}><Icon name={item.icon} /></span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
