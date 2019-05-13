import express, {Application, Request, Response} from "express";
import {QueryResult} from "pg";
import config from 'config'
// db connection checking
import {pool} from "./utils/psql";
import * as userRoutes from "./modules/routes/books.routes";

// Load environment variables from .env file
// dotenv.config({path: ".env.development"});

const app: Application = express();
const port = config.get('PORT');

app.get("/", (req: Request, res: Response) => res.json({
    message: "Server is running successfully.",
}));

pool.query("SELECT NOW()", (err: Error, res: QueryResult) => {
    if (err) {
        console.log("Database connection failed.");
        process.exit(-1);
    } else {
        console.log("Database is connected successfully. ", res.rows);
    }
});

// adding all routes into express(app)
// registering routes

userRoutes.registerRoutes(app);

app.listen(port, (err: Error) => {
    if (!err) {
        console.log(`app listening on port ${port}!`)
    }
});

export default app;
