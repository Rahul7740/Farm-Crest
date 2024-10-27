import React from "react";
import SectionHeading from "./../snippets/SectionHeading";
import AllButtons from "../snippets/AllButtons";

function CustomerCommitment() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-center md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-0 sm:p-8 lg:p-[74px_50px_73px_51px] flex items-center md:items-start justify-center flex-col gap-3">
            <SectionHeading name="Customer Commitment" />
            <h3 className="text-[28px] md:text-start text-center sm:text-[32px] lg:text-[40px] leading-[36px] text-[#222222] sm:leading-[42px] lg:leading-[52px] font-normal font-aa mt-1">
              Our Commitment to You: Quality, Support, and Satisfaction
            </h3>
            <p className="text-[#6B6B6B] text-[14px] sm:text-[16px] md:text-start text-center font-normal leading-[24px] sm:leading-[28px] mt-3">
              our customers are at the heart of everything we do. We are
              committed to providing not only top-quality products but also
              exceptional service and support to ensure your success in
              gardening and farming.
            </p>
            <AllButtons name="Contact Us Today" />
          </div>
          <div className="rounded-[30px] overflow-hidden group m-auto inline-block ">
            <img
              src={require(`../assets/img/customerCommitment-banner.png`)}
              alt="customerCommitment-banner"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerCommitment;
