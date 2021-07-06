import { config } from "dotenv";
config();

const OPT_CONFIG = {
    db_conn: process.env.DATABASE_URI || 'mongodb://localhost:27017/filmsapi',
}

export default OPT_CONFIG;