
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";

const Footer = () => {
  return (
    <footer className="bg-[#EFF4FD] text-slate-600">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row  flex-wrap gap-8">
          <div className="w-full md:w-full lg:w-1/4 mb-8 lg:mb-0 px-4">
            <img 
              className="max-w-[200px] w-full h-auto mb-6" 
              src="/logo.webp" 
              alt="Company Logo" 
              loading="lazy"
            />
            <p className="text-base  md:text-xl mb-6 leading-relaxed">
              With our extensive expertise in the field, we aim to bring your
              e-commerce vision to life.
            </p>
            <div className="flex space-x-4">
              {[
                { 
                  icon: <FacebookIcon style={{ fontSize: 24 }} />, 
                  name: 'Facebook',
                  href: "#" 
                },
                { 
                  icon: <TwitterIcon style={{ fontSize: 24 }} />, 
                  name: 'Twitter',
                  href: "#" 
                },
                { 
                  icon: <InstagramIcon style={{ fontSize: 24 }} />, 
                  name: 'Instagram',
                  href: "#" 
                },
                { 
                  icon: <LinkedInIcon style={{ fontSize: 24 }} />, 
                  name: 'LinkedIn',
                  href: "#" 
                },
                { 
                  icon: <YouTubeIcon style={{ fontSize: 24 }} />, 
                  name: 'YouTube',
                  href: "#" 
                },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-600 hover:text-red-500 transition-colors duration-300"
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
            <h3 className="md:text-2xl text-xl font-bold mb-6 text-gray-800">COMPANY</h3>
            <ul className="space-y-3 text-2xl">
              {[
                "About Us",
                "Blogs",
                "Contact Us",
                "FAQs",
                "Cancellation & Refund Policy",
                "Privacy & Policy",
                "Shipping Policy",
                "Terms & Condition"
              ].map((item, index) => (
                <li  key={index}>
                  <a 
                    href="#" 
                    className="text-base md:text-xl hover:text-red-500 transition-colors duration-300 inline-block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8 ">
            <h3 className="md:text-2xl text-xl font-bold mb-6 text-gray-800">SERVICES</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:text-2xl  gap-x-8 gap-y-3">
              {[
                "Amazon Account Management",
                "Flipkart Account Management",
                "JioMart Account Management",
                "Meesho Account Management",
                "Ajio Account Management",
                "Alibaba Account Management",
                "Zepto Account Management",
                "Blinkit Account Management",
                "Etsy Account Management",
                "Nykaa Account Management",
                "Purplle Account Management",
                "Website-App Development",
                "Digital Marketing"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-base md:text-xl hover:text-red-500 transition-colors duration-300 inline-block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 ">
            <h3 className=" md:text-2xl text-xl font-bold mb-6 text-gray-800">CONNECT</h3>
            <div className="space-y-4 ">
              <div className="flex items-start ">
                <span className="text-red-500 mt-1 mr-3">
                  <EmailIcon />
                </span>
                <a 
                  href="mailto:info@ecomarray.com" 
                  className="hover:text-red-500  md:text-xl transition-colors duration-300 text-base"
                >
                  info@ecomarray.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-3">
                  <CallIcon />
                </span>
                <a 
                  href="tel:+919599668577" 
                  className="hover:text-red-500 md:text-xl transition-colors duration-300 text-base"
                >
                  +91-9599668577
                </a>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mt-1 mr-3">
                  <HomeIcon />
                </span>
                <p className="text-base md:text-xl">
                  H-221, 3rd Floor, Suite-305,<br />
                  Sector 63, Noida,<br />
                  Uttar Pradesh 201307
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm md:text-base text-gray-600">
            Copyright © {new Date().getFullYear()}{' '}
            <a href="#" className="text-red-500 hover:underline">E-ComArray</a>{' '}
            | Design & Development by{' '}
            <a href="#" className="text-red-500 hover:underline">Array Log</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
