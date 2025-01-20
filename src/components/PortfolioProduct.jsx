import React from "react";
import { FaLink } from "react-icons/fa6";
import "../index.css";


const PortfolioProduct = ({image}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="  flex justify-center w-[26rem] overflow-hidden hover:cursor-pointer hover:text-orange-600 myLink">
      <img
        src={image}
        className="w-fit  h-fit object-cover transition-all duration-300 hover:opacity-50 hover:scale-110"
        alt="phone"
      />
      
    </div>
    </div>
  );
};

export default PortfolioProduct;
