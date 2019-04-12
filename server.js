const express = require('express');

const server = express();
const db = [];

server.use(express.json());

server.get('/games', async (req, res) => {
	return await res.status(200).json(db);
});

server.get('');

server.listen(5000, () =>
	console.log('Server is now up and running at http://localhost:5000')
);

module.exports = server;
