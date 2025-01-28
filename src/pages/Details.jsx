import { Link, useLocation } from "react-router-dom";
import image from "../assets/AboutUs/mobilePicture.png";
import { Button } from "@/components/ui/button";
import { CircleArrowLeft } from 'lucide-react';
const Details = () => {
  let { state } = useLocation();
  
  console.log(state.data);
  return (
    <div className="  w-screen flex flex-col-reverse md:flex-row-reverse   justify-end md:justify-start ">
      <Button className="bg-[#48B09F] hover:bg-green-600  self-end ml-3 mt-3 md:absolute md:top-2 md:left-2 opacity-80 hover:opacity-100 ">
        <Link to="/" className="flex flex-row-reverse gap-2" >
          <CircleArrowLeft size={24} />
        الرجوع</Link>
      </Button>
      <img
        alt="Card Image"
        className="w-full md:w-2/4
           object-cover md:object-contain object-top rounded-none"
        src={state.data.image || image}
        width="384"
      />
      <div className=" py-4 px-3 space-y-3">
        <h3 className="text-2xl font-Tajawal text-[#243245] font-semibold  w-fit  border-b-2 pb-1 border-y-[#35506F] ">
          {state.data.title || "مثال قياسي بكلمات عربيه"}
        </h3>
        <p className="text-[#243245] font-medium font-Tajawal ">
          { state.data.paragraph ||
            "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب."
          }
        </p>
      </div>
    </div>
  );
};

export default Details;
