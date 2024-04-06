import { MethodNames, ModelNames, NovaPostRequestMethod } from "../common";
import { INovaPostApiProvider } from "../../api-provider";

interface TrackingDocumentInfo {
  DocumentNumber: string;
  Phone?: string;
}

interface GetStatusDocumentsProperties {
  Documents: TrackingDocumentInfo[];
}

interface GetStatusDocumentsResponse {
  Number: string;
  DateCreated: string;
  PhoneRecipient: string;
}

export class GetStatusDocuments extends NovaPostRequestMethod<
  GetStatusDocumentsProperties,
  GetStatusDocumentsResponse
> {
  protected readonly calledMethod: string = MethodNames.getStatusDocuments;

  protected readonly modelName: string = ModelNames.trackingDocument;

  public constructor(apiProvider: INovaPostApiProvider) {
    super(apiProvider);
  }
}
