const express = require ('express');
const mongoose = require('mongoose')
const cors = require('cors');

// Initialize the express application
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('replace-your-mongodb-atlas-connection-string',   
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define the User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    // Add other fields as needed
},{ collection: 'users' });  // Specify the collection name explicitly

const User = mongoose.model('User', userSchema);

// Fetch all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
