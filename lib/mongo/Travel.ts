import mongoose from 'mongoose'

import {parseDbTravel, type Travel, type TravelDB} from '@/lib/types'

import {connectMongoDB} from './connection'

const travelSchema = new mongoose.Schema<Travel>({
    name: {type: String, required: true},
    description: {type: String, required: false},
    startDate: {type: Date, required: false},
    endDate: {type: Date, required: false},
})

const TravelModel =
    mongoose.models.Travel || mongoose.model('Travel', travelSchema)

export const travelDB: TravelDB = {
    getList: async (name?: string) => {
        const query = name ? {name} : {}
        const list = await TravelModel.find(query).lean()

        return list.map(parseDbTravel)
    },
    getById: async (id: string) => {
        const travel = await TravelModel.findById(id).lean()

        if (!travel) return null

        return parseDbTravel(travel as Travel & {_id: string})
    },
    create: async (data: Travel) => {
        const created = await TravelModel.create(data)

        return parseDbTravel(created.toObject())
    },
    deleteById: async (id: string) => {
        await TravelModel.deleteOne({_id: id})
    },
}

connectMongoDB()
