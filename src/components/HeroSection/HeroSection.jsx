/* eslint-disable react/prop-types */
import NavBar from "../Navbar/NavBar";
import basmalaMobile from "../../assets/navbar/basmaMobile.svg";
import ayaMobile from "../../assets/navbar/ayaMobile.svg";
import logoBg from "../../assets/navbar/logoBg.svg";
import basmaladesktop from "../../assets/navbar/basmaladesktop.svg";
import ayadesktop from "../../assets/navbar/ayadesktop.svg";
const HeroSection = ({
  scrollToAbout,
  scrollToActivities,
  scrollToArticles,
  scrollToQuran,
}) => {
  return (
    <section className="w-full relative  bg-gradient-to-b from-[#35506F] to-[#243245]">
      <NavBar
        scrollToAbout={scrollToAbout}
        scrollToActivities={scrollToActivities}
        scrollToArticles={scrollToArticles}
        scrollToQuran={scrollToQuran}
      />
      <div className="flex flex-col items-center  gap-6 pt-10 md:pt-16 pb-20 relative  z-10">
        <div>
          <img src={basmalaMobile} alt="basmala" className="block md:hidden" />
          <img
            src={basmaladesktop}
            alt="basmala"
            className="md:block hidden"
            width={300}
          />
        </div>
        <div>
          <img src={ayaMobile} alt="aya" className="block md:hidden" />
          <img
            src={ayadesktop}
            alt="aya"
            className="md:block hidden"
            width={600}
          />
        </div>
      </div>
      <div className="absolute  bottom-0 w-full  flex items-center justify-center">
        <img
          src={logoBg}
          alt="background"
          className="w-5/6 md:w-2/4 lg:w-2/6 opacity-25"
        />
      </div>
    </section>
  );
};

export default HeroSection;
