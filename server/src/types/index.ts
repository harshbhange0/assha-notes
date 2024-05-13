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
