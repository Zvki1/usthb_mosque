import { useRef } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/Index";
import Articles from "./components/Articles/Index";
import HeroSection from "./components/HeroSection/HeroSection";
import PrayerTime from "./components/PrayerTime/index";
import Quran from "./components/Quran/Index";
import Activities from "./components/activities/Index";
function App() {
  const aboutSection = useRef(null);
  const activitiesSection = useRef(null);
  const articlesSection = useRef(null);
  const quranSection = useRef(null);
  const scrollToAbout = () => {
    aboutSection.current.scrollIntoView({ behavior: "smooth" });
    console.log("scrolling");
    console.log(aboutSection.current);
  }
  const scrollToActivities = () => {
    activitiesSection.current.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToArticles = () => {
    articlesSection.current.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToQuran = () => {
    quranSection.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="w-screen  relative">
      <HeroSection 
        scrollToAbout={scrollToAbout}
        scrollToActivities={scrollToActivities}
        scrollToArticles={scrollToArticles}
        scrollToQuran={scrollToQuran}
      />
      <PrayerTime />
      <AboutUs ref={aboutSection} />
      <Activities ref={activitiesSection} />
      <Articles ref={articlesSection}/>
      <Quran ref={quranSection}/>
    </div>
  );
}

export default App;
