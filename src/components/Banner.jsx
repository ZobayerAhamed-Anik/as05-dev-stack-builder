import React from 'react';
import heroImage from '../assets/hero-image.jpg'; 

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

      <div className="flex flex-col items-center lg:items-start max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal <br className="hidden sm:block" />
          <span className="gradient-text">Development Stack</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
          <a 
            href="#technologies" 
            className="btn btn-brand rounded-lg px-6 py-3 text-sm font-semibold shadow-md text-center"
          >
            Explore Technologies
          </a>
          <button 
            type="button"
            className="rounded-lg px-6 py-3 text-sm font-semibold text-gray-700 bg-transparent hover:bg-gray-100 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full max-w-md lg:max-w-lg flex justify-center lg:justify-end">
        <img 
          src={heroImage} 
          alt="Development Stack Visual" 
          className="w-full h-auto object-contain max-h-[400px]"
        />
      </div>
    </section>
  );
};

export default Banner;