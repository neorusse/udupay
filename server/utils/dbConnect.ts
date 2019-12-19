import connect from "@databases/pg";

const db = connect(process.env.DATABASE_URL);

export default db;
