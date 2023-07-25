import React, {useState} from "react";
import Ceklis from "../assets/image/Ceklis.png";
import Silang from "../assets/image/Silang.png";

function CardPlan({ title, desc, price, features, featuresx, isSelect }) {
  const [selected, setSelected] = useState(isSelect);

  const handleButtonClick = () => {
    setSelected(true);
    // tambahkan logika lain yang Anda inginkan saat tombol diklik
  };

  return (
    <div
      className={`bg-white rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
        selected ? "bg-blue-500 text-white" : "border-white-300"
      }`} id="CardPlan"
      style={{ height: "817px", width: "307.5px" }}
    >
      <div className="space-y-5 flex flex-col justify-center items-start" style={{ paddingLeft:"30px" }}>
        <span className="font-semibold" style={{fontSize: "22px"}}>{title}</span>
        <span style={{ fontSize:"16px", color: selected ? "white" : "#787878"}}>{desc}</span>
        <div className="mt-11">

        <div className="mb-3" style={{ fontSize: 50, display: "flex", alignItems: "center" }}>
          <span>{price}</span>
          <span style={{ fontSize: "16px", color: selected ? "white" : "#787878", marginLeft: "5px" }}>/Month</span>
        </div>
        
          <button
            className={`border rounded-md py-1 px-16 border-blue-500  ${
              selected ? "bg-white text-blue-500" : "bg-white text-blue-500"
            }`}
            onClick={handleButtonClick}
          >
            Get Started Now
          </button>
        </div>
        <div className="space-y-2">
          {features.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row mr-2 items-center space-x-2"
              >
                <img src={Ceklis} alt="check-success" className="w-8 h-8" />
                <div>{val}</div>
              </div>
            );
          })}
          {featuresx.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row mr-2 items-center space-x-2"
              >
                <img src={Silang} alt="check-success" className="w-8 h-8" />
                <div style={{ color: selected ? "white" : "#787878" }}>{val}</div>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}


export default CardPlan;
