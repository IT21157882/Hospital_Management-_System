import express from 'express';
import { addNewOrder} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/', addNewOrder);

export default orderRouter;