import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { exit } from 'process';

import { apiRouter } from './api';

const app = express();

if (!process.env.MONGO_URI) {
  console.error('MONGO_UI env variable is not set');
  exit(1);
}

mongoose.connect(process.env.MONGO_URI);

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('./public'));

app.use('/', apiRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});