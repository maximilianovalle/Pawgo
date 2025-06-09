import request from 'supertest'; // simulates HTTP request in memory
import app from '../src/index'; // ./src/index.ts

// describe behavior when client sends GET request to '/'
describe('GET /', () => {
    it('should return 200 OK w/ correct message', async () => {
        const response = await request(app).get('/');           // simulates browser calling Express app at '/'
        expect(response.status).toBe(200);                      // pass/fail criteria
        expect(response.text).toBe("✔ Backend is functional!"); // pass/fail criteria
    });
});