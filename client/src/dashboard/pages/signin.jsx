import { LockKeyhole, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard/home");
    };
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="w-full min-h-screen flex relative">
                <p className="absolute text-sm top-5 right-5 text-gray-500">
                    Doesn't have an account?{" "}
                    <Link className="font-bold text-black" to={"/signup"}>
                        Sign up
                    </Link>
                </p>
                <div className="hidden md:flex flex-1/5 h-screen bg-[#EBEBEB]  items-center justify-center">
                    <img src="dashboard-images/logo.png" width={200} alt="" />
                </div>
                <div className="md:flex-4/5 w-full">
                    <div className="w-full h-full p-6 flex items-center justify-center">
                        <div className="w-80 text-[#303030] flex flex-col gap-3">
                            <h1 className="font-black text-2xl md:text-3xl">
                                Sign In
                            </h1>
                            <p className="font-bold max-sm:text-sm">
                                Sign in with Open account
                            </p>
                            <div className="flex gap-3">
                                <button className="w-32 flex justify-center items-center gap-1 px-2 py-1.5 md:px-4 border rounded-xl shadow-lg border-[#D4D4D4]">
                                    <img
                                        src="/dashboard-images/google.png"
                                        alt=""
                                        className="size-5"
                                    />
                                    <p className="text-sm font-black">Google</p>
                                </button>
                                <button className="w-32 flex justify-center items-center gap-1 px-2 py-1.5  md:px-4 border rounded-xl shadow-lg border-[#D4D4D4]">
                                    <img
                                        src="/dashboard-images/apple.png"
                                        alt=""
                                        className="size-5 mb-0.5"
                                    />
                                    <p className="text-sm font-black">
                                        Apple ID
                                    </p>
                                </button>
                            </div>
                            <hr className="w-full my-4 border-2 border-[#D4D4D4]" />
                            <p className="font-bold max-sm:text-sm">
                                Or Continue with email address
                            </p>

                            <form onSubmit={handleSubmit} >
                                <div className="py-1  border border-[#D4D4D4] flex items-center gap-1 rounded-2xl">
                                    <Mail
                                        className="size-4  ml-2 "
                                        strokeWidth={1.5}
                                    />
                                    <input
                                        placeholder="Your email"
                                        className="font-bold py-1 px-2 outline-none"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="py-1 mt-2  border border-[#D4D4D4] flex items-center gap-1 rounded-2xl">
                                    <LockKeyhole
                                        className="size-4  ml-2 "
                                        strokeWidth={1.5}
                                    />
                                    <input
                                        placeholder="Your password"
                                        className="font-bold py-1 px-2 outline-none"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                type="submit"
                                    disabled={!email || !password}
                                    className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-2 mt-2 disabled:opacity-50 disabled:bg-gray-600 font-bold"
                                >
                                    Sign In
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

export default Signin;
