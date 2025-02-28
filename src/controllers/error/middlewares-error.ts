export class ErrorMiddlewares extends Error {
  constructor(message: string) {
    super(message);
  }
}
