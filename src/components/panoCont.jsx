import React, { useEffect, useRef } from "react";
import {
  ImagePanorama,
  Viewer,
  CONTROLS,
  Infospot,
  MODES,
} from "@enra-gmbh/panolens";
import panoimage from "../assets/image1.jpeg";

export default function PanoCont({ imgurl, mode, sensor, setProgress }) {
  const containerRef = useRef(null);
  const panorama = useRef(null);
  const viewer = useRef(null);
  const infospot = useRef(null);
  const controls = useRef(null);
  const modes = useRef(null);
  const panoimg = imgurl ?? panoimage;

  useEffect(() => {
    if (panorama.current || viewer.current) {
      return;
    }

    controls.current = CONTROLS;

    panorama.current = new ImagePanorama(panoimg);

    infospot.current = new Infospot(350);
    infospot.current.position.set(1000, -1000, -2000);
    infospot.current.addHoverText("Simple Info Text");
    panorama.current.add(infospot.current);

    viewer.current = new Viewer({
      container: containerRef.current,
      controlBar: false,
      // output: "console",
    });
    viewer.current.add(panorama.current);
    viewer.current.enableControl(0);

    panorama.current.addEventListener("progress", function (e) {
      console.log("pregres >>>>>>: ", e.progress);
      setProgress(e.progress);
    });
  }, []);

  useEffect(() => {
    if (viewer) {
      modes.current = MODES;
      const modetypes = [
        //   modes.current.UNKNOWN,
        modes.current.NORMAL,
        modes.current.CARDBOARD,
        modes.current.STEREO,
      ];

      viewer.current.enableEffect(modetypes[mode]);
    }
  }, [mode]);

  useEffect(() => {
    if (viewer) {
      modes.current = MODES;
      const sensortypes = [
        controls.current.ORBIT,
        controls.current.DEVICEORIENTATION,
      ];

      viewer.current.enableControl(sensortypes[sensor ? 1 : 0]);
    }
  }, [sensor]);

  return (
    <div
      ref={containerRef}
      id="panoCont"
      style={{ width: "100%", height: "100%", margin: "0 auto" }}
    ></div>
  );
}
