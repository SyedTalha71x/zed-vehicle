import { EllipsisVertical } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const staffs = [
    {
        id: 1,
        name: "Courtney Henry",
        picture: "/dashboard-images/staff-2.jpg",
    },
    {
        id: 2,
        name: "Cameron Williamson",
        picture: "/dashboard-images/staff-1.jpg",
    },
    {
        id: 3,
        name: "Courtney Henry",
        picture: "/dashboard-images/staff-2.jpg",
    },
    {
        id: 4,
        name: "Cameron Williamson",
        picture: "/dashboard-images/staff-1.jpg",
    },
    {
        id: 5,
        name: "Courtney Henry",
        picture: "/dashboard-images/staff-2.jpg",
    },
    {
        id: 6,
        name: "Cameron Williamson",
        picture: "/dashboard-images/staff-1.jpg",
    },
    {
        id: 7,
        name: "Courtney Hnery",
        picture: "/dashboard-images/staff-2.jpg",
    },
    {
        id: 8,
        name: "Cameron Williamson",
        picture: "/dashboard-images/staff-1.jpg",
    },
    {
        id: 9,
        name: "Courtney Hnery",
        picture: "/dashboard-images/staff-2.jpg",
    },
    {
        id: 10,
        name: "Cameron Williamson",
        picture: "/dashboard-images/staff-1.jpg",
    },
    {
        id: 11,
        name: "Courtney Hnery",
        picture: "/dashboard-images/staff-2.jpg",
    },
    {
        id: 12,
        name: "Cameron Williamson",
        picture: "/dashboard-images/staff-1.jpg",
    },
    {
        id: 13,
        name: "Courtney Hnery",
        picture: "/dashboard-images/staff-2.jpg",
    },
    {
        id: 14,
        name: "Cameron Williamson",
        picture: "/dashboard-images/staff-1.jpg",
    },
    {
        id: 15,
        name: "Courtney Hnery",
        picture: "/dashboard-images/staff-2.jpg",
    },
];

const Staff = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
                <div className="flex justify-end">
                    <Link to={'add'} className="font-medium bg-[#E46320] shadow-[#E46320]  shadow-md  text-sm cursor-pointer rounded-md py-2 px-4 text-white ">
                        + Add New Staff
                    </Link>
                </div>
                <div className="grid grid-cols-2 mt-5 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {staffs?.map((staff) => (
                        <StaffCard key={staff.id} {...staff} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staff;

const StaffCard = ({ name, picture }) => (
    <div className=" p-3 relative">
        <div className="w-full flex justify-end">
            <button>
                {" "}
                <EllipsisVertical className="size-5" />
            </button>
        </div>
        <div className="w-full h-full flex flex-col gap-3 items-center">
            <div className="rounded-full size-20 overflow-hidden">
                <img
                    src={picture}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-sm font-medium text-center">{name}</p>
        </div>
    </div>
);
