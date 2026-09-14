import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">

        <div className="md:col-span-2 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded btn-gradient flex items-center justify-center font-bold text-xs text-white">
              DS
            </div>
            <span className="font-bold text-base text-gray-800">Dev Stack</span>
          </div>
          <p className="text-xs text-gray-500 max-w-xs">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-3 text-xs text-gray-500 font-medium pt-1">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">PRODUCT</h4>
          <ul className="space-y-1 text-xs text-gray-500">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">COMPANY</h4>
          <ul className="space-y-1 text-xs text-gray-500">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">LEGAL</h4>
          <ul className="space-y-1 text-xs text-gray-500">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between text-xs text-gray-400 gap-2">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;