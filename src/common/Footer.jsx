import React from "react";
import footerData from "../json/footerData.json";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#E5C499] pt-[40px] md:pt-[60px] pb-[80px] md:pb-[136px]">
      <div className="container">
        <img
          src={require(`../assets/svg/footer-main-logo.svg`).default}
          alt="main-logo"
          className="mb-4"
        />
        <div className="mt-4 flex flex-col lg:flex-row items-start gap-6 lg:gap-[71.5px] xl:gap-[128px]">
          <div className="lg:max-w-[256px] w-full flex flex-col gap-2">
            <h3 className="lg:max-w-[174px] w-full text-[20px] leading-[32px] font-normal font-aa">
              Stay Connected with Farm Crest
            </h3>
            <p className="text-[#6B6B6B] text-[14px] font-normal leading-[24px]">
              Enhancing plant growth while caring for the planet. Join us on our
              journey toward a greener, more sustainable future.
            </p>
          </div>
          <div className="flex flex-wrap lg:grid grid-cols-[1fr_auto_160px] items-start justify-start gap-6 md:gap-8 lg:gap-[71.5px]">
            {footerData.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-4 sm:gap-5 lg:gap-[25px]">
                <h4 className="text-[18px] sm:text-[20px] text-black leading-[24px] sm:leading-[26.98px] font-normal font-aa">
                  {item.heading}
                </h4>
                <div className=" flex flex-col items-start gap-2 md:gap-3 lg:gap-4 min-w-[160px]">
                  {item.contents.map((i, idx) =>
                    i.type === "Link" ? (
                      <Link
                        key={idx}
                        to={i.link}
                        className="text-[#6B6B6B] text-[14px] leading-[24px] font-normal footerLink-HoverEffect hover:text-black transition-all duration-200"
                      >
                        {i.name}
                      </Link>
                    ) : i.type === "a" ? (
                      <a
                        key={idx}
                        href={i.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#6B6B6B] text-[14px] leading-[24px] font-normal footerLink-HoverEffect hover:text-black transition-all duration-200"
                      >
                        {i.name}
                      </a>
                    ) : (
                      <p
                        key={idx}
                        className="text-[#6B6B6B] text-[14px] leading-[24px] font-normal cursor-default"
                      >
                        {i.name}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
