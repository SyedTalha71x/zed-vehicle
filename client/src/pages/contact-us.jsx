import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useRef, useState, useEffect } from "react"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function App() {
  const mapRef = useRef(null)
  const [selectedOffice, setSelectedOffice] = useState(0)
  
  const offices = [
    {
      city: "San Francisco",
      address: "45 Dewey Road, San Francisco, CA 94116, USA",
      email: "sf@gocare.com",
      phone: "+1 650 123 456",
      position: [37.7749, -122.4194]
    },
    {
      city: "New York",
      address: "123-240 Wilson Ave, Brooklyn, NY 11237, USA",
      email: "ny@gocare.com",
      phone: "+1 756 123 456",
      position: [40.7128, -73.9352]
    },
    {
      city: "London",
      address: "127-143 Borough High St, London SE1 1NP, UK",
      email: "ldn@gocare.com",
      phone: "+76 222 333 888",
      position: [51.5074, -0.1278]
    },
  ]

  const scrollToMap = (officeIndex) => {
    setSelectedOffice(officeIndex)
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  useEffect(() => {
    if (mapRef.current && window.L) {
      const mapInstance = mapRef.current.leafletMap
      if (mapInstance) {
        mapInstance.setView(offices[selectedOffice].position, 13)
      }
    }
  }, [selectedOffice])

  return (
    <div className="min-h-screen">
      <header className="py-6 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="font-medium text-indigo-600">Contact Us</span>
          </div>
          <h1 className="text-3xl plus-jakarta-sans text-gray-900 mt-2">Contact Us</h1>
        </div>
      </header>

      <div 
        ref={mapRef}
        className="max-w-7xl mx-auto w-full h-[400px] border border-gray-200 relative" 
        style={{ zIndex: 0 }}
      >
        <MapContainer 
          center={offices[selectedOffice].position} 
          zoom={13} 
          style={{ height: "100%", width: "100%" }}
          zoomControl={true}
          className="leaflet-container"
          ref={(map) => {
            if (map && mapRef.current) {
              mapRef.current.leafletMap = map
            }
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {offices.map((office, index) => (
            <Marker key={index} position={office.position}>
              <Popup>
                <div>
                  <h3 className="font-medium">{office.city} Office</h3>
                  <p className="text-sm text-gray-600">{office.address}</p>
                  <p className="text-sm text-blue-600 mt-1">{office.email}</p>
                  <p className="text-sm text-gray-700">{office.phone}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-6">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-800 mb-6 plus-jakarta-sans-400">
                Feel free to reach out to us with any questions or inquiries. We're here to help!
              </p>
              <div className="grid grid-cols-1 gap-6 plus-jakarta-sans-400">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-[#FFFFFF] outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-[#FFFFFF] outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-[#FFFFFF] outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-[#FFFFFF] outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Message sent!')
                    }}
                    className="px-6 py-2 bg-[#FF3F25] text-white text-sm plus-jakarta-sans-400 cursor-pointer font-medium rounded-3xl hover:bg-red-600 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 border border-gray-200 rounded-xl">
                <h3 className="text-lg plus-jakarta-sans text-gray-900 mb-4">Contact Details</h3>
                <div className="text-gray-800 text-sm plus-jakarta-sans-400">
                  <p>
                    Etiam pharetra egestas interdum blandit viverra morbi consequat mi non bibendum egestas quam egestas
                    nulla.
                  </p>
                </div>
                <div className="space-y-4 plus-jakarta-sans-400 mt-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-sm text-gray-900">
                      <p className="plus-jakarta-sans-400">Address</p>
                      <p className="plus-jakarta-sans-400 text-sm">
                        123 Market Street, San Francisco, CA 94105, United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-sm text-gray-900">
                      <p className="plus-jakarta-sans-400">Email</p>
                      <p className="plus-jakarta-sans-400 text-sm">info@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-sm text-gray-900">
                      <p className="plus-jakarta-sans-400">Phone</p>
                      <p className="plus-jakarta-sans-400 text-sm">+1 (415) 555-1234</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 plus-jakarta-sans-400">
                  <p className="text-sm plus-jakarta-sans-400 text-gray-900 mb-3">Follow</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-800 cursor-pointer hover:text-gray-700">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-800 cursor-pointer hover:text-gray-700">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-800 cursor-pointer hover:text-gray-700">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl plus-jakarta-sans text-gray-900 mb-8">Our Offices</h2>
          <div className="grid grid-cols-1 plus-jakarta-sans-400 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base font-medium">{office.city}</h3>
                <p className="text-sm text-gray-600">
                  {office.address.split(', ').slice(0, -1).join(', ')}
                  <br />
                  {office.address.split(', ').slice(-1)[0]}
                </p>
                <button
                  onClick={() => scrollToMap(index)}
                  className="text-sm text-blue-600 flex items-center cursor-pointer hover:text-blue-800 transition-colors"
                >
                  See on Map
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <div className="flex items-center gap-3">
                  <div className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App