'use client';

import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Expert Technicians',
      desc: 'Certified, highly trained specialists with years of hands-on experience in cooling and refrigeration systems.',
      icon: '🎯',
    },
    {
      title: 'Rapid Response',
      desc: 'Quick, reliable service for emergency calls—because your cooling system can’t wait.',
      icon: '⏱️',
    },
    {
      title: 'Honest Pricing',
      desc: 'Clear, upfront estimates for refrigeration and air conditioning repairs with no hidden fees.',
      icon: '📉',
    },
    {
      title: 'Trusted by Clients',
      desc: 'Backed by strong customer testimonials and long-term relationships across London.',
      icon: '🌟',
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 px-6 sm:px-10 lg:px-32 bg-gradient-to-br from-sky-100 to-white text-gray-900 overflow-hidden"
      aria-labelledby="why-us-title"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200 rounded-full opacity-20 blur-3xl animate-pulse -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300 rounded-full opacity-20 blur-3xl animate-pulse -z-10" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="lg:w-1/2 text-left">
          <motion.h2
            id="why-us-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight"
          >
            Why Choose <span className="text-sky-600">COLD FIX</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-700 text-lg"
          >
            Experience premium cooling and refrigeration service with expert engineers, fast response times, and honest pricing.
          </motion.p>
        </div>

        {/* Right Column: List */}
        <div className="lg:w-1/2 space-y-6">
          <ul role="list" aria-label="Reasons to choose Cold Fix for cooling services">
            {reasons.map(({ title, desc, icon }, index) => (
              <motion.li
                key={title}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <span
                  className="text-3xl"
                  role="img"
                  aria-label={title}
                >
                  {icon}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
