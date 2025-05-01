import { Context } from "elysia";
import { Ingredient } from "../lib/schemas/Ingredient";
import { generateResponse } from "../utils/response";

export const getAllIngredients = async () => {
    return await Ingredient.find();
}

