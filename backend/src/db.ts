// Database Setup + Connection Test

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ // creates connection pool to database
    connectionString: process.env.DATABASE_URL,
});

export const testDBConnection = async () => { // tests if database is connected
    try {
        const response = await pool.query('SELECT NOW()');   // checks if DB is active
        console.log("✔ Connected to PostgreSQL DB: ", response.rows[0].now);
    } catch (error) {
        console.error("✗ Failed to connect to PostgreSQL DB: ", error);
        process.exit(1);
    }
};

export default pool; // exports pool for use in other files