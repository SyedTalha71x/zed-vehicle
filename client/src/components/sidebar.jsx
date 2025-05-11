import { Link } from 'react-router-dom';
import Logo from '../../public/dashboard-images/Logo.svg';
import Menu from '../../public/dashboard-images/Menu.svg';

import { IoIosLogOut } from "react-icons/io";



const Sidebar = () => {
    return (
        <div className="md:w-16 w-13 bg-[#F5F5F5] border-r border-gray-200 flex flex-col justify-between items-center py-6 h-screen">
            <div className="flex flex-col items-center">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="h-full mt-16 flex flex-col relative">
                    <div className="w-1 h-12 bg-indigo-600 rounded-r-md absolute left-0"></div>
                    <Link to="/dashboard/vehicle-detail">
                        <button className="p-3 mb-4 relative">
                            <img src={Menu} alt="Menu Link" />
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mb-4">
                <Link to="/">
                    <button className="p-3 cursor-pointer">
                       <IoIosLogOut size={25}/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
