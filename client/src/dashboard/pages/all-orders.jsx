import React, { useEffect, useState } from "react";
import DataTable from "../components/table";
import { Link, useParams } from "react-router-dom";
import { Box, Eye, Search, Settings2, Share } from "lucide-react";
import { trackingOrderData } from "../libs/dummy-data";

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
                    to={`/dashboard/orders/${record.orderId}`}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    <Eye className="size-4" />
                </Link>
            </div>
        ),
    },
];
const AllOrders = () => {
    const { status } = useParams();
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        if (status && status !== "revenue") {
            const filtered = trackingOrderData.filter(
                (order) =>
                    order.status.toLocaleLowerCase() ===
                    status.split("-").join(" ").toLocaleLowerCase()
            );
            setFilteredOrders(filtered);
        } else {
            setFilteredOrders(trackingOrderData);
        }
    }, [status]);

    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div
                    className="w-full h-full flex p-4
                        bg-white border-2 border-[#1A2F570F] mb-5 shadow  items-center justify-between rounded-xl gap-5"
                >
                    {status === "revenue" ? (
                        <p className="font-medium">Total Broker Revenue</p>
                    ) : (
                        <p className="capitalize font-medium">
                            Total {status === "/" ? "" : status} Orders
                        </p>
                    )}

                    {status === "revenue" ? (
                        <p className="font-black text-lg">
                            $
                            {filteredOrders.reduce((acc, item) => {
                                return (acc += item.brokerRevenue);
                            }, 0)}
                        </p>
                    ) : (
                        <p className="font-black text-lg">
                            {" "}
                            {filteredOrders.length}
                        </p>
                    )}
                </div>
                <div
                    className="w-full h-full flex flex-col p-4
                        bg-white border-2 border-[#1A2F570F] shadow rounded-xl gap-5"
                >
                    <div className="flex flex-wrap justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1 border border-[#292D3214]  shadow rounded-lg">
                                <Box className="size-5" color="#307EF3" />
                            </div>
                            <p className="font-medium capitalize flex items-center">
                                {status} Orders
                            </p>
                        </div>
                        <div className="flex items-center flex-wrap gap-2">
                            <div className=" w-44 text-sm flex items-center gap-1 px-2 py-2 rounded-lg focus:outline-none border border-[#0000001A] ">
                                <Search className="size-5" />
                                <input
                                    type="search"
                                    placeholder="Search.."
                                    className="w-full text-[#3A4656] outline-none text-sm"
                                />
                            </div>
                            <div className="flex items-center gap-2">
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
                    </div>
                    <DataTable
                        columns={trackingOrderColumns}
                        data={filteredOrders}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllOrders;
