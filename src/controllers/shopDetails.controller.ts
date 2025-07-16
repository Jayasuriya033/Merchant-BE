import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createShopDetails(req: Request, res: Response) {
  try {
    const {
      shopName,
      shortName,
      mobileNumber,
      email,
      address,
      subscriptionStatus,
    } = req.body;

    console.log(req.body);
    
    if (
      !shopName ||
      !mobileNumber ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "shopName, mobileNumber, address, and subscriptionStatus are required",
        data: null,
      });
    }

    const existingShop = await prisma.shopDetails.findFirst({
      where: { mobileNumber },
    });
    if (existingShop) {
      return res.status(409).json({
        success: false,
        message: "Shop with this mobile number already exists",
        data: null,
      });
    }

    const newShop = await prisma.shopDetails.create({
      data: {
        shopName,
        shortName,
        mobileNumber,
        email,
        address,
        subscriptionStatus: false,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Shop created successfully",
      data: newShop,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create shop",
      error: error instanceof Error ? error.message : error,
    });
  }
}

export async function getShopDetails(req: Request, res: Response) {
  try {
    const shopId = parseInt(req.params.id);
    if (!shopId) {
      return res.status(400).json({
        success: false,
        message: "Shop ID is required",
        data: null,
      });
    }
    const shop = await prisma.shopDetails.findUnique({
      where: { id: shopId },
    });
    if (!shop) {
      return res.status(404).json({
        success: false,
        message: "Shop not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Shop details retrieved successfully",
      data: shop,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving shop details",
      error: error instanceof Error ? error.message : error,
    });
  }
}

export async function updateShopDetails(req: Request, res: Response) {
  try {
    const shopId = parseInt(req.params.id);
    const {
      shopName,
      shortName,
      mobileNumber,
      email,
      address,
      subscriptionStatus,
    } = req.body;

    if (!shopId) {
      return res.status(400).json({
        success: false,
        message: "Shop ID is required",
        data: null,
      });
    }
    if (
      !shopName ||
      !mobileNumber ||
      !address ||
      subscriptionStatus === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "shopName, mobileNumber, address, and subscriptionStatus are required",
        data: null,
      });
    }

    const shop = await prisma.shopDetails.findUnique({
      where: { id: shopId },
    });
    if (!shop) {
      return res.status(404).json({
        success: false,
        message: "Shop not found",
        data: null,
      });
    }

    const duplicateShop = await prisma.shopDetails.findFirst({
      where: {
        id: { not: shopId },
        OR: [{ shopName }, { mobileNumber }],
      },
    });
    if (duplicateShop) {
      return res.status(409).json({
        success: false,
        message: "Another shop with this name or mobile number already exists",
        data: null,
      });
    }

    const updatedShop = await prisma.shopDetails.update({
      where: { id: shopId },
      data: {
        shopName,
        shortName,
        mobileNumber,
        email,
        address,
        subscriptionStatus,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Shop updated successfully",
      data: updatedShop,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating shop details",
      error: error instanceof Error ? error.message : error,
    });
  }
}

export async function deleteShopDetails(req: Request, res: Response) {
  try {
    const shopId = parseInt(req.params.id);
    if (!shopId) {
      return res.status(400).json({
        success: false,
        message: "Shop ID is required",
        data: null,
      });
    }
    const shop = await prisma.shopDetails.findUnique({
      where: { id: shopId },
    });
    if (!shop) {
      return res.status(404).json({
        success: false,
        message: "Shop not found",
        data: null,
      });
    }
    await prisma.shopDetails.delete({
      where: { id: shopId },
    });
    return res.status(200).json({
      success: true,
      message: "Shop deleted successfully",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting shop details",
      error: error instanceof Error ? error.message : error,
    });
  }
}
