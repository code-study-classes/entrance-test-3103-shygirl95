import express from 'express'
import routerHotel from './router/hotelInfo.routes.js'
import fondController from './controller/fond.controller.js'

const PORT = 3000

const app = express();

app.use(express.json());
app.use('/api', routerHotel);
app.use('/api', fondController);

app.listen(PORT, () => console.log(`server start on Port: ${PORT}`));
