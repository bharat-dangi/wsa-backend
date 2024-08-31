import { UniqueConstraintError } from "sequelize";

export class ErrorResponse extends Error {
  statusCode: any;
  constructor(error: any, statusCode: any) {
    if (
      (error as any) instanceof UniqueConstraintError &&
      error?.errors?.[0]?.message
    ) {
      error = `${error?.name ? error?.name + ": " : ""}${
        error?.errors?.[0]?.message
      }`;
      statusCode = 409;
    }
    super(error);
    this.statusCode = statusCode;
  }
}
