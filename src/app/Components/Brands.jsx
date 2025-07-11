'use client';

import Image from 'next/image';

const brandLogos = [
  { src: '/logos/lg.png', alt: 'LG' },
  { src: '/logos/samsung.png', alt: 'Samsung' },
  { src: '/logos/daikin.png', alt: 'Daikin' },
  { src: '/logos/bosch.png', alt: 'Bosch' },
  { src: '/logos/whirlpool.svg', alt: 'Whirlpool' },
  { src: '/logos/panasonic.png', alt: 'Panasonic' },
  {src:'/logos/Fujitsu-Logo.png',alt: 'Fujitsu'},
  {src:'/logos/Hitachi-Logo.png',alt: 'Hitachi'}

];

export default function BrandLogoSlider() {
  const duplicated = [...brandLogos, ...brandLogos];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Proudly Working With Industry-Leading Brands
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          Our technicians have hands-on experience servicing products from the world's top manufacturers.
        </p>
      </div>

      <div className="relative w-full">
        <div className="animate-slide flex space-x-10 items-center w-max">
          {duplicated.map((logo, index) => (
            <div key={index} className="w-36">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={100}
                className="w-full h-auto object-contain"
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
