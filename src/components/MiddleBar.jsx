import React from 'react'
 import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
 import DraftsIcon from '@mui/icons-material/Drafts';
 import LockClockIcon from '@mui/icons-material/LockClock';
const MiddleBar = () => (
  <div className="bg-white py-2 hidden md:block ">
    <div className="max-w-screen-2xl mx-auto p-5">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="hidden lg:block w-full lg:w-1/4 xl:w-1/4">
          <a href="/logo.webp">
            <img
              src="/logo.webp"
              alt="Fixed Logo"
              className="h-18 w-auto"
            />
          </a>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-3 items-center lg:items-end">
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center lg:justify-end items-stretch text-slate-700">
            <li className="flex items-center gap-3">
              <span className="text-lg text-[#2F3740]">
                <i className="fa-solid fa-phone-volume" />
              </span>
              <div className=' flex justify-center items-center gap-5'>
                <div className='rounded-full border-1 p-3 text-white bg-red-500'>< WifiCalling3Icon fontSize='large'/></div>
                <div className='text-xl'> <span className="block text-lg font-semibold">Click to Call</span>
                <a href="tel:+91-9599668577" className="text-base font-medium hover:text-blue-600">
                  +91-9599668577
                </a></div>
               
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg text-[#2F3740]">
                <i className="fa-solid fa-envelope-open-text" />
              </span>
              <div className='flex justify-center items-center gap-5'>
              <div className='rounded-full border-1 p-3 text-white bg-red-500'><DraftsIcon fontSize='large'/></div>
                <div className='text-xl'> <span className="block text-lg font-semibold">Connect Us</span>
                <a href="mailto:info@ecomarray.com" className="text-base font-medium hover:text-blue-600">
                  info@ecomarray.com
                </a></div>
               
              </div>
            </li>
            <li className="hidden md:flex items-center gap-3">
              <span className="text-lg text-[#2F3740]">
                <i className="fa-solid fa-clock-rotate-left" />
              </span>
              <div className='flex justify-center items-center gap-5'>
                <div className='rounded-full border-1 p-3 text-white bg-red-500'><LockClockIcon fontSize='large'/></div>
                <div className='text-xl'>  <span className="block text-lg font-semibold">Working Hours</span>
                <span className="text-base font-medium">Mon - Fri, 09:30 - 6:30</span></div>
              
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default MiddleBar;