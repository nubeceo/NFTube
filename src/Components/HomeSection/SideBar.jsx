import React, { createElement, useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import UserContext from '../../Context/UserContext';
import axios from 'axios';
import SideBarsub from './SideBarsub';

import { FaHome, FaUserAstronaut, FaHistory, FaArrowDown, FaAngleDown, FaCode, FaProductHunt } from "react-icons/fa";
import { RiWechatChannelsLine, RiReactjsLine } from "react-icons/ri";
import { TbCategory, TbBrandNextjs } from "react-icons/tb";
import { MdOutlineWhatshot, MdLiveTv, MdOutlineSportsScore, MdOutlineTheaterComedy } from "react-icons/md";
import { IoIosMusicalNotes } from "react-icons/io";
import { SiKnowledgebase } from "react-icons/si";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { LuGamepad2 } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { BsCurrencyBitcoin } from "react-icons/bs";




function SideBar( {setselectedCategory, selectedCategory} ) {
    //  importing open from usercontext
    const { SetOpen, Open } = useContext(UserContext);


    // menu array
    const menu = [
        { name: "Home", link: '/', icon: FaHome },
        { name: "User", link: '/', icon: FaUserAstronaut },
        { name: "History", link: '/', icon: FaHistory },
        {
            name: "Top Channels", link: '/', icon: RiWechatChannelsLine, subRoutes: [
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZTM49hEx9zyui_0zDZKi75EgqJPJfuDmWu1cePdQQ=s176-c-k-c0x00ffffff-no-rj",

                    name: "MrBeast",
                },
                {
                    pic: "https://yt3.googleusercontent.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj",

                    name: "PewDiePie ",
                },
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZSS262qsZXYQwuo2ajP-JCp_5XSPJ9_NorTenliGg=s176-c-k-c0x00ffffff-no-rj",

                    name: "Total Gaming",
                },
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZRGX_4_QzfvKP6XnYRS8fhK5r0drPcvUBa_EMHxfA=s176-c-k-c0x00ffffff-no-rj",

                    name: "Mo Vlogs",
                },
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZTJa98kcY4SsISd-ibezrzLEIDXc-iaTn4QC1gYfQ=s176-c-k-c0x00ffffff-no-rj",

                    name: "imKay",
                },
                {
                    pic: "https://yt3.googleusercontent.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s176-c-k-c0x00ffffff-no-rj",

                    name: "CarryMinati",
                },
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZQ2v2988cr0ftN-GZRvr6D7vj_3E_z_pCnAScuhjg=s176-c-k-c0x00ffffff-no-rj",

                    name: "Mumbiker Nikhil",
                },
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZTNiWLD2-Qw1eWFmRJkGBzfI-8oFNmYk5tBnpNurQ=s176-c-k-c0x00ffffff-no-rj",

                    name: "CodeWithHarry",
                },
                {
                    pic: "https://yt3.googleusercontent.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s176-c-k-c0x00ffffff-no-rj",

                    name: "Apna College",
                },
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s176-c-k-c0x00ffffff-no-rj",

                    name: "freeCodeCamp",
                },
                {
                    pic: "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",

                    name: "JavaScript Mastery",
                },
                {
                    pic: "https://yt3.googleusercontent.com/ytc/AIf8zZR7ZLXsol2-5X-UnXXZfFqN3rehkDpHPBkB6gZwzg=s176-c-k-c0x00ffffff-no-rj",

                    name: "george hotz archive",
                },
                {
                    pic: "https://yt3.googleusercontent.com/9uXIJnlvXJmCzJ4Buh_9FjRYhiqM7vK1dD80kTTv12iXapl1NoIspJddwoXihGvXOnIijgaLy40=s176-c-k-c0x00ffffff-no-rj",

                    name: "Coding Jesus",
                },


            ]
        },
        {
            name: "Explore", link: '/', icon: TbCategory, subRoutes: [
                { name: 'New', icon: <MdOutlineWhatshot />, },
                { name: 'Coding', icon: <FaCode />, },
                { name: 'ReactJS', icon: <RiReactjsLine />, },
                { name: 'NextJS', icon: <TbBrandNextjs />, },
                { name: 'Music', icon: <IoIosMusicalNotes /> },
                { name: 'Education', icon: <SiKnowledgebase />, },
                { name: 'Podcast', icon: <PiGooglePodcastsLogoBold />, },
                { name: 'Movie', icon: <BiSolidCameraMovie />, },
                { name: 'Gaming', icon: <LuGamepad2 />, },
                { name: 'Live', icon: <MdLiveTv />, },
                { name: 'Sport', icon: <MdOutlineSportsScore />, },
                { name: 'Fashion', icon: <FaProductHunt />, },
                { name: 'Beauty', icon: <FaProductHunt />, },
                { name: 'Comedy', icon: <MdOutlineTheaterComedy />, },
                { name: 'Gym', icon: <CgGym />, },
                { name: 'Crypto', icon: <BsCurrencyBitcoin />, },
            ]
        },

    ];





    return (
        <div className={`bg-black text-white justify-center lg:justify-start w-full h-full p-6 flex  flex-row lg:flex-col `}>

            {/* home tab */}
            {/* <div className="p-6 flex items-center justify-start">

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" style={{ fill: '#FFFFFF' }} className="mr-2">
                    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                </svg>


                <Link to={"/"}>
                    <h1 className="font-mono font-bold hover:text-gray-300">HOME</h1>
                </Link>

            </div> */}



            {/* mapping menu */}
            {
                menu?.map((menu, i) => {


                    if (menu.subRoutes) {
                        return <SideBarsub menu={menu} Open={Open} i={i} setselectedCategory={setselectedCategory}  />
                        // <div className=' group cursor-pointer flex items-center text-md gap-3.5 font-medium py-2 px-2 pl-3 my-3  hover:bg-gray-900 rounded-md '>


                        //     <div>{React.createElement(menu.icon, { size: "20" })}</div>

                        //     <h2
                        //         style={{
                        //             transitionDelay: `${i + 3}00ms`
                        //         }}
                        //         className={`whitespace-pre duration-500 ${!Open && 'opacity-0 translate-x-28 overflow-hidden '} `}>{menu.name}

                        //     </h2>

                        //     <div style={{
                        //         transitionDelay: `${i + 3}00ms`
                        //     }}
                        //         className={`whitespace-pre duration-500 ${!Open && 'opacity-0 translate-x-28 overflow-hidden '} `}>
                        //         <FaAngleDown />
                        //     </div>



                        //     <h2 className={` ${Open && "hidden"}   absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-100 group-hover:w-fit`}>
                        //         {menu.name}
                        //     </h2>


                        // </div>

                    }

                    return (
                        <Link to={menu.link} key={i} className={` group  flex items-center text-md gap-3.5 font-medium py-2 px-2 pl-3 my-3  hover:bg-gray-900 rounded-md`}>

                            <div>{React.createElement(menu.icon, { size: "20" })}</div>

                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`
                                }}
                                className={`whitespace-pre duration-500 ${!Open && 'opacity-0 translate-x-28 overflow-hidden '} `}>{menu.name}

                            </h2>

                            <h2 className={` ${Open && "hidden"}   absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-300 group-hover:w-fit`}>
                                {menu.name}
                            </h2>
                        </Link>
                    )
                })
            }





        </div>
    )
}

export default SideBar