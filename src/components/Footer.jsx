import React from 'react';
import logo from '../assets/Group 394.png';
import tg from '../assets/tg.png'
import insta from '../assets/insta.png'
import whatsapp from '../assets/Vector.png'

const Footer = () => {
  return (
    <div className='mt-[120px] bg-black py-[50px] px-[120px] text-[#EFEFEF]'>
      <div className='flex justify-between'>
        <div className='flex flex-col max-w-[250px]'>
          <img src={logo} alt="logo" className='mb-[20px]' />
          <p className='text-[#DCDCDC] leading-[24px]'>
            Lorem ipsum dolor sit amet consectetur. Pulvinar a blandit eget gravida. Quis egestas et est viverra tempus vitae integer.
          </p>
          <div className="flex space-x-[16px] mt-[42px]">
            <a href="#"><img src={insta} alt="Facebook" /></a>
            <a href="#"><img className='bg-white w-[28px] p-1' src={whatsapp} alt="Instagram" /></a>
            <a href="#"><img src={tg} alt="Twitter" /></a>
          </div>
        </div>

        <div className='flex space-x-[60px]'>
          <div className='flex flex-col space-y-[16px]'>
            <h1 className='text-white text-[20px] font-bold'>Меню</h1>
            <a className='text-[#DCDCDC]' href="/">Главная</a>
            <a className='text-[#DCDCDC]' href="#">Контакты</a>
            <a className='text-[#DCDCDC]' href="#">FAQ</a>
            <a className='text-[#DCDCDC]' href="/about">О нас</a>
          </div>
          <div className='flex flex-col space-y-[16px]'>
            <h1 className='text-white text-[20px] font-bold'>Категории</h1>
            <a className='text-[#DCDCDC]' href="/categories">Финансы</a>
            <a className='text-[#DCDCDC]' href="#">Утилиты</a>
            <a className='text-[#DCDCDC]' href="#">Здоровье</a>
            <a className='text-[#DCDCDC]' href="#">Образование</a>
            <a className='text-[#DCDCDC]' href="#">Игры</a>
          </div>
        </div>

        <div className='flex flex-col space-y-[16px]'>
          <h1 className='text-white text-[20px] font-bold'>Контакты</h1>
          <p className='text-[#DCDCDC]'>+7 (495) 123-45-67</p>
          <p className='text-[#DCDCDC]'>+7 (495) 123-45-67</p>
          <p className='text-[#DCDCDC]'>ул. Примерная, д. 10, Москва, Россия</p>
          <p className='text-[#DCDCDC]'>Sphere.mobile@gmail.com</p>
        </div>
      </div>

      <div className='mt-[50px] border-t border-[#333] pt-[20px] text-[#DCDCDC] flex justify-between'>
        <p>© Copyright 2024 Sphere</p>
        <div className='flex space-x-[20px]'>
          <a href="#" className='text-[#DCDCDC]'>Политика конфиденциальности</a>
          <a href="#" className='text-[#DCDCDC]'>Публичная Оферта</a>
        </div>
        <a href="">Вернуться вверх</a>
      </div>
    </div>
  );
};

export default Footer;
