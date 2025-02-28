import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/api/test', (req, res) => {
  // Add console.log to help debug
  console.log('Received request to /api/test');
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
