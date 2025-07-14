'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Zaika',
    feedback:
      'COLD FIX responded promptly during a critical heatwave when our air conditioning system failed. Their team was fast, professional, and delivered cost-effective service. Highly recommended.',
    location: 'Hyde Park, London',
  },
  {
    name: 'Best Broasted',
    feedback:
      'We rely on COLD FIX for the ongoing maintenance and servicing of our restaurant’s cold rooms. They’re consistently punctual, knowledgeable, and dependable.',
    location: 'Edgware Road, London',
  },
  {
    name: 'Tamarind',
    feedback:
      'We’ve been thoroughly impressed with the professionalism and technical expertise of the COLD FIX team. Their customer service is outstanding, and we confidently recommend their services.',
    location: 'Soho, London',
  },
  {
    name: 'MW Capture',
    feedback:
      'COLD FIX provided an excellent solution for our office’s air conditioning needs. The service was reliable, affordable, and executed with a high level of professionalism.',
    location: 'Bolina Road, London',
  },
  {
    name: 'La Petite France',
    feedback:
      'We’ve seen a significant improvement in the performance and reliability of our cold room systems since partnering with COLD FIX. Their maintenance services are exceptional.',
    location: 'London',
  },
];

function Card({ name, feedback, location }) {
  return (
    <article
      className="keen-slider__slide flex flex-col bg-white rounded-2xl shadow-md p-6 w-full sm:w-[320px]"
      aria-label={`Testimonial from ${name} located in ${location}`}
    >
      <div className="relative mb-4">
        <div
          className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md"
          aria-hidden="true"
        >
          {name.charAt(0)}
        </div>
        <div className="absolute top-11 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-white" />
      </div>
      <blockquote className="text-gray-700 text-base italic mb-4">
        “{feedback}”
        <cite className="not-italic block mt-2 font-semibold text-sky-700">
          — {name}, {location}
        </cite>
      </blockquote>
    </article>
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
    <section
      className="bg-gradient-to-b from-sky-50 via-white to-sky-100 py-16 px-4 sm:px-10 lg:px-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2
          id="testimonials-heading"
          className="text-4xl font-extrabold text-sky-800 mb-3"
        >
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg">
          Real experiences from people who trust COLD FIX with their cooling
          systems.
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
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="p-3 rounded-full bg-white text-sky-600 hover:text-white hover:bg-sky-600 shadow transition"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
