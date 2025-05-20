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
                                Our Comprehensive Service Process
                            </h2>
                            <p className="text-gray-600 mb-4 plus-jakarta-sans-400">
                                We simplify the entire sourcing and procurement process with a streamlined, efficient system. From initial consultation to delivery, we handle every detail so you can focus on your business growth.
                            </p>
                        </div>

                        <div className="md:mt-10 mt-4">
                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src={Img1}
                                    alt="Global sourcing operations"
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
                                <h1 className='text-2xl plus-jakarta-sans text-black'>1. Initial Consultation</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>We begin by discussing your specific product requirements, target markets, budget, and timelines. This ensures we understand your needs and can tailor our sourcing accordingly.</p>
                            </div>
                            <div className='md:w-[30%] md:h-84 h-full w-full order-1 md:order-2'>
                                <img
                                    src={"https://plus.unsplash.com/premium_photo-1667520030781-ea2cf0bcb509?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Initial consultation meeting"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='md:w-[30%] md:h-84 h-full w-full'>
                                <img
                                    src={"https://plus.unsplash.com/premium_photo-1661657445271-1a8faa9b5357?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Client commitment process"
                                />
                            </div>
                            <div className='flex flex-col gap-3 md:w-1/2'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>2. Client Commitment</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>To proceed, you'll sign a commitment form acknowledging the sourcing period and agreeing to await our comprehensive offer. This step ensures mutual understanding and commitment to the process.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='flex flex-col gap-3 md:w-1/2 order-2 md:order-1'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>3. Sourcing, Negotiation & Procurement</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>Leveraging our global network, we identify and compare multiple suppliers to secure the best quality and pricing for your desired products. We actively negotiate terms to ensure optimal value and reliability for you.</p>
                            </div>
                            <div className='md:w-[30%] md:h-84 h-full w-full order-1 md:order-2'>
                                <img
                                    src={"https://plus.unsplash.com/premium_photo-1661420029836-da51808cf68b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Sourcing and negotiation process"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='md:w-[30%] md:h-84 h-full w-full'>
                                <img
                                    src={"https://images.unsplash.com/photo-1646579886135-068c73800308?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Offer presentation"
                                />
                            </div>
                            <div className='flex flex-col gap-3 md:w-1/2'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>4. Offer Presentation</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>We present you with a detailed offer, including product specifications, pricing, shipping options, and estimated timelines. This allows you to make informed decisions with all necessary information at hand.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='flex flex-col gap-3 md:w-1/2 order-2 md:order-1'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>5. Contract Finalization</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>Upon your approval of the offer, we formalize the agreement with a bespoke contract and proforma invoice, outlining all terms and conditions to protect both parties.</p>
                            </div>
                            <div className='md:w-[30%] md:h-84 h-full w-full order-1 md:order-2'>
                                <img
                                    src={"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Contract signing"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='md:w-[30%] md:h-84 h-full w-full'>
                                <img
                                    src={"https://plus.unsplash.com/premium_photo-1661963312443-e6f80b64ace6?q=80&w=1701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Logistics coordination"
                                />
                            </div>
                            <div className='flex flex-col gap-3 md:w-1/2'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>6. Logistics Coordination</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>We handle all aspects of shipping, whether port-to-port or door-to-door, by sea, air, or land. Our team ensures efficient and cost-effective transportation tailored to your needs.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='flex flex-col gap-3 md:w-1/2 order-2 md:order-1'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>7. Customs & Compliance</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>Our experts manage all export and import documentation, ensuring compliance with international trade regulations to facilitate smooth customs clearance.</p>
                            </div>
                            <div className='md:w-[30%] md:h-84 h-full w-full order-1 md:order-2'>
                                <img
                                    src={"https://images.unsplash.com/photo-1580795478762-1f6b61f2fae7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Customs and compliance processing"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='md:w-[30%] md:h-84 h-full w-full'>
                                <img
                                    src={"https://plus.unsplash.com/premium_photo-1661335273735-28702a0e32a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Insurance and risk management"
                                />
                            </div>
                            <div className='flex flex-col gap-3 md:w-1/2'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>8. Insurance & Risk Management</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>We offer optional cargo insurance to protect your shipment against unforeseen events, providing peace of mind throughout the transit process.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5 mb-12'>
                            <div className='flex flex-col gap-3 md:w-1/2 order-2 md:order-1'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>9. Real-Time Tracking</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>Stay informed with real-time updates, including photos, document scans, and live estimated times of arrival, accessible via WhatsApp, email, or our client portal.</p>
                            </div>
                            <div className='md:w-[30%] md:h-84 h-full w-full order-1 md:order-2'>
                                <img
                                    src={"https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Real-time tracking system"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-5'>
                            <div className='md:w-[30%] md:h-84 h-full w-full'>
                                <img
                                    src={'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    className='h-full w-full object-cover md:rounded-full rounded-2xl'
                                    alt="Payment options"
                                />
                            </div>
                            <div className='flex flex-col gap-3 md:w-1/2'>
                                <h1 className='text-2xl plus-jakarta-sans text-black'>10. Flexible Payment Options</h1>
                                <p className='text-gray-600 plus-jakarta-sans-400 text-md'>Choose from various secure payment methods, including escrow services, letters of credit (LC), or telegraphic transfers (T/T), to suit your financial preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks