'use client';

import Image from 'next/image';

const brandLogos = [
  { src: '/logos/lg.png', alt: 'LG Logo' },
  { src: '/logos/samsung.png', alt: 'Samsung Logo' },
  { src: '/logos/daikin.png', alt: 'Daikin Logo' },
  { src: '/logos/bosch.png', alt: 'Bosch Logo' },
  { src: '/logos/whirlpool.svg', alt: 'Whirlpool Logo' },
  { src: '/logos/panasonic.png', alt: 'Panasonic Logo' },
  { src: '/logos/Fujitsu-Logo.png', alt: 'Fujitsu Logo' },
  { src: '/logos/Hitachi-Logo.png', alt: 'Hitachi Logo' }
];

export default function BrandLogoSlider() {
  const duplicated = [...brandLogos, ...brandLogos];

  return (
    <section className="bg-white py-12 overflow-hidden" aria-label="Trusted Brands">
      <div className="max-w-6xl mx-auto px-6 text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Proudly Working With Industry-Leading Brands
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Our technicians have hands-on experience servicing products from the world's top manufacturers.
        </p>
      </div>

      <div className="relative w-full">
        <div
          className="animate-slide flex space-x-10 items-center w-max"
          role="group"
          aria-label="Brand logos carousel"
        >
          {duplicated.map((logo, index) => (
            <div key={index} className="w-36">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={100}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
