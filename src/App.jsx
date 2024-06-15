import React, { useEffect, useRef } from "react";
import { ImagePanorama, Viewer, CONTROLS, Infospot } from "@enra-gmbh/panolens";
import pano from "../src/assets/image1.jpeg";

function App() {
  const containerRef = useRef(null);
  const panorama = useRef(null);
  const viewer = useRef(null);
  const infospot = useRef(null);
  const controls = useRef(null);

  const handleFullScreen = () => {
    if (containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen();
    } else if (containerRef.current.mozRequestFullScreen) {
      // Firefox
      containerRef.current.mozRequestFullScreen();
    } else if (containerRef.current.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      containerRef.current.webkitRequestFullscreen();
    } else if (containerRef.current.msRequestFullscreen) {
      // IE/Edge
      containerRef.current.msRequestFullscreen();
    }
  };

  useEffect(() => {
    if (panorama.current || viewer.current) {
      return;
    }

    controls.current = CONTROLS;

    const searchParams = new URLSearchParams(window.location.search);
    const paraimgurl = searchParams.get("url");
    const panoimg = paraimgurl ?? pano;

    panorama.current = new ImagePanorama(panoimg);

    infospot.current = new Infospot(350);
    infospot.current.position.set(1000, -1000, -2000);
    infospot.current.addHoverText("Simple Info Text");
    panorama.current.add(infospot.current);

    viewer.current = new Viewer({
      container: containerRef.current,
      // controlBar: false,
      // output: "console",
    });
    viewer.current.add(panorama.current);
    // viewer.current.enableControl(controls.current.DEVICEORIENTATION);
    // viewer.current.enableControl(1);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        ref={containerRef}
        id="panoCont"
        style={{ width: "100%", height: "100%", margin: "0 auto" }}
      ></div>
      <button
        style={{ position: "absolute", top: "20px", left: "50px" }}
        onClick={handleFullScreen}
      >
        fullscreen
      </button>
    </div>
  );
}

export default App;
