import React from 'react';
import Footer from '../Pages/HomePage/Footer';
import UserHeader from '../Pages/UserHomePage//UserHeader';

const HomePageLayout = ({ children }) => {
  return (
    <>
      <UserHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomePageLayout;
