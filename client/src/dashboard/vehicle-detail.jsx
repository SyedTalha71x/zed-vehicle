/* eslint-disable no-unused-vars */

import { useState } from "react"
import VehicleGallery from "../components/vehicle-gallery"
import SelectedVehicles from "../components/selected-vehicle"
import CarOverview from "../components/car-overview"

const VehicleDetail = () => {
  const [quantity, setQuantity] = useState(21)

  return (
    <div className="p-4 md:p-8 ">
      <header className="mb-8">
        <h1 className="text-xl font-normal text-gray-800">
          Good morning, <span className="font-semibold">Jhordan Stev!</span>
        </h1>
      </header>

      <h2 className="text-lg font-medium text-gray-800 mb-6">Vehicle Detail</h2>

      <VehicleGallery />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SelectedVehicles />
        
        <div className="space-y-6">
          <CarOverview />

         
        </div>
      </div>
    </div>
  )
}

export default VehicleDetail
