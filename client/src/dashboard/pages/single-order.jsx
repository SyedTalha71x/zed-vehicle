import React, { useState } from "react";
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
} from "lucide-react";
import { trackingOrderData } from "../libs/dummy-data";
import { useNavigate, useParams } from "react-router-dom";

const SingleOrderTracking = () => {
    const { id: orderId } = useParams();
    const navigate = useNavigate();
    const orderData = trackingOrderData.filter(
        (order) => order.orderId === orderId
    )[0];

    // Initial tracking steps
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

    const toggleFileVisibility = (stepId, fileName) => {
        setTrackingSteps(
            trackingSteps.map((step) =>
                step.id === stepId
                    ? {
                          ...step,
                          files: step.files.map((file) =>
                              file.name === fileName
                                  ? { ...file, visible: !file.visible }
                                  : file
                          ),
                      }
                    : step
            )
        );
    };

    const handleFileUpload = (stepId, files) => {
        const newFiles = Array.from(files).map((file) => ({
            name: file.name,
            visible: true,
            type: file.type.startsWith("image/") ? "image" : "pdf",
        }));

        setTrackingSteps(
            trackingSteps.map((step) =>
                step.id === stepId
                    ? { ...step, files: [...step.files, ...newFiles] }
                    : step
            )
        );
    };
    if (!orderData) {
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
                    <button className="p-2 border bg-white border-[#292D3214] shadow rounded-lg hover:bg-gray-50">
                        <Box className="size-5 text-[#3A4656]" />
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
                                    <Package
                                        className="size-5"
                                        color="#E46320"
                                    />
                                </div>
                                <h2 className="font-semibold text-[#23293D]">
                                    Order Information
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-[#7D7D91]">
                                        Order ID
                                    </label>
                                    <p className="font-medium text-[#23293D]">
                                        {orderData.orderId}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-[#7D7D91]">
                                        Status
                                    </label>
                                    <span
                                        className={`py-1 text-xs px-2 rounded-sm font-medium ${getStatusStyle(
                                            orderData.status
                                        )}`}
                                    >
                                        {orderData.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-[#7D7D91]">
                                            Category
                                        </label>
                                        <p className="font-medium text-[#23293D]">
                                            {orderData.category}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-[#7D7D91]">
                                            Weight
                                        </label>
                                        <p className="font-medium text-[#23293D]">
                                            {orderData.weight}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-[#7D7D91]">
                                        Fee
                                    </label>
                                    <p className="font-medium text-[#23293D] text-lg">
                                        {orderData.fee}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-[#7D7D91]">
                                        Route
                                    </label>
                                    <p className="font-medium text-[#23293D]">
                                        {orderData.route}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vehicle Information */}
                        <div className="bg-white border-2 border-[#1A2F570F] shadow rounded-xl p-6 mt-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1 border border-[#292D3214] shadow rounded-lg">
                                    <MapPin
                                        className="size-5"
                                        color="#307EF3"
                                    />
                                </div>
                                <h2 className="font-semibold text-[#23293D]">
                                    Vehicle Details
                                </h2>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm text-[#7D7D91]">
                                        VIN
                                    </label>
                                    <p className="font-medium text-[#23293D]">
                                        {orderData.vin}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-[#7D7D91]">
                                            Make
                                        </label>
                                        <p className="font-medium text-[#23293D]">
                                            {orderData.make}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-[#7D7D91]">
                                            Model
                                        </label>
                                        <p className="font-medium text-[#23293D]">
                                            {orderData.model}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-[#7D7D91]">
                                        Year
                                    </label>
                                    <p className="font-medium text-[#23293D]">
                                        {orderData.year}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm text-[#7D7D91]">
                                        Destination Port
                                    </label>
                                    <p className="font-medium text-[#23293D]">
                                        {orderData.destinationPort}
                                    </p>
                                </div>
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
