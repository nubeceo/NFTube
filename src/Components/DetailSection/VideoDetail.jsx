import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';

function VideoDetail() {

  const EMPTY_API = "";
  const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;
  const API_KEY_BACKUP_ONE = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY_BACKUP_ONE;
  const API_KEY_BACKUP_TWO = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY_BACKUP_TWO;



  const [videoDetail, setvideoDetail] = useState(null);

  const { id } = useParams();


  // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY_BACKUP_ONE} 



  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Network request failed');
        }
        const result = await response.json();

        setvideoDetail(result.items[0]);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData();

    
  }, [id])

  // to filter data of video uploaded from timestamp
  function formatDate(timestamp) {
    if (!timestamp) return ''; 

    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString(undefined, options);
  }

  return (



    <div className='  flex  flex-col xl:flex-row  bg-customBg  items-center justify-center w-full  h-full xl:h-[100vh] sm:px-1 sm:py-4 md:p-2 lg:p-6'>


      <div className=' h-[370px] md:h-[510px] lg:h-[740px]  xl:h-full   w-[100%]  xl:w-[70%] flex items-center justify-center py-10 md:py-2 md:px-8'>

        <div className=" h-[80%] w-[90%] relative cursor-pointer">

          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 hover:opacity-100 transition duration-200 "></div>

          <div className=' relative bg-black  h-[100%] w-full flex items-center justify-center p-2 rounded-xl '>

            <ReactPlayer className=" react-player" width="100%" height="100%" controls url={`https://www.youtube.com/watch?v=${id}`} />

          </div>

        </div>

      </div>






      <div className=' h-[500px] md:h-[30%] xl:h-full w-[90%] xl:w-[30%] flex items-center justify-center py-2 md:px-4 '>
        
        <div className="h-[80%] relative w-full">

          <div className="absolute -inset-1 bg-gradient-to-r  from-pink-600 to-purple-600 blur opacity-75 hover:opacity-100 transition duration-200 "></div>

          <div className='relative bg-black  h-[100%] w-full  items-center rounded-lg justify-start flex flex-col font-mono'>

            <h1 className="p-6 font-bold text-xl font-mono">Discription</h1>

            <div className=" mb-5 px-6">
              <h2 className="text-white text-md">{videoDetail?.snippet?.title}</h2>
            </div>

            <div className="p-5 max-h-[320px] overflow-auto mb-5" style={{ maxWidth: '100%', overflow: 'auto' }}>
              <p className="text-gray-400 text-sm " style={{ wordWrap: 'break-word' }}>{videoDetail?.snippet?.localized.description}</p>
            </div>
            {/* {videoDetail?.snippet.channelTitle}  */}
            <div>
              <h2 className="mb-2">{formatDate(videoDetail?.snippet.publishedAt)}</h2>
              <h2 className="text-red-600">{videoDetail?.snippet.channelTitle}</h2>
            </div>

          </div>


        </div>

      </div>


    </div>

  )
}

export default VideoDetail