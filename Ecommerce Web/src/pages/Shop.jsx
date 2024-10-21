import  { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component
import PropTypes from 'prop-types';

const Shop = ({ addToCart, addToWishlist, isAdmin }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API or database
    const fetchProducts = async () => {
      // Simulate fetching data
      const fetchedProducts = [
        { id: 1, image: 'https://via.placeholder.com/150', name: 'Product 1', price: 100 },
        { id: 2, image: 'https://via.placeholder.com/150', name: 'Product 2', price: 150 },
      ];
      setProducts(fetchedProducts);
    };
    
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          addToWishlist={addToWishlist} 
          isAdmin={isAdmin} 
        />
      ))}
    </div>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Shop;
