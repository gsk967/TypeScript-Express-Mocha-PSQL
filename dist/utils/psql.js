"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const config_1 = __importDefault(require("config"));
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
	database: config_1.default.get("DB.DATABASE"),
	host: config_1.default.get("DB.HOST"),
	password: config_1.default.get("DB.PASSWORD"),
	port: config_1.default.get("DB.PORT"),
	user: config_1.default.get("DB.USERNAME"),
});
