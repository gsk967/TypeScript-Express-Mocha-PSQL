"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const async_1 = require("async");
const psql_1 = require("../../../utils/psql");
const response_1 = require("../../../utils/response");
/**
 * @api {get} /books Request for get books list
 * @apiName getBooksList
 * @apiGroup books
 *
 * @apiSuccess {ObjectId} id Id of the book record.
 * @apiSuccess {String} name  Book name.
 * @apiSuccess {String} author_name  Book author name.
 * @apiSuccess {String} description  Book description.
 * @apiSuccess {Date} created_at Book record created time.
 * @apiSuccess {Date} updated_at Book record updated time.
 * @apiSuccess {Date} deleted_at Book record deleted time.
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 [
 {
    "id": "6d3eac8f-0c72-45cc-975d-2389ce387a49",
    "register_id": "12312312312",
    "name": "Thomas Calculus",
    "author_name": "George B. Thomas",
    "description": "Thomas Calculus Early Transcendentals Media Upgrade, Eleventh Edition, responds to the needs of todays readers by developing their conceptual understanding while strengthening their skills in algebra and trigonometry, two areas of knowledge vital to the mastery of calculus",
    "created_at": "2019-05-13T06:27:53.448Z",
    "deleted_at": null,
    "updated_at": null
},{},{}..
 ]
 * @apiError (401) {String}  message Message of the error response.
 * @apiError (401) {Boolean} success Status of the response.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "success": false,
 *       "message": "Unauthorized. Token missing."
 *     }
 */
exports.getAllBooks = (req, resp) => {
	async_1.waterfall([
		(cb) => {
			psql_1.pool.query("select * from books where deleted_at is NULL", (err, result) => {
				if (err) {
					cb({
						internalData: err,
						message: "Internal server problem.Please try again.",
						statusCode: 500,
					});
				} else {
					cb(null, result.rowCount > 0 ? result.rows : {});
				}
			});
		},
	], (err, result) => {
		return err ? response_1.errorResponse(resp, err) : response_1.success(resp, result);
	});
};
/**
 * @api {get} /books/:bookId Request for get book info
 * @apiName getBookInfo
 * @apiGroup books
 *
 * @apiParam {ObjectId} bookId book id
 *
 * @apiSuccess {ObjectId} id Id of the book record.
 * @apiSuccess {String} name  Book name.
 * @apiSuccess {String} author_name  Book author name.
 * @apiSuccess {String} description  Book description.
 * @apiSuccess {Date} created_at Book record created time.
 * @apiSuccess {Date} updated_at Book record updated time.
 * @apiSuccess {Date} deleted_at Book record deleted time.
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 {
    "id": "6d3eac8f-0c72-45cc-975d-2389ce387a49",
    "register_id": "12312312312",
    "name": "Thomas Calculus",
    "author_name": "George B. Thomas",
    "description": "Thomas Calculus Early Transcendentals Media Upgrade, Eleventh Edition, responds to the needs of todays readers by developing their conceptual understanding while strengthening their skills in algebra and trigonometry, two areas of knowledge vital to the mastery of calculus",
    "created_at": "2019-05-13T06:27:53.448Z",
    "deleted_at": null,
    "updated_at": null
}
 * @apiError (401) {String}  message Message of the error response.
 * @apiError (401) {Boolean} success Status of the response.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "success": false,
 *       "message": "Unauthorized. Token missing."
 *     }
 */
exports.getBookInfo = (req, resp) => {
	let bookId = req.params.bookId;
	if (bookId === null) {
		return response_1.errorResponse(resp, {
			message: "Please choose correct book"
		});
	}
	async_1.waterfall([
		(cb) => {
			psql_1.pool.query(`select * from books where deleted_at is NULL and id='${bookId}'`, (err, result) => {
				if (err) {
					cb({
						internalData: err,
						message: "Internal server problem.Please try again.",
						statusCode: 500,
					});
				} else {
					cb(null, result.rowCount > 0 ? result.rows[0] : {});
				}
			});
		},
	], (err, result) => {
		return err ? response_1.errorResponse(resp, err) : response_1.success(resp, result);
	});
};
