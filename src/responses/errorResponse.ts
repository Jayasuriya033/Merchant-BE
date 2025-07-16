import { Response } from "express";

export function sendErrorResponse(res: Response<any, Record<string, any>>, status: number, message: string | number | undefined, error: unknown) {
  res.status(status).json({
    success: false,
    message,
    error,
  });
}