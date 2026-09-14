import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <span className="loading loading-spinner loading-lg text-pink-600"></span>
      <p className="text-gray-500 font-medium text-sm animate-pulse">Loading Technologies...</p>
    </div>
  );
};

export default LoadingSpinner;