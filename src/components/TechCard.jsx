import React from 'react';

const TechCard = ({ tech, onAddToStack, isAdded }) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100">
            <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          </div>
          {badge && (
            <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              {badge}
            </span>
          )}
        </div>
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 font-medium">
            {category}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 font-medium">
            {difficulty}
          </span>
          <span className="ml-auto flex items-center gap-1 font-bold text-amber-500">
            ★ {rating}
          </span>
        </div>
      </div>
      <button
        onClick={() => onAddToStack(tech)}
        disabled={isAdded}
        className={`w-full mt-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
          isAdded
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
            : 'bg-gray-900 hover:bg-black text-white shadow-sm'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;