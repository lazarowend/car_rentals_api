import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_, response: Response) => {
  return response.json({ message: 'ola' });
});

app.post('/courses', (request: Request, response: Response) => {
  const { name } = request.body;
  console.log('name');
  return response.json({ name: name });
});

app.listen(8000);
