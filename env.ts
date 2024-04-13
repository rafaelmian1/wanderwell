import {z} from 'zod'

export const commontEnvVariables = z.object({})

export const mongoEnvVariables = z.object({
    DATABASE_PROVIDER: z.literal('mongo'),
    MONGODB_URI: z.string(),
})

export const postgresEnvVariables = z.object({
    DATABASE_PROVIDER: z.literal('postgres'),
    POSTGRES_URI: z.string(),
})

const defaultEnv = {
    DATABASE_PROVIDER: 'mongo',
    MONGODB_URI: 'mongodb://mongo/wanderwell',
    POSTGRES_URI: 'postgres://postgres:postgres@postgres:5432/postgres',
}

export const databaseProvider = process.env.DATABASE_PROVIDER ?? 'mongo'

const envVariables = commontEnvVariables.and(
    databaseProvider === 'mongo' ? mongoEnvVariables : postgresEnvVariables,
)

export const env = envVariables.parse({...defaultEnv, ...process.env})
