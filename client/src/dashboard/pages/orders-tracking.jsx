import React, { useState } from "react";
import DataTable from "../components/table";
import { trackingOrderData } from "../libs/table-data";
import {
    ArrowDownRight,
    ArrowUpRight,
    Box,
    Boxes,
    CircleCheckBig,
    Eye,
    Truck,
} from "lucide-react";
import ShipmentStatisticsChart from "../components/shipment-chart";
import { Link } from "react-router-dom";

const trackingStats = [
    {
        title: "Total Shipments",
        value: 6521,
        change: "+23.5%",
        changeType: "increase",
        Icon: Box, // Lucide Icon
    },
    {
        title: "In Transit",
        value: 1800,
        change: "-6%",
        changeType: "decrease",
        Icon: Boxes, // Lucide Icon
    },
    {
        title: "On Delivery",
        value: "1000",
        change: "-7.3%",
        changeType: "decrease",
        Icon: Truck, // Lucide Icon
    },
    {
        title: "Delivered",
        value: 1840,
        change: "+23.1%",
        changeType: "increase",
        Icon: CircleCheckBig, // Lucide icon
    },
];

const columns = [
    {
        title: "Order Id",
        dataIndex: "orderId",
    },
    {
        title: "Date of Loading",
        dataIndex: "shippingDate",
    },
    {
        title: "Category",
        dataIndex: "category",
    },
    {
        title: "Route",
        dataIndex: "route",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (text) => (
            <span
                className={`py-1 text-xs px-2 rounded-sm font-medium ${
                    text === "Pending"
                        ? " text-[#DBAA00]"
                        : text === "In Progress"
                        ? " text-[#3D81DB]"
                        : text === "Cancelled"
                        ? " text-[#df2100]"
                        : " text-[#1C8C6E]"
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

const OrdersTracking = () => {
    const [period, setPeriod] = useState("1Y");
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2  w-full h-full bg-white rounded-lg shadow p-4 ">
                        <div className="w-full h-full">
                            <div className="w-full flex mb-4 justify-between">
                                <p className="font-medium">Tracking List</p>
                                <p className="font-medium text-[#F7C761]">
                                    See All
                                </p>
                            </div>
                            <DataTable
                                size="small"
                                columns={columns}
                                data={trackingOrderData.slice(0, 6)}
                                pagination={false}
                            />
                        </div>
                    </div>
                    <div className="md:col-span-1 w-full h-full bg-white rounded-lg shadow p-4 ">
                        <div className="w-full h-full flex flex-col gap-3">
                            <h2 className="text-[#525252] font-medium">
                                Now On The Way
                            </h2>
                            <h4 className="font-medium">
                                ID Order: TRK - 345-678
                            </h4>
                            <div className="flex justify-between items-center text-sm  text-[#A3A3A3]">
                                <p>Total: 10 Packages </p>
                                <p>Jakara - Yogyakarta</p>
                            </div>
                            <div>
                                <img src="/dashboard-images/map2.png" alt="" />
                            </div>
                            <div className="flex justify-between flex-wrap gap-3 mt-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs capitalize text-[#7D7D91]">
                                        Distance
                                    </p>
                                    <p className=" text-sm  font-medium">
                                        25km
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs capitalize text-[#7D7D91]">
                                        Time Left
                                    </p>
                                    <p className=" text-sm  font-medium">
                                        3 Hours
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs capitalize text-[#7D7D91]">
                                        Weight
                                    </p>
                                    <p className=" text-sm  font-medium">
                                        3K lbs
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs capitalize text-[#7D7D91]">
                                        Volume
                                    </p>
                                    <p className=" text-sm  font-medium">
                                        5,5K In³
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 w-full h-full bg-white rounded-lg shadow p-4 ">
                        <div className="flex gap-5 md:justify-between items-center justify-center flex-wrap  ">
                            <div className="flex items-center gap-4">
                                <p className="font-medium">Tracking List</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <span className="bg-[#F7C761] p-1 rounded-full" />
                                        <p className="text-[#6F6C99] text-xs">
                                            Completed
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="bg-[#EDE9C8] p-1 rounded-full" />
                                        <p className="text-[#6F6C99] text-xs">
                                            Reject
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-fit text-[#3A3F51] flex items-center gap-2 bg-[#F7F7F8] rounded-full px-2 md:px-4 py-1  ">
                                {["1D", "1M", "3M", "1Y"].map((prd) => (
                                    <button
                                        onClick={() => setPeriod(prd)}
                                        key={prd}
                                        className={` px-3 py-1 text-xs  cursor-pointer ${
                                            prd === period
                                                ? " bg-[#F7C761] rounded-full text-white"
                                                : ""
                                        }`}
                                    >
                                        {prd}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <ShipmentStatisticsChart />
                    </div>
                    <div className="md:col-span-1 w-full h-full">
                        <div className="w-full h-full grid grid-cols-2 gap-3">
                            {trackingStats?.map((trackingStat, idx) => (
                                <Card key={idx} {...trackingStat} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersTracking;

const Card = ({ title, Icon, changeType, value, change }) => {
    const getSvgIcon = (changeType) => {
        if (changeType === "increase") {
            return (
                <svg
                    width="90"
                    height="28"
                    viewBox="0 0 90 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M87.3028 6.79999H89V27.5L1 27.5V9.32023L3.54588 15.6202L4.55734 18.1402H5.74313L8.11468 15.6202L9.77478 18.1403L14.7551 18.1405L17.3638 15.6203L18.7867 11.8397L20.8578 13.7302L22.7248 15.6202L23.3078 18.5L24.4936 18.1402H25.9496L28.6651 9.32023L29.5138 11.8402L30.8716 9.32023L31.8899 13.7302L34.6055 6.17024L36.133 9.32023H39.0184L42.0734 3.02025L43.9404 6.17024L46.3991 4.28L49.395 9.31999L51.3211 0.500001L52.7151 9.31999L62.0138 13.1L63.2018 10.58H64.3899L67.1055 6.79999H69.8211L70.8395 10.58L74.9128 3.01999L76.6101 13.1L77.4587 9.31999H79.3257L81.0229 0.500001L82.7202 8.05999L83.5688 4.28H85.7752L87.3028 6.79999Z"
                        fill="url(#paint0_linear_421_3259)"
                        fill-opacity="0.16"
                    />
                    <path
                        d="M89 6.79999H87.3028L85.7752 4.28H83.5688L82.7202 8.05999L81.0229 0.500001L79.3257 9.31999H77.4587L76.6101 13.1L74.9128 3.01999L70.8395 10.58L69.8211 6.79999H67.1055L64.3899 10.58H63.2018L62.0138 13.1L52.7151 9.31999L51.3211 0.500001L49.395 9.31999L46.3991 4.28L43.9404 6.17024L42.0734 3.02025L39.0184 9.32023H36.133L34.6055 6.17024L31.8899 13.7302L30.8716 9.32023L29.5138 11.8402L28.6651 9.32023L25.9496 18.1402H24.4936L23.3078 18.5L22.7248 15.6202L20.8578 13.7302L18.7867 11.8397L17.3638 15.6203L14.7551 18.1405L9.77478 18.1403L8.11469 15.6202L5.74313 18.1402H4.55735L3.54588 15.6202L1 9.32023"
                        stroke="#66C87B"
                        stroke-linecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_421_3259"
                            x1="45"
                            y1="27.5"
                            x2="45"
                            y2="0.500001"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#77B900" stop-opacity="0" />
                            <stop offset="0.809892" stop-color="#77B900" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        } else {
            return (
                <svg
                    width="90"
                    height="29"
                    viewBox="0 0 90 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.69725 7.53333H1L1 29L89 29V10.1469L86.4541 16.6802L85.4427 19.2936H84.2569L81.8853 16.6802L80.2252 19.2936L75.2449 19.2938L72.6362 16.6803L71.2133 12.7596L69.1422 14.7202L67.2752 16.6802L66.6922 19.6667L65.5064 19.2936H64.0504L61.3349 10.1469L60.4862 12.7602L59.1284 10.1469L58.1101 14.7202L55.3945 6.88025L53.867 10.1469H50.9816L47.9266 3.61359L46.0596 6.88025L43.6009 4.92L40.605 10.1467L38.6789 1L37.2849 10.1467L27.9862 14.0666L26.7982 11.4533H25.6101L22.8945 7.53333H20.1789L19.1605 11.4533L15.0872 3.61333L13.3899 14.0666L12.5413 10.1467H10.6743L8.97706 1L7.27982 8.83999L6.43119 4.92H4.22477L2.69725 7.53333Z"
                        fill="url(#paint0_linear_421_3310)"
                        fill-opacity="0.16"
                    />
                    <path
                        d="M1 7.53316H2.69725L4.22477 4.91983H6.43119L7.27982 8.83983L8.97706 0.999839L10.6743 10.1465H12.5413L13.3899 14.0665L15.0872 3.61316L19.1605 11.4532L20.1789 7.53316H22.8945L25.6101 11.4532H26.7982L27.9862 14.0665L37.2849 10.1465L38.6789 0.999839L40.605 10.1465L43.6009 4.91983L46.0596 6.88008L47.9266 3.61343L50.9816 10.1467H53.867L55.3945 6.88008L58.1101 14.7201L59.1284 10.1467L60.4862 12.7601L61.3349 10.1467L64.0504 19.2934H65.5064L66.6922 19.6665L67.2752 16.6801L69.1422 14.7201L71.2133 12.7595L72.6362 16.6802L75.2449 19.2937L80.2252 19.2934L81.8853 16.6801L84.2569 19.2934H85.4427L86.4541 16.6801L89 10.1467"
                        stroke="#ED544E"
                        stroke-linecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_421_3310"
                            x1="45"
                            y1="29"
                            x2="45"
                            y2="1"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#ED544E" stop-opacity="0" />
                            <stop offset="0.809892" stop-color="#ED544E" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        }
    };
    return (
        <div className="w-full bg-white  rounded-lg shadow p-4">
            <div className="w-full h-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                    <div className="text-[#0D062D] p-2 bg-white rounded-full border border-[#E5E5E5]">
                        <Icon
                            color="#0D062D"
                            strokeWidth={1}
                            className="size-5"
                        />
                    </div>
                    {getSvgIcon(changeType)}
                </div>
                <p className="text-[#898989] text-sm font-medium">{title}</p>
                <p className="font-medium">{value}</p>
                <div className="flex items-center gap-4">
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
                    <p className="text-[9px] text-[#7D7D91]">
                        vs. previous month
                    </p>
                </div>
            </div>
        </div>
    );
};
