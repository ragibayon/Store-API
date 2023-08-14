import {Request, Response, NextFunction} from 'express';
import {Product} from '../models/products';
import QueryObj from '../types/TypesQueryObj';
import CompanyName, {companyNames} from '../types/TypesCompanyName';

export const getAllProductsStatic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.find(req.query);
  res.status(200).json({products, nbHits: products.length});
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {featured, company, search} = req.query;

  let queryObj: QueryObj = {};

  if (featured) {
    queryObj.featured = featured === 'true' ? true : false;
  }
  if (company && isValidCompany(company.toString())) {
    queryObj.company = company as CompanyName;
  }
  if (search) {
    queryObj.name = {
      $regex: search.toString(),
      $options: 'i',
    };
  }

  console.log(queryObj);
  const products = await Product.find(queryObj);
  res.status(200).json({products, nbHits: products.length});
};

const isValidCompany = (companyName: string) => {
  return companyNames.includes(companyName as CompanyName);
};
