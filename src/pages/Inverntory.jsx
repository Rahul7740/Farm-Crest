import React from "react";
import AllBanners from "../snippets/AllBanners";
import SectionHeading from "../snippets/SectionHeading";
import jsonData from "../json/Inverntory-cards.json";
function Inverntory() {
  return (
    <>
      <AllBanners name="Our Inventory" link="Inventory Page" />
      <section className="all-sections">
        <div className="container">
          <div className="flex items-center flex-col gap-8">
            <div className="max-w-[717px] w-full flex flex-col items-center gap-4">
              <SectionHeading name="Our Inventory" />
              <h3 className="text-[28px] leading-[40px] sm:text-[36px] sm:leading-[46px] lg:text-[40px] lg:leading-[52px] font-normal font-aa text-[#222222] text-center">
                Quality Products Ready for Your Growing Needs
              </h3>
            </div>
            {jsonData.map((item, index) => (
              <div className="flex flex-col md:flex-row items-center w-full p-5 lg:p-10 gap-4 md:gap-5 lg:gap-7 border border-[#ACACAC] border-solid rounded-[10px] md:rounded-[25px] lg:rounded-[40px] xl:rounded-[60px]" key={index}>
                <img className="md:h-auto h-[180px] md:w-auto  sm:w-[50%]" src={require(`../assets/img/${item.img}`)} alt="inverntory-cards" />
                <div className="relative w-full flex flex-col items-center md:items-start">
                  
                  <h3 className="text-[20px] leading-[30px] sm:text-[24px] sm:leading-[36px] md:text-[28px] md:leading-[42px] lg:text-[32px] lg:leading-[52px] font-normal font-aa text-[#222222]">{item.name}</h3>
                  <p className="mt-2 mb-4 md:mb-6 text-center md:text-start  md:max-w-[544px] w-full text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] lg:text-[16px] lg:leading-[28px] font-normal text-[#6B6B6B]"><span className="font-bold text-[#222222]">Description: {"  "}</span>{item.description}</p>
                  <div className="bg-[#E4D8C0] w-auto md:w-full hidden sm:flex items-center gap-[20px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] p-4 md:p-5 lg:p-6 rounded-[12px]">
                    <div className="flex flex-col gap-[5px] items-start">
                      <h6 className="font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[19.36px] text-[#222222]">Form:</h6>
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[28px] font-normal text-[#6B6B6B]">{item.form}</p>
                    </div>
                    <div className="hidden lg:flex flex-col gap-[5px] items-start">
                      <h6 className="font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[19.36px] text-[#222222]">Stock:</h6>
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[28px] font-normal text-[#6B6B6B]">{item.stock}</p>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start">
                      <h6 className="font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[19.36px] text-[#222222]">Price:</h6>
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[28px] font-normal text-[#6B6B6B]">{item.price}</p>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start">
                      <h6 className="font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[19.36px] text-[#222222]">Bulk Availability:</h6>
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[28px] font-normal text-[#6B6B6B]">{item["bulk-Availability"]===true ? "Yes":"No"}</p>
                    </div>
                  </div>
                  <h5 className={`static sm:mt-2 md:mt-0 text-center inline-block md:absolute top-0 right-0 text-[16px] text-white leading-[28px] p-[8px_12px] rounded-[12px] ${item.stock==="Available" ? "bg-[#16CD7B]":"bg-[#CD1616] "}`}>{item.stock}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Inverntory;
