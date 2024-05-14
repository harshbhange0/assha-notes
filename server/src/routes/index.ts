import Asha from "./asha";
import House from "./house";
import Member from "./member";
import Kid from "./kid";
import { Router } from "express";
import { auth } from "../middleware";

const router = Router();
router.use("/asha", Asha);
router.use("/house", auth, House);
router.use("/member", auth, Member);
router.use("/kid", auth, Kid);

export default router;
