import {Request, Response, NextFunction} from 'express';
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({message: 'Requested content not found'});
};
export default notFound;
