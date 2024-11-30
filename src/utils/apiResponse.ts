import { Response } from "express";

const Success = (
    res: Response,
    message: string,
    statusCode: number,
    result = {},
  ) => {
    return res.status(statusCode).json({
      code: statusCode,
      message: message,
      data: result || {},
    });
  };

  export default {
    Success
  }