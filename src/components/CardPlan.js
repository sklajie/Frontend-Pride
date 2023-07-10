import React, {useState} from "react";
import Check from "../assets/Check.png";

function CardPlan({ title, desc, price, features, isSelect }) {
  const [selected, setSelected] = useState(isSelect);

  const handleButtonClick = () => {
    setSelected(true);
    // tambahkan logika lain yang Anda inginkan saat tombol diklik
  };

  return (
    <div
      className={`bg-white rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
        selected ? "bg-blue-500 text-white" : "border-gray-300"
      }`}
    >
      <div className="space-y-5 flex flex-col justify-center items-center">
        <h1 className="font-bold items-left" style={{ fontSize:30}}>{title}</h1>
        <span style={{ fontSize:"16px", marginLeft:65, marginRight:50 }}>{desc}</span>
        <div className="mt-11">
          <div className="mb-3 grid grid-col-2" style={{ fontSize:50 }}><div>{price}</div><div>/Month</div></div>
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
                className="flex flex-row mr-2 px-5 items-center space-x-2"
              >
                <img src={Check} alt="check-success" className="w-5 h-5" />
                <div>{val}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default CardPlan;
