import {vi} from 'vitest'

import {Travel, TravelDB} from '@/lib/types'

export const travelMock: Travel = {
    _id: '661a49333f09b9c7385bfa37',
    name: 'Travel Mock',
    description: 'Desc Mock',
    startDate: new Date(),
    endDate: new Date(),
}
export let travelsMock: Travel[] = [travelMock]

export const travelDB = {
    getList: vi.fn(async (name?: string) =>
        name ? travelsMock.filter((t) => t.name.startsWith(name)) : travelsMock,
    ),
    getById: vi.fn(
        async (id: string) => travelsMock.find((t) => t._id === id) ?? null,
    ),
    deleteById: vi.fn(async (id: string) => {
        travelsMock = travelsMock.filter((t) => t._id !== id)
    }),
    create: vi.fn(async (travel: Omit<Travel, '_id'>) => {
        const newTravel = {
            ...travel,
            _id: '661a49333f09b9c7385bfa32',
        } satisfies Travel

        travelsMock.push(newTravel)

        return newTravel
    }),
} satisfies TravelDB
