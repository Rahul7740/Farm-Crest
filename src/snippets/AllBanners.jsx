import React from "react";
import { Link } from "react-router-dom";

function AllBanners(props) {
  return (
    <section className="bg-[url('./assets/img/all-banners-img.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center relative h-[406px]">
      <div className="absolute left-2/4 -translate-x-2/4 bottom-[94px] flex items-center justify-center gap-[30px] flex-col">
        <h3 className="cur font-normal font-aa text-white text-[36px] leading-[48px] sm:text-[48px] sm:leading-[64px] md:text-[64px] md:leading-[86px] lg:text-[82px] lg:leading-[110.62px]">
          {props.name}
        </h3>
        <div className="font-normal text-[16px] leading-[19.36px] text-white flex items-center justify-center gap-[6px]">
          <Link
            to={"/"}
            className="font-normal text-[16px] leading-[19.36px] text-white"
          >
            Home
          </Link>
          /<p className="cursor-pointer">{props.link || props.name}</p>
        </div>
      </div>
    </section>
  );
}

export default AllBanners;
