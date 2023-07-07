import React from "react";

export default function TitleDesc({ title, title2, titlegrad, desc }) {
  return (
    <div className=" container max-w-5xl mx-auto mb-10 ">
      <div className="text-center text-3xl font-bold">{title}</div>
      <div className="text-center text-3xl font-bold mb-5" style={{color:"red"}}>{title2}</div>
      <div className="text-center text-3xl font-bold mb-5" style={{ background: "linear-gradient(to right, red, orange)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
      {titlegrad}
      </div>
      <div className="text-center font-normal text-sm text-gray-600">
        {desc}
      </div>
    </div>
  );
}
