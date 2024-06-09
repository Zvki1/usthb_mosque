
import subtitle from "../../assets/Activities/subtitle.svg";
import { AyaPlayer } from "./aya-player";

const Index = () => {
  return (
    <div className="flex items-center flex-col py-11 gap-1 bg-gradient-to-b from-[#35506F] to-[#243245]">
      <div className="flex flex-col items-center justify-center gap-2  ">
        <h3 className="text-white font-Tajawal text-5xl font-[800]  ">
          القـــرآن الكـــريـــم
        </h3>
        <img src={subtitle} alt="subtitle" className="w-full " />
      </div>
      <AyaPlayer />
    </div>
  );
};

export default Index;
