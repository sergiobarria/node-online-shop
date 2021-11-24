const path = require('path');

const express = require('express');
const colors = require('colors');

// Import Routes
const authRoutes = require('./routes/authRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(authRoutes);

const PORT = 3000;
app.listen(PORT, console.log(`App listening on PORT ${PORT}`.blue.bold));
