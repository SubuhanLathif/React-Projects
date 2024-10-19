const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //middleware
const dotenv = require('dotenv'); // dotenv to load environment variables from a .env file
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// Initialize the express application
const app = express();
const port = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000

// Middleware to parse JSON requests and allow CORS for cross-origin communication
app.use(cors());
app.use(express.json()); //parsing JSON bodies

// Connect to MongoDB using the connection string from .env file
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then (() => {
console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})

// Routes middleware: anything hitting '/api/users' will use userRoutes
app.use('/api/users', userRoutes);


// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });