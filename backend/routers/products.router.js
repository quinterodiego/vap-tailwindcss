import { Router } from 'express'
import { getAll, getById } from '../controllers/products.controller.js'

const ProductRouter = Router()

ProductRouter.get('/', getAll)

ProductRouter.get('/:id', getById)

export default ProductRouter