import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/connectDB';
import {Product} from './models/products';
const jsonProducts = require('./../products.json');

const populateDB = async () => {
  try {
    await connectDB(process.env.MONGODB_URI!);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('success!!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

populateDB();
