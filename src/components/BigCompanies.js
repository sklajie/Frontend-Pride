import React from "react";
import Surveyor from "../assets/image/Image30.png";
import Krakatau from "../assets/image/krakatau EXT 1.png";

export default function BigCompanies() {
    return (
        <div className='bg bg-color-primary' style={{ backgroundColor: '#559FF8', width: '100%', height: '200px' }}>
        <div className="container mx-auto flex justify-items-center items-center">
          <img src={Surveyor} alt="Surveyor Indonesia" />
          <img src={Krakatau} alt="Krakatau" />
        </div>
      </div>
      
      
    );
    }
