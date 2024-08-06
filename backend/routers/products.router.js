import { Router } from 'express'

const ProductRouter = Router()

ProductRouter.get('/', async (req, res) => {
  res.json({})
})

ProductRouter.get('/:id', async (req, res) => {
  const product = products.find(produc =>  product.id === req.params.id)
  res.json(product)
})