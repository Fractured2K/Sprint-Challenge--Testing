const express = require('express');

const server = express();
const db = [];

server.use(express.json());

server.listen(5000, () =>
	console.log('Server is now up and running at http://localhost:5000')
);

module.exports = server;
