import { useRef, useState, useEffect } from "react"
import Hero from "../../public/Hero.png"

import gsap from "gsap"
import Image1 from "../../public/image 15.png"
import Image2 from "../../public/image 15 (1).png"
import Image4 from "../../public/image 15 (3).png"

import Machiner from "../../public/image 15 (2 - mach).png"
import Agriculture from "../../public/image 15 (2 - agr).png"
import BuildinMaterials from "../../public/image 15 (2 -2).png"
import Oil from "../../public/image 15 (3 - 2).png"
import RetailImage from "../../public/image 15 (1 - 1).png"

import { FaSearch, FaDollarSign, FaTruck } from "react-icons/fa"


import Background from '../../public/Background.svg'

import pic1 from '../../public/1-2.svg'
import pic2 from '../../public/image 15.png'
import { MdOutlineArrowOutward } from "react-icons/md"


import P1 from '../../public/about-images/Group (1).svg'
import P2 from '../../public/about-images/Group.svg'
import P3 from '../../public/about-images/Vector.svg'

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
        image: Image4,
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

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const carouselRef = useRef(null)
    const popupRef = useRef(null)
    const howItWorksRef = useRef(null)
    const featuredProductsRef = useRef(null)
    const serviceIconsRef = useRef(null)

    // Calculate which categories to show based on active index and screen size
    const getVisibleCategories = () => {
        const isMobile = window.innerWidth < 640
        const itemsToShow = isMobile ? 2 : 3

        const visibleItems = categories.slice(activeIndex, activeIndex + itemsToShow)

        if (visibleItems.length < itemsToShow) {
            visibleItems.push(...categories.slice(0, itemsToShow - visibleItems.length))
        }

        return visibleItems
    }

    const [visibleCategories, setVisibleCategories] = useState(getVisibleCategories())

    useEffect(() => {
        // Update visible categories when activeIndex changes or on window resize
        const handleResize = () => {
            setVisibleCategories(getVisibleCategories())
        }

        // Add resize listener
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [activeIndex])

    useEffect(() => {
        // Add GSAP animation whenever visibleCategories change
        if (carouselRef.current) {
            gsap.fromTo(
                carouselRef.current.children,
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                },
            )
        }

        // Animate new sections on load
        if (howItWorksRef.current) {
            gsap.fromTo(howItWorksRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        }

        if (featuredProductsRef.current) {
            gsap.fromTo(
                featuredProductsRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
            )
        }

        if (serviceIconsRef.current) {
            gsap.fromTo(
                serviceIconsRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.3 },
            )
        }
    }, [visibleCategories])

    // Animation for popup
    useEffect(() => {
        if (selectedProduct && popupRef.current) {
            // Animate popup in
            gsap.fromTo(
                popupRef.current,
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                },
            )
        }
    }, [selectedProduct])

    const handleDotClick = (index) => {
        // Animate out the current items
        if (carouselRef.current) {
            gsap.to(carouselRef.current.children, {
                opacity: 0,
                x: -50,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.in",
                onComplete: () => {
                    // After animation out completes, update the state
                    setActiveIndex(index)
                    // Animation in will be handled by the useEffect above
                },
            })
        } else {
            setActiveIndex(index)
        }
    }

    const handleProductClick = (product) => {
        setSelectedProduct(product)
        // Add body class to prevent scrolling when popup is open
        document.body.style.overflow = "hidden"
    }

    return (
        <div className="">
            <div className="mt-8 p-2 max-w-7xl mx-auto w-full">
                <img src={Hero || "/placeholder.svg"} className="h-full w-full" alt="Hero" />
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
                    // backgroundImage: "linear-gradient(to bottom, #FFFFFF, #E6DEDEA7, #FFFFFF)",
                }}
            >
                <div className="max-w-7xl mx-auto pt-8 pb-4">
                    <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">What We Export</h2>

                    <div ref={carouselRef} className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                        {visibleCategories.map((category) => (
                            <div
                                key={category.id}
                                className="plus-jakarta-sans-400 cursor-pointer"
                                onClick={() => handleProductClick(category)}
                            >
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
                        ))}
                    </div>

                    <div className="flex justify-center mt-26 pb-10 sm:mt-28 space-x-2">
                        {categories.slice(0, categories.length - (window.innerWidth < 640 ? 1 : 2)).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${activeIndex === index ? "bg-[#FF3F25]" : "bg-black"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div ref={howItWorksRef} className="max-w-7xl bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] rounded-xl mx-auto w-full   my-16">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src={Background}
                            alt="Cargo ship with shipping containers"
                            className="w-full h-auto object-cover rounded-md"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-2xl plus-jakarta-sans mb-3">How It Works</h2>
                        <p className="text-gray-800 mb-4 plus-jakarta-sans-400">
                            Custom process for your business: Tell us what you need; we source, negotiate and secure the best price; you choose your service level—sourcing only, shipping, full logistics, or door-to-door.
                        </p>
                        <div>
                            <button className="bg-red-500 plus-jakarta-sans-400 hover:bg-red-600 text-white py-2 px-8 rounded-2xl text-sm">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-6 my-16">
                <h2 className="text-2xl plus-jakarta-sans mb-6">Featured Products</h2>

                <div className="flex flex-col md:flex-row gap-6 ">
                    {/* Left side - Product categories */}
                    <div className="w-full md:w-1/2 space-y-6" ref={featuredProductsRef}>
                        {/* Minerals */}
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="plus-jakarta-sans">Minerals:</p>
                            <p className="text-sm text-gray-700  plus-jakarta-sans-400">
                                Reliable supply of iron ore, copper, and other minerals for global industries.
                            </p>
                            <a href="#" className="text-blue-600 text-sm flex items-center gap-2">
                                Explore now <div><MdOutlineArrowOutward size={20} /></div>
                            </a>
                        </div>

                        {/* Machinery */}
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="plus-jakarta-sans">Machinery:</p>
                            <p className="text-sm text-gray-700 plus-jakarta-sans-400">
                                Heavy equipment solutions for construction, agriculture, and manufacturing.
                            </p>
                            <a href="#" className="text-blue-600 text-sm flex items-center gap-2">
                                Explore now <div><MdOutlineArrowOutward size={20} /></div>
                            </a>
                        </div>

                        {/* Exports */}
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="plus-jakarta-sans">Exports:</p>
                            <p className="text-sm text-gray-700   plus-jakarta-sans-400">Comprehensive logistics solutions for global exports.</p>
                            <a href="#" className="text-blue-600 text-sm flex items-center gap-2">
                                Explore now <div><MdOutlineArrowOutward size={20} /></div>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Images */}
                    <div className="w-full md:w-1/2 flex gap-3 mt-4 md:mt-0">
                        <div className="w-1/2">
                            <img
                                src={pic2}
                                alt="Mining operations"
                                className="w-full h-auto rounded-md object-cover"
                            />
                        </div>
                        <div className="w-1/2">
                            <img
                                src={pic1}
                                alt="Logistics truck"
                                className="w-full h-auto rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-6 my-16">
                <div ref={serviceIconsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Inquiry */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center mb-4">
                            <img src={P3} alt="Inquiry Icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-gray-800 text-sm">
                            <span className="font-semibold">Inquiry:</span> Tell us your needs and where you want it shipped.
                        </p>
                    </div>

                    {/* Negotiate */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center mb-4">
                            <img src={P2} alt="Negotiate Icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-gray-800 text-sm">
                            <span className="font-semibold">We Negotiate the Best Price:</span> Our team finds the best suppliers and saves you money.
                        </p>
                    </div>

                    {/* Logistics */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center mb-4">
                            <img src={P1} alt="Logistics Icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-gray-800 text-sm">
                            <span className="font-semibold">We Handle Logistics & Customs:</span> Expert shipping and compliance to your destination.
                        </p>
                    </div>
                </div>
            </div>



            <div
                className="max-w-7xl rounded-2xl mx-auto px-1 sm:px-6 md:px-10 lg:px-20 mt-12 bg-gradient-to-tl from-[#d6d0d0] via-[#f3eeeea7] to-[#d6d0d0] "
                style={{
                    clipPath: "polygon(41% 0, 51% 9%, 100% 9%, 100% 100%, 60% 100%, 43% 100%, 0 100%, 0 0)",
                    // backgroundImage: "linear-gradient(to bottom, #FFFFFF, #E6DEDEA7, #FFFFFF)",
                }}
            >
                <div className=" p-6 sm:p-18">
                    <div className="text-center mb-4">
                        <h3 className="text-lg sm:text-xl font-medium plus-jakarta-sans md:mt-0 mt-4 text-[#FF3F25]">
                            Want to know more About Us!
                        </h3>
                        <p className="text-sm sm:text-base plus-jakarta-sans-400 text-black mt-4">
                            Get a fast custom quote for your specific requirements. Contact us today by using the form below, sending a WhatsApp message, or giving us a call.
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
