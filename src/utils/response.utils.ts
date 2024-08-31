const buildResponse = (
  success: boolean,
  data: any,
  message: string,
  additionalData?: any
) => {
  return {
    success: success,
    message: message || (success && "success"),
    data: data,
    additionalData: additionalData,
  };
};

export { buildResponse };
