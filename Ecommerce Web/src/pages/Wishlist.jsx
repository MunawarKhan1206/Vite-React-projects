
import PropTypes from 'prop-types';

function Wishlist({ wishlistItems, removeFromWishlist }) {
  return (
    <div>
      <h1>Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={() => removeFromWishlist(item)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

Wishlist.propTypes = {
  wishlistItems: PropTypes.array.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
};

export default Wishlist;
