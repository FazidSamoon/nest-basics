import { Response } from 'express';

export type responseHeader = {
  res: Response;
  statusCode: number;
  message: String;
  data?: {};
};

export const makeResponse = ({
  res,
  statusCode,
  message,
  data,
}: responseHeader) => {
  const responseData = { message, data };
  if (!data) delete responseData.data;
  res.status(statusCode).json(responseData);
};
