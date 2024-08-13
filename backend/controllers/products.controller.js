import ProductModel from "../models/Product.model.js";

export const getAll = async (req, res) => {
  try {
    const products = await ProductModel.find({})
    res.json({products})
  } catch (error) {
    console.log(error)
  }
}

export const getById = async (req, res) => {
  try {
    const id = req.body.id
    const products = await ProductModel.find({})
    res.json({products})
  } catch (error) {
    console.log(error)
  }
}