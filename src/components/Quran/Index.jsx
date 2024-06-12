/* eslint-disable react/display-name */
import { forwardRef, useEffect, useRef, useState } from "react";
import subtitle from "../../assets/Activities/subtitle.svg";
import AyaSelector from "../Quran/AyaSelector";
import { AyaPlayer } from "./aya-player";
import axios from "axios";

const Index = forwardRef((props, ref) => {
  const [isGettingSuwar, setIsGettingSuwar] = useState(false);
  const [suwarList, setSuwarList] = useState([]);
  const [suraUrl, setSuraUrl] = useState(
    "https://server7.mp3quran.net/shur/128/001.mp3"
  );
  const audioRef = useRef(null);

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = suraUrl;
      audioRef.current.load();
    }
  }, [suraUrl]);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleStepForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, audioRef.current.duration);
    }
  };

  const handleStepBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

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
      <AyaPlayer
        audioRef={audioRef}
        onPlayPause={handlePlayPause}
        onStepForward={handleStepForward}
        onStepBack={handleStepBack}
      />
      <audio ref={audioRef}>
        <source src={suraUrl} type="audio/mp3"></source>
      </audio>
      <div className="flex flex-col items-center gap-3 pt-5">
        <h3 className="text-white font-Tajawal text-lg font-[500]  ">
          اختر السورة
        </h3>
        <AyaSelector suwarList={suwarList} setSuraUrl={setSuraUrl} />
      </div>
    </div>
  );
});

export default Index;
