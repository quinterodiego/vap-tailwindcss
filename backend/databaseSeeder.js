import { Router } from 'express'
import AsyncHandler from 'express-async-handler'
import UserModel from './models/User.model.js'
import { usersData } from './data/users.data.js'
import ProductModel from './models/Product.model.js'
import { productsData } from './data/products.data.js'

const RouterSeeder = Router()

RouterSeeder.post('/users', AsyncHandler(async(req, res) => {
  await UserModel.deleteMany({})
  const UserSeeder = await UserModel.insertMany(usersData)

  res.send({ UserSeeder })
}))

RouterSeeder.post('/products', AsyncHandler(async(req, res) => {
  await ProductModel.deleteMany({})
  const ProductSeeder = await ProductModel.insertMany(productsData)

  res.send({ ProductSeeder })
}))

export default RouterSeeder