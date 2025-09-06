"use client"
import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-black bg-white flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 font-base text-xl py-16 gap-10">
    
      <div className="tracking-tight space-y-6 max-w-[645px]">
        <h1 className="text-5xl font-bold leading-tight">
          Maximize Your Sales, Rank Higher,
          <span className="text-red-500"> &amp; increase ROI 10x</span>
        </h1>
        <p className="text-2xl">
          Ecomarray helps businesses simplify their online selling processes across major marketplaces, including Amazon, Flipkart, JioMart, Meesho, Ajio, and Alibaba. Our expert account management services help you achieve better visibility, increased sales, and better operations.
        </p>
        <a
          href=""
          className="inline-block text-2xl text-white font-bold px-10 py-5 bg-red-500 rounded-full hover:bg-red-600 transition"
        >
          Get Started Today
        </a>
      </div>

      {/* Right Content: Contact Form */}
      <div className="bg-[#E0F1FB] w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 rounded-3xl border shadow-md">
        <h2 className="text-center text-4xl font-bold text-red-500 mb-6">Contact Us</h2>
        <form action="#" method="post" className="w-full space-y-6">
          <input
            type="hidden"
            name="page_name"
            value="Home"
          />
          <input
            type="hidden"
            name="_token"
            value="4WN23U03MJFrWh35wsqq4dS3gDbLkudXXX11M0i0"
            autoComplete="off"
          />
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full bg-white p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            pattern="[0-9]{10,12}"
            minLength={10}
            maxLength={10}
            required
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Number is incomplete/incorrect. Please correct your Mobile Number."
              )
            }
            onChange={(e) => e.target.setCustomValidity("")}
            className="w-full p-4 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email ID"
            required
            className="w-full p-4 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            placeholder="Enter Your Query..."
            required
            rows={4}
            className="w-full p-4 1 bg-white border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-2xl text-white font-bold px-10 py-4 bg-red-500 rounded-full hover:bg-red-600 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
