import mongoose from 'mongoose'

import {env} from '@/env'

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(env.MONGODB_URI)
        console.log('Connection to MongoDB succeed')
    } catch (error) {
        console.log('Connection to MongoDB failed\n', error)
        process.exit(1)
    }
}
