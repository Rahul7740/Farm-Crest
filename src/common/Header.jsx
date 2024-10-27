import React, { useState } from "react";
import headerJson from "../json/menu-Links.json";
import { NavLink } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-[#E5C499] pt-[15px] pb-[56px] relative">
      <div className="container">
        <div className="flex items-center justify-center gap-3 sm:gap-2 md:gap-3 lg:gap-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="tel:+1234567890"
            className="flex items-center gap-1 md:gap-2"
          >
            <img
              src={require(`../assets/svg/topBar-call-btn.svg`).default}
              alt="tel"
            />
            <h3 className="text-[13px] md:text-[16px] leading-[19.36px] font-normal text-[#3E3E3E]">
              +123-456-7890
            </h3>
          </a>
          <span className="inline-block w-[1px] h-[12px] bg-[#535353]"></span>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:info@cocopeat.com"
            className="flex items-center gap-1 md:gap-2"
          >
            <img
              src={require(`../assets/svg/topBar-mail-btn.svg`).default}
              alt="mail"
            />
            <h3 className="text-[13px] md:text-[16px] leading-[19.36px] font-normal text-[#3E3E3E]">
              info@cocopeat.com
            </h3>
          </a>
          <span className="hidden sm:inline-block w-[1px] h-[12px] bg-[#535353]"></span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/123+Greenfield+Avenue,+Eco+City,+Country"
            className="hidden sm:flex items-center gap-1 md:gap-2"
          >
            <img
              src={require(`../assets/svg/topBar-location-btn.svg`).default}
              alt="location"
            />
            <h3 className="text-[13px] md:text-[16px] leading-[19.36px] font-normal text-[#3E3E3E]">
              123 Greenfield Avenue, Eco City, Country
            </h3>
          </a>
        </div>
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 top-full -translate-y-2/4 container z-10">
        <div className="w-full flex items-center justify-between rounded-[60px] pr-3 sm:pr-3 bg-white overflow-hidden  ">
          <div className="bg-[#FFD13B] flex items-center justify-center max-w-[110px] md:max-w-[150px] h-full w-full pt-[5px] pb-[6px]">
            <img
              className="sm:w-auto h-14 w-14 sm:h-auto"
              src={require(`../assets/svg/main-logo.svg`).default}
              alt="main-logo"
            />
          </div>
          <ul
            typeof="none"
            className={`hidden xs:flex items-center justify-center gap-[30px] md:gap-[42px]`}
          >
            {headerJson.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className="text-[16px] leading-[19.36px] font-medium text-[#3E3E3E] hover:text-[#cea520] transition-all duration-200"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className={`flex xs:hidden items-center justify-center bg-[#FFD13B] p-[8px_10px]  rounded-[30px] relative`}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <img
              src={require(`../assets/svg/menu-icon.svg`).default}
              alt="menu"
            />
          </button>
          <AllButtons name="Contact us" class=" hidden sm:flex" />
        </div>
      </div>
    </header>
  );
}

export default Header;
