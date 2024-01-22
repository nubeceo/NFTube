import React from 'react'
import { Link } from 'react-router-dom'

function ChannelCard({ channelDetail }) {

  const demoPicUrl = 'https://s3.amazonaws.com/freecodecamp/freecodecamp-square-logo-large.jpg'

  return (
    <div className='    w-[280px] h-[220px]  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500  ' >
      <Link to={`/channel/${channelDetail?.id?.channelId}`} className='  w-full h-full rounded-[140px] flex flex-col items-center justify-center'>

        <div className=' p-1 h-[80%]  rounded-xl'>
          <img className='w-full h-full rounded-[140px] '
            // src={snippet?.thumbnails?.high?.url}
            src={channelDetail?.snippet?.thumbnails?.high?.url || demoPicUrl}
            alt="" />
        </div>

        <div className='p-2  ' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {channelDetail?.snippet?.channelTitle}
        </div>

      </Link>

    </div>
  )
}

export default ChannelCard