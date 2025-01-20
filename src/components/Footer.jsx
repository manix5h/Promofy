import React, {useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {


  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <div className="md:grid grid-cols-4 p-5 md:p-0">
      <div data-aos="fade-right" >
        <h1 className="text-xl font-light mb-3">Promofy</h1>
        <p className="mb-1">Shrinath Puram, Kota</p>
        <p className="mb-5">Rajasthan 324010</p>

        <div>
          <p className="font-medium">
            Phone: <span className="font-normal ml-1">+91 8000827730</span>
          </p>
          <p className="font-medium">
            Email: <span className="font-normal ml-1">promofy.pvt@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Useful links */}
      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Useful Links
        </h1>
        <ul>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Home
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              About Us
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Service
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Terms Of Service
            </a>
          </li>
        </ul>
      </div>

     

      {/* Follow Us */}
      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Follow Us</h1>
        <p className="text-sm">
        Contact us today to start creating scroll-stopping Reels that take your brand to the next level.
        </p>
        <div className="flex justify-between pr-5 mt-5">
          <a href="https://t.me/promofy_pvt">
          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
          <FaTelegram size={"26px"} />
            
          </div>
         </a>
          <a href="https://www.instagram.com/promofy_pvt">
          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoInstagram size={"26px"} />
          </div>
          </a>
          <a href="">
          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoLinkedin size={"26px"} />
          </div>
          </a>
        </div>
        
      </div>

      

      
    </div>

    <div className='text-center p-4'>
      <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2025 Promofy Private Limited, Inc. All rights reserved.
        </p>
        
      </div>
    </div>
  );
};

export default Footer;
