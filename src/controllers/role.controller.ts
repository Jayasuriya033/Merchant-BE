import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendSuccessResponse } from '../responses/successResponse';
import { sendErrorResponse } from '../responses/errorResponse';

const prisma = new PrismaClient();

export class RoleController {
  async createRole(req: Request, res: Response) {
    try {
      const { shopId, name, mobileNumber, roleName, access } = req.body;

      // Validate required fields
      if (!shopId || !name || !mobileNumber || !roleName || !access) {
        return sendErrorResponse(res, 400, 'shopId, name, mobileNumber, roleName, and access are required', null);
      }

      // Check if role already exists for this shop and roleName
      const existingRole = await prisma.role.findFirst({
        where: { shopId, roleName }
      });
      if (existingRole) {
        return sendErrorResponse(res, 409, 'Role with this name already exists for this shop', null);
      }

      const newRole = await prisma.role.create({
        data: {
          shopId,
          name,
          mobileNumber,
          roleName,
          access,
        },
      });
      sendSuccessResponse(res, 201, 'Role created successfully', newRole);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error creating role', error);
    }
  }

  async getRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Role ID is required', null);
      }
      const role = await prisma.role.findUnique({
        where: { id: Number(id) },
      });
      if (!role) {
        return sendErrorResponse(res, 404, 'Role not found', null);
      }
      sendSuccessResponse(res, 200, 'Role retrieved successfully', role);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error retrieving role', error);
    }
  }

  async updateRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { shopId, name, mobileNumber, roleName, access } = req.body;

      if (!id) {
        return sendErrorResponse(res, 400, 'Role ID is required', null);
      }
      if (!shopId || !name || !mobileNumber || !roleName || !access) {
        return sendErrorResponse(res, 400, 'shopId, name, mobileNumber, roleName, and access are required', null);
      }

      // Check if role exists
      const role = await prisma.role.findUnique({ where: { id: Number(id) } });
      if (!role) {
        return sendErrorResponse(res, 404, 'Role not found', null);
      }

      // Check for duplicate roleName for this shop (excluding current role)
      const duplicateRole = await prisma.role.findFirst({
        where: {
          shopId,
          roleName,
          id: { not: Number(id) }
        }
      });
      if (duplicateRole) {
        return sendErrorResponse(res, 409, 'Another role with this name already exists for this shop', null);
      }

      const updatedRole = await prisma.role.update({
        where: { id: Number(id) },
        data: {
          shopId,
          name,
          mobileNumber,
          roleName,
          access,
        },
      });
      sendSuccessResponse(res, 200, 'Role updated successfully', updatedRole);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error updating role', error);
    }
  }

  async deleteRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return sendErrorResponse(res, 400, 'Role ID is required', null);
      }
      const role = await prisma.role.findUnique({ where: { id: Number(id) } });
      if (!role) {
        return sendErrorResponse(res, 404, 'Role not found', null);
      }
      await prisma.role.delete({
        where: { id: Number(id) },
      });
      sendSuccessResponse(res, 200, 'Role deleted successfully', null);
    } catch (error) {
      sendErrorResponse(res, 500, 'Error deleting role', error);
    }
  }
}