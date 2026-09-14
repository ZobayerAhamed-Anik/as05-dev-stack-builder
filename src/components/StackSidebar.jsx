import React from 'react';
import StackItem from './StackItem';

const StackSidebar = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <h3 className="font-bold text-gray-900">Your Stack</h3>
        <span className="text-xs bg-pink-100 text-pink-700 font-bold px-2.5 py-1 rounded-full">
          {stack.length} Selected
        </span>
      </div>

      {stack.length === 0 ? (
        <p className="text-xs text-gray-400 text-center py-8">
          Your stack is currently empty. Click "Add to Stack" to select technologies.
        </p>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <StackItem key={item.id} item={item} onRemove={onRemove} />
          ))}
          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 text-xs text-red-600 hover:text-red-700 font-semibold border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
          >
            Clear Stack
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;