import React from 'react';
import { Navbar } from './components/Navbar'; // Import your Navbar component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Render the navbar */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
