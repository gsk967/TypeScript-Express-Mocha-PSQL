"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : {"default": mod};
};
var __importStar = (this && this.__importStar) || function (mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	result["default"] = mod;
	return result;
};
Object.defineProperty(exports, "__esModule", {value: true});
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
// Load environment variables from .env file
// dotenv.config({path: ".env.development"});
// db connection checking
const psql_1 = require("./utils/psql");
const userRoutes = __importStar(require("./modules/routes/books.routes"));
const app = express_1.default();
const port = config_1.default.get('PORT');
app.get("/", (req, res) => res.json({
	message: "Server is running successfully.",
}));
psql_1.pool.query("SELECT NOW()", (err, res) => {
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
app.listen(port, (err) => {
	if (!err) {
		console.log(`app listening on port ${port}!`);
	}
});
exports.default = app;
