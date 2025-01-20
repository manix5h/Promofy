import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("app-development");
  // };
  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
      "Capture Attention, Create Engagement, and Grow Your Brand on Instagram"
      </p>
      <div
        className="flex flex-col lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
        <div >
          <Card
            img={<HiOutlineChartPie />}
            title={"Creative Reels and Stories Content Creation"}
            desc={
              "Eye-catching visuals and engaging short-form video content "  }
              
      />
        </div>

        <div >
          <Card
            img={<HiOutlineChartPie />}
            title={"Brand Storytelling and Product Showcasing"}
            desc={
              "Authentic storytelling to build emotional connections with your audience."
            }
          />
        </div>

        <div >
          <Card
            img={<HiOutlineChartPie />}
            title={"Paid Promotion and Ad Management"}
            desc={
              "Reels and Stories ads with precise audience targeting for higher engagement."
            }
          />
        </div>

        <div >
          <Card
            img={<HiOutlineChartPie />}
            title={"Influencer and Collaborative Promotions"}
            desc={
              "Partnering with niche influencers to expand your audience and credibility."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
