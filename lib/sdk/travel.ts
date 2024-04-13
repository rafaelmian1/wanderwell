import {env} from '@/env'

import {travelDB as travelMongoDB} from '../mongo'
import {travelDB as travelPostgresDB} from '../pg'
import {Travel, TravelDB} from '../types'

export const makeTravelSdk = (travelDB: TravelDB) => ({
    getList: async (name?: string) => {
        const list = await travelDB.getList(name)

        return list
    },
    getById: async (id: string) => {
        const travel = await travelDB.getById(id)

        return travel
    },
    create: async (data: Travel) => {
        const created = await travelDB.create(data)

        return created
    },
    deleteById: async (id: string) => {
        await travelDB.deleteById(id)
    },
})

const travelDbProvider =
    env.DATABASE_PROVIDER === 'mongo' ? travelMongoDB : travelPostgresDB

export const travelSdk = makeTravelSdk(travelDbProvider)
