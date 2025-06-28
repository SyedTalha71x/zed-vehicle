import { ArrowRight, MapPin } from "lucide-react";

const ShipmentCard = ({
    shipmentNo,
    start,
    end,
    id,
    selectedShipment,
    setSelectedShipment,
}) => (
    <div
        onClick={() => setSelectedShipment(id)}
        key={id}
        className={`${
            id === selectedShipment
                ? "border-[#E46320] shadow-[#E463201A] "
                : "border-[#1A2F5712] shadow"
        } cursor-pointer border-2   w-full rounded-lg`}
    >
        <div className="flex items-center justify-between p-2">
            <div className="flex flex-col gap-3">
                <h4 className="text-[#7D7D91] text-sm">Shipment number</h4>
                <h2 className="font-medium text-lg">{shipmentNo}</h2>
                <div className="text-[#23293D] flex gap-2 items-center text-xs font-medium">
                    <div className="flex items-center gap-1">
                        <span className="p-1.5 flex items-center justify-center bg-[#E8F9EE] rounded-full">
                            <span className="bg-[#0EBC93] p-1 rounded-full" />
                        </span>
                        <p>{start} </p>
                    </div>
                    <ArrowRight className="size-4 text-[#718096]" />
                    <div className="flex items-center gap-1">
                        <span className="p-1.5 flex items-center justify-center bg-[#4E87F81A] rounded-full">
                            <MapPin
                                className="text-[#E46320] size-3"
                                fill="#E46320"
                            />
                        </span>
                        <p>{end} </p>
                    </div>
                </div>
            </div>
            <div className="w-44">
                <img
                    src="/dashboard-images/truck.png"
                    alt="Truck Icon"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    </div>
);


export default ShipmentCard