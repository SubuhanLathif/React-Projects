import React, { useEffect, useState } from 'react';
import './App.css';

//below i use all weather animated icons
//clear-sky
import clearD from './assets/animated-icons/day.svg';
import clearN from './assets/animated-icons/night.svg';
//few-clouds
import fewCloudD from './assets/animated-icons/cloudy-day-3.svg';
import fewCloudN from './assets/animated-icons/cloudy-night-3.svg';
//scatter & broken clouds
import cloudyDN from './assets/animated-icons/cloudy.svg'; 
//shower-rain
import rainD from './assets/animated-icons/rainy-2.svg';
import rainN from './assets/animated-icons/rainy-5.svg';
//heavy-rain
import heavyRainDN from './assets/animated-icons/rainy-6.svg';
//thunderstrom
import thunderDN from './assets/animated-icons/thunder.svg';
//snow
import snowD from './assets/animated-icons/snowy-3.svg';
import snowN from './assets/animated-icons/snowy-6.svg';

// error msg imgs
import loadingImg from './assets/animated-icons/loading2.svg';
import errorImg from './assets/animated-icons/error.svg';
import questionImg from './assets/animated-icons/question.svg';

// WeatherDetails Component
const WeatherDetails = ({ icon, temp, desc, city, country, lat, long, hum, wind }) => (
  <div className="weatherdetail">
    <div className="text-center image">
      <img src={icon} alt="weather icon" width="100" />
    </div>
    <h2 className='fs-1 fw-bold text-center temp mb-0'>{temp}°C</h2>
    <p className='text-center text-muted my-1 desc'>{desc}</p>
    <h5 className='fw-bold text-center text-uppercase m-0 cityname'>{city}</h5>
    <h6 className='fw-bold text-center text-uppercase m-0 mt-1 countryname'>{country}</h6>
    <div className="row latlong text-center">
      <div className="col"><small>Lat<br />{lat}</small></div>
      <div className="col"><small>Long<br />{long}</small></div>
    </div>

    <div className='mt-3 row footer'>
      <div className="col text-center">
        <div>
        <i className="bi bi-water fs-2"></i><p className='m-0 fw-bold'>{hum}%</p><small>Humidity</small>
        </div>
        </div>

      <div className="col text-center">
      <div>
      <i className="bi bi-wind fs-2"></i><p className='m-0 fw-bold'>{wind} km/h</p><small>Wind Speed</small></div>
    </div>

    </div>

  </div>
);

// Main App Component
function App() {
  const apiKey = "a9c08a794c05c15d2f210c7feae2f334"; //you can use your own api key don't use mine
  const [text, setText] = useState("Chennai"); //default city state
  const [icon, setIcon] = useState(clearD); //deafult weather img state
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const currentYear = new Date().getFullYear();

  //weather images assigned
  const weatherIcons = {
    "01d": clearD, "01n": clearN, "02d": fewCloudD, "02n": fewCloudN,
    "03d": cloudyDN, "03n": cloudyDN, "04d": cloudyDN, "04n": cloudyDN,
    "09d": rainD, "09n": rainN, "10d": heavyRainDN, "10n": heavyRainDN,
    "11d": thunderDN, "11n": thunderDN, "13d": snowD, "13n": snowN,
    "50d": cloudyDN, "50n": cloudyDN,
  };

  const fetchWeather = async (apiUrl) => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (data.cod === "404") {
        // console.error("City Not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setDesc(data.weather[0].description);
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLong(data.coord.lon);

      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIcons[weatherIconCode] || questionImg);
      setText(data.name); // Update the form input with the current city name
      setCityNotFound(false);
    } catch (error) {
      console.error("Error Occurred:", error.message);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const search = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`;
    fetchWeather(apiUrl);
  };

  //getLocationWeather get current location of user & show the weather details
  const getLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=Metric`;
          fetchWeather(apiUrl);
        },
        (error) => {
          console.error("Error getting location:", error.message);
          search(); // Fall back to Chennai weather if location access is denied or error occurs
        }
      );
    } else {
      search(); // Fall back to Chennai weather if Geolocation is not supported
    }
  };

  const handleCity = (e) => setText(e.target.value);

  useEffect(() => {
    getLocationWeather();
  }, []);

  return (
    <>
      <section>
        <div className="container p-0">
          <div className="bg-lights p-3 p-md-4 shadow rounded">
            <form onSubmit={(e) => {
              e.preventDefault();
              search();
            }}>
              <div className="input-group mb-3">
                <input type="search" className="form-control" placeholder="Search City" onChange={handleCity} value={text} autoComplete="off" required />
                <button type="submit" className="btn btn-success"><i className="bi bi-search"></i></button>
              </div>
            </form>
            {loading && <div className='d-flex justify-content-center text-center align-items-center h-75'><div><img src={loadingImg} alt="loading" className="loading-img" /><h5 className='loading-msg mt-2 fs-6'>Loading...</h5></div></div>}
            {error && <div className='d-flex justify-content-center text-center align-items-center h-75'><div><img src={errorImg} alt="error" className="loading-img" /><h5 className='error-msg mt-2 text-wrap fs-6'>{error}</h5></div></div>}
            {cityNotFound && <div className='d-flex justify-content-center text-center align-items-center h-75'><div><img src={questionImg} alt="city not found" className="loading-img" /><h5 className='city-not-found mt-2 fs-6 text-wrap'>Oops!!! City Not Found</h5></div></div>}
            {!cityNotFound && !loading && !error && <WeatherDetails icon={icon} temp={temp} desc={desc} city={city} country={country} lat={lat} long={long} hum={humidity} wind={wind} />}
          </div>
        </div>
      </section>
      <footer>
        <div className="position-absolute bottom-0 bg-light px-3 rounded-top">
          <a href="https://subuhanbca.netlify.app" target="_blank" rel="noopener noreferrer"><span className="text-grey" style={{ fontSize: "0.8rem" }}>© {currentYear} Subuhan BCA</span></a>
        </div>
        <div className="position-absolute bottom-0 bg-light px-3 rounded-top">
          <a href="#" onClick={getLocationWeather}><span className="text-grey" style={{ fontSize: "0.8rem" }}>Get Current Location WeatherDetails</span></a>
        </div>
      </footer>
    </>
  );
}

export default App;