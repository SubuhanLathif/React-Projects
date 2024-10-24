import {Header} from "./components/Header"
import {HeroBanner} from "./components/HeroBanner"
import {PrayerTimes} from "./components/PrayerTimes"
import {Footer} from "./components/Footer"
import { useEffect, useState } from "react"
function App() {
  
  const [location,setLocation] = useState({
    latitude:null,
    longitude:null,
  });

  const getUserLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log(position.coords.latitude);
          // console.log(position.coords.longitude);
          setLocation ({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
          })
        },
        (error) => {

        // If user denies location, show an alert and use default Chennai location
        if (error.code === error.PERMISSION_DENIED) {
        alert("To find prayer times near you, Please allow location access in your browser.");
        }
         // Set default location to Chennai
         setLocation ({
          latitude: 13.0843,
          longitude: 80.2705,
         })
        }
      )
    }
    else {
      // Browser doesn't support geolocation, use default Chennai
      alert("Geolocation is not supported by this browser.");
      setLocation({
        latitude: 13.0843,
        longitude: 80.2705,
      });
    }
  }

  // useEffect(() => {
  //   getUserLocation();
  // }, []);

  return (
    <>
      <Header/>
      <HeroBanner getUserLocation={getUserLocation} />
      <PrayerTimes latitude={location.latitude} longitude={location.longitude}  getUserLocation={getUserLocation}/>
      <Footer/>
    </>
  )
}

export default App
