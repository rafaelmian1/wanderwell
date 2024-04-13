import {defineConfig} from 'drizzle-kit'

import {env} from './env'

if (env.DATABASE_PROVIDER !== 'postgres') {
    process.exit(1)
}

export default defineConfig({
    dialect: 'postgresql',
    schema: ['./lib/pg/Travel.ts'],
    out: './lib/pg/drizzle',
    dbCredentials: {
        url: env.POSTGRES_URI,
    },
})
