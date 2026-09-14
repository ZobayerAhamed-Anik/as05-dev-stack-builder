import React from 'react';

const StackItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3">
        <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
        <div>
          <h4 className="font-bold text-xs text-gray-900">{item.name}</h4>
          <p className="text-[10px] text-gray-400">{item.category}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500 font-bold px-2 text-sm"
      >
        ✕
      </button>
    </div>
  );
};

export default StackItem;