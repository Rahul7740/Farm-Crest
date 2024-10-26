import React from "react";

function SectionHeading(props) {
  return (
    <div className={`text-[16px] transition-all duration-200 leading-[19.36px] font-normal text-black p-[12px_20px] border border-[#ACACAC] rounded-[30px] ${props.class} `}>
      {props.name}
    </div>
  );
}

export default SectionHeading;
