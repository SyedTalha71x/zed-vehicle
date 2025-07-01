import { useEffect, useState } from "react";
import Navbar from "../dashboard/components/navbar";
import Sidebar from "../dashboard/components/sidebar";
import { Outlet } from "react-router-dom";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [isSidebarOpen]);

    return (
        <div className="flex h-screen bg-gray-50 plus-jakarta-sans-400">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div
                className={`${
                    isSidebarOpen ? "lg:pl-60" : "lg:pl-60"
                } flex-1 overflow-auto relative`}
            >
                {isSidebarOpen && (
                    <div className="w-full min-h-screen top-0 bottom-0 left-0 right-0 lg:hidden fixed bg-black/10 z-[99]"></div>
                )}
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </div>
        </div>
    );
}

export default App;
