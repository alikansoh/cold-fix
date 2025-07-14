"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const result = await emailjs.send(
        "service_q7a77q7",
        "template_6isyk2p",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "A4JrpQy20GzSe3cjz"
      );

      console.log("Email sent:", result.text);
      setStatusMessage({
        type: "success",
        text: "✅ Message sent successfully!",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email failed:", error);
      setStatusMessage({
        type: "error",
        text: "❌ Failed to send. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-white py-20 px-6 sm:px-10 lg:px-32"
      aria-label="Contact ColdFix cooling services"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* LEFT: Info & Imagery */}
        <motion.section
          aria-labelledby="contact-heading"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1
            id="contact-heading"
            className="text-4xl font-extrabold text-sky-800 mb-6 leading-tight"
          >
            Let's Keep Things Cool ❄️
            <br />
            Contact <span className="text-sky-600">COLD FIX</span> Today
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Whether it's urgent repairs, preventative maintenance, or commercial
            installations — our certified technicians are standing by 24/7 to
            assist you. Trusted across the UK for reliable, fast, and affordable
            cooling services.
          </p>

          <address className="space-y-4 text-sky-700 text-base font-medium not-italic">
            <p className="flex items-center gap-3">
              <FaPhoneAlt aria-hidden="true" />
              <a
                href="tel:+447827268100"
                className="hover:underline"
                aria-label="Call ColdFix"
              >
                +44 7827 268100
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope aria-hidden="true" />
              <a
                href="mailto:info@coldfix.co.uk"
                className="hover:underline"
                aria-label="Email ColdFix"
              >
                info@coldfix.co.uk
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt aria-hidden="true" />
              76 Blakesware Gardens, London, UK{" "}
            </p>
            <p className="flex items-center gap-3">
              <FaClock aria-hidden="true" />
              Available 24/7 – Emergency Support Included
            </p>
          </address>

          <div className="mt-8 hidden lg:block rounded-xl overflow-hidden shadow-md relative w-full aspect-video">
            <Image
              src="/coldfix-technician.jpg"
              alt="COLD FIX Technician servicing a cooling unit"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.section>

        {/* RIGHT: Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          aria-labelledby="form-heading"
          className="bg-sky-50 p-8 rounded-2xl shadow-md"
        >
          <h2 id="form-heading" className="sr-only">
            Contact Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-sky-800 mb-1"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Sarah Morgan"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                aria-required="true"
                aria-describedby="name-desc"
              />
              <span id="name-desc" className="sr-only">
                Please enter your full name
              </span>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-sky-800 mb-1"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="e.g. sarah@example.com"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                aria-required="true"
                aria-describedby="email-desc"
              />
              <span id="email-desc" className="sr-only">
                Please enter a valid email address
              </span>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-sky-800 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+44..."
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                aria-describedby="phone-desc"
              />
              <span id="phone-desc" className="sr-only">
                Optional phone number
              </span>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-sky-800 mb-1"
              >
                How can we help? *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell us what you need help with..."
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                aria-required="true"
                aria-describedby="message-desc"
              />
              <span id="message-desc" className="sr-only">
                Please provide details of your request
              </span>
            </div>

            {statusMessage && (
              <div
                role="alert"
                className={`p-3 rounded-md mb-4 ${
                  statusMessage.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
                aria-live="assertive"
              >
                {statusMessage.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-800 transition disabled:opacity-50"
              aria-busy={loading}
            >
              {loading ? "Sending..." : "Send My Request"}
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
}
