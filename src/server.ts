import 'reflect-metadata';

import { AppDataSource } from 'database/data-source';
import express from 'express';
import { router } from 'routes';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

function startServer() {
  const app = express();

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  app.use(express.json());
  app.use(router);

  app.listen(8000, () => console.log('start server'));
}

AppDataSource.initialize()
  .then(() => {
    console.log('database start!');
    startServer();
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
