import { Router } from "express";
import fondController from "../controller/fond.controller";

const router = new Router();

router.post('/hotel', fondController.createHotel);
router.get('/hotel', fondController.getHotel)

export default router;