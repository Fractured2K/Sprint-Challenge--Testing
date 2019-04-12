const express = require('express');

const server = express();
const db = [];

server.use(express.json());

server.get('/games', (req, res) => {
	return res.status(200).json(db);
});

server.post('/games', async (req, res) => {
	let { title, genre } = req.body;

	if (!title || !genre)
		return res.status(422).json({
			message: 'Sorry, but you must enter a title and genre'
		});

	await db.push(req.body);

	return res.status(200).json(req.body);
});

server.listen(5000, () =>
	console.log('Server is now up and running at http://localhost:5000')
);

module.exports = server;
