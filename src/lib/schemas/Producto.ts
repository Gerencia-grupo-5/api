import { Schema, model } from 'mongoose';

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  empresa: { type: String, required: true },
  vencimiento: { type: Date, required: true },
  precio: { type: Number, required: true },
  costo: { type: Number, required: true },
});

export const Producto = model('Producto', ProductoSchema);
