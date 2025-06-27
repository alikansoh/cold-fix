'use client';

import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Expert Technicians',
      desc: 'Certified, highly trained specialists with years of hands-on experience.',
      icon: '🎯',
    },
    {
      title: 'Rapid Response',
      desc: 'Quick service, especially for emergency calls—because cooling can’t wait.',
      icon: '⏱️',
    },
    {
      title: 'Honest Pricing',
      desc: 'Clear, upfront estimates with no hidden costs or surprise fees.',
      icon: '📉',
    },
    {
      title: 'Trusted by Clients',
      desc: 'Backed by strong customer testimonials and long-term relationships.',
      icon: '🌟',
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 px-6 sm:px-10 lg:px-32 bg-gradient-to-br from-sky-100 to-white text-gray-900 overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200 rounded-full opacity-20 blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300 rounded-full opacity-20 blur-3xl animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="lg:w-1/2 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight"
          >
            Why Choose <span className="text-sky-600">COOL FIX</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-700 text-lg"
          >
            Experience premium service with expert engineers, fast response times, and honest pricing.
          </motion.p>
        </div>

        {/* Right Column: List */}
        <div className="lg:w-1/2 space-y-6">
          {reasons.map(({ title, desc, icon }, index) => (
            <motion.div
              key={title}
              className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="text-3xl">{icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
