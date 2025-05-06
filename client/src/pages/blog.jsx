import React from "react";
import Blog1 from '../../public/blog-images/detail-post-qgcqjbplr26tb4zy10bze2mopzdllwpk0s6tl4rlrw.jpg.svg'
import Blog2 from '../../public/blog-images/blog7-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg'
import Blog3 from '../../public/blog-images/blog9-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg'
import Blog4 from '../../public/blog-images/blog8-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg'
import { MdOutlineArrowOutward } from "react-icons/md";


export default function BlogPage() {
  // Blog posts array
  const blogPosts = [
    {
      id: 1,
      image: Blog1,
      imageAlt: Blog1,
      date: "March 15, 2024",
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
      content: "Discover the luxury and power of the 2024 BMW ALPINA XB7. This extraordinary vehicle combines exclusive details with unmatched performance to deliver an exceptional driving experience.",
      author: "Admin"
    },
    {
      id: 2,
      image: Blog2,
      imageAlt: "Colorful clothing in a closet",
      date: "April 2, 2024",
      title: "BMW X4 M50i is designed to exceed your sportiest.",
      content: "The BMW X4 M50i pushes the boundaries of what a sports activity coupe can be. With its powerful engine and dynamic handling, it's designed to exceed your sportiest expectations.",
      author: "Admin"
    },
    {
      id: 3,
      image: Blog3,
      imageAlt: "Red and gold sports cars",
      date: "May 10, 2024",
      title: "BMW X6 Gold 2024 Sport Review - Light on Sport",
      content: "Our comprehensive review of the BMW X6 Gold 2024 Sport edition. Discover how this luxury SUV balances performance and comfort in a stunning gold finish.",
      author: "Admin"
    }
  ];

  const redirecToBlog = (id) => {
    window.location.href = `/blog-details/${id}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
          <p className="text-sm text-gray-500 tracking-wider">
            <span className="text-blue-600">Home</span> / Blog
          </p>
          <h1 className="text-2xl plus-jakarta-sans text-gray-900 mt-2">Blog</h1>
        </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          {blogPosts.map((post) => (
            <div onClick={() => {redirecToBlog(post.id)}} className="mb-10" key={post.id}>
              <div className="relative">
                <span className="absolute top-2 left-2 plus-jakarta-sans bg-white text-xs px-2 py-1 rounded-lg">FEATURED</span>
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="mt-2 flex gap-5 items-center text-gray-500 text-sm">
                {post.author && <div>{post.author}</div>}
                {post.date}
              </div>
              <h2 className={`text-xl ${post.id === 1 ? 'plus-jakarta-sans' : 'font-bold'} mt-1`}>
                <a href="#" className="">
                  {post.title}
                </a>
              </h2>
              <p className={`${post.id === 1 ? 'text-gray-900 plus-jakarta-sans-400' : 'text-gray-900'} mt-2 text-sm`}>
                {post.content}
              </p>
              <div className={`mt-3 ${post.id === 1 ? 'plus-jakarta-sans-400' : ''}`}>
                <a href="#" className="text-sm flex items-center gap-1 text-black ">
                  Read More <div><MdOutlineArrowOutward size={20}/></div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="border border-slate-200 rounded-lg p-4 mb-6">
            <h3 className="plus-jakarta-sans mb-3">Categories</h3>
            <ul className="space-y-2 text-sm plus-jakarta-sans-400">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  BMW
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Car Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Luxury
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Oil & Filters
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Styling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Wheels
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="plus-jakarta-sans mb-3">Type</h3>
            <ul className="space-y-2 flex flex-wrap gap-1 items-center text-sm plus-jakarta-sans-400">
              <li className="bg-[#E9F2FF] px-6 py-1.5 rounded-2xl p-2">
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Bestsellers
                </a>
              </li>
              <li className="bg-[#E9F2FF] px-6 py-1.5 rounded-2xl p-2">
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Fashion
                </a>
              </li>
              <li className="bg-[#E9F2FF] px-6 py-1.5 rounded-2xl p-2">
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Full Option
                </a>
              </li>
              <li className="bg-[#E9F2FF] px-6 py-1.5 rounded-2xl p-2">
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Latest
                </a>
              </li>
              <li className="bg-[#E9F2FF] px-6 py-1.5 rounded-2xl p-2">
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Vintage
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}