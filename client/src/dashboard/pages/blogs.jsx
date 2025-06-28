import React from "react";
import BlogCard from "../components/blog-card";
import { blogs } from "../libs/dummy-data";

const Blogs = () => {
    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {[...blogs, ...blogs]?.map((blog, idx) => (
                        <BlogCard key={idx} {...blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
