import express from 'express';
import { router } from 'routes';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);

app.listen(8000, () => console.log('Server started on port 8000'));
