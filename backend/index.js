import 'dotenv/config'
import express from 'express'

import { MongoDBConnection } from './utils/dbConnect.js'
import ProductRouter from './routers/products.router.js'
import RouterSeeder from './databaseSeeder.js'
import UserRouter from './routers/users.router.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)

MongoDBConnection()

app.use('/api/seed', RouterSeeder)

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))