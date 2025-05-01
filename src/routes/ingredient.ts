import { Elysia } from 'elysia';
import { getAllIngredients } from '../services/IngredientService';

export function ingredientRoute(app: Elysia){
    return app
        .get("/", getAllIngredients);
};
