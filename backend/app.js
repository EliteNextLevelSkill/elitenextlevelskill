const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve static files from the frontendpublic directory
app.use(express.static(path.join(__dirname, '../frontendpublic')));

// API endpoint
app.get('/api/hello', (req, res) => {
  res.send('Hello from the API!');
});

// For any other requests, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontendpublic/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
