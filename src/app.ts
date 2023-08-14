import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
require('express-async-errors');
import connectDB from './db/connectDB';
import errorHandler from './middleware/error-handler';
import notFound from './middleware/not-found';
import productRouter from './routes/products';

const app = express();

// routes
app.get('/', (req, res, next) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route </a>');
});

app.use('/api/v1/products', productRouter);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectDB(process.env.MONGODB_URI!);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
  });
};

startServer();
