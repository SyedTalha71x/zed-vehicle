/* eslint-disable no-unused-vars */
import { useState } from "react"

const SelectedVehicles = () => {
  const [quantity, setQuantity] = useState(21)
  const [activeVehicleId, setActiveVehicleId] = useState(1)

  const vehicles = [
    { id: 1, name: "Range Rover", model: "2023", price: 27272 },
    { id: 2, name: "Range Rover", model: "2023", price: 27272 },
    { id: 3, name: "Range Rover", model: "2023", price: 27272 },
  ]

  return (
    <div className="flex flex-col">
      <div className="p-4 rounded-lg border border-gray-400">
        <h3 className="text-lg md:text-lg plus-jakarta-sans-400 mb-4">Selected Vehicles</h3>

        <div className="space-y-3 plus-jakarta-sans-400 overflow-x-auto">
          <div className="min-w-[360px]"> {/* Minimum width to ensure content doesn't get squeezed */}
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`flex items-center justify-between py-2 border-b border-gray-100 last:border-0 rounded px-2 
                  ${activeVehicleId === vehicle.id ? 'bg-[#E9E6E6]' : ''}`}
                onClick={() => setActiveVehicleId(vehicle.id)}
              >
                <div className="flex items-center flex-shrink-0">
                  <span className="w-6 h-6 flex items-center justify-center text-gray-500 mr-2 md:mr-4">{vehicle.id}</span>
                  <div>
                    <h4 className="plus-jakarta-sans-400 text-sm md:text-base">{vehicle.name}</h4>
                    <p className="text-xs md:text-sm text-gray-500 plus-jakarta-sans-400">Model/{vehicle.model}</p>
                  </div>
                </div>
                <div className="flex items-center ml-2 md:ml-0 flex-shrink-0">
                  <span className="font-medium text-sm md:text-base mr-2 md:mr-6 plus-jakarta-sans-400">${vehicle.price.toLocaleString()}</span>
                  <button 
                    className="text-red-500 text-xs md:text-sm plus-jakarta-sans-400 whitespace-nowrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add remove logic here
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-xl plus-jakarta-sans">Quantity</h3>
          <p className="text-base md:text-lg plus-jakarta-sans-400">{quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default SelectedVehicles