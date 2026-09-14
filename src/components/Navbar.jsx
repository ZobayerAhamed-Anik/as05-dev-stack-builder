import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="hidden md:flex items-center justify-between w-full">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center font-bold text-sm">
              DS
            </div>
            <span className="font-bold text-xl text-gray-800">Dev Stack</span>
          </div>

          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#home" className="text-pink-600">Home</a>
            <a href="#technologies" className="hover:text-black">Technologies</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn btn-ghost btn-sm text-gray-700">Sign In</button>
            <button className="btn btn-gradient btn-sm rounded-full px-4">Sign Up</button>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
              <span className="text-xl">☰</span>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-48">
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-orange-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
              DS
            </div>
            <span className="font-bold text-base text-gray-800">Dev Stack</span>
          </div>

          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-xs text-xs">Sign In</button>
            <button className="btn btn-gradient btn-xs rounded-full px-2 text-xs">Sign Up</button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;