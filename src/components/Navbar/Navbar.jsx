import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping} from 'react-icons/fa6'
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Product",
    link: "/product",
  },
  {
    id: 3,
    name: "Categori",
    link: "/#",
  },
  {
    id: 4,
    name: "Review",
    link: "/#",
  },
]

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/*upper navbar */}
      <div className='bg-primary/40 py-2'>
      <div className='container flex justify-between items-center'>
        <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                Trania
            </a>
        </div>
        {/*Search bar */}
        <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
                <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px]
                group-hover:w-[300px]
                transition-all duration-300
                rounded-full border border-gray-300 px-2 py-1
                focus:outline-none focus:border-1 focus:border-primary'/>
                <IoMdSearch className='text-gray-500 gorup-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>
            {/*order button */}
            <button onClick={() => alert('Ordering not available yet')} className='bg-gradient-to-r from-primary  transition-all duration-200 text-white py-1 px-4 rounded-full flex items-start gap-3 group'>
                <span className='group-hover:block hidden transition-all duration-200 font-semibold'>Cart</span>
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>

            <Link to='/login'>
            <button>
            <MdAccountCircle className='text-4xl text-primary'/>
            </button>
            </Link>

            <Link to='/signin'>
            <button>
            <MdOutlineAccountCircle className='text-4xl text-primary'/>
            </button>
            </Link>
            <div>
                <DarkMode />
            </div>
        </div>
      </div>
      </div>
      {/*lower navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data) =>(
            <li key={data.id}>
              <a href={data.link}
              className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='lg:hidden'>
            <IoMdMenu className='text-4xl'/>
        </div>
    </div>
  )
}

export default Navbar
