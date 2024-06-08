import "./App.css";
import AboutUs from "./components/AboutUs/Index";
import HeroSection from "./components/HeroSection/HeroSection";
import PrayerTime from "./components/PrayerTime/index"
import Activities from "./components/activities/Index";
function App() {
  return (
    <div className="w-screen  relative">
      <HeroSection />
      <PrayerTime />
      <AboutUs />
      <Activities />
    </div>
  );
}

export default App;
