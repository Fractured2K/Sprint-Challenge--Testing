const request = require('supertest');
const server = require('./server');

describe('Server.js endpoint tests', () => {
	describe('POST /games', () => {
		it('should return status 200 OK after creating a game', async () => {
			let game = {
				title: 'Pacman',
				genre: 'Arcade',
				releaseYear: 1980
			};

			let response = await request(server)
				.post('/games')
				.send(game);

			expect(response.status).toBe(200);
		});

		it('should return 422 if title or genre are missing from the body', async () => {
			let game = {
				title: 'Pacman',
				releaseYear: 1980
			};

			let response = await request(server)
				.post('/games')
				.send(game);

			expect(response.status).toBe(422);
		});

		it('should return newly created game', async () => {
			let game = {
				title: 'Pacman',
				genre: 'Arcade',
				releaseYear: 1980
			};

			let response = await request(server)
				.post('/games')
				.send(game);

			expect(response.body).toEqual({
				id: 2,
				title: 'Pacman',
				genre: 'Arcade',
				releaseYear: 1980
			});
		});
	});

	describe('GET /games', () => {
		it('should return status 200 OK after retrieving games', async () => {
			let response = await request(server).get('/games');
			expect(response.status).toBe(200);
		});

		it('should return an array after retrieving games', async () => {
			let response = await request(server).get('/games');
			expect(Array.isArray(response.body)).toBe(true);
		});

		it('should return json content type', async () => {
			let response = await request(server).get('/games');
			expect(response.type).toBe('application/json');
		});
	});
});
