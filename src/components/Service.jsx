import React from 'react'
import { servicesPageData } from '@/utils/Data'
const Service = () => {
  return (
    <div className='flex flex-col items-center bg-[#fef7f4] mt-16 bg-[url(/scrollImg/service_bg.svg)] bg-no-repeat p-6 bg-cover '>
        <div className='text-center text-black max-w-[1200px] mb-6'>
            <span className='text-xl font-semibold leading-6 text-blue-600'>Services</span>
            <h1 className=' text-[40px] font-semibold leading-11 py-2.5'>Our Top <span className='text-red-500'>E-Commerce Services</span></h1>
            <p className='text-lg leading-8 font-medium'>With an aim to help you achieve your business goals, we provide you services like.</p>

        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 p-5 max-w-[1000px]  text-center gap-7 text-black'>
            
              {servicesPageData.map((data)=>(
                <div className='inset-shadow-2xs shadow-xl/10 bg-white    p-5 space-y-7 hover:-translate-y-1 hover:scale-100  transition delay-150 duration-300 ease-in-out ' key={data.id}> 
                <img className="w-[90px] bg-[#CCF4EF] border-1 rounded-full p-2" src={data.img} alt="" />
                     <h1  className=' hover:text-red-500 text-start text-2xl font-semibold' >{data.heading}</h1>
                  <p  className='text-start text-xl'>{data.para}</p>
                </div>
              
              ))}
            
            
        </div>
    </div>
  )
}

export default Service