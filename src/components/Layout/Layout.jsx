import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="container mt-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 