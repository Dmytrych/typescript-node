import { NovaPostManager } from "../../managers";
import { BaseContext } from "koa";

export class NovaPostController {
  private manager: NovaPostManager;

  constructor(manager: NovaPostManager) {
    this.manager = manager;
  }

  public async getStatusDocuments(ctx: BaseContext) {
    await this.manager.getStatusDocuments(ctx.status);
    ctx.status = 200;
  }
}
