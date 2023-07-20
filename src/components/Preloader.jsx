import React from 'react'

function Preloader() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[#F1EEE9]'>
      <img src="images/logo.png" className='w-40 sm:w-48 md:w-56 animate-pulse' />
    </div>
  )
}

export default Preloader