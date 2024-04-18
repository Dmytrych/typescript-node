import * as Joi from "joi";
import { IMiddleware } from "koa-router";
import { Context } from "koa";
import { FieldValidationError } from "../../errors";

export interface SchemaMap {
  params?: { [key: string]: Joi.SchemaLike };

  request?: {
    body?: { [key: string]: Joi.SchemaLike } | Joi.ArraySchema;
    headers?: { [key: string]: Joi.SchemaLike };
  };

  response?: {
    body?: { [key: string]: Joi.SchemaLike } | Joi.ArraySchema;
    headers?: { [key: string]: Joi.SchemaLike };
  };
}

export function validate(schema: SchemaMap): IMiddleware {
  return async (ctx: Context, next: () => Promise<never>) => {
    const valResult = Joi.object(schema).validate(ctx, {
      allowUnknown: true,
      abortEarly: false,
    });

    if (valResult.error) {
      throw new FieldValidationError(
        valResult.error.message,
        valResult.error.details.map((f) => ({
          message: f.message,
          path: f.path,
          type: f.type,
        })),
        valResult.error,
      );
    }

    await next();
  };
}
