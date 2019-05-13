import {Request, Response} from "express";
import {QueryResult} from "pg";

import {waterfall} from "async";

import {pool} from "../../../utils/psql";
import {errorResponse, success} from "../../../utils/response";


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
export const getAllBooks = (req: Request, resp: Response): any => {
    waterfall([
        (cb: any) => {
            pool.query("select * from books where deleted_at is NULL",
                (err: Error, result: QueryResult) => {
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
    ], (err: any, result: any) => {
        return err ? errorResponse(resp, err) : success(resp, result);
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
export const getBookInfo = (req: Request, resp: Response): any => {

    let bookId: string = req.params.bookId;
    if (bookId === null) {
        return errorResponse(resp, {
            message: "Please choose correct book"
        })
    }
    waterfall([
        (cb: any) => {
            pool.query(`select * from books where deleted_at is NULL and id='${bookId}'`,
                (err: Error, result: QueryResult) => {
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
    ], (err: any, result: any) => {
        return err ? errorResponse(resp, err) : success(resp, result);
    })
};
