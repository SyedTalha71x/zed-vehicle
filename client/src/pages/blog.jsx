import React, { useState } from "react";
import Blog1 from '../../public/blog-images/detail-post-qgcqjbplr26tb4zy10bze2mopzdllwpk0s6tl4rlrw.jpg.svg'
import Blog2 from '../../public/blog-images/blog7-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg'
import Blog3 from '../../public/blog-images/blog9-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg'
import Blog4 from '../../public/blog-images/blog8-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg'
import { MdOutlineArrowOutward } from "react-icons/md";

export default function BlogPage() {
  const allBlogPosts = [
    {
      id: 1,
      image: Blog1,
      imageAlt: "BMW ALPINA XB7 luxury vehicle",
      date: "March 15, 2024",
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
      content: "Discover the luxury and power of the 2024 BMW ALPINA XB7. This extraordinary vehicle combines exclusive details with unmatched performance to deliver an exceptional driving experience.",
      author: "Admin"
    },
    {
      id: 2,
      image: Blog2,
      imageAlt: "BMW X4 M50i sports vehicle",
      date: "April 2, 2024",
      title: "BMW X4 M50i is designed to exceed your sportiest.",
      content: "The BMW X4 M50i pushes the boundaries of what a sports activity coupe can be. With its powerful engine and dynamic handling, it's designed to exceed your sportiest expectations.",
      author: "Admin"
    },
    {
      id: 3,
      image: Blog3,
      imageAlt: "BMW X6 Gold 2024 Sport",
      date: "May 10, 2024",
      title: "BMW X6 Gold 2024 Sport Review - Light on Sport",
      content: "Our comprehensive review of the BMW X6 Gold 2024 Sport edition. Discover how this luxury SUV balances performance and comfort in a stunning gold finish.",
      author: "Admin"
    },
    {
      id: 4,
      image: Blog4,
      imageAlt: "BMW 3 Series Touring",
      date: "May 25, 2024",
      title: "BMW 3 Series Touring: The Ultimate Family Adventure Vehicle",
      content: "Explore the perfect blend of practicality and performance with the BMW 3 Series Touring. Ideal for family adventures without compromising on the signature BMW driving experience.",
      author: "Admin"
    },
    {
      id: 5,
      image: Blog1,
      imageAlt: "BMW M8 Competition",
      date: "June 3, 2024",
      title: "The BMW M8 Competition: Power Meets Luxury",
      content: "Experience the pinnacle of BMW's performance lineup with the M8 Competition. With over 600 horsepower and exquisite interior details, it represents the ultimate in automotive engineering.",
      author: "Admin"
    },
    {
      id: 6,
      image: Blog2,
      imageAlt: "BMW iX Electric SUV",
      date: "June 18, 2024",
      title: "BMW iX: Redefining Electric Mobility with Style",
      content: "The future of mobility is here with the BMW iX. This all-electric SUV combines sustainable performance with cutting-edge technology and distinctive BMW design language.",
      author: "Admin"
    },
    {
      id: 7,
      image: Blog3,
      imageAlt: "BMW 7 Series",
      date: "July 5, 2024",
      title: "2024 BMW 7 Series: The New Standard in Luxury Sedans",
      content: "With its bold design and advanced technology features, the new BMW 7 Series raises the bar for luxury sedans. Explore the innovative features that make it stand out in its class.",
      author: "Admin"
    },
    {
      id: 8,
      image: Blog4,
      imageAlt: "BMW X3 M Competition",
      date: "July 22, 2024",
      title: "BMW X3 M Competition: Compact SUV with Supercar Performance",
      content: "Don't let its size fool you - the BMW X3 M Competition delivers blistering performance in a practical package. Discover how this compact SUV achieves supercar-level thrills.",
      author: "Admin"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

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
          {currentPosts.map((post) => (
            <div onClick={() => {redirecToBlog(post.id)}} className="mb-10 cursor-pointer" key={post.id}>
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

          {/* Pagination Component */}
          <div className="flex items-center justify-center mt-10 text-sm  plus-jakarta-sans-400 mb-5">
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => goToPage(index + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentPage === index + 1
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`w-11 h-8 flex items-center border border-slate-200 justify-center  rounded-2xl bg-white text-gray-800 ${
                  currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
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