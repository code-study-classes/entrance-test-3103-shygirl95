import { Router } from "express";
import hotelInfoController from "../controller/hotelInfo.controller.js";

const router = new Router();

router.post('/hotel', hotelInfoController.createHotel);
router.get('/hotel', hotelInfoController.getHotel)

export default router;