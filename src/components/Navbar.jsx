import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
    </nav>
  );
};

export default Navbar;
