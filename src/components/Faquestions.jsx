import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    // <div className="grid md:grid-cols-2 gap-x-10 md:gap-y-5 gap-y-3 mx-5 lg:mx-0">
    <>
      <div className="md:flex w-full md:gap-5 mb-5 p-6">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"Why should I promote my brand on Instagram Reels and Stories?"}
          answer={
            "Instagram Reels and Stories offer high engagement rates, viral potential, and an opportunity to connect with your audience through short-form, dynamic content that drives brand awareness and conversions."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"How can Instagram Reels help grow my brand?"}
          answer={
            "TReels utilize Instagram’s algorithm to prioritize entertaining and informative content. When done right, your brand can gain massive exposure, build a larger following, and increase customer engagement."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"What type of content works best for Reels and Stories?"}
          answer={
            "Content that’s creative, authentic, and aligned with current trends typically performs well. Product demos, behind-the-scenes looks, customer testimonials, and engaging storytelling are great examples."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Do you offer content creation services for Reels and Stories?"}
          answer={
            "Yes! We provide end-to-end content creation, including scripting, filming, editing, and adding trendy effects and music to ensure your brand stands out."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
        <Accordian
          question={"How do you measure the success of Reels and Stories campaigns?"}
          answer={
            "We track key performance metrics like reach, engagement rate, views, click-through rates, and conversion data to evaluate and optimize each campaign.."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Can Reels and Stories be used for paid advertising?"}
          answer={
            "Absolutely. Instagram offers Reels Ads and Stories Ads, allowing you to reach a highly targeted audience. We design and manage ad campaigns to maximize ROI."
          }
        />
        </div>

       

     
      </div>
      <div className="md:flex w-full md:gap-5 mb-5">
      <div className="md:w-1/2">
        <Accordian
          question={"Will you help with influencer collaborations?"}
          answer={
            "Yes, we identify, vet, and collaborate with influencers who align with your brand to boost credibility and reach"
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"What kind of businesses benefit from Reels and Stories promotion?"}
          answer={
            "Any business looking to enhance brand visibility, increase engagement, or boost conversions can benefit—from startups to established companies in various industries.."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
      <div className="md:w-1/2">
        <Accordian
          question={"Can Reels and Stories be used for paid advertising?"}
          answer={
            "Absolutely. Instagram offers Reels Ads and Stories Ads, allowing you to reach a highly targeted audience. We design and manage ad campaigns to maximize ROI."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"What budget is recommended for Instagram promotion?"}
          answer={
            "The budget varies depending on your goals, audience size, and campaign complexity. We offer flexible packages to suit different needs and provide guidance on effective spending."
          }
        />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
