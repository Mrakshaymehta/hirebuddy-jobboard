// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const jobRoutes = require('./routes/jobRoutes');
const uploadRoute = require('./routes/uploadRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/jobs', jobRoutes);
app.use('/api/upload', uploadRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });