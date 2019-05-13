"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const getBooks_1 = require("../controllers/books/getBooks");
exports.registerRoutes = (app) => {
	app.route("/books").get(getBooks_1.getAllBooks);
	app.route('/books/:bookId').get(getBooks_1.getBookInfo);
};
