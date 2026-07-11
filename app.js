const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const connectDB = require('./config/db');
const sanitizeInput = require('./middlewares/sanitize');
const helmet = require('helmet');
const hpp = require('hpp'); // HTTP Parameter Pollution protection



// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const healthRoutes = require('./routes/healthRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Load environment variables
require('dotenv').config();

// Initialize Passport
require('./config/passport');

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
// Apply HPP protection to prevent HTTP Parameter Pollution
app.use(hpp());
app.use(sanitizeInput); // Apply XSS sanitization middleware
app.use(helmet()); // Apply Helmet for security headers


// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('/health', healthRoutes);

// Error handling
app.use(errorHandler);

// Connect to MongoDB
connectDB();

module.exports = app;