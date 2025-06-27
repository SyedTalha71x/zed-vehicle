import React from "react";
import { customersList } from "../libs/table-data";
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
        <div className="w-full min-h-screen">
            <div className="w-full h-full p-8">
                <div className="w-full h-full">
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
