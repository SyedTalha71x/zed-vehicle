/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import { MdOutlineArrowOutward } from "react-icons/md"
import Hero from "../../public/Hero.png"
import QuickBenefits from "../components/quick-benefits"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import Image1 from "../../public/image 15.png"
import Image2 from "../../public/image 15 (1).png"
import Image4 from "../../public/image 15 (3).png"

import Machiner from "../../public/image 15 (2 - mach).png"
import Agriculture from "../../public/image 15 (2 - agr).png"
import BuildinMaterials from "../../public/image 15 (2 -2).png"
import Oil from "../../public/image 15 (3 - 2).png"
import RetailImage from "../../public/image 15 (1 - 1).png"

import Background from "../../public/Background.svg"

import pic1 from "../../public/1-2.svg"
import pic2 from "../../public/image 15.png"

import P1 from "../../public/about-images/Group (1).svg"
import P2 from "../../public/about-images/Group.svg"
import P3 from "../../public/about-images/Vector.svg"

const categories = [
    {
        id: 1,
        title: "Machinery",
        image: Machiner,
        key: "New Entry",
    },
    {
        id: 2,
        title: "Apparel",
        image: Image1,
        key: "New Entry",
    },
    {
        id: 3,
        title: "Agricultural Products",
        image: Image2,
        key: " ",
    },
    {
        id: 4,
        title: "Minerals",
        image: Image4,
        key: "New Entry",
    },
    {
        id: 5,
        title: "Machinery",
        image: Agriculture,
        key: "New Entry",
    },
    {
        id: 6,
        title: "Apparel",
        image: Image4,
        key: "",
    },
    {
        id: 7,
        title: "Agricultural Products",
        image: Oil,
        key: "",
    },
    {
        id: 8,
        title: "Minerals",
        image: RetailImage,
        key: "",
    },
    {
        id: 9,
        title: "Machinery",
        image: BuildinMaterials,
        key: "",
    },
]

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const popupRef = useRef(null)
    
    return (
        <div className="">

            <div className="mt-8 p-2 max-w-7xl mx-auto w-full">
                <img src={Hero || "/placeholder.svg"} className="h-full w-full" alt="Hero" />
            </div>
            <div>
                <QuickBenefits />
            </div>

            <div className="my-12 px-2 md:px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] rounded-xl md:p-10 p-6">
                        <h3 className="font-bold text-lg mb-2">Tracking Feature Callout</h3>
                        <p className="text-gray-600 text-sm">
                            Track Every Milestone: We send real-time updates, including photos at everystage, copies of documents, and
                            live ETA updates.
                        </p>
                    </div>

                    <div className="bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] rounded-xl md:p-10 p-6">
                        <h3 className="font-bold text-lg mb-2">How We Save You Money" Section.</h3>
                        <p className="text-gray-600 text-sm">
                            Through our global supplier network, we compare and negotiate to find you thebest deal, passing every
                            saving directly to you—no hidden fees, no middlemen.
                        </p>
                    </div>

                    <div className="bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] rounded-xl md:p-10 p-6">
                        <h3 className="font-bold text-lg mb-2">Flexible Service Section</h3>
                        <p className="text-gray-600 text-sm">
                            Want us to only source and ship? Need full logistics, customs clearance, or evendoor-to-door delivery? We
                            tailor every export to your needs—just tell us what youwant.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row mt-10 justify-center gap-3 sm:gap-2 plus-jakarta-sans-400">
                    <button className="bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] text-gray-900 py-2 px-12 md:rounded-tl-2xl md:rounded-bl-2xl text-sm font-medium border border-slate-300 transition-colors">
                        Get a Fast Quote
                    </button>
                    <button className="bg-[#33AAB4] text-white border-none py-2 px-12 md:rounded-tr-2xl md:rounded-br-2xl text-sm font-medium transition-colors">
                        WhatsApp Us Now
                    </button>
                </div>
            </div>

            <div
                className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] relative"
                style={{
                    clipPath: "polygon(61% 0, 73% 5%, 100% 5%, 100% 100%, 55% 100%, 45% 95%, 0 95%, 0 0)",
                }}
            >
                <div className="max-w-7xl mx-auto pt-8 pb-4">
                    <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">What We Export</h2>

                    <div className="relative">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {categories.map((category) => (
                                <SwiperSlide key={category.id}>
                                    <div
                                        className="plus-jakarta-sans-400 cursor-pointer relative rounded-xl overflow-hidden"
                                        // onClick={() => handleProductClick(category)}
                                    >
                                        <div className="relative h-full aspect-[4/5]">
                                            {/* Image */}
                                            <img
                                                src={category.image || "/placeholder.svg"}
                                                alt={category.title}
                                                className="w-full h-full rounded-md object-cover"
                                            />

                                            {/* Black Overlay */}
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

                                            {/* Key Tag */}
                                            {category.key && category.key.trim() && (
                                                <div className="absolute z-20 plus-jakarta-sans-400 top-3 left-3 bg-red-500 text-white text-xs px-4 py-1.5 rounded-md">
                                                    {category.key}
                                                </div>
                                            )}

                                            {/* Title Overlay */}
                                            <div className="absolute z-20 bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                                                <h3 className="plus-jakarta-sans text-white text-xl">{category.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        {/* Custom pagination container positioned slightly below the carousel */}
                        <div className="swiper-pagination mt-6 relative bottom-0" style={{ position: 'relative' }} />
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="max-w-7xl bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] rounded-xl mx-auto w-full   my-16">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <img
                                src={Background || "/placeholder.svg"}
                                alt="Cargo ship with shipping containers"
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>

                        <div className="w-full p-3 md:w-1/2 flex flex-col justify-center md:items-start items-center">
                            <h2 className="text-2xl plus-jakarta-sans mb-3">How It Works</h2>
                            <p className="text-gray-800 mb-4 plus-jakarta-sans-400">
                                Custom process for your business: Tell us what you need; we source, negotiate and secure the best price;
                                you choose your service level—sourcing only, shipping, full logistics, or door-to-door.
                            </p>
                            <div>
                                <button className="bg-red-500 plus-jakarta-sans-400 hover:bg-red-600 text-white py-2 px-8 rounded-2xl text-sm">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-6 my-16">
                <h2 className="text-2xl plus-jakarta-sans mb-6">Featured Products</h2>

                <div className="flex flex-col md:flex-row gap-6 ">
                    {/* Left side - Product categories */}
                    <div className="w-full md:w-1/2 space-y-6">
                        {/* Minerals */}
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="plus-jakarta-sans">Minerals:</p>
                            <p className="text-sm text-gray-700  plus-jakarta-sans-400">
                                Reliable supply of iron ore, copper, and other minerals for global industries.
                            </p>
                            <a href="#" className="text-blue-600 text-sm flex items-center gap-2">
                                Explore now{" "}
                                <div>
                                    <MdOutlineArrowOutward size={20} />
                                </div>
                            </a>
                        </div>

                        {/* Machinery */}
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="plus-jakarta-sans">Machinery:</p>
                            <p className="text-sm text-gray-700 plus-jakarta-sans-400">
                                Heavy equipment solutions for construction, agriculture, and manufacturing.
                            </p>
                            <a href="#" className="text-blue-600 text-sm flex items-center gap-2">
                                Explore now{" "}
                                <div>
                                    <MdOutlineArrowOutward size={20} />
                                </div>
                            </a>
                        </div>

                        {/* Exports */}
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="plus-jakarta-sans">Exports:</p>
                            <p className="text-sm text-gray-700   plus-jakarta-sans-400">
                                Comprehensive logistics solutions for global exports.
                            </p>
                            <a href="#" className="text-blue-600 text-sm flex items-center gap-2">
                                Explore now{" "}
                                <div>
                                    <MdOutlineArrowOutward size={20} />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Images */}
                    <div className="w-full md:w-1/2 flex gap-3 mt-4 md:mt-0">
                        <div className="w-1/2">
                            <img
                                src={pic2 || "/placeholder.svg"}
                                alt="Mining operations"
                                className="w-full h-auto rounded-md object-cover"
                            />
                        </div>
                        <div className="w-1/2">
                            <img
                                src={pic1 || "/placeholder.svg"}
                                alt="Logistics truck"
                                className="w-full h-auto rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-6 my-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Inquiry */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center mb-4">
                            <img src={P3 || "/placeholder.svg"} alt="Inquiry Icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-gray-800 text-sm">
                            <span className="font-semibold">Inquiry:</span> Tell us your needs and where you want it shipped.
                        </p>
                    </div>

                    {/* Negotiate */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center mb-4">
                            <img src={P2 || "/placeholder.svg"} alt="Negotiate Icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-gray-800 text-sm">
                            <span className="font-semibold">We Negotiate the Best Price:</span> Our team finds the best suppliers and
                            saves you money.
                        </p>
                    </div>

                    {/* Logistics */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center mb-4">
                            <img src={P1 || "/placeholder.svg"} alt="Logistics Icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-gray-800 text-sm">
                            <span className="font-semibold">We Handle Logistics & Customs:</span> Expert shipping and compliance to
                            your destination.
                        </p>
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
                            Want to know more About Us!
                        </h3>
                        <p className="text-sm sm:text-base plus-jakarta-sans-400 text-black mt-4">
                            Get a fast custom quote for your specific requirements. Contact us today by using the form below, sending
                            a WhatsApp message, or giving us a call.
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
        </div>
    )
}

export default Home