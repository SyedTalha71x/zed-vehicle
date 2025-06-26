import React from "react";

const blogs = [
    {
        id: 1,
        title: "Lorem Ipsum",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        date: new Date().toLocaleDateString().replaceAll("/", ", "),
        duration: "13 Min",
        picture: "/dashboard-images/blog.png",
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        date: new Date().toLocaleDateString().replaceAll("/", ", "),
        duration: "13 Min",
        picture: "/dashboard-images/blog.png",
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        date: new Date().toLocaleDateString().replaceAll("/", ", "),
        duration: "13 Min",
        picture: "/dashboard-images/blog.png",
    },
];

const Blogs = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
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

const BlogCard = ({ title, content, date, duration, picture }) => (
    <div className="p-3 bg-[#EFEFEF] rounded-lg shadow-lg border border-gray-200">
        <div className="flex flex-col gap-3">
            <div className="rounded-md overflow-hidden">
                <img
                    src={picture}
                    alt={`Blog-${title}`}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <p className="text-xs text-justify">{content}</p>
            <div className="text-xs mb-3 flex gap-3 items-center  text-[#E46320] ">
                <p>{date}</p>
                <span className="size-2 bg-[#E46320] rounded-full" />
                <p>{duration} Read</p>
            </div>
        </div>
    </div>
);
