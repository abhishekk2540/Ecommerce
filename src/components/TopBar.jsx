import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from '@mui/icons-material/Menu';


const TopBar = () => {
  return (
    <>
    <div className="bg-red-500 hidden md:block">
      <div className="max-w-screen-2xl mx-auto px-4 text- sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between py-2">
          <ol className="hidden lg:flex space-x-2 text-white text-lg">
            <li>
              <a href="" className="hover:text-gray-300 ">
                FAQ&apos;s
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Privacy
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Refund
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Shipping
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Terms
              </a>
            </li>
          </ol>
          <div className="flex items-center mt-2 lg:mt-0 justify-center lg:justify-end w-full lg:w-auto">
            <span className="text-xs lg:text-lg text-white mr-2">
              Follow us:
            </span>
            <div className="flex space-x-4  ">
              <a
                href=""
                aria-label="Facebook"
                className="text-white hover:text-blue-500"
              >
                <FacebookIcon fontSize="medium" />
              </a>
              <a
                href=""
                aria-label="Twitter"
                className="text-white hover:text-blue-400"
              >
                <TwitterIcon fontSize="medium" />
              </a>
              <a
                href=""
                aria-label="Instagram"
                className="text-white hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-xl"
              >
                <InstagramIcon fontSize="medium" />
              </a>
              <a
                href=""
                aria-label="LinkedIn"
                className="text-white hover:bg-gradient-to-r from-[#1DA1F2] to-[#0d90e0]"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
              <a
                href=""
                aria-label="YouTube"
                className="text-white hover:text-red-600"
              >
                <YouTubeIcon  fontSize="medium"/>
                </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   
     
   
    </>
  );
};

export default TopBar;
