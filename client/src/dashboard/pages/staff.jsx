import { EllipsisVertical } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import StaffCard from "../components/staff-card";
import { staffs } from "../libs/dummy-data";

const Staff = () => {
    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div className="flex justify-end">
                    <Link
                        to={"add"}
                        className="font-medium bg-[#E46320] shadow-[#E46320]  shadow-md  text-sm cursor-pointer rounded-md py-2 px-4 text-white "
                    >
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
