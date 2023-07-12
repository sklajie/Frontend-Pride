import React from "react";

export default function TitleDesc({ title, desc }) {
  return (
    <div className=" container max-w-5xl mx-auto mb-10 ">
      <div className="text-center font-bold" style={{ fontSize:"40px", color:'#333333' }}>{title}</div>
      <div className="text-center text-gray-600" style={{ fontSize:"20px", color:'#545454' }}>
        {desc}
      </div>
    </div>
  );
}
