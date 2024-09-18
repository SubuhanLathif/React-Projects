<b>Login - Register System Using React & Firebase</b>

<b>Decription</b>

This application is a simple login and registration system built using React and Firebase. Users can create an account and log in, and after a successful login, they are directed to the Home Page. On the Home Page, the user's email address is displayed, and they have the option to update their profile information. Additionally, a "Forgot Password" feature is available to help users reset their passwords.

<b>Features</b>

1) User Authentication with Firebase :  Users can create an account using email and password. Secure login with Firebase Authentication.
2) Real-Time User Authentication State : Tracks the current user's login status and displays the relevant information or redirects accordingly.
3) Private Routes : Protected routes using PrivateRoutes to restrict access to certain pages unless the user is authenticated. Users are redirected to the login page if they are not authenticated.
4) An Easy Error Handling.

<b>Project Structure</b>
 
1) components <br/>
   a) App.jsx <br/>
   b) Dashboard.jsx <br/>
   c) ForgetPassword.jsx <br/>
   d) Login.jsx <br/>
   e) Register.jsx <br/>
   f) UpdateProfile.jsx <br/>
   g) PrivateRoutes.jsx <br/>

2) context <br/>
   a) AuthContext.jsx - Register,Login,Logout,ForgetPassword,UpdateProfile all this methods are written here.

3) src -> firebase.js - Initialize Firebase, the authentication module.

<b>How to Use</b>

To run the Login - Register | Using React & Firebase project locally, follow these steps :

1) Clone the repository to your local machine.
2) Navigate to the project directory Install dependencies using npm install or yarn install.
3) Create .env file in root dir. In .env file, Replace your FIREBASE_API_KEY | FIREBASE_PROJECT_ID and Others.
4) Start the development server using npm run dev or yarn dev.
5) Open your browser and visit the specified local server address to view the application.

<b>Technologies Used : </b> React.js, Bootstrap, HTML/CSS, Firebase, React-Router-Dom.

<b>Contributor : </b> <a href="https://subuhanbca.netlify.app/" target="_blank">Subuhan Lathif </a>

<b>License : </b> This project is licensed under the MIT License.

<b>Tutorial Video (Language English) : </b> <a href="https://youtu.be/PKwu15ldZ7k?si=DJDgZywYoMvLLT9J" target="_blank">https://youtu.be/PKwu15ldZ7k?si=DJDgZywYoMvLLT9J</a>

