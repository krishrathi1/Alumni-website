require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user');
const alumniRoutes = require('./routes/alumni');
const jobRoutes = require('./routes/job');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/alumni', alumniRoutes); // Alumni routes
app.use('/api/jobs', jobRoutes); // Job routes

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));