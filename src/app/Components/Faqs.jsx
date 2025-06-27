'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We operate across London and surrounding areas, offering residential and commercial services.',
  },
  {
    question: 'Do you provide emergency services?',
    answer: 'Yes, we offer 24/7 emergency repair services for both AC units and refrigeration systems.',
  },
  {
    question: 'How often should I service my AC unit or refrigeration system?',
    answer:
      'We recommend servicing at least once a year to ensure peak performance, energy efficiency, and to catch potential issues early.',
  },
  {
    question: 'How do I request a quote?',
    answer: 'You can easily request a quote via our Contact page or by calling us directly.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-sky-50 py-20 px-6 sm:px-10 lg:px-32 text-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">
          Got questions? We've got the answers. Here's what most customers ask us.
        </p>
        <div className="flex justify-center gap-1 mt-4 text-sky-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
            ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto divide-y divide-gray-300 bg-white rounded-xl shadow">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 cursor-pointer transition hover:bg-sky-50"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-sky-600 text-2xl">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-700 transition duration-300 ease-in-out">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
