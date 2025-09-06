import React from 'react'

const HappyCustomer = () => {
  return (
  <div className="text-black bg-red-400 mt-6 p-12">
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
  {[ 
    { img:"years-experience.webp", value:"7+", label:"Years of Experience" },
    { img:"agency-members.webp", value:"50+", label:"Agency Members" },
    { img:"projects-complete.webp", value:"700+", label:"Projects Complete" },
    { img:"happy-clients.webp", value:"100+", label:"Happy Clients" }
  ].map(({ img, value, label }) => (
    <div key={label} className="w-full  lg:max-w-[280px] lg:h-[280px] rounded-xl bg-white flex flex-col items-center justify-center space-y-4">
      <img className="w-[50px]" src={`https://www.ecomarray.com/public/web/images/${img}`} alt={label} />
      <div className="text-2xl lg:text-5xl font-sans">{value}</div>
      <span className="text-lg lg:text-3xl font-sans text-center">{label}</span>
    </div>
  ))}
</div>


   
  </div>
);

  
}

export default HappyCustomer