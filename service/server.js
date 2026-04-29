'use strict';

const express = require('express');

// Constants
const PORT = 80
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("Hello World 👋");
});

// Health Check
app.get('/health-check', (req, res) => {
  res.send('Server is healthy');
});

if (Math.random() < 0.5) {
  throw new Error('Simulated startup failure');
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

console.log(`Hello from the app 📦`);
