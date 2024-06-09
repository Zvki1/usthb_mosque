/* eslint-disable react/prop-types */
import Isha from "./icons/Isha";
import bgPrayer from "../../assets/prayerTime/bgPrayer.svg";
const MobileOnePrayer = ({ isNext }) => {
  return (
    <div
      className={`flex items-center w-4/6 justify-between p-3 rounded-xl  font-medium text-lg ${
        isNext ? "text-white bg-[#48B09F]" : "bg-white"
      } `}
      style={{
        boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.08)",
        backgroundImage: `url(${bgPrayer})`,
      }}
    >
      <div className={`flex items-center gap-2 sm:gap-4  `}>
        <Isha fill={isNext ? "white" : "#535353"} width={28} />
        <h3>العشاء</h3>
      </div>
      <p>20:05</p>
    </div>
  );
};

export default MobileOnePrayer;
