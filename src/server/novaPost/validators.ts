import * as Joi from "joi";

export const getStatusDocuments: Joi.SchemaMap = {
  documentNumber: Joi.string().required(),
};
