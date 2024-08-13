import 'dotenv/config'
import { connect } from 'mongoose'

export const MongoDBConnection = async () => {
  try {
    await connect(process.env.MONGO_URI)
    console.log('Base de datos conectada!')
  } catch (error) {
    console.log('Error al conectarse a la base de datos', error)
  }
}