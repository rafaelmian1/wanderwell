import {z} from 'zod'

export const baseTravelSchema = z.object({
    name: z.string().max(64),
    description: z.string().nullish(),
    startDate: z.date().nullish(),
    endDate: z.date().nullish(),
})

export const dbTravelSchema = baseTravelSchema.and(z.object({id: z.string()}))

export type Travel = z.TypeOf<typeof baseTravelSchema>
export type DbTravel = z.TypeOf<typeof dbTravelSchema>

export const parseDbTravel = (
    candidate: Record<string, unknown>,
): DbTravel | never => {
    if (typeof candidate !== 'object')
        throw new Error(`Travel parsing error: invalid candidate type`)

    const normalizeDate = (candidate: unknown): Date | undefined => {
        return z
            .date()
            .parse(
                typeof candidate === 'string' ? new Date(candidate) : candidate,
            )
    }

    const normalized = {
        ...candidate,
        id: candidate?.id ?? candidate?._id?.toString(),
        startDate: normalizeDate(candidate?.startDate),
        endDate: normalizeDate(candidate?.endDate),
    }

    const {error, data} = dbTravelSchema.safeParse(normalized)

    if (error)
        throw new Error(
            `Travel parsing error:\n ${JSON.stringify(error, null, 2)}`,
        )

    return data
}

export type TravelDB = {
    getList: (name?: string) => Promise<DbTravel[]>
    getById: (id: string) => Promise<DbTravel | null>
    create: (travel: Travel) => Promise<DbTravel>
    deleteById: (id: string) => Promise<void>
}
