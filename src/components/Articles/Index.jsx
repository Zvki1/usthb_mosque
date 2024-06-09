import subtitle from "../../assets/AboutUs/subtitle.svg";
import { ActivitiesCarousel } from "../activities/ActivitiesCarousel";
import {AcitivityComponent} from "../activities/acitivity-component";
import logoBg from "../../assets/navbar/logoBg.svg";
const Index = () => {
  return (
    <div className=" py-12 relative">
      <div className="flex flex-col items-center gap-6 w-full relative z-10">
        <div className="flex flex-col items-center justify-center gap-0.5">
          <h3 className="text-[#35506F] font-Tajawal text-5xl font-[800] text-center ">
            مــــــقـــــــــــالات
          </h3>
          <img src={subtitle} alt="subtitle" className="w-full " />
        </div>
        <div className="md:hidden">
          <ActivitiesCarousel />
        </div>
        <div className="hidden md:flex flex-row gap-5 lg:gap-16 items-center justify-center pt-10">
          <AcitivityComponent />
          <AcitivityComponent />
          <AcitivityComponent />
        </div>
      </div>
      <div className="absolute  top-0 w-full  flex items-center justify-center">
      <img src={logoBg} alt="background" className=" w-full md:w-2/4 lg:w-7/12 opacity-80 rotate-180 md:rotate-0" />
      </div>
    </div>
  );
};

export default Index;
