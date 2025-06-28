'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/gallery1.jpeg', alt: 'Air Conditioner Installation' },
  { src: '/gallery2.jpeg', alt: 'AC Repair' },
  { src: '/gallery3.jpeg', alt: 'Fridge Maintenance' },
  { src: '/gallery4.jpeg', alt: 'Freezer Fix' },
  { src: '/gallery5.jpeg', alt: 'Washing Machine Repair' },
  { src: '/gallery6.jpeg', alt: 'Dryer Service' },
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-sky-50 to-blue-100" id="gallery">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-sky-800 mb-4 drop-shadow-sm">
          Explore Our Work
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto text-lg">
          Real results from our skilled technicians. Precision. Cleanliness. Quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelected(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition group-hover:brightness-75"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-sm sm:text-base px-4 py-3 opacity-0 group-hover:opacity-100 transition duration-300">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-400"
            >
              &times;
            </button>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1200}
              height={800}
              className="rounded-xl object-contain max-h-[80vh] w-full"
            />
            <p className="text-white mt-4 text-center text-lg">{selected.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
