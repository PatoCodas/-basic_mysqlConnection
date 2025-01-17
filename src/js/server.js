// Import the express module, which is a web framework for Node.js
const express = require('express');

// Import the mysql2 module, which is a MySQL client for Node.js
const mysql = require('mysql2');

// Import the body-parser module, which is used to parse incoming request bodies
const bodyParser = require('body-parser');

// Import the cors module, which is used to enable Cross-Origin Resource Sharing
const cors = require('cors');

// Create an instance of an Express application
const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use cors middleware to enable CORS
app.use(cors());

// Create a MySQL database connection with the specified configuration
const db = mysql.createConnection({
    host: '*', // The hostname of the database you are connecting to
    user: '*', // The MySQL user to authenticate as
    password: '*', // The password of that MySQL user
    database: '*', // Name of the database to use for this connection
    port: 3000 // The port number to connect to the MySQL server
});

// Connect to the MySQL database
db.connect(err => {
    if (err) throw err; // If there is an error, throw it
    console.log('*'); // Log a success message
});

// Start the Express server on port 3000 and log a message to the console
app.listen(3000, () => console.log('*'));