import { Schema, model } from 'mongoose';

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  ingredientes: { type: [String], default: [] }
});

export const Producto = model('Producto', ProductoSchema);
