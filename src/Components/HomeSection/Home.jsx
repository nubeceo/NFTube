import React, { useContext } from 'react'
import SideBar from './SideBar'
import UserContext from '../../Context/UserContext';
import Videos from './Videos';

function Home() {
  const { SetOpen, Open } = useContext(UserContext);



  // importing youtube data api key
  const youtubeApiKey = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;


  // url for fetching feed datat from yt datat api
  const feedUrl ="https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&key=${youtubeApiKey}";

  



  return (
    <div className='w-full flex flex-col top-11 md:flex-row  lg:flex-row items-start justify-end'>


      {/* side bar */}
      <div className={` w-full lg:w-1/6  ${Open ? 'lg:w-1/6' : 'lg:w-24'} duration-500   sm:top-11 left-0 fixed h-20 lg:h-screen items-start`}>
        <SideBar />
      </div>




      {/* feed section */}
      <div className={`  right-0 top-11  h-full w-full lg:w-5/6 ${Open ? 'lg:w-5/6' : 'lg:w-custom'}  duration-500 p-24 lg:p-6`}>

        <Videos  videos={[]}  />
      </div>


    </div>
  )
}

export default Home