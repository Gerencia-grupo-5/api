import { Elysia } from 'elysia'
import QRCode from 'qrcode'
import { initMongo } from '../lib/mongo'
import mongoose from 'mongoose'
import { Producto } from '../lib/schemas/Producto'

await initMongo()

export const qrRoute = new Elysia().get('/qr', async ({ query }) => {
  const { id } = query as { id: string }

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return new Response('ID inválido', { status: 400 })
  }

  try {
      const producto = await Producto.findById(id).populate('ingredientes').exec()

      if (!producto) {
          return new Response('Producto no encontrado', { status: 404 })
      }

      const qrData = `
          Producto: ${producto.nombre}
          Empresa: ${producto.empresa}
          Precio: $${producto.precio}
          Vencimiento: ${producto.vencimiento.toISOString().split('T')[0]}
          Ingredientes:
          ${producto.ingredientes.map((ing: any) => ` - ${ing.name} (${ing.country})`).join('\n')}
      `

      const buffer = await QRCode.toBuffer(qrData)

      return new Response(buffer, {
          headers: {
              'Content-Type': 'image/png'
          }
      })
  } catch (error) {
      console.error(error)
      return new Response('Error interno del servidor', { status: 500 })
  }
})
