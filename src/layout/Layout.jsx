import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../pages/Dashboard'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Notifications from '../components/Notifications'

const Layout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // click state
    const [isHovered, setIsHovered] = useState(false);        // hover state
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <div className="main-container">

                <Sidebar
                    isOpen={isSidebarOpen || isHovered}
                    setIsOpen={setIsSidebarOpen}
                    setIsHovered={setIsHovered}
                />
                {/* <Notifications /> */}
                <div className={`middle-container ${isSidebarOpen ? "ml-[var(--sidebar-width)]" : "ml-[var(--sidebar-width-collapsed)]"} ms-[var(--sidebar-width)]`}>
                    <Header toggleSidebar={toggleSidebar} setIsOpen={setIsSidebarOpen} />
                    <Routes>
                        <Route index element={<Dashboard />} />

                        <Route path="/admin" element={<Dashboard />} />


                        <Route path="/about" element={<h1>About</h1>} />
                    </Routes>
                </div>
            </div>

        </>
    )
}

export default Layout