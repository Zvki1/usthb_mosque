import "./App.css";
import AboutUs from "./components/AboutUs/Index";
import Articles from "./components/Articles/Index";
import HeroSection from "./components/HeroSection/HeroSection";
import PrayerTime from "./components/PrayerTime/index"
import Quran from "./components/Quran/Index";
import Activities from "./components/activities/Index";
function App() {
  return (
    <div className="w-screen  relative">
      <HeroSection />
      <PrayerTime />
      <AboutUs />
      <Activities />
      <Articles/>
      <Quran />
    </div>
  );
}

export default App;
