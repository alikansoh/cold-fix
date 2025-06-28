'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah M.',
    feedback:
      'COLD FIX saved the day when our AC broke during a heatwave. Super fast, professional, and affordable!',
    location: 'London',
  },
  {
    name: 'James R.',
    feedback:
      'We use COLD FIX for our restaurant’s cold rooms — they’re always on time and know their stuff.',
    location: 'Birmingham',
  },
  {
    name: 'Amira A.',
    feedback:
      'Excellent customer service and very knowledgeable technicians. I highly recommend their team!',
    location: 'Manchester',
  },
  {
    name: 'Liam T.',
    feedback:
      'Professional, reliable, and affordable. Great experience with COLD FIX for our office AC system.',
    location: 'Leeds',
  },
  {
    name: 'Nina P.',
    feedback:
      'Their cold room maintenance is outstanding. Our business runs smoothly thanks to COLD FIX.',
    location: 'Glasgow',
  },
];

function Card({ name, feedback, location }) {
  return (
    <div className="keen-slider__slide flex flex-col bg-white rounded-2xl shadow-md p-6 w-full sm:w-[320px]">
      <div className="relative mb-4">
        <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
          {name.charAt(0)}
        </div>
        <div className="absolute top-11 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-white" />
      </div>
      <p className="text-gray-700 text-base italic mb-4">“{feedback}”</p>
      <div className="text-sm font-semibold text-sky-700 mt-auto">
        — {name}, {location}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2.2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-sky-100 py-16 px-4 sm:px-10 lg:px-32">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-sky-800 mb-3">What Our Clients Say</h2>
        <p className="text-gray-600 text-lg">
          Real experiences from people who trust COLD FIX with their cooling systems.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} />
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => slider.current?.prev()}
            className="p-3 rounded-full bg-white text-sky-600 hover:text-white hover:bg-sky-600 shadow transition"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="p-3 rounded-full bg-white text-sky-600 hover:text-white hover:bg-sky-600 shadow transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
