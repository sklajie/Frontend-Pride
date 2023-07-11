import React from "react";
import Surveyor from "../assets/image/Image30.png";
import Krakatau from "../assets/image/krakatau EXT 1.png";

export default function BigCompanies() {
    return (
        <div className='bg bg-color-primary' style={{ backgroundColor: '#559FF8', width: '85%',marginLeft:"7.5%", height: '200px' }}>
  <div className="container mx-auto grid grid-cols-4 justify-items-center items-center" style={{height: '100%'}}>
    <div className="flex justify-center items-center">
    </div>
    <div className="flex justify-center items-center">
      <img src={Surveyor} alt="Surveyor Indonesia" />
    </div>
    <div className="flex justify-center items-center">
      <img src={Krakatau} alt="Krakatau" />
    </div>
    <div className="flex justify-center items-center">
    </div>
  </div>
</div>

      
      
    );
    }
