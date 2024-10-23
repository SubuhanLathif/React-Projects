import React, { useEffect, useState } from "react";
import axios from 'axios';
import CalenderIcon from '../assets/Calendar.svg';
import ClockIcon from '../assets/Clock.svg';
import LocationIcon from '../assets/location.svg'

export const PrayerTimes = ({ latitude, longitude, getUserLocation}) => {
const [prayerTimes,setPrayerTimes] = useState(null);
const [todayDate,setTodayDate] = useState("");
const [hijriDateShort, setHijriDateShort] = useState(null);
const [hijriDateLong, setHijriDateLong] = useState(null);
const [timeZone,setTimeZone] = useState(null);
const [liveTime, setLiveTime] = useState(new Date());
const [error,setError] = useState("");

// Function to clean the time by removing the timezone offset (e.g., "(+0330)")
const cleanUpTime = (timeStr) => {
  return timeStr.replace(/\s*\(.*?\)\s*/, ""); // Removes "(+XXXX)" part
};

// Function to convert 24-hour time to 12-hour format
const convertTo12Hour = (timeStr) => {
  const [hours, minutes] = timeStr.split(":");
  const period = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
  return `${adjustedHours}:${minutes} ${period}`;
};

// Combine cleanUpTime and convertTo12Hour
const cleanAndConvertTo12Hour = (timeStr) => {
  const cleanedTime = cleanUpTime(timeStr); // First clean the time
  const timeOnly = cleanedTime.split(" ")[0]; // Get the time part only (remove AM/PM)
  return convertTo12Hour(timeOnly); // Convert to 12-hour format
};

const fetchPrayerTimes = async (lat, long) => {
    try {
        // Format the date as long eg(01 January, 2024)
        const date = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        const apiUrl = `https://api.aladhan.com/v1/calendar/${currentYear}/${currentMonth}?latitude=${lat}&longitude=${long}`;

        const response = await axios.get(apiUrl);
        console.log(response.data);

        const todayPrayerData = response.data.data[currentDay - 1];
        const todayPrayerTimes = todayPrayerData.timings;

        const hijriDay = todayPrayerData.date.hijri.day; 
        const hijriMonth = todayPrayerData.date.hijri.month.en; 
        const hijriYear = todayPrayerData.date.hijri.year; 
        const fullHijriDate1 = todayPrayerData.date.hijri.date;
        const fullHijriDate2 = `${hijriDay} ${hijriMonth}, ${hijriYear}`;
        const timeZone = todayPrayerData.meta.timezone;

        setPrayerTimes(todayPrayerTimes);
        setTodayDate(formattedDate);
        setHijriDateShort(fullHijriDate1);
        setHijriDateLong(fullHijriDate2);
        setTimeZone(timeZone);
        // console.log(todayDate);
        
    } catch (error) {
        setError('Unable to fetch prayer times. Please try again later.');
    }
};

useEffect(() => {
  if(latitude && longitude)  {
  fetchPrayerTimes(latitude, longitude);
  }
  else {
  // fetchPrayerTimes(32.4279, 53.6880); IRAN
  fetchPrayerTimes(13.0843, 80.2705); //IN
  }

  //live time render time every 1sec
  const intervalId = setInterval(() => {
  setLiveTime(new Date());
  }, 1000); // Update every 1 second
  return () => {
  clearInterval(intervalId);
  };

},[latitude, longitude])

if(error) return <p>{error}</p>

return (
<>

    {prayerTimes ? (
    <>
      <div className="px-lg-5 px-md-4 px-3 mt-3 mb-1">
        <div className="date-wrapper d-flex justify-content-between align-items-center container p-0">
            <div className="left d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2" title="English">
            <img src={CalenderIcon} alt="calender-icon" className="small-icon1" width={23}/>
            <small className="mb-0">{todayDate}</small>
            </div>
            <div className="d-flex align-items-center gap-2" title="Hijri">
            <img src={CalenderIcon} alt="clock-icon" className="small-icon2" width={23}/>
            <small className="mb-0" style={{marginTop:'0.1rem',}}>{hijriDateLong}</small>
            </div> 
            </div>
            <div className="right d-flex flex-column gap-3 text-end">
            {/* <button className='btn btn-sm px-4 py-2 rounded-pill'>Get Prayer Time</button> */}
            <div className="d-flex align-items-center gap-2">
            <img src={ClockIcon} alt="calender-icon" className="small-icon1" width={22}/>
            <small className="mb-0">{liveTime.toLocaleTimeString()}</small>
            </div>
            <div className="d-flex align-items-center gap-2" title="TimeZone">
            <img src={LocationIcon} alt="clock-icon" className="small-icon2" width={23}/>
            <small className="mb-0">{timeZone}</small>
            </div> 
            </div>
        </div>
      </div>

        <section className="p-lg-5 p-md-4 p-3 prayertimes-section">

          <div className="prayertimes container p-0 mt-md-0 mt-3">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 flex-nowrap pb-lg-5 pb-4">
            <div className="col">
            <div>
            <div className="px-lg-4 px-3 py-lg-5 py-4 text-end d-flex flex-column justify-content-end h-100 content-box">
            <small>Sunrise</small>
            <p className="mb-0 mt-2 time">{cleanAndConvertTo12Hour (prayerTimes.Sunrise)}</p>
            </div>
            </div>
            </div>

            <div className="col">
            <div style={{height:'100%'}}>
            <div className="px-lg-4 px-3 py-lg-5 py-4 text-end d-flex flex-column justify-content-end content-box h-100">
            <small>Hijri</small>
            <p className="mb-0 mt-2 time">{hijriDateShort}</p>
            </div>
            </div>
            </div>
            
            <div className="col">
            <div>
            <div className="px-lg-4 px-3 py-lg-5 py-4 text-end d-flex flex-column justify-content-end h-100 content-box">
            <small>Sunset</small>
            <p className="mb-0 mt-2 time">{cleanAndConvertTo12Hour (prayerTimes.Sunset)}</p>
            </div>
            </div>
            </div>
            </div>
          </div>

          <div className="five-prayer-time container p-0">
            <h3 className='mb-3 fw-bold'>Prayer Times</h3>
            <p className='mb-md-5 mb-4'>Hold on to your Salah, if you lose that, you will lose everything else - Words of Umar (RA)</p>
            

            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-4">

            <div className="col">
            <div className="h-100">
            <div className="px-lg-4 px-3 py-5 text-end d-flex flex-column justify-content-end h-100 content-box">
            <small>Fajr</small>
            <p className="mb-0 mt-2 time">{cleanAndConvertTo12Hour (prayerTimes.Fajr)}</p>
            </div>
            </div>
            </div>

            <div className="col">
            <div className="h-100">
            <div className="px-lg-4 px-3 py-5 text-end d-flex flex-column justify-content-end h-100 content-box">
            <small>Dhuhr</small>
            <p className="mb-0 mt-2 time">{cleanAndConvertTo12Hour (prayerTimes.Dhuhr)}</p>
            </div>
            </div>
            </div>

            <div className="col">
            <div className="h-100">
            <div className="px-lg-4 px-3 py-5 text-end d-flex flex-column justify-content-end h-100 content-box">
            <small>Asr</small>
            <p className="mb-0 mt-2 time">{cleanAndConvertTo12Hour (prayerTimes.Asr)}</p>
            </div>
            </div>
            </div>

            <div className="col">
            <div className="h-100">
            <div className="px-lg-4 px-3 py-5 text-end d-flex flex-column justify-content-end h-100 content-box">
            <small>Maghrib</small>
            <p className="mb-0 mt-2 time">{cleanAndConvertTo12Hour (prayerTimes.Maghrib)}</p>
            </div>
            </div>
            </div>

            <div className="col">
            <div className="h-100">
            <div className="px-lg-4 px-3 py-5 text-end d-flex flex-column justify-content-end h-100 content-box">
            <small>Isha</small>
            <p className="mb-0 mt-2 time">{cleanAndConvertTo12Hour (prayerTimes.Isha)}</p>
            </div>
            </div>
            </div>

            <div className="col">
            <div className="h-100">
            <div className="px-lg-4 px-3 py-5 d-flex flex-column justify-content-end h-100 content-box">
            <small className="text-white">Get Prayer Time, Near by your's</small>
            <button className='btn btn-sm px-4 py-2 rounded-pill mt-3' onClick={getUserLocation}>Get Prayer Time</button>
            </div>
            </div>
            </div>
            </div>
          </div>

        </section>
        </>
      ) : 
      (
        <section className="p-lg-5 p-md-4 p-3">
        <p className="text-center mb-0"style={{letterSpacing:'1px'}}>Loading...</p>
        </section>
      )
    }
    </>
    )  
}
