import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils";
import jwt, { JwtPayload } from "jsonwebtoken";
export async function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  const se = process.env.SALT;
  if (!token) {
    return ApiResponse({ res, code: 404, message: "Token Not Found" });
  }
  if (se) {
    try {
        const docode = jwt.verify(token, se);
        console.log(docode);
        
      if (docode) {
        next();
      }
    } catch (error) {
      console.log(error);
      return ApiResponse({ res, code: 401, message: { error } });
    }
  }
}
