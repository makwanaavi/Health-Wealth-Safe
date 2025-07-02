import React from 'react'
import { Link } from 'react-router-dom'

const VideoCall = () => {
  return (
    <div className='flex justify-center gap-12'>
     <div className='w-80 h-60 bg-white flex justify-center items-center mt-12 shadow-xl'>
      <button className='bg-blue-50 text-[#3699FF] p-4 cursor-pointer '>
        <Link to='/exam-room'>START YOUR CALL NOW</Link>
      </button>
     </div>
     <div className='w-80 h-60 bg-white flex justify-center items-center mt-12 shadow-xl'> 
       <button className='bg-blue-50 text-[#3699FF]   p-4 cursor-pointer'> SCHEDULE YOUR CALL NOW </button>
     </div>
    </div>
  )
}

export default VideoCall
