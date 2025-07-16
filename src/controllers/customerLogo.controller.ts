import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';

const prisma = new PrismaClient();

export class CustomerLogoController {
  async createCustomerLogo(req: Request, res: Response) {
    try {
      const { roleId, shopId, customerId, fileName, filePath } = req.body;

      // Validate required fields
      if (!roleId || !shopId || !customerId || !fileName || !filePath) {
        return sendErrorResponse(res, 400, 'roleId, shopId, customerId, fileName, and filePath are required', null);
      }

      // Check if logo already exists for this customer and fileName
      const existingLogo = await prisma.customerLogo.findFirst({
        where: { customerId, fileName }
      });
      if (existingLogo) {
        return sendErrorResponse(res, 409, 'Customer logo with this file name already exists for this customer', null);
      }

      const newCustomerLogo = await prisma.customerLogo.create({
        data: {
          roleId,
          shopId,
          customerId,
          fileName,
          filePath,
        },
      });
      sendSuccessResponse(res, 201, 'Customer logo created successfully', newCustomerLogo);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to create customer logo', error);
    }
  }

  async getCustomerLogo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Customer logo ID is required', null);
      }
      const customerLogo = await prisma.customerLogo.findUnique({
        where: { id: Number(id) },
      });
      if (!customerLogo) {
        return sendErrorResponse(res, 404, 'Customer logo not found', null);
      }
      sendSuccessResponse(res, 200, 'Customer logo retrieved successfully', customerLogo);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to retrieve customer logo', error);
    }
  }

  async updateCustomerLogo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { roleId, shopId, customerId, fileName, filePath } = req.body;

      if (!id) {
        return sendErrorResponse(res, 400, 'Customer logo ID is required', null);
      }
      if (!roleId || !shopId || !customerId || !fileName || !filePath) {
        return sendErrorResponse(res, 400, 'roleId, shopId, customerId, fileName, and filePath are required', null);
      }

      // Check if logo exists
      const customerLogo = await prisma.customerLogo.findUnique({ where: { id: Number(id) } });
      if (!customerLogo) {
        return sendErrorResponse(res, 404, 'Customer logo not found', null);
      }

      // Check for duplicate fileName for this customer (excluding current logo)
      const duplicateLogo = await prisma.customerLogo.findFirst({
        where: {
          customerId,
          fileName,
          id: { not: Number(id) }
        }
      });
      if (duplicateLogo) {
        return sendErrorResponse(res, 409, 'Another customer logo with this file name already exists for this customer', null);
      }

      const updatedCustomerLogo = await prisma.customerLogo.update({
        where: { id: Number(id) },
        data: {
          roleId,
          shopId,
          customerId,
          fileName,
          filePath,
        },
      });
      sendSuccessResponse(res, 200, 'Customer logo updated successfully', updatedCustomerLogo);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to update customer logo', error);
    }
  }

  async deleteCustomerLogo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Customer logo ID is required', null);
      }
      const customerLogo = await prisma.customerLogo.findUnique({ where: { id: Number(id) } });
      if (!customerLogo) {
        return sendErrorResponse(res, 404, 'Customer logo not found', null);
      }
      await prisma.customerLogo.delete({
        where: { id: Number(id) },
      });
      sendSuccessResponse(res, 200, 'Customer logo deleted successfully', null);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to delete customer logo', error);
    }
  }
}