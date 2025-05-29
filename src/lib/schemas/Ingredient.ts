import { t } from "elysia";
import { Schema, model } from "mongoose";

const IngredientSchema : Schema = new Schema({
    name: { type: String, required: true },
    provider: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    country: { type: String, required: true }
});

const Ingredient = model('Ingredient', IngredientSchema);

const IngredientDTO = t.Object({
    name: t.String(),
    provider: t.String(),
    latitude: t.Number(),
    longitude: t.Number(),
    country: t.String()
});

export { IngredientSchema, Ingredient, IngredientDTO };
    
