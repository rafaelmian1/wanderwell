import {afterEach, describe, expect, it, vi} from 'vitest'

import {travelDB, travelsMock} from '@/__mocks__/lib/db/Travel'

import {makeTravelSdk} from './travel'

const travelSdk = makeTravelSdk(travelDB)

describe('Travel SDK: Get List', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('returns an array', async () => {
        const list = await travelSdk.getList()

        expect(travelDB.getList).toHaveBeenCalledOnce()
        expect(Array.isArray(list)).toBe(true)
    })

    it('returns an empty array when not travels are found', async () => {
        const list = await travelSdk.getList('Trovel')

        expect(travelDB.getList).toHaveBeenCalledOnce()
        expect(travelDB.getList.mock.calls[0][0]).toBe('Trovel')
        expect(list).toMatchObject([])
    })

    it('returns an array with found travels', async () => {
        const list = await travelSdk.getList('Travel')

        expect(travelDB.getList).toHaveBeenCalledOnce()
        expect(travelDB.getList.mock.calls[0][0]).toBe('Travel')
        expect(list).toMatchObject(travelsMock)
    })
})

describe('Travel SDK: Get by ID', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('returns an existent travel', async () => {
        const travel = await travelSdk.getById('661a49333f09b9c7385bfa37')

        expect(travelDB.getById).toHaveBeenCalledOnce()
        expect(travelDB.getById.mock.calls[0][0]).toBe(
            '661a49333f09b9c7385bfa37',
        )
        expect(travel).toMatchObject(travelsMock[0])
    })

    it('returns null when the travel is not found', async () => {
        const travel = await travelSdk.getById('661a49333f09b9c7385bfa39')

        expect(travelDB.getById).toHaveBeenCalledOnce()
        expect(travelDB.getById.mock.calls[0][0]).toBe(
            '661a49333f09b9c7385bfa39',
        )
        expect(travel).toBeNull()
    })
})

describe('Travel SDK: Create', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    const newTravel = {
        name: 'Created Travel',
        description: 'Created desc',
        startDate: new Date(),
        endDate: new Date(),
    }
    it('returns the created travel', async () => {
        const travel = await travelSdk.create(newTravel)

        expect(travelDB.create).toHaveBeenCalledOnce()
        expect(travelDB.create.mock.calls[0][0]).toBe(newTravel)
        expect(travel).toMatchObject({
            id: '661a49333f09b9c7385bfa32',
            ...newTravel,
        })
    })

    it('returns new travel in the list', async () => {
        const created = await travelSdk.create(newTravel)

        const travels = await travelSdk.getList()

        expect(travelDB.create).toHaveBeenCalledOnce()
        expect(travelDB.getList).toHaveBeenCalledOnce()

        const travel = travels.find((t) => t.name === newTravel.name)

        expect(travel).toBeDefined()
        expect(travel).toMatchObject(created)
    })

    it('returns new travel by id', async () => {
        const created = await travelSdk.create(newTravel)

        const travel = await travelSdk.getById('661a49333f09b9c7385bfa32')

        expect(travelDB.create).toHaveBeenCalledOnce()
        expect(travelDB.getById).toHaveBeenCalledOnce()

        expect(travel).toBeDefined()
        expect(travel).toMatchObject(created)
    })
})

describe('Travel SDK: Delete', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('deletes travel from the list', async () => {
        await travelSdk.deleteById('661a49333f09b9c7385bfa37')

        const travels = await travelSdk.getList()

        expect(travelDB.deleteById).toHaveBeenCalledOnce()
        expect(travelDB.getList).toHaveBeenCalledOnce()

        const travel = travels.find((t) => t.id === '661a49333f09b9c7385bfa37')

        expect(travel).toBeUndefined()
    })

    it('deletes travel from the list', async () => {
        await travelSdk.deleteById('661a49333f09b9c7385bfa37')

        const travel = await travelSdk.getById('661a49333f09b9c7385bfa37')

        expect(travelDB.deleteById).toHaveBeenCalledOnce()
        expect(travelDB.getById).toHaveBeenCalledOnce()

        expect(travel).toBeNull()
    })
})
