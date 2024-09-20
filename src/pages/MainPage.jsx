import React from 'react'
import ObjectTitle from '../components/ObjectTitle.jsx'
import SpecialSection from '../components/SpecialSection.jsx'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  return (

    
    <div>
        <div className="bg-rectangle-7 h-[83vh] text-white flex flex-col space-y-3 justify-center items-center">

            <h1 className='font-extrabold text-[3rem]' >Lorem, ipsum dolor.</h1>
            <p className='text-[1.25rem] text-center w-2/5' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas qui incidunt corporis hic dolore quo voluptatum repellat eius consequatur placeat?</p>
            <button onClick={handleButtonClick} className='bg-[#2F424A] py-[16px] px-[32px] font-extrabold ' >Узнать больше...</button>
        </div> 
        <div className='flex flex-col mx-[120px]'>
            <ObjectTitle title='Откройте новые возможности' />
            <ObjectTitle title='Популярные решения для задач '/>
            <ObjectTitle title='Иновации вашего смартфона' />
            <SpecialSection title='Секреты продуктивности здесь' />
            <ObjectTitle title='Попрулярные решения для задач' />
            <ObjectTitle title='Инновации для вашего смартфона' />


        </div>
    </div>
     

  )
}

export default MainPage