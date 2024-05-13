import { Router } from "express";

const router = Router();

router.post("create");
router.put("update");
router.put("add-members");
router.delete("delete");

export default router;
