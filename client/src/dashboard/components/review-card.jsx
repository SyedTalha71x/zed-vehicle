import { Trash2 } from "lucide-react";

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
                    alt="profile picture"
                />
            </div>
            <div>
                <p className="font-medium">{username}</p>
                <p className="text-sm">{designation}</p>
            </div>
        </div>
    </div>
);

export default ReviewCard;
