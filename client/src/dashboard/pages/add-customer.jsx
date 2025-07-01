import React, { useState } from "react";
import { Info, Upload, X } from "lucide-react";

const AddCustomer = () => {
    const [customerData, setCustomerData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        company: "",
        internalNotes: "",
        profilePicture: null,
    });

    const [orderData, setOrderData] = useState({
        status: "Pending",
        notes: "",
        orderAmount: "",
        productDetails: "",
        category: "",
        weight: "",
        arrivalTime: "",
        routeFrom: "",
        routeTo: "",
        brokerRevenue: "",
        files: [],
    });

    const [showOrderForm, setShowOrderForm] = useState(false);
    const [profilePreview, setProfilePreview] = useState(
        "/dashboard-images/staff-3.jpg"
    );

    const statusOptions = ["Pending", "In Progress", "Completed", "Cancelled"];
    const categoryOptions = [
        "Electronics",
        "Clothing",
        "Food & Beverages",
        "Home & Garden",
        "Sports",
        "Automotive",
        "Books",
        "Health & Beauty",
    ];

    const isCustomerFormValid = () => {
        return (
            customerData.name.trim() !== "" &&
            customerData.email.trim() !== "" &&
            customerData.location.trim() !== ""
        );
    };

    const isOrderFormValid = () => {
        return (
            orderData.orderAmount.trim() !== "" &&
            orderData.category.trim() !== "" &&
            orderData.weight.trim() !== "" &&
            orderData.arrivalTime.trim() !== "" &&
            orderData.routeFrom.trim() !== "" &&
            orderData.routeTo.trim() !== "" &&
            orderData.brokerRevenue.trim() !== ""
        );
    };

    const handleCustomerChange = (field, value) => {
        setCustomerData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleOrderChange = (field, value) => {
        setOrderData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePreview(e.target.result);
                setCustomerData((prev) => ({
                    ...prev,
                    profilePicture: file,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const newFiles = files.map((file) => ({
            name: file.name,
            type: file.type,
            visible: true,
            file: file,
        }));
        setOrderData((prev) => ({
            ...prev,
            files: [...prev.files, ...newFiles],
        }));
    };

    const removeFile = (index) => {
        setOrderData((prev) => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index),
        }));
    };

    const handleAddCustomer = () => {
        if (isCustomerFormValid()) {
            setShowOrderForm(true);
        }
    };

    const handleAddOrder = () => {
        if (isOrderFormValid()) {
            // Generate order ID
            const orderId =
                "00" + Math.random().toString(36).substr(2, 9).toUpperCase();

            const customerObject = {
                customerId:
                    "CUST-" +
                    Math.random().toString(36).substr(2, 4).toUpperCase(),
                name: customerData.name,
                phone: customerData.phone,
                email: customerData.email,
                location: customerData.location,
                company: customerData.company,
                profilePicture: customerData.profilePicture
                    ? "uploaded-image"
                    : "/dashboard-images/staff-3.jpg",
                orders: [
                    {
                        orderId: orderId,
                        date: new Date().toISOString().split("T")[0],
                        status: orderData.status,
                    },
                ],
                internalNotes: customerData.internalNotes,
            };

            const orderObject = {
                key: Date.now().toString(),
                orderId: orderId,
                status: orderData.status,
                customerName: customerData.name,
                businessName: customerData.company,
                customerEmail: customerData.email,
                customerPhone: customerData.phone,
                notes: orderData.notes,
                orderAmount: parseFloat(orderData.orderAmount),
                productDetails: orderData.productDetails,
                category: orderData.category,
                arrivalTime: orderData.arrivalTime,
                weight: orderData.weight,
                route: `${orderData.routeFrom} → ${orderData.routeTo}`,
                brokerRevenue: parseFloat(orderData.brokerRevenue),
                files: orderData.files,
            };

            console.log("Customer Created:", customerObject);
            console.log("Order Created:", orderObject);
            alert("Customer and Order added successfully!");

            setCustomerData((prev) => ({
                ...prev,
                name: "",
                phone: "",
                email: "",
                location: "",
                company: "",
                internalNotes: "",
                profilePicture: null,
            }));
            setCustomerData((prev) => ({
                ...prev,
                name: "",
                phone: "",
                email: "",
                location: "",
                company: "",
                internalNotes: "",
                profilePicture: null,
            }));

            setOrderData((prev) => ({
                ...prev,
                status: "Pending",
                notes: "",
                orderAmount: "",
                productDetails: "",
                category: "",
                weight: "",
                arrivalTime: "",
                routeFrom: "",
                routeTo: "",
                brokerRevenue: "",
                files: [],
            }));
        }
    };

    const handleAddEmptyOrder = () => {
        const orderId =
            "00" + Math.random().toString(36).substr(2, 9).toUpperCase();

        const customerObject = {
            customerId:
                "CUST-" + Math.random().toString(36).substr(2, 4).toUpperCase(),
            name: customerData.name,
            phone: customerData.phone,
            email: customerData.email,
            location: customerData.location,
            company: customerData.company,
            profilePicture: customerData.profilePicture
                ? "uploaded-image"
                : "/dashboard-images/staff-3.jpg",
            orders: [],
            internalNotes: customerData.internalNotes,
        };

        console.log("Customer Created with Empty Orders:", customerObject);
        alert("Customer added with empty order list!");
        setCustomerData((prev) => ({
            ...prev,
            name: "",
            phone: "",
            email: "",
            location: "",
            company: "",
            internalNotes: "",
            profilePicture: null,
        }));

        setOrderData((prev) => ({
            ...prev,
            status: "Pending",
            notes: "",
            orderAmount: "",
            productDetails: "",
            category: "",
            weight: "",
            arrivalTime: "",
            routeFrom: "",
            routeTo: "",
            brokerRevenue: "",
            files: [],
        }));
    };

    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                <div>
                    <h4 className="font-bold text-lg">Customer Information</h4>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center flex-wrap justify-center sm:justify-normal gap-5">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src={profilePreview}
                                    alt="Profile Picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <label className="px-4 py-2 md:px-4 border rounded-xl bg-[#303030] text-white shadow-lg border-[#616161] cursor-pointer">
                                    <p className="text-sm font-bold flex items-center">
                                        + Replace picture
                                    </p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleProfilePictureChange}
                                        className="hidden"
                                    />
                                </label>
                                <button
                                    onClick={() => {
                                        setProfilePreview(
                                            "/dashboard-images/staff-3.jpg"
                                        );
                                        setCustomerData((prev) => ({
                                            ...prev,
                                            profilePicture: null,
                                        }));
                                    }}
                                    className="px-4 py-2 md:px-4 border rounded-xl shadow-lg border-[#D4D4D4] cursor-pointer"
                                >
                                    <p className="text-sm font-bold">Remove</p>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                            <div className="w-full flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Name <span className="text-red-500">*</span>{" "}
                                    <Info className="size-4" />
                                </label>
                                <input
                                    type="text"
                                    value={customerData.name}
                                    onChange={(e) =>
                                        handleCustomerChange(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className="w-full  px-2 py-1 rounded-xl bg-white border"
                                    placeholder="Enter customer name"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Phone <Info className="size-4" />
                                </label>
                                <input
                                    type="tel"
                                    value={customerData.phone}
                                    onChange={(e) =>
                                        handleCustomerChange(
                                            "phone",
                                            e.target.value
                                        )
                                    }
                                    className="w-full  px-2 py-1 rounded-xl bg-white border"
                                    placeholder="Enter phone number"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Email{" "}
                                    <span className="text-red-500">*</span>{" "}
                                    <Info className="size-4" />
                                </label>
                                <input
                                    type="email"
                                    value={customerData.email}
                                    onChange={(e) =>
                                        handleCustomerChange(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    className="w-full  px-2 py-1 rounded-xl bg-white border"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Location{" "}
                                    <span className="text-red-500">*</span>{" "}
                                    <Info className="size-4" />
                                </label>
                                <input
                                    type="text"
                                    value={customerData.location}
                                    onChange={(e) =>
                                        handleCustomerChange(
                                            "location",
                                            e.target.value
                                        )
                                    }
                                    className="w-full  px-2 py-1 rounded-xl bg-white border"
                                    placeholder="Enter location"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Company <Info className="size-4" />
                                </label>
                                <input
                                    type="text"
                                    value={customerData.company}
                                    onChange={(e) =>
                                        handleCustomerChange(
                                            "company",
                                            e.target.value
                                        )
                                    }
                                    className="w-full  px-2 py-1 rounded-xl bg-white border"
                                    placeholder="Enter company name"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Internal Notes <Info className="size-4" />
                                </label>
                                <textarea
                                    value={customerData.internalNotes}
                                    onChange={(e) =>
                                        handleCustomerChange(
                                            "internalNotes",
                                            e.target.value
                                        )
                                    }
                                    className="w-full  px-2 py-1 rounded-xl bg-white border"
                                    rows="2"
                                    placeholder="Add internal notes..."
                                />
                            </div>

                            {!showOrderForm && (
                                <button
                                    onClick={handleAddCustomer}
                                    disabled={!isCustomerFormValid()}
                                    className={`w-fit px-4 py-2 md:px-4 border rounded-xl shadow-lg cursor-pointer ${
                                        isCustomerFormValid()
                                            ? "bg-[#303030] text-white border-[#616161]"
                                            : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                                    }`}
                                >
                                    <p className="text-sm font-bold flex items-center">
                                        Continue to Order
                                    </p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                {showOrderForm && (
                    <div className="mt-12 border-t pt-8">
                        <h4 className="font-bold text-lg">Order Information</h4>
                        <div className="mt-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Status{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <select
                                        value={orderData.status}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "status",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                    >
                                        {statusOptions.map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Category{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <select
                                        value={orderData.category}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "category",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                    >
                                        <option value="">
                                            Select category
                                        </option>
                                        {categoryOptions.map((category) => (
                                            <option
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Order Amount{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <input
                                        type="number"
                                        value={orderData.orderAmount}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "orderAmount",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                        placeholder="Enter order amount"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Broker Revenue{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <input
                                        type="number"
                                        value={orderData.brokerRevenue}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "brokerRevenue",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                        placeholder="Enter broker revenue"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Weight{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <input
                                        type="text"
                                        value={orderData.weight}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "weight",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                        placeholder="e.g., 25kg"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Arrival Time{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <input
                                        type="date"
                                        value={orderData.arrivalTime}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "arrivalTime",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Route From{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <input
                                        type="text"
                                        value={orderData.routeFrom}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "routeFrom",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                        placeholder="Starting location"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm flex items-center gap-1 font-medium">
                                        Route To{" "}
                                        <span className="text-red-500">*</span>{" "}
                                        <Info className="size-4" />
                                    </label>
                                    <input
                                        type="text"
                                        value={orderData.routeTo}
                                        onChange={(e) =>
                                            handleOrderChange(
                                                "routeTo",
                                                e.target.value
                                            )
                                        }
                                        className="px-2 py-1 rounded-xl bg-white border"
                                        placeholder="Destination location"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Product Details <Info className="size-4" />
                                </label>
                                <textarea
                                    value={orderData.productDetails}
                                    onChange={(e) =>
                                        handleOrderChange(
                                            "productDetails",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-2 py-1 rounded-xl bg-white border"
                                    rows="3"
                                    placeholder="Model: Smart Speaker&#10;Quantity: 10&#10;Type: Electronics&#10;Custom specs: Voice Assistant Enabled"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    Notes <Info className="size-4" />
                                </label>
                                <textarea
                                    value={orderData.notes}
                                    onChange={(e) =>
                                        handleOrderChange(
                                            "notes",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-2 py-1 rounded-xl bg-white border"
                                    rows="2"
                                    placeholder="Additional notes..."
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm flex items-center gap-1 font-medium">
                                    File Upload <Info className="size-4" />
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
                                    <label className="flex flex-col items-center cursor-pointer">
                                        <Upload className="size-8 text-gray-400 mb-2" />
                                        <span className="text-sm text-gray-600">
                                            Upload PDF, Images, Documents
                                        </span>
                                        <input
                                            type="file"
                                            multiple
                                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                                            onChange={handleFileUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                                {orderData.files.length > 0 && (
                                    <div className="mt-2 space-y-2">
                                        {orderData.files.map((file, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between bg-gray-100 p-2 rounded-lg"
                                            >
                                                <span className="text-sm">
                                                    {file.name}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        removeFile(index)
                                                    }
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <X className="size-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                <button
                                    onClick={handleAddOrder}
                                    disabled={!isOrderFormValid()}
                                    className={`px-4 py-2 md:px-4 border rounded-xl shadow-lg cursor-pointer ${
                                        isOrderFormValid()
                                            ? "bg-[#303030] text-white border-[#616161]"
                                            : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                                    }`}
                                >
                                    <p className="text-sm font-bold flex items-center">
                                        Add Customer & Order
                                    </p>
                                </button>

                                <button
                                    onClick={handleAddEmptyOrder}
                                    className="px-4 py-2 md:px-4 border rounded-xl shadow-lg border-[#D4D4D4] cursor-pointer"
                                >
                                    <p className="text-sm font-bold">
                                        Add Customer Only
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddCustomer;
