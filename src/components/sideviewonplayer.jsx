import React from "react";

export default function SideViewOnPlayer({ show, children }) {
  const btnHideANi = show ? "translate-x-0" : "translate-x-[-120%]";

  return (
    <div
      className={`absolute transition-transform duration-500 ${btnHideANi} top-[10px] left-[10px] flex justify-around rounded-md items-center w-[70%] md:w-[40%] h-[calc(100%_-_71px)] text-white bg-white/20 overflow-hidden`}
    >
      {children}
    </div>
  );
}
