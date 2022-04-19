const { Pool} = require("pg");

const devConfig = {
  user: process.env.PG_USER,      //postgres user
  host: process.env.PG_ENDPOINT,  //localhost (I also tried 127.0.0.1)
  database: process.env.PG_DB,    //database name to connect to
  password: process.env.PG_PASS,  //postgres user password
  port: process.env.PG_PORT       //5432
}

const proConfig = {
  connectionString: proccess.env.DATABASE_URL,
}

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
module.exports = {
  query: (text, params) => pool.query(text, params),
};
