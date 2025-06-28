import { Info, X } from "lucide-react";
import React, { useRef, useState } from "react";

const WebsiteContent = () => {
    const [bannerFile, setBannerFile] = useState(null);
    const inputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setBannerFile(file);
        }
    };

    const removeBanner = () => {
        setBannerFile(null);
        inputRef.current.value = null;
    };
    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div className="space-y-6">
                    <div className="relative bg-[#E463200D] border border-black border-dashed rounded-md w-full h-32 sm:h-44 md:h-52 lg:h-72 flex flex-col justify-center items-center">
                        {!bannerFile ? (
                            <>
                                <button
                                    type="button"
                                    onClick={() => inputRef.current?.click()}
                                    className="py-1.5 px-6 rounded-full text-sm border"
                                >
                                    Upload Banner
                                </button>
                                <input
                                    ref={inputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </>
                        ) : (
                            <div className="absolute inset-0 p-2 flex flex-col gap-2 justify-center items-center">
                                <img
                                    src={URL.createObjectURL(bannerFile)}
                                    alt="Selected Banner"
                                    className="h-full w-full object-contain rounded shadow"
                                />
                                <div className="flex items-center gap-2 text-sm">
                                    <p className="text-xs truncate max-w-[200px]">
                                        {bannerFile.name}
                                    </p>
                                    <button
                                        onClick={removeBanner}
                                        className="bg-white rounded-full p-1 border shadow"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="name"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Blog Title <Info className="size-4" />
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full sm:w-1/2 px-2 py-1 rounded-xl bg-white border"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="category"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Category <Info className="size-4" />
                            </label>
                            <input
                                id="category"
                                type="text"
                                className="w-full sm:w-1/2 px-2 py-1 rounded-xl bg-white border"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="slug"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Slug <Info className="size-4" />
                            </label>
                            <input
                                id="slug"
                                type="text"
                                className="w-full sm:w-1/2 px-2 py-1 rounded-xl bg-white border"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="bannerImage"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Banner Image <Info className="size-4" />
                            </label>
                            <div className="w-full sm:w-1/2 rounded-md flex items-center text-sm font-medium text-black">
                                <button className="bg-[#8F97AB99] px-2 py-2">
                                    Browse
                                </button>
                                <div
                                    className="w-full bg-[#5B5B5B99]  px-2 py-2  text-center"
                                    type="file"
                                >
                                    Choose File
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 gap-1">
                            <label
                                htmlFor="slug"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Short Description
                                <sup className="text-red-500 text-base">*</sup>
                            </label>
                            <div className="w-full sm:w-1/2 p-2 h-56 bg-[#E463200D] border border-[#E4E5EB] rounded ">
                                <textarea
                                    id="description"
                                    placeholder="Short description"
                                    className="resize-none p-2 outline-none placeholder:text-sm placeholder:font-medium w-full h-full"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="slug"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Meta Title
                            </label>
                            <input
                                id="slug"
                                type="text"
                                className="w-full sm:w-1/2 px-2 py-1 rounded outline-none bg-[#E463200D] border border-[#E4E5EB]"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="bannerImage"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Banner Image <Info className="size-4" />
                            </label>
                            <div className="w-full sm:w-1/2 rounded-md flex items-center text-sm font-medium text-black">
                                <button className="bg-[#8F97AB99] px-2 py-2">
                                    Browse
                                </button>
                                <div
                                    className="w-full bg-[#5B5B5B99]  px-2 py-2  text-center"
                                    type="file"
                                >
                                    Choose File
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 gap-1">
                            <label
                                htmlFor="slug"
                                className="text-sm flex items-center gap-1 font-medium"
                            >
                                Meta Description
                                <sup className="text-red-500 text-base">*</sup>
                            </label>
                            <div className="w-full sm:w-1/2 p-2 h-56 bg-[#E463200D] border border-[#E4E5EB] rounded ">
                                <textarea
                                    id="description"
                                    placeholder="Meta description"
                                    className="resize-none p-2 outline-none placeholder:text-sm placeholder:font-medium w-full h-full"
                                ></textarea>
                            </div>
                        </div>

                        <button className="font-medium self-end bg-[#E46320] shadow-[#E46320]  shadow-md  text-sm cursor-pointer rounded-md py-2 px-4 text-white ">
                            + Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteContent;
