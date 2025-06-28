import { Quote, Trash2 } from "lucide-react";
import React from "react";
import ReviewCard from "../components/review-card";

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
         <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div className="grid gap-10  grid-cols-1 my-4 max-sm:px-2 sm:grid-cols-2 lg:grid-cols-3">
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
