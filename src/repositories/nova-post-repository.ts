import { INovaPostApiProvider } from "../lib/nova-post/api-provider";
import { GetStatusDocuments } from "../lib/nova-post/request-methods";

export class NovaPostRepository {
  private readonly apiProvider: INovaPostApiProvider;

  constructor(apiProvider: INovaPostApiProvider) {
    this.apiProvider = apiProvider;
  }

  public async trackDocuments(documentNumber: string) {
    const method = new GetStatusDocuments(this.apiProvider);

    return await method.send({
      Documents: [
        {
          DocumentNumber: documentNumber
        }
      ]
    });
  }
}
