
const http = require('http'); // Built-in module for creating HTTP servers
const mysql = require('mysql'); // MySQL library for database interaction
require('.env').config();
const express = require('express')
const app = express()




// Question 1 goes here


// Question 2 goes here


// Question 3 goes here


// Question 4 goes here


// Connect to the database
connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack); // Log error if connection fails
      return;
    }
    console.log('Connected as id ' + connection.threadId); // Log success message with connection ID
  });
  
  // Create an HTTP server
  const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set response status code to OK
    res.setHeader('Content-Type', 'text/plain'); // Set response content type
  
    // Test query to check connection
    connection.query('SELECT * FROM your_table LIMIT 1', (error, results) => {
      if (error) {
        res.end('Error querying database'); // Send error message if query fails
        return;
      }
  
      res.end(`Database query successful: ${JSON.stringify(results)}`); // Send query results as response
    });
  });

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})