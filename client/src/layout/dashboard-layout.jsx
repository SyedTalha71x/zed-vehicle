import { useState } from "react";
import Navbar from "../dashboard/components/navbar";
import Sidebar from "../dashboard/components/sidebar";
import { Outlet } from "react-router-dom";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen bg-gray-50 plus-jakarta-sans-400">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div className={`${isSidebarOpen ? "lg:pl-60" : "lg:pl-60"} flex-1 overflow-auto`}>
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
