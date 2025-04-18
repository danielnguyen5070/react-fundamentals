import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Settings, User, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

// Array of menu items
const menuItems = [
    {
        label: 'TypeScript',
        submenu: [
            { label: '01. Props', path: '/typescript/props' },
            { label: '02. Narrow Types', path: '/typescript/narrow' },
            { label: '03. Derive Types', path: '/typescript/derive' },
            { label: '04. Default Props', path: '/typescript/default' },
            { label: '05. Reduce Duplication', path: '/typescript/duplication' },
            { label: '06. Satisfies', path: '/typescript/satisfies' },
        ],
    },
    {
        label: 'Styling',
        submenu: [
            { label: '01. Styling', path: '/styling/styling' },
            { label: '02. Custom Component', path: '/styling/compenent' },
            { label: '03. Size Prop', path: '/styling/size-prop' },
        ],
    },
    {
        label: 'Forms',
        submenu: [
            { label: '01. Form', path: '/forms/form' },
            { label: '02. Form Action', path: '/forms/form-action' },
            { label: '03. Input Types', path: '/forms/input-types' },
            { label: '04. Submission', path: '/forms/submission' },
            { label: '05. Form Actions', path: '/forms/form-actions' },
        ],
    },
    {
        label: 'Inputs',
        submenu: [
            { label: '01. Checkbox', path: '/inputs/checkbox' },
            { label: '02. Select', path: '/inputs/select' },
            { label: '03. Radios', path: '/inputs/radios' },
            { label: '04. Hidden Inputs', path: '/inputs/hidden-inputs' },
            { label: '05. Default Value', path: '/inputs/default-value' },
        ],
    },
    {
        label: 'Error Boundaries',
        submenu: [
            { label: '01. Composition', path: '/errors/composition' },
            { label: '02. Other Errors', path: '/errors/other-errors' },
            { label: '03. Reset', path: '/errors/reset' },
        ],
    },
    {
        label: 'Rendering Arrays',
        submenu: [
            { label: '01. Key prop', path: '/arrays/key-prop' },
            { label: '02. Focus State', path: '/arrays/focus-state' },
            { label: '03. Key Reset', path: '/arrays/key-reset' },
        ],
    },
];

const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleSubmenu = (name: string) => {
        setOpenSubmenu((prev) => (prev === name ? null : name));
    };

    return (
        <>

            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out`}
            >
                {/* Main nav */}
                <nav className="p-4 space-y-2">
                    {menuItems.map((menu, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleSubmenu(menu.label)}
                                className={`flex my-1 items-center justify-between w-full p-2 rounded-r transition-all duration-300 ease-in-out ${openSubmenu === menu.label ? 'border-l-4 border-blue-500 bg-gray-800' : 'border-l-2 border-transparent hover:border-l-4 hover:border-blue-500 hover:bg-gray-800'
                                    }`}
                            >
                                <span className="flex items-center space-x-3">
                                    <span>{menu.label}</span>
                                </span>
                                {openSubmenu === menu.label ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <div
                                className={`pl-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === menu.label ? '' : 'max-h-0'
                                    }`}
                            >
                                {menu.submenu.map((item, subIndex) => (
                                    <NavLink
                                        key={subIndex}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block p-2 my-1 pl-4 rounded-r border-l-4 transition-all duration-300 ease-in-out ${isActive
                                                ? 'border-blue-500 bg-gray-800 text-blue-200'
                                                : 'border-transparent hover:bg-gray-800 hover:border-blue-500'
                                            }`
                                        }
                                        end // Ensures exact matching for active state
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
