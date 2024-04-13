import {z} from 'zod'

export const envVariables = z.object({
    MONGODB_URI: z.string(),
})

const defaultEnv = {
    MONGODB_URI: 'mongodb://mongo/wanderwell',
}

export const env = envVariables.parse({...defaultEnv, ...process.env})
