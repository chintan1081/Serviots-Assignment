import { NextFunction, Request, Response } from "express";

export class ApiError extends Error {

    statusCode: number;
    errors: any;
    success: boolean;
    message: string;
    data: undefined | null;

    constructor(
        statusCode: number = 500,
        message = "Something went wrong",
        errors: any = []
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.success = false;
        this.message = message;
        this.data = null;
    }
}

export const ErrorHandler = (error: ApiError, req: Request, res: Response, next: NextFunction) =>{
    res.status(error.statusCode).json({
        success: error.success,
        message: error.message,
        errors: error.errors,
        data: error.data
    })
}