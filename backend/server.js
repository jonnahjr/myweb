const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nexyovi';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic Routes
app.get('/', (req, res) => {
  res.json({ message: 'Nexyovi Technologies API is live' });
});

// Import Routes (To be created)
const contactRoutes = require('./routes/contact');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

app.use('/api/contact', contactRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
