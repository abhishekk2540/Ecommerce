"use client"; // React client component

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';


const serviceOptions = [
  { label: "Amazon Account Management", value: "amazon", link: "" },
  { label: "Flipkart Account Management", value: "flipkart", link: ""},

];
const cityOptions = [
  { label: "Delhi", value: "delhi", link: "t-services-in-delhi" },
  { label: "Mumbai", value: "mumbai", link: "t-services-in-mumbai" },

];

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="md:hidden block px-10 py-2 relative ">
      <div className="flex justify-between items-center">
        <img className="h-18 w-auto" src="/logo.webp" alt="Logo" />
        <button
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          className="text-black hover:text-red-600 focus:outline-none"
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mt-4  bg-white border rounded-md shadow-lg p-4 space-y-4 absolute top-full left-0 right-0 z-50">
          <ul className="space-y-4 text-black">
            <li><a href="/" className="block hover:underline text-black">Home</a></li>

            <li>
              <label className="mr-2 inline-blockblock mb-1">Service</label>
              <select className="w-[200px] border rounded p-1">
                <option > Select Service</option>
                {serviceOptions.map((opt) => (
                  <option value={opt.link}>{opt.label}</option>
                ))}
              </select>
            </li>

            <li>
              <label className="mr-2 inline-blockblock mb-1">City</label>
              <select  className="w-[200px] border rounded p-1">
                <option >Select City</option>
                {cityOptions.map((opt) => (
                  <option key={opt.value} value={opt.link}>{opt.label}</option>
                ))}
              </select>
            </li>

            <li><a href="" className="block hover:underline text-black">Blogs</a></li>
            <li><a href="s" className="block hover:underline text-black">About Us</a></li>
            <li><a href="" className="block hover:underline text-black">Contact Us</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}
