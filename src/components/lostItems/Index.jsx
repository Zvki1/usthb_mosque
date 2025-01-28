import { forwardRef, useEffect, useState } from "react"
import subtitle from "../../assets/Activities/subtitle.svg";
import axios from "axios";
import { ActivitiesCarousel } from "../activities/ActivitiesCarousel";

// eslint-disable-next-line react/display-name
const LostItems = forwardRef((props, ref) => {
    const [lostItems, setLostItems] = useState([]);
    const [isGettingLostItems, setIsGettingLostItems] = useState(false);
    useEffect(() => {
      setIsGettingLostItems(true);
      axios
        .get(import.meta.env.VITE_API_URL + "/LostItems")
        .then((response) => {
          console.log(response.data.lostItems);
          setLostItems(response.data.lostItems);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsGettingLostItems(false);
        });
    }, []);
  return (
    <div
         className="flex items-center flex-col py-11 gap-1 bg-gradient-to-t from-[#35506F] to-[#243245]"
         ref={ref}
       >
         <div className="flex flex-col items-center justify-center gap-2   ">
           <h3 className="text-white font-Tajawal text-5xl font-[800]  ">
                الأشياء المفقودة
           </h3>
           <img src={subtitle} alt="subtitle" className="w-full" />
         </div>
   
         {isGettingLostItems ? (
             <div className=" h-96 flex items-center justify-center">
               <p className=" text-4xl font-semibold text-titleBlue animate-pulse">جاري التحميل...</p>
             </div>
           ) : (
             <ActivitiesCarousel data={lostItems} />
             
           )}
   
        
       </div>
  )
})

export default LostItems