import React from 'react';

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <a href="#technologies" className="btn btn-gradient btn-md rounded-lg">
            Explore Technologies
          </a>
          <button className="btn btn-outline border-gray-300 text-gray-700 btn-md rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-purple-50 rounded-2xl p-6 border border-purple-100 flex items-center justify-center shadow-inner">
          <div className="w-44 h-44 bg-white rounded-xl shadow-lg border border-purple-200 flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl mb-2">⚡</span>
            <span className="font-bold gradient-text text-base">Full-Stack Tech</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;