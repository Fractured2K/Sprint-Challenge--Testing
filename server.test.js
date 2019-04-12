const request = require('supertest');
const server = require('./server');

describe('Server.js endpoint tests', () => {
	describe('POST /games', () => {
		it('should return status 200 OK after creating a game', async () => {
			const game = {
				title: 'Pacman',
				genre: 'Arcade',
				releaseYear: 1980
			};

			const response = await request(server)
				.post('/games')
				.send(game);

			expect(response).toBe(200);
		});

		it('should return 422 if title or genre are missing from the body', async () => {
			let game = {
				title: 'Pacman',
				genre: 'Arcade',
				releaseYear: 1980
			};

			let response = await request(server)
				.post('/games')
				.send(game);

			expect(response).toBe(422);
		});

		it('should return newly created game', async () => {
			const game = {
				title: 'Pacman',
				genre: 'Arcade',
				releaseYear: 1980
			};

			const response = await request(server)
				.post('/games')
				.send(game);

			expect(response.body).toEqual({
				title: 'Pacman',
				genre: 'Arcade',
				releaseYear: 1980
			});
		});
	});

	describe('GET /games', () => {
		it('should return status 200 OK after retrieving games', async () => {
			const response = await request(server).get('/');

			expect(response).toBe(200);
		});
	});
});
