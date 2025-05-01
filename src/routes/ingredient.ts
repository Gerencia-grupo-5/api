import { Elysia, t } from 'elysia';
import { getAllIngredients } from '../services/IngredientService';
import { generateResponse, ResponseDTO } from '../utils/response';
import { IngredientDTO } from '../lib/schemas/Ingredient';

export function ingredientRoute(app: Elysia){
    return app
        .get("/all", async (context) => {
            try {
                const response = await getAllIngredients();
                return generateResponse(200, response, "", context);
            } catch (e) {
                return generateResponse(500, null, e, context);
            }
        }, {
            response: ResponseDTO(
                t.Array(IngredientDTO)
            )
        })
        .get("/:id", (context) => {

        })
        .post("/", (context) =>  {
        })
        .put("/:id", (context) => {
        })
        .delete(":id", (context) => {
        });
};
