import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import NavLogo from '../../public/navbar-logo.svg'
import { Link, useLocation } from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [location.pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-50 shadow-xs w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-30 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="h-20 w-auto">
              <img src={NavLogo} className="h-full w-auto" alt="Logo" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm plus-jakarta-sans-400">
              Home
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm plus-jakarta-sans-400">
              About Us
            </Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm plus-jakarta-sans-400">
              Products
            </Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm plus-jakarta-sans-400">
              Our Services
            </Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm plus-jakarta-sans-400">
              How it works
            </Link>
            <Link to="/track-order" className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm plus-jakarta-sans-400">
              Track Your Order 
            </Link>
          </div>
          <Link to={"/contact-us"}>
            <div className="hidden md:flex">
              <button className="bg-[#0B1518] text-gray-200 px-8 py-2 rounded-xl text-sm plus-jakarta-sans-400">Contact</button>
            </div>
          </Link>

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

      {/* Mobile menu - slides in from left */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white  shadow-lg transform transition-transform ease-in-out duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About Us
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Products
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Our Services
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            How it Works
          </Link>
          <Link
            to="/track-order"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Track Your Order
          </Link>
          <Link 
            to="/compliance"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Compliance & Insurance
          </Link>
          <Link to={"/contact-us"}>
            <div className="mt-4">
              <button className="bg-[#0B1518] text-gray-200 px-8 py-2 rounded-xl text-sm plus-jakarta-sans-400">Contact</button>
            </div>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 bg-opacity-25 z-40 transition-opacity duration-300 ease-in-out md:hidden" 
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  )
}

export default Navbar