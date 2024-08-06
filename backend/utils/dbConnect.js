import 'dotenv/config'
import { connect } from 'mongoose'

export const MongoDBConnection = async () => {
  try {
    await connect('mongodb+srv://d86webs:Riquelme001@cluster0.dbs7lkk.mongodb.net/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Base de datos conectada!')
  } catch (error) {
    console.log('Error al conectarse a la base de datos', error)
  }
}