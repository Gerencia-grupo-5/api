import { Context, t } from "elysia";

export const generateResponse = (status: number, data: any, error: string, context: Context) => {
    context.set.status = status;
    let ok : boolean = true;
    if (error !== "") ok = false;

    return ({
        ok,
        error,
        data
    });
};

export const ResponseDTO = (dataDTO : any) => t.Object({
    ok: t.Boolean(),
    error: t.String(),
    data: dataDTO
});
