import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-4 lg:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        <div className="flex items-center gap-3">

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-gray-700 hover:text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors z-20"
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

          <a href="#home" className="hidden md:flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              DS
            </div>
            <span className="font-bold text-xl text-gray-900">
              Dev<span className="gradient-text">Stack</span>
            </span>
          </a>
        </div>

        <a 
          href="#home" 
          className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
          <span className="font-bold text-xl text-gray-900">
            Dev<span className="gradient-text">Stack</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 z-20">
          <button className="btn btn-ghost text-gray-700 btn-sm font-medium px-2 sm:px-3 text-xs sm:text-sm">
            Sign In
          </button>
          <button className="btn btn-brand rounded-full btn-sm px-3 sm:px-5 text-xs sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden pt-3 pb-2 mt-2 border-t border-gray-100 flex flex-col gap-1 text-sm font-medium text-gray-700">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)} 
            className="text-pink-600 bg-pink-50/50 px-3 py-2 rounded-lg transition-colors"
          >
            Home
          </a>
          <a 
            href="#technologies" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
          >
            Technologies
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;