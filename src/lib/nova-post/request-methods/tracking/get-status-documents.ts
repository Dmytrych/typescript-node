import { MethodNames, ModelNames, NovaPostRequestMethod } from "../common";

interface TrackingDocumentInfo {
  DocumentNumber: string;
  Phone?: string;
}

interface GetStatusDocumentsProperties {
  Documents: TrackingDocumentInfo[];
}

interface TrackingDocumentInfo {
  DocumentNumber: string;
  Phone?: string;
}

export class GetStatusDocuments extends NovaPostRequestMethod<
  GetStatusDocumentsProperties
> {
  protected readonly calledMethod: string = MethodNames.getStatusDocuments;

  protected readonly modelName: string = ModelNames.trackingDocument;
}
