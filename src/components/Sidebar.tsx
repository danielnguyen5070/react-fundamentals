import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Settings, User, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleSubmenu = (name: string) => {
        setOpenSubmenu((prev) => (prev === name ? null : name));
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:shadow-lg`}
            >
                {/* Main nav */}
                <nav className="p-4 space-y-2">
                    {/* USERS */}
                    <div>
                        <button
                            onClick={() => toggleSubmenu('users')}
                            className={`flex my-1 items-center justify-between w-full p-2 rounded-r transition-all duration-300 ease-in-out ${openSubmenu === 'users' ? 'border-l-4 border-blue-500 bg-gray-800' : 'border-l-2 border-transparent hover:border-l-4 hover:border-blue-500 hover:bg-gray-800'
                                }`}
                        >
                            <span className="flex items-center space-x-3">
                                <span>Users</span>
                            </span>
                            {openSubmenu === 'users' ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        <div
                            className={`pl-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === 'users' ? 'max-h-40' : 'max-h-0'
                                }`}
                        >
                            <NavLink
                                to="/users/list"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `block p-2 my-1 pl-4 rounded-r border-l-4 transition-all duration-300 ease-in-out ${isActive ? 'border-l-4 border-blue-200' : 'border-l-2 border-transparent hover:bg-gray-800'
                                    }`
                                }
                            >
                                List Users
                            </NavLink>
                            <NavLink
                                to="/users/add"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `block p-2 my-1 pl-4 rounded-r border-l-4 transition-all duration-300 ease-in-out ${isActive ? 'border-l-4 border-blue-200' : 'border-l-2 border-transparent hover:bg-gray-800'
                                    }`
                                }
                            >
                                Add User
                            </NavLink>
                        </div>
                    </div>

                    {/* SETTINGS */}
                    <div>
                        <button
                            onClick={() => toggleSubmenu('settings')}
                            className={`flex my-1 items-center justify-between w-full p-2 rounded-r transition-all duration-300 ease-in-out ${openSubmenu === 'settings' ? 'border-l-4 border-blue-500 bg-gray-800' : 'border-l-2 border-transparent hover:border-l-4 hover:border-blue-500 hover:bg-gray-800'
                                }`}
                        >
                            <span className="flex items-center space-x-3">
                                <span>Settings</span>
                            </span>
                            {openSubmenu === 'settings' ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        <div
                            className={`pl-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === 'settings' ? 'max-h-40' : 'max-h-0'
                                }`}
                        >
                            <NavLink
                                to="/settings/profile"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `block my-1 p-2 pl-4 rounded-r border-l-4 transition-all duration-300 ease-in-out ${isActive ? 'border-l-4 border-blue-200' : 'border-l-2 border-transparent hover:bg-gray-800'
                                    }`
                                }
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to="/settings/preferences"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `block my-1 p-2 pl-4 rounded-r border-l-4 transition-all duration-300 ease-in-out ${isActive ? 'border-l-4 border-blue-200' : 'border-l-2 border-transparent hover:bg-gray-800'
                                    }`
                                }
                            >
                                Preferences
                            </NavLink>
                        </div>
                    </div>

                </nav>
            </div>
        </>
    );
};

export default Sidebar;
