import config from "config";
import {Pool} from "pg";

export const pool = new Pool({
    database: config.get("DB.DATABASE"),
    host: config.get("DB.HOST"),
    password: config.get("DB.PASSWORD"),
    port: config.get("DB.PORT"),
    user: config.get("DB.USERNAME"),
});
