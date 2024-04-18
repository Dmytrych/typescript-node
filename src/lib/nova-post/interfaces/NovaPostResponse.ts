export type NovaPostResponse<TData> = {
  success: boolean;
  data: TData;
  errors: string[];
  warnings: string[];
  info: string[];
  messageCodes: string[];
  errorCodes: string[];
  warningCodes: string[];
  infoCodes: string[];
};
