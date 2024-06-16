import React from "react";

export default function ProgressBar({ progress }) {
  if (progress == 1) return;

  return (
    <div className="absolute top-0 left-0 w-full h-[5px] bg-white/20">
      <div className={`bg-white w-[${progress * 100}%] h-full`}></div>
    </div>
  );
}
