import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Settings, User, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

// Array of menu items
const menuItems = [
    {
        label: 'TypeScript',
        path: '/typescript',
    },
    {
        label: 'Styling',
        path: '/styling'
    },
    {
        label: 'Forms',
        path: '/forms'
    },
    {
        label: 'Error Boundaries',
        path: '/errors'
    },
    {
        label: 'Rendering Arrays',
        path: '/arrays'
    },
];

const Sidebar = () => {
    return (
        <>
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out`}
            >
                {/* Main nav */}
                <nav className="p-4 space-y-2 mt-12">
                    {menuItems.map((menu, index) => (
                        <div key={index}>
                            <NavLink
                                to={menu.path}
                                className={({ isActive }) =>
                                    `block my-1 p-2 rounded-r border-l-4 transition-all duration-300 ease-in-out ${isActive
                                        ? 'border-blue-500 bg-gray-800 text-blue-200'
                                        : 'border-transparent hover:bg-gray-800 hover:border-blue-500'
                                    }`
                                }
                                end
                            >
                                {menu.label}
                            </NavLink>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
