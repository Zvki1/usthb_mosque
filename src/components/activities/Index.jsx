import subtitle from "../../assets/Activities/subtitle.svg";
import { ActivitiesCarousel } from "./ActivitiesCarousel";
const Index = () => {
  return (
    <div className="flex items-center flex-col py-11 bg-gradient-to-b from-[#35506F] to-[#243245]">
      <div className="flex flex-col items-center justify-center   ">
        <h3 className="text-white font-Tajawal text-5xl font-[800]  ">
          نـــشـــاطــــــتنــــــــــا
        </h3>
        <img src={subtitle} alt="subtitle" className="w-full " />
      </div>
      <div className="md:hidden">
        <ActivitiesCarousel />
      </div>
    </div>
  );
};

export default Index;
