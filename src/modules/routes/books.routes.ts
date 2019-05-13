import {Application} from "express";
import {getAllBooks, getBookInfo} from "../controllers/books/getBooks";

export const registerRoutes = (app: Application) => {
    app.route("/books").get(getAllBooks);
    app.route('/books/:bookId').get(getBookInfo);
};
