import {redirect} from 'next/navigation'

import {Button} from '@/lib/components'
import {travelSdk} from '@/lib/sdk'
import {Travel} from '@/lib/types'

export default async function Page() {
    const createTravel = async (formData: FormData) => {
        'use server'

        const travel = {
            name: formData.get('name'),
            description: formData.get('description'),
            startDate: formData.get('startDate') ?? undefined,
            endDate: formData.get('endDate') ?? undefined,
        } as Travel

        await travelSdk.create(travel)
        redirect('/')
    }

    return (
        <>
            <h1 className='text-xl'>Add a travel</h1>
            <form action={createTravel} className='my-8 mx-auto flex flex-col'>
                <fieldset className='mb-2 flex flex-col'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='text-white bg-gray-700 border-none focus:outline-none p-2 rounded-md'
                        type='text'
                        name='name'
                        required
                    />
                </fieldset>

                <fieldset className='mb-2 flex flex-col'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        className='text-white bg-gray-700 border-none focus:outline-none p-2 rounded-md h-20'
                        name='description'
                    />
                </fieldset>

                <fieldset className='mb-2 flex flex-col'>
                    <label htmlFor='startDate'>Start Date</label>
                    <input
                        className='text-white bg-gray-700 border-none focus:outline-none p-2 rounded-md'
                        type='date'
                        name='startDate'
                    />
                </fieldset>

                <fieldset className='mb-2 flex flex-col'>
                    <label htmlFor='endDate'>End Date</label>
                    <input
                        className='text-white bg-gray-700 border-none focus:outline-none p-2 rounded-md'
                        type='date'
                        name='endDate'
                    />
                </fieldset>

                <Button type='submit'>Create Travel</Button>
            </form>
        </>
    )
}
