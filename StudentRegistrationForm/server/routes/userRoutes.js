const express = require('express');
const User = require('../models/user'); 

const router = express.Router(); // Create new rounter

// POST route to register a new user
router.post('/register',async(req,res) => {
  // Destructure the data coming from the request body
  const { fullName, emailAddress, phoneNo, dob, gender, address } = req.body;
  
  try{
    const newUser = new User({
        fullName,emailAddress,phoneNo,dob,gender,address
    });
    // Save the new user to the MongoDB database
    await newUser.save();
    // Send back the new user data with a success status
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    // Handle duplicate email error (MongoDB error code 11000 is for duplicate keys)
    if (error.code === 11000 && error.keyValue && error.keyValue.emailAddress) {
      res.status(400).json({ error: 'This email is already registered' });
    } else {
      // If other errors, return generic error response
      res.status(500).json({ error: 'Error registering user', details: error.message });
    }
  }
});

// Fetch all users
router.get('/all-users',async(req,res) => {
  try {
    const allUsers = await User.find() // Fetch all users from the collection
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users', details: error.message });
  }
})

module.exports = router;