/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";
import MobileOnePrayer from "./MobileOnePrayer";
import OnePrayer from "./OnePrayer";
import axios from "axios";
import OnePrayerskeleton from "./OnePrayerskeleton";
import MobilePrayerskeleton from "./MobilePrayerskeleton";

const index = () => {
  const [prayerTime, setPrayerTime] = useState([]);
  const [nextPrayerName, setNextPrayerName] = useState("");
  const [isFetching, setisFetching] = useState(false);
  useEffect(() => {
    setisFetching(true);
    axios
      .get(
        "http://api.aladhan.com/v1/timingsByCity?city=Oran&country=Algeria&method=19"
      )
      .then((response) => {
        // i want to set put the Fajr Dhuhr Asr Maghrib Isha in the array by this order
        let data = response.data.data.timings;
        let arr = [];
        arr.push({ time: data.Fajr, name: "الفجر" });
        arr.push({ time: data.Dhuhr, name: "الظهر" });
        arr.push({ time: data.Asr, name: "العصر" });
        arr.push({ time: data.Maghrib, name: "المغرب" });
        arr.push({ time: data.Isha, name: "العشاء" });
        setPrayerTime(arr);
        // i want to select the name of the next prayer depending on the current time
        let date = new Date();
        let currentHour = date.getHours();
        let currentMinute = date.getMinutes();
        let currentTime = currentHour + ":" + currentMinute;
        let nextPrayer = "";
        for (let i = 0; i < arr.length; i++) {
          if (currentTime < arr[i].time) {
            nextPrayer = arr[i].name;
            break;
          }
        }
        if (!nextPrayer) {
          setNextPrayerName("الفجر");
        } else {
          setNextPrayerName(nextPrayer);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisFetching(false);
      });
  }, []);

  return (
    <div>
      <div className="hidden md:flex  items-center justify-center gap-10 lg:gap-16 relative z-20 bottom-16 inset-x-0 overflow-x-hidden pb-5 px-4">
        {isFetching ? (
          <>
            <OnePrayerskeleton />
            <OnePrayerskeleton />
            <OnePrayerskeleton />
            <OnePrayerskeleton />
            <OnePrayerskeleton />
          </>
        ) : (
          prayerTime.map((prayer, index) => {
            return (
              <OnePrayer
                key={index}
                isNext={nextPrayerName === prayer.name}
                name={prayer.name}
                time={prayer.time}
              />
            );
          })
        )}
      </div>

      <div className="md:hidden flex  flex-col items-center relative bottom-8 gap-3">
        {isFetching ? (
          <>
          <MobilePrayerskeleton />
          <MobilePrayerskeleton />
          <MobilePrayerskeleton />
          <MobilePrayerskeleton />
          <MobilePrayerskeleton />
          </>
        ):(
          prayerTime.map((prayer, index) => {
            return (
              <MobileOnePrayer
                key={index}
                isNext={nextPrayerName === prayer.name}
                name={prayer.name}
                time={prayer.time}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default index;
