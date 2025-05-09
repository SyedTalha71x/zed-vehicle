import React, { useEffect } from "react";
import Footerlogo from '../../public/navbar-logo.svg'
import { Link, useLocation } from "react-router-dom";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const Footer = () => {
  return (
    <>
      {/* Add ScrollToTop component here */}
      <ScrollToTop />
      
      <footer className="bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] mt-10 py-8 px-4 md:px-8 w-full shadow-xs">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="w-full md:w-1/4 flex flex-col items-start">
              <div className="relative h-16 w-40">
                <img
                  src={Footerlogo}
                  alt="Outback Exports Logo"
                  className="object-left h-full w-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-3/4">
              <div className="flex flex-col gap-2">
                <h3 className="plus-jakarta-sans text-gray-800 mb-2">Company</h3>
                <Link to="/" className="text-gray-800 hover:text-gray-900 text-sm">
                  Home
                </Link>
                <Link to="/blog" className="text-gray-800 hover:text-gray-900 text-sm">
                  Blogs
                </Link>
                <Link to="/about-us" className="text-gray-800 hover:text-gray-900 text-sm">
                  About Us
                </Link>
                <Link to="/faqs" className="text-gray-800 hover:text-gray-900 text-sm">
                  FAQS
                </Link>
                <Link to="/contact-us" className="text-gray-800 hover:text-gray-900 text-sm">
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="plus-jakarta-sans text-gray-800 mb-2">Customer Support</h3>
                <Link to="/products" className="text-gray-800 hover:text-gray-900 text-sm">
                  Products & Categories
                </Link>
                <Link to="/services" className="text-gray-800 hover:text-gray-900 text-sm">
                  Services
                </Link>
                <Link to="/" className="text-gray-800 hover:text-gray-900 text-sm">
                  How it Works
                </Link>
                <Link to="/track-order" className="text-gray-800 hover:text-gray-900 text-sm">
                  Track Order
                </Link>
                <Link to="/compliance" className="text-gray-800 hover:text-gray-900 text-sm">
                  Compliance & Insurance
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="plus-jakarta-sans text-gray-800 mb-2">Contact Us</h3>
                <p className="text-gray-800 text-sm">(62) 1211 1121</p>
                <p className="text-gray-800 text-sm">customer@wheeliant.com</p>
                <p className="text-gray-800 text-sm">Jl. Bintangan 20, Malingga City Northern Province</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;