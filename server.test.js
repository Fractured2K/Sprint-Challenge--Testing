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
	});
});
