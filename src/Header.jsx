import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import network from './assets/network.gif'
import UserContext from './Context/UserContext'
import userContext from './Context/UserContext'

function Header() {

  const { SetOpen, Open,searchValue, setSearchValue ,selectedCategory, setselectedCategory} = useContext(UserContext);


  const [localStoreValue, setlocalStoreValue] = useState('');

  const setSearchvalueData =()=>{

    setselectedCategory(localStoreValue);
    // console.log("this is the actual data:", searchValue)
  }

  


  return (
    <nav className='text-white sticky w-full h-11 flex items-center top-0 justify-between bg-black'>



      {/* menu and logo div */}
      <div className='cursor-pointer flex items-center'>

        {/* menu icon */}
        <svg className='text-white fill-current m-6 ml-9' onClick={() => SetOpen(!Open)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50">
          <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
        </svg>



        {/* logo */}
        <div>
          <h1 className='text-red-600 font-bold font-mono text-xl'>NFT<span className='text-white'>ube</span></h1>
        </div>

      </div>



      {/* search bar div */}
      <div className=' m-6 w-50 lg:w-80 flex items-center  cursor-pointer'>

        <div className='h-7 flex items-center bg-white w-full border rounded-2xl'>

          <FaSearch className='mx-2  font-light font-sm text-red-600 duration-500 hover:scale-[0.85] hover:text-green-600 '
          onClick={()=>setSearchvalueData()}
          />

          <input className='border-none w-full h-full px-3 bg-transparent font-mono text-sm text-slate-900 focus:outline-none'
            type="text"
            placeholder='Search'
            value={localStoreValue}
            onChange={(e) => setlocalStoreValue(e.target.value)}


          />

        </div>


      </div>





      {/* third div */}
      <div className='hidden lg:flex mr-6  items-center cursor-pointer'>

        <img width="25" height="25" className='mr-2' src={network} />

        <img className='mr-2' width="30" height="30" src="https://img.icons8.com/color/48/youtube-live.png" alt="youtube-live" />

        <a href='https://github.com/nubeceo/NFTube' target="_blank"><img className='mr-2' width="30" height="30" src="https://img.icons8.com/arcade/64/source-code.png" alt="source-code" /></a>



      </div>

    </nav>
  )
}

export default Header