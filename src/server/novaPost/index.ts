import * as Koa from "koa";
import * as Router from "koa-router";
import { ServiceContainer } from "../../container";
import { NovaPostController } from "./controller";

export { NovaPostController } from "./controller";

export function init(server: Koa, container: ServiceContainer) {
  const router = new Router({ prefix: "/api/v1/novaPost" });
  const controller: NovaPostController = new NovaPostController(
    container.managers.novaPost
  );

  router.get("/tracking", controller.get.bind(controller));

  server.use(router.routes());
}
