import mongoose from 'mongoose'

export function initDatabase() {
  const DATABASE_URL = process.env.DATABASE_URL //'mongodb://localhost:27017/blog'
  mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB')
  })

  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
