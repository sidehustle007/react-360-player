import React, { useEffect, useRef } from "react";
import Player from "./components/player";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const paraimgurl = searchParams.get("url");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-full lg:h-[40vh] w-full lg:w-[30vw]">
        <Player imgurl={paraimgurl} />
      </div>
    </div>
  );
}

export default App;
