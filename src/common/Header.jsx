import React, { useState } from "react";
import headerJson from "../json/menu-Links.json";
import { Link, NavLink } from "react-router-dom";
import AllButtons from "../snippets/AllButtons";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-[#E5C499] pt-[10px] md:pt-[15px] pb-[40px] sm:pb-[56px] relative">
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
          <div className="bg-[#FFD13B] flex items-center justify-center max-w-[110px] md:max-w-[150px] h-full w-full md:pt-[5px] md:pb-[6px]">
            <Link to={"/"}>
              <img
                className="sm:w-auto h-14 w-14 sm:h-auto"
                src={require(`../assets/svg/main-logo.svg`).default}
                alt="main-logo"
              />
            </Link>
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
            className="flex xs:hidden flex-col gap-[6px] items-center justify-center bg-[#FFD13B] p-[8px_10px] rounded-[30px] relative"
            onClick={() => setMenu(!menu)}
          >
            <span
              className={`h-[3px] w-[25px] bg-[#222222] rounded transition-transform duration-300 ${
                menu ? " translate-y-[9px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-[25px] bg-[#222222] rounded transition-opacity duration-300 ${
                menu ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-[25px] bg-[#222222] rounded transition-transform duration-300 ${
                menu ? " -translate-y-[9px] -rotate-45" : ""
              }`}
            ></span>
          </button>
          <Link to={"/contact"} className="hidden sm:flex">
            <AllButtons name="Contact us" />
          </Link>
        </div>
        <div
          className={`${
            menu ? "z-30 scale-x-100 opacity-100" : "scale-x-50 opacity-0 -z-10"
          } origin-right flex duration-200 transition-all xs:hidden bg-white shadow-2xl p-[20px_10px] rounded-[8px] absolute w-[92%] top-20 right-[50%] translate-x-2/4  flex-col gap-1 items-start res-menu`}
        >
          {headerJson.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              onClick={() => {
                setMenu(false);
              }}
              className={
                "bg-[#E5C499] rounded text-[#222222] w-full p-[5px_10px]"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
