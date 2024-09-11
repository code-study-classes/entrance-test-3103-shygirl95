import { Router } from "express";
import hotelInfoController from "../controller/hotels.controller.js";

const router = new Router();

router.post('/hotel', hotelInfoController.createHotel);
// router.get('/hotel', hotelInfoController.getHotel)

export default router;