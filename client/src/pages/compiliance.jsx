import React from 'react';

const CompliancePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="mb-8 mt-10">
        <div className="mb-1">
          <span className="text-sm text-gray-500">/ Compliance & Insurance</span>
        </div>
        <h1 className="text-2xl plus-jakarta-sans text-gray-900">Compliance & Insurance</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <section>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-4">
                Expert Compliance and Comprehensive Insurance for Worry-Free Exporting
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-base text-gray-700 plus-jakarta-sans-400">
                We navigate the complexities of international trade regulations, ensuring your 
                shipment adheres to all necessary standards and legal requirements. Protect your 
                interests with our comprehensive insurance and support.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-4">
          <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-4">Compliance</h3>
          <ul className="space-y-3 plus-jakarta-sans-400">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Adherence to ICC, IMO, and IATA Standards: We guarantee that all exports meet international standards.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Legal Documentation: We provide all necessary legal documentation to customs clearance in every country.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Compliance Experts: Our team of compliance experts will guide you through every step of the exporting process.</span>
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-4">Insurance</h3>
          <ul className="space-y-3 plus-jakarta-sans-400">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Comprehensive Coverage: Optional cargo insurance protects against theft, damage, and loss during transit.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Official Certificates: Insurance certificates are provided upon request from our insurance partners.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Claims Assistance: Our team will assist with any insurance claims to ensure prompt and fair resolution.</span>
            </li>
          </ul>
        </section>

        <section className="pt-4">
          <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-4">Additional Points</h3>
          <ul className="space-y-3 plus-jakarta-sans-400">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>API endpoints accessible by CURL/HTTP standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Licensing and certification provided upon request</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>24/7 support available for urgent matters in any country</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span><a href="#" className="text-blue-600 hover:underline plus-jakarta-sans-400">Questions? Contact compliance »</a></span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CompliancePage;