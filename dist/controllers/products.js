"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getAllProductsStatic = void 0;
const products_1 = require("../models/products");
const TypesCompanyName_1 = require("../types/TypesCompanyName");
const getAllProductsStatic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_1.Product.find(req.query);
    res.status(200).json({ products, nbHits: products.length });
});
exports.getAllProductsStatic = getAllProductsStatic;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { featured, company, search } = req.query;
    let queryObj = {};
    if (featured) {
        queryObj.featured = featured === 'true' ? true : false;
    }
    if (company && isValidCompany(company.toString())) {
        queryObj.company = company;
    }
    if (search) {
        queryObj.name = {
            $regex: search.toString(),
            $options: 'i',
        };
    }
    console.log(queryObj);
    const products = yield products_1.Product.find(queryObj);
    res.status(200).json({ products, nbHits: products.length });
});
exports.getAllProducts = getAllProducts;
const isValidCompany = (companyName) => {
    return TypesCompanyName_1.companyNames.includes(companyName);
};
