import React, { useState } from "react";
import { customersList } from "../libs/dummy-data";
import DataTable from "../components/table";
import { Link } from "react-router-dom";
import { Eye, Search } from "lucide-react";

const columns = [
    {
        title: "Customer Id",
        dataIndex: "customerId",
    },
    {
        title: "Customer Name",
        dataIndex: "name",
    },
    {
        title: "Phone",
        dataIndex: "phone",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Location",
        dataIndex: "location",
    },
    {
        title: "Company",
        dataIndex: "company",
    },
    {
        title: "Action",
        dataIndex: "action",
        render: (_, record) => (
            <div className="flex items-center justify-center gap-2">
                <Link
                    to={`/dashboard/customers/${record.customerId}`}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    <Eye className="size-4" />
                </Link>
            </div>
        ),
    },
];
const AllCustomers = () => {
    const [searchValue, setSearchValue] = useState("");
    const searchableColumns = ["customerId", "name", "email", "location"];

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };
    const onSelectionChange = (ids, objects) => {
        console.log("Selected IDs:", ids);
        console.log("Selected Objects:", objects);
        console.log("Selection changed");
    };
    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div className="w-full h-full">
                    <div className="flex justify-end mb-5">
                        <Link
                            to={"/dashboard/customers/add"}
                            className="font-medium bg-[#E46320] shadow-[#E46320]  shadow-md  text-sm cursor-pointer rounded-md py-2 px-4 text-white "
                        >
                            + Add New Customer
                        </Link>
                    </div>
                    <div className=" w-full h-full bg-white rounded-lg shadow p-4 ">
                        <div className="w-full h-full">
                            <div className="w-full mb-4 flex justify-between items-center gap-4 flex-wrap">
                                <p className="font-medium text-lg">
                                    Customers List
                                </p>
                                <div className="w-44 text-sm flex items-center gap-1 px-2 py-2 rounded-lg focus-within:ring-2 focus-within:ring-blue-200 border border-[#0000001A]">
                                    <Search className="size-5 text-gray-400" />
                                    <input
                                        type="search"
                                        placeholder="Search orders..."
                                        value={searchValue}
                                        onChange={handleSearchChange}
                                        className="w-full text-[#3A4656] outline-none text-sm placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <DataTable
                                size="small"
                                columns={columns}
                                searchableColumns={searchableColumns}
                                searchValue={searchValue}
                                data={customersList}
                                onSelectionChange={onSelectionChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCustomers;
