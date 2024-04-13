import {z} from 'zod'

export const baseTravelSchema = z.object({
    _id: z.string(),
    name: z.string().max(64),
    description: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
})

export type Travel = z.TypeOf<typeof baseTravelSchema>

export type TravelDB = {
    getList: (name?: string) => Promise<Travel[]>
    getById: (id: string) => Promise<Travel | null>
    create: (travel: Omit<Travel, '_id'>) => Promise<Travel>
    deleteById: (id: string) => Promise<void>
}
