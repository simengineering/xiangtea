const http = require('https');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("xiangtea"));
app.get('/', function(req,res) {
		res.sendFile(path.join('xiangtea/index.html'));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);

