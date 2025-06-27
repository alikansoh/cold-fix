'use client';

import React from 'react';
import Link from 'next/link';
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

  const [firstWord, secondWord] = text.split(' ');

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-start px-6 sm:px-10 lg:px-32 py-16 overflow-hidden text-white">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src="/hero.jpg"
          alt="Cooling Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Reliable{' '}
          <span className="text-sky-300">
            {firstWord} {secondWord}
            <Cursor cursorColor="#38bdf8" />
          </span>{' '}
          <br />
          for Every Environment
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-xl text-white/90">
          From home AC systems to industrial cold rooms, COOL FIX provides professional, energy-efficient cooling services you can count on.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-lg shadow font-semibold text-sm sm:text-base"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white text-sky-800 hover:bg-blue-100 px-6 py-3 rounded-lg shadow font-semibold text-sm sm:text-base"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
