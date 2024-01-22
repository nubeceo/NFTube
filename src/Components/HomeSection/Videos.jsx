import React,{useContext} from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import UserContext from '../../Context/UserContext';



const Videos = ({ selectedCategory, videos }) => {

  const { Open } = useContext(UserContext);


  console.log(videos);
  return (
    <div>

      {/* selected category */}
      <div className=''>{selectedCategory} <span className='text-red-600 '>NFTs</span></div>


      {/* importing video card to set video feed */}
      <div className={` h-full p-6 flex flex-wrap group justify-center ${Open? 'gap-10': 'gap-5'}  `}>

        {/* <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/> */}

        {/* <ChannelCard /> */}

        {videos?.map((item, index) => (
          <div key={index}  className={``}>

            {/* render channel card */}
            {
              item.id.channelId && <ChannelCard channelDetail={item} />
            }

            {/* render video card */}
            {
              item.id.videoId && <VideoCard videos={item} />
            }

            

          </div>
        ))}

      </div>


    </div>
  )
}

export default Videos;