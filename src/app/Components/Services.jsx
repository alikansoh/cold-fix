'use client';

import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="py-24 px-6 sm:px-10 lg:px-32 bg-gradient-to-b from-sky-50 via-white to-white"
      aria-label="Cooling services offered"
    >
      <header className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-sky-800 drop-shadow-sm">
          Our Cooling Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Expert cooling and refrigeration solutions tailored for homes and businesses across the UK.
        </p>
      </header>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map(({ title, desc, icon }) => (
          <motion.div
            key={title}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group relative p-6 rounded-3xl border border-sky-100 bg-white/60 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer"
            role="article"
            tabIndex={0}
            aria-label={title}
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/20 to-white/10 opacity-0 group-hover:opacity-100 z-0 transition duration-300 pointer-events-none" />

            {/* Icon Circle */}
            <motion.div
              whileHover={{ y: -5, rotate: 2 }}
              className="relative z-10 w-16 h-16 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-400 shadow-inner text-white text-2xl transition-transform"
              aria-hidden="true"
            >
              {icon}
            </motion.div>

            {/* Title & Description */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-sky-900 mb-2">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
            </div>

            {/* Hover Underline */}
            <div className="absolute bottom-5 left-6 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-16" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
