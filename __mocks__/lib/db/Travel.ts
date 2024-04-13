import {vi} from 'vitest'

import {DbTravel, Travel, TravelDB} from '@/lib/types'

export const travelMock: DbTravel = {
    id: '661a49333f09b9c7385bfa37',
    name: 'Travel Mock',
    description: 'Desc Mock',
    startDate: new Date(),
    endDate: new Date(),
}
export let travelsMock: DbTravel[] = [travelMock]

export const travelDB = {
    getList: vi.fn(async (name?: string) =>
        name ? travelsMock.filter((t) => t.name.startsWith(name)) : travelsMock,
    ),
    getById: vi.fn(
        async (id: string) => travelsMock.find((t) => t.id === id) ?? null,
    ),
    deleteById: vi.fn(async (id: string) => {
        travelsMock = travelsMock.filter((t) => t.id !== id)
    }),
    create: vi.fn(async (travel: Travel) => {
        const newTravel = {
            ...travel,
            id: '661a49333f09b9c7385bfa32',
        } satisfies DbTravel

        travelsMock.push(newTravel)

        return newTravel
    }),
} satisfies TravelDB
