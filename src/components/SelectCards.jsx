import React from "react";

const SelectCards = (props) => {
  return (
    <div className="relative">
      <img src={props.bg} alt="/" className="w-full h-full object-cover"/>
      <div className="absolute bg-gray-900/30 w-full h-full top-0 left-0">
        <p className="left-4 bottom-4 text-2xl text-white absolute font-[Poppins] font-bold">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectCards;
