import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils";
import jwt from "jsonwebtoken";
export async function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  const se = process.env.JWT_SECRETE;
  if (!token) {
    return ApiResponse({ res, code: 401, message: "Token Not Found" });
  }
  if (!se) {
    return ApiResponse({ res, code: 404, message: "Salt Not Found" });
  }
  try {
    const docode = jwt.verify(token, se);
    if (docode) {
      next();
    }
  } catch (error) {
    console.log(error);
    return ApiResponse({ res, code: 401, message: { error } });
  }
}
