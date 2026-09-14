import React from 'react';
import StackItem from './StackItem';

const StackSidebar = ({ stack, onRemove, onRemoveAll }) => {
  const count = stack.length;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm sticky top-20">
      <h3 className="font-bold text-lg text-gray-900">Your Stack</h3>
      <p className="text-xs text-gray-400 mt-1">
        {count > 0 ? `${count} Technology Selected` : 'No technologies selected yet.'}
      </p>

      <div className="mt-4 space-y-2">
        {count === 0 ? (
          <div className="border border-dashed border-gray-300 rounded-xl p-8 text-center">
            <p className="text-xs text-gray-400">Your stack is empty.</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-95 overflow-y-auto">
            {stack.map((item) => (
              <StackItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </div>
        )}
      </div>

      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-4 py-2 border border-red-300 text-red-500 rounded-xl text-xs font-bold hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;