import React from "react";

const ContactUsByCall = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-27 mb-10">
      <div className="text-black p-8 md:p-14 bg-[url(/scrollImg/cta_bg.svg)] bg-no-repeat bg-right-top bg-contain shadow-[0px_8px_30px_0px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-center md:text-left">
          <div className="">
            <h1 className="text-green-400 text-[35px] font-bold pb-2.5">
              Contact Us
            </h1>
            <p className="text-[17px] tracking-wide font-sans leading-[30px] max-w-[750px]">
              Watch your revenue multiply as we analyze the marketplace,
              optimize your product listing, and increase your product
              offerings. We provide a complete roadmap to success. If you have
              any concerns or queries, feel free to contact us at
              info@ecomarray.com
            </p>
          </div>
          <a href="mailto:info@ecomarray.com">
            <button className=" delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95 border border-blue-600 rounded-full px-8 py-4 text-lg md:text-xl mt-5 md:mt-0 font-semibold bg-blue-50 hover:bg-red-500 transition whitespace-nowrap">
              REQUEST A CALL-BACK
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsByCall;