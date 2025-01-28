/* eslint-disable react/display-name */
import subtitle from "../../assets/AboutUs/subtitle.svg";
import { ActivitiesCarousel } from "../activities/ActivitiesCarousel";
import logoBg from "../../assets/navbar/logoBg.svg";
import { forwardRef, useEffect, useState } from "react";
import axios from "axios";

const Index = forwardRef((propos, ref) => {
  const [articles, setArticles] = useState([]);
  const [isGettingArticles, setIsGettingArticles] = useState(false);
  useEffect(() => {
    setIsGettingArticles(true);
    axios
      .get(import.meta.env.VITE_API_URL + "/articles/selected")
      .then((response) => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsGettingArticles(false);
      });
  }, []);
  return (
    <div className=" py-12 relative" ref={ref}>
      <div className="flex flex-col items-center gap-1 w-full relative z-10">
        <div className="flex flex-col items-center justify-center gap-0.5">
          <h3 className="text-[#35506F] font-Tajawal text-5xl font-[800] text-center ">
            مــــــقـــــــــــالات
          </h3>
          <img src={subtitle} alt="subtitle" className="w-full " />
        </div>

        {isGettingArticles ? (
          <div className=" h-96 flex items-center justify-center">
            <p className=" text-4xl font-semibold text-titleBlue animate-pulse">جاري التحميل...</p>
          </div>
        ) : (
          <ActivitiesCarousel data={articles} />
        )}
      </div>
      <div className="absolute  top-0 md:top-auto md:bottom-0 w-full  flex items-center justify-center ">
        <img
          src={logoBg}
          alt="background"
          className=" w-full md:w-2/4 lg:w-4/12  opacity-80 rotate-180 md:rotate-0 "
        />
      </div>
    </div>
  );
});

export default Index;
