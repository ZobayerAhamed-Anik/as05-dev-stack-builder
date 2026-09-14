import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <span className="loading loading-spinner loading-lg text-pink-500"></span>
      <p className="text-gray-500 text-sm font-medium">Loading Technologies...</p>
    </div>
  );
};

export default LoadingSpinner;