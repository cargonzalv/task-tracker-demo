const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Express middleware for parsing JSON data 
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});