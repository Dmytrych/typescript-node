import { INovaPostApiProvider } from "../lib/nova-post/api-provider";
import { GetStatusDocumentsApiMethod } from "../lib/nova-post/request-methods";

export class NovaPostRepository {
  private readonly apiProvider: INovaPostApiProvider;

  constructor(apiProvider: INovaPostApiProvider) {
    this.apiProvider = apiProvider;
  }

  public async trackDocuments(documentNumber: string) {
    const method = new GetStatusDocumentsApiMethod(this.apiProvider);

    return await method.send({
      Documents: [
        {
          DocumentNumber: documentNumber,
        },
      ],
    });
  }
}
