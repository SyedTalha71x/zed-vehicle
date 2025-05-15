/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import ServicePicture from "../../public/Frame 427320605.svg"
import Image1 from "../../public/image 15.png"
import Image2 from "../../public/image 15 (1).png"
import Image4 from "../../public/image 15 (2).png"

import VehicleSpareParts from '../../public/image 15 (3).png'

import Machiner from "../../public/image 15 (2 - mach).png"
import Agriculture from "../../public/image 15 (2 - agr).png"
import BuildinMaterials from "../../public/image 15 (2 -2).png"
import Oil from "../../public/image 15 (3 - 2).png"
import RetailImage from "../../public/image 15 (1 - 1).png"

const categories = [
  {
    id: 1,
    title: "Minerals & Raw Materials",
    image: Image1,
    link: "#",
    description:
      "We source certified traceable coal, gemstones, and other minerals from trusted suppliers, ensuring consistent quality at competitive pricing.",
    features: ["Flexible Terms", "Reliable Supply", "Competitive Prices", "Quality Assurance"],
  },
  {
    id: 2,
    title: "Heavy Machinery & Equipment",
    image: Machiner,
    link: "#",
    description:
      "Industrial machinery and equipment sourced from reputable manufacturers with warranty and maintenance support.",
    features: ["New & Used Options", "Technical Support", "Competitive Pricing", "Quality Assurance"],
  },
  {
    id: 3,
    title: "Electronics & Appliances",
    image: Image2,
    link: "#",
    description: "Consumer and industrial electronics from leading brands with international warranty coverage.",
    features: ["Latest Models", "Bulk Discounts", "Warranty Support", "Quality Certification"],
  },
  {
    id: 4,
    title: "Textiles & Apparel",
    image: Image4,
    link: "#",
    description: "OEM and aftermarket automotive components for all major vehicle brands with certification.",
    features: ["OEM Quality", "Extensive Inventory", "Competitive Pricing", "Fast Shipping"],
  },
  {
    id: 5,
    title: "Food & Agricultural Products",
    image: Agriculture,
    link: "#",
    description: "Wide range of consumer products from trusted manufacturers with competitive wholesale pricing.",
    features: ["Bulk Orders", "Custom Branding", "Competitive Pricing", "Quality Control"],
  },
  {
    id: 6,
    title: "Vehicles & Spare Parts",
    image: VehicleSpareParts,
    link: "#",
    description: "Wide range of consumer products from trusted manufacturers with competitive wholesale pricing.",
    features: ["Bulk Orders", "Custom Branding", "Competitive Pricing", "Quality Control"],
  },
  {
    id: 7,
    title: "Oil and Petroleum Products",
    image: Oil,
    link: "#",
    description: "Wide range of consumer products from trusted manufacturers with competitive wholesale pricing.",
    features: ["Bulk Orders", "Custom Branding", "Competitive Pricing", "Quality Control"],
  },
  {
    id: 8,
    title: "Consumer & Retail Goods",
    image: RetailImage,
    link: "#",
    description: "Wide range of consumer products from trusted manufacturers with competitive wholesale pricing.",
    features: ["Bulk Orders", "Custom Branding", "Competitive Pricing", "Quality Control"],
  },
  {
    id: 9,
    title: "Building Materials",
    image: BuildinMaterials,
    link: "#",
    description: "Wide range of consumer products from trusted manufacturers with competitive wholesale pricing.",
    features: ["Bulk Orders", "Custom Branding", "Competitive Pricing", "Quality Control"],
  },
]

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const popupRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    // Add body class to prevent scrolling when popup is open
    if (selectedProduct) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [selectedProduct])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const closePopup = () => {
    setSelectedProduct(null)
  }

  const updateNavigationState = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning)
      setIsEnd(swiperRef.current.isEnd)
    }
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto p-3">
        <div className="mb-8">
          <p className="text-sm text-gray-500 tracking-wider">
            <span className="text-blue-600">Home</span> / Products
          </p>
          <h1 className="text-2xl plus-jakarta-sans text-gray-900 mt-2">Products</h1>
        </div>

        <div className="md:mb-16 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center md:flex-row flex-col">
              <h2 className="text-2xl md:w-3/2 sm:text-3xl plus-jakarta-sans text-gray-900 mb-4">
                Our Export Products - Global Sourcing Solutions
              </h2>
              <p className="text-gray-600 mb-4 plus-jakarta-sans-400">
                We source and export a wide range of products to meet the diverse needs of businesses worldwide. Our
                expertise and network enable us to deliver quality goods at competitive prices, with reliable service
                every step of the way. We also source <em>used</em> products such as vehicles and machinery.
              </p>
            </div>

            <div className="md:mt-10 mt-4">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={ServicePicture || "/placeholder.svg"}
                  alt="Warehouse with shelves of products"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] relative"
        style={{
          clipPath: "polygon(61% 0, 73% 5%, 100% 5%, 100% 100%, 55% 100%, 45% 95%, 0 95%, 0 0)",
        }}
      >
        <div className="max-w-7xl mx-auto pt-8 pb-4">
          <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">Top-Quality Vehicles & Accessories</h2>

          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Navigation]}
              spaceBetween={16}
              slidesPerView={1.5}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: (index, className) => {
                  return `<span class="${className}" style="background-color: ${className.includes('active') ? '#FF3F25' : '#000'}; width: 10px; height: 10px; margin: 0 4px;"></span>`;
                },
              }}
              onSlideChange={updateNavigationState}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                updateNavigationState()
              }}
              className="mb-10"
            >
              {categories.map((category) => (
                <SwiperSlide key={category.id} className="plus-jakarta-sans-400 cursor-pointer">
                  <div onClick={() => handleProductClick(category)}>
                    <div className="rounded-md overflow-hidden h-full">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-full rounded-md object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">{category.title}</h3>
                      <a
                        href="#"
                        className="block text-blue-600 text-xs sm:text-sm mt-1 underline"
                        onClick={(e) => {
                          e.preventDefault()
                          handleProductClick(category)
                        }}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination flex justify-center space-x-2 mt-4 pb-10" />
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl rounded-2xl mx-auto px-1 sm:px-6 md:px-10 lg:px-20 mt-12 bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] "
        style={{
          clipPath: "polygon(41% 0, 51% 9%, 100% 9%, 100% 100%, 60% 100%, 43% 100%, 0 100%, 0 0)",
        }}
      >
        <div className=" p-6 sm:p-18">
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-medium plus-jakarta-sans md:mt-0 mt-4 text-[#FF3F25]">
              Don't See What You Need?
            </h3>
            <p className="text-sm sm:text-base plus-jakarta-sans-400 text-black mt-4">
              Our global network enables us to source virtually any legal and exportable product. Contact us today to
              discuss your specific requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-2 mt-4">
            <button className="bg-transparent text-gray-900 py-2 px-12 md:rounded-tl-2xl md:rounded-bl-2xl text-sm font-medium border border-slate-500 transition-colors">
              Get a Fast Quote
            </button>
            <button className="bg-[#33AAB4] text-white border-none py-2 px-12 md:rounded-tr-2xl md:rounded-br-2xl text-sm font-medium transition-colors">
              WhatsApp Us Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            ref={popupRef}
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl md:p-4 p-3 max-h-[80vh] overflow-y-auto relative"
          >
            <button onClick={closePopup} className="absolute top-3 right-3 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/5 md:mt-0 mt-5">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="md:w-3/5 space-y-3 md:mt-10 mt-0">
                <h3 className="text-xl plus-jakarta-sans text-gray-900">{selectedProduct.title}</h3>
                <p className="text-gray-900 plus-jakarta-sans-400">{selectedProduct.description}</p>

                <div className="plus-jakarta-sans-400">
                  <h1 className="mb-2 font-semibold">Key features</h1>
                  <ul className="space-y-1">
                    {selectedProduct.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-1 mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-sm text-center text-gray-700 mt-4 plus-jakarta-sans-400">
              <p>"We source minerals from trusted suppliers, ensuring consistent quality and competitive pricing."</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-2 mt-4 plus-jakarta-sans-400">
              <button className="bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] text-gray-900 py-2 px-12 md:rounded-tl-2xl md:rounded-bl-2xl text-sm font-medium border border-slate-300 transition-colors">
                Get a Fast Quote
              </button>
              <button className="bg-[#33AAB4] text-white border-none py-2 px-12 md:rounded-tr-2xl md:rounded-br-2xl text-sm font-medium transition-colors">
                WhatsApp Us Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products