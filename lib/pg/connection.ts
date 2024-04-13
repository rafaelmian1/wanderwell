import {drizzle} from 'drizzle-orm/node-postgres'
import {Pool} from 'pg'

import {env} from '@/env'

export const getConnection = () => {
    if (env.DATABASE_PROVIDER !== 'postgres') return

    const pool = new Pool({
        connectionString: env.POSTGRES_URI,
    })

    return drizzle(pool)
}
