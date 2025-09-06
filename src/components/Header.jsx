"use client";  // <-- Add this at the very top

import React from 'react';

// Service and City Options as arrays
const serviceOptions = [
  { label: "Amazon Account Management", value: "amazon", link: "" },
  { label: "Flipkart Account Management", value: "flipkart", link: "" },
  { label: "JioMart Account Management", value: "jiomart", link: "" },
  { label: "Meesho Account Management", value: "meesho", link: "es" },
  { label: "Ajio Account Management", value: "ajio", link: "" },
  { label: "Alibaba Account Management", value: "alibaba", link: "ces" },
  { label: "Zepto Account Management", value: "zepto", link: "" },
  { label: "Blinkit Account Management", value: "blinkit", link: "ices" },
  { label: "Etsy Account Management", value: "etsy", link: "" },
  { label: "Nykaa Account Management", value: "nykaa", link: "s" },
  { label: "Purplle Account Management", value: "purplle", link: "ces" },
  { label: "Myntra Account Management", value: "myntra", link: "es" },
];

const cityOptions = [
  { label: "Delhi", value: "delhi", link: "t-services-in-delhi" },
  { label: "Mumbai", value: "mumbai", link: "t-services-in-mumbai" },
  { label: "Agra", value: "agra", link: "t-services-in-agra" },
  { label: "Jaipur", value: "jaipur", link: "t-services-in-jaipur" },
  { label: "Kanpur", value: "kanpur", link: "t-services-in-kanpur" },
  { label: "Surat", value: "surat", link: "t-services-in-surat" },
  { label: "Pune", value: "pune", link: "t-services-in-pune" },
];
const Header = () => {
  
  return (
    <div className="text-black bg-white py-2 border-b-white hidden md:block">
      <ul className="font-base text-xl space-x-10 flex justify-center items-center p-6 py-14">
        <li>
          <a href="/" className="hover:underline">Home</a>
        </li>
        <li>
          <label  className="mr-3">Service</label>
          <select
          
            className="w-5"
      
          >
            <option className='outline-none'></option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.link}>{opt.label}</option>
            ))}
          </select>
        </li>
        <li>
          <label  className="mr-2">City</label>
          <select
            id="city-select"
            className=" w-5 "
            defaultValue=""
          >
            <option  ></option>
            {cityOptions.map((opt) => (
              <option key={opt.value} value={opt.link}>{opt.label}</option>
            ))}
          </select>
        </li>
        <li>
          <a href="" className="hover:underline">Blogs</a>
        </li>
        <li>
          <a href="s" className="hover:underline">About Us</a>
        </li>
        <li>
          <a href="" className="hover:underline">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
