import React from "react";
import SectionHeading from "./../snippets/SectionHeading";
import AllButtons from "../snippets/AllButtons";

function AboutFarmCrest() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-6 md:gap-0">
          <div className="rounded-[30px] overflow-hidden group m-auto inline-block ">
            <img
              src={require(`../assets/img/About-Farm-Crest-img.png`)}
              alt="About-Farm-Crest"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="p-0 sm:p-8 lg:p-[74px_50px_73px_51px] flex items-center md:items-start flex-col gap-3">
            <SectionHeading name="About Farm Crest" />
            <h3 className="text-[28px] sm:text-[32px] md:text-start text-center lg:text-[40px] leading-[36px] text-[#222222] sm:leading-[42px] lg:leading-[52px] font-normal font-aa mt-1">
              Farm Crest: Growing a Greener Future with Organic Solutions
            </h3>
            <p className="text-[#6B6B6B] text-[14px] md:text-start text-center sm:text-[16px] font-normal leading-[24px] sm:leading-[28px] mt-3">
              We believe in nurturing plants the way nature intended—using
              eco-friendly, sustainable materials that support both growth and
              environmental health. Founded with a passion for promoting organic
              farming, we’ve grown into a trusted provider of natural,
              coconut-based growing mediums used by gardeners and farmers
              worldwide.
            </p>
            <AllButtons name="Contact us" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFarmCrest;
