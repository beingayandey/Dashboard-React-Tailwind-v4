import React, { useEffect, useState } from "react";
import { menuData } from "../data/menuData";
import SidebarItem from "./sidebar/SidebarItem";
import UserMenu from "./sidebar/UserMenu";

const Sidebar = ({ isOpen, isHovered, setIsHovered }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const expanded = isOpen || isHovered;

    const toggleMenu = (index) => {
        setOpenDropdown(prev => (prev === index ? null : index));
    };

    useEffect(() => {
        if (!expanded) setOpenDropdown(null);
    }, [expanded]);

    return (
        <div
            className={`sidebar fixed left-0 top-0 bottom-0 z-50 
        ${expanded ? "w-[var(--sidebar-width)]" : "w-[var(--sidebar-width-collapsed)]"} 
        bg-[var(--color-primary-white)] overflow-y-auto 
        text-[length:var(--font-small)] shadow-[var(--sidebar-boxshadow)]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="logo p-4 font-bold text-xl">Admin</div>

            <nav className="text-[var(--color-primary-black)]">
                <ul className="space-y-2 p-1">
                    {menuData.map((menu, index) => (
                        <SidebarItem
                            key={index}
                            menu={menu}
                            index={index}
                            expanded={expanded}
                            isOpen={openDropdown}
                            toggleMenu={toggleMenu}
                        />
                    ))}
                </ul>
            </nav>

            <UserMenu expanded={expanded} />
        </div>
    );
};

export default Sidebar;
