'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/gallery1.jpeg', alt: 'Cold Room  Installation' },
  { src: '/gallery2.jpeg', alt: 'Cold Room ' },
  { src: '/gallery3.jpeg', alt: 'Cold Room Repair' },
  { src: '/gallery4.jpeg', alt: 'Freezer Fix' },
  { src: '/gallery5.jpeg', alt: 'Ac Installation' },
  { src: '/gallery6.jpeg', alt: 'Ac Installation' },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  return (
    <section className="bg-gradient-to-br from-white via-sky-50 to-blue-100 py-20" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-sky-800 drop-shadow-sm mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the quality and attention to detail in our recent appliance repairs and installations.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl cursor-pointer relative group"
              onClick={() => openModal(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto transform transition duration-300 group-hover:scale-105 rounded-xl"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4 transition-opacity animate-fade"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-400 text-4xl z-50"
            >
              <X />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 p-2 z-50"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 p-2 z-50"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image Container */}
            <div className="w-full max-h-[80vh] flex items-center justify-center mt-10">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1600}
                height={1200}
                className="w-auto h-auto max-w-full max-h-full rounded-xl shadow-lg"
              />
            </div>

            <p className="text-white mt-6 text-center text-lg">{images[currentIndex].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
