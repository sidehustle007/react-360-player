import React, { useState, useEffect, useRef } from "react";
import PlayerButtons, { LockBtn, MapBtn } from "./playerButtons";
import PanoCont from "./panoCont";
import ProgressBar from "./progressBar";

export default function Player({ imgurl }) {
  const containerParentRef = useRef(null);
  const [fullscreen, setFullScreen] = useState(false);
  const [mode, setMode] = useState(0);
  const [sensor, setSensor] = useState(false);
  const [lock, setLock] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerParentRef.current.requestFullscreen(); // Request fullscreen
      setFullScreen(true);
    } else {
      document.exitFullscreen(); // Exit fullscreen
      setFullScreen(false);
    }
  };

  const setModeType = () => {
    setMode((prev) => (prev >= 2 ? 0 : prev + 1));
  };

  const handleSensor = () => {
    setSensor(!sensor);
  };

  return (
    <div
      ref={containerParentRef}
      className="bg-black w-full overflow-hidden h-full relative flex justify-center items-center"
    >
      <PanoCont
        imgurl={imgurl}
        mode={mode}
        sensor={sensor}
        setProgress={setProgress}
      />
      <PlayerButtons
        handleSensor={handleSensor}
        setModeType={setModeType}
        handleFullScreen={handleFullScreen}
        mode={mode}
        fullscreen={fullscreen}
        sensor={sensor}
        lock={lock}
      />

      <LockBtn lock={lock} setLock={setLock} />
      <MapBtn lock={lock} />
      <ProgressBar progress={progress?.loaded / progress?.total} />
    </div>
  );
}
