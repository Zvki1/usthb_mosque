import { forwardRef } from "react";
import subtitle from "../../assets/Activities/subtitle.svg";
import { ActivitiesCarousel } from "./ActivitiesCarousel";
import { AcitivityComponent } from "./acitivity-component";
// eslint-disable-next-line react/display-name
const Index = forwardRef((props,ref) => {
  return (
    <div className="flex items-center flex-col py-11 gap-1 bg-gradient-to-b from-[#35506F] to-[#243245]" ref={ref}>
      <div className="flex flex-col items-center justify-center   ">
        <h3 className="text-white font-Tajawal text-5xl font-[800]  ">
          نـــشـــاطــــــتنــــــــــا
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
  );
});

export default Index;
