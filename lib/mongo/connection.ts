import mongoose from 'mongoose'

import {env} from '@/env'

export const connectMongoDB = async () => {
    try {
        if (env.DATABASE_PROVIDER !== 'mongo') return
        await mongoose.connect(env.MONGODB_URI)
        console.log('Connection to MongoDB succeed')
    } catch (error) {
        console.log('Connection to MongoDB failed\n', error)
        process.exit(1)
    }
}
