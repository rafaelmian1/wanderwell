import {eq} from 'drizzle-orm'
import {date, pgTable, text, uuid, varchar} from 'drizzle-orm/pg-core'

import {parseDbTravel, Travel, TravelDB} from '../types'
import {getConnection} from './connection'

export const travels = pgTable('travels', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name'),
    description: varchar('description', {length: 256}),
    startDate: date('startDate', {mode: 'string'}),
    endDate: date('endDate', {mode: 'string'}),
})

const dateToString = (date: Date | string) => new Date(date).toISOString()

const getTravelDto = (travel: Travel) => {
    const {startDate, endDate} = travel

    if (!startDate || !endDate) {
        throw 'Error: missing start date or end date'
    }

    return {
        ...travel,
        startDate: dateToString(startDate),
        endDate: dateToString(endDate),
    }
}

export const travelDB: TravelDB = {
    getList: async (name?: string) => {
        const db = getConnection()
        const list = await db!
            .select()
            .from(travels)
            .where(name ? eq(travels.name, name) : undefined)

        return list.map(parseDbTravel)
    },
    getById: async (id: string) => {
        const db = getConnection()
        const travel = await db!
            .select()
            .from(travels)
            .where(eq(travels.id, id))

        if (!travel) return null

        return parseDbTravel(travel[0])
    },
    create: async (data: Travel) => {
        const db = getConnection()!
        const travelData = getTravelDto(data)
        const travel = await db.insert(travels).values(travelData).returning()

        return parseDbTravel(travel[0])
    },
    deleteById: async (id: string) => {
        const db = getConnection()
        await db!.delete(travels).where(eq(travels.id, id))
    },
}
