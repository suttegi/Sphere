import React from 'react';
import ObjectCard from '../components/ObjectCard';
import { FaSortAmountUp } from "react-icons/fa";


const Categories = () => {
  return (
    <div className='mx-[120px] mt-[48px] flex flex-col'>
      <div className="flex flex-row space-x-[16px] mb-[32px]">
        <a href="/">Главная</a>
        <p>/</p>
        <a href="#">Каталог</a>
        <p>/</p>
        <a href="#">Финансы</a>
      </div>

      <div className='flex flex-row items-baseline mb-[32px]'>
        <h1 className='font-bold text-[32px] mr-[16px]'>Финансы</h1>
        <p className='text-[#040607]'>120 приложений</p>
      </div>

      <div className='flex justify-between items-center mb-[32px]'>
        <div className='flex flex-row'>
            <FaSortAmountUp size="20" color="orange"/>
            <select className=' bg-white outline-none border-[none] text-[16px]'>
                <option value="">По популярности</option>
            </select>
        </div>

        <div className='flex items-center space-x-[8px]'>
          <button className='text-[#FF6600]'>1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>16</button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-[16px]">
        {[...Array(20)].map((_, index) => (
          <ObjectCard key={index} />
        ))}
      </div>

      <div className='flex justify-center mt-[32px]'>
        <div className='flex space-x-[8px]'>
          <button className='border p-[8px]'>←</button>
          <button className='border p-[8px]'>1</button>
          <button className='border p-[8px]'>2</button>
          <button className='border p-[8px]'>3</button>
          <button className='border p-[8px]'>→</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
