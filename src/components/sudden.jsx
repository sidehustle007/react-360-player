import React from "react";

export default function Sudden({ seleNum }) {
  if (seleNum)
    return (
      <div
        key={seleNum}
        className={`scale-n-fade-out rounded-full opacity-0 h-[30px] w-[30px] flex justify-center items-center bg-white/20 absolute`}
      >
        <div className={`text-white`}>{seleNum}</div>
      </div>
    );
}
