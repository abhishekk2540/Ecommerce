import React from "react";
import { WhyChooseUsData } from "@/utils/Data";
const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center bg-[#FFFFFF] mt-16">
      <div className="text-center text-black max-w-[1200px] mb-6">
        <span className="text-xl font-semibold leading-6 text-blue-600">
        Why Choose Us
        </span>
        <h1 className=" text-[40px] font-semibold leading-11 py-2.5">
         What Makes Us the <span className="text-red-500">Best Choice?</span>
        </h1>
        <p className="text-lg leading-8 font-medium">
        Be assured while choosing us; find out why people vest their trust in us and become one of them.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 p-5 max-w-[1000px] bg-white text-center gap-7 text-black">
        {WhyChooseUsData.map((data) => (
          <div
            className=" flex items-center gap-5 inset-shadow-2xs shadow-xl/10 bg-white  hover:bg-white  p-10 hover:-translate-y-1 hover:scale-100  transition delay-150 duration-300 ease-in-out "
            key={data.id}
          >
            <img
              className="w-[90px] bg-[#CCF4EF] border-1 rounded-full p-2"
              src={data.img}
              alt=""
            />
             <div className="space-y-7">
                <h1 className=" hover:text-red-500 text-start text-2xl font-semibold">
              {data.heading}
            </h1>
            <p className="text-start text-xl">{data.para}</p>
             </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
