import React from 'react'
import bigrec from '../assets/Rectangle 31.png'

const SpecialSection = ({title}) => {
  return (
    <div className='flex flex-col mt-[140px]'> 
        <div className='flex flex-row justify-between '>
            <h1 className='font-[500] text-[2.4rem]'>{title}</h1>
            <button className='bg-[#F36E2E] text-white px-[28px] py-[14px]  cursor-pointer text-[1rem]'>Смотреть товары</button>
        </div>
        <div className="flex flex-row">
            <div className='flex flex-col mt-[32px] mr-[20px]'>
                <img src={bigrec} className='w-[405px] h-[520px]' alt="rectangle" />
                <button className='bg-[#2F424A] text-white mt-[12px] py-2 px-4' >Узнать больше</button>
            </div>
            <div className='flex flex-col mt-[32px] mr-[20px]'>
                <img src={bigrec} className='w-[405px] h-[520px]' alt="rectangle" />
                <button className='bg-[#2F424A] text-white mt-[12px] py-2 px-4' >Узнать больше</button>
            </div>
            <div className='flex flex-col mt-[32px] mr-[20px]'>
                <img src={bigrec} className='w-[405px] h-[520px]' alt="rectangle" />
                <button className='bg-[#2F424A] text-white mt-[12px] py-2 px-4' >Узнать больше</button>
            </div>
            <div className='flex flex-col mt-[32px] mr-[20px]'>
                <img src={bigrec} className='w-[405px] h-[520px]' alt="rectangle" />
                <button className='bg-[#2F424A] text-white mt-[12px] py-2 px-4' >Узнать больше</button>
            </div>
            <div className='flex flex-col mt-[32px] mr-[20px]'>
                <img src={bigrec} className='w-[405px] h-[520px]' alt="rectangle" />
                <button className='bg-[#2F424A] text-white mt-[12px] py-2 px-4' >Узнать больше</button>
            </div>
        </div>
    </div>
  )
}

export default SpecialSection