import { Elysia } from 'elysia'
import { qrRoute } from './routes/qr'
import { swagger } from '@elysiajs/swagger'
import { config } from 'dotenv';
import { initMongo } from './lib/mongo';
import { ingredientRoute } from './routes/ingredient';

config();
initMongo();

const app = new Elysia()
  .use(swagger())
  .group('/ingredients', ingredientRoute)
  .use(qrRoute)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
