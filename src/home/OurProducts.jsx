import React, { useState } from "react";
import SectionHeading from "../snippets/SectionHeading";
import jsonData from "../json/OurProducts-cards.json";
import exploreProductJson from "../json/Explore-Our-Products.json";
import AllButtons from "../snippets/AllButtons";
import { Link } from "react-router-dom";

function OurProducts() {
  const [indexx, setIndexx] = useState(0);
  return (
    <section className="all-sections bg-[#EBE4D6]">
      <div className="container">
        <div className="flex items-center flex-col gap-4 max-w-[717px] w-full m-auto">
          <SectionHeading name="Our Products" />
          <h3 className="text-[#222222] text-[24px] leading-[36px] sm:text-[32px] sm:leading-[48px] md:text-[40px] md:leading-[60px] lg:text-[48px] lg:leading-[72px] font-normal font-aa text-center">
            Our Products: Organic Growing Solutions for Every Need
          </h3>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6 xl:gap-8 mt-10 lg:mt-[60px]">
          {jsonData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-7 items-center border p-[30px_20px] lg:p-[30px] xl:p-[45px_47px] border-[#ACACAC] hover:border-[#2C3D1E] transition-all duration-200 cursor-default rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            >
              <div className="flex items-center flex-col gap-5 lg:gap-8">
                <img
                  src={require(`../assets/img/${item.img}`)}
                  alt={item.name}
                />
                <SectionHeading
                  name={item.name}
                  class="hover:bg-[#2C3D1E] hover:text-white hover:border-[#2C3D1E] cursor-pointer"
                />
              </div>
              <p className="text-[#6B6B6B] text-center text-[16px] leading-[28px] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[60px] md:mt-[80px] lg:mt-[100px] p-[20px] sm:p-[40px_80px] md:p-[50px_100px] lg:p-[60px_144px] bg-[#2C3D1E] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] flex flex-col items-center justify-center gap-10 lg:gap-[60px]">
          <div className="flex items-center flex-col gap-6">
            <h3 className="text-[24px] leading-[32px] md:text-[32px] md:leading-[43.17px] font-normal font-aa text-center text-white">
              Explore Our Products
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {exploreProductJson["btns"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIndexx(index);
                  }}
                  className={`${
                    index === indexx
                      ? "bg-white text-[#404040] border-white"
                      : "bg-transparent text-white border-[#ACACAC]"
                  } 
                    p-[10px_16px] sm:p-[12px_20px] text-[12px] sm:text-[14px] leading-[14px] sm:leading-[16.94px] font-normal rounded-[30px] border border-solid transition-all duration-200`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 sm:gap-6 md:gap-8">
            {exploreProductJson["cards"].map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#233514] rounded-[20px] sm:rounded-[24px] items-center gap-4 sm:gap-5 p-3 sm:p-4 group"
              >
                <div className="flex flex-col items-start gap-[8px] sm:gap-[11px]">
                  <div className="overflow-hidden rounded-[16px] sm:rounded-[20px] w-full">
                    <img
                      className="group-hover:scale-105 transition-all duration-300 w-full"
                      src={require(`../assets/img/${item.img}`)}
                      alt="cocopeat-block"
                    />
                  </div>
                  <h4 className="text-white text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px] font-medium text-start">
                    {item.name}
                  </h4>
                </div>
                <Link
                  to={"/contact"}
                  className="text-center border border-solid border-[#FFD13B] bg-transparent hover:bg-[#ffd13b9a] hover:border-[#ffd13b9a] hover:text-white transition-all duration-200 text-[#FFD13B] rounded-[16px] sm:rounded-[20px] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.36px] p-[10px] sm:p-[12px] w-full"
                >
                  {item.btn}
                </Link>
              </div>
            ))}
          </div>
          <Link to={"/contact"}>
            <AllButtons name="Contact us" class="max-w-[272px] w-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
