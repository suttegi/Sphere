import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { GoSearch } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center flex-col justify-between py-4 mx-[120px]">
      <div className="flex flex-row w-full justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </div>

        <div className="w-1/3 mx-6 flex flex-row items-center relative">
          <GoSearch size="24" className="absolute left-3 top-1/2 transform -translate-y-1/2 mr-3" />
          <input
            type="text"
            placeholder="Поиск..."
            className="border-[none] border-b-[2px] outline-none w-full cursor-text py-3 pl-12"
          />
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-orange-500">
            <CiHeart size={30} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            <CiUser size={30} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            <CiShoppingCart size={30} />
          </a>
        </div>
      </div>

      <div className="hidden lg:flex w-full justify-start space-x-10 my-6">
        <Link
          to="/categories"
          className={`${
            location.pathname === '/categories' ? 'text-orange-500' : 'text-gray-600'
          } hover:text-orange-500`}
        >
          Финансы
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Утилиты
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Здоровье
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Образование
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Игры
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Развлечения
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Социальные сети
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Покупки
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Путешествия
        </Link>
        <Link to="#" className="text-gray-600 hover:text-orange-500">
          Новости
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
