import Asha from "./asha";
import House from "./house";
import Member from "./member";
import Kid from "./kid";

import { Router } from "express";

const router = Router();
router.use("/asha", Asha);
router.use("/house", House);
router.use("/member", Member);
router.use("/kid", Kid);

export default router;
