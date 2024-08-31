export interface PromiseResponse<DataType, ErrorType> {
  data?: DataType;
  totalCount?: number;
  error?: ErrorType | Error;
}
