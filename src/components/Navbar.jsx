import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-4 lg:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        <div className="flex items-center md:hidden z-10">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
          <span className="font-bold text-xl text-gray-900">
            Dev<span className="gradient-text">Stack</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600">Home</a>
          <a href="#technologies" className="hover:text-gray-900">Technologies</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 z-10">
          <button className="btn btn-ghost text-gray-700 btn-sm font-medium px-2 sm:px-3 text-xs sm:text-sm">
            Sign In
          </button>
          <button className="btn btn-brand rounded-full btn-sm px-4 sm:px-5 text-xs sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden pt-3 pb-2 border-t border-gray-100 mt-3 flex flex-col gap-2 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600 px-2 py-1 rounded hover:bg-gray-50">Home</a>
          <a href="#technologies" className="hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-50">Technologies</a>
          <a href="#projects" className="hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-50">Projects</a>
          <a href="#about" className="hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-50">About</a>
          <a href="#contact" className="hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-50">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;