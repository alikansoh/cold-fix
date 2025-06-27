'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/gallery1.jpg', alt: 'AC Installation' },
  { src: '/gallery2.jpg', alt: 'Cold Room Setup' },
  { src: '/gallery3.jpg', alt: 'Refrigeration Unit' },
  { src: '/gallery4.jpg', alt: 'Commercial Installation' },
  { src: '/gallery5.jpg', alt: 'Emergency Repair' },
  { src: '/gallery6.jpg', alt: 'Duct Work' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 px-6 sm:px-10 lg:px-32 bg-gray-50 text-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Our Recent Work
        </h2>
        <p className="text-gray-600 text-lg">
          Explore some of our completed projects — from home installations to large-scale refrigeration systems.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {galleryImages.map(({ src, alt }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={src}
              alt={alt}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
