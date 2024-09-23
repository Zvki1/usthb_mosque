import { forwardRef, useEffect,useState } from "react";
import subtitle from "../../assets/Activities/subtitle.svg";
import { ActivitiesCarousel } from "./ActivitiesCarousel";
import { AcitivityComponent } from "./acitivity-component";
import axios from "axios";
// eslint-disable-next-line react/display-name
const Index = forwardRef((props,ref) => {
  const [activities, setActivities] = useState([]);
  const [isGettingActivities, setIsGettingActivities] = useState(false);
  useEffect(() => {
    setIsGettingActivities(true);
   axios.get(import.meta.env.VITE_API_URL + "/activity/selected")
    .then((response) => {
      console.log(response.data.activities);
      setActivities(response.data.activities);
    })
    .catch((error) => {
      console.log(error);
    }) 
    .finally(() => {
      setIsGettingActivities(false);
    })
  

  }, [])
  
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
      {/* <div className="hidden md:flex flex-row gap-5 items-center justify-center pt-10">
        <AcitivityComponent />
        <AcitivityComponent />
        <AcitivityComponent />
      </div> */}
      <div className="hidden md:flex flex-row gap-5 items-center justify-center pt-10">
        {activities.map((activity) => (
          <AcitivityComponent key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
});

export default Index;
