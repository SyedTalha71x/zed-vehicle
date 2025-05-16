import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Img1 from '../../public/about-images/hyundai-motor-group-0kR6_Fr8g-U-unsplash.jpg'

import Image1 from '../../public/about-images/bas-peperzak-tyhpK_QelPo-unsplash.jpg'
import Image2 from '../../public/about-images/erik-mclean-_OaxFZBHSx4-unsplash.jpg'
import Image3 from '../../public/about-images/maxim-XBhMQh_y8DI-unsplash.jpg'
import Image4 from '../../public/about-images/niamat-ullah-foCt1q7yKZM-unsplash.jpg'

const HowItWorks = () => {
    return (
        <div className='mt-16'>
            <div className="max-w-7xl mx-auto p-3">
                <div className="mb-8">
                    <p className="text-md text-gray-500 tracking-wider">
                        <span className="text-blue-600">Home</span> / How it Works
                    </p>
                    <h1 className="text-2xl plus-jakarta-sans text-gray-900 mt-2">How it Works</h1>
                </div>

                <div className="md:mb-16 mb-8">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center md:flex-row flex-col">
                            <h2 className="text-2xl md:w-3/3 sm:text-3xl plus-jakarta-sans text-gray-900 mb-4">
                                How We Deliver Global Vehicle Export Excellence
                            </h2>
                            <p className="text-gray-600 mb-4 plus-jakarta-sans-400">
                                We simplify the international vehicle export process with a streamlined, efficient system. From vehicle selection to final delivery, we handle every detail so you can focus on your business growth.
                            </p>
                        </div>

                        <div className="md:mt-10 mt-4">
                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src={Img1}
                                    alt="Vehicle export warehouse with cars"
                                    className="w-full md:h-[70vh] h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-20'>
                    <div className='max-w-6xl ml-auto w-full'>
                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='flex flex-col gap-3 md:w-1/2 order-2 md:order-1'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>Vehicle Selection & Inspection</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>Browse our extensive inventory of high-quality vehicles. Each vehicle undergoes a thorough 150-point inspection to ensure it meets our rigorous standards before export.</p>
                            </div>
                            <div className='md:w-[30%] md:h-84 h-full w-full order-1 md:order-2'>
                                <img
                                    src={Image2}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Vehicle inspection process"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='md:w-[30%] md:md:h-84 h-full w-full '>
                                <img
                                    src={Image1}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Documentation and compliance"
                                />
                            </div>
                            <div className='flex flex-col gap-3 md:w-1/2'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>Documentation & Compliance</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>We handle all necessary export documentation, customs clearance, and compliance requirements for your destination country, ensuring a smooth international transfer.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='flex flex-col gap-3 md:w-1/2 order-2 md:order-1'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>Secure Transportation</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>Your vehicles are carefully loaded and secured in shipping containers or RoRo vessels, with comprehensive insurance coverage throughout the entire shipping journey.</p>
                            </div>
                            <div className='md:w-[30%] md:h-84 h-full w-full order-1 md:order-2'>
                                <img
                                    src={Image4}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Secure vehicle transportation"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5'>
                            <div className='md:w-[30%] md:h-84 h-full w-full'>
                                <img
                                    src={Image3}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Delivery and support"
                                />
                            </div>
                            <div className='flex flex-col gap-3 md:w-1/2'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>Delivery & Ongoing Support</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>We coordinate the final delivery to your preferred location and provide ongoing support including warranty options, service recommendations, and parts availability for your imported vehicles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks