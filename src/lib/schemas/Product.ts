import { Schema, model } from 'mongoose';
import { IngredientSchema } from './Ingredient';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: [IngredientSchema], default: [] }
});

export const Product = model('Product', ProductSchema);
