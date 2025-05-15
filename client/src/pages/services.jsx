import React from "react";
import ServicePicture from '../../public/dashboard-images/Frame 427320605.svg'
import Frame1 from '../../public/Frame (1).svg'
import Frame2 from '../../public/Group.svg'
import Frame3 from '../../public/Group (1).svg'
import Frame4 from '../../public/f4.svg fill.svg'
import Frame5 from '../../public/f1.svg fill.svg'
import Frame6 from '../../public/f2.svg.svg'
import Frame7 from '../../public/f3.svg.svg'

function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm text-gray-500  tracking-wider"> <span className="text-blue-600">Home</span> / Inventory</p>
        <h1 className="text-2xl plus-jakarta-sans text-gray-900 mt-2">Services</h1>
      </div>

      <div className="mb-16">
        <div className="flex flex-col gap-3">
          <div className="flex items-center md:flex-row flex-col">
            <h2 className="text-2xl md:w-3/2 sm:text-3xl plus-jakarta-sans text-gray-900 mb-4">
            Tailored Solutions — Your Custom Export Solution
            </h2>
            <p className="text-gray-600 mb-4 plus-jakarta-sans-400">
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
        <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">Why Choose Us?</h2>

        {/* First row of 4 items */}
        <div className="grid grid-cols-1 plus-jakarta-sans-400 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img src={Frame1} alt="" />
            </div>
            <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Sourcing & Procurement</h3>
            <p className="text-sm text-gray-680  plus-jakarta-sans-400">
            Multiple suppliers compared, best price guaranteed—so you save money every time.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img src={Frame2} alt="" />
            </div>
            <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Custom Shipping</h3>
            <p className="text-sm text-gray-800 plus-jakarta-sans-400">
            Port-to-port or door-to-door, full or less-than-container, sea, air, or land.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img src={Frame3} alt="" />
            </div>
            <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Custom Handling</h3>
            <p className="text-sm text-gray-800 plus-jakarta-sans-400">
            Export clearance, documents, legal compliance anywhere—plus import clearance on request.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img src={Frame4} alt="" />
            </div>
            <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Insurance</h3>
            <p className="text-sm text-gray-800 plus-jakarta-sans-400">
            Optional cargo insurance for full peace of mind; certificate included with every insured shipment.
            </p>
          </div>
        </div>

        {/* Second row of 3 items - centered */}
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl lg:mt-10 mt-0">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Frame5} alt="" />
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Custom Contracts & Invoicing</h3>
              <p className="text-sm text-gray-800 plus-jakarta-sans-400">
              Every deal formalized with a bespoke contract and proforma invoice to protect both parties.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Frame6} alt="" />
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Real-Time Tracking</h3>
              <p className="text-sm text-gray-800 plus-jakarta-sans-400">
              Receive photo updates, document scans, and live ETAs via WhatsApp, email, or portal.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Frame7} alt="" />
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-2">Flexible Payment</h3>
              <p className="text-sm text-gray-800 plus-jakarta-sans-400">
              Escrow, LC, T/T—pick what's safest for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-10 mt-20">How it Works</h2>

      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-8 md:gap-y-16">
          {/* Step 1 */}
          <div className="flex md:-mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">1.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Inquiry</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                Tell us what you want, how, and where.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex md:mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">2.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Custom Sourcing & Quote</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                Multiple suppliers compared, lowest price negotiated, detailed quote sent.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex md:-mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">3.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Custom Contract & Invoice</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                We issue a custom contract and proforma invoice covering every term, from product to payment, shipping, and insurance.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex md:mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">4.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Secure Payment</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                Use escrow, LC, or bank transfer—your funds are protected.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex md:-mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">5.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Quality Check, Photos, & Insurance</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                We inspect, photograph, and (if requested) insure every shipment.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex md:mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">6.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Shipping & Customs</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                We handle all freight and export paperwork (and import customs if you want)              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex md:-mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">7.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Live Tracking</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                Get photos, scanned documents, and real-time ETA updates via WhatsApp, email, or the portal.              </p>
            </div>
          </div>

          {/* Step 8 */}
          <div className="flex md:mt-6">
            <div className="mr-4">
              <span className="md:text-[86px] text-5xl font-bold text-blue-500 block">8.</span>
            </div>
            <div className="mt-3">
              <h3 className="text-xl plus-jakarta-sans mb-1">Delivery & Support</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                Ongoing help until you confirm safe arrival              </p>
            </div>
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