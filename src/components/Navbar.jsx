import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-[#D7F3FF]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[#0081C6] font-bold text-xl">Marine Life</p>
        </Link>
        <div>
          <Link to="/about-us">Test</Link>
          <Link to="/about-us">Test</Link>
        </div>
        <Link to="/about-us">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
