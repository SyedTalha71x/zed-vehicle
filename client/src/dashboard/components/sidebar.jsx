import React, { useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    ChevronUp,
    LayoutDashboard,
    Menu,
    ScrollText,
    ShoppingCart,
    Sparkles,
    SquarePen,
    TrendingUp,
    UserRoundCog,
    UsersRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const mainMenu = [
    {
        id: 1,
        path: "home",
        title: "Dashboard",
        Icon: LayoutDashboard,
    },
    {
        id: 2,
        path: "orders-tracking",
        title: "Orders Tracking",
        Icon: ShoppingCart,
    },
    {
        id: 3,
        path: "customers",
        title: "Add/Edit Customers",
        Icon: UsersRound,
    },
    {
        id: 4,
        path: "staff",
        title: "Add/Edit Staff",
        Icon: UserRoundCog,
    },
    {
        id: 5,
        path: "blogs",
        title: "Blog Management",
        Icon: ScrollText,
    },
    {
        id: 6,
        path: "reviews",
        title: "Manage Reviews",
        Icon: Sparkles,
    },
    {
        id: 7,
        path: "website-content",
        title: "Website Content Editing",
        Icon: SquarePen,
    },
];
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <aside
            className={`fixed ${
                isSidebarOpen
                    ? "w-60  max-lg:z-[999]"
                    : "w-0 lg:w-60"
            } transition-all overflow-hidden duration-300  `}
        >
            <div className="w-full flex flex-col justify-between p-3 min-h-screen bg-white shadow-lg border-r border border-gray-200">
                <div className="w-full h-full">
                    <button
                        className="lg:hidden outline-none"
                        onClick={() => setIsSidebarOpen((prev) => !prev)}
                    >
                        <Menu />
                    </button>
                    <div className="flex items-center justify-center">
                        <img
                            src="/dashboard-images/logo.png"
                            className="w-28"
                            alt=""
                        />
                    </div>
                    <hr className="border-gray-300 mb-3" />

                    <div className="flex items-center border gap-2  px-3 py-2 w-full rounded-xl border-gray-200 shadow-md">
                        <div className="size-10 rounded-full overflow-hidden">
                            <img
                                src="/dashboard-images/user.jpg"
                                className="w-full h-full  object-cover"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-xs  text-[#384558]">
                                Ismael Maddox
                            </p>
                            <p className="text-[10px] text-[#9D9DB2]">
                                Free plan
                            </p>
                        </div>
                    </div>
                    <div className=" mt-3">
                        <div
                            className="flex justify-between cursor-pointer"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            <p className="text-xs uppercase text-[#1C1C3D80] font-bold">
                                main menu
                            </p>
                            <button>
                                {" "}
                                {isMenuOpen ? (
                                    <ChevronDown className="text-[#1C1C3D80] size-4" />
                                ) : (
                                    <ChevronUp className="text-[#1C1C3D80] size-4" />
                                )}{" "}
                            </button>
                        </div>
                        <div
                            className={`${
                                isMenuOpen ? "h-fit" : "h-0"
                            } flex flex-col mt-5 gap-1 overflow-hidden transition-all duration-300`}
                        >
                            {mainMenu?.map((menu) => (
                                <NavLinkItem
                                    key={menu.id}
                                    title={menu.title}
                                    Icon={menu.Icon}
                                    path={menu.path}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-2 border border-[#16184f39] rounded-lg shadow-xl">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#1C60E8] shadow-lg rounded-xl p-2 flex justify-center items-center">
                            <div className="flex items-center shadow-md justify-center bg-white size-6 rounded-md">
                                <TrendingUp
                                    color="#1C60E8"
                                    strokeWidth={4}
                                    className="size-3"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-wrap text-[#7D7D91]">
                            Upgrade & Unlock all features
                        </p>
                    </div>
                    <button className="px-4 py-2 mt-3 justify-center w-full  md:px-4 flex items-center gap-1 border rounded-xl shadow-lg border-[#D4D4D4] cursor-pointer">
                        <p className="text-xs font-bold">Manage your plans</p>
                        <ArrowRight className="size-4" />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

const NavLinkItem = ({ path, title, Icon }) => (
    <NavLink
        to={path}
        className={({ isActive }) =>
            `${
                isActive ? "text-[#E46320] bg-[#EAF2FE]" : "text-[#7D7D91]"
            }  p-2 rounded-md flex font-medium items-center gap-2`
        }
    >
        <Icon className="size-4" />
        <p className="text-xs"> {title}</p>
    </NavLink>
);
