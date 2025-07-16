import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function login(req: Request, res: Response) {
  try {
    const { mobileNumber, password } = req.body;

    if (!mobileNumber || !password) {
      return sendErrorResponse(res, 400, 'mobileNumber and password are required', null);
    }

    const owner = await prisma.owner.findUnique({ where: { mobileNumber } });
    if (!owner) {
      return sendErrorResponse(res, 401, 'Invalid credentials', null);
    }

    const isMatch = await bcrypt.compare(password, owner.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials', data: null });
    }

    const token = jwt.sign(
      {
        userId: owner.id,
        name: owner.name,
        mobileNumber: owner.mobileNumber,
        shopId: owner.shopId,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return sendSuccessResponse(res, 200, 'Login successful', { token });
  } catch (error) {
    console.error('Login error:', error);
    return sendErrorResponse(res, 500, 'Login failed', error);
  }
}
