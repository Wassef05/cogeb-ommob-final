import React, { useState } from 'react';
import { image1, image2, image3, imageA3 } from '../img';
import { FaMapMarkedAlt, FaBuilding } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Importer le hook de traduction

const photos = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: imageA3 },
];

export default function Album() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { t } = useTranslation(); // Initialiser la traduction

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 px-4">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <FaMapMarkedAlt className="text-4xl sm:text-5xl mb-4 text-black" />
          <h3 className="text-xl font-semibold mb-2">{t('album.bestLocations')}</h3> {/* Texte traduit */}
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <FaBuilding className="text-4xl sm:text-5xl mb-4 text-black" />
          <h3 className="text-xl font-semibold mb-2">{t('album.modernArchitecture')}</h3> {/* Texte traduit */}
        </div>
      </div>

      <div className="max-w-9xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-56 object-cover cursor-pointer"
              src={photo.src}
              alt={t('album.imageAlt', { index: index + 1 })}  
              onClick={() => handleImageClick(index)}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8">
          <button
            className="absolute left-0 text-white text-4xl p-2 hover:text-gray-400"
            onClick={handlePrev}
          >
            &#8592;
          </button>

          <img
            className="max-w-full max-h-[80vh] object-contain"
            src={photos[selectedIndex].src}
            alt={t('album.imageAlt', { index: selectedIndex + 1 })}  
            loading="lazy"
          />

          <button
            className="absolute right-0 text-white text-4xl p-2 hover:text-gray-400"
            onClick={handleNext}
          >
            &#8594;
          </button>

          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
