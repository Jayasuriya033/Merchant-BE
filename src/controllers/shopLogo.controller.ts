import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';

const prisma = new PrismaClient();


  export async function createShopLogo(req: Request, res: Response) {
    try {
      const { shopId, fileName, filePath } = req.body;

      if (!shopId || !fileName || !filePath) {
        return sendErrorResponse(res, 400, 'All fields are required', null);
      }

      const existingLogo = await prisma.shopLogo.findFirst({
        where: { shopId, fileName }
      });
      if (existingLogo) {
        return sendErrorResponse(res, 409, 'Shop logo with this file name already exists for this shop', null);
      }

      const newShopLogo = await prisma.shopLogo.create({
        data: { shopId, fileName, filePath },
      });
      sendSuccessResponse(res, 201, 'Shop logo created successfully', newShopLogo);
    } catch (error) {
      console.log(error);
      
      sendErrorResponse(res, 500, 'Error creating shop logo', error);
    }
  }

export async function  getShopLogo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Shop logo ID is required', null);
      }
      const shopLogo = await prisma.shopLogo.findUnique({
        where: { id: Number(id) },
      });
      if (!shopLogo) {
        return sendErrorResponse(res, 404, 'Shop logo not found', null);
      }
      sendSuccessResponse(res, 200, 'Shop logo retrieved successfully', shopLogo);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error retrieving shop logo', error);
    }
  }

 export async function  updateShopLogo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { shopId, fileName, filePath } = req.body;

      if (!id) {
        return sendErrorResponse(res, 400, 'Shop logo ID is required', null);
      }
      if (!shopId || !fileName || !filePath) {
        return sendErrorResponse(res, 400, 'All fields are required', null);
      }

      const shopLogo = await prisma.shopLogo.findUnique({ where: { id: Number(id) } });
      if (!shopLogo) {
        return sendErrorResponse(res, 404, 'Shop logo not found', null);
      }

      const duplicateLogo = await prisma.shopLogo.findFirst({
        where: {
          shopId,
          fileName,
          id: { not: Number(id) }
        }
      });
      if (duplicateLogo) {
        return sendErrorResponse(res, 409, 'Another shop logo with this file name already exists for this shop', null);
      }

      const updatedShopLogo = await prisma.shopLogo.update({
        where: { id: Number(id) },
        data: { shopId, fileName, filePath },
      });
      sendSuccessResponse(res, 200, 'Shop logo updated successfully', updatedShopLogo);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error updating shop logo', error);
    }
  }

  export async function deleteShopLogo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Shop logo ID is required', null);
      }
      const shopLogo = await prisma.shopLogo.findUnique({ where: { id: Number(id) } });
      if (!shopLogo) {
        return sendErrorResponse(res, 404, 'Shop logo not found', null);
      }
      await prisma.shopLogo.delete({
        where: { id: Number(id) },
      });
      sendSuccessResponse(res, 200, 'Shop logo deleted successfully', null);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error deleting shop logo', error);
    }
  }
