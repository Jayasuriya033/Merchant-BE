import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';

const prisma = new PrismaClient();

export class SalesDetailsController {
  async createSalesDetails(req: Request, res: Response) {
    try {
      const { roleId, shopId, customerId, soldBoxes, soldAmount, appliedDis, totalAmount } = req.body;

      // Validate required fields
      if (
        !roleId ||
        !shopId ||
        !customerId ||
        soldBoxes === undefined ||
        soldAmount === undefined ||
        appliedDis === undefined ||
        totalAmount === undefined
      ) {
        return sendErrorResponse(res, 400, 'All fields are required', null);
      }

      // Optionally check for duplicate sales record (if your business logic requires it)
      // Example: Check if a sales record for the same shop/customer/role already exists
      // const existing = await prisma.salesDetails.findFirst({ where: { shopId, customerId, roleId } });
      // if (existing) {
      //   return sendErrorResponse(res, 409, 'Sales record already exists for this shop, customer, and role', null);
      // }

      const salesDetails = await prisma.salesDetails.create({
        data: {
          roleId,
          shopId,
          customerId,
          soldBoxes,
          soldAmount,
          appliedDis,
          totalAmount,
        },
      });
      sendSuccessResponse(res, 201, 'Sales details created successfully', salesDetails);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error creating sales details', error);
    }
  }

  async getSalesDetails(req: Request, res: Response) {
    try {
      const salesDetails = await prisma.salesDetails.findMany();
      if (!salesDetails || salesDetails.length === 0) {
        return sendErrorResponse(res, 404, 'No sales details found', null);
      }
      sendSuccessResponse(res, 200, 'Sales details retrieved successfully', salesDetails);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error retrieving sales details', error);
    }
  }

  async updateSalesDetails(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { roleId, shopId, customerId, soldBoxes, soldAmount, appliedDis, totalAmount } = req.body;

      if (!id) {
        return sendErrorResponse(res, 400, 'Sales details ID is required', null);
      }
      if (
        !roleId ||
        !shopId ||
        !customerId ||
        soldBoxes === undefined ||
        soldAmount === undefined ||
        appliedDis === undefined ||
        totalAmount === undefined
      ) {
        return sendErrorResponse(res, 400, 'All fields are required', null);
      }

      // Check if sales details exist
      const existing = await prisma.salesDetails.findUnique({ where: { id: Number(id) } });
      if (!existing) {
        return sendErrorResponse(res, 404, 'Sales details not found', null);
      }

      const salesDetails = await prisma.salesDetails.update({
        where: { id: Number(id) },
        data: {
          roleId,
          shopId,
          customerId,
          soldBoxes,
          soldAmount,
          appliedDis,
          totalAmount,
        },
      });
      sendSuccessResponse(res, 200, 'Sales details updated successfully', salesDetails);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error updating sales details', error);
    }
  }

  async deleteSalesDetails(req: Request, res: Response) {
    const { id } = req.params;
    try {
      if (!id) {
        return sendErrorResponse(res, 400, 'Sales details ID is required', null);
      }
      const existing = await prisma.salesDetails.findUnique({ where: { id: Number(id) } });
      if (!existing) {
        return sendErrorResponse(res, 404, 'Sales details not found', null);
      }
      await prisma.salesDetails.delete({
        where: { id: Number(id) },
      });
      sendSuccessResponse(res, 200, 'Sales details deleted successfully', null);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error deleting sales details', error);
    }
  }
}