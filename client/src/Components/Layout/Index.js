import React from 'react';
import Header from '../Pages/HomePage/Header';
import Footer from '../Pages/HomePage/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
