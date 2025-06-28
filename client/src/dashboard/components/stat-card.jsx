import { ArrowDownRight, ArrowUpRight, Info } from "lucide-react";

const StatCard = ({ title, value, change, changeType, Icon }) => (
    <div className="bg-white border-2 border-[#1A2F570F] shadow rounded-xl p-3 flex flex-col gap-2">
        <div className="flex  justify-between items-start">
            <div>
                <div className="flex items-center gap-2">
                    <h4 className="text-[#7D7D91] text-sm">{title}</h4>
                    <Info color="#7D7D9166" className="size-4" />
                </div>
                <h2 className="font-medium text-xl mt-2">{value}</h2>
            </div>
            <div className="p-2 border border-[#292D3214]  shadow rounded-lg">
                <Icon color={"#307EF3"} />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <p className="text-sm text-[#7D7D91]">Vs Last Week</p>
            <span
                className={` flex items-center gap-1 rounded-full px-2 py-0.5  ${
                    changeType === "increase"
                        ? "text-[#1C8C6E] bg-[#F0F9F3]"
                        : "bg-[#E65E5E1A] text-[#E65E5E]"
                } text-xs`}
            >
                {change}
                {changeType === "increase" ? (
                    <ArrowUpRight className="size-4" />
                ) : (
                    <ArrowDownRight className="size-4" />
                )}
            </span>
        </div>
    </div>
);
export default StatCard;
