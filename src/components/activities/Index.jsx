import { forwardRef, useEffect, useState } from "react";
import subtitle from "../../assets/Activities/subtitle.svg";
import { ActivitiesCarousel } from "./ActivitiesCarousel";
import axios from "axios";
// eslint-disable-next-line react/display-name
const Index = forwardRef((props, ref) => {
  const [activities, setActivities] = useState([]);
  const [isGettingActivities, setIsGettingActivities] = useState(false);
  useEffect(() => {
    setIsGettingActivities(true);
    axios
      .get(import.meta.env.VITE_API_URL + "/activity/selected")
      .then((response) => {
        // console.log(response.data.activities);
        setActivities(response.data.activities);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsGettingActivities(false);
      });
  }, []);

  return (
    <div
      className="flex items-center flex-col py-11 gap-1 bg-gradient-to-b from-[#35506F] to-[#243245]"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center   ">
        <h3 className="text-white font-Tajawal text-5xl font-[800]  ">
          نـــشـــاطــــاتنــــــــــا
        </h3>
        <img src={subtitle} alt="subtitle" className="w-full " />
      </div>

      {isGettingActivities ? (
          <div className=" h-96 flex items-center justify-center">
            <p className=" text-4xl font-semibold text-titleBlue animate-pulse">جاري التحميل...</p>
          </div>
        ) : (
          <ActivitiesCarousel data={activities} />
        )}

     
    </div>
  );
});

export default Index;
