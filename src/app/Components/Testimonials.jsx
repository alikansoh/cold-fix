'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah M.',
    feedback:
      'COOL FIX saved the day when our AC broke during a heatwave. Super fast, professional, and affordable!',
    location: 'London',
  },
  {
    name: 'James R.',
    feedback:
      'We use COOL FIX for our restaurant’s cold rooms — they’re always on time and know their stuff.',
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
      'Professional, reliable, and affordable. Great experience with COOL FIX for our office AC system.',
    location: 'Leeds',
  },
  {
    name: 'Nina P.',
    feedback:
      'Their cold room maintenance is outstanding. Our business runs smoothly thanks to COOL FIX.',
    location: 'Glasgow',
  },
  {
    name: 'Omar S.',
    feedback:
      'Prompt service and very skilled technicians. Highly recommend COOL FIX for refrigeration needs.',
    location: 'Bristol',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-sky-100 via-white to-sky-50 py-20 px-6 sm:px-10 lg:px-32 relative z-0 overflow-visible">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-sky-800">Client Testimonials</h2>
        <p className="mt-4 text-gray-700 text-lg">
          See why our clients trust COOL FIX for all their cooling needs.
        </p>
      </div>

      <div
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-7 scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-sky-100 max-w-6xl mx-auto"
        style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
      >
        {testimonials.map(({ name, feedback, location }, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            tabIndex={0}
            className="snap-start relative bg-white rounded-2xl shadow-lg p-6 pt-14 text-left hover:shadow-xl transition flex-shrink-0"
            style={{ minWidth: '320px', maxWidth: '320px', height: '280px' }}
          >
            {/* Speech Bubble Triangle */}
            <div className="absolute top-4 left-10 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-white" />

            {/* Avatar Initials */}
            <div className="absolute top-0 left-6 bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              {name.charAt(0)}
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-700 text-base italic mb-8 leading-relaxed">“{feedback}”</p>
            <div className="text-sm font-semibold text-sky-700">
              — {name}, {location}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
