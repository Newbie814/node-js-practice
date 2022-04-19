const http = require('http');

const server = http.createServer((req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);
    let userName = 'unknown';
    if (body) {
      userName = body.split('=')[1];
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `<h1>Hello ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button</form>`
    );
    console.log(userName);
    res.end();
  });
});

server.listen(3000);
