const express = require('express');
const cors = require('cors');



const app = express();
app.use(cors({
  origin: ['http://localhost:5173','http://localhost:5174'] ,// Your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow the headers you want to send
  exposedHeaders: ['jwt_token'] // Expose the custom headers you want to access on the frontend
}));
app.use(express.json());


module.exports = app;