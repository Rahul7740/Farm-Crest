import React from "react";
import AllButtons from "../snippets/AllButtons";

function BannerSection() {
  return (
    <section className="h-[600px] md:h-[700px] lg:h-[809px] bg-[url('./assets/img/home-page-banner.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="relative flex lg:block items-center flex-col">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-[29px]">
          <h1 className="text-white text-[32px] leading-[42px] sm:text-[48px] sm:leading-[64px] md:text-[64px] md:leading-[86px] lg:text-[76px] lg:leading-[100px] xl:text-[92px] xl:leading-[124.11px] font-normal font-aa">
            Nurture Your Plants
          </h1>
          <img
            className="w-[150px] h-[100px] sm:w-[200px] sm:h-[130px] md:w-[220px] md:h-[150px] lg:w-auto lg:h-auto"
            src={require(`../assets/img/narture-banner-img.png`)}
            alt="banner"
          />
        </div>
        <h2 className="inline-block text-white text-[32px] leading-[42px] sm:text-[48px] sm:leading-[64px] md:text-[64px] md:leading-[86px] lg:text-[76px] lg:leading-[100px] xl:text-[92px] xl:leading-[124.11px] font-normal font-aa mt-3 mb-[35px] md:mb-[50px] lg:mb-[71.5px] relative left-0 lg:left-[25%] xl:left-[33%]">
          with Farm Crest
          <img
            className="absolute right-0 top-full"
            src={require(`../assets/img/banner-text-underLine.png`)}
            alt="text-underLIne"
          />
        </h2>
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-4 lg:gap-8 max-w-[636px] w-full relative left-0 lg:left-[25%] xl:left-[33%]">
          <AllButtons name="Contact us" />
          <span className="bg-white h-[1px] lg:h-[47px] lg:w-[1px] w-60 inline-block"></span>
          <p className="text-base font-normal text-white text-center lg:text-start pr-3 pl-3 lg:p-0">
            Discover the power of eco-friendly growing mediums designed to boost
            plant growth, retain moisture, and enhance soil health.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
