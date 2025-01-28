import { useRef } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/Index";
import Articles from "./components/Articles/Index";
import HeroSection from "./components/HeroSection/HeroSection";
import PrayerTime from "./components/PrayerTime/index";
import Quran from "./components/Quran/Index";
import Activities from "./components/activities/Index";
import ContactUs from "./components/ContactUs/ContactUs";
import  LostItems from  "./components/lostItems/Index";
function App() {
  const aboutSection = useRef(null);
  const activitiesSection = useRef(null);
  const articlesSection = useRef(null);
  const quranSection = useRef(null);
  const contactUsSection = useRef(null);
  const lostItemsSection = useRef(null);
  const scrollToAbout = () => {
    aboutSection.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToActivities = () => {
    activitiesSection.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToArticles = () => {
    articlesSection.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToQuran = () => {
    quranSection.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContactUs = () => {
    contactUsSection.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToLostItems = () => {
    lostItemsSection.current.scrollIntoView({ behavior: "smooth" });
  }
    

  return (
    <div className="w-screen relative ">
      <HeroSection
        scrollToAbout={scrollToAbout}
        scrollToActivities={scrollToActivities}
        scrollToArticles={scrollToArticles}
        scrollToQuran={scrollToQuran}
        scrollToContactUs={scrollToContactUs}
        scrollToLostItems={scrollToLostItems}
      />
      <PrayerTime />
      <AboutUs ref={aboutSection} />
      <Activities ref={activitiesSection} />
      <Articles ref={articlesSection} />
      <LostItems ref={lostItemsSection} />
      <Quran ref={quranSection} />
      <ContactUs ref={contactUsSection} />
    </div>
  );
}

export default App;
