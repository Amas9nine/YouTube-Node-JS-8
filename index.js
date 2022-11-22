const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (request.url == '/') {
    fs.createReadStream('./templates/index.html').pipe(response);

  }

  else if (request.url == '/about') {
    fs.createReadStream('./templates/aboutFile.html').pipe(response);
  }

  else {
    fs.createReadStream('./templates/errorFile.html').pipe(response);
  }
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`${HOST}:${PORT}`);
})