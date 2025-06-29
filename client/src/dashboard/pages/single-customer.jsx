import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { customersList } from "../libs/dummy-data";
import DataTable from "../components/table";
import { ArrowLeft, Eye, Pencil, Save } from "lucide-react";

const columns = [
    {
        title: "Order Id",
        dataIndex: "orderId",
    },
    {
        title: "Date of Loading",
        dataIndex: "date",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (text) => (
            <span
                className={`py-1 text-xs px-2 rounded-sm font-medium ${
                    text === "Cancelled"
                        ? " text-[#E63946]"
                        : text === "Shipped"
                        ? " text-[#FF9900]"
                        : text === "Delivered"
                        ? "text-[#1C8C6E]"
                        : "text-[#5aa8e9]"
                }`}
            >
                {text}
            </span>
        ),
    },
    {
        title: "Action",
        dataIndex: "action",
        render: (_, record) => (
            <div className="flex items-center justify-center gap-2">
                <Link
                    to={`/dashboard/orders/${record.orderId}`}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    <Eye className="size-4" />
                </Link>
            </div>
        ),
    },
];

const SingleCustomer = () => {
    const { id: customerId } = useParams();
    const navigate = useNavigate();
    const customer = customersList.filter(
        (customer) => customer.customerId === customerId
    )[0];
    console.log(customer);

    const [isEditing, setIsEditing] = useState(false);
    const [notes, setNotes] = useState(customer?.internalNotes || "");
    const [originalNotes, setOriginalNotes] = useState(
        customer?.internalNotes || ""
    );

    const hasChanges = notes !== originalNotes;

    const handleSave = () => {
        // Simulate saving logic here (e.g. API call)
        setOriginalNotes(notes);
        setIsEditing(false);
    };
    const handleCancel = () => {
        // Simulate saving logic here (e.g. API call)
        setNotes(originalNotes);
        setIsEditing(false);
    };

    if (!customer) {
        return (
            <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
                <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 border bg-white cursor-pointer border-[#292D3214] shadow rounded-lg hover:bg-gray-50"
                        >
                            <ArrowLeft className="size-5 text-[#3A4656]" />
                        </button>
                        <h1 className="text-2xl font-semibold text-[#23293D]">
                            Back
                        </h1>
                    </div>
                    <p className="font-medium text-gray-700">
                        No customer found with this id
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full h-full col-span-1 md:col-span-2 bg-white rounded-lg shadow p-6">
                        <p className="font-medium mb-6 text-lg">
                            Customer Details
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            {/* Profile Picture */}
                            <div className="w-32 h-32 rounded-full overflow-hidden shadow">
                                <img
                                    src={customer.profilePicture}
                                    alt="Profile Picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Customer Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-sm w-full">
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Customer ID:
                                    </p>
                                    <p className="truncate">
                                        {customer.customerId}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Name:
                                    </p>
                                    <p className="truncate">{customer.name}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Phone:
                                    </p>
                                    <p className="truncate">{customer.phone}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Email:
                                    </p>
                                    <p className="truncate">{customer.email}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Location:
                                    </p>
                                    <p className="truncate">
                                        {customer.location}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Company:
                                    </p>
                                    <p className="truncate">
                                        {customer.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full col-span-1 md:col-span-1 bg-white rounded-lg shadow p-4">
                        <p className="font-medium mb-4">Orders</p>
                        <DataTable
                            size="small"
                            columns={columns}
                            data={customer.orders || []}
                            pagination={false}
                        />
                    </div>
                    <div className="w-full h-full col-span-1 md:col-span-1 bg-white rounded-lg shadow p-4">
                        <div className="w-full h-full flex flex-col relative">
                            <div className="flex items-center mb-5 justify-between">
                                <p className="font-medium ">Internal Notes</p>

                                {!isEditing && (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="4 cursor-pointer  text-gray-400 hover:text-gray-600"
                                    >
                                        <Pencil size={20} />
                                    </button>
                                )}
                            </div>
                            <div className="text-gray-700 w-full h-full flex-1 relative">
                                <textarea
                                    className={`w-full h-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none ${
                                        isEditing ? "bg-white" : "bg-gray-100"
                                    }`}
                                    readOnly={!isEditing}
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>

                            {/* Save Button */}
                            {isEditing && (
                                <div className="flex  items-center justify-end gap-2">
                                    <button
                                        onClick={handleCancel}
                                        className={`mt-2 px-4 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                                    `}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={!hasChanges}
                                        className={`mt-2 px-4 py-1 text-sm rounded ${
                                            hasChanges
                                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                                : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        }`}
                                    >
                                        <Save
                                            size={16}
                                            className="inline mr-1"
                                        />
                                        Save
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCustomer;
