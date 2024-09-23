/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
import image from "../../assets/AboutUs/mobilePicture.png";
import { Link } from "react-router-dom";
export function AcitivityComponent(
  { activity } 
) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-sm  rtl
    md:hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="relative h-48 md:h-48">
        <img
          alt="Card Image"
          className="w-full h-full 
          hover:scale-125 transition-transform duration-500 ease-in-out object-cover object-center"
          src={activity?.image || image}
          width="384"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#48B09F] via-[#48b09f21] to-transparent" />
      </div>
      <div className="bg-white dark:bg-gray-950 p-4 md:p-6 space-y-3 text-right">
        <h3 className="text-2xl font-Tajawal text-[#243245] font-semibold">{activity?.title || "بطاقة العنوان"}</h3>
        <p className="text-[#243245] font-medium font-Tajawal line-clamp-3">
          {activity?.paragraph || "بطاقة النص"}
        </p>
        <Link className="flex justify-center  px-14" to={`/activity/${activity?._id}`}>
          <Button
            className="inline-flex w-full h-9 items-center justify-center rounded-md bg-[#48B09F] px-4 py-2 text-md font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-950 disabled:pointer-events-none disabled:opacity-50"
            
          >
            المــــزيـــــد
          </Button>
        </Link>
      </div>
    </div>
  );
}
