import {Schema, model} from 'mongoose';
import CompanyName, {companyNames} from './../types/TypesCompanyName';
import IProduct from '../types/TypesProduct';

const productSchema = new Schema<IProduct>({
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
      values: companyNames,
      message: '{VALUE} is not supported',
    },
  },
});

export const Product = model('Product', productSchema);
