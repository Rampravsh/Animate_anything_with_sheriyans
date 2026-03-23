import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
};

export default Navbar;
