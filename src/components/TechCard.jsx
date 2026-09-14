import React from 'react';

const TechCard = ({ tech, onAddToStack, isAdded }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div className="w-10 h-10 bg-gray-50 rounded-lg p-2 border border-gray-100 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
          </div>
          {tech.badge && (
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="font-bold text-lg text-gray-900">{tech.name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{tech.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">
            {tech.category}
          </span>
          <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">
            {tech.difficulty}
          </span>
          <span className="ml-auto font-bold text-amber-500">
            ★ {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={() => onAddToStack(tech)}
        disabled={isAdded}
        className={`w-full mt-5 py-2 rounded-xl text-xs font-bold transition-all ${
          isAdded
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;