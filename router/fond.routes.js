import { Router } from "express";
import fondController from "../controller/fond.controller";

const router = new Router();

router.post('/hotel', fondController.createFond);
router.get('/hotel', fondController.getFreeHotel);

export default router;