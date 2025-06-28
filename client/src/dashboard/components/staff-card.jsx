import { EllipsisVertical } from "lucide-react";

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

export default StaffCard