import React from 'react';

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p className="mt-4 text-gray-500 text-base max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options to build your dream stack.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#technologies" className="btn btn-brand rounded-md px-6 text-sm font-semibold shadow-md">
            Explore Technologies
          </a>
          <button className="btn btn-outline border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md px-6 text-sm font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;