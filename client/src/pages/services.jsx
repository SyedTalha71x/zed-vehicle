import React from "react";
import ServicePicture from '../../public/Frame 427320605.svg'

function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm text-gray-500  tracking-wider"> <span className="text-blue-600">Home</span> / Inventory</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Services</h1>
      </div>

      <div className="mb-16">
        <div className="flex flex-col gap-3">
          <div className="flex items-center md:flex-row flex-col">
            <h2 className="text-2xl md:w-3/2 sm:text-3xl font-bold text-gray-900 mb-4">
              We Do What You Want — Your Custom Export Solution
            </h2>
            <p className="text-gray-600 mb-4">
              Outback Exports provides flexible and comprehensive services to meet your specific export needs. Whether
              you require sourcing only, shipping only, or full logistics management, we tailor our solutions to your
              requirements. We can also source from multiple suppliers to ensure you receive exactly what you need.
            </p>
          </div>

          <div className="mt-10">
            <div className="rounded-xl overflow-hidden">
              <img
                src={ServicePicture}
                alt="Warehouse with shelves of products"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7</h3>
            <p className="text-sm text-gray-600">
              We offer support around the clock. Our team is available 24/7 to handle any issues that may arise.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Shipping</h3>
            <p className="text-sm text-gray-600">
              Choose your preferred air, ocean, or door-to-door transport. We offer flexible shipping options to meet
              your needs.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Handling</h3>
            <p className="text-sm text-gray-600">
              Special services, documentation, legal requirements - our expert team handles all aspects of your
              shipment.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance</h3>
            <p className="text-sm text-gray-600">
              Optional cargo insurance for peace of mind. Our flexible coverage ensures your shipment is protected.
            </p>
          </div>

   
          <div className="flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Clearance & Handling</h3>
            <p className="text-sm text-gray-600">
              Our team handles all customs clearance & documentation to ensure a smooth export process.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-sm text-gray-600">
              Monitor your shipments 24/7 with our advanced tracking system. Stay informed at every stage of your
              shipment.
            </p>
          </div>
          </div>  
        </div>

        <p className="text-xs text-gray-500 mt-8">
          NOTE: We pride ourselves on being able to pay our suppliers promptly as we have negotiated the best terms with
          carriers.
        </p>
      </div>
  );
}

export default ServicesPage;