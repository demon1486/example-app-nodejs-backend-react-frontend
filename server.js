import http from 'http';

const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>This site created by Iryna Bondar</h1>');
};

http.createServer(requestHandler).listen(80, () => {
  console.log('Server running on port 80');
});
