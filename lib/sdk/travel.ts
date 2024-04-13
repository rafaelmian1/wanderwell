import {travelDB} from '../db'
import {Travel, TravelDB} from '../types'

export const makeTravelSdk = (travelDB: TravelDB) => ({
    getList: async (name?: string): Promise<Travel[]> => {
        const list = await travelDB.getList(name)

        return list
    },
    getById: async (id: string): Promise<Travel | null> => {
        const travel = await travelDB.getById(id)

        return travel
    },
    create: async (data: Omit<Travel, '_id'>): Promise<Travel> => {
        const created = await travelDB.create(data)

        return created
    },
    deleteById: async (id: string) => {
        await travelDB.deleteById(id)
    },
})

export const travelSdk = makeTravelSdk(travelDB)
