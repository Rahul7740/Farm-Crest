import React from "react";
import SectionHeading from "../snippets/SectionHeading";
import jsonData from "../json/Why-Choose-Us.json";

function WhyChooseUs() {
  return (
    <section className="all-sections bg-[#EBE4D6]">
      <div className="container">
        <div className="flex items-center flex-col gap-4 max-w-[717px] w-full m-auto p-[0px_54.5px]">
          <SectionHeading name="Why Choose Us" />
          <h3 className="text-[#222222] text-[24px] leading-[36px] sm:text-[32px] sm:leading-[48px] md:text-[40px] md:leading-[60px] lg:text-[48px] lg:leading-[72px] font-normal font-aa text-center">
            Why Farm Crest is Best Choice for You .
          </h3>
        </div>
        <div className="mt-[60px] flex items-center flex-col gap-8">
          {jsonData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-[34.5px] border border-[#ACACAC] border-solid hover:border-[#2C3D1E] transition-all duration-200 p-6 sm:p-8  md:p-[45px_50px] xl:p-[45px_80px] rounded-[20px] md:rounded-[40px] xl:rounded-[60px] transform group hover:shadow-lg"
            >
              <h2 className="font-aa text-[64px] sm:text-[96px] md:text-[128px] leading-[80px] sm:leading-[120px] md:leading-[172.67px] text-[#D0C6B4] font-normal">
                {item.id}
              </h2>
              <div className="flex flex-col  items-center sm:items-start gap-3 sm:gap-[16px] max-w-full sm:max-w-[450px] md:max-w-[537px] w-full">
                <h3 className="text-[#252525] text-center sm:text-start text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-normal font-aa">
                  {item.title}
                </h3>
                <p className="text-[#6B6B6B] text-center sm:text-start text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[26px] md:leading-[28px] font-normal">
                  {item.description}
                </p>
              </div>
              <div className="w-[150px] md:w-auto min-w-[250px]">
                <img
                  className="transform group-hover:scale-105 transition-all duration-300 "
                  src={require(`../assets/img/${item.image}`)}
                  alt="whyChooseUs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
