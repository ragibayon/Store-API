"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const TypesCompanyName_1 = require("./../types/TypesCompanyName");
const productSchema = new mongoose_1.Schema({
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: [true, 'Product name must be provided'],
        minlength: 3,
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided'],
        min: 0,
    },
    company: {
        type: String,
        enum: {
            values: TypesCompanyName_1.companyNames,
            message: '{VALUE} is not supported',
        },
    },
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
