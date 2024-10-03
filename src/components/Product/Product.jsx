import React from 'react'
import Img1 from '../../assets/women/img1.png'
import Img2 from '../../assets/women/img2.png'
import Img3 from '../../assets/women/img3.png'
import Img4 from '../../assets/women/img4.png'
import Img5 from '../../assets/women/img5.png'
import Img8 from '../../assets/women/img8.png'
import Img9 from '../../assets/women/img9.png'
import Img10 from '../../assets/women/img10.png'
import Pria1 from '../../assets/man/Pria1.png'
import Pria2 from '../../assets/man/Pria2.png'
import Pria3 from '../../assets/man/Pria3.png'
import Pria4 from '../../assets/man/Pria4.png'
import Pria5 from '../../assets/man/Pria5.png'

import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Dress Blue",
        rating: 5.0,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:2,
        img: Img2,
        title: "Blouse Pink",
        rating: 4.8,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:3,
        img: Img3,
        title: "Blouse red",
        rating: 4.6,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:4,
        img: Img4,
        title: "Tunik",
        rating: 5.0,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:5,
        img: Img5,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:8,
        img: Img8,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:9,
        img: Img9,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:10,
        img: Img10,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:11,
        img: Pria1,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:12,
        img: Pria2,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:13,
        img: Pria3,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:14,
        img: Pria4,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
    {
        id:15,
        img: Pria5,
        title: "Dress",
        rating: 4.7,
        price: '$1.000',
        aosDelay: '100',
    },
]

const Product = () => {
  return (
    <div className='mt-14 mb-12'>
      <div container>
         {/**header section */}
         <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <h1 data-aos='fade-up' className='font-bold text-2xl'>All Product</h1>
        </div>
        {/**body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {ProductsData.map((data) =>(
                    <div data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className='rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 bg-[#f4f4f4] hover:bg-white duration-300 hover:shadow-2xl'>
                        <img src={data.img} className='h-[220px] w-[150px]'/>
                        <div>
                            <h3 className='font-semibold text-center'>{data.title}</h3>
                            <h4 className='text-center'>{data.price}</h4>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400' />
                            <span>{data.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
