import {Response} from "express";

export const success = (resp: Response, data: object): Response => {
    return resp.status(200).json(data);
};

export const success201 = (resp: Response, data: object): Response => {
    return resp.status(201).json(data);
};

export const errorResponse = (resp: Response, data: any): Response => {
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
