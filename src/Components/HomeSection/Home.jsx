import React, { useContext, useEffect, useState } from 'react'
import SideBar from './SideBar'
import UserContext from '../../Context/UserContext';
import Videos from './Videos';
import { emphasize } from '@mui/material';



function Home() {

  const { SetOpen, Open , selectedCategory, setselectedCategory,  searchValue, setSearchValue} = useContext(UserContext);


  // importing youtube data api key
  // const youtubeApiKey = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;


  // url for fetching feed datat from yt datat api
  // const feedUrl ="https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&key=${youtubeApiKey}";

  // const [selectedCategory, setselectedCategory] = useState('New');

  const [videos, setvideos] = useState([]);

  // fetching feed on screen load

  

  // importing api
  const EMPTY_API = "";
  const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;
  const API_KEY_BACKUP_ONE = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY_BACKUP_ONE;
  const API_KEY_BACKUP_TWO = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY_BACKUP_TWO;

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${selectedCategory}&key=${API_KEY_BACKUP_ONE}`);
        if (!response.ok) {
          throw new Error('Network request failed');
        }
        const result = await response.json();
        setvideos(result.items);

        setselectedCategory("");
      } catch (error) {
        console.log(error);
      }

      // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${selectedCategory}&key=${EMPTY_API}`)
      //   .then((res)=>res.json())
      //   .then((data) => setvideos(data.items))

    };




    return () => fetchData();

  }, [selectedCategory]);





  return (
    <div className='w-full flex flex-col top-11 md:flex-row  lg:flex-row items-start justify-end'>


      {/* side bar section */}
      <div className={` w-full lg:w-1/6  ${Open ? 'lg:w-1/6' : 'lg:w-24'} duration-500   sm:top-11 left-0 fixed h-20 lg:h-screen items-start`}>

        {/* sidebar component */}
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        // fetchData={fetchData}
        />

      </div>




      {/* feed section */}
      <div className={`  right-0 top-11  h-full w-full lg:w-5/6 ${Open ? 'lg:w-5/6' : 'lg:w-custom'}  duration-500 p-24 lg:p-6`}>

        {/* video card component */}
        <Videos selectedCategory={selectedCategory} videos={videos} />

      </div>


    </div>
  )
}

export default Home;