import React, { useState } from "react";
import AllBanners from "../snippets/AllBanners";
import AllButtons from "../snippets/AllButtons";
import { Link } from "react-router-dom";
import jsonData from "../json/productDetail-table.json"

function ProductDetail() {
  const [indexx, setIndexx] = useState(0);
  return (
    <>
      <AllBanners name="Cocopeat Block" />
      <section className="all-sections">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4 sm:gap-6 lg:gap-8 w-full">
            <div className="flex flex-col items-center gap-5 sm:gap-[30px] lg:gap-[52px]">
              <div className="group bg-[#EED19C] p-4 md:p-8 rounded-[10px] md:rounded-[30px]">
                <div className=" overflow-hidden rounded-[10px] md:rounded-[20px]">
                  <img
                    className="group-hover:scale-105 transition-all duration-300"
                    src={require(`../assets/img/productDetail-prod-img.png`)}
                    alt="product-img"
                  />
                </div>
              </div>
              <div className="lg:p-[0_24px] flex flex-col items-center lg:items-start gap-3 sm:gap-5 lg:gap-6">
                <h3 className="text-[18px] leading-[22px] md:text-[22px] md:leading-[30px] lg:text-[32px] lg:leading-[43.17px] text-center lg:text-start text-[#222222] font-aa font-normal ">
                  The specification and packaging can be modified according to
                  the buyer requirements.
                </h3>
                <Link to={"/contact"}>
                  <AllButtons name="click here to contact us" />
                </Link>
              </div>
            </div>
            <div className="">
              <div className="w-full pb-6 border-b border-solid border-[#D6D6D6]">
                <h2 className="text-[28px] md:text-start text-center leading-[36px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[52px] text-[#222222] font-aa font-normal mb-3">
                  Cocopeat Block
                </h2>
                <p className="lg:max-w-[457px] w-full text-center md:text-start md:text-[16px] text-[14px] leading-[26px] md:leading-[28px] text-[#6B6B6B] font-normal">
                  Cocopeat Block is a compressed, solid form of cocopeat made
                  from natural coconut husk fibers. Designed to expand when
                  hydrated, this product serves as an excellent soil conditioner
                  and moisture retainer, perfect for improving soil structure
                  and promoting healthy root growth.{" "}
                </p>
              </div>
              <div className="mt-4">
                <h4 className="md:text-[20px] text-[18px] leading-[26.98px] text-[#222222] text-center md:text-start font-normal font-aa">
                  Cocopeat Block
                </h4>
                <div className="flex items-center p-1 xl:p-2 gap-1 bg-[#E5DAC5] rounded-[40px] mt-2 mb-4">
                  {[
                    "Analysis",
                    "Product Specification",
                    "Shipping Specification",
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIndexx(index);
                      }}
                      className={`${
                        index === indexx && "bg-[#DFD1B5]"
                      } rounded-[20px] p-[8px] max-w-[173.33px] w-full text-center text-[12px] xl:text-[14px] leading-[14px] xl:leading-[16.94px] text-[#090909] font-normal `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <table className="w-full rounded-[8px] md:rounded-[12px] overflow-hidden">
                  <thead>
                    <tr className="w-full grid grid-cols-3">
                      {["Nutrients", "Nutrients", "Nutrients"].map(
                        (item, index) => (
                          <th
                            className="bg-black border-[0.5px] md:border border-[#B9B9B9] border-solid p-[8px] md:p-[8px_16px] text-[12px] sm:text-[16px] leading-[16px] sm:leading-[19.36px] font-normal text-white"
                            key={index}
                          >
                            {item}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="myTable">
                    {
                        jsonData.map((item, index) => (
                            <tr key={index} className="grid grid-cols-3 gap-[1px] w-full">
                                <td className="p-2 md:p-[16px_0_16px_16px] bg-[#E5DAC5] text-[12px] sm:text-[14px] leading-[16.94px] font-normal text-[#3D3D3D]">{item.first}</td>
                                <td className="p-2 md:p-[16px_0_16px_16px] bg-[#E5DAC5] text-[12px] sm:text-[14px] leading-[16.94px] font-normal text-[#3D3D3D]">{item.second}</td>
                                <td className="p-2 md:p-[16px_0_16px_16px] bg-[#E5DAC5] text-[12px] sm:text-[14px] leading-[16.94px] font-normal text-[#3D3D3D]">{item.third}</td>
                            </tr>
                        ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
