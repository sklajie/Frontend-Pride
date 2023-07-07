import React, {useState} from "react";
import IconFree from "../assets/Free.png";
import Check from "../assets/Check.png";

function CardPlan({ title, price, features, isSelect }) {
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
        <img src={IconFree} alt="" className="w-24 h-24" />
        <h3>{title}</h3>
        <div className="mt-11">
          <div className="mb-3">{price}</div>
          <button
            className={`border rounded-md py-1 px-10 border-blue-500  ${
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
