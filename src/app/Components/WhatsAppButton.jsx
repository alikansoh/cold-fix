import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+447827268100" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50 
        bg-green-600 hover:bg-green-700 
        text-white rounded-full 
        shadow-lg flex items-center justify-center
        p-3 sm:p-4
        w-12 h-12 sm:w-14 sm:h-14
      "
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
    </a>
  );
}
