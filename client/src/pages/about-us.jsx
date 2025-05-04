import AboutPic from "../../public/Background.png"
import Image1 from "../../public/Figure → Link.png"
import Image2 from "../../public/g2.jpg.png"
import Image3 from "../../public/g3.jpg.png"
import Image4 from "../../public/Link (1).png"

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
                  src={Image1 || "/placeholder.svg"}
                  alt="Business handshake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={Image2 || "/placeholder.svg"}
                  alt="Warehouse interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={Image3 || "/placeholder.svg"}
                  alt="Shipping containers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <img src={Image4 || "/placeholder.svg"} alt="Global shipping" className="w-full h-full object-cover" />
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

        <div className="my-16 bg-gradient-to-b from-[#FFFFFF] via-[#E6DEDEA7] to-[#FFFFFF]">
        <div className="p-16">

        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg overflow-hidden flex shadow-sm">
              <div className="flex-1 flex">
                <div className="border-l-4 border-red-500 h-full"></div>
                <div className="p-6 flex-1">
                  <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-3">Our Mission</h2>
                  <p className="text-gray-600 text-sm">
                    To create global trading networks, cost-effective and innovative export solutions that empower
                    businesses to thrive in international markets.
                  </p>
                </div>
              </div>
              <div className="relative w-2/5 hidden lg:block">
                <img src={F1 || "/placeholder.svg"} alt="Office meeting" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden flex shadow-sm">
              <div className="relative w-2/5 hidden lg:block">
                <img src={F2 || "/placeholder.svg"} alt="Team members" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex">
                <div className="border-l-4 border-red-500 h-full"></div>
                <div className="p-6 flex-1">
                  <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-3">Our Vision</h2>
                  <p className="text-gray-600 text-sm">
                    To be the leading global export partner recognized for our commitment to partner success,
                    innovation, and ethical business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-8 my-4">
            <a href="#" className="text-blue-600 hover:underline text-sm">
              See About Services
            </a>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              View our Products
            </a>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Contact Us for Free Consultation
            </a>
          </div>
          </div>
        </div>

        <div className="my-16 bg-gradient-to-b from-[#FFFFFF]  via-[#E6DEDEA7] to-[#FFFFFF] py-8 px-4 rounded-lg">
       <div className="p-16">

      
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
            <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-2 md:mb-0">What our customers say</h2>
            <p className="text-sm text-gray-800 plus-jakarta-sans-400">Rated 4.7 / 5 based on 28,370 reviews Showing our 4.5 star reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm  relative">
              <div className="mb-4">
                <p className="text-gray-700 plus-jakarta-sans-400  text-sm">
                  "Amazing design, easy to customize and a design quality superlative account on its visual platform for
                  the optimized performance. And we didn't run out our original designs."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src={P3 || "/placeholder.svg"} alt="Leslie Alexander" className="w-full h-full object-cover" />
                </div>
                <div className="plus-jakarta-sans-400">
                  <p className="font-medium text-sm">Leslie Alexander</p>
                  <p className="text-gray-500 text-xs">Lorem Ipsum</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 text-gray-300 text-4xl">"</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm  relative">
              <div className="mb-4">
                <p className="text-gray-700 plus-jakarta-sans-400 text-sm">
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src={P2 || "/placeholder.svg"} alt="Jenny Wilson" className="w-full h-full object-cover" />
                </div>
                <div className="plus-jakarta-sans-400">
                  <p className="font-medium text-sm">Jenny Wilson</p>
                  <p className="text-gray-500 text-xs">Lorem Ipsum</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 text-gray-300 text-4xl">"</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm  relative">
              <div className="mb-4">
                <p className="text-gray-700 plus-jakarta-sans-400 text-sm">
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src={P1 || "/placeholder.svg"} alt="Courtney Henry" className="w-full h-full object-cover" />
                </div>
                <div className="plus-jakarta-sans-400">
                  <p className="font-medium text-sm">Courtney Henry</p>
                  <p className="text-gray-500 text-xs">Lorem Ipsum</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 text-gray-300 text-4xl">"</div>
            </div>
          </div>

          <div className="flex justify-start mt-6 items-center">
            <button className="w-11 h-8 cursor-pointer rounded-xl bg-white border border-gray-300 flex items-center justify-center mx-1 shadow-sm">
              <span className="text-gray-800">&lt;</span>
            </button>
            <button className="w-11 h-8 cursor-pointer rounded-xl bg-white border border-gray-300 flex items-center justify-center mx-1 shadow-sm">
              <span className="text-gray-800">&gt;</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
