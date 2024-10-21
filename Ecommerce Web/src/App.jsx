// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import { auth } from './firebaseConfig'; // Import the auth object
import { useAuthState } from 'react-firebase-hooks/auth'; // Import the hook

function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user] = useAuthState(auth); // Get the user state using the hook

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromWishlist = (itemToRemove) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemToRemove.id));
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <Router>
      <Navbar user={user} isAdmin={isAdmin} />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/shop" 
            element={<Shop addToCart={addToCart} addToWishlist={addToWishlist} isAdmin={isAdmin} />} 
          />
          <Route 
            path="/wishlist" 
            element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
          <Route path="/user-profile" element={<UserProfile user={user} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
