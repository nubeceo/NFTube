import React, { createElement, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome, FaUserAstronaut, FaHistory  } from "react-icons/fa";
import { RiWechatChannelsLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";

function SideBar() {

    const menu=[
        {name:"Home", link:'/', icon: FaHome },
        {name:"User", link:'/', icon: FaUserAstronaut },
        {name:"History", link:'/', icon: FaHistory  },
        {name:"Top Channels", link:'/', icon: RiWechatChannelsLine },
        {name:"Explore", link:'/', icon: TbCategory },
        
    ];

    const [open, SetOpen] = useState(true);


    return (
        <div className='bg-black text-white justify-center lg:justify-start w-full h-full p-6 flex  flex-row lg:flex-col '>

            {/* home tab */}
            {/* <div className="p-6 flex items-center justify-start">

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" style={{ fill: '#FFFFFF' }} className="mr-2">
                    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                </svg>


                <Link to={"/"}>
                    <h1 className="font-mono font-bold hover:text-gray-300">HOME</h1>
                </Link>

            </div> */}


            {
                menu?.map((menu ,i)=>(
                    <Link to={menu.link}  key={i} className='flex items-center text-md gap-3.5 font-medium p-2 my-3  hover:bg-gray-900 rounded-md'>
                        <div>{React.createElement(menu.icon, {size:"20"})}</div>
                        <h2>{menu.name}</h2>
                    </Link>
                ))
            }

        </div>
    )
}

export default SideBar