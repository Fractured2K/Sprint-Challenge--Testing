const express = require('express');

const server = express();
const db = [];
let id = 0;

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

	await id++;

	let game = {
		id,
		...req.body
	};

	await db.push(game);
	res.status(200).json(game);
});

server.get('/games/:id', async (req, res) => {
	const game = await db.filter(game => game.id == req.params.id);

	if (!game.length)
		return res.status(404).json({
			message: 'Sorry, but that game does not exist'
		});

	res.status(200).json(game);
});

server.listen(5000, () =>
	console.log('Server is now up and running at http://localhost:5000')
);

module.exports = server;
