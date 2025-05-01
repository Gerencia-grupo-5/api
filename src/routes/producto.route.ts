import { Elysia, t } from 'elysia';
import {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from '../services/ProductoService';

export const productoRoutes = new Elysia({ prefix: '/productos' })
  .get('/', async () => await obtenerProductos())
  .get('/:id', async ({ params }) => await obtenerProductoPorId(params.id))
  .post(
    '/',
    async ({ body }) => await crearProducto(body),
    {
      body: t.Object({
        nombre: t.String(),
        ingredientes: t.Array(t.String()),
        empresa: t.String(),
        vencimiento: t.String(), // podrías usar t.Date() si haces parsing
        precio: t.Number(),
        costo: t.Number()
      })
    }
  )
  .put('/:id', async ({ params, body }) => await actualizarProducto(params.id, body))
  .delete('/:id', async ({ params }) => await eliminarProducto(params.id));
