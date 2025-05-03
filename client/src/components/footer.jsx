import React from "react";
import Footerlogo from '../../public/navbar-logo.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10  py-8 px-4 md:px-8 w-full shadow-xs">
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
              <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
              <a href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                Home
              </a>
              <a href="/about-us" className="text-gray-600 hover:text-gray-900 text-sm">
                About Us
              </a>
              <a href="/faq-blog" className="text-gray-600 hover:text-gray-900 text-sm">
                FAQ & Blog
              </a>
              <a href="/contact-us" className="text-gray-600 hover:text-gray-900 text-sm">
                Contact Us
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-800 mb-2">Customer Support</h3>
              <a href="/products" className="text-gray-600 hover:text-gray-900 text-sm">
                Products Categories
              </a>
              <a href="/shipping" className="text-gray-600 hover:text-gray-900 text-sm">
                Shipping
              </a>
              <a href="/how-it-works" className="text-gray-600 hover:text-gray-900 text-sm">
                How it Works
              </a>
              <a href="/track-order" className="text-gray-600 hover:text-gray-900 text-sm">
                Track Order
              </a>
              <Link to="/compliance" className="text-gray-600 hover:text-gray-900 text-sm">
                Complaints & Insurance
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">123-123-123</p>
              <p className="text-gray-600 text-sm">support@outbackexports.com</p>
              <p className="text-gray-600 text-sm">8 Brisbane St, Sydney City</p>
              <p className="text-gray-600 text-sm">business@outback</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;