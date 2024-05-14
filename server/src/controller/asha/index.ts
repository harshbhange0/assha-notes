import { Request, Response } from "express";
import { AshaZodSchema } from "../../types";
import {
  ApiResponse,
  comparePassword,
  generateHashPassword,
  generateToken,
} from "../../utils";
import db from "../../db";
export async function Register(req: Request, res: Response) {
  const parsInput = AshaZodSchema.safeParse(req.body);
  if (!parsInput.success) {
    return ApiResponse({ res, code: 200, message: "Unable to parse Input" });
  }
  try {
    const exAsha = await db.asha.findFirst({
      where: {
        name: parsInput.data.name,
      },
    });
    if (exAsha) {
      return ApiResponse({
        res,
        code: 200,
        message: "Asha Already Registered Log In",
      });
    }
    const hashPassword = generateHashPassword(parsInput.data.password);
    const newAsha = await db.asha.create({
      data: { name: parsInput.data.name, password: hashPassword },
    });
    const token = generateToken({ id: newAsha.id, name: newAsha.name });
    if (!token) {
      return ApiResponse({
        res,
        code: 401,
        message: "Unable to Create Auth Token",
      });
    }
    if (!newAsha.id) {
      return ApiResponse({ res, code: 401, message: "Unable to Register" });
    }
    return ApiResponse({ res, code: 200, message: { token, id: newAsha.id } });
  } catch (error) {
    console.trace(error);
    return ApiResponse({
      res,
      code: 200,
      message: "Something Went wrong in controller/asha/index.ts:39:1",
    });
  }
}
export async function Log_In(req: Request, res: Response) {
  const parsInput = AshaZodSchema.safeParse(req.body);
  if (!parsInput.success) {
    return ApiResponse({ res, code: 200, message: "Unable to parse Input" });
  }
  try {
    const asha = await db.asha.findFirst({
      where: { name: parsInput.data.name },
    });
    if (!asha) {
      return ApiResponse({ res, code: 404, message: "Asha Not found" });
    }
    const isPasswordCorrect = await comparePassword(
      asha.password,
      parsInput.data.password
    );
    if (!isPasswordCorrect) {
      return ApiResponse({ res, code: 401, message: "Password Not Correct" });
    }
    const token = generateToken({ id: asha.id, name: asha.name });

    if (!token) {
      return ApiResponse({
        res,
        code: 200,
        message: "unable to generate token",
      });
    }
    return ApiResponse({ res, code: 200, message: { token, id: asha.id } });
  } catch (error) {
    console.trace(error);
    return ApiResponse({
      res,
      code: 200,
      message: "Something Went wrong in controller/asha/index.ts:82:1",
    });
  }
}
export async function Me(req: Request, res: Response) {
  try {
    const asha = await db.asha.findFirst({
      where: { name: req.body.name },
    });

    if (!asha?.id) {
      return ApiResponse({ res, code: 404, message: "Asha Not found" });
    }
    return ApiResponse({ res, code: 200, message: { asha } });
  } catch (error) {
    console.trace(error);
    return ApiResponse({
      res,
      code: 200,
      message: "Something Went wrong in controller/asha/index.ts:101:1",
    });
  }
}
