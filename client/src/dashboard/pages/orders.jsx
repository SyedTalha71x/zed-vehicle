import React, { useState } from "react";
import DataTable from "../components/table";
import { trackingOrderData, trackingStats } from "../libs/dummy-data";
import { Eye, Search } from "lucide-react";
import ShipmentStatisticsChart from "../components/shipment-chart";
import { Link } from "react-router-dom";
import TrackingCard from "../components/tracking-card";

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
        title: "Arrival Time",
        dataIndex: "arrivalTime",
    },
    {
        title: "Category",
        dataIndex: "category",
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
        title: "Order Amount",
        dataIndex: "orderAmount",
        render: (text) => <span className="text-blue-500">${text}</span>,
    },
    {
        title: "Broker Revenue",
        dataIndex: "brokerRevenue",
        render: (text) => <span className="text-blue-500">${text}</span>,
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
                    to={`/dashboard/orders/${record.orderId}`}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    <Eye className="size-4" />
                </Link>
            </div>
        ),
    },
];

const Orders = () => {
    const [period, setPeriod] = useState("1Y");
    const [searchValue, setSearchValue] = useState("");
    const searchableColumns = ["orderId", "category", "route", "status"];

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div className="w-full h-full grid grid-cols-1  gap-4">
                    <div className="col-span-1 w-full h-full">
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {trackingStats?.map((trackingStat, idx) => (
                                <TrackingCard key={idx} {...trackingStat} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 w-full h-full bg-white rounded-lg shadow p-4 ">
                        <div className="w-full h-full">
                            <div className="w-full flex mb-4 gap-4 flex-wrap justify-between">
                                <p className="font-medium">Tracking List</p>
                                <div className="flex items-center gap-2 ">
                                    <div className="w-44 text-sm flex items-center gap-1 px-2 py-2 rounded-lg focus-within:ring-2 focus-within:ring-blue-200 border border-[#0000001A]">
                                        <Search className="size-5 text-gray-400" />
                                        <input
                                            type="search"
                                            placeholder="Search orders..."
                                            value={searchValue}
                                            onChange={handleSearchChange}
                                            className="w-full text-[#3A4656] outline-none text-sm placeholder:text-gray-400"
                                        />
                                    </div>
                                    <Link
                                        to={"/dashboard/all-orders"}
                                        className="font-medium text-[#E46320]"
                                    >
                                        See All
                                    </Link>
                                </div>
                            </div>
                            <DataTable
                                size="small"
                                searchableColumns={searchableColumns}
                                searchValue={searchValue}
                                columns={columns}
                                data={trackingOrderData.slice(0, 6)}
                                pagination={false}
                            />
                        </div>
                    </div>
                    {/* <div className="md:col-span-1 w-full h-full bg-white rounded-lg shadow p-4 ">
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
                    </div> */}
                    <div className="col-span-1 w-full h-full bg-white rounded-lg shadow p-4 ">
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
                </div>
            </div>
        </div>
    );
};

export default Orders;
