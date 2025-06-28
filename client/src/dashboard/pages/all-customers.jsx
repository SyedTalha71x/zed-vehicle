import React from "react";
import { customersList } from "../libs/dummy-data";
import DataTable from "../components/table";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

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
                        <Link to={'/dashboard/customers/add'} className="font-medium bg-[#E46320] shadow-[#E46320]  shadow-md  text-sm cursor-pointer rounded-md py-2 px-4 text-white ">
                            + Add New Customer
                        </Link>
                    </div>
                    <div className=" w-full h-full bg-white rounded-lg shadow p-4 ">
                        <div className="w-full h-full">
                            <p className="font-medium mb-4 text-lg">
                                Customers List
                            </p>

                            <DataTable
                                size="small"
                                columns={columns}
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
