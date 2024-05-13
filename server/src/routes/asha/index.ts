import { Router } from "express";
import { Log_In, Me, Register } from "../../controller/asha";

const router = Router();

router.post("log-in",Log_In);
router.post("register",Register);
router.post("me",Me);

router.get("my-house");
export default router;
