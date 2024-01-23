import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function VideoCard({ videos: {id: {videoId},snippet} }) {

    const demovideoURL ='https://www.github.com/nubeceo/NFTube';

    // { videos: {id: {videoId},snippet} }
    // console.log(snippet);

    return (
        <div className=' border p-1 w-[280px] h-[220px] rounded-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 ' >
            <Link to={videoId? `/video/${videoId}` :demovideoURL} className='w-full h-full rounded-xl'>

                <div className='bg-white/10 p-1 h-[80%]  rounded-xl'>
                    <img className='w-full h-full rounded-xl' src={snippet?.thumbnails?.high?.url} alt="" />
                </div>

                <div className='p-2  '  style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {snippet?.title}
                </div>

            </Link>
        </div>
    )
}

export default VideoCard