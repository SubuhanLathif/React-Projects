<b>Weather Application</b>

<b>Decription</b>

A React-based weather application that fetches and displays weather details for a user-specified city or the user's current location using the OpenWeatherMap API.

<b>Features</b>

1) Fetch weather data for any city.
2) Display weather details including temperature, description, humidity, and wind speed.
3) Show weather icons based on current weather conditions.
4) Automatically fetch weather details for the user's current location upon initial load (with permission).
5) Update the search input with the name of the current location.
6) Handle errors and loading states gracefully.

<b>Project Structure</b>

   1) App.jsx : All the codes are written in App.jsx (You may use diffrent components)<br/>
      a) State variables for weather data, loading status, and error handling.<br/>
      b) Functions to fetch weather data based on city name or current location.<br/>
      c) useEffect to fetch weather data on initial load.<br/>
      d) Form handling for city search.<br/>
      e) Inside App.jsx, I have created <WeatherDetails/> component. To display weather details. It receives props for weather data and 
         renders the information accordingly.

   2) src/assets/animated-icons/ (all animated weather icons here)


  
<b>How to Use</b>

To run the Weather API project locally, follow these steps :

1) Clone the repository to your local machine or download the code.
2) Navigate to the project directory.
3) Install dependencies using npm install or yarn install.
4) Start the development server using npm run dev or yarn dev.
5) Open your browser and visit the specified local server address to view the application.
6) Explore the Weather Details, Get Current Location Weather Details, and search whatever city you want.

<b>Note : </b> Use Your Own API Key, Don't use Mine, bcoz its expired...

<b>Technologies Used : </b> React.js, OpenWeatherMap API, HTML/CSS.

<b>Contributor : </b> <a href="https://subuhanbca.netlify.app/" target="_blank">Subuhan Lathif </a>

<b>License : </b> This project is licensed under the MIT License.

<b>Acknowledgements</b>

1) Weather data provided by <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap.</a> <br/>
2) Weather Animated Icon provided by <a href="https://www.amcharts.com/free-animated-svg-weather-icons/" target="_blank">Amcharts</a>
