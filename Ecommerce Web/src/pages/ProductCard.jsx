import PropTypes from 'prop-types';

const ProductCard = ({ product, addToCart, addToWishlist }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2 mr-2" 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
      <button 
        className="bg-green-500 text-white py-2 px-4 rounded mt-2" 
        onClick={() => addToWishlist(product)}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired,
};

export default ProductCard;
