import React from "react";
import "../components/Login.css";
import Gambar from "../assets/image/OSPRO.jpg";
import Login from "../components/Login.js";
import Join from "./Join.js"

const TwoColumnLayout = () => {
  return (
    <div className="containerStyle">
      <div className="leftColumnStyle">
        <img src={Gambar} alt="Deskripsi gambar" className='gambar'/>
      </div>
      <div className="rightColumnStyle">
        <Login/>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
