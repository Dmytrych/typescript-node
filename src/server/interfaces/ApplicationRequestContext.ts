import { DefaultContext, DefaultState, ParameterizedContext } from "koa";

export type ApplicationRequestContext<ResponseBodyT> = ParameterizedContext<
  DefaultState,
  DefaultContext,
  ResponseBodyT
>;
