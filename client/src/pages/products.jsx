import { useState } from "react"
import ServicePicture from "../../public/Frame 427320605.svg"
import Image1 from '../../public/image 15.png'
import Image2 from '../../public/image 15 (1).png'
import Image3 from '../../public/image 15 (2).png'
import Image4 from '../../public/image 15 (3).png'
import Image5 from '../../public/image 15 (4).png'

const categories = [
  {
    id: 1,
    title: "Minerals & Raw Materials",
    image: Image1,
    link: "#",
  },
  {
    id: 2,
    title: "Heavy Machinery & Equipment",
    image: Image2,
    link: "#",
  },
  {
    id: 3,
    title: "Electronics & Appliances",
    image: Image3,
    link: "#",
  },
  {
    id: 4,
    title: "Automotive Parts",
    image: Image4,
    link: "#",
  },
  {
    id: 5,
    title: "Consumer Goods",
    image: Image5,
    link: "#",
  },
]

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  // Calculate which categories to show based on active index
  // Showing 3 categories at a time
  const visibleCategories = categories.slice(activeIndex, activeIndex + 3)

  // If we don't have enough categories to show, add from the beginning
  if (visibleCategories.length < 3) {
    visibleCategories.push(...categories.slice(0, 3 - visibleCategories.length))
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-500 tracking-wider">
            <span className="text-blue-600">Home</span> / Products
          </p>
          <h1 className="text-2xl plus-jakarta-sans text-gray-900 mt-2">Products</h1>
        </div>

        <div className="mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center md:flex-row flex-col">
              <h2 className="text-2xl md:w-3/2 sm:text-3xl plus-jakarta-sans text-gray-900 mb-4">
                Our Export Products - Global Sourcing Solutions
              </h2>
              <p className="text-gray-600 mb-4 plus-jakarta-sans-400">
                We source and export a wide range of products to meet the diverse needs of businesses worldwide. Our
                expertise and network enable us to deliver quality goods at competitive prices, with reliable service
                every step of the way. We also source *used* products such as vehicles and machinery.
              </p>
            </div>

            <div className="mt-10">
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
        className="py-10 px-8 bg-gradient-to-b from-[#FFFFFF] via-[#E6DEDEA7] to-[#FFFFFF] relative"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
          backgroundImage: "linear-gradient(to bottom, #FFFFFF, #E6DEDEA7, #FFFFFF)",
        }}
      >
        <div className="max-w-7xl mx-auto pt-8 pb-4">
          <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">Minerals & Raw Materials</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleCategories.map((category) => (
              <div
                key={category.id}
                className="plus-jakarta-sans-400 overflow-hidden"
              >
                <div className="rounded-lg overflow-hidden h-64"> {/* Fixed height for consistent image sizing */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white p-4 rounded-b-lg shadow-sm">
                  <h3 className="font-medium text-gray-900">{category.title}</h3>
                  <a href={category.link} className="block text-blue-600 text-sm mt-1 underline">
                    Show more
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {categories.slice(0, categories.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                  activeIndex === index ? "bg-red-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products