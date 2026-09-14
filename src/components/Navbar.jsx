import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-4 lg:px-12 py-3">
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
          <span className="font-bold text-xl text-gray-900">Dev Stack</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600">Home</a>
          <a href="#technologies" className="hover:text-gray-900">Technologies</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-ghost text-gray-700 btn-sm font-medium">Sign In</button>
          <button className="btn btn-brand rounded-full btn-sm px-5">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;