import {Pool} from 'pg';

const pool = new Pool({
    user: "postgres",
    password: "Xqn4rcj9",
    host: "127.0.0.1",
    port: 5433,
    database: "tododb"
});

export default pool;