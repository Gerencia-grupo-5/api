import { Elysia } from 'elysia'
import { qrRoute } from './routes/qr'
import { connectDB } from './routes/db'

const app = new Elysia()
  .use(qrRoute)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
