export const created = (message: object) => {
  return {
    statusCode: 201,
    body: message,
  };
};

export const badRquest = (message: object) => {
  return {
    statusCode: 400,
    body: message,
  };
};
