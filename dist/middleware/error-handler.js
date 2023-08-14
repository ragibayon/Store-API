"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'Something went wrong, please try again.',
    });
};
exports.default = errorHandler;
