import 'dotenv/config'
import express from 'express'

import { MongoDBConnection } from './utils/dbConnect.js'

const app = express()
const PORT = process.env.PORT || 4000

MongoDBConnection()

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))