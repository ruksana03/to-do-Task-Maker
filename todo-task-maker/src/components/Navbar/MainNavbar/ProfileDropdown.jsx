import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { BiCaretDown, BiCaretRight } from "react-icons/bi"; 
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";

const ProfileDropdown = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            {user ? (
                <button
                    onClick={toggleDropdown}
                    className="flex justify-between items-center space-x-2 focus:outline-none"
                >
                    {isDropdownOpen ? <BiCaretRight /> : <BiCaretDown />}
                    <img
                        className="w-10 h-10 rounded-full object-cover shadow-md shadow-white"
                        src={user?.photoURL}
                        alt={user?.displayName}
                    />
                    {isDropdownOpen && (
                        <div className="absolute z-10 mt-2 right-10 top-10 w-48 bg-white text-black rounded-lg shadow-lg">
                            <ul className="py-2">
                                <li>{user?.displayName}</li>
                                <li>
                                    <Link to="dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <button onClick={logOut}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </button>
            ) : (
                <Link to="login" className="flex justify-between px-3 z-10 gap-2">
                    <button className="group relative">
                        <MdOutlineLogin className="text-2xl" />
                        {/* Hidden text on hover */}
                        <span className="hidden group-hover:inline-block absolute -top-8 right-0 ml-2 text-white text-sm font-extrabold p-2 rounded-md">
                            Login
                        </span>
                    </button>
                    <FaUserCircle />
                </Link>
            )}
        </div>
    );
};

export default ProfileDropdown;



