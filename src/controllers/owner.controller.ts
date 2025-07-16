import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';
import bcrypt from 'bcryptjs';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId?: number;
        [key: string]: any;
      };
    }
  }
}

const prisma = new PrismaClient();


export async function createOwner(req: Request, res: Response) {
  try {
    const { shopId, name, mobileNumber, email, password } = req.body;

    if (!shopId || !name || !mobileNumber || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required', data: null });
    }

    const existingOwner = await prisma.owner.findFirst({
      where: {
        OR: [
          { mobileNumber: mobileNumber },
          { email: email }
        ]
      }
    });
    if (existingOwner) {
      return res.status(409).json({ success: false, message: 'Owner with this mobile number or email already exists', data: null });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newOwner = await prisma.owner.create({
      data: {
        shopId,
        name,
        mobileNumber,
        email,
        password: hashedPassword,
      },
    });
    return res.status(201).json({ success: true, message: 'Owner created successfully', data: newOwner });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to create owner', error: error instanceof Error ? error.message : error });
  }
}

export async function getOwner(req: Request, res: Response) {
  try {
    const ownerId = req.user?.userId; 
    if (!ownerId) {
      return sendErrorResponse(res, 400, 'Owner ID not found in token', null);
    }
    const owner = await prisma.owner.findUnique({
      where: { id: ownerId },
    });
    if (!owner) {
      return sendErrorResponse(res, 404, 'Owner not found', null);
    }
    sendSuccessResponse(res, 200, 'Owner retrieved successfully', owner);
  } catch (error) {
    sendErrorResponse(res, 500, 'Failed to retrieve owner', error);
  }
}
export async function updateOwner(req: Request, res: Response) {
  try {
    const ownerId = req.user?.userId;
    const { shopId, name, mobileNumber, email, password } = req.body;

    if (!ownerId) {
      return res.status(400).json({ success: false, message: 'Owner ID not found in token', data: null });
    }
    if (!shopId || !name || !mobileNumber || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required', data: null });
    }

    const owner = await prisma.owner.findUnique({ where: { id: ownerId } });
    if (!owner) {
      return res.status(404).json({ success: false, message: 'Owner not found', data: null });
    }

    const duplicateOwner = await prisma.owner.findFirst({
      where: {
        AND: [
          { id: { not: ownerId } },
          {
            OR: [
              { mobileNumber: mobileNumber },
              { email: email }
            ]
          }
        ]
      }
    });
    if (duplicateOwner) {
      return res.status(409).json({ success: false, message: 'Another owner with this mobile number or email already exists', data: null });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedOwner = await prisma.owner.update({
      where: { id: ownerId },
      data: { shopId, name, mobileNumber, email, password: hashedPassword },
    });
    return res.status(200).json({ success: true, message: 'Owner updated successfully', data: updatedOwner });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update owner', error: error instanceof Error ? error.message : error });
  }
}

export async function deleteOwner(req: Request, res: Response) {
  try {
    const ownerId = req.user?.userId;
    if (!ownerId) {
      return sendErrorResponse(res, 400, 'Owner ID not found in token', null);
    }
    const owner = await prisma.owner.findUnique({ where: { id: ownerId } });
    if (!owner) {
      return sendErrorResponse(res, 404, 'Owner not found', null);
    }
    await prisma.owner.delete({ where: { id: ownerId } });
    sendSuccessResponse(res, 200, 'Owner deleted successfully', null);
  } catch (error) {
    sendErrorResponse(res, 500, 'Failed to delete owner', error);
  }
}
