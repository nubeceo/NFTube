import React from 'react'

const Videos = ({selectedCategory, videos}) => {

  console.log(videos);
  return (
    <div>

      {/* selected category */}
      <div className=''>{selectedCategory} <span className='text-red-600 '>NFTs</span></div>

      


    </div>
  )
}

export default Videos