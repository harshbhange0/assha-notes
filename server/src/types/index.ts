import { z } from "zod";
import { Response } from "express";

export const AshaZodSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export type AshaInputTypes = z.infer<typeof AshaZodSchema>;
type ApiResponseMessageTypes = string | object | true | false | undefined;
export interface ApiResponseProps {
  res: Response;
  code: number;
  message: ApiResponseMessageTypes;
}

export const createHouseZodSchema = z.object({
  name: z.string(),
  address: z.string(),
  ashaId: z.string(),
});
export const updateHouseZodSchema = z.object({
  totalMember: z.number(),
  femaleMember: z.number(),
  maleMember: z.number(),
});
export const updateHouseMembersZodSchema = z.object({
  id:z.string(),
  members: z.array(z.string()),
});

export const createAMemberZodSchema = z.object({
  name: z.string(),
  ashaId: z.string(),
  age: z.number(),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  dob: z.date(),
});
export const updateAMemberZodSchema = z.object({
  isHead: z.boolean().default(false),
  isHeadWife: z.boolean().default(false),
  isMarried: z.boolean().default(false),
  isHusband: z.boolean().default(false),
  isWife: z.boolean().default(false),
});
export const updateAMembersChildZodSchema = z.object({
  child: z.array(z.string()),
});

export const createChildZodSchema = z.object({
  name: z.string(),
  ashaId: z.string(),
  age: z.number(),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  dob: z.date(),
});
export const updateChildZodSchema = z.object({
  age: z.string(),
});
export const updateChildParentZodSchema = z.object({
  parent: z.array(z.string()),
});
