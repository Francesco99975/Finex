import { PrismaClient } from '@prisma/client';
import express from 'express';
import morgan from 'morgan';

const db = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  const posts = await db.etf.findMany();
  res.json(posts);
});

const port = Number(process.env.PORT ?? 8080);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at http://localhost:${port}`);
});
