import facebook from '../images/facebook_icon.png';
import twitter from '../images/twitter_icon.png';
import linkedin from '../images/linkedin_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-yellow-500 text-black font-medium py-16 px-6 lg:px-[8vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20">
        <div className="flex flex-col">
          <h2 className="text-3xl italic font-bold mb-2">Furniro</h2>
          <p className="italic text-base">
            Furniro offers an exquisite range of home décor and furniture collections to transform your living space. 
            Elevate your home with elegance and comfort.
          </p>
        </div>

        
{/* Company Links */}
<div className="flex flex-col">
  <h2 className="text-3xl font-semibold mb-2">Links</h2>
  <ul className="space-y-2">
    <li className="cursor-pointer hover:underline">
      <Link to="/" className="hover:underline">Home</Link>
    </li>
    <li className="cursor-pointer hover:underline">
      <Link to="/shop" className="hover:underline">Shop</Link>
    </li>
    <li className="cursor-pointer hover:underline">
      <Link to="/about" className="hover:underline">About</Link>
    </li>
    <li className="cursor-pointer hover:underline">
      <Link to="/contact" className="hover:underline">Contact</Link>
    </li>
  </ul>
</div>


        {/* Contact Information */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
          <ul className="space-y-1 font-medium">
            <li>Phone: <br /> (123) 456-7890</li>
            <li>Email: <br /> support@furniro.com</li>
            <li>Address: <br /> 123 Furniture St, City, Country</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-2">Connect with Us</h2>
          <div className="flex space-x-4 mt-4">
            <img src={facebook} alt="Facebook" className="w-10 cursor-pointer hover:opacity-80" />
            <img src={twitter} alt="Twitter" className="w-10 cursor-pointer hover:opacity-80" />
            <img src={linkedin} alt="LinkedIn" className="w-10 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      
      <hr className="my-5  border-gray-700" />
      <p className="text-center text-gray-700">
        Copyright 2024 © Furniro. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;