import express from 'express'
import { create, getAll, payment } from '../controllers/orders.controller.js'
import protect from '../middlewares/Auth.js'

const OrderRouter = express.Router()

OrderRouter.post('/', protect, create)

OrderRouter.put('/:id/payment', protect, payment)

OrderRouter.get('/', protect, getAll)

export default OrderRouter