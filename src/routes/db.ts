import { MongoClient } from 'mongodb'
import 'dotenv/config'
const uri = process.env.MONGO_URI

if (!uri) {
  throw new Error('MONGO_URI no está definido en el archivo .env')
}

const client = new MongoClient(uri)
let dbInstance: Awaited<ReturnType<typeof client.db>> | null = null

export async function connectDB() {
    if (!dbInstance) {
      await client.connect()
      dbInstance = client.db('cluster0.a67ex4n.mongodb.net')
    }
    return dbInstance
}