/* eslint-disable react/prop-types */
import Isha from "../PrayerTime/icons/Isha";
import bgPrayer from "../../assets/prayerTime/bgPrayer.svg";

const OnePrayer = ({ isNext }) => {
  return (
    <div
      className={`${
        isNext ? "text-white bg-primaryGreen" : "bg-[#FAFDFD] text-[#535353]"
      } flex flex-col items-center justify-center gap-3 size-[160px] p-4 rounded-2xl font-Tajawal  font-bold text-2xl `}
      style={{
        boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.08)",
        backgroundImage: `url(${bgPrayer})`,
      }}
    >
      <h3>العشاء</h3>
      <Isha fill={isNext ? "white" : "#535353"}  />

      <p className="text-[24px] ">20:05</p>
    </div>
  );
};

export default OnePrayer;
