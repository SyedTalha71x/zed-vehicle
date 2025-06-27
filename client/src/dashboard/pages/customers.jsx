import {
    ArrowDown,
    ArrowRight,
    Info,
    Laptop,
    ShoppingCart,
    Smartphone,
    Tablet,
    UserRound,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ShipmentStatisticsChart from "../components/shipment-chart";
import PieChart from "../components/pie-chart";
import BarChart from "../components/bar-chart";
import ProductChart from "../components/product-chat";
const Customers = () => {
    const labels = [
        { name: "Mobile", value: 29.4, color: "#FFA84B", icon: Smartphone },
        { name: "Tablet", value: 30.1, color: "#A7D2FF", icon: Tablet },
        { name: "Desktop", value: 40.5, color: "#A3BCFF", icon: Laptop },
    ];
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
                <div className="w-full h-full">
                    <div className="flex justify-end">
                        <button
                            className="font-medium bg-[#E46320] shadow-[#E46320]  shadow-md  text-sm cursor-pointer rounded-md py-2 px-4 text-white "
                        >
                            + Add New Customer
                        </button>
                    </div>
                    <div className="w-full grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
                        <div className="col-span-1 md:col-span-2 lg:col-span-2  lg:row-span-2  bg-white rounded-xl shadow-sm ">
                            <div className="w-full space-y-5 p-5">
                                <div className="flex justify-between items-center">
                                    <p className="font-medium text-[#303030]">
                                        Overview
                                    </p>
                                    <div>
                                        <select
                                            name="duration "
                                            className="border border-[#D4D4D4] rounded-md font-medium text-[#303030] bg-white outline-none shadow-md px-2 py-2 text-xs"
                                        >
                                            <option value="all-time">
                                                All Time
                                            </option>
                                            <option value="this-year">
                                                This Year
                                            </option>
                                            <option value="this-month">
                                                This Month
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="bg-[#EBEBEB] flex-col sm:flex-row w-full p-2 rounded-2xl mt-4 flex gap-4 items-center">
                                    <div className="flex items-end gap-3 bg-white rounded-xl py-4 px-6 w-full sm:w-1/2">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 text-white bg-[#FFB800] rounded-full">
                                                <UserRound className="size-5" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-[#8A8A8A] font-medium text-sm">
                                                        Customer
                                                    </p>
                                                    <Info className="size-4 text-[#303030]" />
                                                </div>
                                                <h2 className="font-black text-4xl">
                                                    1,368
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="flex items-end h-full  text-[#EF4D2F] text-xs">
                                            <ArrowDown className="size-4" />
                                            37.8%
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-3  py-4 px-6 w-full sm:w-1/2">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 text-white bg-[#51C0FF] rounded-full">
                                                <ShoppingCart className="size-5" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-[#8A8A8A] font-medium text-sm">
                                                        Income
                                                    </p>
                                                    <Info className="size-4 text-[#303030]" />
                                                </div>
                                                <h2 className="font-black text-4xl">
                                                    68,192
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="flex items-end h-full  text-[#32A06E] text-xs">
                                            <ArrowDown className="size-4" />
                                            37.8%
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <p className=" text-sm text-[#8A8A8A]">
                                        Welcome{" "}
                                        <span className="text-[#303030]">
                                            291 customers
                                        </span>{" "}
                                        with a personal message 😎{" "}
                                    </p>
                                    <button className="border border-[#D4D4D4] rounded-xl  font-bold text-[#303030] bg-white outline-none shadow-md px-4 py-2 text-sm">
                                        Send message
                                    </button>
                                </div>
                                <div className="flex justify-between flex-wrap">
                                    <CustomerCard
                                        name={"Annette Black"}
                                        picture={
                                            "/dashboard-images/staff-3.jpg"
                                        }
                                    />
                                    <CustomerCard
                                        name={"Jane Cooper"}
                                        picture={
                                            "/dashboard-images/staff-1.jpg"
                                        }
                                    />
                                    <CustomerCard
                                        name={"Courtney Henry"}
                                        picture={
                                            "/dashboard-images/staff-2.jpg"
                                        }
                                    />
                                    <Link to={"all"}>
                                        <div className="p-3 relative flex items-center flex-col gap-3">
                                            <div className="rounded-full bg-[#F1F1F1] text-[#303030] overflow-hidden size-24 flex items-center justify-center">
                                                <ArrowRight />
                                            </div>
                                            <p className="text-sm text-[#303030] font-bold">
                                                View All
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1 lg:row-span-1 bg-white rounded-xl shadow-sm ">
                            <div className="w-full p-5 space-y-5">
                                <p className="text-[#303030] font-medium">
                                    Refund requests
                                </p>
                                <div className="flex items-start  gap-2 ">
                                    <div className="p-2 rounded-full bg-[#FFB800]">
                                        <ShoppingCart className="size-5 text-white" />
                                    </div>
                                    <p className=" text-sm text-[#8A8A8A]">
                                        You have{" "}
                                        <span className="text-[#303030]">
                                            52 open refund requests
                                        </span>{" "}
                                        to action. This includes{" "}
                                        <span className="text-[#303030]">
                                            {" "}
                                            8 new requests.
                                        </span>{" "}
                                        👀
                                    </p>
                                </div>
                                <button className="border w-full border-[#D4D4D4] rounded-xl  font-bold text-[#303030] bg-white outline-none shadow-md px-2 py-2 text-sm">
                                    Review refund requests
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1  lg:row-span-2 bg-white rounded-xl shadow-sm ">
                            <div className="w-full p-5 space-y-5">
                                <p className="text-[#303030] font-medium">
                                    Top device
                                </p>
                                <PieChart />
                                <div className="flex justify-around text-sm">
                                    {labels.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col  items-center space-y-1"
                                        >
                                            <div
                                                className="text-2xl"
                                                style={{ color: item.color }}
                                            >
                                                <item.icon />
                                            </div>
                                            <span className="text-gray-500">
                                                {item.name}
                                            </span>
                                            <span className="font-bold text-xl">
                                                {item.value}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-2 lg:row-span-2  bg-white rounded-xl shadow-sm ">
                            <div className="w-full p-5 space-y-5 ">
                                <div className="flex justify-between items-center">
                                    <p className="font-medium text-[#303030]">
                                        Product views
                                    </p>
                                    <div>
                                        <select
                                            name="duration "
                                            className="border border-[#D4D4D4] rounded-md font-medium text-[#303030] bg-white outline-none shadow-md px-2 py-2 text-xs"
                                        >
                                            <option value="all-time">
                                                All Time
                                            </option>
                                            <option value="this-year">
                                                This Year
                                            </option>
                                            <option value="this-month">
                                                This Month
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <ProductChart />
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1 row-span-1  bg-white rounded-xl shadow-sm ">
                            <div className="w-full p-5 space-y-5">
                                <p className="text-[#303030] font-medium">
                                    Top countries
                                </p>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;

const CustomerCard = ({ name, picture }) => (
    <div className="p-3 relative flex flex-col items-center gap-3">
        <div className="rounded-full overflow-hidden w-24">
            <img src={picture} alt="profile Pic" />
        </div>
        <p className="text-sm text-[#303030] font-bold">{name}</p>
    </div>
);
