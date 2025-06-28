import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-10 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-sky-700 mb-2">COLD FIX</h3>
          <p className="text-sm max-w-xs mx-auto md:mx-0">
            Your trusted partner for cooling solutions, refrigeration, and AC services.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-8 text-2xl text-gray-400 transition-colors duration-300">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4405F]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2]"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} COLD FIX. All rights reserved.
      </div>
    </footer>
  );
}
