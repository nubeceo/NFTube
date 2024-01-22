import React from 'react'
import ReactPlayer from 'react-player';

function VideoDetail() {
  return (



    <div className=' bg-customBg  flex items-center justify-center w-full h-[100vh] p-6'>
      <div className=' h-full w-[70%] flex items-center justify-center py-2 px-8'>

        <div className="h-[80%] w-full relative cursor-pointer">

          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 hover:opacity-100 transition duration-200 "></div>

          <div className=' relative bg-black  h-[100%] w-full flex items-start justify-center p-2 rounded-xl '>
            video section
          </div>

        </div>

      </div>






      <div className='  h-full w-[30%] flex items-center justify-center py-2 px-4 '>
        <div className="h-[80%] relative w-full">
          <div className="absolute -inset-1 bg-gradient-to-r  from-pink-600 to-purple-600 blur opacity-75 hover:opacity-100 transition duration-200 "></div>


          <div className='relative bg-black  h-[100%] w-full flex items-start rounded-lg justify-center'>

            <h1 className="p-1">Discription</h1>



          </div>
        </div>
      </div>
    </div>

  )
}

export default VideoDetail