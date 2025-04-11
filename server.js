import http from 'http';

const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>This is Dmytryi Bondar site</h1>');
};

http.createServer(requestHandler).listen(80, () => {
  console.log('Server running on port 80');
});
