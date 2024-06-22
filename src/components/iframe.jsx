import React from "react";

export default function Iframe({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      className="px-3 py-2 rounded-md"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
