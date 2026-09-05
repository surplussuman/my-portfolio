import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SubscribePopup from './SubscribePopup';

const PortfolioLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <Navbar />
      <main className="pt-14">{children}</main>
      <Footer />
      <SubscribePopup />
    </div>
  );
};

export default PortfolioLayout;
