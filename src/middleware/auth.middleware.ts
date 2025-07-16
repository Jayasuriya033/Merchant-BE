import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendErrorResponse } from '../responses/errorResponse';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendErrorResponse(res, 401, 'No token provided', null);
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (err) {
    sendErrorResponse(res, 401, 'Invalid token', err);
  }
}