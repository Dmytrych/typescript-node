import { Context } from "koa";
import { NovaPostManager } from "../../managers";

export class NovaPostController {
  private manager: NovaPostManager;

  constructor(manager: NovaPostManager) {
    this.manager = manager;
  }

  public async get(ctx: Context) {
    const resp = await this.manager.getStatusDocument("asd");
    console.log(resp);

    ctx.status = 200;
  }
}
