import React, { useContext } from 'react'
import SideBar from './SideBar'
import UserContext from '../../Context/UserContext';

function Home() {
  const { SetOpen, Open } = useContext(UserContext);
  return (
    <div className='w-full flex flex-col top-11 md:flex-row  lg:flex-row items-start justify-end'>


      {/* side bar */}
      <div className={` w-full lg:w-1/6  ${Open ? 'lg:w-1/6' : 'lg:w-24'} duration-500  border sm:top-11 left-0 fixed h-20 lg:h-screen items-start`}>
        <SideBar />
      </div>




      {/* feed section */}
      <div className={` border right-0 top-11  h-full w-full lg:w-5/6 ${Open ? 'lg:w-5/6' : 'lg:w-custom'}  duration-500 p-24 lg:p-6`}>

        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>
        <div>lsdjfbjhf</div>

      </div>


    </div>
  )
}

export default Home