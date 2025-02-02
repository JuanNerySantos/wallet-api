import { httpResponseModel } from "../../models/http-response";

export const created = (message: object): httpResponseModel => {
  return {
    statusCode: 201,
    body: message,
  };
};

export const badRquest = (message: object): httpResponseModel => {
  return {
    statusCode: 400,
    body: message,
  };
};

export const unauthorized = (message: object): httpResponseModel => {
  return {
    statusCode: 401,
    body: message,
  };
};

export const ok = (message: object): httpResponseModel => {
  return {
    statusCode: 200,
    body: message,
  };
};
