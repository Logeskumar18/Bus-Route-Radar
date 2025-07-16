import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import busRouter from './routes/busRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Better fallback if .env is missing

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'https://bus-route-s3u0.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json()); // For parsing JSON request bodies
app.use(express.urlencoded({ extended: true })); // For parsing form data

// Default route
app.get('/', (req, res) => {
  res.send(`<h1>🚍 Bus Route API Running on Port ${port}</h1>`);
});

// API routes
app.use('/api/bus', busRouter);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
