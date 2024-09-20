const images = [
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 1',
    description: 'This is the First image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 2',
    description: 'This is the Second image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 3',
    description: 'This is the Third image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 4',
    description: 'This is the Fourth image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 5',
    description: 'This is the Fifth image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 6',
    description: 'This is the Sixth image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 7',
    description: 'This is the Seventh image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 8',
    description: 'This is the Eighth image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 9',
    description: 'This is the Ninth image.',
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Image 10',
    description: 'This is the Tenth image.',
  }
];

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mt-3 font-bold italic text-center mb-1">Image Gallery</h1>
      <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-3" />
      <div className="flex flex-wrap -mx-1">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="relative border  rounded-2xl overflow-hidden group">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />              
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-lg font-extrabold mb-2">{image.title}</h2>
                <p className="text-white italic text-lg">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
