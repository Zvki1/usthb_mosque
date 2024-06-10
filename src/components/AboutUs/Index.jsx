/* eslint-disable react/display-name */
import subtitle from "../../assets/AboutUs/subtitle.svg";
import MobilePicture from "../../assets/AboutUs/mobilePicture.png";
import desktopPicture from "../../assets/AboutUs/desktopPictures.png";
import motif from "../../assets/AboutUs/path6317.svg";
import "./style.css";
import { forwardRef } from "react";
const Index = forwardRef((props,ref) => {
  return (
    <section className="relative" ref={ref}>
      <div className="md:hidden flex flex-col items-center justify-between pb-4 pt-3 gap-5 ">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#35506F] font-Tajawal text-5xl font-[800] text-center ">
            حـــــــــــــــولنــــــــــــــــــا
          </h3>
          <img src={subtitle} alt="subtitle" className="w-full " />
        </div>

        <p className="text-[#35506F] text-lg font-Tajawal font-normal leading-[18px] px-6 text-center">
          إن من الملفت للنظر أن أول عمل قام به الرسول ﷺ في قباء وفي المدينة كان
          بناء مسجد في كل منهما، وهذا الأمر لم يكن على سبيل المصادفة، ولم يكن
          مجرد إشارة عابرة، بل هذا منهج أصيل، فلا قيام لأمة إسلامية بغير المسجد.
          <br /> مسجدُ جامعة باب الزوار مسجدٌ جُعل للطلبة خصوصا، وللمسلمين عموما
          يسعى إلى إفادتهم علميا وإيمانيا
        </p>
        <img
          src={MobilePicture}
          alt=""
          className="px-7 pt-3 md:hover:scale-105 transform transition duration-500 ease-in-out"
        />
      </div>
      {/* desktop --------------------- */}
      <div className=" hidden md:flex  px-36 pb-12 flex-row">
        <div className="w-2/6 "><img src={desktopPicture} alt="" width={330} /></div>
        <div className="flex flex-col items-start pt-14 gap-5 w-4/6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-[#35506F] font-Tajawal text-5xl font-[800] text-center ">
              حـــــــــــــــولنــــــــــــــــــا
            </h3>
            <img src={subtitle} alt="subtitle" className="w-full " />
          </div>
          <p className="text-[#35506F] text-2xl font-Tajawal font-normal leading-[30px] px-6 text-start ">
          إن من الملفت للنظر أن أول عمل قام به الرسول ﷺ في قباء وفي المدينة كان
          بناء مسجد في كل منهما، وهذا الأمر لم يكن على سبيل المصادفة، ولم يكن
          مجرد إشارة عابرة، بل هذا منهج أصيل، فلا قيام لأمة إسلامية بغير المسجد.
          <br /> مسجدُ جامعة باب الزوار مسجدٌ جُعل للطلبة خصوصا، وللمسلمين عموما
          يسعى إلى إفادتهم علميا وإيمانيا
        </p>
        </div>

        <div className=" motif absolute -top-[180px] inset-x-0  w-full flex items-center justify-center overflow-hidden">
          <img src={motif} alt="" />
        </div>
      </div>
    </section>
  );
});

export default Index;
