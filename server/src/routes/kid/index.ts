import { Router } from "express";

const router = Router();

router.post("create");
router.put("update");
router.put("add-parent");
router.delete("delete");
router.get("get-kid")
export default router;
