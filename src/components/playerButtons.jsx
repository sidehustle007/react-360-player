import React from "react";
import { FaVrCardboard } from "react-icons/fa6";
import {
  MdFullscreen,
  MdFullscreenExit,
  MdEdgesensorLow,
  MdWidthFull,
} from "react-icons/md";
import { FaSlash, FaLock, FaUnlock, FaMap } from "react-icons/fa";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";
import { IoTabletLandscape } from "react-icons/io5";
import { LuGalleryVerticalEnd } from "react-icons/lu";

export default function PlayerButtons({
  handleFullScreen,
  fullscreen,
  mode,
  setModeType,
  handleSensor,
  sensor,
  lock,
}) {
  const size = 25;
  const color = "white";
  const dimecolor = "#ffffff44";
  const activecolor = "#ffffff";

  const modeType = [
    <FaVrCardboard size={size} color={color} />,
    <PiSquareSplitHorizontalFill size={size} color={color} />,
    <IoTabletLandscape size={size} color={color} />,
  ];

  const btnHideANi = lock ? "translate-y-[150%]" : "translate-y-0";

  return (
    <div
      className={`absolute transition-transform duration-500 ${btnHideANi} bottom-[10px] flex justify-around rounded-md items-center w-auto px-4 py-2 gap-6 bg-white/20`}
    >
      <button className="relative" onClick={handleSensor}>
        <MdEdgesensorLow size={size} color={color} />
        {!sensor && (
          <FaSlash size={size} color={color} className="top-0 absolute" />
        )}
      </button>

      <button onClick={setModeType}>{modeType[mode]}</button>

      <button onClick={handleFullScreen}>
        {!fullscreen ? (
          <MdFullscreen size={size} color={color} />
        ) : (
          <MdFullscreenExit size={size} color={color} />
        )}
      </button>
    </div>
  );
}

export function LockBtn({ lock, setLock }) {
  const size = 17;
  const color = "white";
  const btnHideANi = lock ? "translate-y-0" : "translate-y-0";

  return (
    <div
      className={`absolute transition-transform duration-500 ${btnHideANi} top-[10px] right-[10px] flex justify-around rounded-md items-center w-auto p-2 gap-6 bg-white/20`}
    >
      <button onClick={() => setLock(!lock)}>
        {lock ? (
          <FaLock size={size} color={color} />
        ) : (
          <FaUnlock size={size} color={color} />
        )}
      </button>
    </div>
  );
}

export function MapnGalleryBtn({ lock, setShowGallery, showgallery }) {
  const size = 25;
  const color = "white";

  const btnHideANi = lock ? "translate-y-[150%]" : "translate-y-0";

  return (
    <div
      className={`absolute transition-transform duration-500 ${btnHideANi} bottom-[10px] left-[10px] flex justify-around rounded-md items-center w-auto px-4 py-2 gap-6 bg-white/20`}
    >
      <button>
        <FaMap size={size} color={color} />
      </button>

      <button onClick={() => setShowGallery(!showgallery)}>
        <LuGalleryVerticalEnd size={size} color={color} />
      </button>
    </div>
  );
}
