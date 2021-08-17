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

const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.debug('Matt...your server is listening on port ' + PORT);


