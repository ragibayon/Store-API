import {Request, Response, NextFunction} from 'express';
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).json({
    message: 'Something went wrong, please try again.',
  });
};

export default errorHandler;
