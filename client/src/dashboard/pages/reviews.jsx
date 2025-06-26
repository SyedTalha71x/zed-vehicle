import { Quote, Trash2 } from "lucide-react";
import React from "react";

const reviews = [
    {
        title: "Lorem Ipsum",
        content:
            "“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”",
        username: "Leslie Alexander",
        designation: "Lorem Ipsum",
        picture: "/dashboard-images/review-user1.jpg",
    },
    {
        title: "Lorem Ipsum",
        content:
            "“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”",
        username: "Jenny Wilson",
        designation: "Lorem Ipsum",
        picture: "/dashboard-images/review-user2.jpg",
    },
];

const Reviews = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
                <div className="grid gap-10  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[...reviews, ...reviews, ...reviews]?.map(
                        (review, idx) => (
                            <ReviewCard key={idx} {...review} />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;

const ReviewCard = ({ title, content, designation, username, picture }) => (
    <div className="w-full bg-white flex flex-col rounded-xl p-5 shadow-xl relative">
        <button
            className="absolute hover:border-red-500 hover:text-red-500 text-[#646E78] cursor-pointer -right-2.5 -top-2.5 rounded-full border border-[#000000] p-1 md:p-2
        "
        >
            <Trash2 className="size-5 " strokeWidth={1.5} />
        </button>
        <div className="flex justify-between">
            <h3>{title}</h3>
            <p className="text-6xl font-black">“</p>
        </div>
        <p className="text-sm">{content}</p>
        <div className="flex items-center gap-2 mt-6">
            <div className="size-14 rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={picture}
                    alt=""
                />
            </div>
            <div>
                <p className="font-medium">{username}</p>
                <p className="text-sm">{designation}</p>
            </div>
        </div>
    </div>
);
