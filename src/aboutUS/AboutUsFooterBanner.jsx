import React from "react";
import AllButtons from "../snippets/AllButtons";

function AboutUsFooterBanner() {
  return (
    <section className="all-sections bg-[#EBE4D6]">
      <div className="container">
        <div className="flex rounded-[20px] p-[0px_10px] md:rounded-[35px] lg:rounded-[50px] items-center justify-center bg-[url('./assets/img/aboutUs-footer-banner.png')] bg-no-repeat bg-center bg-cover h-[350px] sm:h-[400px] lg:h-[529px]">
          <div className="flex items-center flex-col gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center flex-col gap-4 max-w-[742px] w-full">
              <h2 className="max-w-[628px] w-full text-white text-[30px] sm:text-[48px] md:text-[64px] leading-[40px] sm:leading-[56px] md:leading-[72px] font-normal font-aa text-center">
              Join Us in Growing Greener
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-medium text-center text-white mt-4">
              we’re on a mission to create a greener world, one plant at a time. We invite you to join us in our commitment to sustainability and discover the benefits of using natural, cocopeat-based products for your growing needs.
              </p>
            </div>
            <AllButtons name="Don’t wait—get started today!" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsFooterBanner;
