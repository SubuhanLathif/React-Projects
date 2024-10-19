<b>Fetch Records From MongoDB Atlas - Using React & Node & MongoDB</b>

<b>Decription</b>

This project fetches a list of Game of Thrones characters from the default MongoDB Atlas "sample_mflix" database, specifically from the "users" collection, and displays it in a React application using MUI DataTable. The table is equipped with built-in features like search, filter, pagination, and export options (Excel and PDF). This project highlights how to integrate MongoDB Atlas with a React frontend and demonstrates the capabilities of MUI DataTables for interactive data presentations.

<b>Features</b>

1) Fetching data from MongoDB Atlas
2) Displaying data in MUI DataTable
3) Export to Excel and PDF
4) Clean and responsive UI

<b>Project Structure</b>
 
1) clients/src/components
   a) MuiDateTable.jsx <br/>

2) server folder <br/>
   a) server.js - all the backend methods are written here. Initialize the express application and mongodb connection.<br/>
      Don't forgot to replace your connection string.
       
<b>How to Use</b>

To run the this project locally, follow these steps :

Note : Create an free account in mongodb atlas. 

1) Clone the repository to your local machine or download the code.
2) There are Two folders a)client (frontend)  b)server (backend)
3) Navigate to the client directory Install dependencies using npm install or yarn install and then run the application using npm run dev or yarn dev.
4) Navigate to the server directory Install dependencies using npm install or yarn install.
5) In server.js connect mongodb using atlas connection string
6) Start the development server using node server.js .
7) After starting both the backend and frontend servers, the app will fetch data from the MongoDB Atlas database and display it in the MUI DataTable. You can search, filter, sort, paginate, and export the data as needed.

<b>Technologies Used : </b> Reactjs, MUI DataTables, Nodejs, MongoDB Atlas.

<b>Contributor : </b> <a href="https://subuhanbca.netlify.app/" target="_blank">Subuhan Lathif </a>

<b>License : </b> This project is licensed under the MIT License.

