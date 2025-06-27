import React, { useState } from "react";
import {
    ArrowDownLeft,
    ArrowDownRight,
    ArrowRight,
    ArrowUpLeft,
    ArrowUpRight,
    Box,
    CreditCard,
    Eye,
    Info,
    MapPin,
    Package,
    Search,
    Send,
    Settings2,
    Share,
    Truck,
    TruckElectric,
} from "lucide-react";
import DataTable from "../components/table";
import { trackingOrderData } from "../libs/table-data";
import { Link } from "react-router-dom";
const trackingOrderColumns = [
    {
        title: "Order ID",
        dataIndex: "orderId",
    },
    {
        title: "Category",
        dataIndex: "category",
    },
    {
        title: "Arrival Time",
        dataIndex: "arrivalTime",
    },
    {
        title: "Weight",
        dataIndex: "weight",
    },
    {
        title: "Route",
        dataIndex: "route",
    },
    {
        title: "Fee",
        dataIndex: "fee",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (text) => (
            <span
                className={`py-1 text-xs px-2 rounded-sm font-medium ${
                    text === "Pending"
                        ? "bg-[#F9F2E5] text-[#DBAA00]"
                        : text === "In Progress"
                        ? "bg-[#DCF3FF] text-[#3D81DB]"
                        : text === "Cancelled"
                        ? "bg-[#f5ae9cb0] text-[#df2100]"
                        : "bg-[#ECF8F0CC] text-[#1C8C6E]"
                }`}
            >
                {text}
            </span>
        ),
    },
    {
        title: "Action",
        dataIndex: "action",
        render: (_, record) => (
            <div className="flex items-center justify-center gap-2">
                <Link
                    to={`/dashboard/orders-tracking/${record.orderId}`}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    <Eye className="size-4" />
                </Link>
            </div>
        ),
    },
];
const dashboardStats = [
    {
        title: "Total Shipments",
        value: 6521,
        change: "+1.3%",
        changeType: "increase",
        icon: Truck, // Lucide icon
    },
    {
        title: "Total Order",
        value: 10105,
        change: "-2.1%",
        changeType: "decrease",
        icon: Package, // Lucide icon
    },
    {
        title: "Revenue",
        value: "$12,167",
        change: "+1.3%",
        changeType: "increase",
        icon: CreditCard, // Lucide icon
    },
    {
        title: "Delivered",
        value: 1840,
        change: "-3.1%",
        changeType: "decrease",
        icon: Send, // Lucide icon
    },
];

const shipments = [
    {
        id: 1,
        shipmentNo: "#001234ABCD",
        start: "87 Wern Ddu Lane",
        end: "15 Vicar Lane",
        details: {
            category: "Electronic",
            distance: "60.41 km",
            estimation: "1d 6h",
            weight: "25kg",
            fee: "$1,050",
        },
    },
    {
        id: 2,
        shipmentNo: "#001234ABCD",
        start: "40 Broomfield Place",
        end: "44 Helland Bridge",
        details: {
            category: "Electronic",
            distance: "60.41 km",
            estimation: "1d 6h",
            weight: "25kg",
            fee: "$1,050",
        },
    },
];

