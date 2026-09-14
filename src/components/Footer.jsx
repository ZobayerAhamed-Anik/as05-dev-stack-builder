import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-4 mt-16 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;