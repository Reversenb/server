
import mongoose from "mongoose"
import { file } from "bun"
import { connect } from "bun"

const username = Bun.env.MONGO_DB_USERNAME || 'your-username'
const password = Bun.env.MONGO_DB_PASSWORD || 'your-password'
const db_name = Bun.env.MONGO_DB_NAME || 'tinner_class_example'

const uri = `mongodb+srv://${username}:${password}@reverse.3rrz3.mongodb.net/?retryWrites=true&w=majority&appName=${db_name}`

export const MongoDB = {
    connect: async function () {
        try {
            await mongoose.connect(uri)
            console.log('----- MongoDB connected -----')

        } catch (error) {
            console.error('----- MongoDB connection error -----')
            console.error(error)



        }
    }
}