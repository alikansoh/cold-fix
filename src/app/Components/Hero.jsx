'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const wordPairs = [
  'Cooling Solutions',
  'Refrigeration Experts',
  'AC Specialists',
  'Cold Room Pros',
];

export default function Hero() {
  const [text] = useTypewriter({
    words: wordPairs,
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  // Safely split the text to first and second word (if possible)
  const [firstWord = '', secondWord = ''] = text.split(' ');

  return (
    <section
      className="relative min-h-[80vh] flex flex-col justify-center items-start px-6 sm:px-10 lg:px-32 py-16 overflow-hidden text-white"
      aria-label="Hero section with rotating service specialties"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/hero.jpg"
          alt="ColdFix Cooling Services"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Premium{' '}
          <span className="text-sky-500" aria-live="polite" aria-atomic="true">
            {firstWord} {secondWord}
            <Cursor cursorColor="#0ea5e9" />
          </span>{' '}
          <br />
          Delivered by Cold Fix
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-xl text-white/90">
          From home air conditioning to industrial-grade cold rooms,{' '}
          <strong>Cold Fix</strong> delivers reliable, energy-efficient cooling
          solutions tailored to your needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg shadow font-semibold text-sm sm:text-base"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="bg-white text-sky-800 hover:bg-blue-100 px-6 py-3 rounded-lg shadow font-semibold text-sm sm:text-base"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
