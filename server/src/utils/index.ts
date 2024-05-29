import { ApiResponseProps } from "../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export function ApiResponse({ res, code, message }: ApiResponseProps) {
  res.json({ message }).status(code);
}

export function generateHashPassword(rowPassword: string) {
  const se = process.env.SALT;
  if (!se) {
    throw new Error("JWT_SECRETE not found");
  }

  const value = bcrypt.hashSync(rowPassword, 12);
  return value;
}
export async function comparePassword(
  hashPassword: string,
  rowPassword: string
) {
  const value = await bcrypt.compare(rowPassword, hashPassword);
  return value;
}
export function generateToken(data: object | string) {
  const se = process.env.JWT_SECRETE;
  if (!se) {
    throw new Error("JWT_SECRETE not found");
  }
  const value = jwt.sign(data, se, {
    expiresIn: "10h",
  });
  return value;
}
