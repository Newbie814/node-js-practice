const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  let userName = req.body.username || 'unknown';

  res.send(
    `<h1>Hello ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button</form>`
  );
});

app.listen(3000);
