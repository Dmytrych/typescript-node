import { INovaPostApiProvider } from "../api-provider";

export interface ApiRequestMethodParams<TMethodProperties>
  extends ApiRequestMethodDescriptor<TMethodProperties> {
  apiKey: string;
}

export interface ApiRequestMethodDescriptor<TMethodProperties> {
  modelName: string;
  calledMethod: string;
  methodProperties: TMethodProperties;
}

export abstract class NovaPostRequestMethod<TMethodProperties, TResponse> {
  protected abstract readonly modelName: string;
  protected abstract readonly calledMethod: string;
  private readonly apiProvider: INovaPostApiProvider;

  protected constructor(apiProvider: INovaPostApiProvider) {
    this.apiProvider = apiProvider;
  }

  public async send(methodProperties: TMethodProperties) {
    const descriptor = this.getDescriptor(methodProperties);
    return await this.apiProvider.sendRequest<TMethodProperties, TResponse>(
      descriptor,
    );
  }

  private getDescriptor(
    methodProperties: TMethodProperties,
  ): ApiRequestMethodDescriptor<TMethodProperties> {
    return {
      modelName: this.modelName,
      calledMethod: this.calledMethod,
      methodProperties,
    };
  }
}

export const ModelNames = {
  trackingDocument: "TrackingDocument",
};

export const MethodNames = {
  getStatusDocuments: "getStatusDocuments",
};
