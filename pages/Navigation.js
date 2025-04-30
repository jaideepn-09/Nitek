'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-100 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-indigo-600' : 'text-black'
              }`}>
                NITEK
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>
              <NavLink href="/About" isScrolled={isScrolled}>About Us</NavLink>
              <NavLink href="#solutions" isScrolled={isScrolled}>Solutions</NavLink>
              <NavLink href="#products" isScrolled={isScrolled}>Products</NavLink>
              <NavLink href="#industries" isScrolled={isScrolled}>Industries</NavLink>
              <NavLink href="#support" isScrolled={isScrolled}>Support</NavLink>
              <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
              <NavLink href="#blog" isScrolled={isScrolled}>Blog</NavLink>
              <NavLink href="#partners" isScrolled={isScrolled}>Partners</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-black'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } ${isScrolled ? 'bg-white' : 'bg-indigo-900'}`}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            <MobileNavLink href="/" isScrolled={isScrolled}>Home</MobileNavLink>
            <MobileNavLink href="/about" isScrolled={isScrolled}>About Us</MobileNavLink>
            <MobileNavLink href="#solutions" isScrolled={isScrolled}>Solutions</MobileNavLink>
            <MobileNavLink href="#products" isScrolled={isScrolled}>Products</MobileNavLink>
            <MobileNavLink href="#industries" isScrolled={isScrolled}>Industries</MobileNavLink>
            <MobileNavLink href="#support" isScrolled={isScrolled}>Support</MobileNavLink>
            <MobileNavLink href="#contact" isScrolled={isScrolled}>Contact</MobileNavLink>
            <MobileNavLink href="#blog" isScrolled={isScrolled}>Blog/Insights</MobileNavLink>
            <MobileNavLink href="#partners" isScrolled={isScrolled}>Partners</MobileNavLink>
            <Link
              href="#demo"
              className={`block w-full text-center px-4 py-2 rounded-md text-sm font-medium ${
                isScrolled 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Request Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

// Reusable component for desktop links
function NavLink({ href, children, isScrolled }) {
  return (
    <Link
      href={href}
      className={`px-2 py-2 text-sm font-medium transition-colors duration-300 ${
        isScrolled ? 'text-gray-900 hover:text-indigo-600' : 'text-black hover:text-indigo-900'
      }`}
    >
      {children}
    </Link>
  );
}

// Reusable component for mobile links
function MobileNavLink({ href, children, isScrolled }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-indigo-800'
      }`}
    >
      {children}
    </Link>
  );
}
