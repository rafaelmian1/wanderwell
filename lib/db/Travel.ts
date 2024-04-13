import mongoose from 'mongoose'

import type {Travel, TravelDB} from '@/lib/types'

import {connectMongoDB} from './connection'

const travelSchema = new mongoose.Schema<Travel>({
    name: {type: String, required: true},
    description: {type: String, required: false},
    startDate: {type: Date, required: false},
    endDate: {type: Date, required: false},
})

const TravelModel =
    mongoose.models.Travel || mongoose.model('Travel', travelSchema)

export const travelDB = {
    getList: async (name?: string): Promise<Travel[]> => {
        const query = name ? {name} : {}
        const list = await TravelModel.find(query).lean()

        return list as Travel[]
    },
    getById: async (id: string): Promise<Travel> => {
        const travel = await TravelModel.findById(id).lean()

        return travel as Travel
    },
    create: async (data: Omit<Travel, '_id'>): Promise<Travel> => {
        const created = await TravelModel.create(data)

        return created.toObject()
    },
    deleteById: async (id: string) => {
        await TravelModel.deleteOne({_id: id})
    },
} satisfies TravelDB

connectMongoDB()
