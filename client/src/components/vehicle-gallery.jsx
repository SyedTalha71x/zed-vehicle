import Car1 from '../../public/dashboard-images/car1-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg.svg'
import Car2 from '../../public/dashboard-images/car3-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg.svg'
import Car3 from '../../public/dashboard-images/car10-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg.svg'
import Car4 from '../../public/dashboard-images/car8-qgcqjcne9diluefjkeisezftm5aptwpff8w6kr9wn0.jpg.svg'
import Car5 from '../../public/dashboard-images/car11-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg.svg'

const VehicleGallery = () => {
  return (
    <div className="flex md:flex-row flex-col gap-6 mb-6">
      <div className="md:w-3/5 w-full">
        <img src={Car4} alt="Main Car" className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="md:w-2/5 w-full grid grid-rows-2 grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-lg">
          <img src={Car1} alt="Car 1" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img src={Car2} alt="Car 2" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img src={Car3} alt="Car 3" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img src={Car5} alt="Car 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default VehicleGallery