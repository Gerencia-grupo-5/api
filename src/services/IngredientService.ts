import { Ingredient } from "../lib/schemas/Ingredient";

export const getAllIngredients = async () => {
    const res = await Ingredient.find({});
    return res;
}

export const getOneIngredient = async (id: string) => {
    return await Ingredient.findById(id);
};

export const createIngredient = async (ingredient: any) : Promise<string> => {

    const response = await Ingredient.find({ name: ingredient.name, provider: ingredient.provider });

    if (response.length > 0) throw "A ingredient exist with the same name and provider";

    const newIngredient = new Ingredient(ingredient);
    await newIngredient.save();

    return newIngredient._id as string;
};

export const updateIngredient = async (id: string, ingredient: any) : Promise<boolean> => {
    await Ingredient.findByIdAndUpdate(id, ingredient);
    return true;
};

export const deleteIngredient = async (id: string) : Promise<boolean> => {
    const r = await Ingredient.deleteOne({_id: id});
    return r.acknowledged;
};
