/* eslint-disable react/prop-types */
import { StepForward, StepBack } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export function AyaPlayer({
  audioRef,
  onPlayPause,
  onStepForward,
  onStepBack,
  suraName,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setDuration = () => {
        setAudioDuration(audio.duration);
      };
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener("loadedmetadata", setDuration);
      audio.addEventListener("timeupdate", updateTime);

      return () => {
        audio.removeEventListener("loadedmetadata", setDuration);
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [audioRef]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    onPlayPause();
  };
  const handleSliderChange = (value) => {
    const audio = audioRef.current;
    const newTime = value[0];
    if (audio) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
      console.log(`Slider changed: New time is ${newTime}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-3 px-3 mt-6 bg-white rounded-lg shadow-md w-5/6">
      <div className="flex flex-col items-center ">
        <h3 className="text-lg font-bold text-[#35506F] font-Tajawal">
          {suraName}
        </h3>
        <p className="text-[#35506F] font-[400] font-Tajawal">
          الشيخ سعود الشريم
        </p>
      </div>
      <div className="w-full">
        <Slider
          className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-400 dark:[&>span:first-child]:bg-gray-600 [&_[role=slider]]:bg-[#50C3B1] [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-[#50C3B1] [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
          value={[currentTime]}
          min={0}
          max={audioDuration}
          onChange={handleSliderChange}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button
          className="text-[#35506F]"
          size="icon"
          variant="ghost"
          onClick={onStepForward}
        >
          <StepForward className="w-6 h-6" />
        </Button>
        <Button
          className="text-[#50C3B1]"
          size="icon"
          variant="ghost"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <PlayIcon className="w-6 h-6" />
          ) : (
            <PauseIcon className="w-6 h-6" />
          )}
        </Button>
        <Button
          className="text-[#35506F]"
          size="icon"
          variant="ghost"
          onClick={onStepBack}
        >
          <StepBack className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function PauseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}
