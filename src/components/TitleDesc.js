import React from "react";
import "../assets/css/global.css"

export default function TitleDesc({ title, desc }) {
  return (
    <div className=" container max-w-6xl mx-auto mb-10 ">
      <div className="text-center font-bold" style={{ fontSize:"35px", color:'#333333', }}>{title}</div>
      <div className="text-center text-gray-600" style={{ fontSize:"15px", color:'#545454' }}>
        {desc}
      </div>
    </div>
  );
}
