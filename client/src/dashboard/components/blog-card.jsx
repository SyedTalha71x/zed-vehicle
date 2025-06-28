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


export default BlogCard;