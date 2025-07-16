import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';

const prisma = new PrismaClient();

export class CustomerDetailsController {
  async createCustomerDetails(req: Request, res: Response) {
    try {
      const { shopId, name, mobileNumber, email, address } = req.body;

      // Validate required fields
      if (!shopId || !name || !mobileNumber || !address) {
        return sendErrorResponse(res, 400, 'shopId, name, mobileNumber, and address are required', null);
      }

      // Check if customer already exists by mobileNumber or email
      const existingCustomer = await prisma.customerDetails.findFirst({
        where: {
          OR: [
            { mobileNumber },
            { email }
          ]
        }
      });
      if (existingCustomer) {
        return sendErrorResponse(res, 409, 'Customer with this mobile number or email already exists', null);
      }

      const customerDetails = await prisma.customerDetails.create({ data: req.body });
      sendSuccessResponse(res, 201, 'Customer details created successfully', customerDetails);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to create customer details', error);
    }
  }

  async getCustomerDetails(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Customer ID is required', null);
      }
      const customerDetails = await prisma.customerDetails.findUnique({ where: { id: Number(id) } });
      if (!customerDetails) {
        return sendErrorResponse(res, 404, 'Customer details not found', null);
      }
      sendSuccessResponse(res, 200, 'Customer details retrieved successfully', customerDetails);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to retrieve customer details', error);
    }
  }

  async updateCustomerDetails(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { shopId, name, mobileNumber, email, address } = req.body;

      if (!id) {
        return sendErrorResponse(res, 400, 'Customer ID is required', null);
      }
      if (!shopId || !name || !mobileNumber || !address) {
        return sendErrorResponse(res, 400, 'shopId, name, mobileNumber, and address are required', null);
      }

      // Check if customer exists
      const customer = await prisma.customerDetails.findUnique({ where: { id: Number(id) } });
      if (!customer) {
        return sendErrorResponse(res, 404, 'Customer details not found', null);
      }

      // Check for duplicate mobileNumber/email (excluding current customer)
      const duplicateCustomer = await prisma.customerDetails.findFirst({
        where: {
          id: { not: Number(id) },
          OR: [
            { mobileNumber },
            { email }
          ]
        }
      });
      if (duplicateCustomer) {
        return sendErrorResponse(res, 409, 'Another customer with this mobile number or email already exists', null);
      }

      const customerDetails = await prisma.customerDetails.update({
        where: { id: Number(id) },
        data: req.body,
      });
      sendSuccessResponse(res, 200, 'Customer details updated successfully', customerDetails);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to update customer details', error);
    }
  }

  async deleteCustomerDetails(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Customer ID is required', null);
      }
      const customer = await prisma.customerDetails.findUnique({ where: { id: Number(id) } });
      if (!customer) {
        return sendErrorResponse(res, 404, 'Customer details not found', null);
      }
      await prisma.customerDetails.delete({ where: { id: Number(id) } });
      sendSuccessResponse(res, 200, 'Customer details deleted successfully', null);
    } catch (error) {
      sendErrorResponse(res, 500, 'Failed to delete customer details', error);
    }
  }
}