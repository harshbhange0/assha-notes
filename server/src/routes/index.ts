import Asha from "./asha";
import House from "./house";
import Member from "./member";
import Kid from "./kid";
import { Request, Response, Router } from "express";
import { auth } from "../middleware";
import { ApiResponse } from "../utils";

const router = Router();
router.use("/asha", Asha);
router.use("/house", auth, House);
router.use("/member", auth, Member);
router.use("/kid", auth, Kid);
router.get("/auth-check", auth, (req: Request, res: Response) => {
  return ApiResponse({ res, code: 200, message: { auth: true } });
});

export default router;
