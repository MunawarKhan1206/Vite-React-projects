const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Luxury Sofa',
      price: '$799',
      image: '/src/images/sofa.jpg',
    },
    {
      id: 2,
      name: 'Wooden Dining Table',
      price: '$999',
      image: '/src/images/dinning.jpg',
    },
    {
      id: 3,
      name: 'Comfortable Chair',
      price: '$399',
      image: '/src/images/chair.jpg',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/src/images/home1.jpeg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Semi-transparent overlay */}
        <div className="absolute top-1/4 right-12 bg-transparent p-4 rounded-md z-1">
          <h2 className="text-xl italic font-semibold text-white">Exciting Deals</h2>
          <h1 className="text-xl font-semibold italic text-yellow-400">Unveil the Latest Trends in Home Décor</h1>
          <p className="text-base italic text-white">
            Elevate your living spaces with our exclusive new collection designed to bring style and comfort <br /> to every corner of your home.
          </p>
          <button onClick={() => window.location.href = '/shop'} className="mt-6 font-bold px-6 py-2 bg-yellow-500 text-white rounded-md">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="mt-12 py-12 bg-white">
        <h2 className="text-2xl font-bold text-center">Our Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 container mx-auto px-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Explore More Products Section */}
      <section className="mt-16 py-12 bg-gray-100 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold">Explore More Products</h3>
          <p className="text-gray-600 mt-4">
            Browse our full collection and discover the perfect pieces for your home.
          </p>
          <button onClick={() => window.location.href = '/shop'} className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            See All Products
          </button>
        </div>
      </section>
      <section className="mt-16 py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Create Your Dream Spaces</h2>
          <p className="mt-4 text-gray-600">
            From modern minimalism to classic elegance, explore our stunning room ideas and find inspiration for your next interior project.
          </p>
          <a href="/shop" className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-md inline-block">Explore More</a>
        </div>
      </section>
    </>
  );
};

export default Home;