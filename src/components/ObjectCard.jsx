import React from 'react'
import rectangle from '../assets/Rectangle 4.png'

const ObjectCard = () => {
  return (
    <div className='flex flex-col mt-[32px] mr-[20px]'>
        <img src={rectangle} className='w-[340px] h-[320px]' alt="rectangle" />
        <h4 className='font-[500] text-[20px]'>320 500 ₸</h4>
        <h5 className='font-[400] text-[17px]'>Элитный планировщик</h5>
        <p className='text-[#040607]-[15px]'>Lorem ipsum dolor sit.</p>
    </div>
  )
}

export default ObjectCard