import React from 'react';
import TechCard from './TechCard';

const TechGrid = ({ technologies, stack, onAddToStack }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => {
        const isAdded = stack.some((item) => item.id === tech.id);
        return (
          <TechCard
            key={tech.id}
            tech={tech}
            onAddToStack={onAddToStack}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
};

export default TechGrid;