import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import data from './data.js';

//configuration
// dotenv.config();
const app = express();
// app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// app.use(morgan('common'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

// Database connection
// const PORT = process.env.PORT || 6000;
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
//   })
//   .catch((err) => console.log(`connection error: ${err}`));

app.get('/api/revenue', (req,res) => {
  res.send(data.revenue)
})

app.get('/api/expenses', (req,res) => {
  res.send(data.expense)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})


