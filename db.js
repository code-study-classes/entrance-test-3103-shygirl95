import pg from "pg";
const { Pool } = pg;

export default new Pool({
    user: "postgres",
    password: "4466",
    host: "localhost",
    port: "5432",
    database: "hotel",
})