'use client';

import { motion } from 'motion/react'; // ✅ Updated import

export default function Services() {
  const services = [
    {
      title: 'Home AC Installation & Repair',
      desc: 'Efficient and reliable air conditioning services to keep your home comfortable year-round.',
      icon: '❄️',
    },
    {
      title: 'Commercial Refrigeration',
      desc: 'Maintain optimal temperatures with our professional refrigeration installation and servicing.',
      icon: '🧊',
    },
    {
      title: 'Cold Room Design & Maintenance',
      desc: 'Custom cold room solutions tailored to your business needs with expert maintenance.',
      icon: '🏗️',
    },
    {
      title: 'Emergency Repairs',
      desc: 'Fast and effective emergency repair services whenever you need them most.',
      icon: '⚡',
    },
  ];

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      aria-label="Cooling services offered by COOL FIX"
      className="py-20 bg-white text-gray-900 px-6 sm:px-10 lg:px-32"
    >
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-sky-800 mb-4 drop-shadow-sm">
          Our Cooling Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Comprehensive refrigeration, air conditioning, and cold room solutions tailored to your needs.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map(({ title, desc, icon }, index) => (
          <motion.article
            key={title}
            className="p-6 bg-sky-50 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
            tabIndex={0}
            aria-label={title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-5xl mb-4" aria-hidden="true">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
