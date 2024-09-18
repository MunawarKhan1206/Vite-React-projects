// import React from 'react';

const images = [
  { src: 'https://via.placeholder.com/300', alt: 'Image 1', description: 'This is Image 1' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 2', description: 'This is Image 2' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 3', description: 'This is Image 3' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 4', description: 'This is Image 4' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 5', description: 'This is Image 5' },
  { src: 'https://via.placeholder.com/300', alt: 'Image 6', description: 'This is Image 6' },
];

const Gallery = () => {
  return (
    <div className="container mx-auto my-10">
      {/* Centered Heading Section */}
      <h1 className="text-4xl font-bold text-center mb-4">Image Gallery</h1>
      <hr className="my-6 border-gray-300" />

      {/* Image Grid with hover description */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110" 
            />
            {/* Hover Description */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">{image.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
