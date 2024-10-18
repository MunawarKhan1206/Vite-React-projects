import { useState } from 'react';

// Sample product data
const initialProducts = [
  { id: 1, name: 'Luxury Sofa', price: 799, image: '/images/sofa.jpg' },
  { id: 2, name: 'Wooden Dining Table', price: 999, image: '/images/dining_table.jpg' },
  { id: 3, name: 'Comfortable Chair', price: 399, image: '/images/chair.jpg' },
  { id: 4, name: 'Modern Coffee Table', price: 199, image: '/images/coffee_table.jpg' },
  { id: 5, name: 'Elegant Lamp', price: 99, image: '/images/lamp.jpg' },
  { id: 6, name: 'Outdoor Patio Set', price: 699, image: '/images/patio_set.jpg' },
  { id: 7, name: 'Office Desk', price: 499, image: '/images/desk.jpg' },
  { id: 8, name: 'Bookshelf', price: 249, image: '/images/bookshelf.jpg' },
  { id: 9, name: 'Recliner Chair', price: 549, image: '/images/recliner.jpg' },
  { id: 10, name: 'Bedroom Wardrobe', price: 899, image: '/images/wardrobe.jpg' },
  { id: 11, name: 'Dining Chair', price: 149, image: '/images/dining_chair.jpg' },
  { id: 12, name: 'Accent Table', price: 349, image: '/images/accent_table.jpg' },
  { id: 13, name: 'TV Stand', price: 199, image: '/images/tv_stand.jpg' },
  { id: 14, name: 'Floor Rug', price: 129, image: '/images/rug.jpg' },
  { id: 15, name: 'Leather Sofa', price: 999, image: '/images/leather_sofa.jpg' },
  { id: 16, name: 'Ottoman', price: 179, image: '/images/ottoman.jpg' },
  { id: 17, name: 'Bar Stool', price: 79, image: '/images/bar_stool.jpg' },
  { id: 18, name: 'Side Table', price: 139, image: '/images/side_table.jpg' },
  { id: 19, name: 'Mirror', price: 59, image: '/images/mirror.jpg' },
  { id: 20, name: 'Hanging Light', price: 199, image: '/images/hanging_light.jpg' }
];

const Shop = () => {
  // State to hold cart items
  const [cart, setCart] = useState([]);
  const [sortOption, setSortOption] = useState('name');

  // Function to handle adding products to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to sort products by price or name
  const sortProducts = (products, option) => {
    return products.sort((a, b) => {
      if (option === 'price') {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  };

  return (
    <div className="container mx-auto py-12">
      {/* Sort and Filter Options */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortProducts(initialProducts, sortOption).map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
