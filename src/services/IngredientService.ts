import { Context } from "elysia";

export const getAllIngredients = (context: Context) => {
    console.log(context);
    return "Handle get all";
}

