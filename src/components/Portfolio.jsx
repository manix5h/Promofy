import React, { useEffect } from "react";
import app1 from "../img/portfolio/img1.png";

import product1 from "../img/portfolio/img2.png";

import branding1 from "../img/portfolio/img3.png";


import branding2 from "../img/portfolio/img4.png";

import branding3 from "../img/portfolio/img5.png";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioProduct from "./PortfolioProduct";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">Portfolio</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
      "Some Steaker Demos"
      </p>

      {/* Images */}
      <div className="w-full ">
     <div className="justify-center md:flex-col">
     <div className="flex  flex-col justify-center items-center lg:-gap-6 gap-3 p-5 mb-10 md:w-8/12">
        {/* 1st row */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row space-y-6 lg:-gap-6 gap-3 ">
          <div >
            <PortfolioProduct image={app1} />
          </div>

          <div >
            <PortfolioProduct image={product1} />
          </div>

          <div >
            <PortfolioProduct image={branding1} />
          </div>

          <div >
            <PortfolioProduct image={branding2} />
          </div>

          <div >
            <PortfolioProduct image={branding3} />
          </div>
        </div>

       
      </div>
     </div>
      </div>
    </div>
  );
};

export default Portfolio;
