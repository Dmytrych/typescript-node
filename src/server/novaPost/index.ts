import * as Koa from "koa";
import * as Router from "koa-router";
import { ServiceContainer } from "../../container";
import { NovaPostController } from "./controller";
import * as bodyParser from "koa-bodyparser";
import * as validators from "./validators";
import * as middlewares from "../middlewares";

export { NovaPostController } from "./controller";

export function init(server: Koa, container: ServiceContainer) {
  const router = new Router({ prefix: "/api/v1/novaPost" });
  const controller: NovaPostController = new NovaPostController(
    container.managers.novaPost,
  );

  router.post(
    "/tracking",
    bodyParser(),
    middlewares.validate({ params: validators.getStatusDocuments }),
    controller.getStatusDocuments.bind(controller),
  );

  server.use(router.routes());
}
