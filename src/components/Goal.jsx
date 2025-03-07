import React from 'react'
import icon from '../assets/star-icon.png'

function Goal({text}) {
  return (    
     <div className='relative'>
      <img src={icon} alt="" className='ml-5' />
      <div className="p-2 place-content-center 
        lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]">{text}</div>
    </div>
  )
}

export default Goal