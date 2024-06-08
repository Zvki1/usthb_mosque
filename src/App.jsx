import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import PrayerTime from "./components/PrayerTime/index"
function App() {
  return (
    <div className="w-screen  relative">
      <HeroSection />
      <PrayerTime />
    </div>
  );
}

export default App;
