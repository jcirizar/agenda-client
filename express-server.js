// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/agenda-client')));


// Return Index for everything else.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/agenda-client/index.html'));
});

// Get port
const port = process.env.PORT || '9000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Listen on port.
server.listen(port, () => console.log(`API running on localhost:${port}`));
