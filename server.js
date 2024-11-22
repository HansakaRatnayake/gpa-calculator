const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT;



// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, 'client')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});