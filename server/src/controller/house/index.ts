import { Request, Response } from "express";
import db from "../../db";
import { createHouseZodSchema, updateHouseMembersZodSchema } from "../../types";
import { ApiResponse } from "../../utils";

export async function createHouse(req: Request, res: Response) {
  const parsInput = createHouseZodSchema.safeParse(req.body);
  if (!parsInput.success) {
    return ApiResponse({ res, code: 200, message: { error: parsInput.error } });
  }
  try {
    const exHouse = await db.house.findUnique({
      where: { name: parsInput.data.name },
    });
    if (exHouse?.id) {
      return ApiResponse({
        res,
        code: 200,
        message: "This Named House Allday Exist",
      });
    }
    const { address, ashaId, name } = parsInput.data;
    const newHouse = await db.house.create({
      data: {
        address,
        ashaId,
        name,
      },
    });
    if (!newHouse.id) {
      return ApiResponse({ res, code: 401, message: "unable to create House" });
    }
    return ApiResponse({ res, code: 200, message: { house: newHouse } });
  } catch (error) {
    console.trace(error);
    return ApiResponse({
      res,
      code: 401,
      message: "Something Went wrong in  controller/house/index.ts:34:0",
    });
  }
}

export async function updateHouseMember(req: Request, res: Response) {
  const parsInput = updateHouseMembersZodSchema.safeParse(req.body);
  if (!parsInput.success) {
    return ApiResponse({ res, code: 200, message: { error: parsInput.error } });
  }
  try {
    const manyMembers = await db.members.findMany({
      where: { id: { in: parsInput.data.members } },
    });
    if (!manyMembers[0].id) {
      return ApiResponse({ res, code: 404, message: "unable to Find Members" });
    }
    const update = await db.house.update({
      where: { id: parsInput.data.id },
      data: {
        members: {
          set: manyMembers,
        },
      },
    });
    if (!update) {
      return ApiResponse({
        res,
        code: 401,
        message: "unable to update House member",
      });
    }
    return ApiResponse({ res, code: 200, message: "House Members Update" });
  } catch (error) {
    console.trace(error);
    return ApiResponse({
      res,
      code: 401,
      message: "Something Went wrong in  controller/house/index.ts:74:0",
    });
  }
}
export async function getHouse(req: Request, res: Response) {
  const id = req.body.id;
  try {
    const house = await db.house.findUnique({ where: { id } });
    if (!house?.id) {
      return ApiResponse({ res, code: 404, message: "House Not Found" });
    }
    return ApiResponse({ res, code: 200, message: { house } });
  } catch (error) {
    console.trace(error);
    return ApiResponse({
      res,
      code: 401,
      message: "Something Went wrong in  controller/house/index.ts:98:0",
    });
  }
}
