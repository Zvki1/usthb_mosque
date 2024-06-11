/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from "react";
import subtitle from "../../assets/Activities/subtitle.svg";
import AyaSelector from "../Quran/AyaSelector";
import { AyaPlayer } from "./aya-player";
import axios from "axios";

const Index = forwardRef((props, ref) => {
  const [isGettingSuwar, setIsGettingSuwar] = useState(false);
  const [suwarList, setSuwarList] = useState([]);
  useEffect(() => {
    setIsGettingSuwar(true);
    axios
      .get("https://mp3quran.net/api/v3/suwar")
      .then((response) => {
        setSuwarList(response.data.suwar);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsGettingSuwar(false);
      });
  }, []);
  return (
    <div
      className="flex items-center flex-col py-11 gap-1 bg-gradient-to-b from-[#35506F] to-[#243245]"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center gap-2  ">
        <h3 className="text-white font-Tajawal text-5xl font-[800]  ">
          القـــرآن الكـــريـــم
        </h3>
        <img src={subtitle} alt="subtitle" className="w-full " />
      </div>
      <AyaPlayer />
      <div className=" flex flex-col items-center gap-3 pt-5">
        <h3 className="text-white font-Tajawal text-lg font-[500]  ">
          اختر السورة
        </h3>
        <AyaSelector suwarList={suwarList} />
      </div>
    </div>
  );
});

export default Index;
