import React, { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowUpDown,
    Box,
    Calendar,
    CheckCircle,
    Clock,
    Edit3,
    Eye,
    EyeOff,
    FileText,
    GripVertical,
    MapPin,
    Package,
    Save,
    Trash2,
    Upload,
    User,
    X,
    Pencil,
    DollarSign,
} from "lucide-react";
import { trackingOrderData } from "../libs/dummy-data";
import { useNavigate, useParams } from "react-router-dom";

const SingleOrderTracking = () => {
    const { id: orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const orderData = trackingOrderData.filter(
            (order) => order.orderId === orderId
        )[0];
        setOrder(orderData);
    }, [orderId]);

    const [isAddingStep, setIsAddingStep] = useState(false);
    const [editingStep, setEditingStep] = useState(null);
    const [newStep, setNewStep] = useState({
        name: "",
        status: "Pending",
        note: "",
    });

    const statusOptions = ["Pending", "In Progress", "Completed", "Cancelled"];

    const getStatusStyle = (status) => {
        switch (status) {
            case "Pending":
                return "bg-[#F9F2E5] text-[#DBAA00]";
            case "In Progress":
                return "bg-[#DCF3FF] text-[#3D81DB]";
            case "Completed":
                return "bg-[#ECF8F0CC] text-[#1C8C6E]";
            case "Cancelled":
                return "bg-[#E65E5E1A] text-[#E65E5E]";
            default:
                return "bg-[#F9F2E5] text-[#DBAA00]";
        }
    };

    const addNewStep = () => {
        if (newStep.name.trim()) {
            const newStepData = {
                id: Date.now(),
                ...newStep,
                dateUpdated: new Date().toISOString().split("T")[0],
                files: [],
            };
            setTrackingSteps([...trackingSteps, newStepData]);
            setNewStep({ name: "", status: "Pending", note: "" });
            setIsAddingStep(false);
        }
    };

    const updateStep = (id, updatedData) => {
        setTrackingSteps(
            trackingSteps.map((step) =>
                step.id === id
                    ? {
                          ...step,
                          ...updatedData,
                          dateUpdated: new Date().toISOString().split("T")[0],
                      }
                    : step
            )
        );
        setEditingStep(null);
    };

    const deleteStep = (id) => {
        setTrackingSteps(trackingSteps.filter((step) => step.id !== id));
    };

    // Track which fields are being edited
    const [editingField, setEditingField] = useState(null);
    const [editValue, setEditValue] = useState("");

    // Handle editing fields
    const startEditing = (field, value) => {
        setEditingField(field);
        setEditValue(value);
    };

    const saveEdit = () => {
        setOrder({ ...order, [editingField]: editValue });
        setEditingField(null);
    };

    const cancelEdit = () => {
        setEditingField(null);
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        const newFiles = Array.from(e.target.files).map((file) => ({
            name: file.name,
            type: file.type.startsWith("image/") ? "image" : "pdf",
            visible: true,
        }));
        setOrder({ ...order, files: [...order.files, ...newFiles] });
    };

    const toggleFileVisibility = (fileName) => {
        setOrder({
            ...order,
            files: order.files.map((file) =>
                file.name === fileName
                    ? { ...file, visible: !file.visible }
                    : file
            ),
        });
    };

    // Initial tracking steps (same as before)
    const [trackingSteps, setTrackingSteps] = useState([
        {
            id: 1,
            name: "Payment Received",
            status: "Completed",
            note: "Payment confirmed via wire transfer",
            dateUpdated: "2023-06-15",
            files: [
                { name: "payment_receipt.pdf", visible: true, type: "pdf" },
            ],
        },
        {
            id: 2,
            name: "Vehicle Inspection",
            status: "Completed",
            note: "Inspection completed, minor scratches noted",
            dateUpdated: "2023-06-18",
            files: [
                { name: "inspection_report.pdf", visible: true, type: "pdf" },
                { name: "vehicle_photos.jpg", visible: false, type: "image" },
            ],
        },
        {
            id: 3,
            name: "Customs Clearance",
            status: "In Progress",
            note: "Documents submitted, awaiting clearance",
            dateUpdated: "2023-06-20",
            files: [],
        },
        {
            id: 4,
            name: "Loading for Export",
            status: "Pending",
            note: "",
            dateUpdated: "2023-06-21",
            files: [],
        },
    ]);

    // ... rest of your tracking step functions remain the same ...

    if (!order) {
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
                        No order found with this id
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-[calc(100vh-56px)] overflow-x-hidden">
            <div className="w-full h-full p-3 sm:p-5 lg:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 border bg-white border-[#292D3214] shadow rounded-lg hover:bg-gray-50"
                    >
                        <ArrowLeft className="size-5 text-[#3A4656]" />
                    </button>
                    <h1 className="text-2xl font-semibold text-[#23293D]">
                        Order Details
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Order Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border-2 border-[#1A2F570F] shadow rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1 border border-[#292D3214] shadow rounded-lg">
                                    <User className="size-5" color="#307EF3" />
                                </div>
                                <h2 className="font-semibold text-[#23293D]">
                                    Customer Information
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-[#7D7D91]">
                                        Order ID
                                    </label>
                                    <p className="font-medium text-[#23293D]">
                                        {order.orderId}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-[#7D7D91]">
                                        Status
                                    </label>
                                    <span
                                        className={`py-1 text-xs px-2 rounded-sm font-medium ${getStatusStyle(
                                            order.status
                                        )}`}
                                    >
                                        {order.status}
                                    </span>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm text-[#7D7D91]">
                                            Customer Name
                                        </label>
                                        <button
                                            onClick={() =>
                                                startEditing(
                                                    "customerName",
                                                    order.customerName
                                                )
                                            }
                                            className="text-[#7D7D91] hover:text-[#E46320]"
                                        >
                                            <Pencil className="size-4" />
                                        </button>
                                    </div>
                                    {editingField === "customerName" ? (
                                        <div className="flex gap-2 mt-1">
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) =>
                                                    setEditValue(e.target.value)
                                                }
                                                className="flex-1 px-2 py-1 border rounded"
                                            />
                                            <button
                                                onClick={saveEdit}
                                                className="text-green-600"
                                            >
                                                <CheckCircle className="size-5" />
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="text-red-600"
                                            >
                                                <X className="size-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="font-medium text-[#23293D]">
                                            {order.customerName}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm text-[#7D7D91]">
                                            Business Name
                                        </label>
                                        <button
                                            onClick={() =>
                                                startEditing(
                                                    "businessName",
                                                    order.businessName
                                                )
                                            }
                                            className="text-[#7D7D91] hover:text-[#E46320]"
                                        >
                                            <Pencil className="size-4" />
                                        </button>
                                    </div>
                                    {editingField === "businessName" ? (
                                        <div className="flex gap-2 mt-1">
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) =>
                                                    setEditValue(e.target.value)
                                                }
                                                className="flex-1 px-2 py-1 border rounded"
                                            />
                                            <button
                                                onClick={saveEdit}
                                                className="text-green-600"
                                            >
                                                <CheckCircle className="size-5" />
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="text-red-600"
                                            >
                                                <X className="size-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="font-medium text-[#23293D]">
                                            {order.businessName}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm text-[#7D7D91]">
                                            Phone Number
                                        </label>
                                        <button
                                            onClick={() =>
                                                startEditing(
                                                    "customerPhone",
                                                    order.customerPhone
                                                )
                                            }
                                            className="text-[#7D7D91] hover:text-[#E46320]"
                                        >
                                            <Pencil className="size-4" />
                                        </button>
                                    </div>
                                    {editingField === "customerPhone" ? (
                                        <div className="flex gap-2 mt-1">
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) =>
                                                    setEditValue(e.target.value)
                                                }
                                                className="flex-1 px-2 py-1 border rounded"
                                            />
                                            <button
                                                onClick={saveEdit}
                                                className="text-green-600"
                                            >
                                                <CheckCircle className="size-5" />
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="text-red-600"
                                            >
                                                <X className="size-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="font-medium text-[#23293D]">
                                            {order.customerPhone}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm text-[#7D7D91]">
                                            Email
                                        </label>
                                        <button
                                            onClick={() =>
                                                startEditing(
                                                    "customerEmail",
                                                    order.customerEmail
                                                )
                                            }
                                            className="text-[#7D7D91] hover:text-[#E46320]"
                                        >
                                            <Pencil className="size-4" />
                                        </button>
                                    </div>
                                    {editingField === "customerEmail" ? (
                                        <div className="flex gap-2 mt-1">
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) =>
                                                    setEditValue(e.target.value)
                                                }
                                                className="flex-1 px-2 py-1 border rounded"
                                            />
                                            <button
                                                onClick={saveEdit}
                                                className="text-green-600"
                                            >
                                                <CheckCircle className="size-5" />
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="text-red-600"
                                            >
                                                <X className="size-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="font-medium text-[#23293D]">
                                            {order.customerEmail}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm text-[#7D7D91]">
                                            Notes
                                        </label>
                                        <button
                                            onClick={() =>
                                                startEditing(
                                                    "notes",
                                                    order.notes
                                                )
                                            }
                                            className="text-[#7D7D91] hover:text-[#E46320]"
                                        >
                                            <Pencil className="size-4" />
                                        </button>
                                    </div>
                                    {editingField === "notes" ? (
                                        <div className="mt-1">
                                            <textarea
                                                value={editValue}
                                                onChange={(e) =>
                                                    setEditValue(e.target.value)
                                                }
                                                className="w-full px-2 py-1 border rounded h-20"
                                            />
                                            <div className="flex gap-2 mt-2">
                                                <button
                                                    onClick={saveEdit}
                                                    className="text-green-600"
                                                >
                                                    <CheckCircle className="size-5" />
                                                </button>
                                                <button
                                                    onClick={cancelEdit}
                                                    className="text-red-600"
                                                >
                                                    <X className="size-5" />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="font-medium text-[#23293D] whitespace-pre-line">
                                            {order.notes}
                                        </p>
                                    )}
                                </div>

                                {/* Files Section */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-sm text-[#7D7D91]">
                                            Attachments
                                        </label>
                                        <label className="cursor-pointer text-[#7D7D91] hover:text-[#E46320]">
                                            <input
                                                type="file"
                                                multiple
                                                className="hidden"
                                                onChange={handleFileUpload}
                                            />
                                            <div className="flex items-center gap-1">
                                                <Upload className="size-4" />
                                                <span className="text-sm">
                                                    Upload
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    {order.files.length > 0 && (
                                        <div className="space-y-2">
                                            {order.files.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <FileText className="size-4 text-[#7D7D91]" />
                                                        <span className="text-sm text-[#23293D]">
                                                            {file.name}
                                                        </span>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            toggleFileVisibility(
                                                                file.name
                                                            )
                                                        }
                                                        className="text-[#7D7D91] hover:text-[#23293D]"
                                                    >
                                                        {file.visible ? (
                                                            <Eye className="size-4" />
                                                        ) : (
                                                            <EyeOff className="size-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Revenue Section */}
                        <div className="bg-white border-2 border-[#1A2F570F] shadow rounded-xl p-6 mt-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1 border border-[#292D3214] shadow rounded-lg">
                                    <DollarSign
                                        className="size-5"
                                        color="#1C8C6E"
                                    />
                                </div>
                                <h2 className="font-semibold text-[#23293D]">
                                    Revenue
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm text-[#7D7D91]">
                                            Order Amount
                                        </label>
                                        <button
                                            onClick={() =>
                                                startEditing(
                                                    "orderAmount",
                                                    order.orderAmount
                                                )
                                            }
                                            className="text-[#7D7D91] hover:text-[#E46320]"
                                        >
                                            <Pencil className="size-4" />
                                        </button>
                                    </div>
                                    {editingField === "orderAmount" ? (
                                        <div className="flex gap-2 mt-1">
                                            <input
                                                type="number"
                                                value={editValue}
                                                onChange={(e) =>
                                                    setEditValue(e.target.value)
                                                }
                                                className="flex-1 px-2 py-1 border rounded"
                                            />
                                            <button
                                                onClick={saveEdit}
                                                className="text-green-600"
                                            >
                                                <CheckCircle className="size-5" />
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="text-red-600"
                                            >
                                                <X className="size-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="font-medium text-[#23293D] text-lg">
                                            $
                                            {order.orderAmount?.toLocaleString()}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm text-[#7D7D91]">
                                            Broker Revenue
                                        </label>
                                        <button
                                            onClick={() =>
                                                startEditing(
                                                    "brokerRevenue",
                                                    order.brokerRevenue
                                                )
                                            }
                                            className="text-[#7D7D91] hover:text-[#E46320]"
                                        >
                                            <Pencil className="size-4" />
                                        </button>
                                    </div>
                                    {editingField === "brokerRevenue" ? (
                                        <div className="flex gap-2 mt-1">
                                            <input
                                                type="number"
                                                value={editValue}
                                                onChange={(e) =>
                                                    setEditValue(e.target.value)
                                                }
                                                className="flex-1 px-2 py-1 border rounded"
                                            />
                                            <button
                                                onClick={saveEdit}
                                                className="text-green-600"
                                            >
                                                <CheckCircle className="size-5" />
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="text-red-600"
                                            >
                                                <X className="size-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="font-medium text-[#23293D] text-lg">
                                            $
                                            {order.brokerRevenue?.toLocaleString()}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="bg-white border-2 border-[#1A2F570F] shadow rounded-xl p-6 mt-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1 border border-[#292D3214] shadow rounded-lg">
                                    <Package
                                        className="size-5"
                                        color="#E46320"
                                    />
                                </div>
                                <h2 className="font-semibold text-[#23293D]">
                                    Order / Product Details
                                </h2>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm text-[#7D7D91]">
                                        Details
                                    </label>
                                    <button
                                        onClick={() =>
                                            startEditing(
                                                "productDetails",
                                                order.productDetails
                                            )
                                        }
                                        className="text-[#7D7D91] hover:text-[#E46320]"
                                    >
                                        <Pencil className="size-4" />
                                    </button>
                                </div>
                                {editingField === "productDetails" ? (
                                    <div className="mt-1">
                                        <textarea
                                            value={editValue}
                                            onChange={(e) =>
                                                setEditValue(e.target.value)
                                            }
                                            className="w-full px-2 py-1 border rounded h-40"
                                        />
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                onClick={saveEdit}
                                                className="text-green-600"
                                            >
                                                <CheckCircle className="size-5" />
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="text-red-600"
                                            >
                                                <X className="size-5" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="font-medium text-[#23293D] whitespace-pre-line bg-gray-50 p-3 rounded">
                                        {order.productDetails}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tracking Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border-2 border-[#1A2F570F] shadow rounded-xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-1 border border-[#292D3214] shadow rounded-lg">
                                        <Clock
                                            className="size-5"
                                            color="#1C8C6E"
                                        />
                                    </div>
                                    <h2 className="font-semibold text-[#23293D]">
                                        Order Tracking
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setIsAddingStep(true)}
                                    className="font-medium self-end bg-[#E46320] shadow-[#E46320]  shadow-md  text-sm cursor-pointer rounded-md py-2 px-4 text-white "
                                >
                                    + Add Step
                                </button>
                            </div>

                            <div className="space-y-4">
                                {/* Add New Step Form */}
                                {isAddingStep && (
                                    <div className="border-2 border-[#E46320] bg-[#FFF8F5] rounded-lg p-4">
                                        <h3 className="font-medium text-[#23293D] mb-3">
                                            Add New Tracking Step
                                        </h3>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-sm text-[#7D7D91] mb-1">
                                                    Step Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={newStep.name}
                                                    onChange={(e) =>
                                                        setNewStep({
                                                            ...newStep,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                    placeholder="e.g., Payment Received"
                                                    className="w-full px-3 py-2 border border-[#0000001A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E46320]"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-sm text-[#7D7D91] mb-1">
                                                        Status
                                                    </label>
                                                    <select
                                                        value={newStep.status}
                                                        onChange={(e) =>
                                                            setNewStep({
                                                                ...newStep,
                                                                status: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        className="w-full px-3 py-2 border border-[#0000001A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E46320]"
                                                    >
                                                        {statusOptions.map(
                                                            (status) => (
                                                                <option
                                                                    key={status}
                                                                    value={
                                                                        status
                                                                    }
                                                                >
                                                                    {status}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm text-[#7D7D91] mb-1">
                                                    Note
                                                </label>
                                                <textarea
                                                    value={newStep.note}
                                                    onChange={(e) =>
                                                        setNewStep({
                                                            ...newStep,
                                                            note: e.target
                                                                .value,
                                                        })
                                                    }
                                                    placeholder="Add any relevant notes..."
                                                    className="w-full px-3 py-2 border border-[#0000001A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E46320] h-20 resize-none"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={addNewStep}
                                                    className="flex items-center gap-2 bg-[#E46320] hover:bg-[#d55a1c] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                                >
                                                    <Save className="size-4" />
                                                    Save Step
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setIsAddingStep(false);
                                                        setNewStep({
                                                            name: "",
                                                            status: "Pending",
                                                            note: "",
                                                        });
                                                    }}
                                                    className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-[#3A4656] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                                >
                                                    <X className="size-4" />
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Tracking Steps */}
                                {trackingSteps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className="border border-[#1A2F570F] rounded-lg p-4"
                                    >
                                        {editingStep === step.id ? (
                                            <EditStepForm
                                                step={step}
                                                onSave={(updatedData) =>
                                                    updateStep(
                                                        step.id,
                                                        updatedData
                                                    )
                                                }
                                                onCancel={() =>
                                                    setEditingStep(null)
                                                }
                                                statusOptions={statusOptions}
                                            />
                                        ) : (
                                            <div>
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-start gap-3 flex-1">
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <GripVertical className="size-4 text-[#7D7D91] cursor-move" />
                                                            <div className="flex items-center justify-center w-8 h-8 bg-[#E46320] text-white rounded-full text-sm font-medium">
                                                                {index + 1}
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <h3 className="font-medium text-[#23293D]">
                                                                    {step.name}
                                                                </h3>
                                                                <span
                                                                    className={`py-1 text-xs px-2 rounded-sm font-medium ${getStatusStyle(
                                                                        step.status
                                                                    )}`}
                                                                >
                                                                    {
                                                                        step.status
                                                                    }
                                                                </span>
                                                            </div>
                                                            {step.note && (
                                                                <p className="text-sm text-[#7D7D91] mb-2">
                                                                    {step.note}
                                                                </p>
                                                            )}
                                                            <div className="flex items-center gap-2 text-xs text-[#7D7D91]">
                                                                <Calendar className="size-3" />
                                                                <span>
                                                                    Updated:{" "}
                                                                    {
                                                                        step.dateUpdated
                                                                    }
                                                                </span>
                                                            </div>

                                                            {/* File Uploads Section */}
                                                            <div className="mt-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <FileText className="size-4 text-[#7D7D91]" />
                                                                    <span className="text-sm text-[#7D7D91]">
                                                                        Files (
                                                                        {
                                                                            step
                                                                                .files
                                                                                .length
                                                                        }
                                                                        )
                                                                    </span>
                                                                    <label className="cursor-pointer">
                                                                        <input
                                                                            type="file"
                                                                            multiple
                                                                            className="hidden"
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleFileUpload(
                                                                                    step.id,
                                                                                    e
                                                                                        .target
                                                                                        .files
                                                                                )
                                                                            }
                                                                        />
                                                                        <div className="flex items-center gap-1 text-xs text-[#E46320] hover:text-[#d55a1c] transition-colors">
                                                                            <Upload className="size-3" />
                                                                            Upload
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                {step.files
                                                                    .length >
                                                                    0 && (
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        {step.files.map(
                                                                            (
                                                                                file,
                                                                                fileIndex
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        fileIndex
                                                                                    }
                                                                                    className="flex items-center gap-2 p-2 bg-[#F8F9FA] rounded border"
                                                                                >
                                                                                    <FileText className="size-3 text-[#7D7D91]" />
                                                                                    <span className="text-xs text-[#23293D] flex-1 truncate">
                                                                                        {
                                                                                            file.name
                                                                                        }
                                                                                    </span>
                                                                                    <button
                                                                                        onClick={() =>
                                                                                            toggleFileVisibility(
                                                                                                step.id,
                                                                                                file.name
                                                                                            )
                                                                                        }
                                                                                        className="text-[#7D7D91] hover:text-[#23293D] transition-colors"
                                                                                    >
                                                                                        {file.visible ? (
                                                                                            <Eye className="size-3" />
                                                                                        ) : (
                                                                                            <EyeOff className="size-3" />
                                                                                        )}
                                                                                    </button>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() =>
                                                                setEditingStep(
                                                                    step.id
                                                                )
                                                            }
                                                            className="p-1 text-[#7D7D91] hover:text-[#23293D] transition-colors"
                                                        >
                                                            <Edit3 className="size-4" />
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                deleteStep(
                                                                    step.id
                                                                )
                                                            }
                                                            className="p-1 text-[#E65E5E] hover:text-[#d14545] transition-colors"
                                                        >
                                                            <Trash2 className="size-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EditStepForm = ({ step, onSave, onCancel, statusOptions }) => {
    const [editData, setEditData] = useState({
        name: step.name,
        status: step.status,
        note: step.note,
    });

    const handleSave = () => {
        onSave(editData);
    };

    return (
        <div className="space-y-3">
            <h3 className="font-medium text-[#23293D]">Edit Tracking Step</h3>
            <div>
                <label className="block text-sm text-[#7D7D91] mb-1">
                    Step Name
                </label>
                <input
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#0000001A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E46320]"
                />
            </div>
            <div>
                <label className="block text-sm text-[#7D7D91] mb-1">
                    Status
                </label>
                <select
                    value={editData.status}
                    onChange={(e) =>
                        setEditData({ ...editData, status: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#0000001A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E46320]"
                >
                    {statusOptions.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm text-[#7D7D91] mb-1">
                    Note
                </label>
                <textarea
                    value={editData.note}
                    onChange={(e) =>
                        setEditData({ ...editData, note: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#0000001A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E46320] h-20 resize-none"
                />
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-[#E46320] hover:bg-[#d55a1c] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    <Save className="size-4" />
                    Save Changes
                </button>
                <button
                    onClick={onCancel}
                    className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-[#3A4656] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    <X className="size-4" />
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SingleOrderTracking;
