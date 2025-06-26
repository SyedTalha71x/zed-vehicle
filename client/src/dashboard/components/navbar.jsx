import { Bell, Bolt, Menu, Search } from "lucide-react";
import React from "react";

const Navbar = ({ setIsSidebarOpen }) => {
    return (
        <div className="w-full h-14 sticky z-50 top-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="w-full h-full flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                    <button
                        className="lg:hidden outline-none"
                        onClick={() => setIsSidebarOpen((prev) => !prev)}
                    >
                        <Menu />
                    </button>
                    <h2 className="font-medium text-xl text-[#0B131B]">
                        Dashboard
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <select
                        name="lang"
                        className="text-sm px-2 py-1 rounded-lg focus:outline-none border border-[#0000001A] text-[#3A4656]"
                    >
                        <option value="en">ENG</option>
                        <option value="en">SPN</option>
                    </select>
                    <button className="px-2 py-2 text-sm rounded-lg border border-[#0000001A] text-[#3A4656]">
                        <Bell size={14} />
                    </button>
                    <button className="px-2 py-2 text-sm rounded-lg border border-[#0000001A] text-[#3A4656]">
                        <Search size={14} />
                    </button>
                    <button className="px-2 py-2 text-sm rounded-lg border border-[#0000001A] text-[#3A4656]">
                        <Bolt size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
