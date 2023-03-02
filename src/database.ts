import * as dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

// Destructuring assignment
// - unpacks values from arrays or properties from objects, into distinct variables; in this case, the environment variable file
const {
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    ENV
} = process.env;

// Create Postgres database connection
const client: Pool = new Pool({
    host: POSTGRES_HOST,
    database: ENV === 'test' ? POSTGRES_TEST_DB : POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});

export default client;