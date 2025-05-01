import { useState } from "react"
import { Menu, X } from "lucide-react"
import NavLogo from '../../public/navbar-logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-50 shadow-xs w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-30 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="h-20 w-auto">
              <img src={NavLogo} className="h-full w-auto" alt="Logo" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="/" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm font-medium">
              Home
            </a>
            <a href="/services" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm font-medium">
              About Us
            </a>
            <a href="/portfolio" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm font-medium">
              Products
            </a>
            <a href="/our-team" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm font-medium">
              Our Services
            </a>
            <a href="/testimonials" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm font-medium">
              How it works
            </a>
            <a href="/book-consultation" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm font-medium">
              Track Your Order 
            </a>
          </div>

          <div className="hidden md:flex">
            <button className="bg-[#0B1518] text-gray-300 px-4 py-2 rounded-xl text-sm font-medium">Contact</button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Portfolio
          </a>
          <a
            href="/our-team"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Our Team
          </a>
          <a
            href="/testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Testimonials
          </a>
          <a
            href="/book-consultation"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Book Consultation
          </a>
          <div className="mt-4">
            <button className="w-full bg-black text-white px-4 py-2 rounded-md text-sm font-medium">Contact</button>
          </div>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 bg-opacity-25 z-40 md:hidden" onClick={toggleMenu}></div>}
    </nav>
  )
}

export default Navbar