import AsyncHandler from 'express-async-handler'
import ProductModel from "../models/Product.model.js";

export const getAll = AsyncHandler(async (_, res) => {
  const products = await ProductModel.find({})
  if(products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
})

export const getById = AsyncHandler(async (req, res) => {
  const id = req.params.id
  const product = await ProductModel.findById(id)
  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})