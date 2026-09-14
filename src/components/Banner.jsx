import React from 'react';

const Banner = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 lg:px-12 py-12 lg:py-20 text-center flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
        Build Your Ideal <br className="hidden sm:block" />
        <span className="gradient-text">Development Stack</span>
      </h1>

      <p className="mt-4 text-gray-600 text-base max-w-2xl leading-relaxed text-center">
        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4 w-full sm:w-auto">
        <a href="#technologies" className="btn btn-brand rounded-lg px-6 py-3 text-sm font-semibold shadow-md flex-1 sm:flex-initial text-center">
          Explore Technologies
        </a>
        <button className="btn border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg px-6 py-3 text-sm font-semibold flex-1 sm:flex-initial">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Banner;