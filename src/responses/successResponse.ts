import { Response } from "express";

export function sendSuccessResponse(
  res: Response<any, Record<string, any>>,
  status: number | null,
  message: string,
  data: any 
) {
  res.status(status ?? 200).json({
    success: true,
    message,
    data,
  });
}