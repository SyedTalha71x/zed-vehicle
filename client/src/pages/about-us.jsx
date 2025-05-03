import React from 'react';
import AboutPic from '../../public/Background.png'
import Image1 from '../../public/Figure → Link.png'
import Image2 from '../../public/g2.jpg.png'
import Image3 from '../../public/g3.jpg.png'
import Image4 from '../../public/Link (1).png'

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">About Us</span>
          </div>
          <h1 className="text-3xl plus-jakarta-sans text-gray-900">About Us</h1>
        </div>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="md:w-1/2">
              <h2 className="text-3xl plus-jakarta-sans text-gray-900 mb-4">
                About Outback Exports - Your Global Export Partner
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-base text-gray-700 plus-jakarta-sans-400">
                Outback Exports is your one-stop global partner for sourcing and export solutions. Our mission is to connect businesses worldwide with the products they need, at the best possible prices, with a service that adapts to their exact requirements. Whether you need simple sourcing & shipping or comprehensive management from the factory floor to your customer's door, we are here to help.
              </p>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-5 gap-4">
            <div className="col-span-2">
              <div className="relative h-full bg-red-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">Your Global Export Partner</h3>
                </div>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-2 grid-rows-2 gap-4">
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={Image1} 
                  alt="Business handshake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={Image2} 
                  alt="Warehouse interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={Image3}
                  alt="Shipping containers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={Image4}
                  alt="Global shipping" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                We listen to your needs and preferences, ensuring our solutions align with your business goals.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Integrity & Transparency</h3>
              <p className="text-gray-600 text-sm">
                No hidden costs or surprise fees. We provide clear communication and uphold the highest standards of business practices.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Global Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our in-depth connections and market knowledge enable us to source products efficiently.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Commitment to Excellence</h3>
              <p className="text-gray-600 text-sm">
                We continually improve our services and operations to deliver the highest quality solutions to our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={AboutPic}
              alt="Orange shipping containers" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-6">What Makes Us Different?</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg plus-jakarta-sans text-gray-900">Global Network</h3>
                <p className="text-gray-600 text-sm">
                  We have established relationships with suppliers across the globe, giving you access to a wider range of products at competitive prices.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg plus-jakarta-sans text-gray-900">Custom Solutions</h3>
                <p className="text-gray-600 text-sm">
                  We don't offer one-size-fits-all solutions. Instead, we tailor our services to your specific needs and budget.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg plus-jakarta-sans text-gray-900">Transparent Communication</h3>
                <p className="text-gray-600 text-sm">
                  You'll receive regular updates throughout the entire process, ensuring you're never left in the dark.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg plus-jakarta-sans text-gray-900">Commitment to Compliance</h3>
                <p className="text-gray-600 text-sm">
                  We adhere to all international trade regulations, ensuring smooth and hassle-free exports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;