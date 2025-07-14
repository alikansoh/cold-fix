'use client';
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaUsers, FaClock, FaSnowflake, FaTools } from 'react-icons/fa';

export default function AboutPage() {
  const reasons = [
    {
      icon: <FaBolt aria-hidden="true" />,
      title: 'Rapid Response',
      desc: 'Emergency callouts 24/7 across the UK — we’re there when you need us most.',
    },
    {
      icon: <FaShieldAlt aria-hidden="true" />,
      title: 'Certified & Insured',
      desc: 'All technicians are fully trained, certified and insured for your peace of mind.',
    },
    {
      icon: <FaUsers aria-hidden="true" />,
      title: 'Customer First',
      desc: 'We put people before profit. Our service is honest, clear and built on trust.',
    },
    {
      icon: <FaClock aria-hidden="true" />,
      title: 'Always On Time',
      desc: 'Punctual, professional, and efficient — we respect your time and schedule.',
    },
    {
      icon: <FaSnowflake aria-hidden="true" />,
      title: 'Specialised Experts',
      desc: 'Experts in ACs, chillers, freezers, fridges & more. Domestic + commercial.',
    },
    {
      icon: <FaTools aria-hidden="true" />,
      title: 'Preventative Maintenance',
      desc: 'Stay ahead of breakdowns with our tailored maintenance packages.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 sm:px-10 lg:px-24 py-20 space-y-28">
      
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
        aria-labelledby="about-hero-title"
      >
        <h1 id="about-hero-title" className="text-4xl sm:text-5xl font-extrabold text-sky-800 mb-4">
          About <span className="text-sky-600">ColdFix</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600">
          We're on a mission to keep the UK cool — one unit at a time. With 24/7 availability and decades of experience, ColdFix delivers professional, fast and affordable cooling services you can trust.
        </p>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
        aria-labelledby="why-choose-title"
      >
        <h2 id="why-choose-title" className="text-3xl sm:text-4xl font-bold text-sky-800 mb-10">
          Why Choose ColdFix?
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {reasons.map(({ icon, title, desc }, i) => (
            <li
              key={i}
              className="bg-sky-50 rounded-xl p-6 shadow-sm hover:shadow-md transition text-left"
              aria-labelledby={`reason-title-${i}`}
              aria-describedby={`reason-desc-${i}`}
            >
              <div className="text-sky-700 text-2xl mb-4">{icon}</div>
              <h3 id={`reason-title-${i}`} className="text-xl font-semibold text-sky-800 mb-2">
                {title}
              </h3>
              <p id={`reason-desc-${i}`} className="text-gray-600">
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* TRUSTED BY BUSINESSES */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-sky-50 rounded-3xl p-10 sm:p-16 text-center shadow-md"
        aria-labelledby="trusted-title"
      >
        <h2 id="trusted-title" className="text-3xl sm:text-4xl font-extrabold text-sky-800 mb-4">
          Trusted by Businesses, Loved by Clients
        </h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
          ColdFix is the name UK businesses and homeowners rely on for fast, affordable and expert cooling solutions.
        </p>

        <div
          className="flex justify-center gap-1 mb-2 text-yellow-400 text-xl sm:text-2xl"
          role="img"
          aria-label="Rated 5 out of 5 stars"
        >
          {'★★★★★'.split('').map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Rated 5.0 based on verified reviews across the UK
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sky-700 font-medium text-base sm:text-lg">
          <span className="bg-white border px-4 py-2 rounded-full shadow-sm">Retail Stores</span>
          <span className="bg-white border px-4 py-2 rounded-full shadow-sm">Property Managers</span>
          <span className="bg-white border px-4 py-2 rounded-full shadow-sm">Cafés & Restaurants</span>
          <span className="bg-white border px-4 py-2 rounded-full shadow-sm">Offices & Agencies</span>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-sky-700 text-white text-center py-20 px-6 rounded-3xl shadow-2xl"
        aria-labelledby="cta-title"
      >
        <h3 id="cta-title" className="text-3xl sm:text-4xl font-extrabold mb-4">
          Let’s Get You Cool Again ❄️
        </h3>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Whether it’s urgent repair, new installation or preventative maintenance —
          ColdFix is your go-to partner for professional cooling services in the UK.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-sky-100 transition"
        >
          Contact Us Now
        </a>
      </motion.section>
    </main>
  );
}
