import React from 'react'
import ObjectCard from './ObjectCard'
import { useNavigate } from 'react-router-dom';

const ObjectTitle = ({title}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/categories');
  };

  return (
    <div className='flex flex-col mt-[140px]'> 
        <div className='flex flex-row justify-between '>
            <h1 className='font-[500] text-[2.4rem]'>{title}</h1>
            <button onClick={handleButtonClick} className='bg-[#F36E2E] text-white px-[28px] py-[14px]  cursor-pointer text-[1rem]'>Смотреть товары</button>
        </div>
        <div className="flex flex-row">
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
        </div>
    </div>
  )
}

export default ObjectTitle