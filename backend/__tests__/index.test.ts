// ./src/index.ts

import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
    it('should return 200 OK w/ correct message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe("✔ Backend is functional!");
    });
});