import { Router } from "express";
import roomController from "../controller/rooms.controller.js";

const router = new Router();

router.post('/room', roomController.createRoom);
router.get('/room', roomController.getFreeRoom);
router.get('/room/:id', roomController.reverseStatus)

export default router;