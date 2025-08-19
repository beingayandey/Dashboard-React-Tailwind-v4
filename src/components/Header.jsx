import { Sidebar, SidebarIcon } from '@phosphor-icons/react'
import React from 'react'

const Header = ({ toggleSidebar }) => {
    return (
        <>
            <header className='main-header z-50 bg-[var(--color-primary-white)] shadow-[var(--sidebar-boxshadow)]
        '>

                <div className="inner-header p-4">

                    <div className="flex justify-between items-center" >

                        <div className="left-menu flex items-center">

                            <div className="sidebar-collapsed cursor-pointer me-4 " onClick={toggleSidebar} >
                                <SidebarIcon size={20} />
                            </div>
                            <div className="breadcrumbs">
                                <ol className="flex space-x-3 text-[length:var(--font-small)]">
                                    <li className="flex items-center">
                                        <a href="javaScript:;" className="flex items-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">Snow</a>
                                    </li>
                                    <li className="flex items-center space-x-1">
                                        <span className="text-black/40 dark:text-white/40">/</span>
                                        <a href="javaScript:;" className="flex items-center px-3 text-black dark:text-white">Widgets</a>
                                    </li>
                                </ol>

                            </div>


                        </div>
                        <div className="middle-menu"></div>
                        <div className="right-menu"></div>



                    </div>

                </div>

            </header>
        </>
    )
}

export default Header