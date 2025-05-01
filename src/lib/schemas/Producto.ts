import { Schema, model } from 'mongoose';
import { Ingredient } from './Ingredient';

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  ingredientes: [{ type: Schema.Types.ObjectId, ref: 'Ingredient', required: true }], // Aquí estamos referenciando los ingredientes.
  empresa: { type: String, required: true },
  vencimiento: { type: Date, required: true },
  precio: { type: Number, required: true },
  costo: { type: Number, required: true },
});

export const Producto = model('Producto', ProductoSchema);
