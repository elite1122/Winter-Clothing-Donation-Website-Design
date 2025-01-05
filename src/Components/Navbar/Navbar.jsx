import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div className="flex justify-between w-11/12 mx-auto items-center py-3 flex-wrap">
                {/* Logo */}
                <figure className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-10" />
                </figure>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-4 font-semibold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-700"
                        }
                    >
                        Home
                    </NavLink>
                    <span>|</span>
                    <NavLink
                        to="/donation-campaigns"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-700"
                        }
                    >
                        Donation Campaigns
                    </NavLink>
                    <span>|</span>
                    <NavLink
                        to="/how-to-help"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-700"
                        }
                    >
                        How to Help
                    </NavLink>
                    {user && (
                        <>
                            <span>|</span>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                                }
                            >
                                Dashboard
                            </NavLink>
                        </>
                    )}
                </div>

                {/* User Profile & Logout */}
                <div className="flex items-center space-x-4">
                    {user?.photoURL ? (
                        <div className="flex items-center gap-2">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        referrerPolicy="no-referrer"
                                        alt="User Avatar"
                                        src={user?.photoURL && user.photoURL}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={logOut}
                                className="hidden md:flex btn btn-outline text-gray-700"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "hidden md:flex btn btn-primary text-white" : "hidden md:flex btn btn-outline text-gray-700"
                            }
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                <div className="md:hidden dropdown dropdown-end">
                    <button tabIndex="0" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation-campaigns"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                                }
                            >
                                Donation Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/how-to-help"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                                }
                            >
                                How to Help
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-500 font-bold" : "text-gray-700"
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        )}
                        {user ? (
                            <li>
                                <button onClick={logOut} className="btn btn-sm btn-outline text-gray-700">
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-500 font-bold" : "text-gray-700"
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
