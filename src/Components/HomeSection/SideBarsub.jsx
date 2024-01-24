import React, { createElement, useState, useEffect, useContext, useCallback } from 'react'
import { FaHome, FaUserAstronaut, FaHistory, FaArrowDown, FaAngleDown } from "react-icons/fa";



function SideBarsub({ menu, Open, i, setselectedCategory, fetchData }) {

    const [menuOpen, SetMenuOpen] = useState(false);


    return (
        <div className='hover:bg-gray-900 rounded-md pt-3 lg:pt-0  '>


            {/* render the menu option which has sublist */}
            <div className=' group cursor-pointer hidden lg:flex items-center text-md gap-3.5 font-medium  px-2 pl-3 my-3  hover:bg-gray-900 rounded-md '
                onClick={() => SetMenuOpen(!menuOpen)}
            >

                <div>{React.createElement(menu.icon, { size: "20" })}</div>

                <h2
                    style={{
                        transitionDelay: `${i + 3}00ms`
                    }}
                    className={`whitespace-pre duration-500 ${!Open && 'opacity-0 translate-x-28 overflow-hidden '} `}>{menu.name}

                </h2>

                <div style={{
                    transitionDelay: `${i + 3}00ms`
                }}
                    className={`whitespace-pre duration-500 ${!Open && 'opacity-0 translate-x-28 overflow-hidden '} `}>
                    <FaAngleDown />
                </div>





                <h2 className={` ${Open && "hidden"}   absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-100 group-hover:w-fit`}>
                    {menu.name}
                </h2>
            </div>





            {/* render the sidebar menu's : sub lists */}
            <ul className={`  cursor-pointer  items-center text-sm gap-3.5 font-medium  px-2 pl-3 my-3  rounded-md overflow-y-auto  ${menuOpen ? 'max-h-40' : 'max-h-0'}  duration-500`}>
                {menu?.subRoutes?.map((subRoutes, i) => (
                    <li key={subRoutes?.name}
                        className='flex items-center gap-2 py-2 px-8 hover:bg-red-600 rounded-md'
                        onClick={() => setselectedCategory(subRoutes?.name)}
                    >

                        {/* for icon/profile pic */}
                        {subRoutes?.pic ? (<img src={subRoutes?.pic} className='w-8 h-8 rounded-2xl' />) : (
                            <span className='text-2xl'>{subRoutes?.icon}</span>
                        )

                        }

                        {/* for name/topic */}
                        {subRoutes?.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SideBarsub