import { LockKeyhole, Mail } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const navigate = useNavigate();
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (index, value) => {
        if (value.length > 1) {
            value = value.slice(0, 1);
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        navigate("/signin");
        console.log("OTP submitted:", enteredOtp);
    };
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="w-full min-h-screen flex relative">
                <div className="hidden md:flex flex-1/5 h-screen bg-[#EBEBEB]  items-center justify-center">
                    <img src="dashboard-images/logo.png" width={200} alt="" />
                </div>
                <div className="md:flex-4/5 w-full">
                    <div className="w-full h-full p-6 flex items-center justify-center">
                        <div className="w-80 text-[#303030] flex flex-col gap-3">
                            <h1 className="font-black text-2xl md:text-3xl">
                                Sign Up
                            </h1>
                            <p className="font-bold max-sm:text-sm">
                                We just send you a verify code. Check your inbox
                                to get them.{" "}
                            </p>

                            <hr className="w-full my-4 border-2 border-[#D4D4D4]" />

                            <form onSubmit={handleSubmit}>
                                <div className="flex w-full justify-between gap-2">
                                    {[0, 1, 2, 3].map((index) => (
                                        <input
                                            key={index}
                                            ref={inputRefs[index]}
                                            className="w-18 px-2 py-8 bg-gray-200 rounded-3xl font-black text-3xl flex justify-center items-center text-center"
                                            type="number"
                                            maxLength="1"
                                            value={otp[index]}
                                            onChange={(e) =>
                                                handleChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            onKeyDown={(e) =>
                                                handleKeyDown(index, e)
                                            }
                                            pattern="[0-9]*"
                                            inputMode="numeric"
                                        />
                                    ))}
                                </div>
                                <button
                                    disabled={otp.some((digit) => digit === "")}
                                    type="submit"
                                    className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-2 mt-4 disabled:opacity-50 disabled:bg-gray-600 font-bold"
                                >
                                    Continue
                                </button>
                            </form>
                            <p className="text-sm mt-5 text-gray-500 font-black">
                                This site is protected by reCAPTCHA and the
                                Google Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
