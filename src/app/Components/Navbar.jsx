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
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* Top Contact Bar - Fixed */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white text-sm py-2 px-6 flex justify-between items-center shadow-md z-50">
        <div className="flex items-center space-x-8">
          <span className="flex items-center space-x-2">
            <FiMail className="text-white" />
            <a href="mailto:info@coolfix.com" className="hover:underline">info@coolfix.com</a>
          </span>
          <span className="flex items-center space-x-2">
            <FiPhone className="text-white" />
            <a href="tel:+447123456789" className="hover:underline">+44 7123 456 789</a>
          </span>
        </div>
        <div className="hidden sm:flex space-x-6 text-white">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-sky-300 transition">
            <FiFacebook /> <span>Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-pink-400 transition">
            <FiInstagram /> <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar - Fixed below the top bar */}
      <nav className="fixed top-[36px] left-0 right-0 z-40 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 shadow-lg border-b border-sky-800">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-extrabold text-white tracking-tight hover:text-sky-300 transition"
          >
            COOL FIX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center text-white font-semibold text-lg tracking-wide">
            {navLinks.map((link, idx) => (
              <div key={link.href} className="flex items-center relative">
                {/* Separator */}
                {idx > 0 && (
                  <span className="mx-5 h-6 border-r border-black opacity-70 select-none" />
                )}
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 transition duration-300 ${
                    pathname === link.href
                      ? 'text-sky-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-sky-300 after:rounded-full font-bold'
                      : 'hover:text-sky-300 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-sky-300 after:rounded-full hover:after:w-full after:transition-all after:duration-300'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:text-sky-300 transition"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-sky-900 border-t border-sky-800 shadow-lg rounded-b-lg px-6 py-6 space-y-5 text-center text-white font-semibold text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 rounded-md transition duration-300 ${
                  pathname === link.href
                    ? 'text-sky-300 underline decoration-sky-300 underline-offset-4 font-bold'
                    : 'hover:text-sky-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Padding so content isn't hidden under fixed navbars */}
      <div className="h-[76px] lg:h-[96px]" />
    </>
  );
}
