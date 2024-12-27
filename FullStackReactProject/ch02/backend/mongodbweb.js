import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'
const dbName = 'ch02'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Connected to MongoDB')
} catch (err) {
  console.error('Error connecting to database', err)
}

const server = createServer(async (req, res) => {
  const db = client.db(dbName)
  const users = db.collection('users')
  const userList = await users.find().toArray()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(userList))
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
