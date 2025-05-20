import AboutPic from "../../public/Background.png"
import MountainImage from "../../public/Figure → Link.png"
import MenImage from "../../public/g2.jpg.svg"
import WareHouseImage from "../../public/g3.jpg.png"
import HandShakeImage from "../../public/g1.jpg.svg"
import Containers from '../../public/g4.jpg.png'

import Frame1 from "../../public/f1.svg fill.svg"
import Frame2 from "../../public/f2.svg.svg"
import Frame3 from "../../public/Frame.png"
import Frame4 from "../../public/Group.png"

import Background from "../../public/Background-1.png"
import F1 from "../../public/Frame 427320597.png"
import F2 from "../../public/Frame 427320598.png"

import P1 from "../../public/team3-150x150.jpg.png"
import P2 from "../../public/team5-150x150.jpg.png"
import P3 from "../../public/test1-150x150.jpg.png"

import Vector from '../../public/Vector.svg'

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
                Outback Exports is your one-stop global partner for sourcing and export solutions. Our mission is to
                connect businesses worldwide with the products they need, at the best possible prices, with a service
                that adapts to their exact requirements. Whether you need simple sourcing & shipping or comprehensive
                management from the factory floor to your customer's door, we are here to help.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.6fr_1.2fr_1.2fr] gap-4">
            {/* Left column */}
            <div className="flex flex-col">
              <div className="relative h-60 bg-red-500 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">Your Global Export Partner</h3>
                </div>
              </div>
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={HandShakeImage || "/placeholder.svg"}
                  alt="Global handshake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center column */}
            <div className="relative h-full bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={MenImage || "/placeholder.svg"}
                alt="Business men"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              <div className="relative h-full bg-gray-200 overflow-hidden">
                <img
                  src={WareHouseImage || "/placeholder.svg"}
                  alt="Warehouse interior"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={Containers || "/placeholder.svg"}
                    alt="Shipping containers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={MountainImage || "/placeholder.svg"}
                    alt="Mountain landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="mb-16">
          <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <div>
                <img src={Frame1 || "/placeholder.svg"} alt="" />
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-1 mt-2">Customer Focus</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                We prioritize your needs and tailor our solutions to your unique requirements.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div>
                <img src={Frame2 || "/placeholder.svg"} alt="" />
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-1 mt-2">Integrity & Transparency</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                We believe in open communication, honest pricing,and ethical business practices.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div>
                <img src={Frame3 || "/placeholder.svg"} alt="" />
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-1 mt-2">Global Expertise</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">We navigate complexities with ease.</p>
            </div>
            <div className="flex flex-col items-start">
              <div>
                <img src={Frame4 || "/placeholder.svg"} alt="" />
              </div>
              <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-1 mt-2">Commitment to Excellence</h3>
              <p className="text-gray-800 plus-jakarta-sans-400 text-sm">
                We strive for excellence in every aspect of our service, from sourcing to delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-md p-4 bg-gradient-to-b from-[#FFFFFF] via-[#E6DEDEA7] to-[#FFFFFF]">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={AboutPic || "/placeholder.svg"}
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
                  We have established relationships with trusted suppliers worldwide, giving you access to a wide range
                  of products at competitive prices.Custom Solutions
                </p>
              </div>

              <div>
                <h3 className="text-lg plus-jakarta-sans text-gray-900">Custom Solutions</h3>
                <p className="text-gray-600 text-sm">
                  We don't offer one-size-fits-all solutions. We tailor our services to your specific needs and budget
                </p>
              </div>

              <div>
                <h3 className="text-lg plus-jakarta-sans text-gray-900">Transparent Communication</h3>
                <p className="text-gray-600 text-sm">
                  You'll receive regular updates and clear information every step of the way.
                </p>
              </div>

              <div>
                <h3 className="text-lg plus-jakarta-sans text-gray-900">Commitment to Compliance</h3>
                <p className="text-gray-600 text-sm">
                  We adhere to all international trade regulations,ensuring smooth and hassle-free exports.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-16 bg-gradient-to-b from-[#FFFFFF] via-[#E6DEDEA7] to-[#FFFFFF] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-2xl mt-10 plus-jakarta-sans text-gray-900 mb-6">Why Choose Us?</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg plus-jakarta-sans text-gray-900 font-medium">Save Money</h3>
                  <p className="text-gray-800 text-sm plus-jakarta-sans-400">
                    We leverage our global network and negotiation skills to secure the best prices, reducing your
                    overall costs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg plus-jakarta-sans text-gray-900 font-medium">Flexible Service</h3>
                  <p className="text-gray-800 text-sm plus-jakarta-sans-400">
                    From sourcing to shipping and customs, we offer the services you need.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg plus-jakarta-sans text-gray-900 font-medium">Full Transparency</h3>
                  <p className="text-gray-800 text-sm plus-jakarta-sans-400">
                    Real-time updates, documents, and ETA updates throughout every step of the way.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg plus-jakarta-sans text-gray-900 font-medium">End-to-End Expertise</h3>
                  <p className="text-gray-800 text-sm plus-jakarta-sans-400">
                    We ensure compliance and efficient solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full">
              <img src={Background || "/placeholder.svg"} alt="Luxury vehicle" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="my-16 bg-gradient-to-b from-[#FFFFFF] via-[#E6DEDEA7] to-[#FFFFFF] py-8 px-4 rounded-lg">
          <div className="lg:p-8 p-2">
            {/* Mission and Vision section - exactly as in the image */}
            <div className="grid grid-cols-1 gap-6">
              {/* Mission with image on right */}
              <div className="rounded-lg overflow-hidden  flex flex-col lg:flex-row">
                <div className="flex-1 flex">
                  <div className="p-1 h-full bg-gradient-to-b from-[#FF3F25] to-[#FEF9F9]"></div>
                  <div className="p-6 flex-1">
                    <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-3">Our Mission</h2>
                    <p className="text-gray-600 text-sm">
                      To simplify global trade by providing reliable, cost-effective, and transparent export solutions that empower businesses to thrive in international markets.
                    </p>
                  </div>
                </div>
                <div className="relative w-full lg:w-2/5 h-50 lg:h-auto">
                  <img src={F1 || "/placeholder.svg"} alt="Office meeting" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Vision with image on left */}
              <div className=" rounded-lg overflow-hidden  flex flex-col-reverse lg:flex-row">
                <div className="relative w-full lg:w-2/5 h-50 lg:mt-0 mt-3 lg:h-auto">
                  <img src={F2 || "/placeholder.svg"} alt="Team members" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1  flex lg:ml-8 ml-0">
                  <div className="p-1 h-full bg-gradient-to-t from-[#FF3F25] to-[#FEF9F9]"></div>
                  <div className="p-6 flex-1">
                    <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-3">Our Vision</h2>
                    <p className="text-gray-600 text-sm">
                      To be the leading global export partner, recognized for our commitment to partner success, innovation, and ethical business practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-wrap space-x-4 md:space-x-26 my-6">
              <a href="#" className="text-blue-600 underline text-sm my-2">
                See About Services
              </a>
              <a href="#" className="text-blue-600 underline text-sm my-2">
                View our Products
              </a>
              <a href="#" className="text-blue-600 underline text-sm my-2">
                Contact Us for Free Consultation
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default AboutUs