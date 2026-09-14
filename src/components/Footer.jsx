import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-12 pb-6 px-4 mt-16 text-slate-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">

          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs px-2 py-1 rounded">
                DS
              </span>
              <span className="font-bold text-xl text-slate-800">
                Dev <span className="gradient-text">Stack</span>
              </span>
            </div>
            
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex space-x-4 pt-2 text-sm font-medium text-slate-600">
              <a href="#github" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-500 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-pink-500 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-pink-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              LEGAL
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;