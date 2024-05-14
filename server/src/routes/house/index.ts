import { Router } from "express";
import {
  createHouse,
  getHouse,
  updateHouseMember,
} from "../../controller/house";

const router = Router();

router.post("create", createHouse);
router.get("get", getHouse);
router.put("add-members", updateHouseMember);

export default router;
