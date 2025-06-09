// Application Entry Point + Server Startup

import express from 'express';
import dotenv from 'dotenv';
import { testDBConnection } from './db';

dotenv.config();

// initializes express app
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

(async () => { // test database connection
    await testDBConnection();
})();

app.get('/', (_request, response) => { // confirms that server is working
    response.send("✔ Backend is functional!");
});

if (process.env.NODE_ENV !== 'test') { // server doesn't start if being tested
    app.listen(PORT, () => {            // starts server + listens for requests
        console.log(`✔ Server running on port ${PORT}`);
    });
}

export default app;