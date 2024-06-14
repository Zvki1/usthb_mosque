import { forwardRef } from "react";
import subtitle from "../../assets/AboutUs/subtitle.svg";
import { ContactForm } from "@/components/component/contact-form";
import SocialMedias from "./SocialMedias";
import logoBg from "../../assets/navbar/logoBg.svg";
const ContactUs = forwardRef(function ContactUs(props, ref) {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-11 relative">
      <div className="flex flex-col items-center justify-center gap-0.5 mb-8 relative z-10">
        <h3 className="text-[#35506F] font-Tajawal text-4xl font-[800] text-center ">
          اتــــــصـــل بـــنــــــــا
        </h3>
        <img src={subtitle} alt="subtitle" className="w-full " />
      </div>
      <div className="w-full md:flex md:flex-row-reverse md:px-16 md:justify-center relative z-10">
        <ContactForm />
        <SocialMedias />
      </div>
      <div className="absolute top-0 rotate-180 md:rotate-0 md:bottom-0  w-full  flex items-center justify-center">
        <img
          src={logoBg}
          alt="background"
          className="w-full md:w-2/4 lg:w-2/6 opacity-25"
        />
      </div>
    </div>
  );
});

export default ContactUs;
