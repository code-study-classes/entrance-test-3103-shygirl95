import express from 'express';
const router = express.Router();
import hotelController from '../controller/hotel.controller';


router.post('/post', hotelController.createPost)
router.get('/post', hotelController.getPostsByUsers)

module.exports = router