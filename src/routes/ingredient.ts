import { Elysia, t } from 'elysia';
import { createIngredient, deleteIngredient, getAllIngredients, getOneIngredient, updateIngredient } from '../services/IngredientService';
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
        .get("/:id", async (context) => {
            try {
                return generateResponse(200, await getOneIngredient(context.params.id), "", context);
            } catch (e) {
                return generateResponse(500, null, e, context);
            }
        }, {
            params: t.Object({ id: t.String() }),
            response: ResponseDTO(IngredientDTO)
        })
        .post("/", async (context) =>  {
            try {
                return generateResponse(201, await createIngredient(context.body), "", context);
            } catch (e) {
                return generateResponse(500, null, e, context);
            };
        }, {
            body: IngredientDTO,
            response: ResponseDTO(t.String())
        })
        .put("/:id", async (context) => {
            try {
                return generateResponse(204, await updateIngredient(context.params.id, context.body), "", context);
            } catch (e) {
                return generateResponse(500, null, e, context);
            }
        }, {
            body: IngredientDTO,
            response: ResponseDTO(t.Boolean()),
            params: t.Object({ id: t.String() })
        })
        .delete(":id", async (context) => {
            try {
                return generateResponse(200, await deleteIngredient(context.params.id), "", context);
            } catch (e) {
                return generateResponse(500, null, e, context);
            }
        }, {
            response: ResponseDTO(t.Boolean()),
            params: t.Object({ id: t.String() })
        });
};
