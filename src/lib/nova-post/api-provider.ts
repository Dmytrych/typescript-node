import axios, { AxiosError, AxiosResponse } from "axios";
import { Logger } from "pino";
import {
  ApiRequestMethodDescriptor,
  ApiRequestMethodParams,
} from "./request-methods/common";

export interface INovaPostApiProvider {
  sendRequest<TMethodProperties, TResponse>(
    methodParams: ApiRequestMethodDescriptor<TMethodProperties>,
  ): Promise<TResponse>;
}

export class NovaPostApiProvider implements INovaPostApiProvider {
  private apiKey: string;
  private apiUrl: string;
  private logger: Logger;

  public constructor(apiKey: string, apiUrl: string, logger: Logger) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
    this.logger = logger;
  }

  public async sendRequest<TMethodProperties, TResponse>(
    methodParams: ApiRequestMethodDescriptor<TMethodProperties>,
  ): Promise<TResponse> {
    return axios
      .post<
        ApiRequestMethodParams<TMethodProperties>,
        AxiosResponse<TResponse, ApiRequestMethodParams<TMethodProperties>>
      >(this.apiUrl, {
        ...methodParams,
        apiKey: this.apiKey,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error: AxiosError) => {
        this.logger.error(
          `An error occurred in Nova Post API. Model: ${methodParams.modelName}, Method: ${methodParams.calledMethod}`,
          error,
        );
        throw error;
      });
  }
}
