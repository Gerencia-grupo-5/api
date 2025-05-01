import { Elysia } from 'elysia'
import QRCode from 'qrcode'

export const qrRoute = new Elysia().get('/qr', async ({ query }) => {
    //Esto es de prueba mientras se hace la conexion a la base de datos
    const vCard = `
        BEGIN:VCARD
        VERSION:3.0
        FN:Juan Pérez
        TEL:+123456789
        EMAIL:juan.perez@example.com
        END:VCARD
    `
    
    const buffer = await QRCode.toBuffer(vCard)
    
    return new Response(buffer, {
      headers: {
        'Content-Type': 'image/png'
      }
    })
  })
