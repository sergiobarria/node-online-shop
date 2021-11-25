const path = require('path');

const express = require('express');
const colors = require('colors');

// Import database connection
const db = require('./db/database');

// Import Routes
const authRoutes = require('./routes/authRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(authRoutes);

// Connect to database && start server
// const PORT = 3000;

db.connectToDatabase()
  .then(() => {
    app.listen(3000, console.log(`App listening on PORT 3000`.green.bold));
    console.log(`MongoDB Connected`.cyan.underline.bold);
  })
  .catch((err) => {
    console.error(`Failed to connect to Database`.red);
    console.error(err);
  });
