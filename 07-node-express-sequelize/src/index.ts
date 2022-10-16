import 'dotenv/config';
import express from 'express';

import { testConnection } from './database';
testConnection();

const app = express();
const PORT = 8080;

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
