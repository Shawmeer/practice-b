const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'my_database'
});

// Test MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

app.get('/', (req, res) => {
  res.send('Hello from the backend with MySQL!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
