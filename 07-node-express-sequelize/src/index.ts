import 'dotenv/config';

import express from 'express';
import { router } from './routes';

import { testConnection } from './database';
testConnection();

import swagger from 'swagger-ui-express';
import { apiDocumentation } from './docs';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(router);
app.use('/api-docs', swagger.serve, swagger.setup(apiDocumentation));

app.listen(PORT, () => console.log(`🚀 App listening on port ${PORT}`));
