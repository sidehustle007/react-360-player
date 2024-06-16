import React, { useState, useEffect, useRef } from "react";
import PlayerButtons, { LockBtn, MapnGalleryBtn } from "./playerButtons";
import PanoCont from "./panoCont";
import ProgressBar from "./progressBar";
import Gallery from "./gallery";

export default function Player({ imgurl }) {
  const containerParentRef = useRef(null);
  const [fullscreen, setFullScreen] = useState(false);
  const [mode, setMode] = useState(0);
  const [sensor, setSensor] = useState(false);
  const [lock, setLock] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showgallery, setShowGallery] = useState(false);
  const [galleryUrl, setGalleryUrl] = useState(null);

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

  useEffect(() => {
    galleryUrl && setShowGallery(false);
  }, [galleryUrl]);

  return (
    <div
      ref={containerParentRef}
      className="bg-black w-full overflow-hidden h-full relative flex justify-center items-center"
    >
      <PanoCont
        imgurl={galleryUrl ? galleryUrl : imgurl}
        mode={mode}
        sensor={sensor}
        key={galleryUrl}
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
      <MapnGalleryBtn
        lock={lock}
        setShowGallery={setShowGallery}
        showgallery={showgallery}
      />
      {showgallery && <Gallery setGalleryUrl={setGalleryUrl} />}
      <ProgressBar progress={progress?.loaded / progress?.total} />
    </div>
  );
}
