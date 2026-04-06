import React from 'react';

const KnowledgeCard = ({ title, description, date }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
        </div>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:text-slate-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="5" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="19" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className='mb-4'>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="border-t border-slate-200 mt-auto pt-2">
        <p className="text-sm text-slate-500">Created On: {date}</p>
      </div>
    </div>
  );
};

export default KnowledgeCard;
