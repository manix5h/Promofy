import React, { useEffect } from "react";
import client1 from "../img/clients/c1.png";
import client2 from "../img/clients/c2.png";
import client3 from "../img/clients/c3.png";
import client4 from "../img/clients/c4.png";

import Marquee from "react-fast-marquee";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-aos="fade-down" className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">Clients</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Our Learners Work at Global Companies & Startups
      </p>

      {/* Logo slider */}
      <Marquee pauseOnHover="true" className="flex items-center">
        <img className="w-28 mr-20" src={client1} alt="img1" />
        <img className="w-28 mr-20" src={client2} alt="img2" />
        <img className="w-28 mr-20" src={client3} alt="img3" />
        <img className="w-28 mr-20" src={client4} alt="img4" />

      </Marquee>
    </div>
  );
};

export default Clients;
