import React, { useState } from 'react';
import Admin1 from "../../public/blog-images/test1-150x150.jpg.png"


const CommentSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        comment: '',
        saveInfo: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Comment submitted:', formData);
        // Here you would typically send the data to your backend
        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            website: '',
            comment: '',
            saveInfo: false
        });
    };

    return (
        <div className="mt-12">
            {/* Reactions */}
            <div className="mb-4">
                <span className="text-sm font-medium plus-jakarta-sans-400 plus-jakarta-sans-400">Reactions</span>
                <div className="flex items-center gap-2 mt-1">
                    <button className="text-gray-500 hover:text-gray-700">👍</button>
                    <button className="text-gray-500 hover:text-gray-700">❤️</button>
                    <button className="text-gray-500 hover:text-gray-700">🎉</button>
                </div>
            </div>

            {/* Admin Comment */}
            <div className="flex gap-3 mb-6">
                <img
                    src={Admin1}
                    alt="Admin avatar"
                    className="h-10 w-10 rounded-full"
                />
                <div>
                    <div className="font-medium plus-jakarta-sans ">Admin</div>
                    <p className="text-sm plus-jakarta-sans-400 text-gray-800 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>
                </div>
            </div>

            {/* Post Navigation */}
            <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 mb-8">
                <a href="#" className="text-sm text-gray-800 hover:text-gray-900 plus-jakarta-sans-400">
                    ← Previous Post<br />
                    <span className="plus-jakarta-sans-400">How to Maintain Your BMW for the Long Run</span>
                </a>
                <a href="#" className="text-sm text-gray-800 hover:text-gray-900 text-right plus-jakarta-sans-400">
                    Next Post →<br />
                    <span className="plus-jakarta-sans-400">LUXURY AT ITS PEAK: BMW's New Flagship Sedan</span>
                </a>
            </div>

            {/* Comments Section */}
            <h3 className="text-xl font-medium plus-jakarta-sans mb-6">3 Comments</h3>

            {/* Comment 1 */}
            <div className="flex gap-3 mb-6">
                <img
                    src={Admin1}
                    alt="James avatar"
                    className="h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                    <div className="flex justify-between">
                        <div className='flex items-center gap-2'>

                            <div className="font-medium plus-jakarta-sans">James</div>
                            <div className='text-sm text-gray-500 plus-jakarta-sans-400'>November, 23</div>
                        </div>
                        <span className="text-xs text-gray-500 plus-jakarta-sans-400">Reply</span>
                    </div>
                    <p className="text-sm plus-jakarta-sans-400 text-gray-700 mt-1">
                        This is such a great car! I own one and it has the best performance I've ever experienced in a car. The engine also runs so smoothly and the interior is just magnificent!
                    </p>
                    <div className="mt-2">
                        <button className="text-xs text-gray-500 hover:text-gray-700 plus-jakarta-sans-400">Reply</button>
                    </div>
                </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-3 mb-8">
                <img
                    src={Admin1}
                    alt="Jeff Miller avatar"
                    className="h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                    <div className="flex justify-between">
                        <div className='flex items-center gap-2'>

                            <div className="font-medium plus-jakarta-sans">Jeff Miller</div>
                            <div className='text-sm text-gray-500 plus-jakarta-sans-400'>November, 23</div>
                        </div>            <span className="text-xs text-gray-500 plus-jakarta-sans-400">Reply</span>
                    </div>
                    <p className="text-sm plus-jakarta-sans-400 text-gray-700 mt-1">
                        I've been looking at several luxury SUVs and this one definitely stands out. The design is sleek and the performance seems impressive based on reviews. I have a test drive scheduled for next week!
                    </p>
                    <div className="mt-2">
                        <button className="text-xs text-gray-500 hover:text-gray-700 plus-jakarta-sans-400">Reply</button>
                    </div>
                </div>
            </div>

            {/* Comment 3 */}
            <div className="flex gap-3 mb-8">
                <img
                    src={Admin1}
                    alt="Sandy avatar"
                    className="h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                    <div className="flex justify-between">
                        <div className='flex items-center gap-2'>

                            <div className="font-medium plus-jakarta-sans">Sandy</div>
                            <div className='text-sm text-gray-500 plus-jakarta-sans-400'>November, 23</div>
                        </div>            <span className="text-xs text-gray-500 plus-jakarta-sans-400">Reply</span>
                    </div>
                    <p className="text-sm plus-jakarta-sans-400 text-gray-700 mt-1">
                        Great review! Very comprehensive and detailed. I appreciate the honest assessment of both the strengths and weaknesses of this model.
                    </p>
                    <div className="mt-2">
                        <button className="text-xs text-gray-500 hover:text-gray-700 plus-jakarta-sans-400">Reply</button>
                    </div>
                </div>
            </div>

            {/* Leave a Comment Form */}
            <div className="mt-10">
                <h3 className="text-xl font-medium plus-jakarta-sans mb-6">Leave a Comment</h3>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 plus-jakarta-sans-400">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-xl cursor-pointer outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 plus-jakarta-sans-400">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-xl cursor-pointer outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full mb-4">

                        <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1 plus-jakarta-sans-400">
                                Your Website (optional)
                            </label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-xl cursor-pointer outline-none"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="flex items-center plus-jakarta-sans-400">
                            <input
                                type="checkbox"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-700">Save my name, email, and website in this browser for the next time I comment.</span>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1 plus-jakarta-sans-400">
                            Comment
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-3 py-2 border border-gray-300 rounded-xl cursor-pointer outline-none"
                            required
                        ></textarea>
                    </div>



                    <button
                        type="submit"
                        className="px-8 text-sm py-1.5 bg-[#FF3F25] text-white rounded-full hover:bg-red-600 transition-colors plus-jakarta-sans-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentSection;
