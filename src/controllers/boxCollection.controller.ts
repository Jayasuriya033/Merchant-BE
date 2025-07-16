import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';

const prisma = new PrismaClient();

export class BoxCollectionController {
  async createBoxCollection(req: Request, res: Response) {
    try {
      // Get from JWT (req.user) or body for create
      const roleId = req.user?.roleId || req.body.roleId;
      const shopId = req.user?.shopId || req.body.shopId;
      const customerId = req.user?.customerId || req.body.customerId;
      const { collectedBoxes } = req.body;

      if (!roleId || !shopId || !customerId || collectedBoxes === undefined) {
        return sendErrorResponse(res, 400, 'roleId, shopId, customerId, and collectedBoxes are required', null);
      }

      const newBoxCollection = await prisma.boxCollection.create({
        data: {
          roleId,
          shopId,
          customerId,
          collectedBoxes,
        },
      });
      sendSuccessResponse(res, 201, 'Box collection created successfully', newBoxCollection);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error creating box collection', error);
    }
  }

  async getBoxCollection(req: Request, res: Response) {
    try {
      const roleId = req.user?.roleId;
      const shopId = req.user?.shopId;
      const customerId = req.user?.customerId;

      if (!roleId || !shopId || !customerId) {
        return sendErrorResponse(res, 400, 'roleId, shopId, and customerId are required in token', null);
      }

      const boxCollection = await prisma.boxCollection.findFirst({
        where: { roleId, shopId, customerId },
      });
      if (!boxCollection) {
        return sendErrorResponse(res, 404, 'Box collection not found', null);
      }
      sendSuccessResponse(res, 200, 'Box collection retrieved successfully', boxCollection);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error retrieving box collection', error);
    }
  }

  async updateBoxCollection(req: Request, res: Response) {
    try {
      const roleId = req.user?.roleId;
      const shopId = req.user?.shopId;
      const customerId = req.user?.customerId;
      const { collectedBoxes } = req.body;

      if (!roleId || !shopId || !customerId || collectedBoxes === undefined) {
        return sendErrorResponse(res, 400, 'roleId, shopId, customerId, and collectedBoxes are required in token/body', null);
      }

      // Find the box collection by unique fields
      const existing = await prisma.boxCollection.findFirst({
        where: { roleId, shopId, customerId },
      });
      if (!existing) {
        return sendErrorResponse(res, 404, 'Box collection not found', null);
      }

      const updatedBoxCollection = await prisma.boxCollection.update({
        where: { id: existing.id },
        data: {
          collectedBoxes,
        },
      });
      sendSuccessResponse(res, 200, 'Box collection updated successfully', updatedBoxCollection);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error updating box collection', error);
    }
  }

  async deleteBoxCollection(req: Request, res: Response) {
    try {
      const roleId = req.user?.roleId;
      const shopId = req.user?.shopId;
      const customerId = req.user?.customerId;

      if (!roleId || !shopId || !customerId) {
        return sendErrorResponse(res, 400, 'roleId, shopId, and customerId are required in token', null);
      }

      const existing = await prisma.boxCollection.findFirst({
        where: { roleId, shopId, customerId },
      });
      if (!existing) {
        return sendErrorResponse(res, 404, 'Box collection not found', null);
      }
      await prisma.boxCollection.delete({
        where: { id: existing.id },
      });
      sendSuccessResponse(res, 200, 'Box collection deleted successfully', null);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error deleting box collection', error);
    }
  }
}