const Dashboard = () => {
    const [type, setType] = useState("overviews");
    const [selectedShipment, setSelectedShipment] = useState(1);
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
                <div className="w-full h-full">
                    <div className="flex items-center flex-wrap gap-3 justify-between">
                        <div className="bg-[#EBEEF4] p-1  font-medium text-sm rounded-md flex gap-2">
                            <button
                                onClick={() => setType("overviews")}
                                className={`px-3 py-2 cursor-pointer transition-all duration-200 ${
                                    type === "overviews"
                                        ? "bg-white text-[#23293D] rounded-md"
                                        : "text-[#3A4656]"
                                }`}
                            >
                                Overviews
                            </button>
                            <button
                                onClick={() => setType("tracking")}
                                className={`px-3 py-2 cursor-pointer transition-all duration-200 ${
                                    type === "tracking"
                                        ? "bg-white text-[#23293D]  rounded-md"
                                        : "text-[#3A4656]"
                                }`}
                            >
                                Tracking
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <select
                                name="lang"
                                className="text-sm px-2 py-2 rounded-lg focus:outline-none border border-[#0000001A] text-[#3A4656]"
                            >
                                <option value="week">Week</option>
                                <option value="yearly">Yearly</option>
                            </select>
                            <button className="font-medium bg-[#E46320] shadow-[#E46320]  shadow-md text-sm cursor-pointer rounded-md py-2 px-4 text-white ">
                                + New Shipments
                            </button>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                        {dashboardStats?.map((stats, idx) => (
                            <StatCard key={idx} {...stats} Icon={stats.icon} />
                        ))}
                    </div>
                    <div
                        className="w-full mt-5 flex flex-col md:flex-row  md:justify-between md:items-start p-2
                        bg-white border-2 border-[#1A2F570F] shadow rounded-xl gap-5"
                    >
                        <div className="w-full md:w-1/2 p-2 flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="p-1 border border-[#292D3214]  shadow rounded-lg">
                                        <TruckElectric
                                            className="size-5"
                                            color="#E46320"
                                        />
                                    </div>
                                    <p className="font-medium">
                                        Ongoing Delivery
                                    </p>
                                </div>
                                <button className="text-sm flex items-center gap-1 px-2 py-2 rounded-lg focus:outline-none border border-[#0000001A] text-[#3A4656]">
                                    <Settings2 className="size-4" />
                                    Filter
                                </button>
                            </div>
                            <div className="flex flex-col gap-4">
                                {shipments?.map((shipment) => (
                                    <ShipmentCard
                                        key={shipment.id}
                                        setSelectedShipment={
                                            setSelectedShipment
                                        }
                                        selectedShipment={selectedShipment}
                                        {...shipment}
                                    />
                                ))}
                            </div>
                        </div>
                        {shipments
                            .filter(
                                (shipment) => shipment.id === selectedShipment
                            )
                            .map(({ id, details }) => (
                                <div
                                    key={id}
                                    className="w-full md:w-1/2 p-2 flex flex-col gap-4"
                                >
                                    <div className="flex justify-between">
                                        <p className="font-medium">
                                            On the way{" "}
                                        </p>
                                        <p className="text-sm  text-[#3A4656]">
                                            26/6/2025
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="w-full h-52">
                                            <img
                                                src="/dashboard-images/map.png"
                                                alt="MAP"
                                                className="w-full h-full object-center rounded-lg"
                                            />
                                        </div>
                                        <div className="flex justify-between flex-wrap gap-3">
                                            {Object.entries(details).map(
                                                ([key, value]) => (
                                                    <div className="flex flex-col gap-1 pr-5 border-r border-[#EBECEF]">
                                                        <p className="text-xs capitalize text-[#7D7D91]">
                                                            {key}
                                                        </p>
                                                        <p className=" text-sm  font-medium">
                                                            {value}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div
                        className="w-full mt-5 flex flex-col p-4
                        bg-white border-2 border-[#1A2F570F] shadow rounded-xl gap-5"
                    >
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-1 border border-[#292D3214]  shadow rounded-lg">
                                    <Box className="size-5" color="#307EF3" />
                                </div>
                                <p className="font-medium">Tracking Order</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className=" w-44 text-sm flex items-center gap-1 px-2 py-2 rounded-lg focus:outline-none border border-[#0000001A] ">
                                    <Search className="size-5" />
                                    <input
                                        type="search"
                                        placeholder="Search.."
                                        className="w-full text-[#3A4656] outline-none text-sm"
                                    />
                                </div>
                                <button className="text-sm flex items-center gap-1 px-2 py-2 rounded-lg focus:outline-none border border-[#0000001A] text-[#3A4656]">
                                    <Settings2 className="size-4" />
                                    Filter
                                </button>
                                <button className="text-sm flex items-center gap-1 px-2 py-2 rounded-lg focus:outline-none border border-[#0000001A] text-[#3A4656]">
                                    <Share className="size-4" />
                                    Exports
                                </button>
                            </div>
                        </div>
                        <DataTable
                            columns={trackingOrderColumns}
                            data={trackingOrderData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

const StatCard = ({ title, value, change, changeType, Icon }) => (
    <div className="bg-white border-2 border-[#1A2F570F] shadow rounded-xl p-3 flex flex-col gap-2">
        <div className="flex  justify-between items-start">
            <div>
                <div className="flex items-center gap-2">
                    <h4 className="text-[#7D7D91] text-sm">{title}</h4>
                    <Info color="#7D7D9166" className="size-4" />
                </div>
                <h2 className="font-medium text-xl mt-2">{value}</h2>
            </div>
            <div className="p-2 border border-[#292D3214]  shadow rounded-lg">
                <Icon color={"#307EF3"} />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <p className="text-sm text-[#7D7D91]">Vs Last Week</p>
            <span
                className={` flex items-center gap-1 rounded-full px-2 py-0.5  ${
                    changeType === "increase"
                        ? "text-[#1C8C6E] bg-[#F0F9F3]"
                        : "bg-[#E65E5E1A] text-[#E65E5E]"
                } text-xs`}
            >
                {change}
                {changeType === "increase" ? (
                    <ArrowUpRight className="size-4" />
                ) : (
                    <ArrowDownRight className="size-4" />
                )}
            </span>
        </div>
    </div>
);

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
