"use client";
import React from "react";
import { BlogData } from "@/utils/Data.js";
const Blogs = () => {
  return (
    <div>
      <div className="text-center text-black max-w-[1200px] mb-6 space-y-4">
        <span className="text-xl font-semibold leading-6 text-blue-600">
          Blogs
        </span>
        <h1 className=" text-[40px] font-semibold leading-11 py-2.5">
          Our<span className="text-red-500">Latest Blog</span>
        </h1>
        <p className="text-lg leading-8 font-medium">
         There is something new you can learn about every day. Check our latest articles to join us on this journey.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 md:grid-col-2 gap-5 py-10 px-20  ">
        {BlogData.map((i) => (
          <div key={i.id} className="text-black border-slate-400 border rounded-[5px] group transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95">
            <div >
              {" "}
              <a href="">
                <img className="rounded-t-[5px]" src={i.img} alt="" />
              </a>
            </div>
            <div className="p-5 space-y-5 ">
              <div className="flex space-x-10 text-red-500">
                <a className="text-2xl font-sans tracking-wide hover:text-green-500" href="">{i.heading}</a>
                <ol  style={{ listStyleType: "disc" }}>
                  <li className="text-2xl font-sans tracking-wide">{i.dates}</li>
                </ol>
              </div>
               
              <h1><a className="hover:text-red-500 hover:transtion 0.5s  leading-[30px] font-bold 
          group-hover:text-green-500 
          hover:transition 
          duration-500
          text-[20px] " href="">{i.title}</a></h1>
              <p className="text-[18px] font-light leading-8">{i.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
