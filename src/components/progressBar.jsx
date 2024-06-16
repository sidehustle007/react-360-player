import React from "react";

// export default function ProgressBar({ progress }) {
//   console.log("progress >>> >>", progress);

//   return (
//     <div
//       className={`transition-opacity ease-in duration-700 ${
//         progress === 1 ? "opacity-0" : "opacity-100"
//       } absolute top-[10px] px-2 py-1 flex justify-center items-center left-[10px] bg-white/20`}
//     >
//       <div className={`text-white`}>{progress * 100}%</div>
//     </div>
//   );
// }

export default function ProgressBar({ progress }) {
  console.log("progress >>> >>", (progress * 100).toFixed(0));

  return (
    <div
      className={`transition-opacity ease-in duration-700 ${
        progress === 1 ? "opacity-0" : "opacity-100"
      } absolute top-0 w-full h-[4px] left-0 bg-white/20`}
    >
      <div
        className={`bg-white w-[${(progress * 100).toFixed(0)}%] h-full`}
      ></div>
    </div>
  );
}
