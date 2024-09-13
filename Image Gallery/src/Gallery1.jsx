// import React from 'react';

const images = [
  { src: 'https://via.placeholder.com/300', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 4' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 5' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 6' },
];

const Gallery = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
