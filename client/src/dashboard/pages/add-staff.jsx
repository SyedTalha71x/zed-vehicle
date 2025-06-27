import React from "react";
import { Info } from "lucide-react";

const AddStaff = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
                <div>
                    <h4 className="font-bold text-lg ">Profile Information</h4>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center flex-wrap  justify-center sm:justify-normal gap-5">
                            <div className="w-24 rounded-full overflow-hidden">
                                <img
                                    src="/dashboard-images/staff-3.jpg"
                                    alt="profile Picture"
                                />
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <button className="px-4 py-2 md:px-4 border rounded-xl bg-[#303030] text-white shadow-lg border-[#616161] cursor-pointer">
                                    <p className="text-sm font-bold flex items-center ">
                                        + Replace picture
                                    </p>
                                </button>
                                <button className="px-4 py-2  md:px-4 border rounded-xl shadow-lg border-[#D4D4D4] cursor-pointer">
                                    <p className="text-sm font-bold">Remove</p>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="text-sm flex items-center gap-1 font-medium"
                                >
                                    Display name <Info className="size-4" />
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full sm:w-1/2 px-2 py-1 rounded-xl bg-white border"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm flex items-center gap-1 font-medium"
                                >
                                    Email <Info className="size-4" />
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full sm:w-1/2 px-2 py-1 rounded-xl bg-white border"
                                />
                            </div>
                            <button className="w-fit px-4 py-2 md:px-4 border rounded-xl bg-[#303030] text-white shadow-lg border-[#616161] cursor-pointer">
                                <p className="text-sm font-bold flex items-center ">
                                    Add
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStaff;



                    

