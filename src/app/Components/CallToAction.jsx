'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-32 bg-sky-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('/cta-bg.jpg')] bg-cover bg-center pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Ready to Cool Things Down?
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-white/90">
          Whether it’s your home, business, or emergency situation — we’re here to help. Contact COLD FIX today and get fast, reliable service you can trust.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-sky-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-sky-100 transition text-base sm:text-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-white hover:text-sky-800 transition text-base sm:text-lg"
          >
            View Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
