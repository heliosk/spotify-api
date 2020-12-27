import http from 'http';

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write('Running Spotify API');
	res.end();
}).listen(8888);
