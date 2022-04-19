const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  let userName = req.body.username || 'unknown';

  res.render('index', {
    user: userName,
  });
});

app.listen(3000);
