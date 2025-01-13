import React from 'react'

function TopHeader() {
  return (
    <div className="container max-w-full bg-black px-9 ">
      <a className='flex justify-end text-white items-center pt-1 font-semibold text-sm md:text-base' href="tel:+66 1234 5678"><img className='w-5 md:w-6 mx-1' src='/images/Tel.png' alt="" />Contact US: +66 1234 5678</a>
    </div>
    
  )
}

export default TopHeader