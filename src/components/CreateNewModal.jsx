import React from 'react';

const CreateNewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md">
        <div className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
          <div className="flex items-start justify-between border-b border-gray-200 px-6 py-5">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Create New Knowledge Base</h2>
              <p className="mt-1 text-sm text-gray-500">Best for quick answers from documents, websites and text files.</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-gray-400">(Cannot be edited later)</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows="5"
                  placeholder="Description"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vector Store</label>
                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option>Qdrant</option>
                  <option>Pinecone</option>
                  <option>Milvus</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LLM Embedding Model</label>
                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option>text-embedding-ada-002</option>
                  <option>text-embedding-3-large</option>
                  <option>text-embedding-3-small</option>
                </select>
              </div>
            </form>
          </div>

          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-600 transition"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewModal;
