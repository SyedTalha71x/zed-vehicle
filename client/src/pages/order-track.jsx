import React, { useState } from 'react';
import TrackOrderImage from '../../public/container-order-trackig.svg'

const OrderTracking = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="mb-8 mt-10">
                <div className="mb-1">
                    <span className="text-sm text-black plus-jakarta-sans-400">/ Order Tracking</span>
                </div>
                <h1 className="text-2xl plus-jakarta-sans text-gray-900">Order Tracking</h1>
            </div>

            <div className="flex flex-col space-y-8">
                <div className="flex items-center md:flex-row flex-col gap-4">
                    <h2 className="text-2xl md:w-3/3 sm:text-3xl plus-jakarta-sans text-gray-900 mb-4">
                        Customer Login—Live Order Tracking With Photos, Documents, and ETA
                    </h2>
                    <p className="text-gray-700 plus-jakarta-sans-400 mb-4">
                        Stay informed every step of the way with our real-time tracking system. Get 24/7access to your shipment's status via WhatsApp, email, or our secure online portal.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 rounded-lg overflow-hidden">
                        <img
                            src={TrackOrderImage}
                            alt="Shipping containers"
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-gray-600 shadow-lg">
                        <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-4">Sample Insurance Certificate</h3>
                        <div className="text-sm text-gray-600 space-y-2 mt-8 plus-jakarta-sans-400 ">
                            <p><span className="font-semibold">INSURED:</span> Your Website</p>
                            <p><span className="font-semibold">Shipping Info:</span> [Order details]</p>
                            <p><span className="font-semibold">Contact:</span> support@yourcompany.com</p>
                            <p><span className="font-semibold">Carrier:</span> Global Carrier Corp.</p>
                            <p><span className="font-semibold">Policy Number:</span> [Policy ID]</p>
                            <p><span className="font-semibold">Coverage:</span> [Coverage details]</p>
                            <p><span className="font-semibold">Contact:</span> claims@insurancecompany.com</p>
                            <p><span className="font-semibold">Website:</span> www.insurancecompany.com</p>
                            <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
                            <p><span className="font-semibold">Certificate:</span> [Certificate ID]</p>
                            <p><span className="font-semibold">Notes:</span> Insurance certificate provided by client</p>
                        </div>
                    </div>
                </div>

                <section className="mt-8">
                    <h2 className="text-xl plus-jakarta-sans text-gray-900 mb-4">
                        Customer Login—Live Order Tracking With Photos, Documents, and ETA
                    </h2>
                    <p className="text-base text-gray-700 plus-jakarta-sans-400 mb-5">
                        Stay informed every step of the way with our real-time tracking system. Get 24/7 access to your shipment's status and whereabouts, email, or via our secure online portal.
                    </p>

                    <div className="mt-5">
                        <h3 className="plus-jakarta-sans text-base mb-3">Tracking Features:</h3>
                        <ul className="space-y-2 plus-jakarta-sans-400">
                            <li className="pl-5 relative">
                                <span className="absolute left-0 text-red-500">•</span>
                                Review photo updates at every stage: packing, loading, customs, arrival
                            </li>
                            <li className="pl-5 relative">
                                <span className="absolute left-0 text-red-500">•</span>
                                View all documents (BOL/Lading, invoices, insurance certificates)
                            </li>
                            <li className="pl-5 relative">
                                <span className="absolute left-0 text-red-500">•</span>
                                Real-time location and estimated time of arrival
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl  font-bold text-[#405FF2] mb-5">
                        Login <span className=" plus-jakarta-sans-400 text-gray-800 text-sm">(Existing Customers)</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 max-w-md plus-jakarta-sans-400">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-sm text-gray-800">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 border border-gray-300 outline-none rounded-xl text-base "
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="password" className="text-sm text-gray-800">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 border border-gray-300 outline-none rounded-xl text-base "
                                required
                            />
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='text-sm'>Forgot Password?</div>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Reset Password</a>
                        </div>
                    </form>
                    <button
                        type="submit"
                        className="bg-[#FF3F25] mt-7 w-auto hover:bg-red-600 cursor-pointer text-white py-1.5 text-sm px-10 rounded-2xl transition duration-500"
                    >
                        Login
                    </button>

                    <div className="mt-5 text-sm">
                        <span className="text-gray-600">Don't have an account? </span>
                        <a href="#" className="text-blue-600 hover:text-blue-800">Create Free Account</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OrderTracking;