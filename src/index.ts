import { serve } from 'bun';
import mongoose from 'mongoose';
import { Producto } from './models/Producto';
import { config } from 'dotenv';

config();

await mongoose.connect(process.env.MONGO_URI!);
console.log('Conectado a MongoDB');

serve({
  port: 3000,
  fetch: async (req) => {
    const url = new URL(req.url);

    // GET /productos
    if (req.method === 'GET' && url.pathname === '/productos') {
      const productos = await Producto.find();
      return Response.json(productos);
    }

    // POST /productos
    if (req.method === 'POST' && url.pathname === '/productos') {
      const body = await req.json();
      const nuevo = new Producto(body);
      const guardado = await nuevo.save();
      return Response.json(guardado);
    }

    // PUT /productos/:id
    if (req.method === 'PUT' && url.pathname.startsWith('/productos/')) {
      const id = url.pathname.split('/')[2];
      const body = await req.json();
      const actualizado = await Producto.findByIdAndUpdate(id, body, { new: true });
      if (!actualizado) return new Response('No encontrado', { status: 404 });
      return Response.json(actualizado);
    }

    // DELETE /productos/:id
    if (req.method === 'DELETE' && url.pathname.startsWith('/productos/')) {
      const id = url.pathname.split('/')[2];
      const eliminado = await Producto.findByIdAndDelete(id);
      if (!eliminado) return new Response('No encontrado', { status: 404 });
      return Response.json({ mensaje: 'Eliminado correctamente' });
    }

    return new Response('Ruta no encontrada', { status: 404 });
  },
});
