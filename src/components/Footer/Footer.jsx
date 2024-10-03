import React from 'react'
import Logo from '../../assets/Logo.png'
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='py-28 bg-[#f4f4f4]'>
      <div className='container'>
        <div className='flex justify-between items-start'>
          {/* first section */}
          <div className='space-y-4 max-w-[300px]'>
            <div>
              <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                Trania
              </a>
            </div>
            <h1>Phone: +62 xxx-xxxx-xxxx</h1>
            <h1>Email: trania@gmail.com</h1>
          </div>

          {/* second section */}
          <div className='text-right space-y-4'>
            <h1 className='text-2xl font-bold'>Follow Us</h1>
              <div className='flex justify-end space-x-4'>
              <SiInstagram />
              <FaTwitter />
              <FaFacebook />
              </div>
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
            <img src={Logo} className='w-24 h-auto'/>
        </div>
        <h1 className='text-lg text-center'>© Copyright Trania All Rights Reserved.</h1>
      </div>
    </div>
  )
}

export default Footer;
