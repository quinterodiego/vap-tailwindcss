import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: { type: String, require: true },
  rating: { type: Number, require: true },
  comment: { type: String, require: true },
  // user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User' }
})

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true, defult: 0 },
  numReviews: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, defult: 0 },
  stock: { type: Number, required: true, defult: 0 },
  reviews: []
})