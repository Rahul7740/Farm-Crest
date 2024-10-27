import React from "react";
import SectionHeading from "../snippets/SectionHeading";
import jsonData from "../json/OurMission-Cards.json";

function OurMission() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="flex flex-col gap-[40px] md:gap-[60px] items-center">
          <div className="max-w-[717px] w-full flex flex-col items-center gap-4">
            <SectionHeading name="Our Mission" />
            <h3 className="text-[28px] leading-[40px] sm:text-[36px] sm:leading-[46px] lg:text-[40px] lg:leading-[52px] font-normal font-aa text-[#222222] text-center">
              Our Mission: Cultivating Growth with Sustainability and Innovation
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-between">
            {jsonData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 transition-all duration-200 hover:shadow-2xl rounded-[10px]">
                <div className="flex flex-col items-center gap-4 md:gap-5">
                  <img
                    src={require(`../assets/img/${item.img}`)}
                    alt="ourMission"
                  />
                  <h3 className="text-[18px] sm:text-[20px] leading-[24px] sm:leading-[26.98px] text-[#222222] font-normal font-aa text-center">
                    {item.title}
                  </h3>
                </div>
                <p className="text-center text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] text-[#6B6B6B] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
