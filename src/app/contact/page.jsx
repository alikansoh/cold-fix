'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_q7a77q7',   
        'template_6isyk2p',  
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        'A4JrpQy20GzSe3cjz'    
      );

      console.log('Email sent:', result.text);
      alert('✅ Message sent successfully!');
      setForm({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Email failed:', error);
      alert('❌ Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6 sm:px-10 lg:px-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* LEFT: Info & Imagery */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-sky-800 mb-6 leading-tight">
            Let's Keep Things Cool ❄️<br />
            Contact <span className="text-sky-600">COLD FIX</span> Today
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Whether it's urgent repairs, preventative maintenance, or commercial installations —
            our certified technicians are standing by 24/7 to assist you. Trusted across the UK for
            reliable, fast, and affordable cooling services.
          </p>

          <div className="space-y-4 text-sky-700 text-base font-medium">
            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              <a href="tel:+447700900123" className="hover:underline">
                +44 7700 900123
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope />
              <a href="mailto:info@coldfix.co.uk" className="hover:underline">
                info@coldfix.co.uk
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt /> 123 Cooling Street, London, UK
            </p>
            <p className="flex items-center gap-3">
              <FaClock /> Available 24/7 – Emergency Support Included
            </p>
          </div>

          <div className="mt-8 hidden lg:block rounded-xl overflow-hidden shadow-md relative w-full aspect-video">
            <Image
              src="/coldfix-technician.jpg"
              alt="COLD FIX Technician servicing a cooling unit"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-sky-50 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-sky-800 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g. Sarah Morgan"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-sky-800 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="e.g. sarah@example.com"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-sky-800 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+44..."
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-sky-800 mb-1">How can we help? *</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell us what you need help with..."
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-800 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send My Request'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
