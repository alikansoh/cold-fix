'use client';
import { motion } from 'framer-motion';
import { 
  FaTools, 
  FaSnowflake, 
  FaThermometerHalf, 
  FaWarehouse, 
  FaCogs,
  FaShieldAlt,
} from 'react-icons/fa';

// IceParticle component for falling ice shards animation

  
  
const services = [
  {
    title: 'Emergency Repairs',
    desc: 'Fast 24/7 emergency repairs to get your cooling system back in action without delay.',
    icon: <FaTools />,
  },
  {
    title: 'Air Conditioning Installation',
    desc: 'Professional installation of the latest energy-efficient air conditioning systems.',
    icon: <FaSnowflake />,
  },
  {
    title: 'Air Conditioning Fix & Repair',
    desc: 'Reliable diagnostics and repairs for all major AC brands and types.',
    icon: <FaThermometerHalf />,
  },
  {
    title: 'Cold Room Solutions',
    desc: 'Custom design, installation, and maintenance of cold rooms for commercial use.',
    icon: <FaWarehouse />,
  },
  {
    title: 'Commercial Maintenance',
    desc: 'Scheduled maintenance plans to prevent breakdowns and extend equipment life.',
    icon: <FaCogs />,
  },
  {
    title: 'System Health Checks',
    desc: 'Thorough inspections and performance evaluations to keep your system running optimally.',
    icon: <FaShieldAlt />,
  },
];

const whyChooseUsPoints = [
  {
    title: 'Certified Technicians',
    desc: 'Our team is fully certified and trained with years of experience.',
  },
  {
    title: 'Fast & Reliable',
    desc: 'We pride ourselves on speedy response times and dependable service.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden fees or surprises—just fair and honest pricing.',
  },
  {
    title: '24/7 Support',
    desc: 'Emergency support available anytime, day or night.',
  },
];

const howWeWorkSteps = [
  {
    number: '01',
    title: 'Get In Touch',
    desc: 'Call or email us to describe your cooling system needs or issues.',
  },
  {
    number: '02',
    title: 'Schedule a Visit',
    desc: 'We arrange a convenient appointment time to inspect your system.',
  },
  {
    number: '03',
    title: 'Professional Diagnosis',
    desc: 'Our expert technicians perform a thorough assessment and explain the solution.',
  },
  {
    number: '04',
    title: 'Fast Repairs or Installation',
    desc: 'We efficiently fix, maintain, or install your cooling system with high-quality parts.',
  },
  {
    number: '05',
    title: 'Quality Check & Support',
    desc: 'After service, we ensure everything works perfectly and offer ongoing maintenance plans.',
  },
];

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-sky-50 to-white py-20 px-6 sm:px-10 lg:px-28 relative overflow-hidden">
     
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 max-w-4xl mx-auto relative z-20"
      >
        <h1 className="text-5xl font-extrabold text-sky-800 mb-6 leading-tight">
          Comprehensive Cooling Services<br />That Keep You Comfortable
        </h1>
        <p className="text-lg text-gray-600">
          From emergency repairs to bespoke cold room installations, ColdFix provides trusted solutions tailored to your needs across the UK.
        </p>
      </motion.section>

      {/* Services Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-24 relative z-20">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl bg-white/20 backdrop-blur-md p-8 pt-12 shadow-xl border border-sky-100 hover:border-sky-400 transition-all duration-300 hover:-translate-y-3 cursor-pointer"
          >
            <div className="absolute -top-8 left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg flex items-center justify-center text-white text-3xl transform group-hover:scale-110 transition duration-300 border-4 border-white">
              {srv.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition">
              {srv.title}
            </h3>
            <div className="w-12 h-[3px] bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full mb-4 group-hover:w-20 transition-all duration-300" />
            <p className="text-gray-700 leading-relaxed">{srv.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* How We Work Section */}
      <section className="max-w-5xl mx-auto mb-24 px-6 py-12 bg-white rounded-3xl shadow-lg border border-sky-200 relative z-20">
        <motion.h2
          className="text-3xl font-extrabold text-sky-800 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {howWeWorkSteps.map(({ number, title, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-default"
            >
              <div className="text-sky-600 font-bold text-3xl mb-4">{number}</div>
              <h3 className="text-xl font-semibold text-sky-800 mb-3">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-sky-100 rounded-3xl p-12 max-w-5xl mx-auto mb-24 shadow-lg relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-sky-800 text-center mb-10"
        >
          Why Choose ColdFix?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {whyChooseUsPoints.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md border border-sky-200 hover:shadow-lg transition cursor-default"
            >
              <h3 className="text-xl font-semibold text-sky-700 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-sky-700 text-white rounded-3xl p-12 max-w-4xl mx-auto text-center shadow-xl relative z-20"
      >
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to experience reliable cooling solutions?
        </h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Contact ColdFix today for a free consultation and let us keep you cool all year round.
        </p>
        <a
          href="tel:+441234567890"
          className="inline-block bg-cyan-400 hover:bg-cyan-500 text-sky-900 font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Call Now
        </a>
      </motion.section>
    </main>
  );
}
