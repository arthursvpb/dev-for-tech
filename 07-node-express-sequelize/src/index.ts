import 'dotenv/config';
import express from 'express';
import { router } from './routes';

import { testConnection } from './database';
testConnection();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`🚀 App listening on port ${PORT}`));
