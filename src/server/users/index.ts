import * as Koa from "koa";
import { ServiceContainer } from "../../container";

export function init(_: Koa, __: ServiceContainer) {
  // const router = new Router({ prefix: "/api/v1/users" });
  // const controller = new UserController(container.managers.user);
  //
  // router.get("/me", controller.get.bind(controller));
  //
  // router.post(
  //   "/",
  //   bodyParser(),
  //   middleware.validate({ request: { body: validators.createUser } }),
  //   controller.create.bind(controller)
  // );
  //
  // router.post(
  //   "/login",
  //   bodyParser(),
  //   middleware.validate({ request: { body: validators.login } }),
  //   controller.login.bind(controller)
  // );
  //
  // router.put(
  //   "/",
  //   bodyParser(),
  //   middleware.authentication(container.lib.authenticator),
  //   middleware.authorization([Role.user, Role.admin]),
  //   middleware.validate({ request: { body: validators.updateUser } }),
  //   controller.update.bind(controller)
  // );
  //
  // router.put(
  //   "/password",
  //   bodyParser(),
  //   middleware.authentication(container.lib.authenticator),
  //   middleware.authorization([Role.user, Role.admin]),
  //   middleware.validate({
  //     request: {
  //       body: validators.changePassword
  //     }
  //   }),
  //   controller.changePassword.bind(controller)
  // );
  //
  // router.delete(
  //   "/:id",
  //   middleware.authentication(container.lib.authenticator),
  //   middleware.authorization([Role.admin]),
  //   middleware.validate({
  //     params: { id: Joi.number().required() }
  //   }),
  //   controller.delete.bind(controller)
  // );
  //
  // server.use(router.routes());
}
