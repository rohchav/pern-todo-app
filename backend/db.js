import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
<<<<<<< HEAD
    user: "",
    password: "",
    host: "",
    port: ,
    database: ""
=======
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    database: process.env.DB_NAME,
>>>>>>> cf9fdb7 (feat(dotenv): add support for encrypted .env.vault files and enhance configuration options)
});

export default pool;
