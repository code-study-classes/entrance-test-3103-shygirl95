import { Router } from "express";
import fondController from "../controller/fond.controller";

const router = new Router();

router.post('/hotel', fondController.createFond);
router.get('/hotel', fondController.getFreeHotel);
router.get('/hotel/:id', fondController.reverseStatus)

export default router;