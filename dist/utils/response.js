"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.success = (resp, data) => {
	return resp.status(200).json(data);
};
exports.success201 = (resp, data) => {
	return resp.status(201).json(data);
};
exports.errorResponse = (resp, data) => {
	const statusCode = data.statusCode || 400;
	const responseData = {
		internalData: undefined,
		message: undefined,
	};
	if (process.env.NODE_ENV === "development") {
		responseData.internalData = data.internalData;
	}
	responseData.message = data.message ? data.message : "";
	return resp.status(statusCode).json(responseData);
};
