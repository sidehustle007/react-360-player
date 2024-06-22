import React, { useState, useEffect, useRef } from "react";
import PlayerButtons, { LockBtn, MapnGalleryBtn } from "./playerButtons";
import PanoCont from "./panoCont";
import ProgressBar from "./progressBar";
import Gallery from "./gallery";
import PanoImg from "../constant/data";
import Sudden from "./sudden";
import SideViewOnPlayer from "./sideviewonplayer";
import Iframe from "./iframe";

import panoimage from "../assets/image1.jpeg";

export default function Player({ imgurl }) {
  const containerParentRef = useRef(null);
  const [fullscreen, setFullScreen] = useState(false);
  const [mode, setMode] = useState(0);
  const [sensor, setSensor] = useState(false);
  const [lock, setLock] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showgallery, setShowGallery] = useState(false);
  const [galleryUrl, setGalleryUrl] = useState(null);
  const [seleNum, setSeleNum] = useState(null);
  const [showGeoMap, setShowGeoMap] = useState(false);

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

  // useEffect(() => {
  //   galleryUrl && setShowGallery(false);
  // }, [galleryUrl]);

  const randSelect = () => {
    const randnum = Math.floor(Math.random() * 13);
    setGalleryUrl(PanoImg[randnum]?.imageLink);
    setSeleNum(randnum);
  };

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
      {/* 
      <img
        src={galleryUrl ? galleryUrl : panoimage}
        className="w-full h-full"
        alt=""
      /> */}
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
        // randSelect={randSelect}
        showmap={() => setShowGeoMap(!showGeoMap)}
      />

      <ProgressBar progress={progress?.loaded / progress?.total} />
      {/* <Sudden seleNum={seleNum} /> */}
      <SideViewOnPlayer show={!lock && showGeoMap}>
        <Iframe src={"https://maps.google.com/maps?q=1888&output=embed"} />
      </SideViewOnPlayer>
      <SideViewOnPlayer show={!lock && showgallery}>
        <Gallery setGalleryUrl={setGalleryUrl} />
      </SideViewOnPlayer>
    </div>
  );
}
