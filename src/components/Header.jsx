import React, { useState } from 'react';

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C18 5.23858 15.7614 3 13 3H11C8.23858 3 6 5.23858 6 8V13L4 15V16H20V15L18 13V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.73 21C13.5544 21.3031 13.2966 21.5542 12.9881 21.7347C12.6796 21.9153 12.3296 22.0191 11.9719 22.0368C11.6143 22.0545 11.2595 21.9861 10.9301 21.8355C10.6006 21.6848 10.3049 21.455 10.0664 21.1582C9.82786 20.8615 9.65264 20.5047 9.55307 20.1149" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Header = ({ onMenuClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-secondary text-white shadow-sm">
      <div className="mx-auto flex max-w-full flex-row justify-between gap-4 px-4 py-4 sm:px-4 lg:px-4 lg:items-center">
        <div className="flex flex-row gap-3 items-center min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden flex text-2xl h-11 w-11 items-center justify-center rounded-2xl bg-primary text-base font-bold text-white hover:bg-primary/80 transition flex-shrink-0"
          >
            A
          </button>

          <div className="hidden lg:flex text-2xl h-11 w-11 items-center justify-center rounded-2xl bg-primary text-base font-bold text-white flex-shrink-0">
            A
          </div>

          <div className="flex flex-col gap-0 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-lg sm:text-2xl text-white truncate">Workspace</span>
            <div className="relative flex items-center rounded-full border border-slate-700 bg-slate-700/20 px-4 py-0 sm:py-1 text-sm text-white w-24 sm:w-auto">
              <select className="appearance-none bg-transparent text-sm text-white outline-none truncate w-full">
                <option value="workspace-1">Workspace 1</option>
                <option value="workspace-2">Workspace 2</option>
              </select>
              <span className="ml-2 text-slate-400 flex-shrink-0">
                <ChevronDown />
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-lg lg:block hidden">
            <div className="pointer-events-none absolute inset-y-0 left-4 grid place-items-center text-slate-400">
                <SearchIcon />
            </div>
            <input
                type="text"
                placeholder="Search"
                className="w-full rounded-2xl border border-slate-700 bg-slate-700/20 py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
        </div>
        <div className="flex items-center gap-0 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="lg:hidden rounded-full p-3 text-white hover:bg-slate-700/40 transition"
            >
                <SearchIcon />
            </button>
            <button className="rounded-full p-3 text-white hover:bg-slate-700/40 transition">
                <BellIcon />
            </button>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold text-white">
                GK
            </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="mx-auto max-w-full px-4 pb-4 lg:hidden">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-4 grid place-items-center text-slate-400">
                <SearchIcon />
            </div>
            <input
                type="text"
                placeholder="Search"
                className="w-full rounded-2xl border border-slate-700 bg-slate-700/20 py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setIsSearchOpen(false);
                }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
