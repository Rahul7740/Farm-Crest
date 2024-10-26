import React from 'react'

function AllButtons(props) {
  return (
    <button className={`whitespace-nowrap transition-all duration-200 bg-[#FFD13B] hover:text-[#ffd23b] border border-solid border-[#ffd23b] hover:bg-transparent text-[16px] leading-[19.36px] font-medium text-[#3E3E3E] p-[20px_20px] md:p-[20px_30px] rounded-[30px] ${props.class} `}>
        {props.name}
    </button>
  )
}

export default AllButtons
