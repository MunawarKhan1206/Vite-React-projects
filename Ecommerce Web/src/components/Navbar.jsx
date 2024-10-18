
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Navbar = () => {
  
  const navigate = useNavigate(); 

 

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black shadow-md">
      {/* Logo */}
      <div className="text-2xl font-semibold italic flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9OlYBi3lLgao-ot~ap5Z326joLdbNPpUqsa5OBcqq1Eo~h0p2fLdjKg1crCasBe6cDXz3yIV9x7XHEumKaVl7SAid~svqDAO7Vwj96~i~2tdPTjEwKK0Gkj8a7lwoKsqfcxMJmXxOnV9UgMj3ZoBt6CyoaDiPbdiqRdEIalqlf5jvS66MLu0tyTaBDLFI6B7v57Xl134~TfVDudQlRapgehPCB9U-m4hkfV7HH8pfOI-CESgLAVJ8yCCxzj25qaf~N245WwDdqczT4H~xkIzCStDwt2UpVHH7RUhJVEuaLB1Eh3TcXRrxpYOed67CnqioxmZpiCT01~NtruOe2EmQ__" // Replace with your logo's path or SVG
          alt="Logo"
          className="w-8 object-cover h-8 mr-2"
        />
        <span className="text-yellow-500">Furniro</span>
      </div>

      <div className="space-x-8 flex font-semibold text-lg">
        <Link to="/" className="text-white ">Home</Link>
        <Link to="/shop" className="text-white ">Shop</Link>
        <Link to="/about" className="text-white ">About</Link>
        <Link to="/contact" className="text-white ">Contact</Link>
      </div>

      <div className="flex space-x-6  text-xl">
        

        <UserOutlined
          className="text-white 
          "
          onClick={() => navigate('/login')} 
        />

        <HeartOutlined
          className="text-white 
          "
          onClick={() => navigate('/wishlist')} 
        />

        <ShoppingCartOutlined
          className="text-white 
          "
          onClick={() => navigate('/cart')} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
