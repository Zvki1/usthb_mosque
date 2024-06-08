import subtitle from "../../assets/AboutUs/subtitle.svg";
import MobilePicture from "../../assets/AboutUs/mobilePicture.png";
import desktopPicture from "../../assets/AboutUs/desktopPictures.png";
import motif from "../../assets/AboutUs/path6317.svg";
import "./style.css"
const Index = () => {
  return (
    <section className="relative">
      <div className="md:hidden flex flex-col items-center justify-between pb-4 pt-3 gap-5 ">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#35506F] font-Tajawal text-5xl font-[800] text-center ">
            حـــــــــــــــولنــــــــــــــــــا
          </h3>
          <img src={subtitle} alt="subtitle" className="w-full " />
        </div>

        <p className="text-[#35506F] text-lg font-Tajawal font-normal leading-[18px] px-6 text-center">
          لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
          انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن. لوريم ايبسوم دولار
          سيت أميت ,كونسيكتيتو أدايبا يسكينج أليايت,سيت
        </p>
        <img
          src={MobilePicture}
          alt=""
          className="px-7 pt-3 md:hover:scale-105 transform transition duration-500 ease-in-out"
        />
      </div>
      <div className=" hidden md:flex px-32 pb-12 flex-row">
        <img src={desktopPicture} alt="" width={330} />
        <div  className=" motif absolute -top-[180px] inset-x-0  w-full flex items-center justify-center overflow-hidden">
        <img  src={motif} alt=""  />
        </div>
      </div>
    </section>
  );
};

export default Index;
