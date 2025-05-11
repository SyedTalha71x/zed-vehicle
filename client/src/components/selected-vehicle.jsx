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
    <>
    <div className="flex flex-col">
      <div className="p-4 rounded-lg border border-gray-400">
        <h3 className="text-lg plus-jakarta-sans-400 mb-4">Selected Vehicles</h3>

        {/* Added overflow-x-auto for horizontal scrolling on small screens */}
        <div className="space-y-3 plus-jakarta-sans-400 overflow-x-auto">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`flex items-center justify-between py-2 border-b border-gray-100 last:border-0 rounded px-2 
                ${activeVehicleId === vehicle.id ? 'bg-[#E9E6E6] w-full' : ''}`}
              onClick={() => setActiveVehicleId(vehicle.id)}
            >
              <div className="flex items-center">
                <span className="w-6 h-6 flex items-center justify-center text-gray-500 mr-4">{vehicle.id}</span>
                <div>
                  <h4 className="plus-jakarta-sans-400">{vehicle.name}</h4>
                  <p className="text-sm text-gray-500 plus-jakarta-sans-400">Model/{vehicle.model}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-6 plus-jakarta-sans-400">${vehicle.price}</span>
                <button 
                  className="text-red-500 text-sm plus-jakarta-sans-400"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
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
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl plus-jakarta-sans">Quantity</h3>
          <p className="text-lg plus-jakarta-sans-400">{quantity}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SelectedVehicles