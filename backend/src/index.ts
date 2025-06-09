// Application Entry Point + Server Startup

import express from 'express';
import dotenv from 'dotenv';
import { testDBConnection } from './db';

dotenv.config();

// initializes express app
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (_request, response) => { // confirms that server is working
    response.send("✔ Backend is functional!");
});

if (process.env.NODE_ENV !== 'test') { // index.test.ts can import app w/out starting server
    app.listen(PORT, () => { // starts server + listens for requests
        console.log(`✔ Server running on port ${PORT}`);
    });
}

export default app;