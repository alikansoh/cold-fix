'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMail, FiPhone, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Our Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className="fixed top-0 left-0 right-0 bg-slate-900 text-white text-sm py-2 px-6 flex justify-between items-center shadow-md z-50"
        role="region"
        aria-label="Contact information"
      >
        <div className="flex items-center space-x-8">
          <span className="flex items-center space-x-2">
            <FiMail className="text-white" aria-hidden="true" />
            <a href="mailto:info@coldfix.co.uk" className="hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400" tabIndex={0}>
              info@coldfix.co.uk
            </a>
          </span>
          <span className="flex items-center space-x-2">
            <FiPhone className="text-white" aria-hidden="true" />
            <a href="tel:+447827268100" className="hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400" tabIndex={0}>
              +44 7827268100
            </a>
          </span>
        </div>
        <div className="hidden sm:flex space-x-6 text-white">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-sky-300 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Visit our Facebook page"
          >
            <FiFacebook aria-hidden="true" />
            <span>Facebook</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-pink-400 transition focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-label="Visit our Instagram profile"
          >
            <FiInstagram aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="fixed top-[36px] left-0 right-0 z-40 bg-gradient-to-r from-sky-950 to-sky-800 shadow-md"
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-extrabold text-white tracking-tight hover:text-sky-300 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Cold Fix
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-white font-semibold">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative py-2 px-1 transition-all ${
                  pathname === href
                    ? 'text-sky-300 border-b-2 border-sky-300 font-bold'
                    : 'hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-sky-300 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-sky-900 border-t border-sky-800 px-6 py-6 space-y-4 text-center text-white font-medium"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 rounded-md transition ${
                  pathname === href
                    ? 'text-sky-300 underline font-bold'
                    : 'hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer for Fixed Bars */}
      <div className="h-[76px] lg:h-[96px]" />
    </>
  );
}
