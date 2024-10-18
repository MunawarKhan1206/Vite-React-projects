// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';   
import Footer from './components/Footer';  
import Home from './pages/Home';            
import Shop from './pages/Shop'; 
import About from './pages/About';          
import Contact from './pages/Contact';

import Login from './components/Login';
// import Shop from './components/Shop';
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';


function App() {
  return (
    <Router>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />            
        <Route path="/shop" element={<Shop />} />        
        <Route path="/about" element={<About />} />      
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;