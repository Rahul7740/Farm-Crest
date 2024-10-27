import React from "react";

function AllButtons(props) {
  return (
    <button
    type={props.type || "text"}
    className={`whitespace-nowrap transition-all duration-300 ease-in-out 
      bg-[#FFD13B] text-[#3E3E3E] hover:bg-[#3E3E3E] hover:text-[#FFD13B]
      border border-solid border-[#ffd23b] hover:border-[#3E3E3E]
      text-[14px] md:text-[16px] leading-[16.36px] md:leading-[19.36px] font-medium 
      p-[10px_15px] sm:p-[20px_20px] md:p-[20px_30px] rounded-[30px] ${props.class}`}
  >
    {props.name}
  </button>
  
  );
}

export default AllButtons;
