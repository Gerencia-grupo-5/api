import { Schema, model } from "mongoose";

const IngredientSchema : Schema = new Schema({

});

const Ingredient = model('Ingredient', IngredientSchema);

export { IngredientSchema, Ingredient };
    
