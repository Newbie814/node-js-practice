const express = require('express');

const locationRoutes = require('./routes/location');
require('dotenv').config();

// process.env
let mongoUri = process.env.MONGO_URI;

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(locationRoutes);

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   let userName = req.body.username || 'unknown';

//   res.render('index', {
//     user: userName,
//   });
// });

app.listen(3000);
