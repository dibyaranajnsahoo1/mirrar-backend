const request = require('supertest');
const app = require('./App'); // Update the path accordingly

describe('Express App', () => {
  it('should respond with 200 OK for the home route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should respond with 404 Not Found for an unknown route', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });

  // Add more test cases based on your application's routes and functionality
});
