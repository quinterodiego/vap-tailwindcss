import AsyncHandler from 'express-async-handler'
import OrderModel from '../models/Order.model.js'

// CREATE
export const create = AsyncHandler(async(req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymnentMethods,
    shippingPrice,
    taxPrice,
    totalPrice,
    price
  } = req.body
  console.log(req.user)
  if(orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items found')
  } else {
    const order = new OrderModel({
      orderItems,
      shippingAddress,
      paymnentMethods,
      shippingPrice,
      taxPrice,
      totalPrice,
      price,
      user: req.user._id
    })

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

// PAYMENT
export const payment = AsyncHandler(async(req, res) => {
  const order = await OrderModel.findById(req.params.id)
  if(order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      updated_time: req.body.updated_time,
      email_address: req.body.email_address
    }

    const updateOrder = await order.save()
    res.status(200).json(updateOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// GET ORDERS
export const getAll = AsyncHandler(async(req, res) => {
  const orders = await OrderModel.find({ user: req.user._id }).sort({ _id: -1 })
  if(orders) {
    res.status(200).json(orders)
  } else {
    res.status(404)
    throw new Error('Orders not found')
  }
})