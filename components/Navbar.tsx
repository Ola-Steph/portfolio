import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg border-b border-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Website Title */}
        <h1 className="text-2xl font-bold">Portfolio</h1>

        {/* Hamburger Menu (Visible on Mobile) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-gray-900 border-t border-white py-4 space-y-4">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="text-center">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white block px-4 py-2 rounded-md transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
